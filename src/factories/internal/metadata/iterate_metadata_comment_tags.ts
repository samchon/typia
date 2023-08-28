import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { MetadataCommentTagFactory } from "../../MetadataCommentTagFactory";
import { MetadataFactory } from "../../MetadataFactory";

export const iterate_metadata_comment_tags =
    (errors: MetadataFactory.IError[]) => (object: MetadataObject) => {
        if (object.tagged_ === true) return;
        object.tagged_ = true;

        for (const property of object.properties) {
            MetadataCommentTagFactory.analyze(errors)(property.value)(
                property.jsDocTags,
                {
                    top: false,
                    object,
                    property: property.key.isSoleLiteral()
                        ? property.key.getSoleLiteral()!
                        : {},
                    nested: null,
                    escaped: false,
                    aliased: false,
                },
            );
        }
    };
