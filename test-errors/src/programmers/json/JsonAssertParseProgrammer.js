"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssertParseProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const JsonMetadataFactory_1 = require("../../factories/JsonMetadataFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const AssertProgrammer_1 = require("../AssertProgrammer");
var JsonAssertParseProgrammer;
(function (JsonAssertParseProgrammer) {
    JsonAssertParseProgrammer.write = (project) => (modulo) => (type, name) => {
        JsonMetadataFactory_1.JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker)(type);
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("string")),
        ], typescript_1.default.factory.createTypeReferenceNode(`typia.Primitive<${name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`), undefined, typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("assert", AssertProgrammer_1.AssertProgrammer.write({
                ...project,
                options: {
                    ...project.options,
                    functional: false,
                    numeric: false,
                },
            })(modulo)(false)(type, name)),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createIdentifier("input"), typescript_1.default.SyntaxKind.EqualsToken, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.parse"), undefined, [typescript_1.default.factory.createIdentifier("input")]))),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("assert"), undefined, [typescript_1.default.factory.createIdentifier("input")]), typescript_1.default.factory.createTypeReferenceNode("any"))),
        ]));
    };
})(JsonAssertParseProgrammer || (exports.JsonAssertParseProgrammer = JsonAssertParseProgrammer = {}));
