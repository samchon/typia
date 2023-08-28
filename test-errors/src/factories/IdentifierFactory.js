"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
const Escaper_1 = require("../utils/Escaper");
const TypeFactory_1 = require("./TypeFactory");
var IdentifierFactory;
(function (IdentifierFactory) {
    IdentifierFactory.identifier = (name) => Escaper_1.Escaper.variable(name)
        ? typescript_1.default.factory.createIdentifier(name)
        : typescript_1.default.factory.createStringLiteral(name);
    IdentifierFactory.access = (target) => (property) => {
        const postfix = IdentifierFactory.identifier(property);
        return typescript_1.default.isStringLiteral(postfix)
            ? typescript_1.default.factory.createElementAccessExpression(target, postfix)
            : typescript_1.default.factory.createPropertyAccessExpression(target, postfix);
    };
    IdentifierFactory.getName = (input) => {
        const value = input.escapedText?.toString();
        if (typeof value === "string")
            return value;
        if (typescript_1.default.isPropertyAccessExpression(input))
            return `${IdentifierFactory.getName(input.expression)}.${input.name.escapedText.toString()}`;
        else if (typescript_1.default.isElementAccessExpression(input))
            return `${IdentifierFactory.getName(input.expression)}[${IdentifierFactory.getName(input.argumentExpression)}]`;
        return "uknown";
    };
    IdentifierFactory.postfix = (str) => Escaper_1.Escaper.variable(str)
        ? `".${str}"`
        : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;
    IdentifierFactory.parameter = (name, type, init) => {
        // instead of ts.version >= "4.8"
        if (typescript_1.default.getDecorators !== undefined)
            return typescript_1.default.factory.createParameterDeclaration(undefined, undefined, name, init?.kind === typescript_1.default.SyntaxKind.QuestionToken
                ? typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionToken)
                : undefined, type ?? TypeFactory_1.TypeFactory.keyword("any"), init && init.kind !== typescript_1.default.SyntaxKind.QuestionToken
                ? init
                : undefined);
        // eslint-disable-next-line
        return typescript_1.default.factory.createParameterDeclaration(undefined, undefined, undefined, name, init?.kind === typescript_1.default.SyntaxKind.QuestionToken
            ? typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionToken)
            : undefined, type, init && init.kind !== typescript_1.default.SyntaxKind.QuestionToken
            ? init
            : undefined);
    };
})(IdentifierFactory || (exports.IdentifierFactory = IdentifierFactory = {}));
