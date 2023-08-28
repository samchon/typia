"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringifyJoiner = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const TemplateFactory_1 = require("../../factories/TemplateFactory");
const stringify_dynamic_properties_1 = require("../internal/stringify_dynamic_properties");
const stringify_regular_properties_1 = require("../internal/stringify_regular_properties");
var StringifyJoiner;
(function (StringifyJoiner) {
    StringifyJoiner.object = (importer) => (_input, entries) => {
        // CHECK AND SORT ENTRIES
        if (entries.length === 0)
            return typescript_1.default.factory.createStringLiteral("{}");
        // PROPERTIES
        const regular = entries.filter((entry) => entry.key.isSoleLiteral());
        const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
        const expressions = [
            ...(0, stringify_regular_properties_1.stringify_regular_properties)(regular, dynamic),
            ...(dynamic.length
                ? [
                    (0, stringify_dynamic_properties_1.stringify_dynamic_properties)(dynamic, regular.map((r) => r.key.getSoleLiteral())),
                ]
                : []),
        ];
        // POP LAST COMMA, IF REQUIRED
        const filtered = (regular.length &&
            regular[regular.length - 1].meta.isRequired() &&
            dynamic.length === 0) ||
            (regular.length === 0 && dynamic.length)
            ? expressions
            : [
                typescript_1.default.factory.createCallExpression(importer.use("tail"), undefined, [TemplateFactory_1.TemplateFactory.generate(expressions)]),
            ];
        // RETURNS WITH OBJECT BRACKET
        return TemplateFactory_1.TemplateFactory.generate([
            typescript_1.default.factory.createStringLiteral(`{`),
            ...filtered,
            typescript_1.default.factory.createStringLiteral(`}`),
        ]);
    };
    StringifyJoiner.array = (input, arrow) => TemplateFactory_1.TemplateFactory.generate([
        typescript_1.default.factory.createStringLiteral(`[`),
        typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createPropertyAccessExpression(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("map"), undefined, [arrow]), typescript_1.default.factory.createIdentifier("join")), undefined, [typescript_1.default.factory.createStringLiteral(`,`)]),
        typescript_1.default.factory.createStringLiteral(`]`),
    ]);
    StringifyJoiner.tuple = (children, rest) => {
        if (children.length === 0)
            return typescript_1.default.factory.createStringLiteral("[]");
        if (rest === null &&
            children.every((child) => typescript_1.default.isStringLiteral(child)))
            return typescript_1.default.factory.createStringLiteral("[" +
                children
                    .map((child) => child.text)
                    .join(",") +
                "]");
        const elements = [typescript_1.default.factory.createStringLiteral(`[`)];
        children.forEach((child, i) => {
            elements.push(child);
            if (i !== children.length - 1)
                elements.push(typescript_1.default.factory.createStringLiteral(`,`));
        });
        if (rest !== null)
            elements.push(rest);
        elements.push(typescript_1.default.factory.createStringLiteral(`]`));
        return TemplateFactory_1.TemplateFactory.generate(elements);
    };
})(StringifyJoiner || (exports.StringifyJoiner = StringifyJoiner = {}));
