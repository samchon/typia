module github.com/samchon/typia/packages/typia/test

go 1.26

require (
	github.com/bufbuild/protocompile v0.14.1
	github.com/samchon/typia/packages/typia/native v0.0.0
)

require (
	golang.org/x/sync v0.20.0 // indirect
	google.golang.org/protobuf v1.34.2 // indirect
)

replace github.com/samchon/typia/packages/typia/native => ../native
