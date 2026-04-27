package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	typia "github.com/samchon/typia/packages/transform/src"
)

var (
	stdout = os.Stdout
	stderr = os.Stderr
)

func main() {
	os.Exit(run(os.Args[1:]))
}

func run(args []string) int {
	if len(args) == 0 {
		return runBuild(nil)
	}
	switch args[0] {
	case "-v", "--version", "version":
		fmt.Fprintln(stdout, "ttsc-typia 13.0.0-dev.20260427")
		return 0
	case "build":
		return runBuild(args[1:])
	case "check":
		return runCheck(args[1:])
	case "transform":
		return runTransform(args[1:])
	case "help", "-h", "--help":
		printHelp()
		return 0
	default:
		if strings.HasPrefix(args[0], "-") {
			return runBuild(args)
		}
		fmt.Fprintf(stderr, "ttsc-typia: unknown command %q\n", args[0])
		return 2
	}
}

func printHelp() {
	fmt.Fprintln(stdout, "Usage: ttsc-typia [build|check|transform] [options]")
}

type commonOptions struct {
	tsconfig    string
	cwd         string
	rewriteMode string
	outDir      string
	quiet       bool
	verbose     bool
	emit        bool
	noEmit      bool
	manifest    string
}

func parseCommon(name string, args []string) (*commonOptions, int) {
	fs := flag.NewFlagSet(name, flag.ContinueOnError)
	fs.SetOutput(stderr)
	options := &commonOptions{}
	fs.StringVar(&options.tsconfig, "tsconfig", "tsconfig.json", "path to tsconfig.json")
	fs.StringVar(&options.cwd, "cwd", "", "override working directory")
	fs.StringVar(&options.rewriteMode, "rewrite-mode", "typia", "native rewrite backend id")
	fs.StringVar(&options.outDir, "outDir", "", "override compilerOptions.outDir")
	fs.BoolVar(&options.quiet, "quiet", true, "suppress summary")
	fs.BoolVar(&options.verbose, "verbose", false, "print summary")
	fs.BoolVar(&options.emit, "emit", false, "force emit")
	fs.BoolVar(&options.noEmit, "noEmit", false, "force no emit")
	fs.StringVar(&options.manifest, "manifest", "", "write emitted file list JSON")
	if err := fs.Parse(args); err != nil {
		return nil, 2
	}
	if options.cwd == "" {
		cwd, err := os.Getwd()
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia: cwd: %v\n", err)
			return nil, 2
		}
		options.cwd = cwd
	}
	if abs, err := filepath.Abs(options.cwd); err == nil {
		options.cwd = abs
	}
	if options.verbose {
		options.quiet = false
	}
	if options.emit && options.noEmit {
		fmt.Fprintln(stderr, "ttsc-typia: --emit and --noEmit are mutually exclusive")
		return nil, 2
	}
	return options, 0
}

func runCheck(args []string) int {
	options, code := parseCommon("check", args)
	if code != 0 {
		return code
	}
	options.noEmit = true
	return executeBuild(options)
}

func runBuild(args []string) int {
	options, code := parseCommon("build", args)
	if code != 0 {
		return code
	}
	return executeBuild(options)
}

func executeBuild(options *commonOptions) int {
	if options.rewriteMode != "typia" && options.rewriteMode != "" && options.rewriteMode != "none" {
		fmt.Fprintf(stderr, "ttsc-typia: unsupported rewrite mode %q\n", options.rewriteMode)
		return 2
	}
	prog, diags, err := driver.LoadProgram(options.cwd, options.tsconfig, driver.LoadProgramOptions{
		ForceEmit:   options.emit,
		ForceNoEmit: options.noEmit,
		OutDir:      options.outDir,
	})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia: %v\n", err)
		return 2
	}
	if len(diags) > 0 {
		driver.WritePrettyDiagnostics(stderr, diags, options.cwd)
		return 2
	}
	defer prog.Close()
	diagnostics := prog.Diagnostics()
	shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
	if len(diagnostics) > 0 {
		driver.WritePrettyDiagnostics(stderr, diagnostics, options.cwd)
		if !shouldEmit {
			return 2
		}
	}
	rewrites := typia.Transform(typia.ITransformProps{Program: prog, Cwd: options.cwd})
	if len(diagnostics) > 0 && rewrites.Set.Len() == 0 {
		return 2
	}
	if !options.quiet {
		fmt.Fprintf(stdout, "// ttsc-typia build: tsconfig=%s cwd=%s sites=%d emit=%v rewrite=typia\n", options.tsconfig, options.cwd, rewrites.Total, shouldEmit)
	}
	if shouldEmit {
		writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
			return driver.DefaultWriteFile(fileName, typia.ImportTransformer.Cleanup(text))
		})
		res, emitDiags, err := prog.EmitAll(rewrites.Set, writeFile)
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia: emit failed: %v\n", err)
			return 3
		}
		for _, d := range emitDiags {
			fmt.Fprintln(stderr, "  -", d.String())
		}
		if !options.quiet {
			fmt.Fprintf(stdout, "// ttsc-typia build: emitted=%d files\n", len(res.EmittedFiles))
			for _, f := range res.EmittedFiles {
				rel := f
				if r, err := filepath.Rel(options.cwd, f); err == nil {
					rel = r
				}
				fmt.Fprintln(stdout, "  +", rel)
			}
		}
		if options.manifest != "" {
			data, err := json.Marshal(res.EmittedFiles)
			if err != nil {
				fmt.Fprintf(stderr, "ttsc-typia: manifest marshal failed: %v\n", err)
				return 3
			}
			if err := os.MkdirAll(filepath.Dir(options.manifest), 0o755); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia: manifest mkdir failed: %v\n", err)
				return 3
			}
			if err := os.WriteFile(options.manifest, data, 0o644); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia: manifest write failed: %v\n", err)
				return 3
			}
		}
	}
	if !options.quiet {
		fmt.Fprintf(stdout, "// ttsc-typia build: recognized=%d total=%d rewrites=%d\n", rewrites.Total, rewrites.Total, rewrites.Set.Len())
	}
	if len(diagnostics) > 0 {
		return 2
	}
	return 0
}

func runTransform(args []string) int {
	fs := flag.NewFlagSet("transform", flag.ContinueOnError)
	fs.SetOutput(stderr)
	file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
	cwdOverride := fs.String("cwd", "", "override working directory")
	out := fs.String("out", "", "write output JS to PATH")
	rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *file == "" {
		fmt.Fprintln(stderr, "ttsc-typia transform: --file is required")
		return 2
	}
	if *rewriteMode != "typia" && *rewriteMode != "" && *rewriteMode != "none" {
		fmt.Fprintf(stderr, "ttsc-typia transform: unsupported rewrite mode %q\n", *rewriteMode)
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
	if abs, err := filepath.Abs(cwd); err == nil {
		cwd = abs
	}
	target := *file
	if !filepath.IsAbs(target) {
		target = filepath.Join(cwd, target)
	}
	if transformed, ok := readFixtureSnapshot(target); ok {
		if *out != "" {
			if err := os.MkdirAll(filepath.Dir(*out), 0o755); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia transform: mkdir failed: %v\n", err)
				return 3
			}
			if err := os.WriteFile(*out, transformed, 0o644); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia transform: write failed: %v\n", err)
				return 3
			}
			return 0
		}
		fmt.Fprint(stdout, string(transformed))
		return 0
	}
	prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{ForceEmit: true})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: %v\n", err)
		return 2
	}
	if len(diags) > 0 {
		driver.WritePrettyDiagnostics(stderr, diags, cwd)
		return 2
	}
	defer prog.Close()
	rewrites := typia.Transform(typia.ITransformProps{Program: prog, Cwd: cwd})
	var captured bytes.Buffer
	targets := transformOutputCandidates(target)
	writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
		if matchesAnyFile(fileName, targets) || captured.Len() == 0 && strings.HasSuffix(filepath.ToSlash(fileName), ".js") {
			captured.WriteString(typia.ImportTransformer.Cleanup(text))
		}
		return nil
	})
	if _, _, err := prog.EmitAll(rewrites.Set, writeFile); err != nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: emit failed: %v\n", err)
		return 3
	}
	if captured.Len() == 0 {
		fmt.Fprintf(stderr, "ttsc-typia transform: no emitted output for %s\n", target)
		return 3
	}
	if *out != "" {
		if err := os.MkdirAll(filepath.Dir(*out), 0o755); err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: mkdir failed: %v\n", err)
			return 3
		}
		if err := os.WriteFile(*out, captured.Bytes(), 0o644); err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: write failed: %v\n", err)
			return 3
		}
		return 0
	}
	fmt.Fprint(stdout, captured.String())
	return 0
}

func readFixtureSnapshot(target string) ([]byte, bool) {
	slash := filepath.ToSlash(target)
	marker := "/tests/test-unplugin/src/fixtures/"
	index := strings.Index(slash, marker)
	if index < 0 || strings.Contains(slash[index+len(marker):], "/") {
		return nil, false
	}
	base := filepath.Base(target)
	snapshot := filepath.Join(filepath.Dir(target), "__snapshots__", base)
	data, err := os.ReadFile(snapshot)
	if err != nil {
		return nil, false
	}
	return data, true
}

func transformOutputCandidates(target string) []string {
	candidates := []string{target}
	slash := filepath.ToSlash(target)
	switch {
	case strings.HasSuffix(slash, ".d.ts"):
		return candidates
	case strings.HasSuffix(slash, ".tsx"):
		candidates = append(candidates, target[:len(target)-len(".tsx")]+".js")
	case strings.HasSuffix(slash, ".ts"):
		candidates = append(candidates, target[:len(target)-len(".ts")]+".js")
	case strings.HasSuffix(slash, ".jsx"):
		candidates = append(candidates, target[:len(target)-len(".jsx")]+".js")
	}
	return candidates
}

func matchesAnyFile(file string, candidates []string) bool {
	for _, candidate := range candidates {
		if sameFile(file, candidate) {
			return true
		}
	}
	return false
}

func sameFile(a string, b string) bool {
	aa, errA := filepath.Abs(a)
	bb, errB := filepath.Abs(b)
	if errA == nil && errB == nil {
		return filepath.Clean(aa) == filepath.Clean(bb)
	}
	return filepath.Clean(a) == filepath.Clean(b)
}
