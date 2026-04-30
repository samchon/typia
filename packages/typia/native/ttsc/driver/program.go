package driver

import (
	"context"
	"errors"
	"fmt"
	"io"
	"path/filepath"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
	"github.com/microsoft/typescript-go/shim/core"
	shimdiagnosticwriter "github.com/microsoft/typescript-go/shim/diagnosticwriter"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"
	"github.com/microsoft/typescript-go/shim/tsoptions"
	"github.com/microsoft/typescript-go/shim/tspath"
	"github.com/microsoft/typescript-go/shim/vfs"
)

// Diagnostic is the compilation diagnostic shape ttsc passes around. Kept
// dependency-free (no shim types) so callers can render or inspect freely.
//
// `raw` carries the original tsgo diagnostic for full color/context
// rendering. `lint` carries a plugin-emitted lint diagnostic when the
// diagnostic was produced outside the typecheck pipeline (e.g. by
// `@ttsc/lint`). At most one of `raw` / `lint` is non-nil; both nil falls
// back to the legacy single-line form.
type Diagnostic struct {
	File     string
	Line     int
	Column   int
	Message  string
	Severity Severity
	raw      *ast.Diagnostic
	lint     *shimdiagnosticwriter.LintDiagnostic
}

// Severity classifies a diagnostic's blast radius. ttsc treats Error as a
// build-failing condition; Warning prints but does not flip the exit code.
type Severity int

const (
	// SeverityError is the default for tsgo typecheck output and any
	// plugin-emitted finding that should fail the build.
	SeverityError Severity = iota
	// SeverityWarning prints with warning coloring but keeps the build
	// status at zero.
	SeverityWarning
)

// IsError reports whether the diagnostic counts toward the build's error
// total. Useful when plugins want to gate emit on the lint outcome without
// re-walking the diagnostic list.
func (d Diagnostic) IsError() bool { return d.Severity == SeverityError }

// NewLintDiagnostic shapes a plugin finding so it renders alongside tsgo
// diagnostics with full color / source context. `pos` and `end` are byte
// offsets into the source file; `code` is a stable rule identifier (e.g. the
// rule's enum index). Severity controls both the rendered banner color and
// the exit-code outcome.
func NewLintDiagnostic(
	file *ast.SourceFile,
	pos, end int,
	code int32,
	severity Severity,
	message string,
) Diagnostic {
	cat := shimdiagnosticwriter.LintCategoryError
	if severity == SeverityWarning {
		cat = shimdiagnosticwriter.LintCategoryWarning
	}
	lint := shimdiagnosticwriter.NewLintDiagnostic(file, pos, end, code, cat, message)
	d := Diagnostic{
		Message:  message,
		Severity: severity,
		lint:     lint,
	}
	if file != nil {
		d.File = file.FileName()
		if pos >= 0 {
			line, col := shimscanner.GetECMALineAndByteOffsetOfPosition(file, pos)
			d.Line = line + 1
			d.Column = col + 1
		}
	}
	return d
}

// SourceFile returns the program source file matching filename.
func (p *Program) SourceFile(filename string) *ast.SourceFile {
	if p == nil || p.TSProgram == nil {
		return nil
	}
	normalized := filepath.ToSlash(filename)
	for _, file := range p.TSProgram.SourceFiles() {
		if filepath.ToSlash(file.FileName()) == normalized {
			return file
		}
	}
	return nil
}

// String returns a `path:line:col: message` formatted string.
func (d Diagnostic) String() string {
	if d.File == "" {
		return d.Message
	}
	if d.Line > 0 {
		return fmt.Sprintf("%s:%d:%d: %s", d.File, d.Line, d.Column, d.Message)
	}
	return fmt.Sprintf("%s: %s", d.File, d.Message)
}

// WritePrettyDiagnostics renders diagnostics with TypeScript-style colors,
// source snippets and the trailing error summary when raw tsgo or lint
// diagnostic objects are available. Mixed batches (e.g. typecheck + lint)
// are rendered through the same color/context pipeline; entries without
// either anchor fall back to the legacy `path:line:col: message` form.
func WritePrettyDiagnostics(w io.Writer, diagnostics []Diagnostic, cwd string) {
	if len(diagnostics) == 0 {
		return
	}
	rich := make([]Diagnostic, 0, len(diagnostics))
	plain := make([]Diagnostic, 0)
	for _, d := range diagnostics {
		if d.raw != nil || d.lint != nil {
			rich = append(rich, d)
		} else {
			plain = append(plain, d)
		}
	}
	if len(rich) > 0 {
		astDiags := make([]*ast.Diagnostic, 0, len(rich))
		lintDiags := make([]*shimdiagnosticwriter.LintDiagnostic, 0, len(rich))
		for _, d := range rich {
			if d.raw != nil {
				astDiags = append(astDiags, d.raw)
			}
			if d.lint != nil {
				lintDiags = append(lintDiags, d.lint)
			}
		}
		shimdiagnosticwriter.FormatMixedDiagnostics(w, astDiags, lintDiags, cwd)
	}
	for _, d := range plain {
		fmt.Fprintln(w, "  -", d.String())
	}
}

// CountErrors returns the number of diagnostics that should fail the build.
// tsgo diagnostics carry their own `Error` category; lint diagnostics carry a
// caller-set Severity. Anything that isn't an explicit warning counts.
func CountErrors(diagnostics []Diagnostic) int {
	n := 0
	for _, d := range diagnostics {
		if d.lint != nil {
			if d.lint.IsError() {
				n++
			}
			continue
		}
		if d.raw != nil {
			// tsgo diagnostics use the diagnostics package category. The
			// renderer shim already mirrors the same Error/Warning split, so
			// re-categorize via the public IsError shortcut.
			if d.Severity != SeverityWarning {
				n++
			}
			continue
		}
		// Plain text diagnostics (manually assembled): treat as errors so
		// "ttsc: tsconfig not found"-style failures still flip the exit code.
		n++
	}
	return n
}

// Program is the shim-agnostic facade the rest of the engine sees.
type Program struct {
	TSProgram      *shimcompiler.Program
	ParsedConfig   *tsoptions.ParsedCommandLine
	Checker        *shimchecker.Checker
	checkerRelease func()
	Host           shimcompiler.CompilerHost
	FS             vfs.FS
}

// LoadProgramOptions controls tsconfig overrides applied before tsgo creates
// the program. `ForceEmit` is used by `ttsc --emit` and `ttsc transform`
// so runtime compilation still works when the project defaults to `noEmit`.
type LoadProgramOptions struct {
	ForceEmit   bool
	ForceNoEmit bool
	OutDir      string
}

// Close releases the checker pool lease acquired by LoadProgram.
func (p *Program) Close() error {
	if p.checkerRelease != nil {
		p.checkerRelease()
		p.checkerRelease = nil
	}
	return nil
}

// ParseTSConfig parses a tsconfig.json file via tsgo's native JSONC parser.
// Comments, trailing commas, and `extends` chains are handled automatically.
//
// The absolute path is resolved against cwd before any VFS lookups because
// tsgo's filesystem APIs require absolute paths — mirrors what tsc does when
// you pass a relative `--project` flag.
func ParseTSConfig(fs vfs.FS, cwd, tsconfigPath string, host shimcompiler.CompilerHost) (*tsoptions.ParsedCommandLine, []Diagnostic, error) {
	resolved := tspath.ResolvePath(cwd, tsconfigPath)
	if !fs.FileExists(resolved) {
		return nil, nil, fmt.Errorf("tsconfig not found: %s", resolved)
	}
	parsed, diags := tsoptions.GetParsedCommandLineOfConfigFile(resolved, &core.CompilerOptions{}, nil, host, nil)
	if len(diags) > 0 {
		return nil, convertDiagnostics(diags), nil
	}
	if parsed == nil {
		return nil, nil, errors.New("tsoptions: parsed command line was nil")
	}
	if len(parsed.Errors) > 0 {
		return nil, convertDiagnostics(parsed.Errors), nil
	}
	return parsed, nil, nil
}

// CreateProgramFromConfig builds a tsgo Program from the parsed config.
func CreateProgramFromConfig(parsed *tsoptions.ParsedCommandLine, host shimcompiler.CompilerHost) (*shimcompiler.Program, []Diagnostic, error) {
	opts := shimcompiler.ProgramOptions{
		Config:                      parsed,
		SingleThreaded:              core.TSTrue,
		Host:                        host,
		UseSourceOfProjectReference: true,
	}
	p := shimcompiler.NewProgram(opts)
	if p == nil {
		return nil, nil, errors.New("shimcompiler.NewProgram returned nil")
	}
	return p, nil, nil
}

// LoadProgram is the one-shot convenience used by `ttsc`.
// It parses the tsconfig, creates a program and a type-checker, and returns
// the wrapped facade.
//
// cwd must be absolute; tsconfigPath may be relative to cwd.
func LoadProgram(cwd, tsconfigPath string, options LoadProgramOptions) (*Program, []Diagnostic, error) {
	if !filepath.IsAbs(cwd) {
		if abs, err := filepath.Abs(cwd); err == nil {
			cwd = abs
		}
	}
	cwd = tspath.ResolvePath(cwd)
	fs := DefaultFS()
	host := DefaultHost(cwd, fs)

	parsed, diags, err := ParseTSConfig(fs, cwd, tsconfigPath, host)
	if err != nil {
		return nil, nil, err
	}
	if len(diags) > 0 {
		return nil, diags, nil
	}
	if options.ForceNoEmit {
		forceNoEmit(parsed)
	}
	if options.ForceEmit {
		forceEmit(parsed)
	}
	if options.OutDir != "" {
		overrideOutDir(cwd, parsed, options.OutDir)
	}

	tsProgram, progDiags, err := CreateProgramFromConfig(parsed, host)
	if err != nil {
		return nil, nil, err
	}
	if len(progDiags) > 0 {
		return nil, progDiags, nil
	}

	checker, done := tsProgram.GetTypeChecker(context.Background())
	return &Program{
		TSProgram:      tsProgram,
		ParsedConfig:   parsed,
		Checker:        checker,
		checkerRelease: done,
		Host:           host,
		FS:             fs,
	}, nil, nil
}

func forceEmit(parsed *tsoptions.ParsedCommandLine) {
	if parsed == nil || parsed.ParsedConfig == nil || parsed.ParsedConfig.CompilerOptions == nil {
		return
	}
	options := parsed.ParsedConfig.CompilerOptions
	options.NoEmit = core.TSFalse
	options.EmitDeclarationOnly = core.TSFalse
}

func forceNoEmit(parsed *tsoptions.ParsedCommandLine) {
	if parsed == nil || parsed.ParsedConfig == nil || parsed.ParsedConfig.CompilerOptions == nil {
		return
	}
	parsed.ParsedConfig.CompilerOptions.NoEmit = core.TSTrue
}

func overrideOutDir(cwd string, parsed *tsoptions.ParsedCommandLine, outDir string) {
	if parsed == nil || parsed.ParsedConfig == nil || parsed.ParsedConfig.CompilerOptions == nil {
		return
	}
	parsed.ParsedConfig.CompilerOptions.OutDir = tspath.ResolvePath(cwd, outDir)
}

// SourceFiles exposes the program's user-authored source files (declaration
// files filtered out).
func (p *Program) SourceFiles() []*ast.SourceFile {
	out := make([]*ast.SourceFile, 0)
	for _, f := range p.TSProgram.SourceFiles() {
		if f.IsDeclarationFile {
			continue
		}
		out = append(out, f)
	}
	return out
}

// Diagnostics returns project diagnostics that must block compilation or
// runtime execution before any JavaScript is emitted or evaluated.
func (p *Program) Diagnostics() []Diagnostic {
	if p == nil || p.TSProgram == nil {
		return []Diagnostic{{Message: "driver: nil program"}}
	}
	ctx := context.Background()
	raw := shimcompiler.GetDiagnosticsOfAnyProgram(
		ctx,
		p.TSProgram,
		nil,
		false,
		p.TSProgram.GetBindDiagnostics,
		p.TSProgram.GetSemanticDiagnostics,
	)
	raw = filterDiagnostics(raw)
	return convertDiagnostics(shimcompiler.SortAndDeduplicateDiagnostics(raw))
}

func filterDiagnostics(in []*ast.Diagnostic) []*ast.Diagnostic {
	out := in[:0]
	for _, d := range in {
		if isUnusedOverloadSignatureTypeParameterDiagnostic(d) {
			continue
		}
		out = append(out, d)
	}
	return out
}

func isUnusedOverloadSignatureTypeParameterDiagnostic(d *ast.Diagnostic) bool {
	if d == nil || d.File() == nil {
		return false
	}
	switch d.Code() {
	case 6196, 6205: // unused declaration / all type parameters are unused
	default:
		return false
	}
	node := ast.GetNodeAtPosition(d.File(), d.Pos(), false)
	for node != nil {
		if node.Kind == ast.KindFunctionDeclaration {
			return node.Body() == nil
		}
		node = node.Parent
	}
	return false
}

// convertDiagnostics translates shim-specific diagnostics into the plain
// Diagnostic struct with line/column populated via tsgo's ECMALineMap (the
// same helper tsc uses for its "file:line:col: message" banner).
func convertDiagnostics(in []*ast.Diagnostic) []Diagnostic {
	out := make([]Diagnostic, 0, len(in))
	for _, d := range in {
		if d == nil {
			continue
		}
		diag := Diagnostic{Message: d.String(), raw: d}
		if file := d.File(); file != nil {
			diag.File = file.FileName()
			if pos := d.Pos(); pos >= 0 {
				line, col := shimscanner.GetECMALineAndByteOffsetOfPosition(file, pos)
				diag.Line = line + 1
				diag.Column = col + 1
			}
		}
		out = append(out, diag)
	}
	return out
}
