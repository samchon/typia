"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
var ValueFactory;
(function (ValueFactory) {
    ValueFactory.NULL = () => typescript_1.default.factory.createNull();
    ValueFactory.UNDEFINED = () => typescript_1.default.factory.createIdentifier("undefined");
    ValueFactory.BOOLEAN = (value) => value ? typescript_1.default.factory.createTrue() : typescript_1.default.factory.createFalse();
    ValueFactory.INPUT = (str = "input") => typescript_1.default.factory.createIdentifier(str);
    ValueFactory.TYPEOF = (input) => typescript_1.default.factory.createTypeOfExpression(input);
})(ValueFactory || (exports.ValueFactory = ValueFactory = {}));
