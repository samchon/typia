"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufIsEncodeProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const IsProgrammer_1 = require("../IsProgrammer");
const ProtobufEncodeProgrammer_1 = require("./ProtobufEncodeProgrammer");
var ProtobufIsEncodeProgrammer;
(function (ProtobufIsEncodeProgrammer) {
    ProtobufIsEncodeProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", typescript_1.default.factory.createTypeReferenceNode(name ??
            TypeFactory_1.TypeFactory.getFullName(project.checker)(type))),
    ], typescript_1.default.factory.createUnionTypeNode([
        typescript_1.default.factory.createTypeReferenceNode("Uint8Array"),
        typescript_1.default.factory.createLiteralTypeNode(typescript_1.default.factory.createNull()),
    ]), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("is", IsProgrammer_1.IsProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: true,
            },
        })(modulo)(false)(type, name)),
        StatementFactory_1.StatementFactory.constant("encode", ProtobufEncodeProgrammer_1.ProtobufEncodeProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(type, name)),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("is"), undefined, [typescript_1.default.factory.createIdentifier("input")]), undefined, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("encode"), undefined, [typescript_1.default.factory.createIdentifier("input")]), undefined, typescript_1.default.factory.createNull())),
    ]));
})(ProtobufIsEncodeProgrammer || (exports.ProtobufIsEncodeProgrammer = ProtobufIsEncodeProgrammer = {}));
