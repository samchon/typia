package metadata

import (
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type MetadataFactory_IOptions struct {
	Escape     bool
	Absorb     bool
	Constant   bool
	Functional bool
	Validate   func(props struct {
		Metadata *schemametadata.MetadataSchema
		Explore  MetadataFactory_IExplore
		Top      *schemametadata.MetadataSchema
	}) []string
	OnError func(node any, message string)
}

type MetadataFactory_IError struct {
	Name     string
	Explore  MetadataFactory_IExplore
	Messages []string
}

type MetadataFactory_IExplore struct {
	Top       bool
	Object    *schemametadata.MetadataObjectType
	Property  any
	Parameter any
	Nested    any
	Aliased   bool
	Escaped   bool
	Output    bool
}

type MetadataFactory_IExplore_Function func(MetadataFactory_IExplore) MetadataFactory_IExplore

type IMetadataIteratorProps struct {
	Options     MetadataFactory_IOptions
	Checker     *nativechecker.Checker
	Components  *schemametadata.MetadataCollection
	Errors      *[]MetadataFactory_IError
	Metadata    *schemametadata.MetadataSchema
	Type        *nativechecker.Type
	Explore     MetadataFactory_IExplore
	Intersected bool
}

var MetadataTypeTagAnalyzer func(props struct {
	Errors  *[]MetadataFactory_IError
	Type    string
	Objects []*schemametadata.MetadataObjectType
	Explore MetadataFactory_IExplore
}) []schemametadata.IMetadataTypeTag
