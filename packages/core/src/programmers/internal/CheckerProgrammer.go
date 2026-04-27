package internal

import (
	"fmt"
	"strings"

	h "github.com/samchon/typia/packages/core/src/programmers/helpers"
)

var CheckerProgrammer = checkerProgrammerNamespace{}

type checkerProgrammerNamespace struct{}

type CheckerProgrammerConfig struct {
	Prefix   string
	Path     bool
	Trace    bool
	Equals   bool
	Numeric  bool
	Addition func() []h.Statement
	Decoder  func(CheckerProgrammerDecodeHookProps) h.Expression
	Combiner func(CheckerProgrammerCombinerProps) h.Expression
	Atomist  func(CheckerProgrammerAtomistProps) h.Expression
	Joiner   CheckerProgrammerJoiner
	Success  h.Expression
}

type CheckerProgrammerCombinerProps struct {
	Explore  FeatureProgrammerExplore
	Logic    string
	Input    h.Expression
	Binaries []CheckerProgrammerBinary
	Expected string
}

type CheckerProgrammerAtomistProps struct {
	Entry   h.ICheckEntry
	Input   h.Expression
	Explore FeatureProgrammerExplore
}

type CheckerProgrammerDecodeHookProps struct {
	Metadata h.Metadata
	Input    h.Expression
	Explore  FeatureProgrammerExplore
}

type CheckerProgrammerJoiner struct {
	Object   func(CheckerProgrammerObjectJoinProps) h.Expression
	Array    func(CheckerProgrammerArrayJoinProps) h.Expression
	Tuple    func([]h.Expression) h.Expression
	Failure  func(CheckerProgrammerFailureProps) h.Expression
	Is       func(h.Expression) h.Expression
	Required func(h.Expression) h.Expression
	Full     func(CheckerProgrammerFullProps) h.Expression
}

type CheckerProgrammerObjectJoinProps struct {
	Input   h.Expression
	Entries []h.IExpressionEntry
}

type CheckerProgrammerArrayJoinProps struct {
	Input h.Expression
	Arrow h.Expression
}

type CheckerProgrammerFailureProps struct {
	Input    h.Expression
	Expected string
	Explore  *FeatureProgrammerExplore
}

type CheckerProgrammerFullProps struct {
	Condition h.Expression
	Input     h.Expression
	Expected  string
	Explore   FeatureProgrammerExplore
}

type CheckerProgrammerBinary struct {
	Expression h.Expression
	Combined   bool
}

func (checkerProgrammerNamespace) Compose(props CheckerProgrammerComposeProps) FeatureProgrammerComposed {
	config := configureChecker(props)
	return FeatureProgrammer.Compose(FeatureProgrammerComposeProps{
		Context: props.Context,
		Config:  config,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
}

type CheckerProgrammerComposeProps struct {
	Context any
	Config  CheckerProgrammerConfig
	Functor *h.FunctionProgrammer
	Type    any
	Name    string
}

func (checkerProgrammerNamespace) Write(props CheckerProgrammerWriteProps) h.Expression {
	config := configureChecker(CheckerProgrammerComposeProps{
		Context: props.Context,
		Config:  props.Config,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return FeatureProgrammer.Write(FeatureProgrammerWriteProps{
		Context: props.Context,
		Config:  config,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
}

type CheckerProgrammerWriteProps struct {
	Context any
	Config  CheckerProgrammerConfig
	Functor *h.FunctionProgrammer
	Type    any
	Name    string
}

func (checkerProgrammerNamespace) WriteObjectFunctions(props CheckerProgrammerObjectFunctionsProps) []h.Statement {
	objects := make([]h.Metadata, 0, len(props.Objects))
	for _, object := range props.Objects {
		objects = append(objects, object)
	}
	return FeatureProgrammer.WriteObjectFunctions(FeatureProgrammerObjectFunctionsProps{
		Config:  configureChecker(CheckerProgrammerComposeProps{Config: props.Config, Functor: props.Functor}),
		Functor: props.Functor,
		Prefix:  props.Config.Prefix,
		Objects: objects,
	})
}

type CheckerProgrammerObjectFunctionsProps struct {
	Config  CheckerProgrammerConfig
	Functor *h.FunctionProgrammer
	Objects []h.Metadata
}

func (checkerProgrammerNamespace) WriteUnionFunctions(props CheckerProgrammerUnionFunctionsProps) []h.Statement {
	return FeatureProgrammer.WriteUnionFunctions(FeatureProgrammerUnionFunctionsProps{
		Config:  configureChecker(CheckerProgrammerComposeProps{Config: props.Config, Functor: props.Functor}),
		Functor: props.Functor,
		Prefix:  props.Config.Prefix,
		Unions:  props.Unions,
	})
}

type CheckerProgrammerUnionFunctionsProps struct {
	Config  CheckerProgrammerConfig
	Functor *h.FunctionProgrammer
	Unions  [][]h.Metadata
}

func (checkerProgrammerNamespace) Decode(props CheckerProgrammerDecodeProps) h.Expression {
	if h.GetBool(props.Metadata, "any") {
		return successExpression(props.Config)
	}
	top := make([]CheckerProgrammerBinary, 0)
	binaries := make([]CheckerProgrammerBinary, 0)
	add := func(expr h.Expression, combined bool) {
		binaries = append(binaries, CheckerProgrammerBinary{Expression: expr, Combined: combined})
	}
	if h.GetBool(props.Metadata, "nullable") {
		add(h.StrictEqual(props.Input, h.Expr("null")), false)
	}
	if !h.IsRequired(props.Metadata) {
		add(h.StrictEqual(props.Input, h.Expr("undefined")), false)
	}
	for _, constant := range h.GetSlice(props.Metadata, "constants") {
		c := h.AsMetadata(constant)
		for _, value := range h.GetSlice(c, "values") {
			v := h.AsMetadata(value)
			add(h.StrictEqual(props.Input, literalExpression(v["value"])), false)
		}
	}
	for _, atomic := range h.GetSlice(props.Metadata, "atomics") {
		a := h.AsMetadata(atomic)
		entry := h.ICheckEntry{Expected: h.GetString(a, "type")}
		expr := atomicExpression(props.Input, h.GetString(a, "type"), props.Config.Numeric)
		entry.Expression = &expr
		add(atomist(props.Config, entry, props.Input, props.Explore), false)
	}
	if len(h.GetSlice(props.Metadata, "templates")) != 0 {
		expr := h.Expr("typeof " + string(props.Input) + ` === "string"`)
		add(expr, false)
	}
	for _, native := range h.GetSlice(props.Metadata, "natives") {
		name := h.GetName(native)
		add(h.Expr(string(props.Input)+" instanceof "+name), false)
	}
	for _, array := range h.GetSlice(props.Metadata, "arrays") {
		_ = array
		add(h.Expr("Array.isArray("+string(props.Input)+")"), false)
	}
	for _, tuple := range h.GetSlice(props.Metadata, "tuples") {
		_ = tuple
		add(h.Expr("Array.isArray("+string(props.Input)+")"), false)
	}
	for _, object := range h.GetSlice(props.Metadata, "objects") {
		_ = object
		add(h.Expr("null !== "+string(props.Input)+` && "object" === typeof `+string(props.Input)), false)
	}
	for _, set := range h.GetSlice(props.Metadata, "sets") {
		_ = set
		add(h.Expr(string(props.Input)+" instanceof Set"), false)
	}
	for _, m := range h.GetSlice(props.Metadata, "maps") {
		_ = m
		add(h.Expr(string(props.Input)+" instanceof Map"), false)
	}
	if props.Config.Decoder != nil {
		top = append(top, CheckerProgrammerBinary{
			Expression: props.Config.Decoder(CheckerProgrammerDecodeHookProps{
				Metadata: props.Metadata,
				Input:    props.Input,
				Explore:  props.Explore,
			}),
			Combined: true,
		})
	}
	if len(binaries) == 0 && len(top) == 0 {
		return successExpression(props.Config)
	}
	joined := combineBinaries("or", append(top, binaries...))
	if props.Config.Combiner != nil {
		return props.Config.Combiner(CheckerProgrammerCombinerProps{
			Explore:  props.Explore,
			Logic:    "or",
			Input:    props.Input,
			Binaries: append(top, binaries...),
			Expected: metadataExpected(props.Metadata),
		})
	}
	if props.Config.Joiner.Full != nil {
		return props.Config.Joiner.Full(CheckerProgrammerFullProps{
			Condition: joined,
			Input:     props.Input,
			Expected:  metadataExpected(props.Metadata),
			Explore:   props.Explore,
		})
	}
	return joined
}

type CheckerProgrammerDecodeProps struct {
	Config   CheckerProgrammerConfig
	Metadata h.Metadata
	Input    h.Expression
	Explore  FeatureProgrammerExplore
}

func (checkerProgrammerNamespace) DecodeObject(props FeatureProgrammerDecodeObjectProps) h.Expression {
	return FeatureProgrammer.DecodeObject(props)
}

func (checkerProgrammerNamespace) DecodeArray(props FeatureProgrammerArrayDecodeProps) h.Expression {
	return FeatureProgrammer.DecodeArray(props)
}

func configureChecker(props CheckerProgrammerComposeProps) FeatureProgrammerConfig {
	initializer := func(FeatureProgrammerInitializerProps) FeatureProgrammerInitializerOutput {
		return FeatureProgrammerInitializerOutput{Metadata: h.Metadata{}, Collection: nil}
	}
	decoder := func(next FeatureProgrammerDecodeProps) h.ConciseBody {
		return h.ConciseBody(CheckerProgrammer.Decode(CheckerProgrammerDecodeProps{
			Config:   props.Config,
			Metadata: next.Metadata,
			Input:    next.Input,
			Explore:  next.Explore,
		}))
	}
	return FeatureProgrammerConfig{
		Prefix:      props.Config.Prefix,
		Path:        props.Config.Path,
		Trace:       props.Config.Trace,
		Initializer: initializer,
		Decoder:     decoder,
		Objector: FeatureProgrammerObjector{
			Checker: func(p FeatureProgrammerObjectDecodeProps) h.Expression {
				return CheckerProgrammer.Decode(CheckerProgrammerDecodeProps{
					Config:   props.Config,
					Metadata: p.Metadata,
					Input:    p.Input,
					Explore:  p.Explore,
				})
			},
			Decoder: func(p FeatureProgrammerObjectDecodeProps) h.Expression {
				return CheckerProgrammer.Decode(CheckerProgrammerDecodeProps{
					Config:   props.Config,
					Metadata: p.Object,
					Input:    p.Input,
					Explore:  p.Explore,
				})
			},
			Joiner: func(p FeatureProgrammerJoinerProps) h.ConciseBody {
				if props.Config.Joiner.Object != nil {
					return h.ConciseBody(props.Config.Joiner.Object(CheckerProgrammerObjectJoinProps{Input: p.Input, Entries: p.Entries}))
				}
				return h.ConciseBody("true")
			},
			Unionizer: func(p FeatureProgrammerUnionizerProps) h.Expression {
				results := h.UnionExplorer.Object(p.Input, p.Objects)
				expressions := make([]h.Expression, 0, len(results))
				for _, result := range results {
					expressions = append(expressions, result.Expression)
				}
				return h.LogicalOr(expressions...)
			},
			Failure: func(p FeatureProgrammerFailureProps) h.Statement {
				if props.Config.Joiner.Failure != nil {
					return h.StatementOf(string(props.Config.Joiner.Failure(CheckerProgrammerFailureProps{Input: p.Input, Expected: p.Expected, Explore: p.Explore})))
				}
				return h.StatementOf("false")
			},
		},
	}
}

func atomist(config CheckerProgrammerConfig, entry h.ICheckEntry, input h.Expression, explore FeatureProgrammerExplore) h.Expression {
	if config.Atomist != nil {
		return config.Atomist(CheckerProgrammerAtomistProps{Entry: entry, Input: input, Explore: explore})
	}
	if entry.Expression == nil {
		return successExpression(config)
	}
	return *entry.Expression
}

func atomicExpression(input h.Expression, typ string, numeric bool) h.Expression {
	switch typ {
	case "boolean":
		return h.Expr(`"boolean" === typeof ` + string(input))
	case "bigint":
		return h.Expr(`"bigint" === typeof ` + string(input))
	case "number":
		if numeric {
			return h.Expr(`"number" === typeof ` + string(input))
		}
		return h.Expr(`"number" === typeof ` + string(input) + ` && Number.isFinite(` + string(input) + `)`)
	case "string":
		return h.Expr(`"string" === typeof ` + string(input))
	default:
		return h.Expr("true")
	}
}

func literalExpression(value any) h.Expression {
	switch v := value.(type) {
	case string:
		return h.Str(v)
	case bool:
		if v {
			return h.Expr("true")
		}
		return h.Expr("false")
	case nil:
		return h.Expr("null")
	default:
		return h.Expr(fmt.Sprint(v))
	}
}

func combineBinaries(logic string, binaries []CheckerProgrammerBinary) h.Expression {
	expressions := make([]h.Expression, 0, len(binaries))
	for _, binary := range binaries {
		expressions = append(expressions, binary.Expression)
	}
	if logic == "and" {
		return h.LogicalAnd(expressions...)
	}
	return h.LogicalOr(expressions...)
}

func metadataExpected(metadata h.Metadata) string {
	if name := h.GetName(metadata); name != "" {
		return name
	}
	names := make([]string, 0)
	for _, key := range []string{"constants", "atomics", "templates", "arrays", "tuples", "objects", "natives", "sets", "maps"} {
		for _, elem := range h.GetSlice(metadata, key) {
			if name := h.GetName(elem); name != "" {
				names = append(names, name)
			}
		}
	}
	if len(names) == 0 {
		return "unknown"
	}
	return strings.Join(names, " | ")
}

func successExpression(config CheckerProgrammerConfig) h.Expression {
	if config.Success != "" {
		return config.Success
	}
	return h.Expr("true")
}
