import { Metadata } from "../../../metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

export const emend_metadata_atomics = (meta: Metadata) => {
    // ATOMICS
    for (const type of meta.atomics) {
        const index: number = meta.constants.findIndex((c) => c.type === type);
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
                (type) => type === "boolean",
                () => "boolean",
            );
        }
    }

    // TEMPLATE
    if (
        meta.templates.length &&
        meta.atomics.find((type) => type === "string") !== undefined
    )
        meta.templates.splice(0, meta.templates.length);
};
