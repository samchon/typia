"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_object = void 0;
const typescript_1 = __importDefault(require("typescript"));
const check_dynamic_properties_1 = require("./check_dynamic_properties");
const check_everything_1 = require("./check_everything");
/**
 * @internal
 */
const check_object = (props) => (importer) => (input, entries) => {
    // PREPARE ASSETS
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const flags = regular.map((entry) => entry.expression);
    // REGULAR WITHOUT DYNAMIC PROPERTIES
    if (props.equals === false && dynamic.length === 0)
        return regular.length === 0 ? props.positive : reduce(props)(flags);
    // CHECK DYNAMIC PROPERTIES
    flags.push((0, check_dynamic_properties_1.check_dynamic_properties)(props)(importer)(input, regular, dynamic));
    return reduce(props)(flags);
};
exports.check_object = check_object;
/**
 * @internal
 */
const reduce = (props) => (expressions) => props.assert
    ? expressions.reduce(props.reduce)
    : (0, check_everything_1.check_everything)(typescript_1.default.factory.createArrayLiteralExpression(expressions));
