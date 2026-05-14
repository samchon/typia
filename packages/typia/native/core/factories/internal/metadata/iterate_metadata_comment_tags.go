package metadata

import schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

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
