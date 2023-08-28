"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_map = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const TypeFactory_1 = require("../../TypeFactory");
const explore_metadata_1 = require("./explore_metadata");
const iterate_metadata_map = (checker) => (options) => (collection) => (errors) => (meta, type, explore) => {
    type = checker.getApparentType(type);
    const name = TypeFactory_1.TypeFactory.getFullName(checker)(type, type.getSymbol());
    const generic = type.aliasSymbol
        ? type.aliasTypeArguments
        : checker.getTypeArguments(type);
    if (name.substring(0, 4) !== "Map<" || generic?.length !== 2)
        return false;
    const key = generic[0];
    const value = generic[1];
    ArrayUtil_1.ArrayUtil.set(meta.maps, {
        key: (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(key, {
            ...explore,
            escaped: false,
            aliased: false,
        }),
        value: (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(value, {
            ...explore,
            escaped: false,
            aliased: false,
        }),
    }, (elem) => `Map<${elem.key.getName()}, ${elem.value.getName()}>`);
    return true;
};
exports.iterate_metadata_map = iterate_metadata_map;
