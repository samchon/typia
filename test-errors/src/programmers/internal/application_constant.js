"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_constant = void 0;
const application_default_1 = require("./application_default");
/**
 * @internal
 */
const application_constant = (constant) => (attribute) => ({
    ...attribute,
    type: constant.type,
    enum: constant.values,
    default: (0, application_default_1.application_default)(attribute)((alias) => constant.values.some((v) => v.toString() === alias))(constant.type === "string"
        ? (str) => str
        : constant.type === "number"
            ? (str) => Number(str)
            : constant.type === "boolean"
                ? (str) => Boolean(str)
                : (str) => BigInt(str)),
});
exports.application_constant = application_constant;
