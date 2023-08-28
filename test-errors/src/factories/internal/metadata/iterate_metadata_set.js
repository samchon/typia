"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_set = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const TypeFactory_1 = require("../../TypeFactory");
const explore_metadata_1 = require("./explore_metadata");
const iterate_metadata_set = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    type = checker.getApparentType(type);
    const name = TypeFactory_1.TypeFactory.getFullName(checker)(type, type.getSymbol());
    const generic = type.aliasSymbol
        ? type.aliasTypeArguments
        : checker.getTypeArguments(type);
    if (name.substring(0, 4) !== "Set<" || generic?.length !== 1)
        return false;
    const key = generic[0];
    ArrayUtil_1.ArrayUtil.set(meta.sets, (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(key, {
        ...explore,
        escaped: false,
        aliased: false,
    }), (elem) => elem.getName());
    return true;
};
exports.iterate_metadata_set = iterate_metadata_set;
