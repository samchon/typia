//go:build js && wasm

// Browser entry for the typia playground wasm. Binds `globalThis.ttscTypia`
// with the standard `@ttsc/wasm` host API (build / check / transform / plugin /
// plugins / version) and registers typia's real transform as the single
// `host.Plugin` named "typia".
//
// The playground UI (`@ttsc/playground`'s `PlaygroundShell`) boots this wasm in
// a Web Worker via `createWorkerCompiler({ apiName: "ttscTypia", typiaPlugin })`
// and routes the user's source through `api.plugin({ name: "typia", ... })`.
//
// This module lives under `website/` — not `packages/typia/native` — so that
// typia's published native plugin module never takes a dependency on
// `github.com/samchon/ttsc/packages/wasm`. ttsc builds the native plugin for
// the docs/examples compile without the wasm host, and would otherwise fail to
// resolve the `packages/wasm` require it cannot supply a replace for.
package main

import (
	"github.com/samchon/ttsc/packages/wasm/host"
)

func main() {
	host.Expose("ttscTypia", host.Config{
		Plugins: []host.Plugin{newTypiaPlugin()},
	})
}
