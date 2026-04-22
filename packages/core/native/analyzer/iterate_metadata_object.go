package analyzer

import (
	"os"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

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
		if syntaxProperties, syntaxDynamic, syntaxSchema, found, ok := a.syntaxObjectProperties(t); !ok {
			delete(a.visitingObjects, key)
			return false
		} else if found {
			obj.Properties = syntaxProperties
			indexProperties = syntaxDynamic
			indexSchema = syntaxSchema
		}
		obj.DynamicProperties = indexProperties
		obj.AdditionalProperties = indexSchema
		if len(obj.Properties) == 0 {
			// Populate properties only once; subsequent references share the
			// same ObjectType pointer.
			properties := shimchecker.Checker_getPropertiesOfType(a.Checker, t)
			if len(properties) == 0 {
				properties = shimchecker.Checker_getApparentProperties(a.Checker, t)
			}
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
			obj.Properties = make([]*metadata.Property, 0, len(properties))
			for _, sym := range properties {
				if sym == nil {
					continue
				}
				if symbolHasInternalJsDoc(sym) {
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
				})
			}
		}
	}
	out.Objects = append(out.Objects, &metadata.ObjectRef{Type: obj})
	delete(a.visitingObjects, key)
	return true
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
				valueSchema, ok := a.walkTypeNode(prop.Type)
				if !ok {
					if debugArrayAny {
						debugArrayAnyWrite("  walkTypeNode failed for " + keyName)
					}
					return nil, nil, nil, false, false
				}
				if prop.PostfixToken != nil {
					valueSchema.Optional = true
					valueSchema.Required = false
				}
				keySchema := metadata.NewSchema()
				keySchema.AddConstant(metadata.AtomicString, keyName)
				properties = append(properties, &metadata.Property{
					Key:   keySchema,
					Value: valueSchema,
				})
				if debugArrayAny {
					debugArrayAnyWrite("  syntaxProp=" + keyName)
				}
				found = true
			case ast.KindMethodSignature:
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
				keySchema := metadata.NewSchema()
				keySchema.AddConstant(metadata.AtomicString, keyName)
				properties = append(properties, &metadata.Property{
					Key:   keySchema,
					Value: valueSchema,
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
				keySchema, ok := a.walkTypeNode(paramDecl.Type)
				if !ok || !supportsObjectIndexKey(keySchema) {
					return nil, nil, nil, false, false
				}
				valueSchema, ok := a.walkTypeNode(index.Type)
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
	applyCommentTags(schema, propertyDeclaration(sym))
	return schema, true
}

func (a *Analyzer) methodSignatureSchema(decl *ast.MethodSignatureDeclaration) (*metadata.Schema, bool) {
	if decl == nil {
		return nil, false
	}
	return a.methodLikeSchema(decl.Parameters, decl.Type)
}

func (a *Analyzer) methodDeclarationSchema(decl *ast.MethodDeclaration) (*metadata.Schema, bool) {
	if decl == nil {
		return nil, false
	}
	return a.methodLikeSchema(decl.Parameters, decl.Type)
}

func (a *Analyzer) methodLikeSchema(parameters *ast.NodeList, returnType *ast.Node) (*metadata.Schema, bool) {
	fn := &metadata.Function{
		Parameters: make([]*metadata.Parameter, 0),
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
			fn.Parameters = append(fn.Parameters, &metadata.Parameter{
				Name:     name,
				Type:     schema,
				Optional: optional,
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
