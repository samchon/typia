"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralFactory = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("./ExpressionFactory");
const IdentifierFactory_1 = require("./IdentifierFactory");
var LiteralFactory;
(function (LiteralFactory) {
    LiteralFactory.generate = (input) => {
        if (input === null)
            return typescript_1.default.factory.createNull();
        else if (typescript_1.default.isIdentifier(input))
            return input;
        else if (input instanceof Array)
            return generate_array(input);
        else if (typeof input === "object")
            return generate_object(input);
        else if (typeof input === "string")
            return generate_string(input);
        else if (typeof input === "boolean")
            return generate_value(input);
        else if (typeof input === "number")
            return generate_value(input);
        else if (typeof input === "bigint")
            return generate_bigint(input);
        // unreachable code
        else
            throw new TypeError("Error on LiteralFactory.generate(): unknown type.");
    };
    const generate_object = (obj) => typescript_1.default.factory.createObjectLiteralExpression(Object.entries(obj)
        .filter((tuple) => tuple[1] !== undefined)
        .map(([key, value]) => typescript_1.default.factory.createPropertyAssignment(IdentifierFactory_1.IdentifierFactory.identifier(key), LiteralFactory.generate(value))), true);
    const generate_array = (array) => typescript_1.default.factory.createArrayLiteralExpression(array.map(LiteralFactory.generate), true);
    const generate_value = (value) => typescript_1.default.factory.createIdentifier(value.toString());
    const generate_bigint = (value) => ExpressionFactory_1.ExpressionFactory.bigint(value);
    const generate_string = (value) => typescript_1.default.factory.createStringLiteral(value);
})(LiteralFactory || (exports.LiteralFactory = LiteralFactory = {}));
