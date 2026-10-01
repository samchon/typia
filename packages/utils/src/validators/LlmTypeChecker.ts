import { ILlmSchema } from "@typia/interface";

import { MapUtil } from "../utils/MapUtil";
import { LlmReference } from "../utils/internal/LlmReference";
import { ObjectDictionary } from "../utils/internal/ObjectDictionary";
import { OpenApiTypeCheckerBase } from "../utils/internal/OpenApiTypeCheckerBase";

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
 *
 * @evidence contracts/common.md#principled-implementation The namespace provides the guards and operations over ILlmSchema, whose member set is smaller than the OpenAPI one: no constants, tuples or null-or-union spelling beyond `anyOf`, and references into `$defs` rather than components; operations resolve references through the supplied `$defs`.
 * @evidence contracts/common.md#clear-and-simple-design A flat namespace with module-level cover helpers that separate array, object and atomic comparisons; the shared atomic comparisons are borrowed from the OpenAPI base.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The guards and the cover rules follow the LLM schema model and name no consumer type.
 * @evidence contracts/common.md#meaningful-documentation The comment says it is the checker of ILlmSchema and that it offers guards and operators; each function has its own doc.
 */
export namespace LlmTypeChecker {
  /* -----------------------------------------------------------
    TYPE CHECKERS
  ----------------------------------------------------------- */
  /**
   * Test whether the schema is a null type.
   *
   * @param schema Target schema
   *
   * @returns Whether null type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `null` and narrows the schema union to the null variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNull = (schema: ILlmSchema): schema is ILlmSchema.INull =>
    (schema as ILlmSchema.INull).type === "null";

  /**
   * Test whether the schema is an unknown type.
   *
   * @param schema Target schema
   *
   * @returns Whether unknown type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads an absent `type` together with no `anyOf` and no `$ref` and narrows the schema union to the unconstrained variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
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
   *
   * @returns Whether boolean type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `boolean` and narrows the schema union to the boolean variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isBoolean = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IBoolean =>
    (schema as ILlmSchema.IBoolean).type === "boolean";

  /**
   * Test whether the schema is an integer type.
   *
   * @param schema Target schema
   *
   * @returns Whether integer type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `integer` and narrows the schema union to the integer variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isInteger = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IInteger =>
    (schema as ILlmSchema.IInteger).type === "integer";

  /**
   * Test whether the schema is a number type.
   *
   * @param schema Target schema
   *
   * @returns Whether number type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `number` and narrows the schema union to the number variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNumber = (schema: ILlmSchema): schema is ILlmSchema.INumber =>
    (schema as ILlmSchema.INumber).type === "number";

  /**
   * Test whether the schema is a string type.
   *
   * @param schema Target schema
   *
   * @returns Whether string type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `string` and narrows the schema union to the string variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isString = (schema: ILlmSchema): schema is ILlmSchema.IString =>
    (schema as ILlmSchema.IString).type === "string";

  /**
   * Test whether the schema is an array type.
   *
   * @param schema Target schema
   *
   * @returns Whether array type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` with a defined `items` and narrows the schema union to the array variant; it inspects no other member, so a schema that is malformed beyond that member still passes. An array schema without `items` is therefore not an array here.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isArray = (schema: ILlmSchema): schema is ILlmSchema.IArray =>
    (schema as ILlmSchema.IArray).type === "array" &&
    (schema as ILlmSchema.IArray).items !== undefined;

  /**
   * Test whether the schema is an object type.
   *
   * @param schema Target schema
   *
   * @returns Whether object type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `object` and narrows the schema union to the object variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isObject = (schema: ILlmSchema): schema is ILlmSchema.IObject =>
    (schema as ILlmSchema.IObject).type === "object";

  /**
   * Test whether the schema is a reference type.
   *
   * @param schema Target schema
   *
   * @returns Whether reference type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `$ref` and narrows the schema union to the reference variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isReference = (
    schema: ILlmSchema,
  ): schema is ILlmSchema.IReference => (schema as any).$ref !== undefined;

  /**
   * Test whether the schema is a union type.
   *
   * @param schema Target schema
   *
   * @returns Whether union type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `anyOf` and narrows the schema union to the union variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
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
   *
   * @evidence contracts/common.md#principled-implementation The closure is called for the schema, the target of each reference once by key through the `$defs` store, each `anyOf` member, each object property and additional property schema and the array items, with an accessor for each; a set of resolved keys ends recursive cycles.
   * @evidence contracts/common.md#clear-and-simple-design One closure-based traversal over a recursive local function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It reads the structure only and mutates nothing.
   * @evidence contracts/common.md#meaningful-documentation The doc lists the visited positions and the properties.
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
        const resolved: LlmReference.IResolved | undefined =
          LlmReference.resolve(props.$defs, schema.$ref);
        if (resolved === undefined || already.has(resolved.key)) return;
        already.add(resolved.key);
        next(
          resolved.schema,
          `${refAccessor}[${JSON.stringify(resolved.key)}]`,
        );
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
   *
   * @returns Whether the `x` schema covers the `y` schema
   *
   * @evidence contracts/common.md#principled-implementation The comparison flattens unions and dereferences, then requires every flattened member of the covered schema to be covered by some flattened member of the covering one. Atomics honor enums before ranges; arrays compare item bounds and item schemas; objects compare additional properties, required keys and the property schemas; a visited table assumes coverage for a pair under comparison so recursion ends. A number schema now covers an integer schema, as the OpenAPI checker already did, because integers are numbers; before that correction the dispatch accepted only a number as the covered schema.
   * @evidence contracts/common.md#clear-and-simple-design A public wrapper plus private cover helpers per shape, each used once.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rule is set inclusion over the declared constraints and not a list of known pairs.
   * @evidence contracts/common.md#meaningful-documentation The doc states the question the function answers and the properties.
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
    const nested: Map<ILlmSchema, boolean> = MapUtil.take(
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
    $defs?: Record<string, ILlmSchema> | undefined;
    visited: Map<ILlmSchema, Map<ILlmSchema, boolean>>;
    x: ILlmSchema;
    y: ILlmSchema;
  }): boolean => {
    // CHECK EQUALITY
    if (p.x === p.y)
      return isReference(p.x) ? hasReference(p.$defs, p.x) : true;
    else if (isReference(p.x) && isReference(p.y) && p.x.$ref === p.y.$ref)
      return hasReference(p.$defs, p.x);

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
    if (p.x === p.y)
      return isReference(p.x) ? hasReference(p.$defs, p.x) : true;
    else if (isUnknown(p.x)) return true;
    else if (isUnknown(p.y)) return false;
    else if (isNull(p.x)) return isNull(p.y);
    // ATOMIC CASE
    else if (isBoolean(p.x)) return isBoolean(p.y) && coverBoolean(p.x, p.y);
    else if (isInteger(p.x)) return isInteger(p.y) && coverInteger(p.x, p.y);
    else if (isNumber(p.x))
      return (isInteger(p.y) || isNumber(p.y)) && coverNumber(p.x, p.y);
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
      const a: ILlmSchema | undefined = ObjectDictionary.get(
        p.x.properties,
        key,
      );
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
  ): ILlmSchema => LlmReference.dereference($defs, schema) ?? schema;

  const hasReference = (
    $defs: Record<string, ILlmSchema> | undefined,
    schema: ILlmSchema.IReference,
  ): boolean => LlmReference.dereference($defs, schema) !== undefined;
}
