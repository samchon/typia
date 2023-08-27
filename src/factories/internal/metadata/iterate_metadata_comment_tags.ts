import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { Escaper } from "../../../utils/Escaper";

import { MetadataCommentTagFactory } from "../../MetadataCommentTagFactory";

export const iterate_metadata_comment_tags = (obj: MetadataObject) => {
    if (obj.tagged_ === true) return;
    obj.tagged_ = true;

    for (const prop of obj.properties) {
        const key: string = prop.key.getName();
        const variable: string | null =
            key.length >= 3 &&
            key[0] === '"' &&
            key[key.length - 1] === '"' &&
            Escaper.variable(key.slice(1, -1))
                ? key.slice(1, -1)
                : null;

        MetadataCommentTagFactory.analyze(
            variable !== null
                ? () => `${obj.name}.${variable}`
                : () => `${obj.name}[${key}]`,
        )(prop.value)(prop.jsDocTags);
    }
};
