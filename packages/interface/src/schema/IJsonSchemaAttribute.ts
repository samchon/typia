/**
 * Common attributes for JSON schema types.
 *
 * `IJsonSchemaAttribute` is a common interface for all JSON schema types
 * supported in here `@samchon/openapi`. Here is the list of affected JSON
 * schema types in `@samchon/openapi`, and you can extend the interface by
 * declaring module augmentation.
 *
 * - {@link OpenApi.IJsonSchema}
 * - {@link OpenApiV3_1.IJsonSchema}
 * - {@link OpenApiV3.IJsonSchema}
 * - {@link SwaggerV2.IJsonSchema}
 * - {@link ILlmSchema}
 *
 * For example, if you extend the `IJsonSchemaAttribute` interface like below,
 * every JSON schema types in `@samchon/openapi` will have a new custom
 * attribute `x-wrtn-placeholder`.
 *
 * Also, if you augment the nested type like `IJsonSchemaAttribute.IString`, you
 * can add the custom attribute to every string types in the JSON schema. In the
 * below example case, every string types will have a new custom attribute
 * `x-wrtn-secret-key`.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsonSchemaAttribute {
  /** Title of the schema. */
  title?: string;

  /** Detailed description of the schema. */
  description?: string;

  /** Whether the type is deprecated or not. */
  deprecated?: boolean;

  /** Example value. */
  example?: any;

  /** List of example values as key-value pairs. */
  examples?: Record<string, any>;

  /** Whether the property is read-only. */
  readOnly?: boolean;

  /** Whether the property is write-only. */
  writeOnly?: boolean;
}
export namespace IJsonSchemaAttribute {
  /** Common attributes for boolean types. */
  export interface IBoolean extends ISignificant<"boolean"> {}

  /** Common attributes for integer types. */
  export interface IInteger extends ISignificant<"integer"> {}

  /** Common attributes for number types. */
  export interface INumber extends ISignificant<"number"> {}

  /** Common attributes for string types. */
  export interface IString extends ISignificant<"string"> {}

  /** Common attributes for object types. */
  export interface IObject extends ISignificant<"object"> {}

  /** Common attributes for array types. */
  export interface IArray extends ISignificant<"array"> {}

  /** Common attributes for null types. */
  export interface INull extends ISignificant<"null"> {}

  /** Common attributes for unknown types. */
  export interface IUnknown extends IJsonSchemaAttribute {
    /** Type is never be defined. */
    type?: undefined;
  }

  /** Significant attributes that can be applied to the most types. */
  interface ISignificant<Type extends string> extends IJsonSchemaAttribute {
    /** Discriminator value of the type. */
    type: Type;
  }
}
