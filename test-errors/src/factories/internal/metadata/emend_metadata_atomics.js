"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emend_metadata_atomics = void 0;
const MetadataAtomic_1 = require("../../../schemas/metadata/MetadataAtomic");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const emend_metadata_atomics = (meta) => {
    // ATOMICS
    for (const a of meta.atomics) {
        const index = meta.constants.findIndex((c) => c.type === a.type);
        if (index !== -1)
            meta.constants.splice(index, 1);
    }
    // BOOLEAN
    {
        const index = meta.constants.findIndex((c) => c.type === "boolean");
        if (index !== -1 && meta.constants[index].values.length === 2) {
            meta.constants.splice(index, 1);
            ArrayUtil_1.ArrayUtil.take(meta.atomics, (a) => a.type === "boolean", () => MetadataAtomic_1.MetadataAtomic.create({
                type: "boolean",
                tags: [],
            }));
        }
    }
    // TEMPLATE
    if (meta.templates.length &&
        meta.atomics.find((a) => a.type === "string") !== undefined)
        meta.templates.splice(0, meta.templates.length);
};
exports.emend_metadata_atomics = emend_metadata_atomics;
