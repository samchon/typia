package internal

import (
	"fmt"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type checkerProgrammerNamespace struct{}

var CheckerProgrammer = checkerProgrammerNamespace{}

type CheckerProgrammer_IConfig struct {
	Prefix   string
	Path     bool
	Trace    bool
	Equals   bool
	Numeric  bool
	Addition func() []*shimast.Node
	Decoder  func(props CheckerProgrammer_DecoderProps) *shimast.Node
	Combiner CheckerProgrammer_IConfig_Combiner
	Atomist  func(props CheckerProgrammer_AtomistProps) *shimast.Node
	Joiner   CheckerProgrammer_IConfig_IJoiner
	Success  *shimast.Expression
}

type CheckerProgrammer_IConfig_Combiner func(props CheckerProgrammer_CombinerProps) *shimast.Node

type CheckerProgrammer_CombinerProps struct {
	Explore  CheckerProgrammer_IExplore
	Logic    string
	Input    *shimast.Expression
	Binaries []CheckerProgrammer_IBinary
	Expected string
}

type CheckerProgrammer_IConfig_IJoiner struct {
	Object   func(props CheckerProgrammer_JoinerObjectProps) *shimast.Node
	Array    func(props CheckerProgrammer_JoinerArrayProps) *shimast.Node
	Tuple    func(exprs []*shimast.Node) *shimast.Node
	Failure  func(props CheckerProgrammer_JoinerFailureProps) *shimast.Node
	Is       func(expression *shimast.Expression) *shimast.Node
	Required func(exp *shimast.Expression) *shimast.Node
	Full     func(props CheckerProgrammer_JoinerFullProps) *shimast.Node
}

type CheckerProgrammer_JoinerObjectProps struct {
	Input   *shimast.Expression
	Entries []nativehelpers.IExpressionEntry
	Object  *nativemetadata.MetadataObjectType
}

type CheckerProgrammer_JoinerArrayProps struct {
	Input *shimast.Expression
	Arrow *shimast.Node
}

type CheckerProgrammer_JoinerFailureProps struct {
	Input    *shimast.Expression
	Expected string
	Explore  *FeatureProgrammer_IExplore
}

type CheckerProgrammer_JoinerFullProps struct {
	Condition *shimast.Expression
	Input     *shimast.Expression
	Expected  string
	Explore   CheckerProgrammer_IExplore
}

type CheckerProgrammer_IExplore = FeatureProgrammer_IExplore

type CheckerProgrammer_IBinary struct {
	Expression *shimast.Node
	Combined   bool
}

type CheckerProgrammer_AtomistProps struct {
	Entry   nativehelpers.ICheckEntry
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

type CheckerProgrammer_ComposeProps struct {
	Context nativecontext.ITypiaContext
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

type CheckerProgrammer_WriteProps = CheckerProgrammer_ComposeProps

type CheckerProgrammer_WriteObjectFunctionsProps struct {
	Context    nativecontext.ITypiaContext
	Config     CheckerProgrammer_IConfig
	Functor    *nativehelpers.FunctionProgrammer
	Collection *nativemetadata.MetadataCollection
}

type CheckerProgrammer_WriteArrayFunctionsProps = CheckerProgrammer_WriteObjectFunctionsProps
type CheckerProgrammer_WriteTupleFunctionsProps = CheckerProgrammer_WriteObjectFunctionsProps

type CheckerProgrammer_DecoderProps struct {
	Metadata *nativemetadata.MetadataSchema
	Input    *shimast.Expression
	Explore  CheckerProgrammer_IExplore
}

type CheckerProgrammer_DecodeProps struct {
	Context  nativecontext.ITypiaContext
	Config   CheckerProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Expression
	Metadata *nativemetadata.MetadataSchema
	Explore  CheckerProgrammer_IExplore
}

type CheckerProgrammer_DecodeObjectProps struct {
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Object  *nativemetadata.MetadataObjectType
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

var checkerProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (checkerProgrammerNamespace) Compose(props CheckerProgrammer_ComposeProps) FeatureProgrammer_IComposed {
	return FeatureProgrammer.Compose(FeatureProgrammer_ComposeProps{
		Context: props.Context,
		Config:  checkerProgrammer_configure(props.Context, props.Config, props.Functor),
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
}

func (checkerProgrammerNamespace) Write(props CheckerProgrammer_WriteProps) *shimast.Node {
	return FeatureProgrammer.Write(FeatureProgrammer_WriteProps{
		Config:  checkerProgrammer_configure(props.Context, props.Config, props.Functor),
		Context: props.Context,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
}

func (checkerProgrammerNamespace) Write_object_functions(props CheckerProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
	return FeatureProgrammer.Write_object_functions(FeatureProgrammer_WriteObjectFunctionsProps{
		Config:     checkerProgrammer_configure(props.Context, props.Config, props.Functor),
		Context:    props.Context,
		Collection: props.Collection,
	})
}

func (checkerProgrammerNamespace) Write_union_functions(props CheckerProgrammer_WriteObjectFunctionsProps) []*shimast.Node {
	config := props.Config
	config.Numeric = false
	return FeatureProgrammer.Write_union_functions(FeatureProgrammer_WriteUnionFunctionsProps{
		Config:     checkerProgrammer_configure(props.Context, config, props.Functor),
		Collection: props.Collection,
	})
}

func (checkerProgrammerNamespace) Write_array_functions(props CheckerProgrammer_WriteArrayFunctionsProps) []*shimast.Node {
	arrays := props.Collection.Arrays()
	output := []*shimast.Node{}
	for i, typ := range arrays {
		if typ.Recursive == false {
			continue
		}
		input := checkerProgrammer_factory.NewIdentifier("input")
		output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%sa%d", props.Config.Prefix, i),
			Value: checkerProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
					Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  input,
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				checkerProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				checkerProgrammer_decode_array_inline(checkerProgrammer_decodeArrayInlineProps{
					Config:  props.Config,
					Context: props.Context,
					Functor: props.Functor,
					Input:   input,
					Array: nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
						Type: typ,
						Tags: [][]nativemetadata.IMetadataTypeTag{},
					}),
					Explore: CheckerProgrammer_IExplore{
						Tracable: props.Config.Trace,
						Source:   "function",
						From:     "array",
						Postfix:  "",
					},
				}),
			),
		}))
	}
	return output
}

func (checkerProgrammerNamespace) Write_tuple_functions(props CheckerProgrammer_WriteTupleFunctionsProps) []*shimast.Node {
	tuples := props.Collection.Tuples()
	output := []*shimast.Node{}
	for i, tuple := range tuples {
		if tuple.Recursive == false {
			continue
		}
		input := checkerProgrammer_factory.NewIdentifier("input")
		output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
			Value: checkerProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
					Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  input,
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				checkerProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				checkerProgrammer_decode_tuple_inline(checkerProgrammer_decodeTupleInlineProps{
					Config:  props.Config,
					Context: props.Context,
					Functor: props.Functor,
					Input:   input,
					Tuple:   tuple,
					Explore: CheckerProgrammer_IExplore{
						Tracable: props.Config.Trace,
						Source:   "function",
						From:     "array",
						Postfix:  "",
					},
				}),
			),
		}))
	}
	return output
}

func checkerProgrammer_configure(context nativecontext.ITypiaContext, config CheckerProgrammer_IConfig, functor *nativehelpers.FunctionProgrammer) FeatureProgrammer_IConfig {
	return FeatureProgrammer_IConfig{
		Types: FeatureProgrammer_IConfig_ITypes{
			Input: func(_ *shimchecker.Type, _ *string) *shimast.TypeNode {
				return nativefactories.TypeFactory.Keyword("any")
			},
			Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
				typeName := ""
				if name != nil {
					typeName = *name
				} else {
					typeName = nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
						Checker: context.Checker,
						Type:    t,
					})
				}
				return checkerProgrammer_factory.NewTypePredicateNode(
					nil,
					checkerProgrammer_factory.NewIdentifier("input"),
					checkerProgrammer_factory.NewTypeReferenceNode(
						checkerProgrammer_factory.NewIdentifier(typeName),
						nil,
					),
				)
			},
		},
		Trace:  config.Trace,
		Path:   config.Path,
		Prefix: config.Prefix,
		Initializer: func(next FeatureProgrammer_InitializerProps) FeatureProgrammer_InitializerOutput {
			collection := nativemetadata.NewMetadataCollection()
			result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
				Checker:     next.Context.Checker,
				Transformer: next.Context.Transformer,
				Options: nativefactories.MetadataFactory_IOptions{
					Escape:   false,
					Constant: true,
					Absorb:   true,
				},
				Components: collection,
				Type:       next.Type,
			})
			if result.Success == false {
				panic(nativecontext.TransformerError_from(struct {
					Code   string
					Errors []nativecontext.TransformerError_MetadataFactory_IError
				}{
					Code:   next.Functor.Method,
					Errors: checkerProgrammer_errors(result.Errors),
				}))
			}
			return FeatureProgrammer_InitializerOutput{
				Collection: collection,
				Metadata:   result.Data,
			}
		},
		Addition: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
			if config.Addition == nil {
				return []*shimast.Node{}
			}
			return config.Addition()
		},
		Decoder: func(next FeatureProgrammer_DecoderProps) *shimast.Node {
			if config.Decoder != nil {
				return config.Decoder(CheckerProgrammer_DecoderProps{
					Metadata: next.Metadata,
					Input:    next.Input,
					Explore:  next.Explore,
				})
			}
			return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
				Context:  context,
				Config:   config,
				Functor:  functor,
				Input:    next.Input,
				Metadata: next.Metadata,
				Explore:  next.Explore,
			})
		},
		Objector: FeatureProgrammer_IConfig_IObjector{
			Checker: func(next FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
				if config.Decoder != nil {
					return config.Decoder(CheckerProgrammer_DecoderProps{
						Metadata: next.Metadata,
						Input:    next.Input,
						Explore:  next.Explore,
					})
				}
				return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
					Context:  context,
					Config:   config,
					Functor:  functor,
					Input:    next.Input,
					Metadata: next.Metadata,
					Explore:  next.Explore,
				})
			},
			Decoder: func(next FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
				return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
					Config:  config,
					Functor: functor,
					Input:   next.Input,
					Object:  next.Object,
					Explore: next.Explore,
				})
			},
			Joiner: func(next FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
				return config.Joiner.Object(CheckerProgrammer_JoinerObjectProps{
					Input:   next.Input,
					Entries: next.Entries,
					Object:  next.Object,
				})
			},
			Unionizer: func(next FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node {
				if config.Equals {
					return nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
						Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
							return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
								Config:  config,
								Functor: functor,
								Object:  v.Object,
								Input:   v.Input,
								Explore: featureProgrammer_as_explore(v.Explore),
							})
						},
						Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
							explore := featureProgrammer_as_explore(v.Explore)
							explore.Tracable = true
							return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
								Config:  config,
								Functor: functor,
								Input:   v.Input,
								Object:  v.Object,
								Explore: explore,
							})
						},
						Success: func(expr *shimast.Expression) *shimast.Node {
							if config.Joiner.Is != nil {
								return config.Joiner.Is(expr)
							}
							return expr
						},
						Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
							return checkerProgrammer_factory.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
								Input:    v.Input,
								Expected: v.Expected,
								Explore:  nil,
							}))
						},
						Input:   next.Input,
						Objects: next.Objects,
						Explore: next.Explore,
					})
				}
				binaries := make([]CheckerProgrammer_IBinary, 0, len(next.Objects))
				for _, object := range next.Objects {
					binaries = append(binaries, CheckerProgrammer_IBinary{
						Expression: CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
							Config:  config,
							Functor: functor,
							Object:  object,
							Input:   next.Input,
							Explore: next.Explore,
						}),
						Combined: true,
					})
				}
				names := make([]string, 0, len(next.Objects))
				for _, object := range next.Objects {
					names = append(names, object.Name)
				}
				return config.Combiner(CheckerProgrammer_CombinerProps{
					Logic:    "or",
					Explore:  next.Explore,
					Input:    next.Input,
					Binaries: binaries,
					Expected: "(" + strings.Join(names, " | ") + ")",
				})
			},
			Failure: func(next FeatureProgrammer_ObjectorFailureProps) *shimast.Node {
				return checkerProgrammer_factory.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
					Input:    next.Input,
					Expected: next.Expected,
					Explore:  next.Explore,
				}))
			},
			Is:       config.Joiner.Is,
			Required: config.Joiner.Required,
			Full: func(next FeatureProgrammer_ObjectorFullProps) *shimast.Node {
				if config.Joiner.Full == nil {
					return next.Condition
				}
				return config.Joiner.Full(CheckerProgrammer_JoinerFullProps{
					Condition: next.Condition,
					Input:     next.Input,
					Expected:  next.Expected,
					Explore:   next.Explore,
				})
			},
			Type: nativefactories.TypeFactory.Keyword("boolean"),
		},
		Generator: FeatureProgrammer_IConfig_IGenerator{
			Unions: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
				if config.Numeric == false {
					return nil
				}
				next := config
				next.Numeric = false
				return FeatureProgrammer.Write_union_functions(FeatureProgrammer_WriteUnionFunctionsProps{
					Config:     checkerProgrammer_configure(context, next, functor),
					Collection: collection,
				})
			},
			Arrays: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
				return CheckerProgrammer.Write_array_functions(CheckerProgrammer_WriteArrayFunctionsProps{
					Context:    context,
					Config:     config,
					Functor:    functor,
					Collection: collection,
				})
			},
			Tuples: func(collection *nativemetadata.MetadataCollection) []*shimast.Node {
				return CheckerProgrammer.Write_tuple_functions(CheckerProgrammer_WriteTupleFunctionsProps{
					Context:    context,
					Config:     config,
					Functor:    functor,
					Collection: collection,
				})
			},
		},
	}
}

func (checkerProgrammerNamespace) Decode(props CheckerProgrammer_DecodeProps) *shimast.Node {
	if props.Metadata.Any {
		return props.Config.Success
	}

	top := []CheckerProgrammer_IBinary{}
	binaries := []CheckerProgrammer_IBinary{}
	add := func(next struct {
		Exact bool
		Left  *shimast.Expression
		Right *shimast.Expression
	}) {
		checkerProgrammer_create_add(&binaries, props.Input, next.Exact, next.Left, next.Right)
	}
	getConstantValue := func(value any) *shimast.Node {
		switch v := value.(type) {
		case string:
			return checkerProgrammer_factory.NewStringLiteral(v, shimast.TokenFlagsNone)
		case int64:
			return nativefactories.ExpressionFactory.Bigint(v)
		case uint64:
			return nativefactories.ExpressionFactory.Bigint(v)
		case bool:
			if v {
				return checkerProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword)
			}
			return checkerProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword)
		default:
			return checkerProgrammer_factory.NewIdentifier(fmt.Sprint(value))
		}
	}

	checkOptional := props.Metadata.Empty() || props.Metadata.IsUnionBucket()
	if checkOptional || props.Metadata.Nullable {
		if props.Metadata.Nullable {
			add(struct {
				Exact bool
				Left  *shimast.Expression
				Right *shimast.Expression
			}{Exact: props.Metadata.Nullable, Left: nativefactories.ValueFactory.NULL()})
		} else {
			checkerProgrammer_create_add(&top, props.Input, props.Metadata.Nullable, nativefactories.ValueFactory.NULL(), nil)
		}
	}
	if checkOptional || !props.Metadata.IsRequired() {
		if props.Metadata.IsRequired() {
			checkerProgrammer_create_add(&top, props.Input, false, nativefactories.ValueFactory.UNDEFINED(), nil)
		} else {
			add(struct {
				Exact bool
				Left  *shimast.Expression
				Right *shimast.Expression
			}{Exact: true, Left: nativefactories.ValueFactory.UNDEFINED()})
		}
	}

	if len(props.Metadata.Functions) != 0 {
		if nativehelpers.OptionPredicator.Functional(props.Context.Options) || props.Metadata.Size() != 1 {
			add(struct {
				Exact bool
				Left  *shimast.Expression
				Right *shimast.Expression
			}{
				Exact: true,
				Left:  checkerProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
				Right: nativefactories.ValueFactory.TYPEOF(props.Input),
			})
		} else {
			binaries = append(binaries, CheckerProgrammer_IBinary{Combined: false, Expression: props.Config.Success})
		}
	}

	constants := []*nativemetadata.MetadataConstant{}
	constantLength := 0
	for _, c := range props.Metadata.Constants {
		if nativehelpers.AtomicPredicator.Constant(struct {
			Metadata *nativemetadata.MetadataSchema
			Name     string
		}{Metadata: props.Metadata, Name: c.Type}) {
			constants = append(constants, c)
			constantLength += len(c.Values)
		}
	}
	if constantLength >= 10 {
		values := []*shimast.Node{}
		for _, c := range constants {
			for _, v := range c.Values {
				switch value := v.Value.(type) {
				case bool:
					if value {
						values = append(values, checkerProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword))
					} else {
						values = append(values, checkerProgrammer_factory.NewKeywordExpression(shimast.KindFalseKeyword))
					}
				case int64, uint64:
					values = append(values, nativefactories.ExpressionFactory.Bigint(value))
				case int, float64:
					values = append(values, nativefactories.ExpressionFactory.Number(value))
				default:
					values = append(values, checkerProgrammer_factory.NewStringLiteral(fmt.Sprint(value), shimast.TokenFlagsNone))
				}
			}
		}
		setName := props.Functor.EmplaceVariable(
			fmt.Sprintf("%sv%d", props.Config.Prefix, props.Functor.Increment()),
			checkerProgrammer_factory.NewNewExpression(
				checkerProgrammer_factory.NewIdentifier("Set"),
				nil,
				checkerProgrammer_factory.NewNodeList([]*shimast.Node{
					checkerProgrammer_factory.NewArrayLiteralExpression(checkerProgrammer_factory.NewNodeList(values), false),
				}),
			),
		)
		add(struct {
			Exact bool
			Left  *shimast.Expression
			Right *shimast.Expression
		}{
			Exact: true,
			Left:  checkerProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
			Right: checkerProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(setName, "has"),
				nil,
				nil,
				checkerProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			),
		})
	} else {
		for _, c := range constants {
			for _, v := range c.Values {
				add(struct {
					Exact bool
					Left  *shimast.Expression
					Right *shimast.Expression
				}{Exact: true, Left: getConstantValue(v.Value)})
			}
		}
	}

	for _, atom := range props.Metadata.Atomics {
		if nativehelpers.AtomicPredicator.Atomic(struct {
			Metadata *nativemetadata.MetadataSchema
			Name     string
		}{Metadata: props.Metadata, Name: atom.Type}) == false {
			continue
		}
		switch atom.Type {
		case "number":
			binaries = append(binaries, CheckerProgrammer_IBinary{
				Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
					Explore: props.Explore,
					Entry: nativeiterate.Check_number(nativeiterate.Check_numberProps{
						Context: props.Context,
						Numeric: props.Config.Numeric,
						Atomic:  atom,
						Input:   props.Input,
					}),
					Input: props.Input,
				}),
				Combined: false,
			})
		case "bigint":
			binaries = append(binaries, CheckerProgrammer_IBinary{
				Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
					Explore: props.Explore,
					Entry: nativeiterate.Check_bigint(nativeiterate.Check_bigintProps{
						Context: props.Context,
						Atomic:  atom,
						Input:   props.Input,
					}),
					Input: props.Input,
				}),
				Combined: false,
			})
		case "string":
			binaries = append(binaries, CheckerProgrammer_IBinary{
				Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
					Explore: props.Explore,
					Entry: nativeiterate.Check_string(nativeiterate.Check_stringProps{
						Context: props.Context,
						Atomic:  atom,
						Input:   props.Input,
					}),
					Input: props.Input,
				}),
				Combined: false,
			})
		default:
			add(struct {
				Exact bool
				Left  *shimast.Expression
				Right *shimast.Expression
			}{
				Exact: true,
				Left:  checkerProgrammer_factory.NewStringLiteral(atom.Type, shimast.TokenFlagsNone),
				Right: nativefactories.ValueFactory.TYPEOF(props.Input),
			})
		}
	}

	if len(props.Metadata.Templates) != 0 && nativehelpers.AtomicPredicator.Template(props.Metadata) {
		binaries = append(binaries, CheckerProgrammer_IBinary{
			Expression: props.Config.Atomist(CheckerProgrammer_AtomistProps{
				Explore: props.Explore,
				Entry: nativeiterate.Check_template(nativeiterate.Check_templateProps{
					Templates: props.Metadata.Templates,
					Input:     props.Input,
				}),
				Input: props.Input,
			}),
			Combined: false,
		})
	}

	for _, native := range props.Metadata.Natives {
		binaries = append(binaries, CheckerProgrammer_IBinary{
			Expression: nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: native.Name, Input: props.Input}),
			Combined:   false,
		})
	}

	instances := []checkerProgrammer_IInstance{}
	prepare := func(next checkerProgrammer_IInstance) {
		instances = append(instances, next)
	}
	if len(props.Metadata.Sets) != 0 {
		body := (*shimast.Node)(nil)
		any := false
		names := []string{}
		for _, elem := range props.Metadata.Sets {
			names = append(names, "Set<"+elem.Value.GetName()+">")
			if elem.Value.Any {
				any = true
			}
		}
		if any == false {
			explore := props.Explore
			explore.From = "array"
			body = checkerProgrammer_explore_sets(checkerProgrammer_exploreSetsProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Sets: props.Metadata.Sets, Input: props.Input, Explore: explore})
		}
		prepare(checkerProgrammer_IInstance{
			Head:     nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: "Set", Input: props.Input}),
			Expected: strings.Join(names, " | "),
			Body:     body,
		})
	}
	if len(props.Metadata.Maps) != 0 {
		body := (*shimast.Node)(nil)
		any := false
		names := []string{}
		for _, elem := range props.Metadata.Maps {
			names = append(names, "Map<"+elem.Key.GetName()+", "+elem.Value.GetName()+">")
			if elem.Key.Any && elem.Value.Any {
				any = true
			}
		}
		if any == false {
			explore := props.Explore
			explore.From = "array"
			body = checkerProgrammer_explore_maps(checkerProgrammer_exploreMapsProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Maps: props.Metadata.Maps, Input: props.Input, Explore: explore})
		}
		prepare(checkerProgrammer_IInstance{
			Head:     nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: "Map", Input: props.Input}),
			Expected: strings.Join(names, " | "),
			Body:     body,
		})
	}

	if len(props.Metadata.Tuples)+len(props.Metadata.Arrays) > 0 {
		body := (*shimast.Node)(nil)
		expected := []string{}
		for _, tuple := range props.Metadata.Tuples {
			expected = append(expected, tuple.Type.Name)
		}
		for _, array := range props.Metadata.Arrays {
			expected = append(expected, array.GetName())
		}
		if len(props.Metadata.Arrays) == 0 {
			explore := props.Explore
			explore.From = "array"
			if len(props.Metadata.Tuples) == 1 {
				body = checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Tuple: props.Metadata.Tuples[0], Input: props.Input, Explore: explore})
			} else {
				body = checkerProgrammer_explore_tuples(checkerProgrammer_exploreTuplesProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Tuples: props.Metadata.Tuples, Input: props.Input, Explore: explore})
			}
		} else if checkerProgrammer_array_any(props.Metadata.Arrays) {
			body = nil
		} else if len(props.Metadata.Tuples) == 0 {
			explore := props.Explore
			explore.From = "array"
			if len(props.Metadata.Arrays) == 1 {
				body = checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Array: props.Metadata.Arrays[0], Input: props.Input, Explore: explore})
			} else {
				body = checkerProgrammer_explore_arrays(checkerProgrammer_exploreArraysProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Arrays: props.Metadata.Arrays, Input: props.Input, Explore: explore})
			}
		} else {
			body = checkerProgrammer_explore_arrays_and_tuples(checkerProgrammer_exploreArraysAndTuplesProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Definitions: checkerProgrammer_array_tuple_definitions(props.Metadata.Arrays, props.Metadata.Tuples), Input: props.Input, Explore: props.Explore})
		}
		prepare(checkerProgrammer_IInstance{
			Head: props.Config.Atomist(CheckerProgrammer_AtomistProps{
				Explore: props.Explore,
				Entry: nativehelpers.ICheckEntry{
					Expected:   strings.Join(expected, " | "),
					Expression: nativefactories.ExpressionFactory.IsArray(props.Input),
					Conditions: [][]nativehelpers.ICheckEntry_ICondition{},
				},
				Input: props.Input,
			}),
			Expected: strings.Join(expected, " | "),
			Body:     body,
		})
	}

	if len(props.Metadata.Objects) > 0 {
		checkArray := false
		for _, obj := range props.Metadata.Objects {
			all := true
			for _, prop := range obj.Type.Properties {
				if prop.Key.IsSoleLiteral() && prop.Value.IsRequired() {
					all = false
					break
				}
			}
			if all {
				checkArray = true
				break
			}
		}
		names := []string{}
		for _, obj := range props.Metadata.Objects {
			names = append(names, obj.Type.Name)
		}
		explore := props.Explore
		explore.From = "object"
		prepare(checkerProgrammer_IInstance{
			Head: nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
				CheckNull:  true,
				CheckArray: checkArray,
				Input:      props.Input,
			}),
			Expected: strings.Join(names, " | "),
			Body: checkerProgrammer_explore_objects(checkerProgrammer_exploreObjectsProps{
				Config: props.Config, Functor: props.Functor, Metadata: props.Metadata, Input: props.Input, Explore: explore,
			}),
		})
	}

	if len(instances) != 0 {
		transformer := func(instance checkerProgrammer_IInstance) CheckerProgrammer_IBinary {
			if instance.Body != nil {
				return CheckerProgrammer_IBinary{
					Expression: checkerProgrammer_and(instance.Head, instance.Body),
					Combined:   true,
				}
			}
			return CheckerProgrammer_IBinary{Expression: instance.Head, Combined: false}
		}
		if len(instances) == 1 {
			instance := instances[0]
			if instance.Body != nil {
				binaries = append(binaries, CheckerProgrammer_IBinary{
					Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{
						Explore: props.Explore,
						Logic:   "and",
						Input:   props.Input,
						Binaries: []CheckerProgrammer_IBinary{
							{Expression: instance.Head, Combined: false},
							{Expression: instance.Body, Combined: true},
						},
						Expected: props.Metadata.GetName(),
					}),
					Combined: true,
				})
			} else {
				binaries = append(binaries, transformer(instance))
			}
		} else {
			transformed := make([]CheckerProgrammer_IBinary, 0, len(instances))
			for _, instance := range instances {
				transformed = append(transformed, transformer(instance))
			}
			binaries = append(binaries, CheckerProgrammer_IBinary{
				Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{
					Explore:  props.Explore,
					Logic:    "or",
					Input:    props.Input,
					Binaries: transformed,
					Expected: props.Metadata.GetName(),
				}),
				Combined: true,
			})
		}
	}

	if props.Metadata.Escaped != nil {
		var expression *shimast.Node
		if props.Metadata.Escaped.Original.Size() == 1 && len(props.Metadata.Escaped.Original.Natives) == 1 {
			expression = nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: props.Metadata.Escaped.Original.Natives[0].Name, Input: props.Input})
		} else {
			expression = checkerProgrammer_and(
				CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Metadata: props.Metadata.Escaped.Original, Input: props.Input, Explore: props.Explore}),
				checkerProgrammer_and(
					checkerProgrammer_decode_to_json(struct {
						Input     *shimast.Expression
						CheckNull bool
					}{Input: props.Input, CheckNull: false}),
					checkerProgrammer_decode_escaped(checkerProgrammer_decodeEscapedProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Metadata: props.Metadata.Escaped.Returns, Input: props.Input, Explore: props.Explore}),
				),
			)
		}
		binaries = append(binaries, CheckerProgrammer_IBinary{Combined: false, Expression: expression})
	}

	if len(top) != 0 && len(binaries) != 0 {
		next := append([]CheckerProgrammer_IBinary{}, top...)
		next = append(next, CheckerProgrammer_IBinary{
			Expression: props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "or", Input: props.Input, Binaries: binaries, Expected: props.Metadata.GetName()}),
			Combined:   true,
		})
		return props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "and", Input: props.Input, Binaries: next, Expected: props.Metadata.GetName()})
	}
	if len(binaries) != 0 {
		return props.Config.Combiner(CheckerProgrammer_CombinerProps{Explore: props.Explore, Logic: "or", Input: props.Input, Binaries: binaries, Expected: props.Metadata.GetName()})
	}
	return props.Config.Success
}

func (checkerProgrammerNamespace) Decode_object(props CheckerProgrammer_DecodeObjectProps) *shimast.Node {
	props.Object.Validated = true
	return FeatureProgrammer.Decode_object(FeatureProgrammer_DecodeObjectProps{
		Config: FeatureProgrammer_DecodeObjectConfig{
			Prefix: props.Config.Prefix,
			Path:   props.Config.Path,
			Trace:  props.Config.Trace,
		},
		Functor: props.Functor,
		Object:  props.Object,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type checkerProgrammer_decodeArrayProps struct {
	Config  CheckerProgrammer_IConfig
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Array   *nativemetadata.MetadataArray
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_decodeArrayInlineProps = checkerProgrammer_decodeArrayProps

func checkerProgrammer_decode_array(props checkerProgrammer_decodeArrayProps) *shimast.Node {
	if props.Array.Type.Recursive == false {
		return checkerProgrammer_decode_array_inline(props)
	}
	arrayExplore := props.Explore
	arrayExplore.Source = "function"
	arrayExplore.From = "array"
	index := 0
	if props.Array.Type.Index != nil {
		index = *props.Array.Type.Index
	}
	return checkerProgrammer_or(
		checkerProgrammer_factory.NewCallExpression(
			checkerProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, index))),
			nil,
			nil,
			checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
				Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: arrayExplore,
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		),
		props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
			Input:    props.Input,
			Expected: props.Array.Type.Name,
			Explore:  &arrayExplore,
		}),
	)
}

func checkerProgrammer_decode_array_inline(props checkerProgrammer_decodeArrayInlineProps) *shimast.Node {
	length := nativeiterate.Check_array_length(nativeiterate.Check_array_lengthProps{
		Context: props.Context,
		Array:   props.Array,
		Input:   props.Input,
	})
	main := FeatureProgrammer.Decode_array(FeatureProgrammer_DecodeArrayProps{
		Config: FeatureProgrammer_DecodeArrayConfig{
			Prefix: props.Config.Prefix,
			Trace:  props.Config.Trace,
			Path:   props.Config.Path,
			Decoder: func(next FeatureProgrammer_DecoderProps) *shimast.Node {
				return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
					Context:  props.Context,
					Config:   props.Config,
					Functor:  props.Functor,
					Input:    next.Input,
					Metadata: next.Metadata,
					Explore:  next.Explore,
				})
			},
		},
		Functor: props.Functor,
		Combiner: func(next struct {
			Input *shimast.Expression
			Arrow *shimast.Node
		}) *shimast.Node {
			return props.Config.Joiner.Array(CheckerProgrammer_JoinerArrayProps{
				Input: next.Input,
				Arrow: next.Arrow,
			})
		},
		Array:   props.Array,
		Input:   props.Input,
		Explore: props.Explore,
	})
	if length.Expression == nil && len(length.Conditions) == 0 {
		return main
	}
	return checkerProgrammer_and(
		props.Config.Atomist(CheckerProgrammer_AtomistProps{
			Explore: props.Explore,
			Input:   props.Input,
			Entry:   length,
		}),
		main,
	)
}

type checkerProgrammer_decodeTupleProps struct {
	Context nativecontext.ITypiaContext
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Tuple   *nativemetadata.MetadataTuple
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_decodeTupleInlineProps struct {
	Context nativecontext.ITypiaContext
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Tuple   *nativemetadata.MetadataTupleType
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_decode_tuple(props checkerProgrammer_decodeTupleProps) *shimast.Node {
	if props.Tuple.Type.Recursive == false {
		return checkerProgrammer_decode_tuple_inline(checkerProgrammer_decodeTupleInlineProps{
			Context: props.Context,
			Config:  props.Config,
			Functor: props.Functor,
			Tuple:   props.Tuple.Type,
			Input:   props.Input,
			Explore: props.Explore,
		})
	}
	arrayExplore := props.Explore
	arrayExplore.Source = "function"
	arrayExplore.From = "array"
	index := 0
	if props.Tuple.Type.Index != nil {
		index = *props.Tuple.Type.Index
	}
	return checkerProgrammer_or(
		checkerProgrammer_factory.NewCallExpression(
			checkerProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, index))),
			nil,
			nil,
			checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
				Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: arrayExplore,
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		),
		props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
			Input:    props.Input,
			Expected: props.Tuple.Type.Name,
			Explore:  &arrayExplore,
		}),
	)
}

func checkerProgrammer_decode_tuple_inline(props checkerProgrammer_decodeTupleInlineProps) *shimast.Node {
	binaries := []*shimast.Node{}
	for index, metadata := range props.Tuple.Elements {
		if metadata.Rest != nil {
			continue
		}
		explore := props.Explore
		explore.From = "array"
		if len(props.Explore.Postfix) != 0 {
			explore.Postfix = checkerProgrammer_postfix_of_tuple(props.Explore.Postfix) + fmt.Sprintf("[%d]\"", index)
		} else {
			explore.Postfix = fmt.Sprintf("\"[%d]\"", index)
		}
		binaries = append(binaries, CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
			Context:  props.Context,
			Config:   props.Config,
			Functor:  props.Functor,
			Input:    checkerProgrammer_factory.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index), shimast.NodeFlagsNone),
			Metadata: metadata,
			Explore:  explore,
		}))
	}

	var rest *shimast.Node
	if len(props.Tuple.Elements) != 0 && props.Tuple.Elements[len(props.Tuple.Elements)-1].Rest != nil {
		last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
		explore := props.Explore
		start := len(props.Tuple.Elements) - 1
		explore.Start = &start
		rest = CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
			Config:  props.Config,
			Context: props.Context,
			Functor: props.Functor,
			Input: checkerProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(props.Input, "slice"),
				nil,
				nil,
				checkerProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements) - 1)}),
				shimast.NodeFlagsNone,
			),
			Metadata: checkerProgrammer_wrap_metadata_rest_tuple(last.Rest),
			Explore:  explore,
		})
	}

	arrayLength := nativefactories.IdentifierFactory.Access(props.Input, "length")
	entries := []CheckerProgrammer_IBinary{}
	if rest == nil {
		allRequired := true
		required := 0
		for _, elem := range props.Tuple.Elements {
			if elem.Optional == false {
				required++
			} else {
				allRequired = false
			}
		}
		if allRequired {
			entries = append(entries, CheckerProgrammer_IBinary{
				Combined: false,
				Expression: checkerProgrammer_equal(
					arrayLength,
					nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements)),
				),
			})
		} else {
			entries = append(entries, CheckerProgrammer_IBinary{
				Combined: false,
				Expression: checkerProgrammer_and(
					checkerProgrammer_binary(nativefactories.ExpressionFactory.Number(required), shimast.KindLessThanEqualsToken, arrayLength),
					checkerProgrammer_binary(nativefactories.ExpressionFactory.Number(len(props.Tuple.Elements)), shimast.KindGreaterThanEqualsToken, arrayLength),
				),
			})
		}
	}
	if props.Config.Joiner.Tuple != nil {
		entries = append(entries, CheckerProgrammer_IBinary{Expression: props.Config.Joiner.Tuple(binaries), Combined: true})
	} else {
		for _, expr := range binaries {
			entries = append(entries, CheckerProgrammer_IBinary{Expression: expr, Combined: true})
		}
	}
	if rest != nil {
		entries = append(entries, CheckerProgrammer_IBinary{Expression: rest, Combined: true})
	}
	names := make([]string, 0, len(props.Tuple.Elements))
	for _, elem := range props.Tuple.Elements {
		names = append(names, elem.GetName())
	}
	return props.Config.Combiner(CheckerProgrammer_CombinerProps{
		Explore:  props.Explore,
		Logic:    "and",
		Input:    props.Input,
		Binaries: entries,
		Expected: "[" + strings.Join(names, ", ") + "]",
	})
}

type checkerProgrammer_decodeEscapedProps struct {
	Config   CheckerProgrammer_IConfig
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Metadata *nativemetadata.MetadataSchema
	Input    *shimast.Expression
	Explore  CheckerProgrammer_IExplore
}

func checkerProgrammer_decode_escaped(props checkerProgrammer_decodeEscapedProps) *shimast.Node {
	return checkerProgrammer_factory.NewCallExpression(
		checkerProgrammer_factory.NewParenthesizedExpression(
			checkerProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				checkerProgrammer_factory.NewNodeList([]*shimast.Node{
					nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("any"), nil),
				}),
				nil,
				nil,
				checkerProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
					Context:  props.Context,
					Config:   props.Config,
					Functor:  props.Functor,
					Metadata: props.Metadata,
					Input:    checkerProgrammer_factory.NewIdentifier("input"),
					Explore:  props.Explore,
				}),
			),
		),
		nil,
		nil,
		checkerProgrammer_factory.NewNodeList([]*shimast.Node{
			checkerProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(props.Input, "toJSON"),
				nil,
				nil,
				nil,
				shimast.NodeFlagsNone,
			),
		}),
		shimast.NodeFlagsNone,
	)
}

type checkerProgrammer_exploreSetsProps struct {
	Context nativecontext.ITypiaContext
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Sets    []*nativemetadata.MetadataSet
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_sets(props checkerProgrammer_exploreSetsProps) *shimast.Node {
	return checkerProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
						Context:  props.Context,
						Config:   props.Config,
						Functor:  props.Functor,
						Input:    v.Input,
						Metadata: v.Definition.(*nativemetadata.MetadataSchema),
						Explore:  featureProgrammer_as_explore(v.Explore),
					})
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
						Config: props.Config, Context: props.Context, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore),
					})
				},
				Empty:   props.Config.Success,
				Success: props.Config.Success,
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					explore := featureProgrammer_as_explore(v.Explore)
					return checkerProgrammer_factory.NewReturnStatement(props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{Input: v.Input, Expected: v.Expected, Explore: &explore}))
				},
			},
			Parameters: []*shimast.Node{},
			Input:      props.Input,
			Sets:       props.Sets,
			Explore:    props.Explore,
		}),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type checkerProgrammer_exploreMapsProps struct {
	Context nativecontext.ITypiaContext
	Config  CheckerProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Expression
	Maps    []*nativemetadata.MetadataMap
	Explore CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_maps(props checkerProgrammer_exploreMapsProps) *shimast.Node {
	return checkerProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					pair := v.Definition.([]*nativemetadata.MetadataSchema)
					explore := featureProgrammer_as_explore(v.Explore)
					leftExplore := explore
					leftExplore.Postfix = explore.Postfix + "[0]"
					rightExplore := explore
					rightExplore.Postfix = explore.Postfix + "[1]"
					return checkerProgrammer_and(
						CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
							Config: props.Config, Context: props.Context, Functor: props.Functor,
							Input: checkerProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone), Metadata: pair[0], Explore: leftExplore,
						}),
						CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{
							Config: props.Config, Context: props.Context, Functor: props.Functor,
							Input: checkerProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1), shimast.NodeFlagsNone), Metadata: pair[1], Explore: rightExplore,
						}),
					)
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{
						Context: props.Context, Config: props.Config, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore),
					})
				},
				Empty:   props.Config.Success,
				Success: props.Config.Success,
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					explore := featureProgrammer_as_explore(v.Explore)
					return checkerProgrammer_factory.NewReturnStatement(props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{Input: v.Input, Expected: v.Expected, Explore: &explore}))
				},
			},
			Parameters: []*shimast.Node{},
			Input:      props.Input,
			Maps:       props.Maps,
			Explore:    props.Explore,
		}),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type checkerProgrammer_exploreTuplesProps struct {
	Config  CheckerProgrammer_IConfig
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Tuples  []*nativemetadata.MetadataTuple
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArraysProps struct {
	Config  CheckerProgrammer_IConfig
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Arrays  []*nativemetadata.MetadataArray
	Input   *shimast.Expression
	Explore CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArraysAndTuplesProps struct {
	Config      CheckerProgrammer_IConfig
	Context     nativecontext.ITypiaContext
	Functor     *nativehelpers.FunctionProgrammer
	Definitions []any
	Input       *shimast.Expression
	Explore     CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_tuples(props checkerProgrammer_exploreTuplesProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Tuples))
	for _, tuple := range props.Tuples {
		definitions = append(definitions, tuple)
	}
	return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
		Config: props.Config, Functor: props.Functor, Definitions: definitions, Input: props.Input, Explore: props.Explore,
		Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
			tuples := make([]*nativemetadata.MetadataTuple, 0, len(next.Definitions))
			for _, value := range next.Definitions {
				tuples = append(tuples, value.(*nativemetadata.MetadataTuple))
			}
			return nativehelpers.UnionExplorer.Tuple(nativehelpers.UnionExplorer_TupleProps{
				Config: checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
					func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
						return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Tuple: v.Definition.(*nativemetadata.MetadataTuple), Explore: featureProgrammer_as_explore(v.Explore)})
					},
					func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
						return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Tuple: v.Definition.(*nativemetadata.MetadataTuple), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
					}),
				Parameters: next.Parameters,
				Tuples:     tuples,
				Input:      next.Input,
				Explore:    next.Explore,
			})
		},
	})
}

func checkerProgrammer_explore_arrays(props checkerProgrammer_exploreArraysProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Arrays))
	for _, array := range props.Arrays {
		definitions = append(definitions, array)
	}
	return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
		Config: props.Config, Functor: props.Functor, Definitions: definitions, Input: props.Input, Explore: props.Explore,
		Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
			arrays := make([]*nativemetadata.MetadataArray, 0, len(next.Definitions))
			for _, value := range next.Definitions {
				arrays = append(arrays, value.(*nativemetadata.MetadataArray))
			}
			return nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
				Config: checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
					func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
						return CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Metadata: v.Definition.(*nativemetadata.MetadataSchema), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
					},
					func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
						return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Array: v.Definition.(*nativemetadata.MetadataArray), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)})
					}),
				Parameters: next.Parameters,
				Arrays:     arrays,
				Input:      next.Input,
				Explore:    next.Explore,
			})
		},
	})
}

func checkerProgrammer_explore_arrays_and_tuples(props checkerProgrammer_exploreArraysAndTuplesProps) *shimast.Node {
	return checkerProgrammer_explore_array_like_union_types(checkerProgrammer_exploreArrayLikeUnionTypesProps{
		Config: props.Config, Functor: props.Functor, Definitions: props.Definitions, Input: props.Input, Explore: props.Explore,
		Factory: func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node {
			return nativehelpers.UnionExplorer.Array_or_tuple(nativehelpers.UnionExplorer_ArrayOrTupleProps{
				Config: checkerProgrammer_array_like_config(props.Context, props.Config, props.Functor,
					func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
						if tuple, ok := v.Definition.(*nativemetadata.MetadataTuple); ok {
							return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Config: props.Config, Context: props.Context, Functor: props.Functor, Input: v.Input, Tuple: tuple, Explore: featureProgrammer_as_explore(v.Explore)})
						}
						expected := []string{}
						for _, elem := range props.Definitions {
							switch x := elem.(type) {
							case *nativemetadata.MetadataArray:
								expected = append(expected, x.GetName())
							case *nativemetadata.MetadataTuple:
								expected = append(expected, x.Type.Name)
							}
						}
						return props.Config.Atomist(CheckerProgrammer_AtomistProps{
							Explore: featureProgrammer_as_explore(v.Explore),
							Entry: nativehelpers.ICheckEntry{
								Expected:   strings.Join(expected, " | "),
								Expression: CheckerProgrammer.Decode(CheckerProgrammer_DecodeProps{Functor: props.Functor, Context: props.Context, Config: props.Config, Metadata: v.Definition.(*nativemetadata.MetadataSchema), Input: v.Input, Explore: featureProgrammer_as_explore(v.Explore)}),
								Conditions: [][]nativehelpers.ICheckEntry_ICondition{},
							},
							Input: v.Container,
						})
					},
					func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
						if tuple, ok := v.Definition.(*nativemetadata.MetadataTuple); ok {
							return checkerProgrammer_decode_tuple(checkerProgrammer_decodeTupleProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Tuple: tuple, Explore: featureProgrammer_as_explore(v.Explore)})
						}
						return checkerProgrammer_decode_array(checkerProgrammer_decodeArrayProps{Context: props.Context, Config: props.Config, Functor: props.Functor, Input: v.Input, Array: v.Definition.(*nativemetadata.MetadataArray), Explore: featureProgrammer_as_explore(v.Explore)})
					}),
				Parameters:  next.Parameters,
				Definitions: next.Definitions,
				Input:       next.Input,
				Explore:     next.Explore,
			})
		},
	})
}

type checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps struct {
	Parameters  []*shimast.Node
	Definitions []any
	Input       *shimast.Expression
	Explore     CheckerProgrammer_IExplore
}

type checkerProgrammer_exploreArrayLikeUnionTypesProps struct {
	Config      CheckerProgrammer_IConfig
	Functor     *nativehelpers.FunctionProgrammer
	Factory     func(next checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps) *shimast.Node
	Input       *shimast.Expression
	Definitions []any
	Explore     CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_array_like_union_types(props checkerProgrammer_exploreArrayLikeUnionTypesProps) *shimast.Node {
	arrayExplore := props.Explore
	arrayExplore.Source = "function"
	arrayExplore.From = "array"
	names := checkerProgrammer_definition_names(props.Definitions)
	return checkerProgrammer_or(
		checkerProgrammer_factory.NewCallExpression(
			checkerProgrammer_factory.NewIdentifier(
				props.Functor.EmplaceUnion(
					props.Config.Prefix,
					strings.Join(names, " | "),
					func() *shimast.Node {
						nextExplore := arrayExplore
						nextExplore.Postfix = ""
						return props.Factory(checkerProgrammer_exploreArrayLikeUnionTypesFactoryProps{
							Parameters: FeatureProgrammer.ParameterDeclarations(FeatureProgrammer_ParameterDeclarationsProps{
								Config: FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
								Type:   nativefactories.TypeFactory.Keyword("any"),
								Input:  checkerProgrammer_factory.NewIdentifier("input"),
							}),
							Definitions: props.Definitions,
							Explore:     nextExplore,
							Input:       checkerProgrammer_factory.NewIdentifier("input"),
						})
					},
				),
			),
			nil,
			nil,
			checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
				Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Input:   props.Input,
				Explore: props.Explore,
			})),
			shimast.NodeFlagsNone,
		),
		props.Config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
			Input:    props.Input,
			Expected: strings.Join(names, " | "),
			Explore:  &arrayExplore,
		}),
	)
}

type checkerProgrammer_exploreObjectsProps struct {
	Config   CheckerProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Expression
	Metadata *nativemetadata.MetadataSchema
	Explore  CheckerProgrammer_IExplore
}

func checkerProgrammer_explore_objects(props checkerProgrammer_exploreObjectsProps) *shimast.Node {
	if len(props.Metadata.Objects) == 1 {
		return CheckerProgrammer.Decode_object(CheckerProgrammer_DecodeObjectProps{
			Config:  props.Config,
			Functor: props.Functor,
			Object:  props.Metadata.Objects[0].Type,
			Input:   props.Input,
			Explore: props.Explore,
		})
	}
	index := 0
	if props.Metadata.Union_index != nil {
		index = *props.Metadata.Union_index
	}
	return checkerProgrammer_factory.NewCallExpression(
		checkerProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", props.Config.Prefix, index))),
		nil,
		nil,
		checkerProgrammer_factory.NewNodeList(FeatureProgrammer.ArgumentsArray(FeatureProgrammer_ArgumentsArrayProps{
			Config:  FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Input:   props.Input,
			Explore: props.Explore,
		})),
		shimast.NodeFlagsNone,
	)
}

func checkerProgrammer_array_like_config(context nativecontext.ITypiaContext, config CheckerProgrammer_IConfig, functor *nativehelpers.FunctionProgrammer, checker func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node, decoder func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node) nativehelpers.UnionExplorer_ArrayLikeConfig {
	return nativehelpers.UnionExplorer_ArrayLikeConfig{
		Checker: checker,
		Decoder: decoder,
		Empty:   config.Success,
		Success: config.Success,
		Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
			explore := featureProgrammer_as_explore(v.Explore)
			return checkerProgrammer_factory.NewReturnStatement(config.Joiner.Failure(CheckerProgrammer_JoinerFailureProps{
				Input:    v.Input,
				Expected: v.Expected,
				Explore:  &explore,
			}))
		},
	}
}

type checkerProgrammer_IInstance struct {
	Head     *shimast.Node
	Body     *shimast.Node
	Expected string
}

func checkerProgrammer_create_add(binaries *[]CheckerProgrammer_IBinary, input *shimast.Expression, exact bool, left *shimast.Expression, right *shimast.Expression) {
	if right == nil {
		right = input
	}
	operator := shimast.KindExclamationEqualsEqualsToken
	if exact {
		operator = shimast.KindEqualsEqualsEqualsToken
	}
	*binaries = append(*binaries, CheckerProgrammer_IBinary{
		Expression: checkerProgrammer_binary(left, operator, right),
		Combined:   false,
	})
}

func checkerProgrammer_binary(left *shimast.Expression, operator shimast.Kind, right *shimast.Expression) *shimast.Node {
	return checkerProgrammer_factory.NewBinaryExpression(
		nil,
		left,
		nil,
		checkerProgrammer_factory.NewToken(operator),
		right,
	)
}

func checkerProgrammer_and(x *shimast.Expression, y *shimast.Expression) *shimast.Node {
	return checkerProgrammer_binary(x, shimast.KindAmpersandAmpersandToken, y)
}

func checkerProgrammer_or(x *shimast.Expression, y *shimast.Expression) *shimast.Node {
	return checkerProgrammer_binary(x, shimast.KindBarBarToken, y)
}

func checkerProgrammer_equal(x *shimast.Expression, y *shimast.Expression) *shimast.Node {
	return checkerProgrammer_binary(x, shimast.KindEqualsEqualsEqualsToken, y)
}

func checkerProgrammer_array_any(arrays []*nativemetadata.MetadataArray) bool {
	for _, elem := range arrays {
		if elem.Type.Value.Any {
			return true
		}
	}
	return false
}

func checkerProgrammer_array_tuple_definitions(arrays []*nativemetadata.MetadataArray, tuples []*nativemetadata.MetadataTuple) []any {
	output := []any{}
	for _, tuple := range tuples {
		output = append(output, tuple)
	}
	for _, array := range arrays {
		output = append(output, array)
	}
	return output
}

func checkerProgrammer_definition_names(definitions []any) []string {
	names := make([]string, 0, len(definitions))
	for _, elem := range definitions {
		switch v := elem.(type) {
		case *nativemetadata.MetadataArray:
			names = append(names, v.Type.Name)
		case *nativemetadata.MetadataTuple:
			names = append(names, v.Type.Name)
		}
	}
	return names
}

func checkerProgrammer_postfix_of_tuple(str string) string {
	if len(str) > 0 && str[len(str)-1] == '"' {
		return str[:len(str)-1]
	}
	return str + " + \""
}

func checkerProgrammer_wrap_metadata_rest_tuple(rest *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
	wrapper := nativemetadata.MetadataSchema_initialize()
	wrapper.Arrays = append(wrapper.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      "..." + rest.GetName(),
			Value:     rest,
			Nullables: []bool{},
			Recursive: false,
			Index:     nil,
		}),
		Tags: [][]nativemetadata.IMetadataTypeTag{},
	}))
	return wrapper
}

func checkerProgrammer_decode_to_json(props struct {
	Input     *shimast.Expression
	CheckNull bool
}) *shimast.Node {
	return checkerProgrammer_and(
		nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
			CheckArray: false,
			CheckNull:  props.CheckNull,
			Input:      props.Input,
		}),
		checkerProgrammer_equal(
			checkerProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
			nativefactories.ValueFactory.TYPEOF(nativefactories.IdentifierFactory.Access(props.Input, "toJSON")),
		),
	)
}

func checkerProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
	output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
	for _, err := range errors {
		output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
			Name: err.Name,
			Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
				Object:    err.Explore.Object,
				Property:  err.Explore.Property,
				Parameter: err.Explore.Parameter,
				Output:    err.Explore.Output,
			},
			Messages: err.Messages,
		})
	}
	return output
}
