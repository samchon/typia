"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonValidateParseProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const JsonMetadataFactory_1 = require("../../factories/JsonMetadataFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const ValidateProgrammer_1 = require("../ValidateProgrammer");
var JsonValidateParseProgrammer;
(function (JsonValidateParseProgrammer) {
    JsonValidateParseProgrammer.write = (project) => (modulo) => (type, name) => {
        JsonMetadataFactory_1.JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(project.checker)(type);
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("string")),
        ], typescript_1.default.factory.createTypeReferenceNode(`typia.IValidation<typia.Primitive<${name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>>`), undefined, typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("validate", ValidateProgrammer_1.ValidateProgrammer.write({
                ...project,
                options: {
                    ...project.options,
                    functional: false,
                    numeric: false,
                },
            })(modulo)(false)(type, name)),
            StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.parse"), undefined, [typescript_1.default.factory.createIdentifier("input")])),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("validate"), undefined, [typescript_1.default.factory.createIdentifier("output")]), typescript_1.default.factory.createTypeReferenceNode("any"))),
        ]));
    };
})(JsonValidateParseProgrammer || (exports.JsonValidateParseProgrammer = JsonValidateParseProgrammer = {}));
