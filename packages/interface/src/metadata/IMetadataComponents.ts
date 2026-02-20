import { IMetadataSchema } from "./IMetadataSchema";

/**
 * Shared type definitions for metadata schemas.
 *
 * `IMetadataComponents` stores reusable type definitions that can be
 * referenced from {@link IMetadataSchema} via {@link IMetadataSchema.IReference}.
 * This enables deduplication of complex types across multiple schemas.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IMetadataComponents {
  /** Object type definitions. */
  objects: IMetadataSchema.IObjectType[];

  /** Type alias definitions. */
  aliases: IMetadataSchema.IAliasType[];

  /** Array type definitions. */
  arrays: IMetadataSchema.IArrayType[];

  /** Tuple type definitions. */
  tuples: IMetadataSchema.ITupleType[];
}
