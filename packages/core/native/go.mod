module github.com/samchon/typia/packages/core/native

go 1.26

replace (
	github.com/microsoft/typescript-go/shim/ast => ../../ttsc/shim/ast
	github.com/microsoft/typescript-go/shim/bundled => ../../ttsc/shim/bundled
	github.com/microsoft/typescript-go/shim/checker => ../../ttsc/shim/checker
	github.com/microsoft/typescript-go/shim/compiler => ../../ttsc/shim/compiler
	github.com/microsoft/typescript-go/shim/core => ../../ttsc/shim/core
	github.com/microsoft/typescript-go/shim/parser => ../../ttsc/shim/parser
	github.com/microsoft/typescript-go/shim/scanner => ../../ttsc/shim/scanner
	github.com/microsoft/typescript-go/shim/tsoptions => ../../ttsc/shim/tsoptions
	github.com/microsoft/typescript-go/shim/tspath => ../../ttsc/shim/tspath
	github.com/microsoft/typescript-go/shim/vfs => ../../ttsc/shim/vfs
	github.com/microsoft/typescript-go/shim/vfs/cachedvfs => ../../ttsc/shim/vfs/cachedvfs
	github.com/microsoft/typescript-go/shim/vfs/osvfs => ../../ttsc/shim/vfs/osvfs
)

require (
	github.com/microsoft/typescript-go/shim/ast v0.0.0
	github.com/microsoft/typescript-go/shim/checker v0.0.0
	github.com/microsoft/typescript-go/shim/scanner v0.0.0
)

require (
	github.com/go-json-experiment/json v0.0.0-20260214004413-d219187c3433 // indirect
	github.com/klauspost/cpuid/v2 v2.2.10 // indirect
	github.com/microsoft/typescript-go v0.0.0-20260408193441-2a5e1cf9fe22 // indirect
	github.com/zeebo/xxh3 v1.1.0 // indirect
	golang.org/x/sync v0.20.0 // indirect
	golang.org/x/sys v0.42.0 // indirect
	golang.org/x/text v0.35.0 // indirect
)
