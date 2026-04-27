package transform

import "github.com/samchon/ttsc/packages/ttsc/driver"

type ITransformProps struct {
	Program *driver.Program
	Cwd     string
}

type ITransformResult struct {
	Set   *driver.RewriteSet
	Total int
}
