"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomJoiner = void 0;
const typescript_1 = __importDefault(require("typescript"));
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const Escaper_1 = require("../../utils/Escaper");
var RandomJoiner;
(function (RandomJoiner) {
    RandomJoiner.array = (coalesce) => (decoder) => (explore) => (length) => (item) => {
        const generator = typescript_1.default.factory.createCallExpression(coalesce("array"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, decoder(item)),
            ...(length ? [length] : []),
        ]);
        if (explore.recursive === false)
            return generator;
        return typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createGreaterThanEquals(typescript_1.default.factory.createNumericLiteral(5), typescript_1.default.factory.createIdentifier("_depth")), undefined, generator, undefined, typescript_1.default.factory.createArrayLiteralExpression([]));
    };
    RandomJoiner.tuple = (decoder) => (elements) => typescript_1.default.factory.createArrayLiteralExpression(elements.map((elem) => decoder(elem.rest ?? elem)), true);
    RandomJoiner.object = (coalesce) => (decoder) => (obj) => {
        if (obj.properties.length === 0)
            return typescript_1.default.factory.createIdentifier("{}");
        // LIST UP PROPERTIES
        const regular = obj.properties.filter((p) => p.key.isSoleLiteral());
        const dynamic = obj.properties.filter((p) => !p.key.isSoleLiteral());
        // REGULAR OBJECT
        const literal = typescript_1.default.factory.createObjectLiteralExpression(regular.map((p) => {
            const str = p.key.getSoleLiteral();
            return typescript_1.default.factory.createPropertyAssignment(Escaper_1.Escaper.variable(str)
                ? str
                : typescript_1.default.factory.createStringLiteral(str), decoder(p.value));
        }), true);
        if (dynamic.length === 0)
            return literal;
        const properties = dynamic.map((p) => typescript_1.default.factory.createExpressionStatement(dynamicProperty(coalesce)(decoder)(p)));
        return typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createAsExpression(literal, TypeFactory_1.TypeFactory.keyword("any"))),
            ...(obj.recursive
                ? [
                    typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createGreaterThanEquals(typescript_1.default.factory.createNumericLiteral(5), typescript_1.default.factory.createIdentifier("_depth")), typescript_1.default.factory.createBlock(properties, true)),
                ]
                : properties),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("output")),
        ], true);
    };
    const dynamicProperty = (coalesce) => (decoder) => (p) => typescript_1.default.factory.createCallExpression(coalesce("array"), undefined, [
        typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createElementAccessExpression(typescript_1.default.factory.createIdentifier("output"), decoder(p.key)), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.EqualsToken), decoder(p.value))),
        typescript_1.default.factory.createCallExpression(coalesce("integer"), undefined, [
            typescript_1.default.factory.createNumericLiteral(0),
            typescript_1.default.factory.createNumericLiteral(3),
        ]),
    ]);
})(RandomJoiner || (exports.RandomJoiner = RandomJoiner = {}));
