"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_union = void 0;
const iterate_metadata_1 = require("./iterate_metadata");
const iterate_metadata_union = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (!type.isUnion())
        return false;
    type.types.forEach((t) => (0, iterate_metadata_1.iterate_metadata)(checker)(options)(collection)(errors)(meta, t, {
        ...explore,
        aliased: false,
    }));
    return true;
};
exports.iterate_metadata_union = iterate_metadata_union;
