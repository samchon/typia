module github.com/samchon/typia/website/compiler

go 1.26

// The website's playground wasm is a downstream consumer of @ttsc/wasm. It
// imports the host helper plus typia's native transform (adapter + the ttsc
// driver) and wires them into a single wasm so the in-browser playground can
// run typia's real transform pipeline.
//
// This module lives under website/ on purpose: keeping the `packages/wasm`
// dependency here means `packages/typia/native` (the published plugin) never
// requires it, so ttsc can build the native plugin for the docs/examples
// compile. Every shim/* replace mirrors `packages/typia/native/go.mod` because
// go.mod requires these directives to be self-contained. The ttsc packages and
// typia native are resolved from sibling checkouts, the same assumption
// `build/wasm.js` already makes for the native wasm build.
replace (
	github.com/microsoft/typescript-go/shim/ast => ../../../ttsc/packages/ttsc/shim/ast
	github.com/microsoft/typescript-go/shim/bundled => ../../../ttsc/packages/ttsc/shim/bundled
	github.com/microsoft/typescript-go/shim/checker => ../../../ttsc/packages/ttsc/shim/checker
	github.com/microsoft/typescript-go/shim/compiler => ../../../ttsc/packages/ttsc/shim/compiler
	github.com/microsoft/typescript-go/shim/core => ../../../ttsc/packages/ttsc/shim/core
	github.com/microsoft/typescript-go/shim/diagnosticwriter => ../../../ttsc/packages/ttsc/shim/diagnosticwriter
	github.com/microsoft/typescript-go/shim/parser => ../../../ttsc/packages/ttsc/shim/parser
	github.com/microsoft/typescript-go/shim/printer => ../../../ttsc/packages/ttsc/shim/printer
	github.com/microsoft/typescript-go/shim/scanner => ../../../ttsc/packages/ttsc/shim/scanner
	github.com/microsoft/typescript-go/shim/tsoptions => ../../../ttsc/packages/ttsc/shim/tsoptions
	github.com/microsoft/typescript-go/shim/tspath => ../../../ttsc/packages/ttsc/shim/tspath
	github.com/microsoft/typescript-go/shim/vfs => ../../../ttsc/packages/ttsc/shim/vfs
	github.com/microsoft/typescript-go/shim/vfs/cachedvfs => ../../../ttsc/packages/ttsc/shim/vfs/cachedvfs
	github.com/microsoft/typescript-go/shim/vfs/osvfs => ../../../ttsc/packages/ttsc/shim/vfs/osvfs
	github.com/samchon/ttsc/packages/ttsc => ../../../ttsc/packages/ttsc
	github.com/samchon/ttsc/packages/wasm => ../../../ttsc/packages/wasm
	github.com/samchon/typia/packages/typia/native => ../../packages/typia/native
)

require (
	github.com/microsoft/typescript-go/shim/compiler v0.0.0
	github.com/microsoft/typescript-go/shim/scanner v0.0.0
	github.com/samchon/ttsc/packages/ttsc v0.0.0
	github.com/samchon/ttsc/packages/wasm v0.0.0
	github.com/samchon/typia/packages/typia/native v0.0.0
)

require (
	github.com/go-json-experiment/json v0.0.0-20260214004413-d219187c3433 // indirect
	github.com/klauspost/cpuid/v2 v2.2.10 // indirect
	github.com/microsoft/typescript-go v0.0.0-20260429010842-56ab4af42157 // indirect
	github.com/microsoft/typescript-go/shim/ast v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/bundled v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/checker v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/core v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/diagnosticwriter v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/parser v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/printer v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/tsoptions v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/tspath v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs/cachedvfs v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs/osvfs v0.0.0 // indirect
	github.com/zeebo/xxh3 v1.1.0 // indirect
	golang.org/x/sync v0.20.0 // indirect
	golang.org/x/sys v0.43.0 // indirect
	golang.org/x/text v0.36.0 // indirect
)
