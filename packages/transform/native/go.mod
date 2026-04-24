module github.com/samchon/typia/packages/transform/native

go 1.26

replace (
	github.com/microsoft/typescript-go/shim/ast => ../../../toolchain/ttsc/shim/ast
	github.com/microsoft/typescript-go/shim/bundled => ../../../toolchain/ttsc/shim/bundled
	github.com/microsoft/typescript-go/shim/checker => ../../../toolchain/ttsc/shim/checker
	github.com/microsoft/typescript-go/shim/compiler => ../../../toolchain/ttsc/shim/compiler
	github.com/microsoft/typescript-go/shim/core => ../../../toolchain/ttsc/shim/core
	github.com/microsoft/typescript-go/shim/diagnosticwriter => ../../../toolchain/ttsc/shim/diagnosticwriter
	github.com/microsoft/typescript-go/shim/parser => ../../../toolchain/ttsc/shim/parser
	github.com/microsoft/typescript-go/shim/scanner => ../../../toolchain/ttsc/shim/scanner
	github.com/microsoft/typescript-go/shim/tsoptions => ../../../toolchain/ttsc/shim/tsoptions
	github.com/microsoft/typescript-go/shim/tspath => ../../../toolchain/ttsc/shim/tspath
	github.com/microsoft/typescript-go/shim/vfs => ../../../toolchain/ttsc/shim/vfs
	github.com/microsoft/typescript-go/shim/vfs/cachedvfs => ../../../toolchain/ttsc/shim/vfs/cachedvfs
	github.com/microsoft/typescript-go/shim/vfs/osvfs => ../../../toolchain/ttsc/shim/vfs/osvfs
	github.com/samchon/typia/packages/core/native => ../../core/native
	github.com/samchon/typia/toolchain/ttsc => ../../../toolchain/ttsc
)

require (
	github.com/microsoft/typescript-go/shim/ast v0.0.0
	github.com/microsoft/typescript-go/shim/checker v0.0.0
	github.com/microsoft/typescript-go/shim/compiler v0.0.0
	github.com/microsoft/typescript-go/shim/scanner v0.0.0
	github.com/samchon/typia/packages/core/native v0.0.0
	github.com/samchon/typia/toolchain/ttsc v0.0.0
)

require (
	github.com/go-json-experiment/json v0.0.0-20260214004413-d219187c3433 // indirect
	github.com/klauspost/cpuid/v2 v2.2.10 // indirect
	github.com/microsoft/typescript-go v0.0.0-20260408193441-2a5e1cf9fe22 // indirect
	github.com/microsoft/typescript-go/shim/bundled v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/core v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/diagnosticwriter v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/tsoptions v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/tspath v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs/cachedvfs v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/vfs/osvfs v0.0.0 // indirect
	github.com/zeebo/xxh3 v1.1.0 // indirect
	golang.org/x/sync v0.20.0 // indirect
	golang.org/x/sys v0.42.0 // indirect
	golang.org/x/text v0.35.0 // indirect
)
