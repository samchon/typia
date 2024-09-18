import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { MetadataCommentTagFactory } from "../../MetadataCommentTagFactory";
import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_comment_tags = (props: {
  errors: MetadataFactory.IError[];
  object: MetadataObject;
}) => {
  if (props.object.tagged_ === true) return;
  props.object.tagged_ = true;

  for (const property of props.object.properties) {
    MetadataCommentTagFactory.analyze(props.errors)(property.value)(
      property.jsDocTags,
      {
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
    );
  }
};
