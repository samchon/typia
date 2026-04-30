package iterate

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Decode_union_objectProps struct {
	Checker func(next Decode_union_object_next) *shimast.Node
	Decoder func(next Decode_union_object_next) *shimast.Node
	Success func(exp *shimast.Expression) *shimast.Node
	Escaper func(next Decode_union_object_escape) *shimast.Node
	Objects []*nativemetadata.MetadataObjectType
	Input   *shimast.Expression
	Explore any
}

type Decode_union_object_next struct {
	Input   *shimast.Expression
	Object  *nativemetadata.MetadataObjectType
	Explore any
}

type Decode_union_object_escape struct {
	Input    *shimast.Expression
	Expected string
}

func Decode_union_object(props Decode_union_objectProps) *shimast.Node {
	unions := make([]decode_union_object_IUnion, 0, len(props.Objects))
	names := make([]string, 0, len(props.Objects))
	for _, object := range props.Objects {
		obj := object
		names = append(names, obj.Name)
		unions = append(unions, decode_union_object_IUnion{
			Type: "object",
			Is: func() *shimast.Node {
				return props.Success(props.Checker(Decode_union_object_next{
					Input:   props.Input,
					Explore: props.Explore,
					Object:  obj,
				}))
			},
			Value: func() *shimast.Node {
				return props.Decoder(Decode_union_object_next{
					Input:   props.Input,
					Explore: props.Explore,
					Object:  obj,
				})
			},
		})
	}
	return decode_union_object_factory.NewCallExpression(
		decode_union_object_factory.NewArrowFunction(
			nil,
			nil,
			decode_union_object_factory.NewNodeList(nil),
			nil,
			nil,
			decode_union_object_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			decode_union_object_iterate(decode_union_object_iterateProps{
				Escaper:  props.Escaper,
				Input:    props.Input,
				Unions:   unions,
				Expected: "(" + strings.Join(names, " | ") + ")",
			}),
		),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type decode_union_object_iterateProps struct {
	Escaper  func(next Decode_union_object_escape) *shimast.Node
	Unions   []decode_union_object_IUnion
	Expected string
	Input    *shimast.Expression
}

type decode_union_object_IBranch struct {
	Condition *shimast.Node
	Value     *shimast.Node
}

func decode_union_object_iterate(props decode_union_object_iterateProps) *shimast.Node {
	branches := []decode_union_object_IBranch{}
	for _, u := range props.Unions {
		condition := u.Is()
		if condition.Kind == shimast.KindTrueKeyword {
			branches = append(branches, decode_union_object_IBranch{
				Condition: nil,
				Value:     u.Value(),
			})
			break
		}
		branches = append(branches, decode_union_object_IBranch{
			Condition: condition,
			Value:     u.Value(),
		})
	}
	if len(branches) == 0 {
		return decode_union_object_factory.NewBlock(
			decode_union_object_factory.NewNodeList([]*shimast.Node{
				props.Escaper(Decode_union_object_escape{
					Input:    props.Input,
					Expected: props.Expected,
				}),
			}),
			true,
		)
	}
	if len(branches) == 1 && branches[0].Condition == nil {
		return branches[0].Value
	}

	statements := make([]*shimast.Node, 0, len(branches)+1)
	for _, b := range branches {
		if b.Condition != nil {
			statements = append(statements, decode_union_object_factory.NewIfStatement(
				b.Condition,
				decode_union_object_factory.NewReturnStatement(b.Value),
				nil,
			))
		} else {
			statements = append(statements, decode_union_object_factory.NewReturnStatement(b.Value))
		}
	}
	if branches[len(branches)-1].Condition != nil {
		statements = append(statements, props.Escaper(Decode_union_object_escape{
			Input:    props.Input,
			Expected: props.Expected,
		}))
	}
	return decode_union_object_factory.NewBlock(
		decode_union_object_factory.NewNodeList(statements),
		true,
	)
}

type decode_union_object_IUnion struct {
	Type  string
	Is    func() *shimast.Node
	Value func() *shimast.Node
}

var decode_union_object_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
