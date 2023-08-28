"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_tuple = void 0;
const MetadataTuple_1 = require("../../../schemas/metadata/MetadataTuple");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const emplace_metadata_tuple_1 = require("./emplace_metadata_tuple");
const iterate_metadata_tuple = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (!checker.isTupleType(type))
        return false;
    const tupleType = (0, emplace_metadata_tuple_1.emplace_metadata_tuple)(checker)(options)(collection)(errors)(type, meta.nullable, explore);
    ArrayUtil_1.ArrayUtil.add(meta.tuples, MetadataTuple_1.MetadataTuple.create({
        type: tupleType,
        tags: [],
    }), (elem) => elem.type.name === tupleType.name);
    return true;
};
exports.iterate_metadata_tuple = iterate_metadata_tuple;
