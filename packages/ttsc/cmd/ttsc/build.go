package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"path/filepath"

	"github.com/samchon/typia/packages/ttsc/internal/driver"
	"github.com/samchon/typia/packages/ttsc/internal/engine/analyzer"
)

// runBuild implements `ttsc build`. Two modes:
//
//   - default (dry run): analyse, report per-call-site status to stdout.
//   - --emit: also run tsgo's emit pipeline, patching every recognised typia
//     call in the resulting .js files.
func runBuild(args []string) int {
	fs := flag.NewFlagSet("build", flag.ContinueOnError)
	fs.SetOutput(stderr)
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "path to tsconfig.json")
	cwdOverride := fs.String("cwd", "", "override the working directory (defaults to process cwd)")
	quiet := fs.Bool("quiet", false, "suppress the per-call diagnostic summary")
	emit := fs.Bool("emit", false, "emit .js files (runs tsgo + ttsc rewrite)")
	outDir := fs.String("outDir", "", "override compilerOptions.outDir for this build")
	manifestPath := fs.String("manifest", "", "write emitted file list as JSON to this path")
	rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend (typia|none)")
	if err := fs.Parse(args); err != nil {
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
		ForceEmit: *emit,
		OutDir:    *outDir,
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

	sites := 0
	rewrites := driver.NewRewriteSet()
	recognised := 0
	switch *rewriteMode {
	case "none":
		// Plain tsgo emit/check path. JS host plugins may apply follow-up
		// rewrites after the native compiler exits.
	case "typia":
		var err error
		sites, recognised, err = collectTypiaRewrites(prog, cwd, *emit, *quiet, rewrites)
		if err != nil {
			fmt.Fprintf(stderr, "ttsc build: %v\n", err)
			return 3
		}
	default:
		fmt.Fprintf(stderr, "ttsc build: unknown --rewrite-mode value %q\n", *rewriteMode)
		return 2
	}
	if !*quiet {
		fmt.Fprintf(stdout, "// ttsc build: tsconfig=%s cwd=%s sites=%d emit=%v rewrite=%s\n", *tsconfigPath, cwd, sites, *emit, *rewriteMode)
	}

	if *emit {
		res, eDiags, err := prog.EmitAll(rewrites, nil)
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
		fmt.Fprintf(stdout, "// ttsc build: recognised=%d total=%d rewrites=%d\n", recognised, sites, rewrites.Len())
	}
	return 0
}

func collectTypiaRewrites(
	prog *driver.Program,
	cwd string,
	emit bool,
	quiet bool,
	rewrites *driver.RewriteSet,
) (int, int, error) {
	sites := prog.CollectCallSites()
	recognised := 0
	for _, site := range sites {
		rel := site.FilePath
		if abs, err := filepath.Rel(cwd, rel); err == nil {
			rel = abs
		}
		if site.TypeArgument == nil {
			fmt.Fprintf(stdout, "%s: typia.%s.%s — no explicit type argument (Phase 0 skip)\n", rel, site.Module, site.Method)
			continue
		}
		schema, ok := analyzer.New(prog.Checker, analyzer.DefaultOptions(), nil).Walk(site.TypeArgument)
		if !ok {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — type not yet supported (Phase 0)\n", rel, site.Module, site.Method)
			continue
		}
		expr, factory, err, handled := dispatchEmit(site.Module, site.Method, schema)
		if !handled {
			fmt.Fprintf(stdout, "%s: typia.%s.%s<T> — not covered in Phase 0\n", rel, site.Module, site.Method)
			continue
		}
		if err != nil {
			fmt.Fprintf(stdout, "%s: typia.%s<T> — emitter error: %v\n", rel, site.Method, err)
			continue
		}
		replacement := "(" + expr + ")"
		rewrites.Add(driver.Rewrite{
			File:          site.File,
			RootName:      site.RootName,
			Namespaces:    site.Namespaces,
			Method:        site.Method,
			Replacement:   replacement,
			ConsumeParens: factory,
		})
		if !emit && !quiet {
			fmt.Fprintf(stdout, "%s: typia.%s<T> → %s\n", rel, site.Method, expr)
		}
		recognised++
	}
	return len(sites), recognised, nil
}
