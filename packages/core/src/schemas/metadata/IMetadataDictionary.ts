import { MetadataAliasType } from "./MetadataAliasType";
import { MetadataArrayType } from "./MetadataArrayType";
import { MetadataObjectType } from "./MetadataObjectType";
import { MetadataTupleType } from "./MetadataTupleType";

/**
 * Dictionary of named type definitions for metadata deserialization.
 *
 * `IMetadataDictionary` maps type names to their metadata definitions, enabling
 * reconstruction of metadata schemas from serialized JSON format. Used by
 * {@link MetadataSchema.from} to resolve named type references.
 *
 * The dictionaries are populated during metadata collection and contain all
 * unique named types encountered in the analyzed TypeScript code.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IMetadataDictionary {
  /**
   * Named object type definitions.
   *
   * Maps object type names to their full type information including properties,
   * required fields, and inheritance hierarchy.
   */
  objects: Map<string, MetadataObjectType>;

  /**
   * Named type alias definitions.
   *
   * Maps type alias names to their underlying type information. Aliases may
   * reference other aliases or concrete types.
   */
  aliases: Map<string, MetadataAliasType>;

  /**
   * Named array type definitions.
   *
   * Maps array type names to their element type information. Used for recursive
   * array types.
   */
  arrays: Map<string, MetadataArrayType>;

  /**
   * Named tuple type definitions.
   *
   * Maps tuple type names to their element types and structure. Each element
   * position may have a different type.
   */
  tuples: Map<string, MetadataTupleType>;
}
