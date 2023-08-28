"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscIsCloneProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const IsProgrammer_1 = require("../IsProgrammer");
const MiscCloneProgrammer_1 = require("./MiscCloneProgrammer");
var MiscIsCloneProgrammer;
(function (MiscIsCloneProgrammer) {
    MiscIsCloneProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
    ], typescript_1.default.factory.createUnionTypeNode([
        typescript_1.default.factory.createTypeReferenceNode(`typia.Resolved<${name ??
            TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`),
        typescript_1.default.factory.createLiteralTypeNode(typescript_1.default.factory.createNull()),
    ]), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("is", IsProgrammer_1.IsProgrammer.write(project)(modulo)(false)(type, name)),
        StatementFactory_1.StatementFactory.constant("clone", MiscCloneProgrammer_1.MiscCloneProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(type, name)),
        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createPrefixUnaryExpression(typescript_1.default.SyntaxKind.ExclamationToken, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("is"), undefined, [typescript_1.default.factory.createIdentifier("input")])), typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createNull())),
        StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("clone"), undefined, [typescript_1.default.factory.createIdentifier("input")])),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("output")),
    ]));
})(MiscIsCloneProgrammer || (exports.MiscIsCloneProgrammer = MiscIsCloneProgrammer = {}));
