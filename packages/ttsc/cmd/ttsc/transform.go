package main

import (
	"bytes"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"

	"github.com/samchon/typia/packages/ttsc/driver"
)

// runTransform implements `ttsc transform` — a single-file transform used by
// bundler plugin adapters (unplugin, vite, webpack, rollup, esbuild, rspack,
// farm). Behaviour:
//
//   - Loads the enclosing tsconfig so tsgo resolves imports and types.
//   - Runs tsgo Emit, filtering WriteFile so only the requested source
//     file's JS leaves the binary.
//   - Applies the ttsc rewrite + import cleanup just like `build --emit`.
//   - Writes the result to stdout (or `--out` when provided).
//
// The contract matches unplugin-typia's per-file transform hook: bundlers
// hand the plugin a source file path, the plugin shells out here, and the
// returned text replaces the file in the bundle graph.
func runTransform(args []string) int {
	fs := flag.NewFlagSet("transform", flag.ContinueOnError)
	fs.SetOutput(stderr)
	file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
	cwdOverride := fs.String("cwd", "", "override the working directory")
	out := fs.String("out", "", "write output JS to PATH (default: stdout)")
	rewriteMode := fs.String("rewrite-mode", "none", "native rewrite backend id")
	if err := fs.Parse(args); err != nil {
		return 2
	}
	if *file == "" {
		fmt.Fprintln(stderr, "ttsc transform: --file is required")
		return 2
	}

	cwd := *cwdOverride
	if cwd == "" {
		var err error
		cwd, err = os.Getwd()
		if err != nil {
			fmt.Fprintf(stderr, "ttsc transform: cwd: %v\n", err)
			return 2
		}
	}

	prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
		ForceEmit: true,
	})
	if err != nil {
		fmt.Fprintf(stderr, "ttsc transform: %v\n", err)
		return 2
	}
	if len(diags) > 0 {
		for _, d := range diags {
			fmt.Fprintln(stderr, "  -", d.String())
		}
		return 2
	}
	defer prog.Close()

	absFile := *file
	if !filepath.IsAbs(absFile) {
		absFile = filepath.Join(cwd, absFile)
	}
	absFile = filepath.ToSlash(absFile)

	rewrites := driver.NewRewriteSet()
	if *rewriteMode != "none" {
		fmt.Fprintf(stderr, "ttsc transform: rewrite backend %q is not built into the standalone ttsc binary\n", *rewriteMode)
		fmt.Fprintln(stderr, "ttsc transform: run through the JS host with the matching compiler plugin so it can select the consumer-provided native binary")
		return 2
	}

	// Filter WriteFile to keep only the target file's output in memory.
	var captured []byte
	bestScore := 0
	capture := func(name, text string, _ *shimcompiler.WriteFileData) error {
		rel := filepath.ToSlash(name)
		if !strings.HasSuffix(rel, ".js") {
			return nil
		}
		score := sharedSourceStemSegments(rel, absFile)
		if score == 0 || score < bestScore {
			return nil
		}
		captured = []byte(text)
		bestScore = score
		return nil
	}
	_, eDiags, err := prog.EmitAll(rewrites, capture)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc transform: emit: %v\n", err)
		return 3
	}
	for _, d := range eDiags {
		fmt.Fprintln(stderr, "  -", d.String())
	}
	if captured == nil {
		fmt.Fprintf(stderr, "ttsc transform: no output produced for %s\n", absFile)
		return 3
	}
	if *out == "" {
		if _, werr := bytes.NewReader(captured).WriteTo(stdout); werr != nil {
			fmt.Fprintf(stderr, "ttsc transform: write stdout: %v\n", werr)
			return 3
		}
		return 0
	}
	if dir := filepath.Dir(*out); dir != "" {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			fmt.Fprintf(stderr, "ttsc transform: mkdir: %v\n", err)
			return 3
		}
	}
	if err := os.WriteFile(*out, captured, 0o644); err != nil {
		fmt.Fprintf(stderr, "ttsc transform: write %s: %v\n", *out, err)
		return 3
	}
	return 0
}

// sharedSourceStemSegments counts the shared trailing path segments between the
// emitted output path and the original source path after stripping extensions.
// `src/foo/bar.ts` ↔ `dist/foo/bar.js` returns 2, while unrelated paths return
// 0. `ttsc transform` uses the highest score to pick the emitted JS that
// belongs to the requested source file even when a project contains multiple
// `index.ts` files.
func sharedSourceStemSegments(outPath, srcPath string) int {
	trim := func(p string) []string {
		p = strings.TrimSuffix(p, filepath.Ext(p))
		return strings.Split(p, "/")
	}
	a, b := trim(outPath), trim(srcPath)
	n := len(a)
	if len(b) < n {
		n = len(b)
	}
	shared := 0
	for i := 1; i <= n; i++ {
		if a[len(a)-i] != b[len(b)-i] {
			break
		}
		shared++
	}
	return shared
}
