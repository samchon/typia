package main

import (
	"flag"
	"fmt"
	"io"
	"os"
	"runtime"
	"strings"
)

var (
	version = "0.1.0-dev"
	commit  = "dev"
	date    = "unknown"
)

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
		return runBuild(append([]string{"--noEmit"}, args[1:]...))
	case "transform":
		return runTransform(args[1:])
	case "-p", "--project":
		if len(args) < 2 {
			fmt.Fprintln(stderr, "ttsc-typia: -p/--project requires a path argument")
			return 2
		}
		return runBuild(append([]string{"--tsconfig=" + args[1]}, args[2:]...))
	default:
		return runBuild(args)
	}
}

func printVersion(w io.Writer) {
	fmt.Fprintf(
		w,
		"ttsc-typia %s (commit %s, built %s, %s/%s, go %s)\n",
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
ttsc-typia - typia native backend for the standalone ttsc host.

Usage:
  ttsc-typia [command] [options]

Commands:
  build         Compile every .ts in a project and emit typia-rewritten .js.
  check         Run the analyzer without emitting.
  transform     Emit a single file's typia-rewritten JS.
  demo          Run a backend smoke path.
  version       Print version, build info, and platform.
  help          Show this help.
`))
}

func runDemo(args []string) int {
	fs := flag.NewFlagSet("demo", flag.ContinueOnError)
	fs.SetOutput(stderr)
	if err := fs.Parse(args); err != nil {
		return 2
	}
	fmt.Fprintln(stdout, "// demo emitted by typia native backend")
	return 0
}
