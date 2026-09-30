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
 *
 * @template Version OpenAPI version ("3.0" or "3.1")
 * @template Types Tuple of original TypeScript types
 *
 * @evidence contracts/common.md#principled-implementation A distributive conditional selects the version-literal variant and its matching OpenApiV3 or normalized OpenApi schema types; Types is carried only by an optional phantom member. A version union therefore remains a union of correlated versioned records.
 * @evidence contracts/common.md#clear-and-simple-design The alias owns dialect selection while the namespace owns the two result shapes. It does not duplicate schema definitions or a runtime converter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The 3.0 and 3.1 literals are supported wire dialects, not fixture exceptions. This type neither validates schemas nor requires a runtime phantom value.
 * @evidence contracts/common.md#meaningful-documentation The native comment explains ordered root schemas, shared components, the generic parameters and adjacent single/multiple/application APIs; member comments identify phantom inference and generator omission.
 */
export type IJsonSchemaCollection<
  Version extends "3.0" | "3.1" = "3.1",
  Types = unknown[],
> = Version extends "3.0"
  ? IJsonSchemaCollection.IV3_0<Types>
  : IJsonSchemaCollection.IV3_1<Types>;

/** Version-specific collections of JSON schemas and their shared definitions. */
export namespace IJsonSchemaCollection {
  /**
   * JSON Schema collection for OpenAPI v3.0 specification.
   *
   * Uses OpenAPI v3.0 compatible JSON Schema format. In v3.0, nullable types
   * are expressed with `nullable: true` rather than v3.1's `type` arrays.
   *
   * @template Types Tuple of original TypeScript types for phantom type
   *   preservation
   *
   * @evidence contracts/common.md#principled-implementation The 3.0 literal discriminator accompanies ordered root schemas and components typed in the OpenApiV3 dialect. The optional Types member preserves generic inference; the generator omits it rather than serializing TypeScript values.
   * @evidence contracts/common.md#clear-and-simple-design The record separates ordered roots from shared component definitions, enabling recursive references without duplicating the component graph. Dialect-specific field types remain local to this variant.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The wire version and schema fields express the supported 3.0 result contract. Optional phantom typing is not a runtime guard and does not prevent callers from constructing a value with that property.
   * @evidence contracts/common.md#meaningful-documentation Member comments explain input order, reference ownership and generator omission of the phantom property; the variant comment identifies dialect differences and its inference generic.
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
     * The generated result omits this property. It preserves the `Types`
     * generic parameter for type inference and should not be read as schema
     * data.
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
   *
   * @evidence contracts/common.md#principled-implementation The 3.1 literal discriminator accompanies ordered root schemas and components typed in the normalized OpenApi dialect. The optional Types member preserves generic inference; the generator omits it rather than serializing TypeScript values.
   * @evidence contracts/common.md#clear-and-simple-design The record separates ordered roots from shared component definitions, enabling recursive references without duplicating the component graph. Dialect-specific field types remain local to this variant.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The wire version and schema fields express the supported 3.1 result contract. Optional phantom typing is not a runtime guard and does not prevent callers from constructing a value with that property.
   * @evidence contracts/common.md#meaningful-documentation Member comments explain input order, reference ownership and generator omission of the phantom property; the variant comment identifies dialect differences and its inference generic.
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
     * The generated result omits this property. It preserves the `Types`
     * generic parameter for type inference and should not be read as schema
     * data.
     */
    __types?: Types | undefined;
  }
}
