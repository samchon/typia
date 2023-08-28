"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify_dynamic_properties = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const TemplateFactory_1 = require("../../factories/TemplateFactory");
const metadata_to_pattern_1 = require("./metadata_to_pattern");
/**
 * @internal
 */
const stringify_dynamic_properties = (dynamic, regular) => {
    // BASIC STATMEMENT, CHECK UNDEFINED
    const statements = [
        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("undefined"), typescript_1.default.factory.createIdentifier("value")), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createStringLiteral(""))),
    ];
    // PREPARE RETURN FUNCTION
    const output = () => {
        const mapped = typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.entries"), undefined, [typescript_1.default.factory.createIdentifier("input")]))("map"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [
                IdentifierFactory_1.IdentifierFactory.parameter(typescript_1.default.factory.createArrayBindingPattern([
                    typescript_1.default.factory.createBindingElement(undefined, undefined, "key"),
                    typescript_1.default.factory.createBindingElement(undefined, undefined, "value"),
                ]), typescript_1.default.factory.createTypeReferenceNode("[string, any]")),
            ], undefined, undefined, typescript_1.default.factory.createBlock(statements)),
        ]);
        const filtered = typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(mapped)("filter"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("str")], undefined, undefined, typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createStringLiteral(""), typescript_1.default.factory.createIdentifier("str"))),
        ]);
        return typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(filtered)("join"), undefined, [typescript_1.default.factory.createStringLiteral(",")]);
    };
    // WHEN REGULAR PROPERTY EXISTS
    if (regular.length)
        statements.push(typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createArrayLiteralExpression(regular.map((key) => typescript_1.default.factory.createStringLiteral(key))))("some"), undefined, [
            typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("regular")], undefined, undefined, typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("regular"), typescript_1.default.factory.createIdentifier("key"))),
        ]), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createStringLiteral(""))));
    // ONLY STRING TYPED KEY EXISTS
    const simple = dynamic.length === 1 &&
        dynamic[0].key.size() === 1 &&
        dynamic[0].key.atomics[0]?.type === "string";
    if (simple === true) {
        statements.push(stringify(dynamic[0]));
        return output();
    }
    // COMPOSITE TEMPLATE LITERAL TYPES
    for (const entry of dynamic) {
        const condition = typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`RegExp(/${(0, metadata_to_pattern_1.metadata_to_pattern)(true)(entry.key)}/).test`), undefined, [typescript_1.default.factory.createIdentifier("key")]), stringify(entry));
        statements.push(condition);
    }
    statements.push(typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createStringLiteral("")));
    return output();
};
exports.stringify_dynamic_properties = stringify_dynamic_properties;
/**
 * @internal
 */
const stringify = (entry) => typescript_1.default.factory.createReturnStatement(TemplateFactory_1.TemplateFactory.generate([
    typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.stringify"), [], [typescript_1.default.factory.createIdentifier("key")]),
    typescript_1.default.factory.createStringLiteral(":"),
    entry.expression,
]));
