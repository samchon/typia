"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonAssertStringifyProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const AssertProgrammer_1 = require("../AssertProgrammer");
const JsonStringifyProgrammer_1 = require("./JsonStringifyProgrammer");
var JsonAssertStringifyProgrammer;
(function (JsonAssertStringifyProgrammer) {
    JsonAssertStringifyProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
    ], TypeFactory_1.TypeFactory.keyword("string"), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("assert", AssertProgrammer_1.AssertProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: true,
            },
        })(modulo)(false)(type, name)),
        StatementFactory_1.StatementFactory.constant("stringify", JsonStringifyProgrammer_1.JsonStringifyProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(type, name)),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("stringify"), undefined, [
            typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("assert"), undefined, [typescript_1.default.factory.createIdentifier("input")]),
        ])),
    ]));
})(JsonAssertStringifyProgrammer || (exports.JsonAssertStringifyProgrammer = JsonAssertStringifyProgrammer = {}));
