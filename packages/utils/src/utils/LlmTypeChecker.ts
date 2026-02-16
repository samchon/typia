import { ILlmSchema } from "@typia/interface";

import { MapUtil } from "./internal/MapUtil";
import { OpenApiTypeCheckerBase } from "./internal/OpenApiTypeCheckerBase";

/**
 * Type checker for LLM function calling schema.
 *
 * `LlmTypeChecker` is a type checker of {@link ILlmSchema}, the type schema for
 * LLM (Large Language Model) function calling.
 *
 * This checker provides type guard functions for validating schema types, and
 * operators for traversing and comparing schemas.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmTypeChecker {
  /* -----------------------------------------------------------
    TYPE CHECKERS
  ----------------------------------------------------------- */
  /**
   * Test whether the schema is a null type.
   *
   * @param schema Target schema
   * @returns Whether null type or not
   */
  export const isNull = (schema: ILlmSchema): schema is ILlmSchema.INull =>
    (schema as ILlmSchema.INull).type === "null";

  /**
   * Test whether the schema is an unknown type.
   *
   * @param schema Target schema
   * @returns Whether unknown type or not
   */
  export const isUnknown = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IUnknown =>
    (schema as ILlmSchema.IUnknown).type === undefined &&
    !isAnyOf(schema) &&
    !isReference(schema);

  /**
   * Test whether the schema is a boolean type.
   *
   * @param schema Target schema
   * @returns Whether boolean type or not
   */
  export const isBoolean = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IBoolean =>
    (schema as ILlmSchema.IBoolean).type === "boolean";

  /**
   * Test whether the schema is an integer type.
   *
   * @param schema Target schema
   * @returns Whether integer type or not
   */
  export const isInteger = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IInteger =>
    (schema as ILlmSchema.IInteger).type === "integer";

  /**
   * Test whether the schema is a number type.
   *
   * @param schema Target schema
   * @returns Whether number type or not
   */
  export const isNumber = (schema: ILlmSchema): schema is ILlmSchema.INumber =>
    (schema as ILlmSchema.INumber).type === "number";

  /**
   * Test whether the schema is a string type.
   *
   * @param schema Target schema
   * @returns Whether string type or not
   */
  export const isString = (schema: ILlmSchema): schema is ILlmSchema.IString =>
    (schema as ILlmSchema.IString).type === "string";

  /**
   * Test whether the schema is an array type.
   *
   * @param schema Target schema
   * @returns Whether array type or not
   */
  export const isArray = (schema: ILlmSchema): schema is ILlmSchema.IArray =>
    (schema as ILlmSchema.IArray).type === "array" &&
    (schema as ILlmSchema.IArray).items !== undefined;

  /**
   * Test whether the schema is an object type.
   *
   * @param schema Target schema
   * @returns Whether object type or not
   */
  export const isObject = (schema: ILlmSchema): schema is ILlmSchema.IObject =>
    (schema as ILlmSchema.IObject).type === "object";

  /**
   * Test whether the schema is a reference type.
   *
   * @param schema Target schema
   * @returns Whether reference type or not
   */
  export const isReference = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IReference => (schema as any).$ref !== undefined;

  /**
   * Test whether the schema is a union type.
   *
   * @param schema Target schema
   * @returns Whether union type or not
   */
  export const isAnyOf = (schema: ILlmSchema): schema is ILlmSchema.IAnyOf =>
    (schema as ILlmSchema.IAnyOf).anyOf !== undefined;

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /**
   * Visit every nested schemas.
   *
   * Visit every nested schemas of the target, and apply the `props.closure`
   * function.
   *
   * Here is the list of occurring nested visitings:
   *
   * - {@link ILlmSchema.IAnyOf.anyOf}
   * - {@link ILlmSchema.IReference}
   * - {@link ILlmSchema.IObject.properties}
   * - {@link ILlmSchema.IArray.items}
   *
   * @param props Properties for visiting
   */
  export const visit = (props: {
    closure: (schema: ILlmSchema, accessor: string) => void;
    $defs?: Record<string, ILlmSchema> | undefined;
    schema: ILlmSchema;
    accessor?: string;
    refAccessor?: string;
  }): void => {
    const already: Set<string> = new Set();
    const refAccessor: string = props.refAccessor ?? "$input.$defs";
    const next = (schema: ILlmSchema, accessor: string): void => {
      props.closure(schema, accessor);
      if (LlmTypeChecker.isReference(schema)) {
        const key: string = schema.$ref.split("#/$defs/").pop()!;
        if (already.has(key) === true) return;
        already.add(key);
        const found: ILlmSchema | undefined = props.$defs?.[key];
        if (found !== undefined) next(found, `${refAccessor}[${key}]`);
      } else if (LlmTypeChecker.isAnyOf(schema))
        schema.anyOf.forEach((s, i) => next(s, `${accessor}.anyOf[${i}]`));
      else if (LlmTypeChecker.isObject(schema)) {
        for (const [key, value] of Object.entries(schema.properties))
          next(value, `${accessor}.properties[${JSON.stringify(key)}]`);
        if (
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
        )
          next(schema.additionalProperties, `${accessor}.additionalProperties`);
      } else if (LlmTypeChecker.isArray(schema))
        next(schema.items, `${accessor}.items`);
    };
    next(props.schema, props.accessor ?? "$input.schemas");
  };

  /**
   * Test whether the `x` schema covers the `y` schema.
   *
   * @param props Properties for testing
   * @returns Whether the `x` schema covers the `y` schema
   */
  export const covers = (props: {
    $defs?: Record<string, ILlmSchema> | undefined;
    x: ILlmSchema;
    y: ILlmSchema;
  }): boolean =>
    coverStation({
      $defs: props.$defs,
      x: props.x,
      y: props.y,
      visited: new Map(),
    });

  const coverStation = (p: {
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema;
    y: ILlmSchema;
  }): boolean => {
    const cache: boolean | undefined = p.visited.get(p.x)?.get(p.y);
    if (cache !== undefined) return cache;

    // FOR RECURSIVE CASE
    const nested: Map<ILlmSchema, boolean> = MapUtil.take(p.visited)(p.x)(
      () => new Map(),
    );
    nested.set(p.y, true);

    // COMPUTE IT
    const result: boolean = coverSchema(p);
    nested.set(p.y, result);
    return result;
  };

  const coverSchema = (p: {
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema;
    y: ILlmSchema;
  }): boolean => {
    // CHECK EQUALITY
    if (p.x === p.y) return true;
    else if (isReference(p.x) && isReference(p.y) && p.x.$ref === p.y.$ref)
      return true;

    // COMPARE WITH FLATTENING
    const alpha: ILlmSchema[] = flatSchema(p.$defs, p.x);
    const beta: ILlmSchema[] = flatSchema(p.$defs, p.y);
    if (alpha.some((x) => isUnknown(x))) return true;
    else if (beta.some((x) => isUnknown(x))) return false;
    return beta.every((b) =>
      alpha.some((a) =>
        coverEscapedSchema({
          $defs: p.$defs,
          visited: p.visited,
          x: a,
          y: b,
        }),
      ),
    );
  };

  const coverEscapedSchema = (p: {
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema;
    y: ILlmSchema;
  }): boolean => {
    // CHECK EQUALITY
    if (p.x === p.y) return true;
    else if (isUnknown(p.x)) return true;
    else if (isUnknown(p.y)) return false;
    else if (isNull(p.x)) return isNull(p.y);
    // ATOMIC CASE
    else if (isBoolean(p.x)) return isBoolean(p.y) && coverBoolean(p.x, p.y);
    else if (isInteger(p.x)) return isInteger(p.y) && coverInteger(p.x, p.y);
    else if (isNumber(p.x)) return isNumber(p.y) && coverNumber(p.x, p.y);
    else if (isString(p.x)) return isString(p.y) && coverString(p.x, p.y);
    // INSTANCE CASE
    else if (isArray(p.x))
      return (
        isArray(p.y) &&
        coverArray({
          $defs: p.$defs,
          visited: p.visited,
          x: p.x,
          y: p.y,
        })
      );
    else if (isObject(p.x))
      return (
        isObject(p.y) &&
        coverObject({
          $defs: p.$defs,
          visited: p.visited,
          x: p.x,
          y: p.y,
        })
      );
    else if (isReference(p.x)) return isReference(p.y) && p.x.$ref === p.y.$ref;
    return false;
  };

  const coverArray = (p: {
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema.IArray;
    y: ILlmSchema.IArray;
  }): boolean => {
    if (
      !(
        p.x.minItems === undefined ||
        (p.y.minItems !== undefined && p.x.minItems <= p.y.minItems)
      )
    )
      return false;
    else if (
      !(
        p.x.maxItems === undefined ||
        (p.y.maxItems !== undefined && p.x.maxItems >= p.y.maxItems)
      )
    )
      return false;
    return coverStation({
      $defs: p.$defs,
      visited: p.visited,
      x: p.x.items,
      y: p.y.items,
    });
  };

  const coverObject = (p: {
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema.IObject;
    y: ILlmSchema.IObject;
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
            $defs: p.$defs,
            visited: p.visited,
            x: p.x.additionalProperties,
            y: p.y.additionalProperties,
          })))
    )
      return false;
    return Object.entries(p.y.properties ?? {}).every(([key, b]) => {
      const a: ILlmSchema | undefined = p.x.properties?.[key];
      if (a === undefined) return false;
      else if (
        (p.x.required?.includes(key) ?? false) === true &&
        (p.y.required?.includes(key) ?? false) === false
      )
        return false;
      return coverStation({
        $defs: p.$defs,
        visited: p.visited,
        x: a,
        y: b,
      });
    });
  };

  const coverBoolean = (
    x: ILlmSchema.IBoolean,
    y: ILlmSchema.IBoolean,
  ): boolean => {
    if (!!x.enum?.length)
      return !!y.enum?.length && y.enum.every((v) => x.enum!.includes(v));
    return true;
  };

  const coverInteger = (
    x: ILlmSchema.IInteger,
    y: ILlmSchema.IInteger,
  ): boolean => {
    if (!!x.enum?.length)
      return !!y.enum?.length && y.enum.every((v) => x.enum!.includes(v));
    return OpenApiTypeCheckerBase.coverInteger(x, y);
  };

  const coverNumber = (
    x: ILlmSchema.INumber,
    y: ILlmSchema.IInteger | ILlmSchema.INumber,
  ): boolean => {
    if (!!x.enum?.length)
      return !!y.enum?.length && y.enum.every((v) => x.enum!.includes(v));
    return OpenApiTypeCheckerBase.coverNumber(x, y);
  };

  const coverString = (
    x: ILlmSchema.IString,
    y: ILlmSchema.IString,
  ): boolean => {
    if (!!x.enum?.length)
      return !!y.enum?.length && y.enum.every((v) => x.enum!.includes(v));
    return OpenApiTypeCheckerBase.coverString(x, y);
  };

  const flatSchema = (
    $defs: Record<string, ILlmSchema> | undefined,
    schema: ILlmSchema,
  ): ILlmSchema[] => {
    schema = escapeReference($defs, schema);
    if (isAnyOf(schema))
      return schema.anyOf.map((v) => flatSchema($defs, v)).flat();
    return [schema];
  };

  const escapeReference = (
    $defs: Record<string, ILlmSchema> | undefined,
    schema: ILlmSchema,
  ): Exclude<ILlmSchema, ILlmSchema.IReference> =>
    isReference(schema)
      ? escapeReference($defs, $defs![schema.$ref.replace("#/$defs/", "")]!)
      : schema;
}
