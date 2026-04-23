package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"

	"github.com/samchon/typia/toolchain/ttsc/driver"
)

// runBuild implements `ttsc build`. Two modes:
//
//   - default (dry run): analyze, report per-call-site status to stdout.
//   - --emit: also run tsgo's emit pipeline, patching every recognized native
//     consumer call in the resulting .js files.
func runBuild(args []string) int {
	fs := flag.NewFlagSet("build", flag.ContinueOnError)
	fs.SetOutput(stderr)
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "path to tsconfig.json")
	cwdOverride := fs.String("cwd", "", "override the working directory (defaults to process cwd)")
	quiet := fs.Bool("quiet", false, "suppress the per-call diagnostic summary")
	emit := fs.Bool("emit", false, "force emitted .js files (runs tsgo + ttsc rewrite)")
	noEmit := fs.Bool("noEmit", false, "force analysis-only run with no file writes")
	outDir := fs.String("outDir", "", "override compilerOptions.outDir for this build")
	manifestPath := fs.String("manifest", "", "write emitted file list as JSON to this path")
	rewriteMode := fs.String("rewrite-mode", "none", "native rewrite backend id")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *emit && *noEmit {
		fmt.Fprintln(stderr, "ttsc build: --emit and --noEmit are mutually exclusive")
		return 2
	}

	cwd := *cwdOverride
	if cwd == "" {
		var err error
		cwd, err = os.Getwd()
		if err != nil {
			fmt.Fprintf(stderr, "ttsc build: could not get working directory: %v\n", err)
			return 2
		}
	}

	prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
		ForceEmit:   *emit,
		ForceNoEmit: *noEmit,
		OutDir:      *outDir,
	})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc build: %v\n", err)
		return 2
	}
	if len(diags) > 0 {
		for _, d := range diags {
			fmt.Fprintln(stderr, "  -", d.String())
		}
		return 2
	}
	defer prog.Close()

	rewrites := driver.NewRewriteSet()
	shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
	if *rewriteMode != "none" {
		fmt.Fprintf(stderr, "ttsc build: rewrite backend %q is not built into the standalone ttsc binary\n", *rewriteMode)
		fmt.Fprintln(stderr, "ttsc build: run through the JS host with the matching compiler plugin so it can select the consumer-provided native binary")
		return 2
	}
	if !*quiet {
		fmt.Fprintf(stdout, "// ttsc build: tsconfig=%s cwd=%s sites=%d emit=%v rewrite=%s\n", *tsconfigPath, cwd, 0, shouldEmit, *rewriteMode)
	}

	if shouldEmit {
		writeFile := shimcompiler.WriteFile(
			func(fileName, text string, _ *shimcompiler.WriteFileData) error {
				return driver.DefaultWriteFile(fileName, text)
			},
		)
		res, eDiags, err := prog.EmitAll(rewrites, writeFile)
		if err != nil {
			fmt.Fprintf(stderr, "ttsc build: emit failed: %v\n", err)
			return 3
		}
		for _, d := range eDiags {
			fmt.Fprintln(stderr, "  -", d.String())
		}
		if !*quiet {
			fmt.Fprintf(stdout, "// ttsc build: emitted=%d files\n", len(res.EmittedFiles))
			for _, f := range res.EmittedFiles {
				rel := f
				if abs, err := filepath.Rel(cwd, f); err == nil {
					rel = abs
				}
				fmt.Fprintln(stdout, "  +", rel)
			}
		}
		if *manifestPath != "" {
			data, err := json.Marshal(res.EmittedFiles)
			if err != nil {
				fmt.Fprintf(stderr, "ttsc build: manifest marshal failed: %v\n", err)
				return 3
			}
			if err := os.MkdirAll(filepath.Dir(*manifestPath), 0o755); err != nil {
				fmt.Fprintf(stderr, "ttsc build: manifest mkdir failed: %v\n", err)
				return 3
			}
			if err := os.WriteFile(*manifestPath, data, 0o644); err != nil {
				fmt.Fprintf(stderr, "ttsc build: manifest write failed: %v\n", err)
				return 3
			}
		}
	}

	if !*quiet {
		fmt.Fprintf(stdout, "// ttsc build: recognized=%d total=%d rewrites=%d\n", 0, 0, rewrites.Len())
	}
	return 0
}
