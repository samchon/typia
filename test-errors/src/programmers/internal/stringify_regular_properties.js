"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify_regular_properties = void 0;
const typescript_1 = __importDefault(require("typescript"));
const TemplateFactory_1 = require("../../factories/TemplateFactory");
const ValueFactory_1 = require("../../factories/ValueFactory");
/**
 * @internal
 */
const stringify_regular_properties = (regular, dynamic) => {
    const output = [];
    regular.sort((x, y) => sequence(x.meta) - sequence(y.meta));
    regular.forEach((entry, index) => {
        // BASE ELEMENTS
        const key = entry.key.getSoleLiteral();
        const base = [
            typescript_1.default.factory.createStringLiteral(`${JSON.stringify(key)}:`),
            entry.expression,
        ];
        if (index !== regular.length - 1 || dynamic.length !== 0)
            base.push(typescript_1.default.factory.createStringLiteral(`,`));
        const empty = (entry.meta.isRequired() === false &&
            entry.meta.nullable === false &&
            entry.meta.size() === 0) ||
            (entry.meta.functional &&
                entry.meta.nullable === false &&
                entry.meta.size() === 1);
        if (empty === true)
            return;
        else if (entry.meta.isRequired() === false ||
            entry.meta.functional === true ||
            entry.meta.any === true)
            output.push(typescript_1.default.factory.createConditionalExpression((() => {
                const conditions = [];
                if (entry.meta.isRequired() === false || entry.meta.any)
                    conditions.push(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createIdentifier("undefined"), entry.input));
                if (entry.meta.functional || entry.meta.any)
                    conditions.push(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("function"), ValueFactory_1.ValueFactory.TYPEOF(entry.input)));
                return conditions.length === 1
                    ? conditions[0]
                    : conditions.reduce((x, y) => typescript_1.default.factory.createLogicalOr(x, y));
            })(), undefined, typescript_1.default.factory.createStringLiteral(""), undefined, TemplateFactory_1.TemplateFactory.generate(base)));
        else
            output.push(...base);
    });
    return output;
};
exports.stringify_regular_properties = stringify_regular_properties;
/**
 * @internal
 */
const sequence = (meta) => meta.any || !meta.isRequired() || meta.functional ? 0 : 1;
