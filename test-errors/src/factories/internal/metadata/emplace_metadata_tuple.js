"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emplace_metadata_tuple = void 0;
const typescript_1 = __importDefault(require("typescript"));
const Metadata_1 = require("../../../schemas/metadata/Metadata");
const Writable_1 = require("../../../typings/Writable");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const explore_metadata_1 = require("./explore_metadata");
const emplace_metadata_tuple = (checker) => (options) => (collection) => (errors) => (type, nullable, explore) => {
    // CHECK EXISTENCE
    const [tuple, newbie, closure] = collection.emplaceTuple(checker, type);
    ArrayUtil_1.ArrayUtil.add(tuple.nullables, nullable);
    if (newbie === false)
        return tuple;
    // CONSTRUCT ELEMENT TYPES
    const flagList = type.elementFlags ??
        type.target?.elementFlags ??
        [];
    const elements = checker
        .getTypeArguments(type)
        .map((elem, i) => {
        const child = (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(elem, {
            ...explore,
            nested: tuple,
            aliased: false,
            escaped: false,
        });
        // CHECK OPTIONAL
        const flag = flagList[i];
        if (flag === typescript_1.default.ElementFlags.Optional)
            (0, Writable_1.Writable)(child).optional = true;
        // REST TYPE
        if (flag !== typescript_1.default.ElementFlags.Rest)
            return child;
        const wrapper = Metadata_1.Metadata.initialize();
        (0, Writable_1.Writable)(wrapper).rest = child;
        return wrapper;
    });
    closure(elements);
    return tuple;
};
exports.emplace_metadata_tuple = emplace_metadata_tuple;
