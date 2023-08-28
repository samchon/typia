"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIsParseProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const JsonMetadataFactory_1 = require("../../factories/JsonMetadataFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const IsProgrammer_1 = require("../IsProgrammer");
var JsonIsParseProgrammer;
(function (JsonIsParseProgrammer) {
    JsonIsParseProgrammer.write = (project) => (modulo) => (type, name) => {
        JsonMetadataFactory_1.JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker)(type);
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
        ], typescript_1.default.factory.createTypeReferenceNode(`typia.Primitive<${name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`), undefined, typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("is", IsProgrammer_1.IsProgrammer.write({
                ...project,
                options: {
                    ...project.options,
                    functional: false,
                    numeric: false,
                },
            })(modulo)(false)(type, name)),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createIdentifier("input"), typescript_1.default.SyntaxKind.EqualsToken, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.parse"), undefined, [typescript_1.default.factory.createIdentifier("input")]))),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("is"), undefined, [typescript_1.default.factory.createIdentifier("input")]), undefined, typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createIdentifier("input"), TypeFactory_1.TypeFactory.keyword("any")), undefined, typescript_1.default.factory.createNull())),
        ]));
    };
})(JsonIsParseProgrammer || (exports.JsonIsParseProgrammer = JsonIsParseProgrammer = {}));
