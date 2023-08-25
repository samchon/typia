import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

export const emend_metadata_atomics = (meta: Metadata) => {
    // ATOMICS
    for (const a of meta.atomics) {
        const index: number = meta.constants.findIndex(
            (c) => c.type === a.type,
        );
        if (index !== -1) meta.constants.splice(index, 1);
    }

    // BOOLEAN
    {
        const index: number = meta.constants.findIndex(
            (c) => c.type === "boolean",
        );
        if (index !== -1 && meta.constants[index]!.values.length === 2) {
            meta.constants.splice(index, 1);
            ArrayUtil.take(
                meta.atomics,
                (a) => a.type === "boolean",
                () =>
                    MetadataAtomic.create({
                        type: "boolean" as const,
                        tags: [],
                    }),
            );
        }
    }

    // TEMPLATE
    if (
        meta.templates.length &&
        meta.atomics.find((a) => a.type === "string") !== undefined
    )
        meta.templates.splice(0, meta.templates.length);
};
