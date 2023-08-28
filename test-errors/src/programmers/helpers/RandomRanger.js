"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomRanger = void 0;
const typescript_1 = __importDefault(require("typescript"));
var RandomRanger;
(function (RandomRanger) {
    RandomRanger.length = (coalesce) => (defs) => (acc) => (tags) => {
        const props = {
            minimum: getter(tags)(acc.minimum),
            maximum: getter(tags)(acc.maximum),
        };
        if (props.minimum === undefined && props.maximum === undefined)
            return undefined;
        props.minimum ??= defs.minimum;
        props.maximum ??= defs.maximum;
        if (props.maximum < props.minimum)
            props.maximum += defs.gap;
        return typescript_1.default.factory.createCallExpression(coalesce("integer"), undefined, [
            typescript_1.default.factory.createNumericLiteral(props.minimum),
            typescript_1.default.factory.createNumericLiteral(props.maximum),
        ]);
    };
    RandomRanger.number = (config) => (defs) => (tags) => {
        const range = {
            minimum: {
                value: getter(tags)("minimum") ??
                    getter(tags)("exclusiveMinimum"),
                exclusive: getter(tags)("exclusiveMinimum") !== undefined,
            },
            maximum: {
                value: getter(tags)("maximum") ??
                    getter(tags)("exclusiveMaximum"),
                exclusive: getter(tags)("exclusiveMaximum") !== undefined,
            },
            stepper: undefined,
            multiply: getter(tags)("multipleOf"),
        };
        //----
        // MULTIPLIERS
        //----
        if (range.multiply !== undefined) {
            const { minimum, maximum } = multiplier(defs.gap)(range)(range.multiply);
            return typescript_1.default.factory.createMultiply(config.transform(range.multiply), config.setter([minimum, maximum]));
        }
        //----
        // RANGE
        //----
        // INT
        const integer = (value) => value === Math.floor(value);
        if (config.type === "int") {
            if (range.minimum.value !== undefined) {
                if (range.minimum.exclusive) {
                    range.minimum.exclusive = false;
                    if (integer(range.minimum.value))
                        range.minimum.value += 1;
                }
                range.minimum.value = Math.ceil(range.minimum.value);
            }
            if (range.maximum.value !== undefined) {
                if (range.maximum.exclusive) {
                    range.maximum.exclusive = false;
                    if (integer(range.maximum.value))
                        range.maximum.value -= 1;
                }
                range.maximum.value = Math.floor(range.maximum.value);
            }
        }
        // UNSIGNED INT
        if (config.type === "uint") {
            if (range.minimum.value === undefined)
                range.minimum.value = 0;
            else if (range.minimum.value <= 0) {
                range.minimum.value = 0;
                range.minimum.exclusive = false;
            }
        }
        const minimum = range.minimum.value ??
            (range.maximum.value !== undefined
                ? range.maximum.value - defs.gap
                : defs.minimum);
        const maximum = range.maximum.value ??
            (range.minimum.value !== undefined
                ? range.minimum.value + defs.gap
                : defs.maximum);
        return config.setter([minimum, maximum]);
    };
})(RandomRanger || (exports.RandomRanger = RandomRanger = {}));
const getter = (tags) => (kind) => {
    const value = tags.find((t) => t.kind === kind &&
        (typeof t.value === "number" || typeof t.value === "bigint"))?.value;
    return value !== undefined ? Number(value) : undefined;
};
const multiplier = (gap) => (range) => (m) => {
    const minimum = range.minimum.value === undefined
        ? 0
        : (() => {
            const x = m * Math.ceil(range.minimum.value / m);
            return range.minimum.exclusive && x === range.minimum.value
                ? x + m
                : x;
        })() / m;
    const maximum = range.maximum.value === undefined
        ? gap
        : (() => {
            const y = m * Math.floor(range.maximum.value / m);
            return range.maximum.exclusive && y === range.maximum.value
                ? y - m
                : y;
        })() / m;
    return { minimum, maximum };
};
