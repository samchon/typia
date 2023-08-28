"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PruneJoiner = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const ArrayUtil_1 = require("../../utils/ArrayUtil");
const metadata_to_pattern_1 = require("../internal/metadata_to_pattern");
const prune_object_properties_1 = require("../internal/prune_object_properties");
var PruneJoiner;
(function (PruneJoiner) {
    PruneJoiner.object = (input, entries, obj) => {
        // PREPARE ASSETS
        const regular = entries.filter((entry) => entry.key.isSoleLiteral());
        const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
        const statements = ArrayUtil_1.ArrayUtil.flat(regular.map((entry) => typescript_1.default.isBlock(entry.expression)
            ? [...entry.expression.statements]
            : [typescript_1.default.factory.createExpressionStatement(entry.expression)]));
        if (dynamic.length)
            statements.push(typescript_1.default.factory.createExpressionStatement(iterate_dynamic_properties({ regular, dynamic })(input)));
        statements.push((0, prune_object_properties_1.prune_object_properties)(obj));
        return typescript_1.default.factory.createBlock(statements, true);
    };
    PruneJoiner.array = (input, arrow) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("forEach"), undefined, [arrow]);
    PruneJoiner.tuple = (children, rest) => {
        const entire = [...children];
        if (rest !== null)
            entire.push(rest);
        const statements = ArrayUtil_1.ArrayUtil.flat(entire.map((elem) => typescript_1.default.isBlock(elem)
            ? [...elem.statements]
            : [typescript_1.default.factory.createExpressionStatement(elem)]));
        return typescript_1.default.factory.createBlock(statements, true);
    };
})(PruneJoiner || (exports.PruneJoiner = PruneJoiner = {}));
const iterate_dynamic_properties = (props) => (input) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.entries"), undefined, [input]))("forEach"), undefined, [
    typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter(typescript_1.default.factory.createArrayBindingPattern(["key", "value"].map((l) => typescript_1.default.factory.createBindingElement(undefined, undefined, typescript_1.default.factory.createIdentifier(l), undefined)))),
    ], undefined, undefined, typescript_1.default.factory.createBlock([
        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("undefined"), typescript_1.default.factory.createIdentifier("value")), typescript_1.default.factory.createReturnStatement()),
        ...props.regular.map(({ key }) => typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral(key.getSoleLiteral()), typescript_1.default.factory.createIdentifier("key")), typescript_1.default.factory.createReturnStatement())),
        ...props.dynamic.map((dynamic) => typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`RegExp(/${(0, metadata_to_pattern_1.metadata_to_pattern)(true)(dynamic.key)}/).test`), undefined, [typescript_1.default.factory.createIdentifier("key")]), typescript_1.default.isBlock(dynamic.expression)
            ? dynamic.expression
            : typescript_1.default.factory.createBlock([
                typescript_1.default.factory.createExpressionStatement(dynamic.expression),
            ]))),
    ], true)),
]);
