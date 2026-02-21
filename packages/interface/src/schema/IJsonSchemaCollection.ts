import { OpenApi } from "../openapi/OpenApi";
import { OpenApiV3 } from "../openapi/OpenApiV3";

/**
 * Collection of JSON schemas generated from multiple TypeScript types.
 *
 * `IJsonSchemaCollection` holds JSON schemas for multiple TypeScript types
 * generated at compile time by `typia.json.schemas<[T1, T2, ...]>()`. The
 * schemas share a common components pool to avoid duplication when types
 * reference each other.
 *
 * This is useful when you need schemas for multiple related types and want to
 * share component definitions between them. For single types, use
 * {@link IJsonSchemaUnit} instead. For function schemas, see
 * {@link IJsonSchemaApplication}.
 *
 * The collection contains:
 *
 * - {@link IV3_1.schemas | schemas}: Array of schemas, one per input type
 * - {@link IV3_1.components | components}: Shared `$ref` definitions
 * - {@link IV3_1.__types | __types}: Phantom property for type inference
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Version OpenAPI version ("3.0" or "3.1")
 * @template Types Tuple of original TypeScript types
 */
export type IJsonSchemaCollection<
  Version extends "3.0" | "3.1" = "3.1",
  Types = unknown[],
> = Version extends "3.0"
  ? IJsonSchemaCollection.IV3_0<Types>
  : IJsonSchemaCollection.IV3_1<Types>;

export namespace IJsonSchemaCollection {
  /**
   * JSON Schema collection for OpenAPI v3.0 specification.
   *
   * Uses OpenAPI v3.0 compatible JSON Schema format. In v3.0, nullable types
   * are expressed with `nullable: true` rather than v3.1's `type` arrays.
   *
   * @template Types Tuple of original TypeScript types for phantom type
   *   preservation
   */
  export interface IV3_0<Types = unknown[]> {
    /**
     * OpenAPI specification version.
     *
     * Always `"3.0"` for this variant. Use this discriminator to determine
     * which schema format is in use.
     */
    version: "3.0";

    /**
     * Generated JSON schemas, one per input type.
     *
     * Array of schemas in the same order as the input type tuple. Each schema
     * may reference definitions in {@link components}.
     */
    schemas: OpenApiV3.IJsonSchema[];

    /**
     * Shared schema definitions for `$ref` references.
     *
     * Contains named schemas used across multiple types in the collection.
     * Reduces duplication when types share common structures.
     */
    components: OpenApiV3.IComponents;

    /**
     * Phantom property for TypeScript generic type preservation.
     *
     * This property exists only in the type system to preserve the `Types`
     * generic parameter. It is always `undefined` at runtime and should not be
     * accessed or used in application code.
     */
    __types?: Types | undefined;
  }

  /**
   * JSON Schema collection for OpenAPI v3.1 specification.
   *
   * Uses OpenAPI v3.1 compatible JSON Schema format. v3.1 aligns more closely
   * with JSON Schema draft 2020-12, supporting features like `type` arrays for
   * nullable types and `const` values.
   *
   * @template Types Tuple of original TypeScript types for phantom type
   *   preservation
   */
  export interface IV3_1<Types = unknown[]> {
    /**
     * OpenAPI specification version.
     *
     * Always `"3.1"` for this variant. Use this discriminator to determine
     * which schema format is in use.
     */
    version: "3.1";

    /**
     * Shared schema definitions for `$ref` references.
     *
     * Contains named schemas used across multiple types in the collection.
     * Reduces duplication when types share common structures.
     */
    components: OpenApi.IComponents;

    /**
     * Generated JSON schemas, one per input type.
     *
     * Array of schemas in the same order as the input type tuple. Each schema
     * may reference definitions in {@link components}.
     */
    schemas: OpenApi.IJsonSchema[];

    /**
     * Phantom property for TypeScript generic type preservation.
     *
     * This property exists only in the type system to preserve the `Types`
     * generic parameter. It is always `undefined` at runtime and should not be
     * accessed or used in application code.
     */
    __types?: Types | undefined;
  }
}
