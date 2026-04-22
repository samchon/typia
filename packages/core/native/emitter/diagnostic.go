package emitter

import (
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

type diagnosticState struct {
	order        []string
	helpers      map[string]string
	objectHelper map[*metadata.ObjectType]string
	arrayHelper  map[*metadata.ArrayType]string
	tupleHelper  map[*metadata.TupleType]string
	visitingObj  map[*metadata.ObjectType]bool
	visitingArr  map[*metadata.ArrayType]bool
	visitingTup  map[*metadata.TupleType]bool
}

func newDiagnosticState() *diagnosticState {
	return &diagnosticState{
		helpers:      make(map[string]string),
		objectHelper: make(map[*metadata.ObjectType]string),
		arrayHelper:  make(map[*metadata.ArrayType]string),
		tupleHelper:  make(map[*metadata.TupleType]string),
		visitingObj:  make(map[*metadata.ObjectType]bool),
		visitingArr:  make(map[*metadata.ArrayType]bool),
		visitingTup:  make(map[*metadata.TupleType]bool),
	}
}

func (s *diagnosticState) emit(schema *metadata.Schema) (string, error) {
	body, err := s.buildErrors("input", `"$input"`, schema)
	if err != nil {
		return "", err
	}
	var b strings.Builder
	b.WriteString("(() => { ")
	b.WriteString(`const __diag = (path, expected, value) => ({ path, expected, value }); `)
	b.WriteString(`const __push = (out, chunk) => { if (chunk.length !== 0) out.push(...chunk); }; `)
	b.WriteString(`const __pick = (chunks) => { let best = []; for (const chunk of chunks) { if (chunk.length !== 0 && (best.length === 0 || chunk.length < best.length)) best = chunk; } return best; }; `)
	b.WriteString(`const __prop = (path, key) => /^[$A-Z_a-z][$0-9A-Z_a-z]*$/.test(key) ? path + "." + key : path + "[" + JSON.stringify(key) + "]"; `)
	for _, name := range s.order {
		b.WriteString("const ")
		b.WriteString(name)
		b.WriteString(" = ")
		b.WriteString(s.helpers[name])
		b.WriteString("; ")
	}
	b.WriteString("return ")
	b.WriteString(body)
	b.WriteString("; })()")
	return b.String(), nil
}

func (s *diagnosticState) buildErrors(ve, path string, schema *metadata.Schema) (string, error) {
	if schema == nil || schema.Any {
		return "[]", nil
	}
	okExpr, err := diagnosticIsExpr(ve, schema)
	if err != nil {
		return "", err
	}
	typeName := jsonQuote(schema.Name())
	var cases []string
	if schema.Nullable {
		cases = append(cases, "(null === "+ve+" ? [] : null)")
	}
	if !schema.IsRequired() {
		cases = append(cases, "(undefined === "+ve+" ? [] : null)")
	}
	if len(schema.Objects) != 0 {
		objectCase, err := s.emitObjectUnionErrors(ve, path, typeName, schema.Objects)
		if err != nil {
			return "", err
		}
		cases = append(cases, objectCase)
	}
	if len(schema.Arrays) != 0 {
		arrayCase, err := s.emitArrayUnionErrors(ve, path, typeName, schema.Arrays)
		if err != nil {
			return "", err
		}
		cases = append(cases, arrayCase)
	}
	if len(schema.Tuples) != 0 {
		chunks := make([]string, 0, len(schema.Tuples))
		for _, ref := range schema.Tuples {
			chunk, err := s.emitTupleErrors(ve, path, ref)
			if err != nil {
				return "", err
			}
			chunks = append(chunks, chunk)
		}
		cases = append(cases, `(Array.isArray(`+ve+`) ? __pick([`+strings.Join(chunks, ", ")+`]) : null)`)
	}
	if len(schema.Maps) != 0 {
		mapCase, err := s.emitMapUnionErrors(ve, path, typeName, schema.Maps)
		if err != nil {
			return "", err
		}
		cases = append(cases, mapCase)
	}
	if len(schema.Sets) != 0 {
		setCase, err := s.emitSetUnionErrors(ve, path, typeName, schema.Sets)
		if err != nil {
			return "", err
		}
		cases = append(cases, setCase)
	}
	if len(schema.Functions) != 0 {
		cases = append(cases, `("function" === typeof `+ve+` ? [] : null)`)
	}
	if len(schema.Natives) != 0 {
		chunks := make([]string, 0, len(schema.Natives))
		for _, native := range schema.Natives {
			chunks = append(chunks, `(`+ve+` instanceof `+native.Name+` ? [] : [__diag(`+path+`, `+jsonQuote(native.Name)+`, `+ve+`)])`)
		}
		cases = append(cases, `__pick([`+strings.Join(chunks, ", ")+`])`)
	}
	if len(schema.Templates) != 0 {
		checks := make([]string, 0, len(schema.Templates))
		for _, tpl := range schema.Templates {
			if expr := templateCheck(ve, tpl); expr != "" {
				checks = append(checks, expr)
			}
		}
		if len(checks) != 0 {
			cases = append(cases, `("string" === typeof `+ve+` && (`+strings.Join(checks, ` || `)+`) ? [] : null)`)
		}
	}
	primitiveFallback := `[__diag(` + path + `, ` + typeName + `, ` + ve + `)]`

	var b strings.Builder
	b.WriteString("(() => { ")
	b.WriteString("if (")
	b.WriteString(okExpr)
	b.WriteString(") return []; ")
	for i, cond := range cases {
		name := fmt.Sprintf("__candidate_%d", i)
		b.WriteString("const ")
		b.WriteString(name)
		b.WriteString(" = ")
		b.WriteString(cond)
		b.WriteString("; if (")
		b.WriteString(name)
		b.WriteString(" !== null) return ")
		b.WriteString(name)
		b.WriteString("; ")
	}
	b.WriteString("return ")
	b.WriteString(primitiveFallback)
	b.WriteString("; })()")
	return b.String(), nil
}

func (s *diagnosticState) emitObjectErrors(ve, path string, ref *metadata.ObjectRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "[]", nil
	}
	obj := ref.Type
	name, ok := s.objectHelper[obj]
	if ok && !s.visitingObj[obj] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	if !ok {
		name = s.reserveObjectHelper(obj)
	}
	if s.visitingObj[obj] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	s.visitingObj[obj] = true
	defer delete(s.visitingObj, obj)

	body, err := s.objectBody(obj)
	if err != nil {
		return "", err
	}
	s.helpers[name] = "(v, p) => " + body
	return name + "(" + ve + ", " + path + ")", nil
}

func (s *diagnosticState) emitObjectUnionErrors(
	ve string,
	path string,
	typeName string,
	refs []*metadata.ObjectRef,
) (string, error) {
	if len(refs) == 1 {
		return s.emitObjectErrors(ve, path, refs[0])
	}
	chunks := make([]string, 0, len(refs))
	for _, ref := range refs {
		chunk, err := s.emitObjectErrors(ve, path, ref)
		if err != nil {
			return "", err
		}
		chunks = append(chunks, chunk)
	}
	specialized, remained := objectUnionSpecializers(refs)
	if len(specialized) == 0 {
		return `("object" === typeof ` + ve + ` && null !== ` + ve + ` && false === Array.isArray(` + ve + `) ? [__diag(` + path + `, ` + typeName + `, ` + ve + `)] : null)`, nil
	}

	var remainedExpr string
	if len(remained) != 0 {
		var err error
		remainedExpr, err = s.emitObjectUnionErrors(ve, path, typeName, remained)
		if err != nil {
			return "", err
		}
	}

	var b strings.Builder
	b.WriteString(`("object" === typeof `)
	b.WriteString(ve)
	b.WriteString(` && null !== `)
	b.WriteString(ve)
	b.WriteString(` && false === Array.isArray(`)
	b.WriteString(ve)
	b.WriteString(`) ? (() => { const __matched = []; `)
	for _, spec := range specialized {
		accessor := accessProperty(ve, spec.key)
		predicate := `undefined !== ` + accessor
		if spec.neighbor {
			expr, err := diagnosticDiscriminatorExpr(accessor, spec.value)
			if err != nil {
				return "", err
			}
			predicate = expr
		}
		chunk, err := s.emitObjectErrors(ve, path, spec.ref)
		if err != nil {
			return "", err
		}
		b.WriteString("if (")
		b.WriteString(predicate)
		b.WriteString(") __matched.push(")
		b.WriteString(chunk)
		b.WriteString("); ")
	}
	b.WriteString(`if (__matched.length === 1) return __matched[0]; `)
	b.WriteString(`if (__matched.length > 1) return __pick(__matched); `)
	if remainedExpr != "" {
		b.WriteString("return ")
		b.WriteString(remainedExpr)
		b.WriteString("; ")
	} else {
		b.WriteString("return [__diag(")
		b.WriteString(path)
		b.WriteString(", ")
		b.WriteString(typeName)
		b.WriteString(", ")
		b.WriteString(ve)
		b.WriteString(")]; ")
	}
	b.WriteString(`})() : null)`)
	return b.String(), nil
}

func (s *diagnosticState) objectBody(obj *metadata.ObjectType) (string, error) {
	var b strings.Builder
	b.WriteString(`(() => { if ("object" !== typeof v || null === v) return [__diag(p, `)
	b.WriteString(jsonQuote(obj.Name))
	b.WriteString(`, v)]; const __errors = []; `)
	props, dynamicProps := splitObjectProperties(obj)
	for _, prop := range props {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		valueExpr := accessProperty("v", name)
		propPath := joinPropertyPath("p", name)
		if !prop.Value.IsRequired() {
			b.WriteString("if (undefined !== ")
			b.WriteString(valueExpr)
			b.WriteString(") { ")
		}
		errorsExpr, err := s.buildErrors(valueExpr, propPath, prop.Value)
		if err != nil {
			return "", err
		}
		b.WriteString("__push(__errors, ")
		b.WriteString(errorsExpr)
		b.WriteString("); ")
		if !prop.Value.IsRequired() {
			b.WriteString("} ")
		}
	}
	allowed := make([]string, 0, len(props))
	for _, prop := range props {
		if prop == nil || prop.Key == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		allowed = append(allowed, jsonQuote(name))
	}
	if len(dynamicProps) != 0 {
		b.WriteString(`const __allow = new Set([`)
		b.WriteString(strings.Join(allowed, ", "))
		b.WriteString(`]); for (const __key of Object.keys(v)) { if (__allow.has(__key)) continue; const __matched = []; `)
		for _, prop := range dynamicProps {
			if prop == nil || prop.Key == nil || prop.Value == nil {
				continue
			}
			keyExpr, err := dynamicKeyCheck(`__key`, prop.Key)
			if err != nil {
				return "", err
			}
			valueExpr, err := s.buildErrors(`v[__key]`, `__prop(p, __key)`, prop.Value)
			if err != nil {
				return "", err
			}
			b.WriteString(`if (`)
			b.WriteString(keyExpr)
			b.WriteString(`) __matched.push(`)
			b.WriteString(valueExpr)
			b.WriteString(`); `)
		}
		b.WriteString(`if (__matched.length === 1) { __push(__errors, __matched[0]); continue; } `)
		b.WriteString(`if (__matched.length > 1) { __push(__errors, __pick(__matched)); continue; } `)
		b.WriteString(`__errors.push(__diag(__prop(p, __key), "undefined", v[__key])); } `)
	} else if obj.AdditionalProperties != nil {
		extraErrors, err := s.buildErrors(`v[__key]`, `__prop(p, __key)`, obj.AdditionalProperties)
		if err != nil {
			return "", err
		}
		b.WriteString(`const __allow = new Set([`)
		b.WriteString(strings.Join(allowed, ", "))
		b.WriteString(`]); for (const __key of Object.keys(v)) { if (__allow.has(__key)) continue; __push(__errors, `)
		b.WriteString(extraErrors)
		b.WriteString(`); } `)
	} else if len(allowed) != 0 {
		b.WriteString(`const __allow = new Set([`)
		b.WriteString(strings.Join(allowed, ", "))
		b.WriteString(`]); for (const __key of Object.keys(v)) { if (__allow.has(__key)) continue; __errors.push(__diag(__prop(p, __key), "undefined", v[__key])); } `)
	}
	b.WriteString("return __errors; })()")
	return b.String(), nil
}

func (s *diagnosticState) emitArrayErrors(ve, path string, ref *metadata.ArrayRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "[]", nil
	}
	arr := ref.Type
	name, ok := s.arrayHelper[arr]
	if ok && !s.visitingArr[arr] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	if !ok {
		name = s.reserveArrayHelper(arr)
	}
	if s.visitingArr[arr] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	s.visitingArr[arr] = true
	defer delete(s.visitingArr, arr)

	elemErrors := "[]"
	if arr.Value != nil {
		var err error
		elemErrors, err = s.buildErrors("v[i]", `p + "[" + i + "]"`, arr.Value)
		if err != nil {
			return "", err
		}
	}
	body := `(() => { if (!Array.isArray(v)) return [__diag(p, ` + jsonQuote(arr.Name) + `, v)]; const __errors = []; for (let i = 0; i < v.length; ++i) __push(__errors, ` + elemErrors + `); return __errors; })()`
	s.helpers[name] = "(v, p) => " + body
	return name + "(" + ve + ", " + path + ")", nil
}

func (s *diagnosticState) emitArrayUnionErrors(
	ve string,
	path string,
	typeName string,
	refs []*metadata.ArrayRef,
) (string, error) {
	if len(refs) == 1 {
		return s.emitArrayErrors(ve, path, refs[0])
	}
	type candidate struct {
		predicate string
		chunk     string
	}
	candidates := make([]candidate, 0, len(refs))
	for _, ref := range refs {
		chunk, err := s.emitArrayErrors(ve, path, ref)
		if err != nil {
			return "", err
		}
		predicate := "Array.isArray(" + ve + ")"
		if ref != nil && ref.Type != nil && ref.Type.Value != nil {
			elemExpr, err := diagnosticIsExpr(ve+`[0]`, ref.Type.Value)
			if err != nil {
				return "", err
			}
			predicate = `Array.isArray(` + ve + `) && 0 !== ` + ve + `.length && (` + elemExpr + `)`
		}
		candidates = append(candidates, candidate{
			predicate: predicate,
			chunk:     chunk,
		})
	}
	var b strings.Builder
	b.WriteString(`(Array.isArray(`)
	b.WriteString(ve)
	b.WriteString(`) ? (() => { const __matched = []; `)
	for _, c := range candidates {
		b.WriteString(`if (`)
		b.WriteString(c.predicate)
		b.WriteString(`) __matched.push(`)
		b.WriteString(c.chunk)
		b.WriteString(`); `)
	}
	b.WriteString(`if (__matched.length === 1) return __matched[0]; `)
	b.WriteString(`if (__matched.length > 1) return __pick(__matched); `)
	b.WriteString(`return [__diag(`)
	b.WriteString(path)
	b.WriteString(`, `)
	b.WriteString(typeName)
	b.WriteString(`, `)
	b.WriteString(ve)
	b.WriteString(`)]; })() : null)`)
	return b.String(), nil
}

func (s *diagnosticState) emitTupleErrors(ve, path string, ref *metadata.TupleRef) (string, error) {
	if ref == nil || ref.Type == nil {
		return "[]", nil
	}
	tuple := ref.Type
	name, ok := s.tupleHelper[tuple]
	if ok && !s.visitingTup[tuple] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	if !ok {
		name = s.reserveTupleHelper(tuple)
	}
	if s.visitingTup[tuple] {
		return name + "(" + ve + ", " + path + ")", nil
	}
	s.visitingTup[tuple] = true
	defer delete(s.visitingTup, tuple)

	var b strings.Builder
	b.WriteString(`(() => { if (!Array.isArray(v) || v.length !== `)
	b.WriteString(intString(int64(len(tuple.Elements))))
	b.WriteString(`) return [__diag(p, `)
	b.WriteString(jsonQuote(tuple.Name))
	b.WriteString(`, v)]; const __errors = []; `)
	for i, elem := range tuple.Elements {
		errorsExpr, err := s.buildErrors("v["+intString(int64(i))+"]", `p + "[`+intString(int64(i))+`]"`, elem)
		if err != nil {
			return "", err
		}
		b.WriteString("__push(__errors, ")
		b.WriteString(errorsExpr)
		b.WriteString("); ")
	}
	b.WriteString("return __errors; })()")
	body := b.String()
	s.helpers[name] = "(v, p) => " + body
	return name + "(" + ve + ", " + path + ")", nil
}

func (s *diagnosticState) emitMapErrors(ve, path string, ref *metadata.MapRef) (string, error) {
	if ref == nil {
		return "[]", nil
	}
	indexVar := "__mapIndex"
	keyErrors := "[]"
	valueErrors := "[]"
	var err error
	if ref.Key != nil {
		keyErrors, err = s.buildErrors("entry[0]", "("+path+`) + "[" + `+indexVar+` + "][0]"`, ref.Key)
		if err != nil {
			return "", err
		}
	}
	if ref.Value != nil {
		valueErrors, err = s.buildErrors("entry[1]", "("+path+`) + "[" + `+indexVar+` + "][1]"`, ref.Value)
		if err != nil {
			return "", err
		}
	}
	return `(() => { if (!(` + ve + ` instanceof Map)) return [__diag(` + path + `, "Map", ` + ve + `)]; const __entries = Array.from(` + ve + `.entries()); const __errors = []; for (let ` + indexVar + ` = 0; ` + indexVar + ` < __entries.length; ++` + indexVar + `) { const entry = __entries[` + indexVar + `]; __push(__errors, ` + keyErrors + `); __push(__errors, ` + valueErrors + `); } return __errors; })()`, nil
}

func (s *diagnosticState) emitMapUnionErrors(
	ve string,
	path string,
	typeName string,
	refs []*metadata.MapRef,
) (string, error) {
	if len(refs) == 1 {
		return s.emitMapErrors(ve, path, refs[0])
	}
	type candidate struct {
		predicate string
		chunk     string
	}
	candidates := make([]candidate, 0, len(refs))
	for _, ref := range refs {
		chunk, err := s.emitMapErrors(ve, path, ref)
		if err != nil {
			return "", err
		}
		predicate := ve + ` instanceof Map`
		if ref != nil && (ref.Key != nil || ref.Value != nil) {
			parts := []string{ve + ` instanceof Map`, `0 !== __entries.length`}
			if ref.Key != nil {
				keyExpr, err := diagnosticDiscriminatorExpr(`__entries[0][0]`, ref.Key)
				if err != nil {
					return "", err
				}
				parts = append(parts, keyExpr)
			}
			if ref.Value != nil {
				valueExpr, err := diagnosticDiscriminatorExpr(`__entries[0][1]`, ref.Value)
				if err != nil {
					return "", err
				}
				parts = append(parts, valueExpr)
			}
			predicate = strings.Join(parts, " && ")
		}
		candidates = append(candidates, candidate{
			predicate: predicate,
			chunk:     chunk,
		})
	}
	var b strings.Builder
	b.WriteString(`(`)
	b.WriteString(ve)
	b.WriteString(` instanceof Map ? (() => { const __entries = Array.from(`)
	b.WriteString(ve)
	b.WriteString(`.entries()); const __matched = []; `)
	for _, c := range candidates {
		b.WriteString(`if (`)
		b.WriteString(c.predicate)
		b.WriteString(`) __matched.push(`)
		b.WriteString(c.chunk)
		b.WriteString(`); `)
	}
	b.WriteString(`if (__matched.length === 1) return __matched[0]; `)
	b.WriteString(`if (__matched.length > 1) return __pick(__matched); `)
	b.WriteString(`return [__diag(`)
	b.WriteString(path)
	b.WriteString(`, `)
	b.WriteString(typeName)
	b.WriteString(`, `)
	b.WriteString(ve)
	b.WriteString(`)]; })() : null)`)
	return b.String(), nil
}

func (s *diagnosticState) emitSetErrors(ve, path string, ref *metadata.SetRef) (string, error) {
	if ref == nil {
		return "[]", nil
	}
	indexVar := "__setIndex"
	elemErrors := "[]"
	var err error
	if ref.Value != nil {
		elemErrors, err = s.buildErrors("entry", "("+path+`) + "[" + `+indexVar+` + "]"`, ref.Value)
		if err != nil {
			return "", err
		}
	}
	return `(() => { if (!(` + ve + ` instanceof Set)) return [__diag(` + path + `, "Set", ` + ve + `)]; const __values = Array.from(` + ve + `.values()); const __errors = []; for (let ` + indexVar + ` = 0; ` + indexVar + ` < __values.length; ++` + indexVar + `) { const entry = __values[` + indexVar + `]; __push(__errors, ` + elemErrors + `); } return __errors; })()`, nil
}

func (s *diagnosticState) emitSetUnionErrors(
	ve string,
	path string,
	typeName string,
	refs []*metadata.SetRef,
) (string, error) {
	if len(refs) == 1 {
		return s.emitSetErrors(ve, path, refs[0])
	}
	type candidate struct {
		predicate string
		chunk     string
	}
	candidates := make([]candidate, 0, len(refs))
	for _, ref := range refs {
		chunk, err := s.emitSetErrors(ve, path, ref)
		if err != nil {
			return "", err
		}
		predicate := ve + ` instanceof Set`
		if ref != nil && ref.Value != nil {
			elemExpr, err := diagnosticIsExpr(`__values[0]`, ref.Value)
			if err != nil {
				return "", err
			}
			predicate = ve + ` instanceof Set && 0 !== __values.length && (` + elemExpr + `)`
		}
		candidates = append(candidates, candidate{
			predicate: predicate,
			chunk:     chunk,
		})
	}
	var b strings.Builder
	b.WriteString(`(`)
	b.WriteString(ve)
	b.WriteString(` instanceof Set ? (() => { const __values = Array.from(`)
	b.WriteString(ve)
	b.WriteString(`.values()); const __matched = []; `)
	for _, c := range candidates {
		b.WriteString(`if (`)
		b.WriteString(c.predicate)
		b.WriteString(`) __matched.push(`)
		b.WriteString(c.chunk)
		b.WriteString(`); `)
	}
	b.WriteString(`if (__matched.length === 1) return __matched[0]; `)
	b.WriteString(`if (__matched.length > 1) return __pick(__matched); `)
	b.WriteString(`return [__diag(`)
	b.WriteString(path)
	b.WriteString(`, `)
	b.WriteString(typeName)
	b.WriteString(`, `)
	b.WriteString(ve)
	b.WriteString(`)]; })() : null)`)
	return b.String(), nil
}

func (s *diagnosticState) reserveObjectHelper(obj *metadata.ObjectType) string {
	if name, ok := s.objectHelper[obj]; ok {
		return name
	}
	name := s.reserveName()
	s.objectHelper[obj] = name
	return name
}

func (s *diagnosticState) reserveArrayHelper(arr *metadata.ArrayType) string {
	if name, ok := s.arrayHelper[arr]; ok {
		return name
	}
	name := s.reserveName()
	s.arrayHelper[arr] = name
	return name
}

func (s *diagnosticState) reserveTupleHelper(tuple *metadata.TupleType) string {
	if name, ok := s.tupleHelper[tuple]; ok {
		return name
	}
	name := s.reserveName()
	s.tupleHelper[tuple] = name
	return name
}

func (s *diagnosticState) reserveName() string {
	name := fmt.Sprintf("__diag_%d", len(s.order))
	s.order = append(s.order, name)
	return name
}

func diagnosticIsExpr(ve string, schema *metadata.Schema) (string, error) {
	st := newIsState()
	body, err := st.buildIs(ve, schema)
	if err != nil {
		return "", err
	}
	return st.wrap(body), nil
}

func diagnosticDiscriminatorExpr(ve string, schema *metadata.Schema) (string, error) {
	if schema == nil || schema.Any {
		return "true", nil
	}
	parts := make([]string, 0, 8)
	if schema.Nullable {
		parts = append(parts, "null === "+ve)
	}
	if schema.IsConstant() {
		for _, constant := range schema.Constants {
			for _, value := range constant.Values {
				if expr := constantCheck(ve, constant.Type, value.Value); expr != "" {
					parts = append(parts, expr)
				}
			}
		}
		if len(parts) != 0 {
			return "(" + strings.Join(parts, " || ") + ")", nil
		}
	}
	if len(schema.Objects) != 0 ||
		len(schema.Arrays) != 0 ||
		len(schema.Tuples) != 0 ||
		len(schema.Maps) != 0 ||
		len(schema.Sets) != 0 ||
		len(schema.Functions) != 0 ||
		len(schema.Natives) != 0 ||
		len(schema.Templates) != 0 ||
		len(schema.Aliases) != 0 {
		return diagnosticIsExpr(ve, schema)
	}
	for _, constant := range schema.Constants {
		if len(constant.Values) == 0 {
			continue
		}
		parts = append(parts, atomicTypeExpr(ve, constant.Type))
	}
	for _, atomic := range schema.Atomics {
		parts = append(parts, atomicTypeExpr(ve, atomic.Type))
	}
	if len(parts) != 0 {
		return "(" + strings.Join(parts, " || ") + ")", nil
	}
	return diagnosticIsExpr(ve, schema)
}

func atomicTypeExpr(ve string, kind metadata.AtomicKind) string {
	switch kind {
	case metadata.AtomicBoolean:
		return `"boolean" === typeof ` + ve
	case metadata.AtomicNumber:
		return `"number" === typeof ` + ve + ` && Number.isFinite(` + ve + `)`
	case metadata.AtomicBigint:
		return `"bigint" === typeof ` + ve
	case metadata.AtomicString:
		return `"string" === typeof ` + ve
	default:
		return "false"
	}
}

func joinPropertyPath(base, name string) string {
	if isIdentifier(name) {
		return base + ` + "." + ` + jsonQuote(name)
	}
	return base + ` + "[" + ` + jsonQuote(jsonQuote(name)) + ` + "]"`
}

type objectUnionSpecializer struct {
	ref      *metadata.ObjectRef
	key      string
	value    *metadata.Schema
	neighbor bool
}

type objectUnionKeyValue struct {
	key string
}

func objectUnionSpecializers(
	refs []*metadata.ObjectRef,
) ([]objectUnionSpecializer, []*metadata.ObjectRef) {
	matrix := make(map[objectUnionKeyValue][]*metadata.Property)
	perRef := make(map[*metadata.ObjectRef][]objectUnionSpecializer)
	for _, ref := range refs {
		if ref == nil || ref.Type == nil {
			continue
		}
		for _, prop := range ref.Type.Properties {
			if prop == nil || prop.Key == nil {
				continue
			}
			key, ok := prop.Key.GetSoleLiteral()
			if !ok {
				continue
			}
			pair := objectUnionKeyValue{key: key}
			matrix[pair] = append(matrix[pair], prop)
		}
	}
	for _, ref := range refs {
		if ref == nil || ref.Type == nil {
			continue
		}
		for _, prop := range ref.Type.Properties {
			if prop == nil || prop.Key == nil || prop.Value == nil || !prop.Value.IsRequired() {
				continue
			}
			key, ok := prop.Key.GetSoleLiteral()
			if !ok {
				continue
			}
			pair := objectUnionKeyValue{key: key}
			all := matrix[pair]
			neighbors := make([]*metadata.Property, 0, len(all))
			for _, candidate := range all {
				if candidate != prop {
					neighbors = append(neighbors, candidate)
				}
			}
			unique := len(neighbors) == 0
			if !unique {
				unique = true
				for _, neighbor := range neighbors {
					if schemaMayIntersect(prop.Value, neighbor.Value) {
						unique = false
						break
					}
				}
			}
			if !unique {
				continue
			}
			perRef[ref] = append(perRef[ref], objectUnionSpecializer{
				ref:      ref,
				key:      key,
				value:    prop.Value,
				neighbor: len(neighbors) != 0,
			})
		}
	}
	specialized := make([]objectUnionSpecializer, 0)
	remained := make([]*metadata.ObjectRef, 0)
	for _, ref := range refs {
		candidates := perRef[ref]
		if len(candidates) == 0 {
			remained = append(remained, ref)
			continue
		}
		best := -1
		for i := range candidates {
			if best == -1 || specializerPriority(candidates[i]) < specializerPriority(candidates[best]) {
				best = i
			}
		}
		specialized = append(specialized, candidates[best])
	}
	return specialized, remained
}

func specializerPriority(spec objectUnionSpecializer) int {
	if spec.value != nil && spec.value.IsConstant() {
		return -1
	}
	switch spec.key {
	case "type":
		return 0
	case "kind":
		return 1
	case "extension":
		return 2
	default:
		return 3
	}
}

func schemaMayIntersect(x, y *metadata.Schema) bool {
	if x == nil || y == nil {
		return false
	}
	if x.Any || y.Any {
		return true
	}
	if !x.IsRequired() && !y.IsRequired() {
		return true
	}
	if x.Nullable && y.Nullable {
		return true
	}
	if len(x.Functions) != 0 && len(y.Functions) != 0 {
		return true
	}
	if len(x.Arrays) != 0 && len(y.Arrays) != 0 {
		return true
	}
	if len(x.Tuples) != 0 && len(y.Tuples) != 0 {
		return true
	}
	if len(x.Objects) != 0 && len(y.Objects) != 0 {
		return true
	}
	if len(x.Aliases) != 0 && len(y.Aliases) != 0 {
		return true
	}
	if len(x.Sets) != 0 && len(y.Sets) != 0 {
		return true
	}
	if len(x.Maps) != 0 && len(y.Maps) != 0 {
		return true
	}
	for _, xn := range x.Natives {
		for _, yn := range y.Natives {
			if xn.Name == yn.Name {
				return true
			}
		}
	}
	if x.Escaped != nil && y.Escaped != nil {
		return schemaMayIntersect(x.Escaped.Original, y.Escaped.Original) ||
			schemaMayIntersect(x.Escaped.Returns, y.Escaped.Returns)
	}
	for _, xa := range x.Atomics {
		for _, ya := range y.Atomics {
			if xa.Type == ya.Type {
				return true
			}
		}
		for _, yc := range y.Constants {
			if xa.Type == yc.Type {
				return true
			}
		}
	}
	for _, xc := range x.Constants {
		for _, ya := range y.Atomics {
			if xc.Type == ya.Type {
				return true
			}
		}
		for _, yc := range y.Constants {
			if xc.Type != yc.Type {
				continue
			}
			for _, xv := range xc.Values {
				for _, yv := range yc.Values {
					if xv.Value == yv.Value {
						return true
					}
				}
			}
		}
	}
	if len(x.Templates) != 0 && len(y.Templates) != 0 {
		return true
	}
	if len(x.Templates) != 0 {
		for _, ya := range y.Atomics {
			if ya.Type == metadata.AtomicString {
				return true
			}
		}
	}
	if len(y.Templates) != 0 {
		for _, xa := range x.Atomics {
			if xa.Type == metadata.AtomicString {
				return true
			}
		}
	}
	return false
}
