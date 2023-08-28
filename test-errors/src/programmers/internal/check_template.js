"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_template = void 0;
const typescript_1 = __importDefault(require("typescript"));
const template_to_pattern_1 = require("./template_to_pattern");
/**
 * @internal
 */
const check_template = (templates) => (input) => {
    // TYPEOF STRING & TAGS
    const conditions = [
        typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("string"), typescript_1.default.factory.createTypeOfExpression(input)),
    ];
    // TEMPLATES
    const internal = templates.map((tpl) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`RegExp(/${(0, template_to_pattern_1.template_to_pattern)(true)(tpl)}/).test`), undefined, [input]));
    conditions.push(internal.length === 1
        ? internal[0]
        : internal.reduce((x, y) => typescript_1.default.factory.createLogicalOr(x, y)));
    // COMBINATION
    return {
        expression: conditions.reduce((x, y) => typescript_1.default.factory.createLogicalAnd(x, y)),
        conditions: [],
        expected: templates
            .map((tpl) => "`" +
            tpl
                .map((child) => child.isConstant() && child.size() === 1
                ? child.constants[0].values[0]
                : `$\{${child.getName()}\}`)
                .join("")
                .split("`")
                .join("\\`") +
            "`")
            .join(" | "),
    };
};
exports.check_template = check_template;
