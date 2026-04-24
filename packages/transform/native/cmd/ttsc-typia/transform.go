package main

import (
	"bytes"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"

	typiattsc "github.com/samchon/typia/packages/transform/native/ttsc"
	"github.com/samchon/typia/toolchain/ttsc/driver"
)

func runTransform(args []string) int {
	fs := flag.NewFlagSet("transform", flag.ContinueOnError)
	fs.SetOutput(stderr)
	file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
	tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
	cwdOverride := fs.String("cwd", "", "override the working directory")
	out := fs.String("out", "", "write output JS to PATH (default: stdout)")
	rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
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
	if diags := prog.Diagnostics(); len(diags) > 0 {
		driver.WritePrettyDiagnostics(stderr, diags, cwd)
		return 2
	}

	absFile := *file
	if !filepath.IsAbs(absFile) {
		absFile = filepath.Join(cwd, absFile)
	}
	absFile = filepath.ToSlash(absFile)

	rewrites := driver.NewRewriteSet()
	if *rewriteMode == "typia" {
		if _, _, err := collectTypiaRewrites(prog, cwd, true, true, absFile, rewrites); err != nil {
			fmt.Fprintf(stderr, "ttsc-typia transform: %v\n", err)
			return 3
		}
	}

	target := prog.SourceFile(absFile)
	if target == nil {
		fmt.Fprintf(stderr, "ttsc-typia transform: source file is not in program: %s\n", absFile)
		return 2
	}

	var captured []byte
	capture := func(name, text string, _ *shimcompiler.WriteFileData) error {
		rel := filepath.ToSlash(name)
		if !strings.HasSuffix(rel, ".js") {
			return nil
		}
		captured = []byte(text)
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
	if *rewriteMode == "typia" {
		captured = []byte(typiattsc.CleanupTransformedText(string(captured)))
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
