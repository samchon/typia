"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_comment_tags = void 0;
const MetadataCommentTagFactory_1 = require("../../MetadataCommentTagFactory");
const iterate_metadata_comment_tags = (errors) => (object) => {
    if (object.tagged_ === true)
        return;
    object.tagged_ = true;
    for (const property of object.properties) {
        MetadataCommentTagFactory_1.MetadataCommentTagFactory.analyze(errors)(property.value)(property.jsDocTags, {
            top: false,
            object,
            property: property.key.isSoleLiteral()
                ? property.key.getSoleLiteral()
                : {},
            nested: null,
            escaped: false,
            aliased: false,
        });
    }
};
exports.iterate_metadata_comment_tags = iterate_metadata_comment_tags;
