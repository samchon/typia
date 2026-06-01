//go:build !js

// Non-wasm entry. The same package built with GOOS=js GOARCH=wasm becomes the
// browser playground (see main_wasm.go). For native targets we keep a small CLI
// sanity surface so `go run ./cmd/playground typia <command> ...` exercises the
// typia plugin's `Run` contract without booting the browser MemFS — useful for
// local smoke tests that pin the same dispatch the wasm uses.
package main

import (
	"fmt"
	"os"

	"github.com/samchon/ttsc/packages/wasm/host"
)

func main() {
	args := os.Args[1:]
	if len(args) > 0 && (args[0] == "-v" || args[0] == "--version" || args[0] == "version") {
		fmt.Println("typia playground-wasm sanity build")
		return
	}
	plugins := []host.Plugin{newTypiaPlugin()}
	if len(args) >= 2 {
		name, command := args[0], args[1]
		for _, p := range plugins {
			if p.Name() == name {
				os.Exit(p.Run(command, args[2:]))
			}
		}
	}
	// Fall-through: still register the API so `go run` smoke tests can verify
	// host.Expose links cleanly even off the wasm path.
	host.Expose("ttscTypia", host.Config{Plugins: plugins})
}
