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
		_ = property
		// JSDoc extraction through the TypeScript-Go shim is not yet complete.
		// The traversal point is kept in the original file location so the
		// MetadataCommentTagFactory port can be wired without changing callers.
	}
}
