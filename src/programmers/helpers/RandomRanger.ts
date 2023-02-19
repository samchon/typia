import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

export namespace RandomRanger {
    export interface IDefaults {
        minimum: number;
        maximum: number;
        gap: number;
    }

    export const length =
        (coalesce: (method: string) => ts.Expression) =>
        (defs: IDefaults) =>
        (acc: length.IAccessors) =>
        (tags: IMetadataTag[]) => {
            const props = {
                fixed: getter(tags)(acc.fixed),
                minimum: getter(tags)(acc.minimum),
                maximum: getter(tags)(acc.maximum),
            };
            if (props.fixed !== undefined)
                return ts.factory.createNumericLiteral(props.fixed);
            else if (props.minimum === undefined && props.maximum === undefined)
                return undefined;

            props.minimum ??= defs.minimum;
            props.maximum ??= defs.maximum;
            if (props.maximum <= props.minimum)
                (props.maximum as number) += defs.gap;

            return ts.factory.createCallExpression(
                coalesce("integer"),
                undefined,
                [
                    ts.factory.createNumericLiteral(props.minimum),
                    ts.factory.createNumericLiteral(props.maximum),
                ],
            );
        };
    export namespace length {
        export interface IAccessors {
            minimum: IMetadataTag["kind"];
            maximum: IMetadataTag["kind"];
            fixed: IMetadataTag["kind"];
        }
    }

    export const number =
        (config: number.IConfig) =>
        (defs: IDefaults) =>
        (tags: IMetadataTag[]): ts.Expression => {
            const range = {
                minimum: {
                    value:
                        getter(tags)("minimum") ??
                        getter(tags)("exclusiveMinimum"),
                    exclusive: getter(tags)("exclusiveMinimum") !== undefined,
                },
                maximum: {
                    value:
                        getter(tags)("maximum") ??
                        getter(tags)("exclusiveMaximum"),
                    exclusive: getter(tags)("exclusiveMaximum") !== undefined,
                },
                step: getter(tags)("step"),
                multiply: getter(tags)("multipleOf"),
            };
            if (Object.values(range).every((v) => v !== undefined))
                return config.setter([]);

            //----
            // MULTIPLIERS
            //----
            // STEP
            if (range.step !== undefined) {
                const { intercept, minimum, maximum } = stepper(defs.gap)(
                    range,
                )(range.step);
                return ts.factory.createAdd(
                    config.transform(intercept),
                    ts.factory.createMultiply(
                        config.transform(range.step),
                        config.setter([minimum, maximum]),
                    ),
                );
            }
            // MULTIPLE-OF
            else if (range.multiply !== undefined) {
                const { minimum, maximum } = multiplier(defs.gap)(range)(
                    range.multiply,
                );
                return ts.factory.createMultiply(
                    config.transform(range.multiply),
                    config.setter([minimum, maximum]),
                );
            }

            //----
            // RANGE
            //----
            // INT
            const integer = (value: number) => value === Math.floor(value);
            if (
                tags.find(
                    (t) => t.kind === "type" && t.value.indexOf("int") !== -1,
                ) !== undefined
            ) {
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
            if (
                tags.find(
                    (t) => t.kind === "type" && t.value.indexOf("uint") === 0,
                ) !== undefined
            ) {
                if (range.minimum.value === undefined) range.minimum.value = 0;
                else if (range.minimum.value <= 0) {
                    range.minimum.value = 0;
                    range.minimum.exclusive = false;
                }
            }

            const minimum =
                range.minimum.value ??
                (range.maximum.value !== undefined
                    ? range.maximum.value - defs.gap
                    : defs.minimum);
            const maximum =
                range.maximum.value ??
                (range.minimum.value !== undefined
                    ? range.minimum.value + defs.gap
                    : defs.maximum);
            return config.setter([minimum, maximum]);
        };
    export namespace number {
        export interface IConfig {
            setter: (args: number[]) => ts.Expression;
            transform: (value: number) => ts.Expression;
            type: "int" | "uint" | "double";
        }
    }
}

const getter =
    (tags: IMetadataTag[]) =>
    (kind: IMetadataTag["kind"]): number | undefined =>
        tags.find((t) => t.kind === kind)?.value as number | undefined;

const stepper = (gap: number) => (range: IRange) => (s: number) => {
    const intercept: number = range.minimum.value!;
    const minimum: number = range.minimum.exclusive ? 1 : 0;
    if (range.maximum.value === undefined)
        return {
            intercept,
            minimum,
            maximum: gap,
        };

    const y: number = Math.floor(range.maximum.value - intercept) / s;
    return {
        intercept,
        minimum,
        maximum:
            range.maximum.exclusive && intercept + y * s === range.maximum.value
                ? y - 1
                : y,
    };
};

const multiplier = (gap: number) => (range: IRange) => (m: number) => {
    const minimum: number =
        range.minimum.value === undefined
            ? 0
            : (() => {
                  const x: number = m * Math.ceil(range.minimum.value / m);
                  return range.minimum.exclusive && x === range.minimum.value
                      ? x + m
                      : x;
              })() / m;
    const maximum: number =
        range.maximum.value === undefined
            ? gap
            : (() => {
                  const y: number = m * Math.floor(range.maximum.value / m);
                  return range.maximum.exclusive && y === range.maximum.value
                      ? y - m
                      : y;
              })() / m;
    return { minimum, maximum };
};

interface IRange {
    minimum: IScalar;
    maximum: IScalar;
}
interface IScalar {
    value?: number;
    exclusive: boolean;
}
