import type { OpenApi, OpenApiV3 } from "@samchon/openapi";

/**
 * Collection of JSON schemas with OpenAPI specification support.
 *
 * `IJsonSchemaCollection` represents a comprehensive collection of JSON schemas
 * that can be generated from TypeScript types using the `typia.json.schemas()`
 * function. This interface supports both OpenAPI v3.0 and v3.1 specifications,
 * with the ability to automatically generate appropriate schema definitions
 * based on the specified version.
 *
 * The collection includes:
 *
 * - Generated JSON schemas array containing schema definitions for the specified
 *   types
 * - Reusable components that can be referenced across different schemas
 * - Version-specific formatting that adheres to either OpenAPI v3.0 or v3.1
 *   standards
 *
 * Key differences between versions:
 *
 * - OpenAPI v3.0: Uses {@link OpenApiV3.IJsonSchema} format with limited tuple
 *   support
 * - OpenAPI v3.1: Uses {@link OpenApi.IJsonSchema} format with full JSON Schema
 *   Draft 2020-12 compatibility
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   // Generate schemas for OpenAPI v3.1 (default)
 *   const schemas = typia.json.schemas<[User, Product]>();
 *   // Type: IJsonSchemaCollection<"3.1", [User, Product]>
 *
 *   // Generate schemas for OpenAPI v3.0 (Swagger compatibility)
 *   const swaggerSchemas = typia.json.schemas<[User, Product], "3.0">();
 *   // Type: IJsonSchemaCollection<"3.0", [User, Product]>
 *   ```;
 *
 * @template Version The OpenAPI specification version to target ("3.0" or
 *   "3.1"). Defaults to "3.1" for enhanced JSON Schema compatibility.
 * @template Types Array of original TypeScript types that were analyzed to
 *   generate the JSON schemas. This provides type safety and traceability back
 *   to the source TypeScript definitions.
 */
export type IJsonSchemaCollection<
  Version extends "3.0" | "3.1" = "3.1",
  Types = unknown[],
> = Version extends "3.0"
  ? IJsonSchemaCollection.IV3_0<Types>
  : IJsonSchemaCollection.IV3_1<Types>;

export namespace IJsonSchemaCollection {
  /**
   * JSON Schema collection formatted for OpenAPI v3.0 specification.
   *
   * This interface represents a collection of JSON schemas that comply with
   * OpenAPI v3.0 standards, which are compatible with Swagger tools and legacy
   * OpenAPI implementations. OpenAPI v3.0 has some limitations compared to
   * v3.1, particularly around tuple types and pattern properties.
   *
   * Key characteristics of v3.0:
   *
   * - Cannot express tuple types natively (falls back to array representations)
   * - Cannot express pattern properties in object schemas
   * - Uses nullable property instead of union with null type
   * - Limited JSON Schema Draft compatibility (based on Draft 4)
   *
   * @template Types Array of original TypeScript types used to generate the
   *   schemas. This provides compile-time type information about what types
   *   were analyzed during schema generation.
   */
  export interface IV3_0<Types = unknown[]> {
    /**
     * OpenAPI specification version identifier.
     *
     * Always set to "3.0" to indicate this collection uses OpenAPI v3.0 schema
     * format and constraints.
     */
    version: "3.0";

    /**
     * Array of generated JSON schemas.
     *
     * Contains the actual JSON schema definitions generated from the input
     * TypeScript types. Each schema in this array corresponds to one of the
     * types specified in the `Types` template parameter. The schemas follow
     * OpenAPI v3.0 format and may contain references to components defined in
     * the {@link components} property.
     *
     * Schema references typically use the format: `{ "$ref":
     * "#/components/schemas/TypeName" }`
     */
    schemas: OpenApiV3.IJsonSchema[];

    /**
     * Reusable schema components for OpenAPI v3.0.
     *
     * Contains reusable schema definitions, security schemes, and other
     * components that can be referenced from the main schemas. This follows the
     * OpenAPI v3.0 components structure and enables schema reuse and
     * modularity.
     *
     * Components include:
     *
     * - Schemas: Named type definitions that can be referenced via $ref
     * - SecuritySchemes: Authentication and authorization schemes
     * - Parameters: Reusable parameter definitions
     * - RequestBodies: Reusable request body definitions
     * - Responses: Reusable response definitions
     * - Headers: Reusable header definitions
     * - Examples: Reusable example definitions
     */
    components: OpenApiV3.IComponents;

    /**
     * Type metadata for compile-time type tracking.
     *
     * This optional property stores the original TypeScript types that were
     * used to generate the JSON schemas. It's primarily used for type safety
     * and doesn't affect runtime behavior. The property is marked as optional
     * and undefined to prevent it from appearing in serialized JSON output.
     *
     * This enables:
     *
     * - Compile-time type checking against the original types
     * - IDE intellisense and autocompletion
     * - Type-safe schema validation and usage
     */
    __types?: Types | undefined;
  }

  /**
   * JSON Schema collection formatted for OpenAPI v3.1 specification.
   *
   * This interface represents a collection of JSON schemas that comply with
   * OpenAPI v3.1 standards, which provide enhanced JSON Schema compatibility
   * and support for modern JSON Schema features. OpenAPI v3.1 is based on JSON
   * Schema Draft 2020-12 and offers significant improvements over v3.0.
   *
   * Key advantages of v3.1:
   *
   * - Full tuple type support with prefixItems
   * - Pattern properties support for dynamic object keys
   * - Proper null type handling via union types
   * - Enhanced JSON Schema Draft 2020-12 compatibility
   * - Better const, enum, and validation support
   *
   * @template Types Array of original TypeScript types used to generate the
   *   schemas. This provides compile-time type information about what types
   *   were analyzed during schema generation.
   */
  export interface IV3_1<Types = unknown[]> {
    /**
     * OpenAPI specification version identifier.
     *
     * Always set to "3.1" to indicate this collection uses OpenAPI v3.1 schema
     * format with enhanced JSON Schema compatibility.
     */
    version: "3.1";

    /**
     * Reusable schema components for OpenAPI v3.1.
     *
     * Contains reusable schema definitions and other components following the
     * OpenAPI v3.1 specification. This structure is similar to v3.0 but
     * supports enhanced JSON Schema features and improved type definitions.
     *
     * Components include:
     *
     * - Schemas: Named type definitions with enhanced JSON Schema support
     * - SecuritySchemes: Authentication and authorization schemes
     *
     * The emended OpenAPI v3.1 format used here removes ambiguous expressions
     * and standardizes certain patterns for better tooling compatibility.
     */
    components: OpenApi.IComponents;

    /**
     * Array of generated JSON schemas with v3.1 enhancements.
     *
     * Contains JSON schema definitions that take advantage of OpenAPI v3.1's
     * enhanced capabilities. These schemas can express more complex TypeScript
     * types accurately, including:
     *
     * - Tuple types using prefixItems
     * - Union types with proper null handling
     * - Complex nested object structures
     * - Pattern-based property definitions
     *
     * Each schema corresponds to one of the input TypeScript types and may
     * reference components defined in the {@link components} property.
     */
    schemas: OpenApi.IJsonSchema[];

    /**
     * Type metadata for compile-time type tracking.
     *
     * This optional property stores the original TypeScript types that were
     * used to generate the JSON schemas. It provides compile-time type safety
     * and enables better development experience without affecting runtime
     * behavior.
     *
     * Benefits include:
     *
     * - Strong typing connection to original TypeScript definitions
     * - Enhanced IDE support and autocompletion
     * - Compile-time validation of schema usage
     * - Type-safe integration with validation libraries
     */
    __types?: Types | undefined;
  }
}
