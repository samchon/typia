package internal

import (
	"fmt"
	"sort"
	"strings"

	h "github.com/samchon/typia/packages/core/src/programmers/helpers"
)

var FeatureProgrammer = featureProgrammerNamespace{}

type featureProgrammerNamespace struct{}

type FeatureProgrammerConfig struct {
	Types       FeatureProgrammerTypes
	Prefix      string
	Path        bool
	Trace       bool
	Addition    func(any) []h.Statement
	Initializer func(FeatureProgrammerInitializerProps) FeatureProgrammerInitializerOutput
	Decoder     func(FeatureProgrammerDecodeProps) h.ConciseBody
	Objector    FeatureProgrammerObjector
	Generator   FeatureProgrammerGenerator
}

type FeatureProgrammerTypes struct {
	Input  func(any, string) string
	Output func(any, string) string
}

type FeatureProgrammerObjector struct {
	Type         string
	Checker      func(FeatureProgrammerObjectDecodeProps) h.Expression
	Decoder      func(FeatureProgrammerObjectDecodeProps) h.Expression
	Joiner       func(FeatureProgrammerJoinerProps) h.ConciseBody
	Unionizer    func(FeatureProgrammerUnionizerProps) h.Expression
	Failure      func(FeatureProgrammerFailureProps) h.Statement
	Is           func(h.Expression) h.Expression
	Required     func(h.Expression) h.Expression
	Full         func(FeatureProgrammerFullProps) h.Expression
	Decode       func(FeatureProgrammerDecodeObjectProps) h.Expression
	Discriminate func(h.Expression) h.Expression
}

type FeatureProgrammerGenerator struct {
	Object func(FeatureProgrammerGenerateObjectProps) h.ConciseBody
	Union  func(FeatureProgrammerGenerateUnionProps) []h.Statement
	Array  func(FeatureProgrammerGenerateArrayProps) h.ConciseBody
	Tuple  func(FeatureProgrammerGenerateTupleProps) h.ConciseBody
}

type FeatureProgrammerExplore struct {
	Input    h.Expression
	Tracable bool
	Source   string
	From     string
	Postfix  string
	Start    int
}

type FeatureProgrammerInitializerProps struct {
	Context any
	Functor *h.FunctionProgrammer
	Type    any
}

type FeatureProgrammerInitializerOutput struct {
	Collection any
	Metadata   h.Metadata
}

type FeatureProgrammerDecodeProps struct {
	Metadata h.Metadata
	Input    h.Expression
	Explore  FeatureProgrammerExplore
}

type FeatureProgrammerObjectDecodeProps struct {
	Metadata h.Metadata
	Input    h.Expression
	Object   h.Metadata
	Explore  FeatureProgrammerExplore
}

type FeatureProgrammerJoinerProps struct {
	Entries []h.IExpressionEntry
	Input   h.Expression
	Object  h.Metadata
}

type FeatureProgrammerUnionizerProps struct {
	Objects []h.Metadata
	Input   h.Expression
	Explore FeatureProgrammerExplore
}

type FeatureProgrammerFailureProps struct {
	Input    h.Expression
	Expected string
	Explore  *FeatureProgrammerExplore
}

type FeatureProgrammerFullProps struct {
	Condition h.Expression
	Input     h.Expression
	Expected  string
	Explore   FeatureProgrammerExplore
}

type FeatureProgrammerDecodeObjectProps struct {
	Config  FeatureProgrammerConfig
	Functor *h.FunctionProgrammer
	Input   h.Expression
	Object  h.Metadata
	Explore FeatureProgrammerExplore
}

type FeatureProgrammerGenerateObjectProps struct {
	Functor *h.FunctionProgrammer
	Object  h.Metadata
	Name    string
}

type FeatureProgrammerGenerateUnionProps struct {
	Functor *h.FunctionProgrammer
	Objects []h.Metadata
	Name    string
}

type FeatureProgrammerGenerateArrayProps struct {
	Functor *h.FunctionProgrammer
	Array   h.Metadata
	Name    string
}

type FeatureProgrammerGenerateTupleProps struct {
	Functor *h.FunctionProgrammer
	Tuple   h.Metadata
	Name    string
}

type FeatureProgrammerComposed struct {
	Collection any
	Metadata   h.Metadata
	Objects    map[string]h.Metadata
	Unions     map[string][]h.Metadata
	Arrays     map[string]h.Metadata
	Tuples     map[string]h.Metadata
	Body       h.ConciseBody
	Parameters []string
	Functions  map[string]h.Statement
	Statements []h.Statement
	Response   string
}

type FeatureProgrammerDecomposed struct {
	Functions  map[string]h.Statement
	Statements []h.Statement
	Arrow      h.Expression
}

func (featureProgrammerNamespace) Compose(props FeatureProgrammerComposeProps) FeatureProgrammerComposed {
	if props.Functor == nil {
		props.Functor = h.NewFunctionProgrammer()
	}
	init, objects, unions, arrays, tuples := composeMetadata(props)
	body := h.ConciseBody("input")
	if props.Config.Decoder != nil {
		body = props.Config.Decoder(FeatureProgrammerDecodeProps{
			Metadata: init.Metadata,
			Input:    h.Expr("input"),
			Explore: FeatureProgrammerExplore{
				Input:    h.Expr("input"),
				Tracable: props.Config.Path || props.Config.Trace,
				Source:   "top",
				From:     "top",
				Postfix:  `""`,
			},
		})
	}
	statements := []h.Statement{}
	if props.Config.Addition != nil {
		statements = props.Config.Addition(init.Collection)
	}
	functions := mergeFunctionStatements(
		FeatureProgrammer.WriteObjectFunctions(FeatureProgrammerObjectFunctionsProps{Config: props.Config, Functor: props.Functor, Prefix: props.Config.Prefix, Objects: metadataValues(objects)}),
		FeatureProgrammer.WriteUnionFunctions(FeatureProgrammerUnionFunctionsProps{Config: props.Config, Functor: props.Functor, Prefix: props.Config.Prefix, Unions: unionValues(unions)}),
		writeArrayFunctions(props.Config, props.Functor, props.Config.Prefix, metadataValues(arrays)),
		writeTupleFunctions(props.Config, props.Functor, props.Config.Prefix, metadataValues(tuples)),
	)
	composed := FeatureProgrammerComposed{
		Collection: init.Collection,
		Metadata:   init.Metadata,
		Objects:    objects,
		Unions:     unions,
		Arrays:     arrays,
		Tuples:     tuples,
		Body:       body,
		Parameters: FeatureProgrammer.ParameterDeclarations(FeatureProgrammerParametersProps{Config: props.Config, Input: h.Expr("input"), Type: typeText(props.Config.Types.Input, props.Type, props.Name)}),
		Functions:  functions,
		Statements: statements,
		Response:   typeText(props.Config.Types.Output, props.Type, props.Name),
	}
	return composed
}

type FeatureProgrammerComposeProps struct {
	Context any
	Config  FeatureProgrammerConfig
	Functor *h.FunctionProgrammer
	Type    any
	Name    string
}

func (featureProgrammerNamespace) WriteDecomposed(props FeatureProgrammerWriteDecomposedProps) h.Expression {
	statements := make([]h.Statement, 0)
	if props.Functor != nil {
		statements = append(statements, props.Functor.DeclareUnions()...)
	}
	keys := make([]string, 0, len(props.Result.Functions))
	for key := range props.Result.Functions {
		keys = append(keys, key)
	}
	for _, key := range keys {
		if props.Functor == nil || props.Functor.HasLocal(key) {
			statements = append(statements, props.Result.Functions[key])
		}
	}
	statements = append(statements, props.Result.Statements...)
	value := props.Result.Arrow
	if props.ReturnWrapper != nil {
		value = props.ReturnWrapper(value)
	}
	statements = append(statements, h.StatementOf("return "+string(value)+";"))
	return h.Call(h.Expr("(() => { " + joinStatements(statements) + " })"))
}

type FeatureProgrammerWriteDecomposedProps struct {
	Modulo        h.Expression
	Functor       *h.FunctionProgrammer
	Result        FeatureProgrammerDecomposed
	ReturnWrapper func(h.Expression) h.Expression
}

func (featureProgrammerNamespace) Decompose(props FeatureProgrammerWriteProps) FeatureProgrammerDecomposed {
	arrow := FeatureProgrammer.Write(props)
	return FeatureProgrammerDecomposed{
		Functions:  map[string]h.Statement{},
		Statements: nil,
		Arrow:      arrow,
	}
}

type FeatureProgrammerWriteProps struct {
	Context any
	Config  FeatureProgrammerConfig
	Functor *h.FunctionProgrammer
	Type    any
	Name    string
}

func (featureProgrammerNamespace) Write(props FeatureProgrammerWriteProps) h.Expression {
	if props.Functor == nil {
		props.Functor = h.NewFunctionProgrammer()
	}
	composed := FeatureProgrammer.Compose(FeatureProgrammerComposeProps{
		Context: props.Context,
		Config:  props.Config,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	statements := make([]h.Statement, 0)
	statements = append(statements, composed.Statements...)
	for _, stmt := range filteredFunctions(composed.Functions, props.Config.Prefix+"o", len(composed.Objects), props.Functor) {
		statements = append(statements, stmt)
	}
	for _, stmt := range filteredFunctions(composed.Functions, props.Config.Prefix+"u", len(composed.Unions), props.Functor) {
		statements = append(statements, stmt)
	}
	for _, stmt := range filteredFunctions(composed.Functions, props.Config.Prefix+"a", len(composed.Arrays), props.Functor) {
		statements = append(statements, stmt)
	}
	for _, stmt := range filteredFunctions(composed.Functions, props.Config.Prefix+"t", len(composed.Tuples), props.Functor) {
		statements = append(statements, stmt)
	}
	body := append(statements, returnBody(composed.Body)...)
	return h.Expr("(" + strings.Join(composed.Parameters, ", ") + ") => { " + joinStatements(body) + " }")
}

func (featureProgrammerNamespace) WriteObjectFunctions(props FeatureProgrammerObjectFunctionsProps) []h.Statement {
	return writeMetadataFunctions(props.Prefix+"o", props.Objects, props.Functor, func(name string, metadata h.Metadata) h.Statement {
		if props.Config.Generator.Object != nil {
			return h.StatementOf("const " + name + " = " + string(props.Config.Generator.Object(FeatureProgrammerGenerateObjectProps{Functor: props.Functor, Object: metadata, Name: name})) + ";")
		}
		body := h.ConciseBody("input")
		if props.Config.Objector.Joiner != nil {
			body = props.Config.Objector.Joiner(FeatureProgrammerJoinerProps{
				Entries: featureObjectEntries(h.Expr("input"), metadata),
				Input:   h.Expr("input"),
				Object:  metadata,
			})
		}
		parameters := FeatureProgrammer.ParameterDeclarations(FeatureProgrammerParametersProps{Config: props.Config, Input: h.Expr("input"), Type: "any"})
		return h.StatementOf("const " + name + " = (" + strings.Join(parameters, ", ") + ") => " + string(body) + ";")
	})
}

type FeatureProgrammerObjectFunctionsProps struct {
	Config  FeatureProgrammerConfig
	Functor *h.FunctionProgrammer
	Prefix  string
	Objects []h.Metadata
}

func (featureProgrammerNamespace) WriteUnionFunctions(props FeatureProgrammerUnionFunctionsProps) []h.Statement {
	out := make([]h.Statement, 0, len(props.Unions))
	for i, union := range props.Unions {
		name := fmt.Sprintf("%su%d", props.Prefix, i)
		if props.Config.Generator.Union != nil {
			out = append(out, props.Config.Generator.Union(FeatureProgrammerGenerateUnionProps{Functor: props.Functor, Objects: union, Name: name})...)
		} else {
			out = append(out, h.StatementOf("const "+name+" = "+string(writeUnion(props.Config, union))+";"))
		}
	}
	return out
}

type FeatureProgrammerUnionFunctionsProps struct {
	Config  FeatureProgrammerConfig
	Functor *h.FunctionProgrammer
	Prefix  string
	Unions  [][]h.Metadata
}

func (featureProgrammerNamespace) DecodeArray(props FeatureProgrammerArrayDecodeProps) h.Expression {
	rand := "0"
	if props.Functor != nil {
		rand = fmt.Sprint(props.Functor.Increment())
	}
	tail := ""
	if props.Config.Path || props.Config.Trace {
		tail = ", _index" + rand
	}
	body := h.Expression("elem")
	if props.Decoder != nil {
		body = props.Decoder(h.Expr("elem"))
	} else if props.Config.Decoder != nil {
		start := props.Explore.Start
		body = h.Expression(props.Config.Decoder(FeatureProgrammerDecodeProps{
			Input:    h.Expr("elem"),
			Metadata: arrayValue(props.Array),
			Explore: FeatureProgrammerExplore{
				Input:    h.Expr("elem"),
				Tracable: props.Explore.Tracable,
				Source:   props.Explore.Source,
				From:     "array",
				Postfix: FeatureProgrammer.Index(FeatureProgrammerIndexProps{
					Start:   &start,
					Postfix: props.Explore.Postfix,
					Rand:    rand,
				}),
			},
		}))
	}
	arrow := h.Expr("(elem" + tail + ") => " + string(body))
	if props.Combiner != nil {
		return props.Combiner(props.Input, arrow)
	}
	return h.Expr(string(props.Input) + ".map(" + string(arrow) + ")")
}

type FeatureProgrammerArrayDecodeProps struct {
	Functor  *h.FunctionProgrammer
	Config   FeatureProgrammerConfig
	Array    h.Metadata
	Input    h.Expression
	Explore  FeatureProgrammerExplore
	Decoder  func(h.Expression) h.Expression
	Combiner func(h.Expression, h.Expression) h.Expression
}

func (featureProgrammerNamespace) DecodeObject(props FeatureProgrammerDecodeObjectProps) h.Expression {
	if props.Functor != nil && props.Config.Prefix != "" {
		name := props.Functor.UseLocal(fmt.Sprintf("%so%d", props.Config.Prefix, h.GetInt(props.Object, "index")))
		return h.Call(h.Expr(name), FeatureProgrammer.ArgumentsArray(FeatureProgrammerArgumentsProps{
			Config:  props.Config,
			Input:   props.Input,
			Explore: props.Explore,
		})...)
	}
	return h.Expr("{ " + joinEntries(featureObjectEntries(props.Input, props.Object)) + " }")
}

func (featureProgrammerNamespace) Index(props FeatureProgrammerIndexProps) string {
	if props.Rand != "" {
		tail := `"[" + _index` + props.Rand + ` + "]"`
		if props.Start != nil {
			tail = fmt.Sprintf(`"[" + (%d + _index%s) + "]"`, *props.Start, props.Rand)
		}
		if props.Postfix == "" {
			return tail
		}
		if strings.HasSuffix(props.Postfix, `"`) {
			return props.Postfix[:len(props.Postfix)-1] + tail[1:]
		}
		return props.Postfix + " + " + tail
	}
	tail := "[" + string(props.Expression) + "]"
	if props.Postfix == "" {
		return tail
	}
	if strings.HasSuffix(props.Postfix, `"`) {
		return props.Postfix[:len(props.Postfix)-1] + tail + `"`
	}
	return props.Postfix + " + " + tail
}

type FeatureProgrammerIndexProps struct {
	Start      *int
	Postfix    string
	Rand       string
	Expression h.Expression
}

func (featureProgrammerNamespace) ArgumentsArray(props FeatureProgrammerArgumentsProps) []h.Expression {
	tail := []h.Expression{}
	if props.Config.Path {
		if props.Explore.Postfix != "" {
			tail = append(tail, h.Expr("_path + "+props.Explore.Postfix))
		} else {
			tail = append(tail, h.Expr("_path"))
		}
	}
	if props.Config.Trace {
		if props.Explore.Source == "function" {
			tail = append(tail, h.Expr(fmt.Sprintf("%t && _exceptionable", props.Explore.Tracable)))
		} else if props.Explore.Tracable {
			tail = append(tail, h.Expr("true"))
		} else {
			tail = append(tail, h.Expr("false"))
		}
	}
	return append([]h.Expression{props.Input}, tail...)
}

type FeatureProgrammerArgumentsProps struct {
	Config  FeatureProgrammerConfig
	Input   h.Expression
	Explore FeatureProgrammerExplore
}

func (featureProgrammerNamespace) ParameterDeclarations(props FeatureProgrammerParametersProps) []string {
	input := string(props.Input)
	if props.Type != "" {
		input += ": " + props.Type
	}
	out := []string{input}
	if props.Config.Path {
		out = append(out, "_path: string")
	}
	if props.Config.Trace {
		out = append(out, "_exceptionable: boolean = true")
	}
	return out
}

type FeatureProgrammerParametersProps struct {
	Config FeatureProgrammerConfig
	Input  h.Expression
	Type   string
}

func indexMetadata(prefix string, values []any) map[string]h.Metadata {
	out := map[string]h.Metadata{}
	for i, value := range values {
		out[fmt.Sprintf("%s%d", prefix, i)] = h.AsMetadata(value)
	}
	return out
}

func indexUnionMetadata(prefix string, values []any) map[string][]h.Metadata {
	out := map[string][]h.Metadata{}
	for i, value := range values {
		items := h.GetSlice(h.Metadata{"items": value}, "items")
		next := make([]h.Metadata, 0, len(items))
		for _, item := range items {
			next = append(next, h.AsMetadata(item))
		}
		out[fmt.Sprintf("%s%d", prefix, i)] = next
	}
	return out
}

func writeMetadataFunctions(prefix string, values []h.Metadata, functor *h.FunctionProgrammer, closure func(string, h.Metadata) h.Statement) []h.Statement {
	out := make([]h.Statement, 0, len(values))
	for i, metadata := range values {
		name := fmt.Sprintf("%s%d", prefix, i)
		if functor == nil || !functor.HasLocal(name) {
			out = append(out, closure(name, metadata))
		}
	}
	return out
}

func joinEntries(entries []h.IExpressionEntry) string {
	parts := make([]string, 0, len(entries))
	for _, entry := range entries {
		key := h.GetString(entry.Key, "literal")
		if key == "" {
			continue
		}
		label := key
		if !h.IdentifierName(key) {
			label = h.QuoteString(key)
		}
		parts = append(parts, label+": "+string(entry.Expression))
	}
	return strings.Join(parts, ", ")
}

func composeMetadata(props FeatureProgrammerComposeProps) (FeatureProgrammerInitializerOutput, map[string]h.Metadata, map[string][]h.Metadata, map[string]h.Metadata, map[string]h.Metadata) {
	init := FeatureProgrammerInitializerOutput{Metadata: h.Metadata{}}
	if props.Config.Initializer != nil {
		init = props.Config.Initializer(FeatureProgrammerInitializerProps{
			Context: props.Context,
			Functor: props.Functor,
			Type:    props.Type,
		})
	}
	return init,
		indexMetadata(props.Config.Prefix+"o", h.GetSlice(init.Metadata, "objects")),
		indexUnionMetadata(props.Config.Prefix+"u", h.GetSlice(init.Metadata, "unions")),
		indexMetadata(props.Config.Prefix+"a", h.GetSlice(init.Metadata, "arrays")),
		indexMetadata(props.Config.Prefix+"t", h.GetSlice(init.Metadata, "tuples"))
}

func typeText(closure func(any, string) string, typ any, name string) string {
	if closure == nil {
		return "any"
	}
	out := closure(typ, name)
	if out == "" {
		return "any"
	}
	return out
}

func metadataValues(values map[string]h.Metadata) []h.Metadata {
	keys := make([]string, 0, len(values))
	for key := range values {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	out := make([]h.Metadata, 0, len(keys))
	for _, key := range keys {
		out = append(out, values[key])
	}
	return out
}

func unionValues(values map[string][]h.Metadata) [][]h.Metadata {
	keys := make([]string, 0, len(values))
	for key := range values {
		keys = append(keys, key)
	}
	sort.Strings(keys)
	out := make([][]h.Metadata, 0, len(keys))
	for _, key := range keys {
		out = append(out, values[key])
	}
	return out
}

func mergeFunctionStatements(groups ...[]h.Statement) map[string]h.Statement {
	out := map[string]h.Statement{}
	for _, group := range groups {
		for _, stmt := range group {
			if name := statementName(stmt); name != "" {
				out[name] = stmt
			}
		}
	}
	return out
}

func statementName(stmt h.Statement) string {
	text := strings.TrimSpace(string(stmt))
	if !strings.HasPrefix(text, "const ") {
		return ""
	}
	text = strings.TrimPrefix(text, "const ")
	index := strings.Index(text, " ")
	if index == -1 {
		index = strings.Index(text, "=")
	}
	if index == -1 {
		return ""
	}
	return strings.TrimSpace(text[:index])
}

func writeArrayFunctions(config FeatureProgrammerConfig, functor *h.FunctionProgrammer, prefix string, arrays []h.Metadata) []h.Statement {
	return writeMetadataFunctions(prefix+"a", arrays, functor, func(name string, metadata h.Metadata) h.Statement {
		if config.Generator.Array != nil {
			return h.StatementOf("const " + name + " = " + string(config.Generator.Array(FeatureProgrammerGenerateArrayProps{Functor: functor, Array: metadata, Name: name})) + ";")
		}
		return h.StatementOf("const " + name + " = input => input;")
	})
}

func writeTupleFunctions(config FeatureProgrammerConfig, functor *h.FunctionProgrammer, prefix string, tuples []h.Metadata) []h.Statement {
	return writeMetadataFunctions(prefix+"t", tuples, functor, func(name string, metadata h.Metadata) h.Statement {
		if config.Generator.Tuple != nil {
			return h.StatementOf("const " + name + " = " + string(config.Generator.Tuple(FeatureProgrammerGenerateTupleProps{Functor: functor, Tuple: metadata, Name: name})) + ";")
		}
		return h.StatementOf("const " + name + " = input => input;")
	})
}

func filteredFunctions(functions map[string]h.Statement, prefix string, size int, functor *h.FunctionProgrammer) []h.Statement {
	out := make([]h.Statement, 0, size)
	for i := 0; i < size; i++ {
		name := fmt.Sprintf("%s%d", prefix, i)
		if functor == nil || functor.HasLocal(name) {
			if stmt, ok := functions[name]; ok {
				out = append(out, stmt)
			}
		}
	}
	return out
}

func returnBody(body h.ConciseBody) []h.Statement {
	text := strings.TrimSpace(string(body))
	if strings.HasPrefix(text, "{") && strings.HasSuffix(text, "}") && strings.Contains(text, ";") {
		return []h.Statement{h.StatementOf(strings.TrimPrefix(strings.TrimSuffix(text, "}"), "{"))}
	}
	return []h.Statement{h.StatementOf("return " + text + ";")}
}

func joinStatements(statements []h.Statement) string {
	parts := make([]string, 0, len(statements))
	for _, stmt := range statements {
		text := strings.TrimSpace(string(stmt))
		if text != "" {
			parts = append(parts, text)
		}
	}
	return strings.Join(parts, " ")
}

func writeUnion(config FeatureProgrammerConfig, objects []h.Metadata) h.Expression {
	body := h.Expression("input")
	if config.Objector.Unionizer != nil {
		body = config.Objector.Unionizer(FeatureProgrammerUnionizerProps{
			Objects: objects,
			Input:   h.Expr("input"),
			Explore: FeatureProgrammerExplore{
				Input:    h.Expr("input"),
				Tracable: config.Path || config.Trace,
				Source:   "function",
				From:     "object",
				Postfix:  "",
			},
		})
	}
	parameters := FeatureProgrammer.ParameterDeclarations(FeatureProgrammerParametersProps{Config: config, Input: h.Expr("input"), Type: "any"})
	return h.Expr("(" + strings.Join(parameters, ", ") + ") => " + string(body))
}

func featureObjectEntries(input h.Expression, object h.Metadata) []h.IExpressionEntry {
	properties := h.GetSlice(object, "properties")
	out := make([]h.IExpressionEntry, 0, len(properties))
	for _, property := range properties {
		next := h.AsMetadata(property)
		key := h.GetString(next, "key")
		out = append(out, h.IExpressionEntry{
			Input:      input,
			Key:        h.Metadata{"literal": key},
			Meta:       h.AsMetadata(next["value"]),
			Expression: h.Access(input, key),
		})
	}
	return out
}

func arrayValue(array h.Metadata) h.Metadata {
	next := h.AsMetadata(array["type"])
	if value := h.AsMetadata(next["value"]); len(value) != 0 {
		return value
	}
	return h.AsMetadata(array["value"])
}
