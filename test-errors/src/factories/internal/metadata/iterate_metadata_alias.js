"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_alias = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const emplace_metadata_alias_1 = require("./emplace_metadata_alias");
const iterate_metadata_alias = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    if (options.absorb !== false || type.aliasSymbol === undefined)
        return false;
    const node = type.aliasSymbol.declarations?.[0];
    if (node === undefined)
        return false;
    // CONSTRUCT DEFINITION
    const alias = (0, emplace_metadata_alias_1.emplace_metadata_alias)(checker)(options)(collection)(errors)(type, meta.nullable, explore);
    ArrayUtil_1.ArrayUtil.add(meta.aliases, alias, (elem) => elem.name === alias.name);
    return true;
};
exports.iterate_metadata_alias = iterate_metadata_alias;
