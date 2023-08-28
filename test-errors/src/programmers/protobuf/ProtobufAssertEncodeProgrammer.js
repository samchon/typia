"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufAssertEncodeProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const AssertProgrammer_1 = require("../AssertProgrammer");
const ProtobufEncodeProgrammer_1 = require("./ProtobufEncodeProgrammer");
var ProtobufAssertEncodeProgrammer;
(function (ProtobufAssertEncodeProgrammer) {
    ProtobufAssertEncodeProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
    ], typescript_1.default.factory.createTypeReferenceNode("Uint8Array"), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("assert", AssertProgrammer_1.AssertProgrammer.write({
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
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("encode"), undefined, [
            typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("assert"), undefined, [typescript_1.default.factory.createIdentifier("input")]),
        ])),
    ]));
})(ProtobufAssertEncodeProgrammer || (exports.ProtobufAssertEncodeProgrammer = ProtobufAssertEncodeProgrammer = {}));
