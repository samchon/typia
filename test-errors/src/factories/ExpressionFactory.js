"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
const RandomGenerator_1 = require("../utils/RandomGenerator");
var ExpressionFactory;
(function (ExpressionFactory) {
    ExpressionFactory.bigint = (value) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("BigInt"), undefined, [typescript_1.default.factory.createIdentifier(value.toString())]);
    ExpressionFactory.isRequired = (input) => typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createIdentifier("undefined"), input);
    ExpressionFactory.isArray = (input) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Array.isArray"), undefined, [input]);
    ExpressionFactory.isObject = (options) => (input) => {
        const conditions = [
            typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("object"), typescript_1.default.factory.createTypeOfExpression(input)),
        ];
        if (options.checkNull === true)
            conditions.push(typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createNull(), input));
        if (options.checkArray === true)
            conditions.push(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createFalse(), typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Array.isArray"), undefined, [input])));
        return conditions.length === 1
            ? conditions[0]
            : conditions.reduce((x, y) => typescript_1.default.factory.createLogicalAnd(x, y));
    };
    ExpressionFactory.isInstanceOf = (type) => (input) => {
        return typescript_1.default.factory.createBinaryExpression(input, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.InstanceOfKeyword), typescript_1.default.factory.createIdentifier(type));
    };
    ExpressionFactory.coalesce = (x) => (y) => typescript_1.default.factory.createBinaryExpression(x, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionQuestionToken), y);
    ExpressionFactory.currying = (target) => (parameters) => {
        if (parameters.length === 0)
            return typescript_1.default.factory.createCallExpression(target, undefined, undefined);
        let prev = typescript_1.default.factory.createCallExpression(target, undefined, [parameters[0]]);
        for (const param of parameters.slice(1))
            prev = typescript_1.default.factory.createCallExpression(prev, undefined, [
                param,
            ]);
        return prev;
    };
    ExpressionFactory.selfCall = (body) => typescript_1.default.isCallExpression(body)
        ? body
        : typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createParenthesizedExpression(typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, body)), undefined, undefined);
    ExpressionFactory.getEscapedText = (printer) => (input) => printer.printNode(typescript_1.default.EmitHint.Expression, input, input.getSourceFile());
    ExpressionFactory.transpile = (context) => (script) => (input) => {
        const file = typescript_1.default.createSourceFile(`${RandomGenerator_1.RandomGenerator.uuid()}.ts`, script, typescript_1.default.ScriptTarget.ESNext, true, typescript_1.default.ScriptKind.TS);
        const statement = file.statements[0];
        if (statement === undefined)
            throw new ReferenceError("Error on ExpressionFactory.transpile(): no statement exists.");
        else if (!typescript_1.default.isExpressionStatement(statement))
            throw new TypeError("Error on ExpressionFactory.transpile(): statement is not an expression statement.");
        const visitor = (node) => {
            if (typescript_1.default.isIdentifier(node) && node.text === "$input")
                return input;
            return typescript_1.default.visitEachChild(typescript_1.default.factory.cloneNode(node), visitor, context);
        };
        return visitor(statement.expression);
    };
})(ExpressionFactory || (exports.ExpressionFactory = ExpressionFactory = {}));
