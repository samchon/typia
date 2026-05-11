//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"bytes"
	"os"
	"testing"
)

type mainExitCode int

// TestMainExitCoverage exercises the CLI main wrapper.
//
// The real entrypoint must call `os.Exit`, which would terminate `go test`
// before assertions could run. The package keeps the exit function behind a
// variable so this test can capture the exit code while preserving the
// production process behavior.
//
// 1. Replace the exit hook with a panic carrying the exit code.
// 2. Run main with the help route so it completes without filesystem writes.
// 3. Recover the synthetic exit value.
// 4. Restore process arguments and the original exit hook.
func TestMainExitCoverage(t *testing.T) {
	oldExit := exit
	oldArgs := os.Args
	oldStdout := stdout
	exit = func(code int) {
		panic(mainExitCode(code))
	}
	os.Args = []string{"ttsc-typia", "help"}
	stdout = &bytes.Buffer{}
	defer func() {
		exit = oldExit
		os.Args = oldArgs
		stdout = oldStdout
		if recovered := recover(); recovered != nil {
			if code, ok := recovered.(mainExitCode); ok && code == 0 {
				return
			}
			panic(recovered)
		}
		t.Fatal("main returned without invoking exit")
	}()
	main()
}
