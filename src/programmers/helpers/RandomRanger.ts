import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

export namespace RandomRanger {
  export interface IDefaults {
    minimum: number;
    maximum: number;
    gap: number;
  }

  export const length = (props: {
    coalesce: (method: string) => ts.Expression;
    defaults: IDefaults;
    accessors: length.IAccessors;
    tags: IMetadataTypeTag[];
  }): ts.Expression | undefined => {
    const range = {
      minimum: take({
        kind: props.accessors.minimum,
        tags: props.tags,
      }),
      maximum: take({
        kind: props.accessors.maximum,
        tags: props.tags,
      }),
    };
    if (range.minimum === undefined && range.maximum === undefined)
      return undefined;

    if (range.maximum !== undefined && range.minimum === undefined) {
      if (range.maximum <= 0) {
        range.maximum = 0;
        range.minimum = 0;
      } else if (range.maximum < props.defaults.gap)
        range.minimum = props.defaults.minimum === 0 ? 0 : 1;
    }
    range.minimum ??= props.defaults.minimum;
    range.maximum ??= props.defaults.maximum;
    if (range.maximum < range.minimum)
      (range.maximum as number) += props.defaults.gap;

    return ts.factory.createCallExpression(
      props.coalesce("integer"),
      undefined,
      [
        ExpressionFactory.number(range.minimum),
        ExpressionFactory.number(range.maximum),
      ],
    );
  };
  export namespace length {
    export interface IAccessors {
      minimum: string;
      maximum: string;
    }
  }

  export const number = (props: {
    config: number.IConfig;
    defaults: IDefaults;
    tags: IMetadataTypeTag[];
  }): ts.Expression => {
    const range = {
      minimum: {
        value:
          take({
            kind: "minimum",
            tags: props.tags,
          }) ??
          take({
            kind: "exclusiveMinimum",
            tags: props.tags,
          }),
        exclusive:
          take({
            kind: "exclusiveMinimum",
            tags: props.tags,
          }) !== undefined,
      },
      maximum: {
        value:
          take({
            kind: "maximum",
            tags: props.tags,
          }) ??
          take({
            tags: props.tags,
            kind: "exclusiveMaximum",
          }),
        exclusive:
          take({
            kind: "exclusiveMaximum",
            tags: props.tags,
          }) !== undefined,
      },
      stepper: undefined,
      multiply: take({
        kind: "multipleOf",
        tags: props.tags,
      }),
    };

    //----
    // MULTIPLIERS
    //----
    if (range.multiply !== undefined) {
      const { minimum, maximum } = multiplier({
        gap: props.defaults.gap,
        range,
        value: range.multiply,
      });
      return ts.factory.createMultiply(
        props.config.transform(range.multiply),
        props.config.setter([minimum, maximum]),
      );
    }

    //----
    // RANGE
    //----
    // INT
    const integer = (value: number) => value === Math.floor(value);
    if (props.config.type === "int" || props.config.type === "uint") {
      if (range.minimum.value !== undefined) {
        if (range.minimum.exclusive) {
          range.minimum.exclusive = false;
          if (integer(range.minimum.value)) range.minimum.value += 1;
        }
        range.minimum.value = Math.ceil(range.minimum.value);
      }
      if (range.maximum.value !== undefined) {
        if (range.maximum.exclusive) {
          range.maximum.exclusive = false;
          if (integer(range.maximum.value)) range.maximum.value -= 1;
        }
        range.maximum.value = Math.floor(range.maximum.value);
      }
    }

    // UNSIGNED INT
    if (props.config.type === "uint") {
      if (range.minimum.value === undefined) range.minimum.value = 0;
      else if (range.minimum.value <= 0) {
        range.minimum.value = 0;
        range.minimum.exclusive = false;
      }
    }

    const minimum =
      range.minimum.value ??
      (range.maximum.value !== undefined
        ? range.maximum.value - props.defaults.gap
        : props.defaults.minimum);
    const maximum =
      range.maximum.value ??
      (range.minimum.value !== undefined
        ? range.minimum.value + props.defaults.gap
        : props.defaults.maximum);
    return props.config.setter([minimum, maximum]);
  };
  export namespace number {
    export interface IConfig {
      setter: (args: number[]) => ts.Expression;
      transform: (value: number) => ts.Expression;
      type: "int" | "uint" | "double";
    }
  }
}

const take = (props: {
  kind: string;
  tags: IMetadataTypeTag[];
}): number | undefined => {
  const value: bigint | number | undefined = props.tags.find(
    (t) =>
      t.kind === props.kind &&
      (typeof t.value === "number" || typeof t.value === "bigint"),
  )?.value;
  return value !== undefined ? Number(value) : undefined;
};

const multiplier = (props: {
  range: IRange;
  gap: number;
  value: number;
}): {
  minimum: number;
  maximum: number;
} => {
  const minimum: number =
    props.range.minimum.value === undefined
      ? 0
      : (() => {
          const x: number =
            props.value * Math.ceil(props.range.minimum.value / props.value);
          return props.range.minimum.exclusive &&
            x === props.range.minimum.value
            ? x + props.value
            : x;
        })() / props.value;
  const maximum: number =
    props.range.maximum.value === undefined
      ? props.gap
      : (() => {
          const y: number =
            props.value * Math.floor(props.range.maximum.value / props.value);
          return props.range.maximum.exclusive &&
            y === props.range.maximum.value
            ? y - props.value
            : y;
        })() / props.value;
  return { minimum, maximum };
};

interface IRange {
  minimum: IScalar;
  maximum: IScalar;
}
interface IScalar {
  value?: undefined | number;
  exclusive: boolean;
}
