// Lint diagnostic helpers.
//
// Plugins that participate in `ttsc check` / `ttsc build` (e.g. `@ttsc/lint`)
// need to emit findings that ride the same color/context renderer as tsgo's
// own typecheck diagnostics. The plumbing has to live next to the existing
// shim so the renderer keeps its single owner of `internal/diagnosticwriter`
// and `internal/diagnostics`.
//
// Consumers construct a `LintDiagnostic` from `(file, pos, end, code,
// category, message)` and pass it to `FormatMixedDiagnostics` together with
// any raw tsgo diagnostics. The renderer treats both the same way.
package diagnosticwriter

import (
	"io"

	"github.com/microsoft/typescript-go/internal/ast"
	"github.com/microsoft/typescript-go/internal/diagnostics"
	inner "github.com/microsoft/typescript-go/internal/diagnosticwriter"
	"github.com/microsoft/typescript-go/internal/locale"
	"github.com/microsoft/typescript-go/internal/tspath"
)

// LintCategory selects warning vs error rendering. Warnings render yellow,
// errors render red — the exit-code decision lives in the caller.
type LintCategory int

const (
	LintCategoryWarning LintCategory = iota
	LintCategoryError
)

// LintDiagnostic is a public, plugin-emittable diagnostic shaped like the
// `internal/diagnosticwriter.Diagnostic` interface. The internal type is
// unexported, so this is the only way to mix lint output with tsgo's own
// diagnostics in a single render pass.
type LintDiagnostic struct {
	file     *ast.SourceFile
	pos      int
	end      int
	code     int32
	category LintCategory
	message  string
}

// NewLintDiagnostic builds a lint diagnostic anchored at [pos, end) in the
// supplied source file. `code` shows up in the rendered banner — the
// convention is to give each rule its own stable integer.
func NewLintDiagnostic(file *ast.SourceFile, pos, end int, code int32, category LintCategory, message string) *LintDiagnostic {
	if end <= pos {
		end = pos + 1
	}
	return &LintDiagnostic{
		file:     file,
		pos:      pos,
		end:      end,
		code:     code,
		category: category,
		message:  message,
	}
}

func (d *LintDiagnostic) File() inner.FileLike {
	if d == nil || d.file == nil {
		return nil
	}
	return d.file
}

func (d *LintDiagnostic) Pos() int   { return d.pos }
func (d *LintDiagnostic) End() int   { return d.end }
func (d *LintDiagnostic) Len() int   { return d.end - d.pos }
func (d *LintDiagnostic) Code() int32 { return d.code }

func (d *LintDiagnostic) Category() diagnostics.Category {
	if d.category == LintCategoryError {
		return diagnostics.CategoryError
	}
	return diagnostics.CategoryWarning
}

func (d *LintDiagnostic) Localize(_ locale.Locale) string { return d.message }
func (d *LintDiagnostic) MessageChain() []inner.Diagnostic { return nil }
func (d *LintDiagnostic) RelatedInformation() []inner.Diagnostic { return nil }

// IsError reports whether the diagnostic should fail the build. Lint plugins
// use this to compute their exit code separately from the renderer.
func (d *LintDiagnostic) IsError() bool { return d.category == LintCategoryError }

// FormatMixedDiagnostics renders raw tsgo diagnostics and lint diagnostics
// together with TypeScript-style colors and source context, followed by the
// `Found N errors` summary. Returns the count of error-level diagnostics so
// callers can decide on an exit code.
func FormatMixedDiagnostics(
	output io.Writer,
	astDiags []*ast.Diagnostic,
	lintDiags []*LintDiagnostic,
	currentDirectory string,
) int {
	if len(astDiags) == 0 && len(lintDiags) == 0 {
		return 0
	}
	all := make([]inner.Diagnostic, 0, len(astDiags)+len(lintDiags))
	errors := 0
	for _, d := range astDiags {
		if d == nil {
			continue
		}
		all = append(all, inner.WrapASTDiagnostic(d))
		if d.Category() == diagnostics.CategoryError {
			errors++
		}
	}
	for _, d := range lintDiags {
		if d == nil {
			continue
		}
		all = append(all, d)
		if d.IsError() {
			errors++
		}
	}
	if len(all) == 0 {
		return 0
	}
	options := &inner.FormattingOptions{
		Locale: locale.Default,
		ComparePathsOptions: tspath.ComparePathsOptions{
			CurrentDirectory:          currentDirectory,
			UseCaseSensitiveFileNames: true,
		},
		NewLine: "\n",
	}
	inner.FormatDiagnosticsWithColorAndContext(output, all, options)
	inner.WriteErrorSummaryText(output, all, options)
	return errors
}
