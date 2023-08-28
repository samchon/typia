"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_union_array_like = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const MetadataArray_1 = require("../../schemas/metadata/MetadataArray");
const MetadataArrayType_1 = require("../../schemas/metadata/MetadataArrayType");
const MetadataTuple_1 = require("../../schemas/metadata/MetadataTuple");
/**
 * @internal
 */
const check_union_array_like = (accessor) => (props) => (parameters) => (input, origins, explore) => {
    // ONLY ONE TYPE
    const targets = origins.map(accessor.transform);
    if (targets.length === 1)
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, parameters, undefined, undefined, props.decoder(accessor.array(input), targets[0], explore));
    const array = typescript_1.default.factory.createIdentifier("array");
    const top = typescript_1.default.factory.createIdentifier("top");
    const statements = [];
    const tupleList = targets.filter((t) => t instanceof MetadataTuple_1.MetadataTuple);
    const arrayList = targets.filter((t) => t instanceof MetadataArray_1.MetadataArray);
    const predicate = (meta) => typescript_1.default.factory.createArrayLiteralExpression([
        typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("top", meta instanceof MetadataArrayType_1.MetadataArrayType
                ? TypeFactory_1.TypeFactory.keyword("any")
                : typescript_1.default.factory.createTypeReferenceNode("any[]")),
        ], TypeFactory_1.TypeFactory.keyword("any"), undefined, props.checker(typescript_1.default.factory.createIdentifier("top"), accessor.element(meta), {
            ...explore,
            tracable: false,
            postfix: meta instanceof MetadataArrayType_1.MetadataArrayType
                ? `"[0]"`
                : "",
        }, array)),
        typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("entire", typescript_1.default.factory.createTypeReferenceNode("any[]")),
        ], TypeFactory_1.TypeFactory.keyword("any"), undefined, props.decoder(typescript_1.default.factory.createIdentifier("entire"), meta, {
            ...explore,
            tracable: true,
        })),
    ], true);
    const iterate = (init) => (from) => (stmt) => typescript_1.default.factory.createForOfStatement(undefined, typescript_1.default.factory.createVariableDeclarationList([typescript_1.default.factory.createVariableDeclaration(init)], typescript_1.default.NodeFlags.Const), from, stmt);
    if (tupleList.length)
        statements.push(StatementFactory_1.StatementFactory.constant("array", accessor.array(input)), StatementFactory_1.StatementFactory.constant("tuplePredicators", typescript_1.default.factory.createArrayLiteralExpression(tupleList.map((x) => predicate(x)), true)), iterate("pred")(typescript_1.default.factory.createIdentifier("tuplePredicators"))(typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("pred[0]"), undefined, [array]), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`pred[1]`), undefined, [array])))));
    if (arrayList.length) {
        if (tupleList.length === 0)
            statements.push(StatementFactory_1.StatementFactory.constant("array", accessor.array(input)));
        statements.push(StatementFactory_1.StatementFactory.constant("top", accessor.front(input)), typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createNumericLiteral(0), accessor.size(input)), typescript_1.default.isReturnStatement(props.empty)
            ? props.empty
            : typescript_1.default.factory.createReturnStatement(props.empty)), StatementFactory_1.StatementFactory.constant("arrayPredicators", typescript_1.default.factory.createArrayLiteralExpression(arrayList.map((x) => predicate(x)), true)), StatementFactory_1.StatementFactory.constant("passed", typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createIdentifier("arrayPredicators"))("filter"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("pred")], undefined, undefined, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("pred[0]"), undefined, [top])),
        ])), typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createNumericLiteral(1), typescript_1.default.factory.createIdentifier("passed.length")), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`passed[0][1]`), undefined, [array])), typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createLessThan(typescript_1.default.factory.createNumericLiteral(1), typescript_1.default.factory.createIdentifier("passed.length")), iterate("pred")(typescript_1.default.factory.createIdentifier("passed"))(typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(array)("every"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [
                IdentifierFactory_1.IdentifierFactory.parameter("value", TypeFactory_1.TypeFactory.keyword("any")),
            ], undefined, undefined, typescript_1.default.factory.createStrictEquality(props.success, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("pred[0]"), undefined, [
                typescript_1.default.factory.createIdentifier("value"),
            ]))),
        ]), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`pred[1]`), undefined, [typescript_1.default.factory.createIdentifier("array")])))))));
    }
    statements.push(props.failure(input, `(${targets
        .map((t) => accessor.name(t, accessor.element(t)))
        .join(" | ")})`, explore));
    return typescript_1.default.factory.createArrowFunction(undefined, undefined, parameters, undefined, undefined, typescript_1.default.factory.createBlock(statements, true));
};
exports.check_union_array_like = check_union_array_like;
