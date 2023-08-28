"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_dynamic_properties = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const check_everything_1 = require("./check_everything");
const metadata_to_pattern_1 = require("./metadata_to_pattern");
/**
 * @internal
 */
const check_dynamic_properties = (props) => (importer) => (input, regular, dynamic) => {
    const length = IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.keys"), undefined, [input]))("length");
    const left = props.equals === true && dynamic.length === 0
        ? props.undefined === true ||
            regular.every((r) => r.meta.isRequired())
            ? typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createNumericLiteral(regular.filter((r) => r.meta.isRequired()).length), length)
            : typescript_1.default.factory.createCallExpression(importer.use("is_between"), [], [
                length,
                typescript_1.default.factory.createNumericLiteral(regular.filter((r) => r.meta.isRequired())
                    .length),
                typescript_1.default.factory.createNumericLiteral(regular.length),
            ])
        : null;
    if (props.undefined === false &&
        left !== null &&
        regular.every((r) => r.meta.isRequired()))
        return left;
    const criteria = props.entries
        ? typescript_1.default.factory.createCallExpression(props.entries, undefined, [
            typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.keys"), undefined, [input]),
            check_dynamic_property(props)(input, regular, dynamic),
        ])
        : typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.keys"), undefined, [input]))(props.assert ? "every" : "map"), undefined, [check_dynamic_property(props)(input, regular, dynamic)]);
    const right = (props.halt || ((elem) => elem))(props.assert ? criteria : (0, check_everything_1.check_everything)(criteria));
    return left
        ? (props.undefined
            ? typescript_1.default.factory.createLogicalOr
            : typescript_1.default.factory.createLogicalAnd)(left, right)
        : right;
};
exports.check_dynamic_properties = check_dynamic_properties;
const check_dynamic_property = (props) => (input, regular, dynamic) => {
    //----
    // IF CONDITIONS
    //----
    // PREPARE ASSETS
    const key = typescript_1.default.factory.createIdentifier("key");
    const value = typescript_1.default.factory.createIdentifier("value");
    const statements = [];
    const add = (exp, output) => statements.push(typescript_1.default.factory.createIfStatement(exp, typescript_1.default.factory.createReturnStatement(output)));
    // GATHER CONDITIONS
    if (regular.length)
        add(is_regular_property(regular), props.positive);
    statements.push(StatementFactory_1.StatementFactory.constant("value", typescript_1.default.factory.createElementAccessExpression(input, key)));
    if (props.undefined === true)
        add(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("undefined"), value), props.positive);
    for (const entry of dynamic)
        add(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`RegExp(/${(0, metadata_to_pattern_1.metadata_to_pattern)(true)(entry.key)}/).test`), undefined, [key]), entry.expression);
    //----
    // FUNCTION BODY
    //----
    // CLOSURE BLOCK
    const block = typescript_1.default.factory.createBlock([
        ...statements,
        typescript_1.default.factory.createReturnStatement(props.equals === true
            ? props.superfluous(value)
            : props.positive),
    ], true);
    // RETURNS
    return typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("key")], undefined, undefined, block);
};
const is_regular_property = (regular) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createArrayLiteralExpression(regular.map((entry) => typescript_1.default.factory.createStringLiteral(entry.key.getSoleLiteral()))))("some"), undefined, [
    typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("prop")], undefined, undefined, typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("key"), typescript_1.default.factory.createIdentifier("prop"))),
]);
