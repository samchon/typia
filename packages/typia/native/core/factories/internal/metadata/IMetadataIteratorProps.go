package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// MetadataFactory_IOptions is the option record of the metadata analysis.
// Escape reads `toJSON`, Absorb folds intersections, Constant keeps literals,
// Functional analyzes functions, Methods keeps compare methods and
// StrictObjectMembers rejects members without a JSON form. Validate and OnError
// are the caller's hooks.
//
// @evidence contracts/common.md#principled-implementation Each switch controls one analysis decision: reading `toJSON`, folding intersections, keeping literals, analyzing functions, keeping compare methods and rejecting members without a JSON form; the validator and error hook belong to the caller, so all behavior differences between consumers are expressed in this record.
// @evidence contracts/common.md#clear-and-simple-design One flat record; the field comments explain the two options whose purpose is not obvious.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Options are parameters of the analysis and no consumer name appears.
// @evidence contracts/common.md#meaningful-documentation The doc lists every switch and the field comments cover Methods and StrictObjectMembers.
type MetadataFactory_IOptions struct {
  Escape     bool
  Absorb     bool
  Constant   bool
  Functional bool
  // Methods opts object/class method members (e.g. an `equals` / `less`
  // method) into the collected properties as function-typed values, without
  // switching on full Functional analysis. Used by the compare programmers to
  // detect user-defined comparison methods.
  Methods bool
  // StrictObjectMembers is for consumers whose emitted value promises to
  // satisfy the entire input type. Include accessors and methods in the
  // structural shape and diagnose members that have no JSON representation.
  StrictObjectMembers bool
  Validate            func(props struct {
    Metadata *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
    Top      *schemametadata.MetadataSchema
  }) []string
  OnError func(node any, message string)
}

// MetadataFactory_IError is one failure: the type name, where it was found and
// the reasons.
//
// @evidence contracts/common.md#principled-implementation A failure names the type, where it was found and why, which is what the diagnostic text needs.
// @evidence contracts/common.md#clear-and-simple-design A three-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the parts.
type MetadataFactory_IError struct {
  Name     string
  Explore  MetadataFactory_IExplore
  Messages []string
}

// MetadataFactory_IExplore records where the analysis is: whether it is at the
// top, the object, property or parameter being explored, and the aliased,
// escaped, nested and output states.
//
// @evidence contracts/common.md#principled-implementation The location carries whether the analysis is at the top, the object and property or parameter being explored, and the aliased, escaped, nested and output states, because the same type is analyzed differently in those positions; property and parameter are typed any since they come from different producers.
// @evidence contracts/common.md#clear-and-simple-design One flat record that iterators copy and modify to descend.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc lists the states.
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

// MetadataFactory_IExplore_Function derives a new exploration state from one.
//
// @evidence contracts/common.md#principled-implementation A function from a location to a location lets a caller derive the next state without exposing the record's construction.
// @evidence contracts/common.md#clear-and-simple-design A function type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states that it derives a state.
type MetadataFactory_IExplore_Function func(MetadataFactory_IExplore) MetadataFactory_IExplore

// IMetadataIteratorProps is the state passed to every iterator: options, checker,
// the collection, the error sink, the metadata being filled, the type, the
// exploration location and the Intersected, Unioned and Prunable flags.
//
// @evidence contracts/common.md#principled-implementation Every iterator receives the same record, so adding a decision means adding a field and not changing each signature; the Intersected, Unioned and Prunable flags tell an iterator whether it is inside an intersection or union, which changes how it treats never and brands.
// @evidence contracts/common.md#clear-and-simple-design One flat record copied with small changes when an iterator recurses.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc lists the fields and what the three flags mean.
type IMetadataIteratorProps struct {
  Options     MetadataFactory_IOptions
  Checker     *nativechecker.Checker
  Components  *schemametadata.MetadataCollection
  Errors      *[]MetadataFactory_IError
  Metadata    *schemametadata.MetadataSchema
  Type        *nativechecker.Type
  Explore     MetadataFactory_IExplore
  Intersected bool
  Unioned     bool
  Prunable    bool
}

var MetadataTypeTagAnalyzer func(props struct {
  Errors  *[]MetadataFactory_IError
  Type    string
  Objects []*schemametadata.MetadataObjectType
  Explore MetadataFactory_IExplore
}) []schemametadata.IMetadataTypeTag

var MetadataCommentTagAnalyzer func(props struct {
  Errors   *[]MetadataFactory_IError
  Metadata *schemametadata.MetadataSchema
  Tags     []schemametadata.IJsDocTagInfo
  Explore  MetadataFactory_IExplore
})
