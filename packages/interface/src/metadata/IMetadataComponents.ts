import { IMetadataSchema } from "./IMetadataSchema";

<<<<<<< HEAD
export interface IMetadataComponents {
  objects: IMetadataSchema.IObjectType[];
  aliases: IMetadataSchema.IAliasType[];
  arrays: IMetadataSchema.IArrayType[];
=======
/**
 * Shared type definitions for metadata schemas.
 *
 * `IMetadataComponents` stores reusable type definitions that can be referenced
 * from {@link IMetadataSchema} via {@link IMetadataSchema.IReference}. This
 * enables deduplication of complex types across multiple schemas.
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  tuples: IMetadataSchema.ITupleType[];
}
