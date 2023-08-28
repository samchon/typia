"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_string = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
/**
 * @internal
 */
const check_string = (project) => (atomic) => (input) => {
    const conditions = check_string_type_tags(project)(atomic)(input);
    return {
        expected: atomic.getName(),
        expression: typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("string"), typescript_1.default.factory.createTypeOfExpression(input)),
        conditions,
    };
};
exports.check_string = check_string;
/**
 * @internal
 */
const check_string_type_tags = (project) => (atomic) => (input) => atomic.tags.map((row) => row.map((tag) => ({
    expected: `string & ${tag.name}`,
    expression: ExpressionFactory_1.ExpressionFactory.transpile(project.context)(tag.validate)(input),
})));
