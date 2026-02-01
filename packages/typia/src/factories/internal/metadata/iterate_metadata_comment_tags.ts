import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";

import { MetadataCommentTagFactory } from "../../MetadataCommentTagFactory";
import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_comment_tags = (props: {
  errors: MetadataFactory.IError[];
  object: MetadataObjectType;
}) => {
  if (props.object.tagged_ === true) return;
  props.object.tagged_ = true;

  for (const property of props.object.properties) {
    MetadataCommentTagFactory.analyze({
      errors: props.errors,
      metadata: property.value,
      tags: property.jsDocTags,
      explore: {
        top: false,
        object: props.object,
        property: property.key.isSoleLiteral()
          ? property.key.getSoleLiteral()!
          : {},
        parameter: null,
        nested: null,
        aliased: false,
        escaped: false,
        output: false,
      },
    });
  }
};
