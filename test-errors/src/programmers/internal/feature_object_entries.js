"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feature_object_entries = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const Escaper_1 = require("../../utils/Escaper");
/**
 * @internal
 */
const feature_object_entries = (config) => (importer) => (obj) => (input, from = "object") => obj.properties.map((prop) => {
    const sole = prop.key.getSoleLiteral();
    const propInput = sole === null
        ? typescript_1.default.factory.createIdentifier("value")
        : Escaper_1.Escaper.variable(sole)
            ? typescript_1.default.factory.createPropertyAccessExpression(input, typescript_1.default.factory.createIdentifier(sole))
            : typescript_1.default.factory.createElementAccessExpression(input, typescript_1.default.factory.createStringLiteral(sole));
    return {
        input: propInput,
        key: prop.key,
        meta: prop.value,
        expression: config.decoder()(propInput, prop.value, {
            tracable: config.path || config.trace,
            source: "function",
            from,
            postfix: sole !== null
                ? IdentifierFactory_1.IdentifierFactory.postfix(sole)
                : (() => {
                    importer.use("join");
                    return `$join(key)`;
                })(),
        }),
    };
});
exports.feature_object_entries = feature_object_entries;
