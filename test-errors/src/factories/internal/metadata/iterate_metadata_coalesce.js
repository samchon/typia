"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_coalesce = void 0;
const typescript_1 = __importDefault(require("typescript"));
const Writable_1 = require("../../../typings/Writable");
const TypeFactory_1 = require("../../TypeFactory");
const iterate_metadata_coalesce = (meta, type) => {
    const filter = (flag) => (type.getFlags() & flag) !== 0;
    if (filter(typescript_1.default.TypeFlags.Unknown) || filter(typescript_1.default.TypeFlags.Any)) {
        (0, Writable_1.Writable)(meta).any = true;
        return true;
    }
    else if (filter(typescript_1.default.TypeFlags.Null)) {
        (0, Writable_1.Writable)(meta).nullable = true;
        return true;
    }
    else if (filter(typescript_1.default.TypeFlags.Undefined) ||
        filter(typescript_1.default.TypeFlags.Never) ||
        filter(typescript_1.default.TypeFlags.Void) ||
        filter(typescript_1.default.TypeFlags.VoidLike)) {
        (0, Writable_1.Writable)(meta).required = false;
        return true;
    }
    else if (TypeFactory_1.TypeFactory.isFunction(type) === true) {
        (0, Writable_1.Writable)(meta).functional = true;
        return true;
    }
    return false;
};
exports.iterate_metadata_coalesce = iterate_metadata_coalesce;
