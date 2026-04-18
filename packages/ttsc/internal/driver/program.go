package driver

import (
	"context"
	"errors"
	"fmt"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
	"github.com/microsoft/typescript-go/shim/core"
	"github.com/microsoft/typescript-go/shim/tsoptions"
	"github.com/microsoft/typescript-go/shim/tspath"
	"github.com/microsoft/typescript-go/shim/vfs"
)

// Diagnostic is the compilation diagnostic shape ttsc passes around. Kept
// dependency-free (no shim types) so callers can render or inspect freely.
type Diagnostic struct {
	File    string
	Line    int
	Column  int
	Message string
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

// Program is the shim-agnostic façade the rest of the engine sees.
type Program struct {
	TSProgram      *shimcompiler.Program
	ParsedConfig   *tsoptions.ParsedCommandLine
	Checker        *shimchecker.Checker
	checkerRelease func()
	Host           shimcompiler.CompilerHost
	FS             vfs.FS
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

// LoadProgram is the one-shot convenience used by `ttsc build`.
// It parses the tsconfig, creates a program and a type-checker, and returns
// the wrapped façade.
//
// cwd must be absolute; tsconfigPath may be relative to cwd.
func LoadProgram(cwd, tsconfigPath string) (*Program, []Diagnostic, error) {
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

// convertDiagnostics translates shim-specific diagnostics into the plain
// Diagnostic struct. Location info is best-effort for Phase 0 — later phases
// will wire LineMap for precise line/column.
func convertDiagnostics(in []*ast.Diagnostic) []Diagnostic {
	out := make([]Diagnostic, 0, len(in))
	for _, d := range in {
		if d == nil {
			continue
		}
		name := ""
		if file := d.File(); file != nil {
			name = file.FileName()
		}
		out = append(out, Diagnostic{File: name, Message: d.String()})
	}
	return out
}
