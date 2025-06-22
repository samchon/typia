import { OpenApi, OpenApiV3 } from "@samchon/openapi";

/**
 * Single unit of JSON schema representation.
 *
 * `IJsonSchemaUnit` represents a self-contained JSON schema unit that encapsulates
 * a single schema definition along with its associated reusable components. This is
 * typically used when generating a JSON schema for a single TypeScript type, as
 * opposed to a collection of multiple types.
 *
 * Unlike {@link IJsonSchemaCollection} which handles multiple schemas, `IJsonSchemaUnit`
 * focuses on representing a single schema with its dependencies. This makes it ideal
 * for scenarios where you need to work with individual type definitions or when
 * integrating with systems that expect single schema documents.
 *
 * The unit contains:
 * - A single JSON schema definition for the specified TypeScript type
 * - All necessary reusable components that the schema may reference
 * - Version-specific formatting for either OpenAPI v3.0 or v3.1 compatibility
 * - Optional type metadata for compile-time type safety
 *
 * Key differences from collection:
 * - Contains only one schema instead of an array of schemas
 * - More lightweight for single-type use cases
 * - Simpler structure for direct schema consumption
 * - Still maintains full component reference support
 *
 * @template Version The OpenAPI specification version to target ("3.0" or "3.1").
 *                   Defaults to "3.1" for enhanced JSON Schema Draft 2020-12 compatibility.
 *                   This determines the schema format, validation capabilities, and
 *                   available features like tuple support and null type handling.
 * @template Type    The original TypeScript type that was analyzed to generate this
 *                   JSON schema unit. This provides compile-time type safety and
 *                   enables IDEs to provide better intellisense and validation.
 *
 * @example
 * ```typescript
 * interface User {
 *   id: string;
 *   name: string;
 *   email?: string;
 * }
 *
 * // Generate a single schema unit for OpenAPI v3.1 (default)
 * const userSchema = typia.json.schema<User>();
 * // Type: IJsonSchemaUnit<"3.1", User>
 *
 * // Generate a single schema unit for OpenAPI v3.0 (Swagger compatibility)
 * const swaggerUserSchema = typia.json.schema<User, "3.0">();
 * // Type: IJsonSchemaUnit<"3.0", User>
 * ```
 *
 * @see {@link IJsonSchemaCollection} For handling multiple schemas at once
 * @author Jeongho Nam - https://github.com/samchon
 */
export type IJsonSchemaUnit<
  Version extends "3.0" | "3.1" = "3.1",
  Type = unknown,
> = Version extends "3.0"
  ? IJsonSchemaUnit.IV3_0<Type>
  : IJsonSchemaUnit.IV3_1<Type>;

export namespace IJsonSchemaUnit {
  /**
   * JSON Schema unit formatted for OpenAPI v3.0 specification.
   *
   * This interface represents a single JSON schema unit that complies with
   * OpenAPI v3.0 standards. It contains one schema definition along with
   * any reusable components that the schema references, formatted according
   * to OpenAPI v3.0 constraints and limitations.
   *
   * OpenAPI v3.0 characteristics affecting this unit:
   * - Schema follows OpenAPI v3.0 JSON Schema subset
   * - Limited support for advanced JSON Schema features
   * - Uses nullable property for optional null values
   * - Cannot natively express tuple types or pattern properties
   * - Based on JSON Schema Draft 4 with OpenAPI-specific extensions
   *
   * Use cases for v3.0:
   * - Integration with legacy Swagger tooling
   * - Compatibility with older OpenAPI implementations
   * - Systems that specifically require OpenAPI v3.0 format
   * - Code generation tools that expect v3.0 schemas
   *
   * @template Type The original TypeScript type represented by this schema unit.
   *                Provides compile-time type information and enables type-safe
   *                operations on the schema.
   */
  export interface IV3_0<Type> {
    /**
     * OpenAPI specification version identifier.
     *
     * Always set to "3.0" to indicate this schema unit uses OpenAPI v3.0
     * format and adheres to its specific constraints and limitations.
     */
    version: "3.0";

    /**
     * The primary JSON schema definition.
     *
     * Contains the main JSON schema that represents the TypeScript type specified
     * in the `Type` template parameter. This schema follows OpenAPI v3.0 format
     * and may contain references to reusable components defined in the
     * {@link components} property.
     *
     * The schema structure includes:
     * - Type definitions following OpenAPI v3.0 constraints
     * - Property definitions with v3.0-compatible validation rules
     * - References to shared components using $ref syntax
     * - Nullable properties for optional fields that can be null
     *
     * Example schema reference: `{ "$ref": "#/components/schemas/NestedType" }`
     */
    schema: OpenApiV3.IJsonSchema;

    /**
     * Reusable schema components for OpenAPI v3.0.
     *
     * Contains all reusable schema definitions and components that may be
     * referenced by the main schema. This enables schema modularity and
     * prevents duplication when the same types are used in multiple places
     * within the schema definition.
     *
     * Component categories include:
     * - schemas: Named type definitions for complex objects, arrays, and unions
     * - securitySchemes: Authentication and authorization definitions
     * - parameters: Reusable parameter specifications
     * - requestBodies: Reusable request body definitions
     * - responses: Reusable response specifications
     * - headers: Reusable header definitions
     * - examples: Reusable example values
     *
     * All components follow OpenAPI v3.0 format restrictions and capabilities.
     */
    components: OpenApiV3.IComponents;

    /**
     * Type metadata for compile-time type safety.
     *
     * This optional property maintains a reference to the original TypeScript
     * type that was used to generate this schema unit. It provides compile-time
     * type information without affecting the runtime JSON representation.
     *
     * Benefits of type metadata:
     * - Enables type-safe schema validation and usage
     * - Provides IDE intellisense and autocompletion
     * - Allows compile-time checking of schema operations
     * - Maintains traceability to original TypeScript definitions
     *
     * The property is intentionally marked as optional and undefined to ensure
     * it doesn't appear in serialized JSON output while preserving type information
     * at compile time.
     */
    __type?: Type | undefined;
  }

  /**
   * JSON Schema unit formatted for OpenAPI v3.1 specification.
   *
   * This interface represents a single JSON schema unit that takes advantage
   * of OpenAPI v3.1's enhanced capabilities and improved JSON Schema compatibility.
   * It provides a more feature-rich and accurate representation of TypeScript
   * types compared to the v3.0 format.
   *
   * OpenAPI v3.1 advantages for this unit:
   * - Full JSON Schema Draft 2020-12 compatibility
   * - Native tuple type support using prefixItems
   * - Proper null type handling via union types
   * - Pattern properties for dynamic object keys
   * - Enhanced const, enum, and validation capabilities
   * - Better support for complex nested structures
   *
   * Use cases for v3.1:
   * - Modern OpenAPI implementations and tooling
   * - Systems requiring accurate TypeScript type representation
   * - Applications needing advanced JSON Schema features
   * - New projects without legacy compatibility requirements
   *
   * @template Type The original TypeScript type represented by this schema unit.
   *                Enables compile-time type safety and provides enhanced
   *                development experience with better IDE support.
   */
  export interface IV3_1<Type> {
    /**
     * OpenAPI specification version identifier.
     *
     * Always set to "3.1" to indicate this schema unit uses OpenAPI v3.1
     * format with enhanced JSON Schema compatibility and modern features.
     */
    version: "3.1";

    /**
     * The primary JSON schema definition with v3.1 enhancements.
     *
     * Contains the main JSON schema that accurately represents the TypeScript
     * type using OpenAPI v3.1's enhanced capabilities. This schema can express
     * complex TypeScript constructs that were not possible or accurate in v3.0.
     *
     * Enhanced schema features include:
     * - Tuple types using prefixItems for exact array structure
     * - Union types with proper null handling via oneOf
     * - Const values for literal types
     * - Pattern properties for Record<string, T> types
     * - Advanced validation constraints and metadata
     * - Recursive type definitions with proper $ref handling
     *
     * The schema follows the emended OpenAPI v3.1 format used by typia,
     * which removes ambiguous expressions while maintaining full compatibility.
     */
    schema: OpenApi.IJsonSchema;

    /**
     * Reusable schema components for OpenAPI v3.1.
     *
     * Contains reusable schema definitions and components that leverage
     * OpenAPI v3.1's enhanced capabilities. These components provide better
     * type representation and more accurate schema definitions compared to v3.0.
     *
     * Enhanced component features:
     * - schemas: More accurate type definitions with v3.1 JSON Schema features
     * - securitySchemes: Enhanced authentication scheme definitions
     * - Better support for complex nested references
     * - Improved handling of recursive and circular type dependencies
     *
     * The components structure follows the emended OpenAPI v3.1 specification
     * that simplifies certain patterns while maintaining full expressiveness.
     */
    components: OpenApi.IComponents;

    /**
     * Type metadata for enhanced compile-time type safety.
     *
     * This optional property preserves the original TypeScript type information
     * for compile-time type checking and enhanced development experience. It
     * enables type-safe operations and better IDE support without affecting
     * the runtime JSON schema representation.
     *
     * Enhanced type safety features:
     * - Strong typing connection to original TypeScript definitions
     * - Better IDE intellisense and error detection
     * - Compile-time validation of schema usage patterns
     * - Type-safe integration with validation and serialization libraries
     * - Enhanced debugging and development experience
     *
     * The property remains optional and undefined to maintain clean JSON
     * serialization while preserving valuable compile-time information.
     */
    __type?: Type | undefined;
  }
}
