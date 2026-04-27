package transform

import (
	"path/filepath"
	"strings"

	"github.com/samchon/ttsc/packages/ttsc/driver"
)

var FileTransformer = fileTransformerNamespace{}

type fileTransformerNamespace struct{}

func (fileTransformerNamespace) transform(props ITransformProps) ITransformResult {
	out := ITransformResult{Set: driver.NewRewriteSet()}
	root := filepath.ToSlash(props.Cwd)
	for _, file := range props.Program.SourceFiles() {
		if !strings.HasPrefix(filepath.ToSlash(file.FileName()), root+"/") {
			continue
		}
		result := NodeTransformer.transform(ITransformNodeProps{
			File: file,
			Text: file.Text(),
		})
		for _, rewrite := range result.Rewrites {
			out.Set.Add(rewrite)
			out.Total++
		}
	}
	return out
}
