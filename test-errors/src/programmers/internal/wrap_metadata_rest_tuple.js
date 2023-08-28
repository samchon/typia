"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap_metadata_rest_tuple = void 0;
const Metadata_1 = require("../../schemas/metadata/Metadata");
const MetadataArray_1 = require("../../schemas/metadata/MetadataArray");
const MetadataArrayType_1 = require("../../schemas/metadata/MetadataArrayType");
const wrap_metadata_rest_tuple = (rest) => {
    const wrapper = Metadata_1.Metadata.initialize();
    wrapper.arrays.push(MetadataArray_1.MetadataArray.create({
        type: MetadataArrayType_1.MetadataArrayType.create({
            name: `...${rest.getName()}`,
            value: rest,
            nullables: [],
            recursive: false,
            index: null,
        }),
        tags: [],
    }));
    return wrapper;
};
exports.wrap_metadata_rest_tuple = wrap_metadata_rest_tuple;
