package helpers

import shimast "github.com/microsoft/typescript-go/shim/ast"

type ICheckEntry struct {
	Expected   string
	Expression *shimast.Node
	Conditions [][]ICheckEntry_ICondition
}

type ICheckEntry_ICondition struct {
	Expected   string
	Expression *shimast.Node
}
