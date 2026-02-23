import { OpenApi } from "../openapi/OpenApi";
import { OpenApiV3 } from "../openapi/OpenApiV3";

<<<<<<< HEAD
=======
/**
 * JSON Schema application representing TypeScript functions.
 *
 * `IJsonSchemaApplication` represents a collection of TypeScript class methods
 * or functions converted to JSON Schema format. Generated at compile time by
 * `typia.json.application<App>()`, this is primarily used for OpenAPI document
 * generation and as an intermediate format for LLM function calling schemas.
 *
 * Unlike {@link ILlmApplication} which is optimized for LLM consumption, this
 * interface preserves full JSON Schema expressiveness including features that
 * some LLM providers don't support (tuples, additionalProperties, etc.).
 *
 * The application contains:
 *
 * - {@link functions}: Array of function metadata with parameter/return schemas
 * - {@link components}: Shared schema definitions for `$ref` references
 * - {@link __application}: Phantom property for type inference
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Version OpenAPI version ("3.0" or "3.1")
 * @template App Source class/interface type for type preservation
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export interface IJsonSchemaApplication<
  Version extends "3.0" | "3.1" = "3.1",
  App extends any = object,
> {
<<<<<<< HEAD
  version: Version;
  components: IJsonSchemaApplication.IComponents<
    IJsonSchemaApplication.Schema<Version>
  >;
  functions: IJsonSchemaApplication.IFunction<
    IJsonSchemaApplication.Schema<Version>
  >[];
  __application?: App | undefined;
}
export namespace IJsonSchemaApplication {
=======
  /**
   * OpenAPI specification version.
   *
   * Determines the JSON Schema dialect used for type definitions. Use `"3.1"`
   * for modern JSON Schema features, `"3.0"` for broader compatibility with
   * older OpenAPI consumers.
   */
  version: Version;

  /**
   * Shared schema definitions for `$ref` references.
   *
   * Contains named schemas that can be referenced by functions to avoid
   * duplication and enable recursive type definitions.
   */
  components: IJsonSchemaApplication.IComponents<
    IJsonSchemaApplication.Schema<Version>
  >;

  /**
   * Array of function schemas.
   *
   * Each function includes parameter schemas, return type schema, and metadata
   * extracted from JSDoc comments. Functions are derived from public methods of
   * the source class/interface.
   */
  functions: IJsonSchemaApplication.IFunction<
    IJsonSchemaApplication.Schema<Version>
  >[];

  /**
   * Phantom property for TypeScript generic type preservation.
   *
   * This property exists only in the type system to preserve the `App` generic
   * parameter at compile time. It is always `undefined` at runtime and should
   * not be accessed or used in application code.
   *
   * Enables type inference to recover the original application type from an
   * `IJsonSchemaApplication` instance.
   */
  __application?: App | undefined;
}
export namespace IJsonSchemaApplication {
  /**
   * Schema type selector based on OpenAPI version.
   *
   * Returns the appropriate JSON schema type for the specified OpenAPI version.
   *
   * - `"3.1"` → {@link OpenApi.IJsonSchema} (emended OpenAPI v3.1)
   * - `"3.0"` → {@link OpenApiV3.IJsonSchema} (OpenAPI v3.0)
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type Schema<Version extends "3.0" | "3.1"> = Version extends "3.1"
    ? OpenApi.IJsonSchema
    : OpenApiV3.IJsonSchema;

<<<<<<< HEAD
=======
  /**
   * Shared schema component definitions.
   *
   * Contains named schema definitions that can be referenced via `$ref`
   * throughout the application's function schemas. Reduces duplication and
   * enables recursive type definitions.
   *
   * @template Schema JSON schema type based on OpenAPI version
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export interface IComponents<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
<<<<<<< HEAD
    schemas?: Record<string, Schema>;
  }

=======
    /**
     * Named schema definitions for reference.
     *
     * Keys are type names, values are their JSON Schema definitions. Reference
     * these using `$ref: "#/components/schemas/TypeName"`.
     */
    schemas?: Record<string, Schema>;
  }

  /**
   * Complete metadata for a single function.
   *
   * Contains all information needed to describe a function in JSON Schema
   * format, including parameters, return type, and documentation extracted from
   * JSDoc comments.
   *
   * @template Schema JSON schema type based on OpenAPI version
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export interface IFunction<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
<<<<<<< HEAD
    async: boolean;
    name: string;
    parameters: IParameter<Schema>[];
    output: IOutput<Schema> | undefined;
    summary?: string | undefined;
    description?: string | undefined;
    deprecated?: boolean;
    tags?: string[];
  }

=======
    /**
     * Whether the function is asynchronous.
     *
     * `true` if the function returns a Promise, `false` for synchronous
     * functions. Useful for runtime execution handling.
     */
    async: boolean;

    /**
     * Function name identifier.
     *
     * The name used to call this function. Derived from the method name in the
     * source class/interface.
     */
    name: string;

    /**
     * Array of function parameters.
     *
     * Ordered list of parameters with their names, types, and documentation.
     * Parameters preserve their declaration order.
     */
    parameters: IParameter<Schema>[];

    /**
     * Return type information.
     *
     * Contains the return type schema and documentation. `undefined` when the
     * function returns `void` or has no return type annotation.
     */
    output: IOutput<Schema> | undefined;

    /**
     * Brief summary of the function.
     *
     * Short one-line description extracted from the first line of JSDoc
     * comment. Intended for quick reference in documentation.
     */
    summary?: string | undefined;

    /**
     * Full function description.
     *
     * Complete documentation extracted from JSDoc comment body. May include
     * markdown formatting, examples, and detailed explanations.
     */
    description?: string | undefined;

    /**
     * Whether the function is deprecated.
     *
     * Set from the `@deprecated` JSDoc tag. Indicates the function should no
     * longer be used and may be removed in future versions.
     */
    deprecated?: boolean;

    /**
     * Category tags for organization.
     *
     * Extracted from `@tag` JSDoc annotations. Useful for grouping related
     * functions in documentation or filtering.
     */
    tags?: string[];
  }

  /**
   * Metadata for a single function parameter.
   *
   * Describes a function parameter including its name, type schema, whether
   * it's required, and any JSDoc documentation.
   *
   * @template Schema JSON schema type based on OpenAPI version
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export interface IParameter<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
<<<<<<< HEAD
    name: string;
    required: boolean;
    schema: Schema;
    title?: string | undefined;
    description?: string | undefined;
  }

=======
    /**
     * Parameter name.
     *
     * The identifier used in the function signature. Must match the actual
     * parameter name in the source code.
     */
    name: string;

    /**
     * Whether the parameter is required.
     *
     * `true` if the parameter must be provided, `false` if it has a default
     * value or is explicitly optional.
     */
    required: boolean;

    /**
     * JSON Schema for the parameter type.
     *
     * Complete schema definition describing the expected parameter type,
     * including constraints and nested structures.
     */
    schema: Schema;

    /**
     * Parameter title for documentation.
     *
     * Brief name for the parameter, typically extracted from `@param` tag title
     * in JSDoc.
     */
    title?: string | undefined;

    /**
     * Parameter description from documentation.
     *
     * Full description of the parameter's purpose and usage, extracted from the
     * `@param` JSDoc tag.
     */
    description?: string | undefined;
  }

  /**
   * Metadata for function return type.
   *
   * Describes the return type of a function including its schema, whether a
   * value is always returned, and documentation.
   *
   * @template Schema JSON schema type based on OpenAPI version
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export interface IOutput<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
<<<<<<< HEAD
    schema: Schema;
    required: boolean;
=======
    /**
     * JSON Schema for the return type.
     *
     * Complete schema definition describing the return value type, including
     * constraints and nested structures.
     */
    schema: Schema;

    /**
     * Whether a value is always returned.
     *
     * `true` if the function always returns a value, `false` if it may return
     * `undefined` or has a void return type.
     */
    required: boolean;

    /**
     * Return value description from documentation.
     *
     * Explanation of what the function returns, extracted from the `@returns`
     * or `@return` JSDoc tag.
     */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    description?: string | undefined;
  }
}
