import { MetadataTagFactory } from "../../factories/MetadataTagFactory";

import { IJsDocTagInfo } from "../../schemas/metadata/IJsDocTagInfo";

/**
 * @internal
 */
export const get_comment_tags =
    (excludeMetaTags: boolean) => (jsDocTags: IJsDocTagInfo[]) =>
        jsDocTags
            .filter(
                (tag) =>
                    tag.name !== "random" &&
                    (!tag.text?.length ||
                        (tag.text?.length === 1 &&
                            tag.text?.[0]?.kind === "text")) &&
                    (!excludeMetaTags ||
                        MetadataTagFactory._PARSER[tag.name] === undefined),
            )
            .map((tag) => ({
                name: tag.name,
                value: tag.text?.[0]?.text,
            }));
