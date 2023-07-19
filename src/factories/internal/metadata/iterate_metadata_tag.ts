import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { Writable } from "../../../typings/Writable";

import { Escaper } from "../../../utils/Escaper";

import { MetadataTagFactory } from "../../MetadataTagFactory";

export const iterate_metadata_tag = (obj: MetadataObject) => {
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

        Writable(prop).tags = MetadataTagFactory.generate(prop.value)(
            prop.jsDocTags,
        )(
            variable !== null
                ? () => `${obj.name}.${variable}`
                : () => `${obj.name}[${key}]`,
        );
    }
};
