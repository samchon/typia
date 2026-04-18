// Command ttsc is the Go CLI entrypoint for @typia/ttsc.
//
// Phase 0 responsibilities:
//   - Report version and platform (`ttsc --version`).
//   - Exercise the MetadataSchema → emitter round-trip end-to-end
//     (`ttsc demo --type=string`) so smoke tests can verify the Go binary
//     really runs.
//   - Act as a placeholder for the eventual `build` / `dev` / `check` / `setup`
//     subcommands that will land in Week 3+.
//
// Everything below is deliberately dependency-free so that the Phase 0 binary
// stays small and its behaviour is trivial to audit.
package main

import (
	"flag"
	"fmt"
	"io"
	"os"
	"runtime"
	"strings"

	"github.com/samchon/typia/packages/ttsc/internal/engine/emitter"
	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// These are overridden via `-ldflags "-X main.version=... -X main.commit=..."`
// in CI. Sensible defaults keep local `go run ./cmd/ttsc` usable.
var (
	version = "0.0.0-phase0"
	commit  = "dev"
	date    = "unknown"
)

// exitFunc lets tests capture exit codes without calling os.Exit directly.
// Overridden only in tests.
var exitFunc = os.Exit

// stdout / stderr are package-level to keep the CLI testable.
var (
	stdout io.Writer = os.Stdout
	stderr io.Writer = os.Stderr
)

func main() {
	os.Exit(run(os.Args[1:]))
}

func run(args []string) int {
	// No args → print help, same exit status as `--help`.
	if len(args) == 0 {
		printHelp(stdout)
		return 0
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
	default:
		fmt.Fprintf(stderr, "ttsc: unknown command %q\n", args[0])
		fmt.Fprintln(stderr, "Run `ttsc --help` for usage.")
		return 2
	}
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
ttsc — typia's typescript-go driver (Phase 0 preview).

Usage:
  ttsc [command] [options]

Commands:
  build         Run the Phase 0 end-to-end pipeline against a tsconfig.json.
  demo          Run the metadata→emitter smoke pipeline with synthetic input.
  version       Print version, build info, and platform.
  help          Show this help.

Build options:
  --tsconfig=FILE   Path to tsconfig.json (default: tsconfig.json).
  --cwd=DIR         Override working directory.
  --quiet           Suppress the per-call summary banner.

Demo options:
  --type=T          Atomic TypeScript type to simulate. One of:
                      string, number, boolean, bigint, any (default: string).

Examples:
  ttsc --version
  ttsc build --tsconfig=./tsconfig.json
  ttsc demo --type=number
  ttsc demo --type=any

This is a Phase 0 spike. The real build/dev/check/setup subcommands will
arrive in subsequent phases (see wiki/08-tsgo-master-plan/17-phase0-kickoff.md).
`))
}

func runDemo(args []string) int {
	fs := flag.NewFlagSet("demo", flag.ContinueOnError)
	fs.SetOutput(stderr)
	typ := fs.String("type", "string", "atomic type to simulate")
	if err := fs.Parse(args); err != nil {
		return 2
	}

	schema, err := schemaForDemo(*typ)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc demo: %v\n", err)
		return 2
	}

	arrow, err := emitter.EmitIsArrowFunction(schema)
	if err != nil {
		fmt.Fprintf(stderr, "ttsc demo: %v\n", err)
		return 3
	}

	fmt.Fprintf(stdout, "// typia.is<%s>(input) ⇢ emitted by @typia/ttsc %s\n", *typ, version)
	fmt.Fprintln(stdout, arrow)
	return 0
}

// schemaForDemo builds a minimal MetadataSchema matching the name the user
// passed on the command line. Kept package-private so we can assert against
// it in tests without exposing it publicly.
func schemaForDemo(name string) (*metadata.Schema, error) {
	switch strings.ToLower(name) {
	case "any":
		s := metadata.NewSchema()
		s.Any = true
		return s, nil
	case "boolean":
		return metadata.NewSchema().AddAtomic(metadata.AtomicBoolean), nil
	case "number":
		return metadata.NewSchema().AddAtomic(metadata.AtomicNumber), nil
	case "bigint":
		return metadata.NewSchema().AddAtomic(metadata.AtomicBigint), nil
	case "string", "":
		return metadata.NewSchema().AddAtomic(metadata.AtomicString), nil
	default:
		return nil, fmt.Errorf("unknown --type value %q (want: string|number|boolean|bigint|any)", name)
	}
}
