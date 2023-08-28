"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emplace_metadata_alias = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const explore_metadata_1 = require("./explore_metadata");
const emplace_metadata_alias = (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
    // CHECK EXISTENCE
    const [alias, newbie, closure] = collection.emplaceAlias(checker, type, type.aliasSymbol);
    ArrayUtil_1.ArrayUtil.add(alias.nullables, nullable);
    if (newbie === false)
        return alias;
    // CONSTRUCT VALUE TYPE
    const value = (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(type, {
        ...explore,
        escaped: false,
        aliased: true,
    });
    closure(value);
    return alias;
};
exports.emplace_metadata_alias = emplace_metadata_alias;
