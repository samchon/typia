package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

// Iterate_metadata_comment_tags applies the JSDoc tags of each property of an
// object to the property's metadata, once per object.
//
// @evidence contracts/common.md#principled-implementation Each property that has JSDoc tags passes them to the comment tag analyzer with its location, and the object is marked tagged first so the pass runs once even if the object is reached again; the analyzer is a package variable that the tag factory installs, which avoids an import cycle.
// @evidence contracts/common.md#clear-and-simple-design One function with an early return for no analyzer.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Installing the analyzer through a package variable is a dependency inversion and not a monkey patch of foreign code.
// @evidence contracts/common.md#meaningful-documentation The doc states the once-per-object rule.
func Iterate_metadata_comment_tags(props struct {
  Errors *[]MetadataFactory_IError
  Object *schemametadata.MetadataObjectType
}) {
  if props.Object == nil || props.Object.Tagged_ == true || MetadataCommentTagAnalyzer == nil {
    return
  }
  props.Object.Tagged_ = true

  for _, property := range props.Object.Properties {
    if property == nil || property.Value == nil || len(property.JsDocTags) == 0 {
      continue
    }
    MetadataCommentTagAnalyzer(struct {
      Errors   *[]MetadataFactory_IError
      Metadata *schemametadata.MetadataSchema
      Tags     []schemametadata.IJsDocTagInfo
      Explore  MetadataFactory_IExplore
    }{
      Errors:   props.Errors,
      Metadata: property.Value,
      Tags:     property.JsDocTags,
      Explore: MetadataFactory_IExplore{
        Top:      false,
        Object:   props.Object,
        Property: property,
      },
    })
  }
}
