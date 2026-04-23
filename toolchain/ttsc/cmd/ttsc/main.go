// Command ttsc is the Go CLI entrypoint for @typia/ttsc.
//
// Current responsibilities:
//   - Report version and platform (`ttsc --version`).
//   - Exercise a native rewrite backend end-to-end (`ttsc demo --type=string`)
//     so smoke tests can verify the Go binary really runs.
//   - Act as a placeholder for the eventual `build` / `dev` / `check` / `setup`
//     subcommands that will land in Week 3+.
//
// Everything below is deliberately dependency-free so that the standalone binary
// stays small and its behavior is trivial to audit.
package main

import (
	"flag"
	"fmt"
	"io"
	"os"
	"runtime"
	"strings"
)

// These are overridden via `-ldflags "-X main.version=... -X main.commit=..."`
// in CI. Sensible defaults keep local `go run ./cmd/ttsc` usable.
var (
	version = "0.0.0-dev"
	commit  = "dev"
	date    = "unknown"
)

// stdout / stderr are package-level to keep the CLI testable.
var (
	stdout io.Writer = os.Stdout
	stderr io.Writer = os.Stderr
)

func main() {
	os.Exit(run(os.Args[1:]))
}

func run(args []string) int {
	if len(args) == 0 {
		return runBuild(nil)
	}

	switch args[0] {
	case "-h", "--help", "help":
		printHelp(stdout)
		return 0
	case "-v", "--version", "version":
		printVersion(stdout)
		return 0
	case "demo":
		return runDemo(args[1:])
	case "build":
		return runBuild(args[1:])
	case "check":
		// `ttsc check` runs the analyze pipeline without emitting JS — useful
		// in CI and pre-commit hooks that only need schema validation.
		return runBuild(append([]string{"--noEmit"}, appendUnique(args[1:], "--quiet")...))
	case "transform":
		// Single-file transform for bundler plugin integration (unplugin,
		// vite, esbuild, webpack, …). Emits only the requested file's JS to
		// stdout or a chosen path — no project-wide write.
		return runTransform(args[1:])
	case "-p", "--project":
		if len(args) < 2 {
			fmt.Fprintln(stderr, "ttsc: -p/--project requires a path argument")
			return 2
		}
		return runBuild(append([]string{"--tsconfig=" + args[1]}, args[2:]...))
	default:
		return runBuild(args)
	}
}

// appendUnique appends `extra` to `args` only when it's not already present.
func appendUnique(args []string, extra ...string) []string {
	out := append([]string{}, args...)
	for _, e := range extra {
		seen := false
		for _, a := range out {
			if a == e {
				seen = true
				break
			}
		}
		if !seen {
			out = append(out, e)
		}
	}
	return out
}

func printVersion(w io.Writer) {
	fmt.Fprintf(
		w,
		"ttsc %s (commit %s, built %s, %s/%s, go %s)\n",
		version,
		commit,
		date,
		runtime.GOOS,
		runtime.GOARCH,
		runtime.Version(),
	)
}

func printHelp(w io.Writer) {
	fmt.Fprintln(w, strings.TrimSpace(`
ttsc — standalone typescript-go host.

Usage:
  ttsc
  ttsc [file.ts]
  ttsc --watch
  ttsc [command] [options]

Commands:
  build         Compile every .ts in a project and emit rewritten .js.
  check         Run the analyzer without emitting — type-only validation.
  transform     Emit a single file's rewritten JS (bundler plugin hook).
  demo          Run a native backend smoke pipeline with synthetic input.
  version       Print version, build info, and platform.
  help          Show this help.

Drop-in tsc aliases:
  ttsc -p tsconfig.json          ≡ ttsc build --tsconfig=tsconfig.json --emit
  ttsc --project tsconfig.json   (same)

Build options:
  --tsconfig=FILE   Path to tsconfig.json (default: tsconfig.json).
  --cwd=DIR         Override working directory.
  --emit            Force emitted .js files even when tsconfig has noEmit.
  --noEmit          Force analysis-only run even when tsconfig would emit.
  --quiet           Suppress the per-call summary banner.
  --rewrite-mode=M  Native rewrite backend id.
  --manifest=FILE   Write emitted file paths as JSON to FILE after build --emit.

Transform options:
  --file=PATH       Absolute or cwd-relative path of the .ts file to transform.
  --tsconfig=FILE   tsconfig.json owning --file (default: tsconfig.json).
  --out=PATH        Write output JS to PATH. Default: stdout.
  --rewrite-mode=M  Native rewrite backend id.

Demo options:
  --type=T          Atomic TypeScript type to simulate. One of:
                      string, number, boolean, bigint, any (default: string).

Examples:
  ttsc --version
  ttsc build --tsconfig=./tsconfig.json
  ttsc -p ./tsconfig.json
  ttsc check
  ttsc transform --file=src/main.ts
  ttsc demo --type=number

Integration guide (bundlers):
  - vite / webpack / rollup / esbuild: shell out to "ttsc transform" per file,
    forward stdout as the bundler transform result. @typia/unplugin wraps
    this for you.
  - Next.js / Nuxt / Bun: "ttsc build" in your pipeline replaces tsc and
    the rewritten .js feeds the runtime directly.
  - Monorepo / pnpm workspace: share one ttsc binary via a root script;
    per-package tsconfig.json references work unchanged.
`))
}

func runDemo(args []string) int {
	fs := flag.NewFlagSet("demo", flag.ContinueOnError)
	fs.SetOutput(stderr)
	typ := fs.String("type", "string", "atomic type to simulate")
	if err := fs.Parse(args); err != nil {
		return 2
	}

	arrow, err := demoArrow(*typ)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc demo: %v\n", err)
		return 2
	}

	fmt.Fprintf(stdout, "// demo<%s> ⇢ emitted by @typia/ttsc %s\n", *typ, version)
	fmt.Fprintln(stdout, arrow)
	return 0
}

func demoArrow(name string) (string, error) {
	switch strings.ToLower(name) {
	case "any":
		return "(input) => true", nil
	case "boolean":
		return `(input) => "boolean" === typeof input`, nil
	case "number":
		return `(input) => "number" === typeof input`, nil
	case "bigint":
		return `(input) => "bigint" === typeof input`, nil
	case "string", "":
		return `(input) => "string" === typeof input`, nil
	default:
		return "", fmt.Errorf("unknown --type value %q (want: string|number|boolean|bigint|any)", name)
	}
}
