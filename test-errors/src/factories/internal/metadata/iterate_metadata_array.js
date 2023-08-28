"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_array = void 0;
const MetadataArray_1 = require("../../../schemas/metadata/MetadataArray");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const emplace_metadata_array_type_1 = require("./emplace_metadata_array_type");
const iterate_metadata_array = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (!checker.isArrayType(type))
        return false;
    const arrayType = (0, emplace_metadata_array_type_1.emplace_metadata_array_type)(checker)(options)(collection)(errors)(type, meta.nullable, explore);
    ArrayUtil_1.ArrayUtil.add(meta.arrays, MetadataArray_1.MetadataArray.create({
        type: arrayType,
        tags: [],
    }), (elem) => elem.type.name === arrayType.name);
    return true;
};
exports.iterate_metadata_array = iterate_metadata_array;
