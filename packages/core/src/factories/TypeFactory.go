package factories

import "strings"

type typeFactory struct{}

var TypeFactory typeFactory

func (typeFactory) IsFunction(typ TypeLike) bool {
	return TypeFactory.GetFunction(typ) != nil
}

func (typeFactory) GetFunction(typ TypeLike) FunctionLike {
	if typ == nil {
		return nil
	}
	return typ.Function()
}

func (typeFactory) GetReturnTypeOfClassMethod(props ReturnTypeOfClassMethodProps) TypeLike {
	if props.Class == nil || props.Checker == nil {
		return nil
	}
	symbol := props.Class.Property(props.Function)
	if symbol == nil {
		return nil
	}
	return props.Checker.ReturnTypeOf(symbol)
}

func (typeFactory) GetFullName(props FullNameProps) string {
	if props.Type == nil {
		return "__type"
	}
	symbol := props.Symbol
	if symbol == nil {
		symbol = props.Type.AliasSymbol()
	}
	if symbol == nil {
		symbol = props.Type.Symbol()
	}
	if symbol == nil {
		return props.Type.String()
	}
	if props.Type.IsUnionOrIntersection() && props.Type.AliasSymbol() == nil {
		joiner := " | "
		if props.Type.IsIntersection() {
			joiner = " & "
		}
		names := make([]string, 0, len(props.Type.Types()))
		for _, child := range props.Type.Types() {
			names = append(names, TypeFactory.GetFullName(FullNameProps{Checker: props.Checker, Type: child}))
		}
		return strings.Join(names, joiner)
	}
	name := symbol.Name()
	generic := props.Type.TypeArguments()
	if len(generic) == 0 {
		return name
	}
	if name == "Promise" {
		return TypeFactory.GetFullName(FullNameProps{Checker: props.Checker, Type: generic[0]})
	}
	names := make([]string, 0, len(generic))
	for _, child := range generic {
		names = append(names, TypeFactory.GetFullName(FullNameProps{Checker: props.Checker, Type: child}))
	}
	return name + "<" + strings.Join(names, ", ") + ">"
}

func (typeFactory) Keyword(kind string) TypeNode {
	switch kind {
	case "void", "any", "unknown", "boolean", "number", "bigint", "string":
		return Node("keywordType", Field("type", kind))
	default:
		return Node("keywordType", Field("type", "any"))
	}
}
