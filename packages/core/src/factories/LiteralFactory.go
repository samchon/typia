package factories

import "fmt"

type literalFactory struct{}

var LiteralFactory literalFactory

func (literalFactory) Write(input any) (Expression, error) {
	switch value := input.(type) {
	case nil:
		return Null(), nil
	case Expression:
		return value, nil
	case []any:
		items := make([]Expression, 0, len(value))
		for _, elem := range value {
			written, err := LiteralFactory.Write(elem)
			if err != nil {
				return Expression{}, err
			}
			items = append(items, written)
		}
		return Node("arrayLiteral", Field("elements", items)), nil
	case map[string]any:
		properties := make([]ObjectProperty, 0, len(value))
		for key, elem := range value {
			if elem == nil {
				continue
			}
			written, err := LiteralFactory.Write(elem)
			if err != nil {
				return Expression{}, err
			}
			properties = append(properties, ObjectProperty{Key: IdentifierFactory.Identifier(key), Value: written})
		}
		return Node("objectLiteral", Field("properties", properties)), nil
	case bool:
		if value {
			return True(), nil
		}
		return False(), nil
	case int:
		return ExpressionFactory.Number(float64(value)), nil
	case int64:
		return ExpressionFactory.Number(float64(value)), nil
	case float64:
		return ExpressionFactory.Number(value), nil
	case string:
		return StringLiteral(value), nil
	default:
		return Expression{}, fmt.Errorf("Error on LiteralFactory.generate(): unknown type %T", input)
	}
}
