package context

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	"github.com/samchon/typia/packages/typia/native/ttsc/driver"
)

type ITypiaContext struct {
	Program         *driver.Program
	CompilerOptions *shimcore.CompilerOptions
	Checker         *shimchecker.Checker
	Printer         any
	Options         ITransformOptions
	Transformer     any
	Importer        any
	Extras          ITypiaContext_Extras
}

type ITypiaContext_Extras struct {
	AddDiagnostic func(diag *shimast.Diagnostic) int
}
