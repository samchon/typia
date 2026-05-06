// Package driver wraps the typescript-go compiler so the rest of ttsc doesn't
// need to know about shim packages directly. It is the only part of the engine
// that imports `shim/*` by design — everything downstream consumes a small,
// shim-agnostic interface (`*Program`).
//
// Structural note: this file is deliberately adapted from tsgonest's
// `internal/compiler/host.go` (MIT, github.com/tsgonest/tsgonest).
// The helper surface is the same because both hosts need the same bundled-lib
// filesystem and CompilerHost construction.
package driver

import (
  "github.com/microsoft/typescript-go/shim/bundled"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  "github.com/microsoft/typescript-go/shim/vfs"
  "github.com/microsoft/typescript-go/shim/vfs/cachedvfs"
  "github.com/microsoft/typescript-go/shim/vfs/osvfs"
)

// DefaultFS returns an OS-backed filesystem wrapped with tsgo's bundled libs so
// built-in definitions (lib.es*.d.ts, dom, etc.) resolve without a network
// fetch. Mirrors tsgonest/tsgolint behavior.
func DefaultFS() vfs.FS {
  return bundled.WrapFS(cachedvfs.From(osvfs.FS()))
}

// DefaultHost returns a CompilerHost anchored at cwd that can find tsgo's
// bundled library files via `bundled.LibPath()`.
func DefaultHost(cwd string, fs vfs.FS) shimcompiler.CompilerHost {
  return shimcompiler.NewCompilerHost(cwd, fs, bundled.LibPath(), nil, nil)
}
