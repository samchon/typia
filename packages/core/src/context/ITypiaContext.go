package context

type ITypiaContext struct {
	Program         any
	CompilerOptions any
	Checker         any
	Printer         any
	Options         ITransformOptions
	Transformer     any
	Importer        any
	Extras          ITypiaContextExtras
}

type ITypiaContextExtras struct {
	AddDiagnostic func(diag any) int
}
