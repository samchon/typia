import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";

import { OpenApiTypeCheckerBase } from "../utils/internal/OpenApiTypeCheckerBase";

/**
 * Type checker for emended OpenAPI v3.1 JSON schemas.
 *
 * `OpenApiTypeChecker` provides type guard functions for
 * {@link OpenApi.IJsonSchema} (typia's normalized OpenAPI format). Use these to
 * narrow schema types before accessing type-specific properties.
 *
 * Type checkers:
 *
 * - Primitives: {@link isNull}, {@link isBoolean}, {@link isInteger},
 *   {@link isNumber}, {@link isString}
 * - Constants: {@link isConstant}
 * - Collections: {@link isArray}, {@link isTuple}, {@link isObject}
 * - Composition: {@link isOneOf}, {@link isReference}
 * - Special: {@link isUnknown}
 *
 * Also provides schema operations:
 *
 * - {@link visit}: Traverse and transform schemas recursively
 * - {@link covers}: Check if one schema subsumes another
 * - {@link escape}: Unwrap reference schemas
 *
 * For other OpenAPI versions, use {@link OpenApiV3TypeChecker},
 * {@link OpenApiV3_1TypeChecker}, or {@link SwaggerV2TypeChecker}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace groups the guards and the traversal operations over the emended schema union, delegating to OpenApiTypeCheckerBase with the emended component prefix so the four version-specific checkers elsewhere stay separate; the guards are the discriminants of the emended form and the operations (escape, visit, covers) follow references through the components map.
 * @evidence contracts/common.md#clear-and-simple-design A public facade whose bodies are one-line delegations; the algorithms live in one internal base shared with other checkers, and unreference is documented separately.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Behavior is the dialect's, delegated to the shared base; no fixture, foreign method or global is used.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the guards and operations and points to the checkers for the other versions.
 */
export namespace OpenApiTypeChecker {
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
  export const isNull = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INull =>
    OpenApiTypeCheckerBase.isNull(schema);

  /**
   * Test whether the schema is an unknown type.
   *
   * @param schema Target schema
   *
   * @returns Whether unknown type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads an absent `type` together with no `const`, `oneOf` or `$ref` and narrows the schema union to the unconstrained variant; it inspects no other member, so a schema that is malformed beyond that member still passes. Attribute-only schemas, such as one with just a description, count as unknown.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isUnknown = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IUnknown =>
    OpenApiTypeCheckerBase.isUnknown(schema);

  /**
   * Test whether the schema is a constant type.
   *
   * @param schema Target schema
   *
   * @returns Whether constant type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `const` and narrows the schema union to the constant variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isConstant = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IConstant =>
    OpenApiTypeCheckerBase.isConstant(schema);

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
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IBoolean =>
    OpenApiTypeCheckerBase.isBoolean(schema);

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
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IInteger =>
    OpenApiTypeCheckerBase.isInteger(schema);

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
  export const isNumber = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INumber =>
    OpenApiTypeCheckerBase.isNumber(schema);

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
  export const isString = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IString =>
    OpenApiTypeCheckerBase.isString(schema);

  /**
   * Test whether the schema is an array type.
   *
   * @param schema Target schema
   *
   * @returns Whether array type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` with a defined `items` and narrows the schema union to the homogeneous array variant; it inspects no other member, so a schema that is malformed beyond that member still passes. A tuple has no `items`, so it is not an array here.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isArray = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IArray =>
    OpenApiTypeCheckerBase.isArray(schema);

  /**
   * Test whether the schema is a tuple type.
   *
   * @param schema Target schema
   *
   * @returns Whether tuple type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` with a defined `prefixItems` and narrows the schema union to the tuple variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isTuple = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.ITuple =>
    OpenApiTypeCheckerBase.isTuple(schema);

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
  export const isObject = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IObject =>
    OpenApiTypeCheckerBase.isObject(schema);

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
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IReference =>
    OpenApiTypeCheckerBase.isReference(schema);

  /**
   * Test whether the schema is an union type.
   *
   * @param schema Target schema
   *
   * @returns Whether union type or not
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `oneOf` and narrows the schema union to the union variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isOneOf = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IOneOf =>
    OpenApiTypeCheckerBase.isOneOf(schema);

  /**
   * Test whether the schema is recursive reference type.
   *
   * Test whether the target schema is a reference type, and test one thing more
   * that the reference is self-recursive or not.
   *
   * @param props Properties for recursive reference test
   *
   * @returns Whether the schema is recursive reference type or not
   *
   * @evidence contracts/common.md#principled-implementation A reference is recursive when the schema it names reaches a reference to the same component again: the traversal visits the target through the components map and counts references to the starting key, with the starting reference being the first, so a count above one means the component refers back to itself, directly or through other components.
   * @evidence contracts/common.md#clear-and-simple-design One wrapper that supplies the emended prefix and calls the shared base traversal, which reuses visit.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The check follows the references in the data and has no list of known recursive types.
   * @evidence contracts/common.md#meaningful-documentation The doc says it tests for a self-recursive reference and documents the properties.
   */
  export const isRecursiveReference = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
  }): boolean =>
    OpenApiTypeCheckerBase.isRecursiveReference({
      prefix: "#/components/schemas/",
      components: props.components,
      schema: props.schema,
    });

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /**
   * Escape from the {@link OpenApi.IJsonSchema.IReference} type.
   *
   * Escape from the {@link OpenApi.IJsonSchema.IReference} type, replacing the
   * every references to the actual schemas. If the escape is successful, the
   * returned schema never contains any {@link OpenApi.IJsonSchema.IReference}
   * type in its structure.
   *
   * If the schema has a recursive reference, the recursive reference would be
   * repeated as much as the `props.recursive` depth. If you've configured the
   * `props.recursive` as `false` or `0`, it would be failed and return an
   * {@link IJsonSchemaTransformError}. Also, if there's a
   * {@link OpenApi.IJsonSchema.IReference} type which cannot find the matched
   * type in the {@link OpenApi.IComponents.schemas}, it would also be failed and
   * return an {@link IJsonSchemaTransformError} either.
   *
   * @param props Properties for escaping
   *
   * @returns Escaped schema, or error with reason
   *
   * @evidence contracts/common.md#principled-implementation References are replaced by their targets, with the description of the reference cascaded from its namespace ancestors; a reference seen again is expanded again until the visit count passes `recursive`, and with `false` or `0` a recursive reference fails. A reference whose key cannot be read or whose component is missing fails with a reason naming the accessor, and a union branch that was cut by the depth limit is dropped. The error names the real operation, `OpenApiTypeChecker.escape`.
   * @evidence contracts/common.md#clear-and-simple-design A wrapper that supplies the prefix and method name; the recursion is in the shared base with a per-path visit map.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Depth is an explicit parameter and failure is reported, instead of an arbitrary built-in cap or a silent empty schema.
   * @evidence contracts/common.md#meaningful-documentation The doc explains the escape rule, the recursion depth, the two failure causes and the properties.
   */
  export const escape = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    recursive: false | number;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IJsonSchemaTransformError> =>
    OpenApiTypeCheckerBase.escape({
      ...props,
      prefix: "#/components/schemas/",
      method: "OpenApiTypeChecker.escape",
    });

  /**
   * Resolves a root schema reference to its terminal schema.
   *
   * Follows component aliases and returns the original terminal object. Unlike
   * {@link escape}, it leaves references inside that object's properties, items
   * and union branches untouched. A non-reference input is unchanged.
   *
   * Missing or malformed local references and cyclic alias chains return an
   * {@link IJsonSchemaTransformError}. Component lookups require own entries;
   * exceptions from component accessors propagate to the caller.
   *
   * @param props Properties of unreference
   *
   * @returns Unreferenced schema
   *
   * @evidence contracts/common.md#principled-implementation The private root-only traversal follows aliases through the shared RFC 6901 component reader and own-entry dictionary lookup. A per-call visited-key set detects all alias cycles; a terminal non-reference is returned by identity without descending into its fields. Missing or malformed targets retain structured diagnostic context.
   * @evidence contracts/common.md#clear-and-simple-design The public wrapper supplies the OpenAPI prefix and method identity to the shared internal owner. Its iterative chain traversal separates root alias resolution from recursive schema escaping and uses no call stack proportional to alias depth; temporary visited state is bounded by keys reached in this call and released on return.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Every component key follows the same decoded-reference and own-property rules, with no fixture-name exception, foreign method replacement or fabricated empty-schema fallback. Cycles are diagnosed from repeated chain keys rather than an arbitrary depth cap, and exotic lookup errors are not swallowed.
   * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes root aliases from nested references, specifies terminal identity and unchanged inputs, and documents structured missing/cycle errors and propagated component accessor exceptions. These facts explain the public operation's use without claiming a behavioral verification result.
   */
  export const unreference = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IJsonSchemaTransformError> =>
    OpenApiTypeCheckerBase.unreference({
      ...props,
      prefix: "#/components/schemas/",
      method: "OpenApiTypeChecker.unreference",
    });

  /**
   * Visit every nested schemas.
   *
   * Visit every nested schemas of the target, and apply the `props.closure`
   * function.
   *
   * Here is the list of occurring nested visitings:
   *
   * - {@link OpenApi.IJsonSchema.IOneOf.oneOf}
   * - {@link OpenApi.IJsonSchema.IReference}
   * - {@link OpenApi.IJsonSchema.IObject.properties}
   * - {@link OpenApi.IJsonSchema.IObject.additionalProperties}
   * - {@link OpenApi.IJsonSchema.IArray.items}
   * - {@link OpenApi.IJsonSchema.ITuple.prefixItems}
   * - {@link OpenApi.IJsonSchema.ITuple.additionalItems}
   *
   * @param props Properties for visiting
   *
   * @evidence contracts/common.md#principled-implementation The closure is called for the schema and then for each nested schema in union, object, array and tuple positions, and for the target of a reference once per component, with the accessor path of each; the visited-key set stops cycles, so every reachable schema is seen once through its first reference.
   * @evidence contracts/common.md#clear-and-simple-design A wrapper over the shared traversal that supplies the emended prefix.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Traversal follows the schema structure and calls the supplied function; nothing is mutated here.
   * @evidence contracts/common.md#meaningful-documentation The doc lists every nested position that is visited and documents the properties.
   */
  export const visit = (props: {
    closure: (schema: OpenApi.IJsonSchema, accessor: string) => void;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): void =>
    OpenApiTypeCheckerBase.visit({
      ...props,
      prefix: "#/components/schemas/",
    });

  /**
   * Test whether the `x` schema covers the `y` schema.
   *
   * @param props Properties for testing
   *
   * @returns Whether the `x` schema covers the `y` schema
   *
   * @evidence contracts/common.md#principled-implementation The comparison is structural subsumption: unknown covers everything, atomics compare their constraints, arrays and objects compare recursively, and a union is covered when each branch of the covered schema is covered by some branch of the covering one, with a visited table that assumes coverage for a pair under comparison so recursive components terminate. It decides coverage of the declared constraints and is not a general JSON Schema subset test.
   * @evidence contracts/common.md#clear-and-simple-design A wrapper that supplies the emended prefix; the algorithm is in the shared base.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The rules follow the declared constraint semantics, for example number covering integer, and no consumer case is hardcoded.
   * @evidence contracts/common.md#meaningful-documentation The doc states the question the function answers and the properties; the rules are in the shared base.
   */
  export const covers = (props: {
    components: OpenApi.IComponents;
    x: OpenApi.IJsonSchema;
    y: OpenApi.IJsonSchema;
  }): boolean =>
    OpenApiTypeCheckerBase.covers({
      prefix: "#/components/schemas/",
      components: props.components,
      x: props.x,
      y: props.y,
    });
}
