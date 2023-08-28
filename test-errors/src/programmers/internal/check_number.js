"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_number = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const OptionPredicator_1 = require("../helpers/OptionPredicator");
/**
 * @internal
 */
const check_number = (project, numeric) => (atomic) => (input) => {
    const base = typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("number"), typescript_1.default.factory.createTypeOfExpression(input));
    const addition = numeric === true
        ? OptionPredicator_1.OptionPredicator.finite(project.options)
            ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Number.isFinite"), undefined, [input])
            : OptionPredicator_1.OptionPredicator.numeric(project.options)
                ? typescript_1.default.factory.createLogicalNot(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Number.isNaN"), undefined, [input]))
                : null
        : null;
    const conditions = check_numeric_type_tags(project)(atomic)(addition)(input);
    return {
        expected: atomic.getName(),
        expression: addition !== null && conditions.length === 0
            ? typescript_1.default.factory.createLogicalAnd(base, addition)
            : base,
        conditions,
    };
};
exports.check_number = check_number;
/**
 * @internal
 */
const check_numeric_type_tags = (project) => (atomic) => (addition) => (input) => atomic.tags.map((row) => [
    ...(addition === null
        ? []
        : row.some((tag) => tag.kind === "type" &&
            (tag.value === "int32" ||
                tag.value === "uint32" ||
                tag.value === "int64" ||
                tag.value === "uint64" ||
                tag.value === "float")) ||
            row.some((tag) => tag.kind === "multipleOf" &&
                typeof tag.value === "number") ||
            (row.some((tag) => (tag.kind === "minimum" ||
                tag.kind === "exclusiveMinimum") &&
                typeof tag.value === "number") &&
                row.some((tag) => (tag.kind === "maximum" ||
                    tag.kind === "exclusiveMaximum") &&
                    typeof tag.value === "number"))
            ? []
            : [
                {
                    expected: "number",
                    expression: addition,
                },
            ]),
    ...row.map((tag) => ({
        expected: `number & ${tag.name}`,
        expression: ExpressionFactory_1.ExpressionFactory.transpile(project.context)(tag.validate)(input),
    })),
]);
