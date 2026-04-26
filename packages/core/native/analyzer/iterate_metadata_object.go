package analyzer

import (
	"os"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/metadata"
)

func debugArrayAnyEnabled(name string) bool {
	return os.Getenv("TYPIA_DEBUG_ARRAY_ANY") == "1" && strings.Contains(name, "ArrayAny")
}

func debugArrayAnyWrite(line string) {
	f, err := os.OpenFile("/tmp/typia-arrayany.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o644)
	if err != nil {
		return
	}
	defer f.Close()
	_, _ = f.WriteString(line + "\n")
}

// iterateObject ports `iterate_metadata_object.ts` +
// `emplace_metadata_object.ts`. Walks every property via
// GetPropertiesOfType and recursively analyses each property's type, using
// the Collection to dedupe so recursive structures close under one
// ObjectType pointer.
func (a *Analyzer) iterateObject(out *metadata.Schema, t *shimchecker.Type) bool {
	key := typeKey(t)
	// Already visiting this type — register a back-reference to avoid
	// infinite recursion on self-referential structures.
	if existing, ok := a.visitingObjects[key]; ok {
		existing.Recursive = true
		out.Objects = append(out.Objects, &metadata.ObjectRef{Type: existing})
		return true
	}

	name := typeName(a.Checker, t)
	obj, fresh := a.Collection.EmplaceObject(key, name)
	a.visitingObjects[key] = obj
	debugArrayAny := debugArrayAnyEnabled(name)

	if fresh {
		indexProperties, indexSchema, ok := a.indexProperties(t)
		if !ok {
			delete(a.visitingObjects, key)
			return false
		}
		properties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
		if len(properties) == 0 {
			properties = shimchecker.Checker_getApparentProperties(a.Checker, t)
		}
		internalNames := syntaxInternalPropertyNames(a.Checker, t)
		syntaxProperties, syntaxDynamic, syntaxSchema, syntaxFound, ok := a.syntaxObjectProperties(t)
		if !ok {
			delete(a.visitingObjects, key)
			return false
		}
		if obj.Description == nil {
			obj.Description = objectDescription(a.Checker, t)
		}
		if syntaxFound {
			obj.Properties = append(obj.Properties, syntaxProperties...)
			if len(syntaxDynamic) != 0 {
				indexProperties = syntaxDynamic
			}
			if syntaxSchema != nil {
				if indexSchema == nil {
					indexSchema = syntaxSchema
				} else {
					mergeInto(indexSchema, syntaxSchema)
				}
			}
		}
		obj.DynamicProperties = indexProperties
		obj.AdditionalProperties = indexSchema
		hydrateObjectPropertyDescriptions(a.Checker, t, obj)
		// Populate properties only once; subsequent references share the
		// same ObjectType pointer. Syntax-derived properties are the most
		// faithful source for JSDoc tags/internal markers, then checker-only
		// properties backfill inherited or synthesized members.
		if debugArrayAny {
			debugArrayAnyWrite("iterateObject name=" + name + " checkerProps=" + intToString(int64(len(properties))))
			for i, sym := range properties {
				if sym == nil {
					debugArrayAnyWrite("  checkerProp[" + intToString(int64(i)) + "]=<nil>")
					continue
				}
				debugArrayAnyWrite("  checkerProp[" + intToString(int64(i)) + "]=" + sym.Name)
			}
		}
		if obj.Properties == nil {
			obj.Properties = make([]*metadata.Property, 0, len(properties))
		}
		existing := make(map[string]bool, len(obj.Properties))
		for _, prop := range obj.Properties {
			if prop == nil || prop.Key == nil {
				continue
			}
			if key, ok := prop.Key.GetSoleLiteral(); ok {
				existing[key] = true
			}
		}
		for _, sym := range properties {
			if sym == nil {
				continue
			}
			if existing[sym.Name] ||
				internalNames[sym.Name] ||
				symbolHasInternalJsDoc(sym) ||
				symbolShouldSkipObjectProperty(sym, a.Options.Functional) {
				continue
			}
			valueSchema, ok := a.propertySchema(t, sym)
			if !ok {
				delete(a.visitingObjects, key)
				return false
			}
			if sym.Flags&ast.SymbolFlagsOptional != 0 {
				valueSchema.Optional = true
				valueSchema.Required = false
			}
			keySchema := metadata.NewSchema()
			keySchema.AddConstant(metadata.AtomicString, sym.Name)
			description := symbolDescription(sym)
			for _, fn := range valueSchema.Functions {
				if fn != nil && fn.Description == nil {
					fn.Description = description
				}
			}
			obj.Properties = append(obj.Properties, &metadata.Property{
				Key:         keySchema,
				Value:       valueSchema,
				Description: description,
				JsDocTags:   jsDocTagsFromSymbol(sym),
				JsDocTexts:  jsDocTextsFromSymbol(sym),
			})
			existing[sym.Name] = true
		}
	}
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	delete(a.visitingObjects, key)
	return true
}

func hydrateObjectPropertyDescriptions(
	checker *shimchecker.Checker,
	parent *shimchecker.Type,
	obj *metadata.ObjectType,
) {
	if checker == nil || parent == nil || obj == nil || len(obj.Properties) == 0 {
		return
	}
	index := map[string]*metadata.Property{}
	for _, property := range obj.Properties {
		if property == nil || property.Key == nil {
			continue
		}
		key, ok := property.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		index[key] = property
	}
	if len(index) == 0 {
		return
	}
	properties := shimchecker.Checker_getPropertiesOfType(checker, parent)
	if len(properties) == 0 {
		properties = shimchecker.Checker_getApparentProperties(checker, parent)
	}
	for _, sym := range properties {
		if sym == nil {
			continue
		}
		property, ok := index[sym.Name]
		if !ok {
			continue
		}
		description := symbolDescription(sym)
		if property.Description == nil {
			property.Description = description
		}
		if property.Value == nil {
			continue
		}
		for _, fn := range property.Value.Functions {
			if fn != nil && fn.Description == nil {
				fn.Description = description
			}
		}
	}
}

func (a *Analyzer) indexProperties(t *shimchecker.Type) ([]*metadata.Property, *metadata.Schema, bool) {
	if a == nil || a.Checker == nil || t == nil {
		return nil, nil, true
	}
	indexInfos := shimchecker.Checker_getIndexInfosOfType(a.Checker, t)
	if len(indexInfos) == 0 {
		return nil, nil, true
	}
	properties := make([]*metadata.Property, 0, len(indexInfos))
	out := metadata.NewSchema()
	seen := 0
	for _, info := range indexInfos {
		if info == nil || info.KeyType() == nil || info.ValueType() == nil {
			continue
		}
		keySchema, ok := a.WalkWithTypeNode(info.KeyType(), nil)
		if !ok || !supportsObjectIndexKey(keySchema) {
			return nil, nil, false
		}
		schema, ok := a.WalkWithTypeNode(info.ValueType(), nil)
		if !ok {
			return nil, nil, false
		}
		properties = append(properties, &metadata.Property{
			Key:   keySchema,
			Value: schema,
		})
		mergeInto(out, schema)
		seen++
	}
	if seen == 0 || out.Empty() {
		return properties, nil, true
	}
	return properties, out, true
}

func (a *Analyzer) syntaxObjectProperties(t *shimchecker.Type) ([]*metadata.Property, []*metadata.Property, *metadata.Schema, bool, bool) {
	if t == nil || t.Symbol() == nil {
		return nil, nil, nil, false, true
	}
	debugArrayAny := debugArrayAnyEnabled(typeName(a.Checker, t))
	symbols := map[string]*ast.Symbol{}
	checkerProperties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
	if len(checkerProperties) == 0 {
		checkerProperties = shimchecker.Checker_getApparentProperties(a.Checker, t)
	}
	for _, sym := range checkerProperties {
		if sym != nil && sym.Name != "" {
			symbols[sym.Name] = sym
		}
	}
	properties := make([]*metadata.Property, 0)
	dynamicProperties := make([]*metadata.Property, 0)
	additional := metadata.NewSchema()
	found := false
	decls := relatedDeclarations(a.Checker, t.Symbol(), shimchecker.Type_getTypeNameSymbol(t))
	if debugArrayAny {
		debugArrayAnyWrite("syntaxObjectProperties decls=" + intToString(int64(len(decls))))
		for i, decl := range decls {
			if decl == nil {
				debugArrayAnyWrite("  decl[" + intToString(int64(i)) + "]=<nil>")
				continue
			}
			debugArrayAnyWrite("  decl[" + intToString(int64(i)) + "].kind=" + intToString(int64(decl.Kind)))
		}
	}
	for _, decl := range decls {
		if decl == nil || decl.Kind != ast.KindInterfaceDeclaration {
			continue
		}
		iface := decl.AsInterfaceDeclaration()
		if iface == nil || iface.Members == nil {
			continue
		}
		if debugArrayAny {
			debugArrayAnyWrite("  interfaceMembers=" + intToString(int64(len(iface.Members.Nodes))))
			for i, member := range iface.Members.Nodes {
				if member == nil {
					debugArrayAnyWrite("    member[" + intToString(int64(i)) + "]=<nil>")
					continue
				}
				debugArrayAnyWrite("    member[" + intToString(int64(i)) + "].kind=" + intToString(int64(member.Kind)))
			}
		}
		for _, member := range iface.Members.Nodes {
			if member == nil {
				continue
			}
			switch member.Kind {
			case ast.KindPropertySignature:
				prop := member.AsPropertySignatureDeclaration()
				if prop == nil || prop.Type == nil {
					return nil, nil, nil, false, false
				}
				keyName, ok := propertyNameText(member.Name())
				if !ok {
					if debugArrayAny {
						debugArrayAnyWrite("  propertyNameText failed")
					}
					return nil, nil, nil, false, false
				}
				if debugArrayAny {
					debugArrayAnyWrite("  visitingProp=" + keyName)
				}
				if nodeHasJsDocTag(member, "internal") {
					continue
				}
				valueSchema := (*metadata.Schema)(nil)
				if sym, ok := symbols[keyName]; ok {
					if symbolHasInternalJsDoc(sym) {
						continue
					}
					valueSchema, ok = a.propertySchema(t, sym)
				} else {
					valueSchema, ok = a.WalkWithTypeNode(a.Checker.GetTypeFromTypeNode(prop.Type), prop.Type)
					if ok {
						applyCommentTags(valueSchema, member)
					}
				}
				if !ok {
					if debugArrayAny {
						debugArrayAnyWrite("  walkTypeNode failed for " + keyName)
					}
					return nil, nil, nil, false, false
				}
				if valueSchema == nil {
					if debugArrayAny {
						debugArrayAnyWrite("  nil schema for " + keyName)
					}
					return nil, nil, nil, false, false
				}
				if prop.PostfixToken != nil {
					valueSchema.Optional = true
					valueSchema.Required = false
				}
				description := nodeDescription(member)
				if description == nil {
					if sym, ok := symbols[keyName]; ok {
						description = symbolDescription(sym)
					}
				}
				for _, fn := range valueSchema.Functions {
					if fn != nil && fn.Description == nil {
						fn.Description = description
					}
				}
				keySchema := metadata.NewSchema()
				keySchema.AddConstant(metadata.AtomicString, keyName)
				properties = append(properties, &metadata.Property{
					Key:         keySchema,
					Value:       valueSchema,
					Description: description,
					JsDocTags:   nodeJsDocTagNames(member),
					JsDocTexts:  nodeJsDocTexts(member),
				})
				if debugArrayAny {
					debugArrayAnyWrite("  syntaxProp=" + keyName)
				}
				found = true
			case ast.KindMethodSignature:
				if !a.Options.Functional {
					continue
				}
				method := member.AsMethodSignatureDeclaration()
				if method == nil {
					return nil, nil, nil, false, false
				}
				keyName, ok := propertyNameText(member.Name())
				if !ok {
					return nil, nil, nil, false, false
				}
				valueSchema, ok := a.methodSignatureSchema(method)
				if !ok {
					return nil, nil, nil, false, false
				}
				description := nodeDescription(member)
				if description == nil {
					if sym, ok := symbols[keyName]; ok {
						description = symbolDescription(sym)
					}
				}
				for _, fn := range valueSchema.Functions {
					if fn != nil && fn.Description == nil {
						fn.Description = description
					}
				}
				keySchema := metadata.NewSchema()
				keySchema.AddConstant(metadata.AtomicString, keyName)
				properties = append(properties, &metadata.Property{
					Key:         keySchema,
					Value:       valueSchema,
					Description: description,
					JsDocTags:   nodeJsDocTagNames(member),
					JsDocTexts:  nodeJsDocTexts(member),
				})
				found = true
			case ast.KindIndexSignature:
				index := member.AsIndexSignatureDeclaration()
				if index == nil || index.Type == nil || index.Parameters == nil || len(index.Parameters.Nodes) == 0 {
					return nil, nil, nil, false, false
				}
				parameter := index.Parameters.Nodes[0]
				if parameter == nil || parameter.Kind != ast.KindParameter {
					return nil, nil, nil, false, false
				}
				paramDecl := parameter.AsParameterDeclaration()
				if paramDecl == nil || paramDecl.Type == nil {
					return nil, nil, nil, false, false
				}
				keySchema, ok := a.WalkWithTypeNode(a.Checker.GetTypeFromTypeNode(paramDecl.Type), paramDecl.Type)
				if !ok || !supportsObjectIndexKey(keySchema) {
					return nil, nil, nil, false, false
				}
				valueSchema, ok := a.WalkWithTypeNode(a.Checker.GetTypeFromTypeNode(index.Type), index.Type)
				if !ok {
					return nil, nil, nil, false, false
				}
				dynamicProperties = append(dynamicProperties, &metadata.Property{
					Key:   keySchema,
					Value: valueSchema,
				})
				mergeInto(additional, valueSchema)
				found = true
			}
		}
	}
	if !found || additional.Empty() {
		return properties, dynamicProperties, nil, found, true
	}
	return properties, dynamicProperties, additional, true, true
}

func syntaxInternalPropertyNames(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
) map[string]bool {
	if t == nil || t.Symbol() == nil {
		return nil
	}
	out := map[string]bool{}
	for _, decl := range relatedDeclarations(checker, t.Symbol(), shimchecker.Type_getTypeNameSymbol(t)) {
		if decl == nil || decl.Kind != ast.KindInterfaceDeclaration {
			continue
		}
		iface := decl.AsInterfaceDeclaration()
		if iface == nil || iface.Members == nil {
			continue
		}
		for _, member := range iface.Members.Nodes {
			if member == nil || member.Kind != ast.KindPropertySignature || !nodeHasJsDocTag(member, "internal") {
				continue
			}
			if key, ok := propertyNameText(member.Name()); ok && key != "" {
				out[key] = true
			}
		}
	}
	return out
}

func supportsObjectIndexKey(schema *metadata.Schema) bool {
	if schema == nil || schema.Empty() {
		return false
	}
	for _, native := range schema.Natives {
		switch native.Name {
		case "Boolean", "BigInt", "Number", "String":
			continue
		default:
			return false
		}
	}
	return len(schema.Arrays) == 0 &&
		len(schema.Tuples) == 0 &&
		len(schema.Objects) == 0 &&
		len(schema.Aliases) == 0 &&
		len(schema.Sets) == 0 &&
		len(schema.Maps) == 0 &&
		len(schema.Functions) == 0 &&
		schema.Escaped == nil
}

func (a *Analyzer) propertySchema(parent *shimchecker.Type, sym *ast.Symbol) (*metadata.Schema, bool) {
	if sym == nil {
		return nil, false
	}
	for _, decl := range sym.Declarations {
		if decl == nil {
			continue
		}
		if decl.Kind == ast.KindMethodSignature {
			if fn, ok := a.methodSignatureSchema(decl.AsMethodSignatureDeclaration()); ok {
				return fn, true
			}
			continue
		}
		if decl.Kind == ast.KindMethodDeclaration {
			if fn, ok := a.methodDeclarationSchema(decl.AsMethodDeclaration()); ok {
				return fn, true
			}
		}
	}
	propType := propertySymbolType(a.Checker, parent, sym)
	if propType == nil {
		return nil, false
	}
	schema, ok := a.WalkWithTypeNode(propType, propertyTypeNode(sym))
	if !ok {
		return nil, false
	}
	decl := propertyDeclaration(sym)
	applyCommentTags(schema, decl)
	applyFunctionParameterDescriptionsFromDeclaration(schema, decl)
	return schema, true
}

func applyFunctionParameterDescriptionsFromDeclaration(schema *metadata.Schema, decl *ast.Node) {
	if schema == nil || decl == nil || len(schema.Functions) == 0 {
		return
	}
	var parameters *ast.NodeList
	switch decl.Kind {
	case ast.KindMethodDeclaration:
		if method := decl.AsMethodDeclaration(); method != nil {
			parameters = method.Parameters
		}
	case ast.KindMethodSignature:
		if method := decl.AsMethodSignatureDeclaration(); method != nil {
			parameters = method.Parameters
		}
	default:
		return
	}
	if parameters == nil {
		return
	}
	ownerTexts := nodeJsDocTexts(decl)
	parameterNodes := make([]*ast.Node, 0, len(parameters.Nodes))
	for _, node := range parameters.Nodes {
		if node != nil && node.Kind == ast.KindParameter {
			parameterNodes = append(parameterNodes, node)
		}
	}
	if len(parameterNodes) == 0 {
		return
	}
	for _, fn := range schema.Functions {
		if fn == nil {
			continue
		}
		for i, paramMetadata := range fn.Parameters {
			if paramMetadata == nil || paramMetadata.Description != nil || i >= len(parameterNodes) {
				continue
			}
			node := parameterNodes[i]
			name := paramMetadata.Name
			if decl := node.AsParameterDeclaration(); decl != nil && decl.Name() != nil {
				if text, ok := propertyNameText(decl.Name()); ok {
					name = text
				}
			}
			if text := parameterDescriptionFromMethodJsDoc(ownerTexts, name, len(parameterNodes) == 1); text != "" {
				paramMetadata.Description = &text
			}
		}
	}
}

func symbolShouldSkipObjectProperty(sym *ast.Symbol, functional bool) bool {
	if sym == nil {
		return true
	}
	for _, decl := range sym.Declarations {
		if decl == nil {
			continue
		}
		switch decl.Kind {
		case ast.KindMethodDeclaration, ast.KindMethodSignature:
			if !functional {
				return true
			}
		}
		raw := strings.TrimSpace(shimscanner.GetTextOfNode(decl))
		if strings.HasPrefix(raw, "private ") ||
			strings.HasPrefix(raw, "protected ") ||
			strings.HasPrefix(raw, "static ") ||
			strings.HasPrefix(raw, "private\n") ||
			strings.HasPrefix(raw, "protected\n") ||
			strings.HasPrefix(raw, "static\n") {
			return true
		}
	}
	return false
}

func (a *Analyzer) methodSignatureSchema(decl *ast.MethodSignatureDeclaration) (*metadata.Schema, bool) {
	if decl == nil {
		return nil, false
	}
	return a.methodLikeSchema(decl.AsNode(), decl.Parameters, decl.Type)
}

func (a *Analyzer) methodDeclarationSchema(decl *ast.MethodDeclaration) (*metadata.Schema, bool) {
	if decl == nil {
		return nil, false
	}
	return a.methodLikeSchema(decl.AsNode(), decl.Parameters, decl.Type)
}

func (a *Analyzer) methodLikeSchema(owner *ast.Node, parameters *ast.NodeList, returnType *ast.Node) (*metadata.Schema, bool) {
	fn := &metadata.Function{
		Parameters: make([]*metadata.Parameter, 0),
	}
	ownerJsDocTexts := nodeJsDocTexts(owner)
	parameterCount := 0
	if parameters != nil {
		for _, node := range parameters.Nodes {
			if node != nil && node.Kind == ast.KindParameter {
				parameterCount++
			}
		}
	}
	if parameters != nil {
		for _, node := range parameters.Nodes {
			if node == nil || node.Kind != ast.KindParameter {
				continue
			}
			param := node.AsParameterDeclaration()
			if param == nil || param.Type == nil {
				return nil, false
			}
			schema, ok := a.walkTypeNode(param.Type)
			if !ok {
				return nil, false
			}
			optional := param.QuestionToken != nil
			if optional {
				schema.Optional = true
				schema.Required = false
			}
			name := "arg"
			if param.Name() != nil {
				if text, ok := propertyNameText(param.Name()); ok {
					name = text
				}
			}
			description := nodeDescription(node)
			if description == nil {
				if text := parameterDescriptionFromMethodJsDoc(ownerJsDocTexts, name, parameterCount == 1); text != "" {
					description = &text
				}
			}
			fn.Parameters = append(fn.Parameters, &metadata.Parameter{
				Name:        name,
				Type:        schema,
				Description: description,
				Optional:    optional,
				JsDocTags:   nodeJsDocTagNames(node),
				JsDocTexts:  nodeJsDocTexts(node),
			})
		}
	}
	if returnType != nil {
		schema, ok := a.walkTypeNode(returnType)
		if !ok {
			return nil, false
		}
		fn.Output = schema
	}
	out := metadata.NewSchema()
	out.Functions = append(out.Functions, fn)
	return out, true
}

func propertySymbolType(
	checker *shimchecker.Checker,
	parent *shimchecker.Type,
	sym *ast.Symbol,
) *shimchecker.Type {
	if checker == nil || sym == nil {
		return nil
	}
	if declarations := sym.Declarations; len(declarations) != 0 && declarations[0] != nil {
		if t := shimchecker.Checker_getTypeOfSymbolAtLocation(checker, sym, declarations[0]); t != nil {
			return t
		}
	}
	if parent != nil {
		if t := shimchecker.Checker_getTypeOfPropertyOfType(checker, parent, sym.Name); t != nil {
			return t
		}
	}
	return shimchecker.Checker_getTypeOfSymbol(checker, sym)
}

func propertyDeclaration(sym *ast.Symbol) *ast.Node {
	if sym == nil {
		return nil
	}
	if sym.ValueDeclaration != nil {
		return sym.ValueDeclaration
	}
	for _, decl := range sym.Declarations {
		if decl != nil {
			return decl
		}
	}
	return nil
}

func objectDescription(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
) *string {
	if t == nil {
		return nil
	}
	decls := relatedDeclarations(checker, t.Symbol(), shimchecker.Type_getTypeNameSymbol(t))
	for _, decl := range decls {
		if decl == nil {
			continue
		}
		if description := nodeDescription(decl); description != nil {
			return description
		}
	}
	return nil
}
