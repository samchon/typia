import { OpenApi } from "../openapi/OpenApi";
import { OpenApiV3 } from "../openapi/OpenApiV3";

/**
 * JSON Schema application representing TypeScript functions.
 *
 * `IJsonSchemaApplication` represents a collection of TypeScript class methods
 * or functions converted to JSON Schema format. Generated at compile time by
 * `typia.json.application<App>()`, this is primarily used for OpenAPI document
 * generation and as an intermediate format for LLM function calling schemas.
 *
 * This schema description preserves positional parameters and the selected
 * OpenAPI dialect, including tuples and additional properties. It does not
 * provide the execution and validation helpers of {@link ILlmApplication}.
 *
 * The application contains:
 *
 * - {@link functions}: Array of function metadata with parameter/return schemas
 * - {@link components}: Shared schema definitions for `$ref` references
 * - {@link __application}: Phantom property for type inference
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Version OpenAPI version ("3.0" or "3.1")
 * @template App Source class/interface type for type preservation
 *
 * @evidence contracts/common.md#principled-implementation Version chooses the schema dialect used by both components and functions; the optional App phantom preserves static inference without requiring the generated object to contain an executor. This structural type describes schemas, not runtime validation.
 * @evidence contracts/common.md#clear-and-simple-design The application groups its dialect, shared definitions and ordered function descriptions, while the merged namespace owns the reusable nested records and dialect selector.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The type adds no transformation or validation mechanism; the optional phantom does not fabricate a runtime application instance or constrain manually authored objects beyond their declared shape.
 * @evidence contracts/common.md#meaningful-documentation Native prose explains the schema-only purpose, component references and generic preservation. The phantom comment describes producer omission, and nested comments explain inferred outputs and metadata optionality without runtime guarantees.
 */
export interface IJsonSchemaApplication<
  Version extends "3.0" | "3.1" = "3.1",
  App extends any = object,
> {
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
   * The generated application omits this property. Its optional type preserves
   * the `App` generic for inference; use the function schemas for runtime
   * application information.
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
   *
   * @evidence contracts/common.md#principled-implementation The conditional selects emended OpenAPI 3.1 or OpenAPI 3.0 schema types from the declared Version union, preserving the dialect distinction in application members.
   * @evidence contracts/common.md#clear-and-simple-design One selector is reused by both component and function fields rather than duplicating the dialect conditional in each record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This type-level selection does not relabel emitted schema bytes or claim to perform a dialect conversion.
   * @evidence contracts/common.md#meaningful-documentation The native comment names both version branches and their corresponding public schema types.
   */
  export type Schema<Version extends "3.0" | "3.1"> = Version extends "3.1"
    ? OpenApi.IJsonSchema
    : OpenApiV3.IJsonSchema;

  /**
   * Shared schema component definitions.
   *
   * Contains named schema definitions that can be referenced via `$ref`
   * throughout the application's function schemas. Reduces duplication and
   * enables recursive type definitions.
   *
   * @template Schema JSON schema type based on OpenAPI version
   *
   * @evidence contracts/common.md#principled-implementation An optional string-keyed schema dictionary represents named definitions shared by function parameter/output references; the Schema parameter preserves the selected dialect.
   * @evidence contracts/common.md#clear-and-simple-design The components record owns shared definitions, while each parameter or output owns its reference/schema and metadata.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The record does not invent definitions or prove reference resolution; actual schema producers and consumers establish those relationships.
   * @evidence contracts/common.md#meaningful-documentation The native field prose explains named reference targets and the components.schemas reference convention, with the optional dictionary represented in its type.
   */
  export interface IComponents<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
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
   *
   * @evidence contracts/common.md#principled-implementation An ordered parameter list and an optional output schema describe one selected callable signature, with asynchronous metadata and JSDoc-derived labels. Inferred return types are represented independently of annotation presence.
   * @evidence contracts/common.md#clear-and-simple-design Signature structure and documentation stay together in one function record; reusable parameter/output records carry their own schema and presence metadata.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts This description does not execute the function, enumerate all overloads or certify its runtime return behavior.
   * @evidence contracts/common.md#meaningful-documentation Native fields explain callable identity, parameter order, inferred/explicit output schema absence, asynchronous output and documentation metadata; absence is not incorrectly tied to missing annotations.
   */
  export interface IFunction<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
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
     * Contains the inferred or explicitly declared return schema and its
     * documentation. `undefined` when analysis produces no value schema,
     * including a `void` return type.
     */
    output: IOutput<Schema> | undefined;

    /**
     * Brief summary of the function.
     *
     * Optional one-line summary for documentation. The typia application
     * generator stores function JSDoc text in description; this field may be
     * supplied by other schema producers or downstream tooling.
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
   *
   * @evidence contracts/common.md#principled-implementation Name, schema and required metadata identify one positional parameter. Selected question tokens and defaults retain omission even when the local variable type is narrowed, while checker-generated names can identify binding patterns.
   * @evidence contracts/common.md#clear-and-simple-design One record groups parameter identity, schema, presence and optional documentation; its position in IFunction.parameters owns declaration order.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The representation does not evaluate defaults or reconstruct a source binding pattern from its checker name.
   * @evidence contracts/common.md#meaningful-documentation Native comments explain default/optional presence and distinguish source identifiers from checker-generated binding-pattern names, followed by schema and documentation fields.
   */
  export interface IParameter<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
    /**
     * Parameter name.
     *
     * The checker's parameter identifier. Ordinary parameters retain their
     * source name; binding patterns may receive a generated positional name.
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
     * Optional title from a title annotation or the first documentation line
     * when its trimmed text ends with a period. That final period is removed.
     */
    title?: string | undefined;

    /**
     * Parameter description from documentation.
     *
     * Description from parameter documentation or its matching `@param` tag.
     */
    description?: string | undefined;
  }

  /**
   * Metadata for function return type.
   *
   * Describes the analyzed return value schema, its optionality and return
   * documentation. This metadata does not execute the function.
   *
   * @template Schema JSON schema type based on OpenAPI version
   *
   * @evidence contracts/common.md#principled-implementation The schema describes the analyzed return value after asynchronous unwrapping; required records metadata optionality rather than a proof that the implementation always returns at runtime.
   * @evidence contracts/common.md#clear-and-simple-design Return schema, presence metadata and optional return documentation form one output record; IFunction owns the absence of an output schema.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The type does not turn an inferred return type into runtime validation or a control-flow guarantee.
   * @evidence contracts/common.md#meaningful-documentation Native comments describe return metadata and explicitly distinguish optional-value analysis from runtime execution guarantees.
   */
  export interface IOutput<
    Schema extends OpenApi.IJsonSchema | OpenApiV3.IJsonSchema =
      OpenApi.IJsonSchema,
  > {
    /**
     * JSON Schema for the return type.
     *
     * Complete schema definition describing the return value type, including
     * constraints and nested structures.
     */
    schema: Schema;

    /**
     * Whether the analyzed output metadata requires a value.
     *
     * `false` when the metadata permits an absent value. This describes the
     * analyzed type, not a runtime or control-flow guarantee. Functions with no
     * output schema have no IOutput record.
     */
    required: boolean;

    /**
     * Return value description from documentation.
     *
     * Explanation of what the function returns, extracted from the `@returns`
     * or `@return` JSDoc tag.
     */
    description?: string | undefined;
  }
}
