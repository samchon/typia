module github.com/samchon/typia/packages/transform

go 1.26

require (
	github.com/microsoft/typescript-go/shim/ast v0.0.0
	github.com/microsoft/typescript-go/shim/compiler v0.0.0
	github.com/samchon/ttsc/packages/ttsc v0.0.0-00010101000000-000000000000
	github.com/samchon/typia/packages/core v0.0.0
)

require (
	github.com/go-json-experiment/json v0.0.0-20260214004413-d219187c3433 // indirect
	github.com/klauspost/cpuid/v2 v2.2.10 // indirect
	github.com/microsoft/typescript-go v0.0.0-20260408193441-2a5e1cf9fe22 // indirect
	github.com/microsoft/typescript-go/shim/bundled v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/checker v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/core v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/diagnosticwriter v0.0.0 // indirect
	github.com/microsoft/typescript-go/shim/scanner v0.0.0 // indirect
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

replace github.com/microsoft/typescript-go/shim/ast => ../../node_modules/ttsc/shim/ast

replace github.com/microsoft/typescript-go/shim/bundled => ../../node_modules/ttsc/shim/bundled

replace github.com/microsoft/typescript-go/shim/checker => ../../node_modules/ttsc/shim/checker

replace github.com/microsoft/typescript-go/shim/compiler => ../../node_modules/ttsc/shim/compiler

replace github.com/microsoft/typescript-go/shim/core => ../../node_modules/ttsc/shim/core

replace github.com/microsoft/typescript-go/shim/diagnosticwriter => ../../node_modules/ttsc/shim/diagnosticwriter

replace github.com/microsoft/typescript-go/shim/parser => ../../node_modules/ttsc/shim/parser

replace github.com/microsoft/typescript-go/shim/scanner => ../../node_modules/ttsc/shim/scanner

replace github.com/microsoft/typescript-go/shim/tsoptions => ../../node_modules/ttsc/shim/tsoptions

replace github.com/microsoft/typescript-go/shim/tspath => ../../node_modules/ttsc/shim/tspath

replace github.com/microsoft/typescript-go/shim/vfs => ../../node_modules/ttsc/shim/vfs

replace github.com/microsoft/typescript-go/shim/vfs/cachedvfs => ../../node_modules/ttsc/shim/vfs/cachedvfs

replace github.com/microsoft/typescript-go/shim/vfs/osvfs => ../../node_modules/ttsc/shim/vfs/osvfs

replace github.com/samchon/ttsc/packages/ttsc => ../../node_modules/ttsc

replace github.com/samchon/typia/packages/core => ../core
