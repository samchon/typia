"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_array_length = void 0;
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
/**
 * @internal
 */
const check_array_length = (project) => (array) => (input) => {
    const conditions = check_string_type_tags(project)(array.tags)(input);
    return {
        expected: array.getName(),
        expression: null,
        conditions,
    };
};
exports.check_array_length = check_array_length;
const check_string_type_tags = (project) => (matrix) => (input) => matrix.map((row) => row.map((tag) => ({
    expected: `Array<> & ${tag.name}`,
    expression: ExpressionFactory_1.ExpressionFactory.transpile(project.context)(tag.validate)(input),
})));
