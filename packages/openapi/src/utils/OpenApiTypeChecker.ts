import { OpenApi } from "../OpenApi";
import { IOpenApiSchemaError } from "../structures/IOpenApiSchemaError";
import { IResult } from "../structures/IResult";
import { OpenApiTypeCheckerBase } from "./internal/OpenApiTypeCheckerBase";

/**
 * Type checker of OpenAPI type schema.
 *
 * `OpenApiTypeChecker` is a type checker of {@link OpenApi.IJsonSchema}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApiTypeChecker {
  /* -----------------------------------------------------------
    TYPE CHECKERS
  ----------------------------------------------------------- */
  /**
   * Test whether the schema is a nul type.
   *
   * @param schema Target schema
   * @returns Whether null type or not
   */
  export const isNull = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INull =>
    OpenApiTypeCheckerBase.isNull(schema);

  /**
   * Test whether the schema is an unknown type.
   *
   * @param schema Target schema
   * @returns Whether unknown type or not
   */
  export const isUnknown = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IUnknown =>
    OpenApiTypeCheckerBase.isUnknown(schema);

  /**
   * Test whether the schema is a constant type.
   *
   * @param schema Target schema
   * @returns Whether constant type or not
   */
  export const isConstant = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IConstant =>
    OpenApiTypeCheckerBase.isConstant(schema);

  /**
   * Test whether the schema is a boolean type.
   *
   * @param schema Target schema
   * @returns Whether boolean type or not
   */
  export const isBoolean = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IBoolean =>
    OpenApiTypeCheckerBase.isBoolean(schema);

  /**
   * Test whether the schema is an integer type.
   *
   * @param schema Target schema
   * @returns Whether integer type or not
   */
  export const isInteger = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IInteger =>
    OpenApiTypeCheckerBase.isInteger(schema);

  /**
   * Test whether the schema is a number type.
   *
   * @param schema Target schema
   * @returns Whether number type or not
   */
  export const isNumber = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.INumber =>
    OpenApiTypeCheckerBase.isNumber(schema);

  /**
   * Test whether the schema is a string type.
   *
   * @param schema Target schema
   * @returns Whether string type or not
   */
  export const isString = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IString =>
    OpenApiTypeCheckerBase.isString(schema);

  /**
   * Test whether the schema is an array type.
   *
   * @param schema Target schema
   * @returns Whether array type or not
   */
  export const isArray = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IArray =>
    OpenApiTypeCheckerBase.isArray(schema);

  /**
   * Test whether the schema is a tuple type.
   *
   * @param schema Target schema
   * @returns Whether tuple type or not
   */
  export const isTuple = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.ITuple =>
    OpenApiTypeCheckerBase.isTuple(schema);

  /**
   * Test whether the schema is an object type.
   *
   * @param schema Target schema
   * @returns Whether object type or not
   */
  export const isObject = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IObject =>
    OpenApiTypeCheckerBase.isObject(schema);

  /**
   * Test whether the schema is a reference type.
   *
   * @param schema Target schema
   * @returns Whether reference type or not
   */
  export const isReference = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IReference =>
    OpenApiTypeCheckerBase.isReference(schema);

  /**
   * Test whether the schema is an union type.
   *
   * @param schema Target schema
   * @returns Whether union type or not
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
   * @returns Whether the schema is recursive reference type or not
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
   * {@link IOpenApiSchemaError}. Also, if there's a
   * {@link OpenApi.IJsonSchema.IReference} type which cannot find the matched
   * type in the {@link OpenApi.IComponents.schemas}, it would also be failed and
   * return an {@link IOpenApiSchemaError} either.
   *
   * @param props Properties for escaping
   * @returns Escaped schema, or error with reason
   */
  export const escape = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    recursive: false | number;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IOpenApiSchemaError> =>
    OpenApiTypeCheckerBase.escape({
      ...props,
      prefix: "#/components/schemas/",
      method: "OpenApiTypeChecker.method",
    });

  /**
   * Unreference the schema.
   *
   * Unreference the schema, replacing the {@link OpenApi.IJsonSchema.IReference}
   * type to the actual schema. Different with {@link escape} is, the
   * `unreference` function does not resolve every references in the schema, but
   * resolve only one time.
   *
   * If there's a {@link OpenApi.IJsonSchema.IReference} type which cannot find
   * the matched type in the {@link OpenApi.IComponents.schemas}, and you've
   * called this `unreference()` function with the reference, it would also be
   * failed and return an {@link IOpenApiSchemaError} value.
   *
   * @param props Properties of unreference
   * @returns Unreferenced schema
   */
  export const unreference = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema;
    accessor?: string;
    refAccessor?: string;
  }): IResult<OpenApi.IJsonSchema, IOpenApiSchemaError> =>
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
   * @returns Whether the `x` schema covers the `y` schema
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
