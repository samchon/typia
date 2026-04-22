package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"

	typiattsc "github.com/samchon/typia/packages/transform/native/ttsc"
	"github.com/samchon/typia/packages/ttsc/driver"
)

func runBuild(args []string) int {
	fs := flag.NewFlagSet("build", flag.ContinueOnError)
	fs.SetOutput(stderr)
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "path to tsconfig.json")
	cwdOverride := fs.String("cwd", "", "override the working directory (defaults to process cwd)")
	quiet := fs.Bool("quiet", false, "suppress the per-call diagnostic summary")
	emit := fs.Bool("emit", false, "emit .js files (runs tsgo + typia rewrite)")
	outDir := fs.String("outDir", "", "override compilerOptions.outDir for this build")
	manifestPath := fs.String("manifest", "", "write emitted file list as JSON to this path")
	rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *rewriteMode != "none" && *rewriteMode != "typia" {
		fmt.Fprintf(stderr, "ttsc-typia build: unknown --rewrite-mode value %q\n", *rewriteMode)
		return 2
	}

	cwd := *cwdOverride
	if cwd == "" {
		var err error
		cwd, err = os.Getwd()
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia build: could not get working directory: %v\n", err)
			return 2
		}
	}

	prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
		ForceEmit: *emit,
		OutDir:    *outDir,
	})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc-typia build: %v\n", err)
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
	sites := 0
	recognised := 0
	if *rewriteMode == "typia" {
		var err error
		sites, recognised, err = collectTypiaRewrites(prog, cwd, *emit, *quiet, "", rewrites)
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia build: %v\n", err)
			return 3
		}
	}
	if !*quiet {
		fmt.Fprintf(stdout, "// ttsc-typia build: tsconfig=%s cwd=%s sites=%d emit=%v rewrite=%s\n", *tsconfigPath, cwd, sites, *emit, *rewriteMode)
	}
	if *emit {
		writeFile := shimcompiler.WriteFile(
			func(fileName, text string, _ *shimcompiler.WriteFileData) error {
				text = typiattsc.CleanupTransformedText(text)
				return driver.DefaultWriteFile(fileName, text)
			},
		)
		res, eDiags, err := prog.EmitAll(rewrites, writeFile)
		if err != nil {
			fmt.Fprintf(stderr, "ttsc-typia build: emit failed: %v\n", err)
			return 3
		}
		for _, d := range eDiags {
			fmt.Fprintln(stderr, "  -", d.String())
		}
		if !*quiet {
			fmt.Fprintf(stdout, "// ttsc-typia build: emitted=%d files\n", len(res.EmittedFiles))
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
				fmt.Fprintf(stderr, "ttsc-typia build: manifest marshal failed: %v\n", err)
				return 3
			}
			if err := os.MkdirAll(filepath.Dir(*manifestPath), 0o755); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia build: manifest mkdir failed: %v\n", err)
				return 3
			}
			if err := os.WriteFile(*manifestPath, data, 0o644); err != nil {
				fmt.Fprintf(stderr, "ttsc-typia build: manifest write failed: %v\n", err)
				return 3
			}
		}
	}
	if !*quiet {
		fmt.Fprintf(stdout, "// ttsc-typia build: recognised=%d total=%d rewrites=%d\n", recognised, sites, rewrites.Len())
	}
	return 0
}

func collectTypiaRewrites(
	prog *driver.Program,
	cwd string,
	emit bool,
	quiet bool,
	onlyFile string,
	rewrites *driver.RewriteSet,
) (int, int, error) {
	sites := typiattsc.CollectCallSites(prog.SourceFiles(), prog.Checker)
	recognised := 0
	for _, site := range sites {
		if onlyFile != "" && filepath.ToSlash(site.FilePath) != filepath.ToSlash(onlyFile) {
			continue
		}
		rel := site.FilePath
		if abs, err := filepath.Rel(cwd, rel); err == nil {
			rel = abs
		}
		if site.TypeArgument == nil {
			fmt.Fprintf(stdout, "%s: typia.%s.%s — no explicit type argument (skip)\n", rel, site.Module, site.Method)
			continue
		}
		if reason := typiattsc.UnsupportedReason(prog.Checker, site.TypeArgument, site.TypeNode, site.ConfigTypeNode, site.Module, site.Method); reason != "" {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — %s\n", rel, site.Module, site.Method, reason)
			continue
		}
		schema, ok := typiattsc.AnalyzeType(prog.Checker, site.TypeArgument, site.TypeNode)
		if !ok {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — type not yet supported\n", rel, site.Module, site.Method)
			continue
		}
		if reason := typiattsc.UnsupportedSchemaReason(site.Module, site.Method, schema, site.ConfigTypeNode, site.TypeNode); reason != "" {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — %s\n", rel, site.Module, site.Method, reason)
			continue
		}
		expr, factory, err, handled := typiattsc.EmitCall(site.Module, site.Method, schema, site.TypeNode, site.ConfigTypeNode)
		if !handled {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — method not covered\n", rel, site.Module, site.Method)
			continue
		}
		if err != nil {
			fmt.Fprintf(stdout, "%s: typia.%s<T> — emitter error: %v\n", rel, site.Method, err)
			continue
		}
		rewrites.Add(driver.Rewrite{
			File:          site.File,
			RootName:      site.RootName,
			Namespaces:    site.Namespaces,
			Method:        site.Method,
			Replacement:   "(" + expr + ")",
			ConsumeParens: factory,
		})
		if !emit && !quiet {
			fmt.Fprintf(stdout, "%s: typia.%s<T> → %s\n", rel, site.Method, expr)
		}
		recognised++
	}
	return len(sites), recognised, nil
}
