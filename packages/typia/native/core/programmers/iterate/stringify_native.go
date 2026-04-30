package iterate

import shimast "github.com/microsoft/typescript-go/shim/ast"

var stringify_native_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func Stringify_native() *shimast.Node {
	return stringify_native_factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
}
