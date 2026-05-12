package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

func Iterate_metadata_comment_tags(props struct {
  Errors *[]MetadataFactory_IError
  Object *schemametadata.MetadataObjectType
}) {
  if props.Object == nil || props.Object.Tagged_ == true {
    return
  }
  props.Object.Tagged_ = true

  for _, property := range props.Object.Properties {
    if MetadataCommentTagAnalyzer == nil || property == nil || property.Value == nil || len(property.JsDocTags) == 0 {
      continue
    }
    key := any(nil)
    if property.Key != nil {
      if literal := property.Key.GetSoleLiteral(); literal != nil {
        key = *literal
      }
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
        Top:       false,
        Object:    props.Object,
        Property:  key,
        Parameter: nil,
        Nested:    nil,
        Aliased:   false,
        Escaped:   false,
        Output:    false,
      },
    })
  }
}
