"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneJoiner = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const Escaper_1 = require("../../utils/Escaper");
const metadata_to_pattern_1 = require("../internal/metadata_to_pattern");
var CloneJoiner;
(function (CloneJoiner) {
    CloneJoiner.object = (input, entries) => {
        if (entries.length === 0)
            return typescript_1.default.factory.createIdentifier("{}");
        const regular = entries.filter((e) => e.key.isSoleLiteral());
        const dynamic = entries.filter((e) => !e.key.isSoleLiteral());
        const literal = typescript_1.default.factory.createObjectLiteralExpression(regular.map((entry) => {
            const str = entry.key.getSoleLiteral();
            return typescript_1.default.factory.createPropertyAssignment(Escaper_1.Escaper.variable(str)
                ? str
                : typescript_1.default.factory.createStringLiteral(str), entry.expression);
        }), true);
        if (dynamic.length === 0)
            return literal;
        const key = typescript_1.default.factory.createIdentifier("key");
        const output = typescript_1.default.factory.createIdentifier("output");
        const statements = [];
        if (regular.length !== 0)
            statements.push(typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createArrayLiteralExpression(regular.map((r) => typescript_1.default.factory.createStringLiteral(r.key.getSoleLiteral()))))("some"), undefined, [
                typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("regular")], undefined, undefined, typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("regular"), typescript_1.default.factory.createIdentifier("key"))),
            ]), typescript_1.default.factory.createContinueStatement()));
        statements.push(...dynamic.map((entry) => typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`RegExp(/${(0, metadata_to_pattern_1.metadata_to_pattern)(true)(entry.key)}/).test`), undefined, [key]), typescript_1.default.factory.createBlock([
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createElementAccessExpression(output, key), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.EqualsToken), entry.expression)),
            typescript_1.default.factory.createContinueStatement(),
        ]))));
        return typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createAsExpression(literal, TypeFactory_1.TypeFactory.keyword("any"))),
            typescript_1.default.factory.createForOfStatement(undefined, StatementFactory_1.StatementFactory.entry("key")("value"), typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.entries"), undefined, [input]), typescript_1.default.factory.createBlock(statements)),
            typescript_1.default.factory.createReturnStatement(output),
        ]);
    };
    CloneJoiner.tuple = (children, rest) => {
        return typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createArrayLiteralExpression(rest === null
            ? children
            : [...children, typescript_1.default.factory.createSpreadElement(rest)], true), TypeFactory_1.TypeFactory.keyword("any"));
    };
    CloneJoiner.array = (input, arrow) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createPropertyAccessExpression(input, "map"), undefined, [arrow]);
})(CloneJoiner || (exports.CloneJoiner = CloneJoiner = {}));
