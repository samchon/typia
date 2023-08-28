"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emplace_metadata_array_type = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const explore_metadata_1 = require("./explore_metadata");
const emplace_metadata_array_type = (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
    // CHECK EXISTENCE
    const [array, newbie, setValue] = collection.emplaceArray(checker, type);
    ArrayUtil_1.ArrayUtil.add(array.nullables, nullable);
    if (newbie === false)
        return array;
    // CONSTRUCT VALUE TYPE
    const value = (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(type.getNumberIndexType(), {
        ...explore,
        escaped: false,
        aliased: false,
    });
    setValue(value);
    return array;
};
exports.emplace_metadata_array_type = emplace_metadata_array_type;
