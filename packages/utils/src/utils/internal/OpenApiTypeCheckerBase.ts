import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";

import {
  _integerMultipleOfStep,
  _isMultipleOf,
} from "../../validators/functional/_isMultipleOf";
import { _isStringFormat } from "../../validators/functional/_isStringFormat";
import { _stringLength } from "../../validators/functional/_stringLength";
import { MapUtil } from "../MapUtil";
import { JsonDescriptor } from "./JsonDescriptor";
import { ObjectDictionary } from "./ObjectDictionary";
import { OpenApiSchemaSanitizer } from "./OpenApiSchemaSanitizer";

/** @internal */
export namespace OpenApiTypeCheckerBase {
  /* -----------------------------------------------------------
    TYPE CHECKERS
  ----------------------------------------------------------- */
  export const isNull = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INull =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.INull).type === "null";

  export const isUnknown = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IUnknown =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IUnknown).type === undefined &&
    !isConstant(schema) &&
    !isOneOf(schema) &&
    !isReference(schema);

  export const isConstant = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IConstant =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IConstant).const !== undefined;

  export const isBoolean = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IBoolean =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IBoolean).type === "boolean";

  export const isInteger = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IInteger =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IInteger).type === "integer";

  export const isNumber = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INumber =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.INumber).type === "number";

  export const isString = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IString =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IString).type === "string";

  export const isArray = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IArray =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IArray).type === "array" &&
    (schema as OpenApi.IJsonSchema.IArray).items !== undefined;

  export const isTuple = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.ITuple =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.ITuple).type === "array" &&
    (schema as OpenApi.IJsonSchema.ITuple).prefixItems !== undefined;

  export const isObject = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IObject =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IObject).type === "object";

  export const isReference = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IReference =>
    schema !== undefined && (schema as any).$ref !== undefined;

  export const isOneOf = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IOneOf =>
    schema !== undefined &&
    (schema as OpenApi.IJsonSchema.IOneOf).oneOf !== undefined;

  export const isRecursiveReference = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
  }): boolean => {
    if (isReference(props.schema) === false) return false;
    const current: string =
      props.schema.$ref.split(props.prefix)[1] ??
      props.schema.$ref.split("/").at(-1)!;
    let counter: number = 0;
    visit({
      prefix: props.prefix,
      components: props.components,
      schema: props.schema,
      closure: (schema) => {
        if (isReference(schema)) {
          const next: string =
            schema.$ref.split(props.prefix)[1] ??
            schema.$ref.split("/").at(-1)!;
          if (current === next) ++counter;
        }
      },
    });
    return counter > 1;
  };

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  export const unreference = (props: {
    prefix: string;
    method: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IJsonSchemaTransformError> => {
    const reasons: IJsonSchemaTransformError.IReason[] = [];
    const result: OpenApi.IJsonSchema | null = unreferenceSchema({
      prefix: props.prefix,
      refAccessor:
        props.refAccessor ??
        `$input.${props.prefix
          .substring(2)
          .split("/")
          .filter((s) => !!s.length)
          .join(".")}`,
      accessor: props.accessor ?? "$input.schema",
      components: props.components,
      schema: props.schema,
      reasons,
    });
    if (result === null)
      return {
        success: false,
        error: {
          method: props.method,
          message: `failed to unreference due to unable to find.`,
          reasons,
        },
      };
    return {
      success: true,
      value: result,
    };
  };

  export const escape = (props: {
    prefix: string;
    method: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    recursive: false | number;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IJsonSchemaTransformError> => {
    const reasons: IJsonSchemaTransformError.IReason[] = [];
    const result: OpenApi.IJsonSchema | null =
      escapeSchema({
        ...props,
        reasons,
        visited: new Map(),
        accessor: props.accessor ?? "$input.schema",
        refAccessor: props.refAccessor ?? getReference(props.prefix),
      }) || null;
    if (result === null)
      return {
        success: false,
        error: {
          method: props.method,
          message: `failed to escape some reference type(s) due to unable to find${Number(props.recursive) === 0 ? " or recursive relationship" : ""}.`,
          reasons,
        },
      };
    return {
      success: true,
      value: result,
    };
  };

  export const visit = (props: {
    prefix: string;
    closure: (schema: OpenApi.IJsonSchema, accessor: string) => void;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): void => {
    const already: Set<string> = new Set();
    const refAccessor: string =
      props.refAccessor ?? `$input.${getReference(props.prefix)}`;
    const next = (schema: OpenApi.IJsonSchema, accessor: string): void => {
      props.closure(schema, accessor);
      if (isReference(schema)) {
        const key: string = schema.$ref.split(props.prefix).pop()!;
        if (already.has(key) === true) return;
        already.add(key);
        const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
          props.components.schemas,
          key,
        );
        if (found !== undefined)
          next(found, `${refAccessor}[${JSON.stringify(key)}]`);
      } else if (isOneOf(schema))
        schema.oneOf.forEach((s, i) => next(s, `${accessor}.oneOf[${i}]`));
      else if (isObject(schema)) {
        for (const [key, value] of Object.entries(schema.properties ?? {}))
          next(value, `${accessor}.properties[${JSON.stringify(key)}]`);
        if (
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
        )
          next(schema.additionalProperties, `${accessor}.additionalProperties`);
      } else if (isArray(schema)) next(schema.items, `${accessor}.items`);
      else if (isTuple(schema)) {
        (schema.prefixItems ?? []).forEach((s, i) =>
          next(s, `${accessor}.prefixItems[${i}]`),
        );
        if (
          typeof schema.additionalItems === "object" &&
          schema.additionalItems !== null
        )
          next(schema.additionalItems, `${accessor}.additionalItems`);
      }
    };
    next(props.schema, props.accessor ?? "$input.schema");
  };

  export const covers = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }): boolean =>
    coverStation({
      prefix: props.prefix,
      components: props.components,
      x: props.x,
      y: props.y,
      visited: new Map(),
    });

  const unreferenceSchema = (props: {
    prefix: string;
    refAccessor: string;
    accessor: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    reasons: IJsonSchemaTransformError.IReason[];
    first?: string;
  }): OpenApi.IJsonSchema | null => {
    if (isReference(props.schema) === false) return props.schema;
    const key: string = props.schema.$ref.split(props.prefix).pop()!;
    const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
      props.components.schemas,
      key,
    );
    if (found === undefined) {
      props.reasons.push({
        schema: props.schema,
        accessor: props.accessor,
        message: `unable to find reference type ${JSON.stringify(key)}.`,
      });
      return null;
    } else if (isReference(found) === false) return found;
    else if (props.first === key) {
      props.reasons.push({
        schema: props.schema,
        accessor: props.accessor,
        message: `recursive reference type ${JSON.stringify(key)}.`,
      });
      return null;
    }
    return unreferenceSchema({
      ...props,
      accessor: `${props.refAccessor}[${JSON.stringify(key)}]`,
      first: key,
    });
  };

  const escapeSchema = (props: {
    components: OpenApi.IComponents;
    prefix: string;
    schema: OpenApi.IJsonSchema;
    recursive: false | number;
    visited: Map<string, number>;
    reasons: IJsonSchemaTransformError.IReason[];
    accessor: string;
    refAccessor: string;
  }): OpenApi.IJsonSchema | null | undefined => {
    if (isReference(props.schema)) {
      // REFERENCE
      const key: string =
        props.schema.$ref.split(props.prefix)[1] ??
        props.schema.$ref.split("/").at(-1)!;
      const target: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
        props.components.schemas,
        key,
      );
      if (target === undefined) {
        props.reasons.push({
          schema: props.schema,
          accessor: props.accessor,
          message: `unable to find reference type ${JSON.stringify(key)}.`,
        });
        return null;
      } else if (props.visited.has(key) === true) {
        if (props.recursive === false) return null;
        const depth: number = props.visited.get(key)!;
        if (depth > props.recursive) {
          if (props.recursive === 0) {
            props.reasons.push({
              schema: props.schema,
              accessor: props.accessor,
              message: `recursive reference type ${JSON.stringify(key)}.`,
            });
            return null;
          }
          return undefined;
        }
        props.visited.set(key, depth + 1);
        const res: OpenApi.IJsonSchema | null | undefined = escapeSchema({
          ...props,
          schema: target,
          accessor: `${props.refAccessor}[${JSON.stringify(key)}]`,
        });
        return res
          ? {
              ...res,
              description: JsonDescriptor.cascade({
                prefix: props.prefix,
                components: props.components,
                schema: props.schema,
                escape: true,
              }),
            }
          : res;
      } else {
        const res: OpenApi.IJsonSchema | null | undefined = escapeSchema({
          ...props,
          schema: target,
          accessor: `${props.refAccessor}[${JSON.stringify(key)}]`,
          visited: new Map([...props.visited, [key, 1]]),
        });
        return res
          ? {
              ...res,
              description: JsonDescriptor.cascade({
                prefix: props.prefix,
                components: props.components,
                schema: props.schema,
                escape: true,
              }),
            }
          : res;
      }
    } else if (isOneOf(props.schema)) {
      // UNION
      const elements: Array<OpenApi.IJsonSchema | null | undefined> =
        props.schema.oneOf.map((s, i) =>
          escapeSchema({
            ...props,
            schema: s,
            accessor: `${props.accessor}.oneOf[${i}]`,
          }),
        );
      if (elements.some((v) => v === null)) return null;
      const filtered: OpenApi.IJsonSchema[] = elements.filter(
        (v) => v !== undefined,
      ) as OpenApi.IJsonSchema[];
      if (filtered.length === 0) return undefined;
      return OpenApiSchemaSanitizer.omitEmptyRequired({
        ...props.schema,
        oneOf: filtered
          .map((v) =>
            flatSchema({
              prefix: props.prefix,
              components: props.components,
              schema: v,
            }),
          )
          .flat(),
      });
    } else if (isObject(props.schema)) {
      // OBJECT
      const object: OpenApi.IJsonSchema.IObject = props.schema;
      const properties: Array<
        [string, OpenApi.IJsonSchema | null | undefined]
      > = Object.entries(object.properties ?? {}).map(([k, s]) => [
        k,
        escapeSchema({
          ...props,
          schema: s,
          visited: props.visited,
          accessor: `${props.accessor}.properties[${JSON.stringify(k)}]`,
        }),
      ]);
      const additionalProperties:
        | OpenApi.IJsonSchema
        | null
        | boolean
        | undefined = object.additionalProperties
        ? typeof object.additionalProperties === "object" &&
          object.additionalProperties !== null
          ? escapeSchema({
              ...props,
              schema: object.additionalProperties,
              accessor: `${props.accessor}.additionalProperties`,
            })
          : object.additionalProperties
        : false;
      if (
        properties.some(([_k, v]) => v === null) ||
        additionalProperties === null
      )
        return null;
      else if (
        properties.some(
          ([k, v]) => v === undefined && object.required?.includes(k) === true,
        ) === true
      )
        return undefined;
      return OpenApiSchemaSanitizer.omitEmptyRequired({
        ...object,
        properties: Object.fromEntries(
          properties.filter(([_k, v]) => v !== undefined) as Array<
            [string, OpenApi.IJsonSchema]
          >,
        ),
        additionalProperties: additionalProperties ?? false,
        required:
          object.required?.filter((k) =>
            properties.some(([key, value]) => key === k && value !== undefined),
          ) ?? [],
      });
    } else if (isTuple(props.schema)) {
      // TUPLE
      const elements: Array<OpenApi.IJsonSchema | null | undefined> =
        props.schema.prefixItems.map((s, i) =>
          escapeSchema({
            ...props,
            schema: s,
            accessor: `${props.accessor}.prefixItems[${i}]`,
          }),
        );
      const additionalItems: OpenApi.IJsonSchema | null | boolean | undefined =
        props.schema.additionalItems
          ? typeof props.schema.additionalItems === "object" &&
            props.schema.additionalItems !== null
            ? escapeSchema({
                ...props,
                schema: props.schema.additionalItems,
                accessor: `${props.accessor}.additionalItems`,
              })
            : props.schema.additionalItems
          : false;
      if (elements.some((v) => v === null) || additionalItems === null)
        return null;
      else if (elements.some((v) => v === undefined)) return undefined;
      return {
        ...props.schema,
        prefixItems: elements as OpenApi.IJsonSchema[],
        additionalItems: additionalItems ?? false,
      };
    } else if (isArray(props.schema)) {
      // ARRAY
      const items: OpenApi.IJsonSchema | null | undefined = escapeSchema({
        ...props,
        schema: props.schema.items,
        accessor: `${props.accessor}.items`,
      });
      if (items === null) return null;
      else if (items === undefined)
        return {
          ...props.schema,
          minItems: undefined,
          maxItems: 0,
          items: {},
        };
      return {
        ...props.schema,
        items: items,
      };
    }
    return props.schema;
  };

  const coverStation = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }): boolean => {
    const cache: boolean | undefined = p.visited.get(p.x)?.get(p.y);
    if (cache !== undefined) return cache;

    // FOR RECURSIVE CASE
    const nested: Map<OpenApi.IJsonSchema, boolean> = MapUtil.take(
      p.visited,
      p.x,
      () => new Map(),
    );
    nested.set(p.y, true);

    // COMPUTE IT
    const result: boolean = coverSchema(p);
    nested.set(p.y, result);
    return result;
  };

  const coverSchema = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }): boolean => {
    // CHECK EQUALITY
    if (p.x === p.y) return true;
    else if (isReference(p.x) && isReference(p.y) && p.x.$ref === p.y.$ref)
      return true;

    // COMPARE WITH FLATTENING
    const alpha: OpenApi.IJsonSchema[] = flatSchema({
      prefix: p.prefix,
      components: p.components,
      schema: p.x,
    });
    const beta: OpenApi.IJsonSchema[] = flatSchema({
      prefix: p.prefix,
      components: p.components,
      schema: p.y,
    });
    if (alpha.some((x) => isUnknown(x))) return true;
    else if (beta.some((x) => isUnknown(x))) return false;
    return beta.every((b) =>
      alpha.some((a) =>
        coverEscapedSchema({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: a,
          y: b,
        }),
      ),
    );
  };

  const coverEscapedSchema = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }): boolean => {
    // CHECK EQUALITY
    if (p.x === p.y) return true;
    else if (isUnknown(p.x)) return true;
    else if (isUnknown(p.y)) return false;
    else if (isNull(p.x)) return isNull(p.y);
    // ATOMIC CASE
    else if (isConstant(p.x)) return isConstant(p.y) && p.x.const === p.y.const;
    else if (isBoolean(p.x))
      return (
        isBoolean(p.y) || (isConstant(p.y) && typeof p.y.const === "boolean")
      );
    else if (isInteger(p.x))
      return (isInteger(p.y) || isConstant(p.y)) && coverInteger(p.x, p.y);
    else if (isNumber(p.x))
      return (
        (isConstant(p.y) || isInteger(p.y) || isNumber(p.y)) &&
        coverNumber(p.x, p.y)
      );
    else if (isString(p.x))
      return (isConstant(p.y) || isString(p.y)) && coverString(p.x, p.y);
    // INSTANCE CASE
    else if (isArray(p.x))
      return (
        (isArray(p.y) || isTuple(p.y)) &&
        coverArray({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: p.x,
          y: p.y,
        })
      );
    else if (isTuple(p.x))
      return (
        isTuple(p.y) &&
        coverTuple({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: p.x,
          y: p.y,
        })
      );
    else if (isObject(p.x))
      return (
        isObject(p.y) &&
        coverObject({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: p.x,
          y: p.y,
        })
      );
    else if (isReference(p.x)) return isReference(p.y) && p.x.$ref === p.y.$ref;
    return false;
  };

  const coverArray = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema.IArray;
    y: OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.ITuple;
  }): boolean => {
    const xRange: IArrayRange = getArrayRange(p.x);
    const yRange: IArrayRange = getArrayRange(p.y);
    if (yRange.minimum > yRange.maximum) return true;
    if (
      xRange.minimum > yRange.minimum ||
      xRange.maximum < yRange.maximum ||
      (p.x.uniqueItems === true &&
        p.y.uniqueItems !== true &&
        yRange.maximum > 1)
    )
      return false;

    if (isTuple(p.y)) {
      const count: number = Math.min(p.y.prefixItems.length, yRange.maximum);
      if (
        p.y.prefixItems.slice(0, count).every((v) =>
          coverStation({
            prefix: p.prefix,
            components: p.components,
            visited: p.visited,
            x: p.x.items,
            y: v,
          }),
        ) === false
      )
        return false;
      if (yRange.maximum <= p.y.prefixItems.length) return true;
      const additional: OpenApi.IJsonSchema =
        typeof p.y.additionalItems === "object" ? p.y.additionalItems : {};
      return coverStation({
        prefix: p.prefix,
        components: p.components,
        visited: p.visited,
        x: p.x.items,
        y: additional,
      });
    }
    return coverStation({
      prefix: p.prefix,
      components: p.components,
      visited: p.visited,
      x: p.x.items,
      y: p.y.items,
    });
  };

  const coverTuple = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema.ITuple;
    y: OpenApi.IJsonSchema.ITuple;
  }): boolean => {
    const xRange: IArrayRange = getArrayRange(p.x);
    const yRange: IArrayRange = getArrayRange(p.y);
    if (yRange.minimum > yRange.maximum) return true;
    if (
      xRange.minimum > yRange.minimum ||
      xRange.maximum < yRange.maximum ||
      (p.x.uniqueItems === true &&
        p.y.uniqueItems !== true &&
        yRange.maximum > 1)
    )
      return false;

    const prefixCount: number = Math.min(
      p.y.prefixItems.length,
      yRange.maximum,
    );
    for (let i = 0; i < prefixCount; ++i) {
      const target: OpenApi.IJsonSchema | null = getTupleItem(p.x, i);
      if (
        target === null ||
        coverStation({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: target,
          y: p.y.prefixItems[i]!,
        }) === false
      )
        return false;
    }
    if (yRange.maximum <= p.y.prefixItems.length) return true;

    const additional: OpenApi.IJsonSchema =
      typeof p.y.additionalItems === "object" ? p.y.additionalItems : {};
    const fixedEnd: number = Math.min(p.x.prefixItems.length, yRange.maximum);
    for (let i = p.y.prefixItems.length; i < fixedEnd; ++i)
      if (
        coverStation({
          prefix: p.prefix,
          components: p.components,
          visited: p.visited,
          x: p.x.prefixItems[i]!,
          y: additional,
        }) === false
      )
        return false;
    if (yRange.maximum <= p.x.prefixItems.length) return true;

    const target: OpenApi.IJsonSchema | null = getTupleItem(
      p.x,
      p.x.prefixItems.length,
    );
    return (
      target !== null &&
      coverStation({
        prefix: p.prefix,
        components: p.components,
        visited: p.visited,
        x: target,
        y: additional,
      })
    );
  };

  const getTupleItem = (
    schema: OpenApi.IJsonSchema.ITuple,
    index: number,
  ): OpenApi.IJsonSchema | null => {
    if (index < schema.prefixItems.length) return schema.prefixItems[index]!;
    if (schema.additionalItems === true) return {};
    return typeof schema.additionalItems === "object"
      ? schema.additionalItems
      : null;
  };

  const getArrayRange = (
    schema: OpenApi.IJsonSchema.IArray | OpenApi.IJsonSchema.ITuple,
  ): IArrayRange => ({
    minimum:
      schema.minItems ?? (isTuple(schema) ? schema.prefixItems.length : 0),
    maximum: Math.min(
      schema.maxItems ?? Number.POSITIVE_INFINITY,
      isTuple(schema) &&
        schema.additionalItems !== true &&
        typeof schema.additionalItems !== "object"
        ? schema.prefixItems.length
        : Number.POSITIVE_INFINITY,
    ),
  });

  const coverObject = (p: {
    prefix: string;
    components: OpenApi.IComponents;
    visited: Map<OpenApi.IJsonSchema, Map<OpenApi.IJsonSchema, boolean>>;
    x: OpenApi.IJsonSchema.IObject;
    y: OpenApi.IJsonSchema.IObject;
  }): boolean => {
    if (!p.x.additionalProperties && !!p.y.additionalProperties) return false;
    else if (
      !!p.x.additionalProperties &&
      !!p.y.additionalProperties &&
      ((typeof p.x.additionalProperties === "object" &&
        p.y.additionalProperties === true) ||
        (typeof p.x.additionalProperties === "object" &&
          typeof p.y.additionalProperties === "object" &&
          !coverStation({
            prefix: p.prefix,
            components: p.components,
            visited: p.visited,
            x: p.x.additionalProperties,
            y: p.y.additionalProperties,
          })))
    )
      return false;
    return Object.entries(p.y.properties ?? {}).every(([key, b]) => {
      const a: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
        p.x.properties,
        key,
      );
      if (a === undefined) return false;
      else if (
        p.x.required?.includes(key) === true &&
        (p.y.required?.includes(key) ?? false) === false
      )
        return false;
      return coverStation({
        prefix: p.prefix,
        components: p.components,
        visited: p.visited,
        x: a,
        y: b,
      });
    });
  };

  export const coverInteger = (
    x: OpenApi.IJsonSchema.IInteger,
    y: OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IInteger,
  ): boolean => {
    if (isConstant(y) === false && isEmptyNumericRange(y)) return true;
    if (isConstant(y))
      return (
        typeof y.const === "number" &&
        Number.isInteger(y.const) &&
        coversNumericValue(x, y.const)
      );
    const xStep: bigint | null = _integerMultipleOfStep(x.multipleOf);
    const yStep: bigint | null = _integerMultipleOfStep(y.multipleOf);
    return (
      x.type === y.type &&
      coverNumericBounds(x, y) &&
      xStep !== null &&
      yStep !== null &&
      yStep % xStep === BigInt(0)
    );
  };

  export const coverNumber = (
    x: OpenApi.IJsonSchema.INumber,
    y:
      | OpenApi.IJsonSchema.IConstant
      | OpenApi.IJsonSchema.IInteger
      | OpenApi.IJsonSchema.INumber,
  ): boolean => {
    if (isConstant(y) === false && isEmptyNumericRange(y)) return true;
    if (isConstant(y))
      return typeof y.const === "number" && coversNumericValue(x, y.const);
    return (
      (x.type === y.type || (x.type === "number" && y.type === "integer")) &&
      coverNumericBounds(x, y) &&
      (x.multipleOf === undefined ||
        (y.type === "integer"
          ? (() => {
              const step: bigint | null = _integerMultipleOfStep(y.multipleOf);
              return (
                step !== null && _isMultipleOf(Number(step), x.multipleOf!)
              );
            })()
          : y.multipleOf !== undefined &&
            _isMultipleOf(y.multipleOf, x.multipleOf)))
    );
  };

  export const coverString = (
    x: OpenApi.IJsonSchema.IString,
    y: OpenApi.IJsonSchema.IConstant | OpenApi.IJsonSchema.IString,
  ): boolean => {
    if (isConstant(y))
      return typeof y.const === "string" && coversStringValue(x, y.const);
    if (
      y.minLength !== undefined &&
      y.maxLength !== undefined &&
      y.minLength > y.maxLength
    )
      return true;
    return [
      x.format === undefined ||
        (y.format !== undefined && coverFormat(x.format, y.format)),
      x.pattern === undefined || x.pattern === y.pattern,
      x.minLength === undefined ||
        (y.minLength !== undefined && x.minLength <= y.minLength),
      x.maxLength === undefined ||
        (y.maxLength !== undefined && x.maxLength >= y.maxLength),
    ].every((v) => v);
  };

  const coverFormat = (
    x: Required<OpenApi.IJsonSchema.IString>["format"],
    y: Required<OpenApi.IJsonSchema.IString>["format"],
  ): boolean =>
    x === y ||
    (x === "idn-email" && y === "email") ||
    (x === "idn-hostname" && y === "hostname") ||
    (["uri", "iri"].includes(x) && y === "url") ||
    (x === "iri" && y === "uri") ||
    (x === "iri-reference" && y === "uri-reference");

  const flatSchema = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
  }): OpenApi.IJsonSchema[] => {
    const schema = escapeReferenceOfFlatSchema(props);
    if (isOneOf(schema))
      return schema.oneOf
        .map((v) =>
          flatSchema({
            prefix: props.prefix,
            components: props.components,
            schema: v,
          }),
        )
        .flat();
    return [schema];
  };

  const escapeReferenceOfFlatSchema = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
  }): Exclude<OpenApi.IJsonSchema, OpenApi.IJsonSchema.IReference> => {
    if (isReference(props.schema) === false) return props.schema;
    const key = props.schema.$ref.replace(props.prefix, "");
    const found: OpenApi.IJsonSchema | undefined = escapeReferenceOfFlatSchema({
      prefix: props.prefix,
      components: props.components,
      schema: ObjectDictionary.get(props.components.schemas, key) ?? {},
    });
    if (found === undefined)
      throw new Error(
        `Reference type not found: ${JSON.stringify(props.schema.$ref)}`,
      );
    return escapeReferenceOfFlatSchema({
      prefix: props.prefix,
      components: props.components,
      schema: found,
    });
  };

  export const coverNumericRange = (
    x: Pick<
      OpenApi.IJsonSchema.INumber,
      | "minimum"
      | "maximum"
      | "exclusiveMinimum"
      | "exclusiveMaximum"
      | "multipleOf"
    >,
    y: Pick<
      OpenApi.IJsonSchema.INumber,
      | "minimum"
      | "maximum"
      | "exclusiveMinimum"
      | "exclusiveMaximum"
      | "multipleOf"
    >,
  ): boolean =>
    coverNumericBounds(x, y) &&
    (x.multipleOf === undefined ||
      (y.multipleOf !== undefined &&
        _isMultipleOf(y.multipleOf, x.multipleOf)));

  const coverNumericBounds = (
    x: INumericConstraints,
    y: INumericConstraints,
  ): boolean => {
    const xLower: IBoundary | null = getLowerBoundary(x);
    const yLower: IBoundary | null = getLowerBoundary(y);
    const xUpper: IBoundary | null = getUpperBoundary(x);
    const yUpper: IBoundary | null = getUpperBoundary(y);
    return (
      coversLowerBoundary(xLower, yLower) && coversUpperBoundary(xUpper, yUpper)
    );
  };

  const isEmptyNumericRange = (schema: INumericConstraints): boolean => {
    const lower: IBoundary | null = getLowerBoundary(schema);
    const upper: IBoundary | null = getUpperBoundary(schema);
    return (
      lower !== null &&
      upper !== null &&
      (lower.value > upper.value ||
        (lower.value === upper.value && (lower.exclusive || upper.exclusive)))
    );
  };

  const coversNumericValue = (
    schema: INumericConstraints,
    value: number,
  ): boolean =>
    (schema.minimum === undefined || value >= schema.minimum) &&
    (schema.maximum === undefined || value <= schema.maximum) &&
    (schema.exclusiveMinimum === undefined ||
      value > schema.exclusiveMinimum) &&
    (schema.exclusiveMaximum === undefined ||
      value < schema.exclusiveMaximum) &&
    (schema.multipleOf === undefined ||
      _isMultipleOf(value, schema.multipleOf));

  const coversStringValue = (
    schema: OpenApi.IJsonSchema.IString,
    value: string,
  ): boolean => {
    const length: number = _stringLength(value);
    return (
      (schema.minLength === undefined || length >= schema.minLength) &&
      (schema.maxLength === undefined || length <= schema.maxLength) &&
      (schema.pattern === undefined ||
        new RegExp(schema.pattern).test(value)) &&
      (schema.format === undefined || _isStringFormat(schema.format, value))
    );
  };

  const getLowerBoundary = (schema: INumericConstraints): IBoundary | null => {
    const inclusive: IBoundary | null =
      schema.minimum === undefined
        ? null
        : { value: schema.minimum, exclusive: false };
    const exclusive: IBoundary | null =
      schema.exclusiveMinimum === undefined
        ? null
        : { value: schema.exclusiveMinimum, exclusive: true };
    if (inclusive === null) return exclusive;
    if (exclusive === null) return inclusive;
    if (inclusive.value !== exclusive.value)
      return inclusive.value > exclusive.value ? inclusive : exclusive;
    return exclusive;
  };

  const getUpperBoundary = (schema: INumericConstraints): IBoundary | null => {
    const inclusive: IBoundary | null =
      schema.maximum === undefined
        ? null
        : { value: schema.maximum, exclusive: false };
    const exclusive: IBoundary | null =
      schema.exclusiveMaximum === undefined
        ? null
        : { value: schema.exclusiveMaximum, exclusive: true };
    if (inclusive === null) return exclusive;
    if (exclusive === null) return inclusive;
    if (inclusive.value !== exclusive.value)
      return inclusive.value < exclusive.value ? inclusive : exclusive;
    return exclusive;
  };

  const coversLowerBoundary = (
    x: IBoundary | null,
    y: IBoundary | null,
  ): boolean =>
    x === null ||
    (y !== null &&
      (y.value > x.value ||
        (y.value === x.value && (x.exclusive === false || y.exclusive))));

  const coversUpperBoundary = (
    x: IBoundary | null,
    y: IBoundary | null,
  ): boolean =>
    x === null ||
    (y !== null &&
      (y.value < x.value ||
        (y.value === x.value && (x.exclusive === false || y.exclusive))));
}

interface IArrayRange {
  minimum: number;
  maximum: number;
}

interface INumericConstraints {
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
}

interface IBoundary {
  value: number;
  exclusive: boolean;
}

const getReference = (prefix: string): string =>
  prefix
    .split("/")
    .filter((str, i) => !!str.length && !(i === 0 && str === "#"))
    .join(".");
