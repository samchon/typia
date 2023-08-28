"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode_union_object = void 0;
const typescript_1 = __importDefault(require("typescript"));
/**
 * @internal
 */
const decode_union_object = (checker) => (decoder) => (success) => (escaper) => (input, targets, explore) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, iterate(escaper)(input, targets.map((obj) => ({
    type: "object",
    is: () => success(checker(input, obj, explore)),
    value: () => decoder(input, obj, explore),
})), `(${targets.map((t) => t.name).join(" | ")})`)), undefined, undefined);
exports.decode_union_object = decode_union_object;
const iterate = (escaper) => (input, unions, expected) => typescript_1.default.factory.createBlock([
    unions
        .map((u, i) => typescript_1.default.factory.createIfStatement(u.is(), typescript_1.default.factory.createReturnStatement(u.value()), i === unions.length - 1
        ? escaper(input, expected)
        : undefined))
        .reverse()
        .reduce((a, b) => typescript_1.default.factory.createIfStatement(b.expression, b.thenStatement, a)),
], true);
