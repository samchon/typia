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
 * - {@link IChatGptSchema}
 * - {@link IClaudeSchema}
 * - {@link IGeminiSchema}
 * - {@link ILlmSchemaV3}
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
 * ```typescript
 * declare module "@samchon/openapi" {
 *   export interface IJsonSchemaAttribute {
 *     /// Placeholder value for frontend application
 *     ///
 *     /// Placeholder ia label shown in the input field as a hint.
 *     /// For example, when an email input field exists, the label
 *     /// value would be "Insert your email address here".
 *     "x-wrtn-placeholder"?: string;
 *   }
 *   export namespace IJsonSchemaAttribute {
 *     export interface IString {
 *       /// Secret key for the schema.
 *       ///
 *       /// `x-wrtn-secret-key` is a property means a secret key
 *       /// that is required for the target API endpoint calling.
 *       /// If the secret key is not filled, the API call would
 *       /// be failed.
 *       "x-wrtn-secret-key"?: string;
 *     }
 *   }
 * }
 * ```
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
