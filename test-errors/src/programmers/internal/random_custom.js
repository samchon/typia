"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.random_custom = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const LiteralFactory_1 = require("../../factories/LiteralFactory");
/**
 * @internal
 */
const random_custom = (accessor) => (type) => (tags) => (expression) => ExpressionFactory_1.ExpressionFactory.coalesce(typescript_1.default.factory.createCallChain(typescript_1.default.factory.createPropertyAccessChain(accessor("customs"), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionDotToken), typescript_1.default.factory.createIdentifier(type)), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionDotToken), undefined, [LiteralFactory_1.LiteralFactory.generate(tags)]))(expression);
exports.random_custom = random_custom;
