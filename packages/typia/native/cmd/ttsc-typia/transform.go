package main

import (
	"bytes"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strings"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

func runTransform(args []string) int {
	fs := flag.NewFlagSet("transform", flag.ContinueOnError)
	fs.SetOutput(stderr)
	file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
	cwdOverride := fs.String("cwd", "", "override the working directory")
	out := fs.String("out", "", "write output JS to PATH")
	rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
	output := fs.String("output", defaultTransformOutput(), "transform output kind: js or ts")
	_ = fs.String("plugins-json", "", "ordered ttsc plugin payload")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *file == "" {
		fmt.Fprintln(stderr, "ttsc-typia transform: --file is required")
		return 2
	}
	if *rewriteMode != "none" && *rewriteMode != "typia" {
		fmt.Fprintf(stderr, "ttsc-typia transform: unknown --rewrite-mode value %q\n", *rewriteMode)
		return 2
	}
	if *output != "js" && *output != "ts" {
		fmt.Fprintf(stderr, "ttsc-typia transform: unknown --output value %q\n", *output)
		return 2
	}
	cwd := *cwdOverride
	if cwd == "" {
		var err error
		cwd, err = os.Getwd()
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: cwd: %v\n", err)
			return 2
		}
	}

	prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
		ForceEmit: true,
	})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: %v\n", err)
		return 2
	}
	if len(diags) > 0 {
		driver.WritePrettyDiagnostics(stderr, diags, cwd)
		return 2
	}
	defer prog.Close()

	absFile := *file
	if !filepath.IsAbs(absFile) {
		absFile = filepath.Join(cwd, absFile)
	}
	absFile = filepath.ToSlash(absFile)

	rewrites := driver.NewRewriteSet()
	if *rewriteMode == "typia" {
		if _, _, diagnostics := collectTypiaRewrites(prog, cwd, true, true, absFile, rewrites, readTypiaPluginOptions(cwd, *tsconfigPath)); len(diagnostics) > 0 {
			writeTypiaTransformDiagnostics(stderr, diagnostics, cwd)
			return 3
		}
	}

	target := prog.SourceFile(absFile)
	if target == nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: source file is not in program: %s\n", absFile)
		return 2
	}
	if *output == "ts" {
		return runTransformTypeScript(prog, cwd, absFile, target, *rewriteMode, *tsconfigPath, *out)
	}

	var captured []byte
	capture := func(name, text string, data *shimcompiler.WriteFileData) error {
		rel := filepath.ToSlash(name)
		if !strings.HasSuffix(rel, ".js") {
			return nil
		}
		captured = []byte(typiaadapter.CleanupTransformedText(text))
		return nil
	}
	_, eDiags, err := prog.EmitFile(rewrites, target, capture)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: emit: %v\n", err)
		return 3
	}
	for _, d := range eDiags {
		fmt.Fprintln(stderr, "  -", d.String())
	}
	if captured == nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: no output produced for %s\n", absFile)
		return 3
	}
	if *out == "" {
		if _, werr := bytes.NewReader(captured).WriteTo(stdout); werr != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: write stdout: %v\n", werr)
			return 3
		}
		return 0
	}
	if dir := filepath.Dir(*out); dir != "" {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: mkdir: %v\n", err)
			return 3
		}
	}
	if err := os.WriteFile(*out, captured, 0o644); err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: write %s: %v\n", *out, err)
		return 3
	}
	return 0
}

func defaultTransformOutput() string {
	if os.Getenv("TYPIA_TTSC_TRANSFORM_OUTPUT") == "ts" {
		return "ts"
	}
	return "js"
}

type transformSourceRewrite struct {
	start       int
	end         int
	replacement string
}

func runTransformTypeScript(
	prog *driver.Program,
	cwd string,
	absFile string,
	target any,
	rewriteMode string,
	tsconfigPath string,
	out string,
) int {
	source, ok := sourceFileText(target)
	if !ok {
		fmt.Fprintf(stderr, "ttsc-typia transform: source text is unavailable for %s\n", absFile)
		return 3
	}
	rewrites := []transformSourceRewrite{}
	if rewriteMode == "typia" {
		var diagnostics []typiaTransformDiagnostic
		rewrites, diagnostics = collectTypiaSourceRewrites(
			prog,
			cwd,
			absFile,
			readTypiaPluginOptions(cwd, tsconfigPath),
		)
		if len(diagnostics) > 0 {
			writeTypiaTransformDiagnostics(stderr, diagnostics, cwd)
			return 3
		}
	}
	transformed, err := applySourceRewrites(source, rewrites)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: source rewrite: %v\n", err)
		return 3
	}
	transformed = cleanupTypeScriptTransformText(transformed)
	if out == "" {
		if _, werr := bytes.NewBufferString(transformed).WriteTo(stdout); werr != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: write stdout: %v\n", werr)
			return 3
		}
		return 0
	}
	if dir := filepath.Dir(out); dir != "" {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: mkdir: %v\n", err)
			return 3
		}
	}
	if err := os.WriteFile(out, []byte(transformed), 0o644); err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: write %s: %v\n", out, err)
		return 3
	}
	return 0
}

func sourceFileText(target any) (string, bool) {
	type sourceText interface {
		Text() string
	}
	if file, ok := target.(sourceText); ok {
		return file.Text(), true
	}
	return "", false
}

func collectTypiaSourceRewrites(
	prog *driver.Program,
	cwd string,
	onlyFile string,
	pluginOptions typiaadapter.PluginOptions,
) ([]transformSourceRewrite, []typiaTransformDiagnostic) {
	sites := typiaadapter.CollectCallSites(prog.SourceFiles(), prog.Checker)
	rewrites := []transformSourceRewrite{}
	diagnostics := []typiaTransformDiagnostic{}
	for _, site := range sites {
		if filepath.ToSlash(site.FilePath) != filepath.ToSlash(onlyFile) {
			continue
		}
		if reason := typiaadapter.UnsupportedReason(site); reason != "" {
			diagnostics = append(diagnostics, newTypiaTransformDiagnostic(site, reason))
			continue
		}
		expr, handled, err := typiaadapter.EmitCallWithOptionsPreservingTypes(prog, site, pluginOptions)
		if !handled {
			diagnostics = append(diagnostics, newTypiaTransformDiagnostic(site, "method not covered"))
			continue
		}
		if err != nil {
			diagnostics = append(diagnostics, newTypiaTransformDiagnostic(site, err.Error()))
			continue
		}
		node := site.Call.AsNode()
		rewrites = append(rewrites, transformSourceRewrite{
			start:       node.Pos(),
			end:         node.End(),
			replacement: expr,
		})
		_ = cwd
	}
	return rewrites, diagnostics
}

func applySourceRewrites(source string, rewrites []transformSourceRewrite) (string, error) {
	sort.SliceStable(rewrites, func(i, j int) bool {
		return rewrites[i].start > rewrites[j].start
	})
	output := source
	for _, rewrite := range rewrites {
		if rewrite.start < 0 || rewrite.end < rewrite.start || rewrite.end > len(output) {
			return "", fmt.Errorf("invalid rewrite range [%d,%d)", rewrite.start, rewrite.end)
		}
		output = output[:rewrite.start] + rewrite.replacement + output[rewrite.end:]
	}
	return output, nil
}

func cleanupTypeScriptTransformText(text string) string {
	text = typiaadapter.CleanupTransformedText(text)
	text = regexp.MustCompile(`(?m)^import type \{([^{}\n]+)\} from`).ReplaceAllStringFunc(text, func(line string) string {
		return regexp.MustCompile(`^import type \{\s*([^{}\n]+?)\s*\} from`).ReplaceAllString(line, "import type { $1 } from")
	})
	text = regexp.MustCompile(`(?m)(^import [^\n]+;\n)\n+(const |let |var |export )`).ReplaceAllString(text, "$1$2")
	text = strings.ReplaceAll(text, "=(() =>", "= (() =>")
	text = strings.ReplaceAll(text, ": (any) =>", ": any =>")
	text = strings.ReplaceAll(text, ": (boolean) =>", ": boolean =>")
	text = regexp.MustCompile(`input is \(([A-Za-z_$][A-Za-z0-9_$.]*)\)`).ReplaceAllString(text, "input is $1")
	text = strings.ReplaceAll(text, "return (success ? ", "return success ? ")
	text = strings.ReplaceAll(text, "}) as any;", "} as any;")
	text = strings.ReplaceAll(text, "(() => {\n    const ", "(() => { const ")
	text = strings.ReplaceAll(text, "(() => {\n    let ", "(() => { let ")
	text = strings.ReplaceAll(text, "(() => {\n    return ", "(() => { return ")
	text = strings.ReplaceAll(text, ";\n    const ", "; const ")
	text = strings.ReplaceAll(text, ";\n    let ", "; let ")
	text = strings.ReplaceAll(text, ";\n    return ", "; return ")
	text = strings.ReplaceAll(text, "\n    };\n})()", "\n}; })()")
	text = strings.ReplaceAll(text, "\n    });\n})()", "\n}); })()")
	text = strings.ReplaceAll(text, "\n    }); let ", "\n}); let ")
	text = strings.ReplaceAll(text, ";\n})()", "; })()")
	text = strings.ReplaceAll(text, "\n        ", "\n    ")
	text = regexp.MustCompile(`\n\n([A-Za-z_$][A-Za-z0-9_$]*\([^;\n]*\);?)`).ReplaceAllString(text, "\n$1")
	trimmed := strings.TrimRight(text, " \t\r\n")
	if strings.HasSuffix(trimmed, ")") && !strings.HasSuffix(trimmed, ";") {
		return trimmed + ";\n"
	}
	if text != "" && !strings.HasSuffix(text, "\n") {
		return text + "\n"
	}
	return text
}
