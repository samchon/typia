import ts from "typescript";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

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
        (tags: IMetadataTypeTag[]): ts.Expression | undefined => {
            const props = {
                minimum: getter(tags)(acc.minimum),
                maximum: getter(tags)(acc.maximum),
            };
            if (props.minimum === undefined && props.maximum === undefined)
                return undefined;

            props.minimum ??= defs.minimum;
            props.maximum ??= defs.maximum;
            if (props.maximum < props.minimum)
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
            minimum: string;
            maximum: string;
        }
    }

    export const number =
        (config: number.IConfig) =>
        (defs: IDefaults) =>
        (tags: IMetadataTypeTag[]): ts.Expression => {
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
                stepper: undefined,
                multiply: getter(tags)("multipleOf"),
            };

            //----
            // MULTIPLIERS
            //----
            if (range.multiply !== undefined) {
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
    (tags: IMetadataTypeTag[]) =>
    (kind: string): number | undefined => {
        const value: bigint | number | undefined = tags.find(
            (t) =>
                t.kind === kind &&
                (typeof t.value === "number" || typeof t.value === "bigint"),
        )?.value;
        return value !== undefined ? Number(value) : undefined;
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
