"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_everything = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
/**
 * @internal
 */
const check_everything = (array) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(array)("every"), undefined, [
    typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("flag", TypeFactory_1.TypeFactory.keyword("boolean")),
    ], undefined, undefined, typescript_1.default.factory.createIdentifier("flag")),
]);
exports.check_everything = check_everything;
