import { IMetadataSchema } from "./IMetadataSchema";

/**
 * Shared type definitions for metadata schemas.
 *
 * `IMetadataComponents` stores reusable type definitions that can be referenced
 * from {@link IMetadataSchema} via {@link IMetadataSchema.IReference}. This
 * enables deduplication of complex types across multiple schemas.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation Four arrays hold the named, referenceable definitions (objects, aliases, arrays and tuples) that IMetadataSchema.IReference entries point at by name, so a recursive or repeated type is stored once and referenced instead of being nested infinitely.
 * @evidence contracts/common.md#clear-and-simple-design One record of four homogeneous lists, shared by the unit and the collection results.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It is plain data, with no cycle-breaking or lookup helper added to the type.
 * @evidence contracts/common.md#meaningful-documentation The comment states the deduplication purpose and links the reference type; every array has a one-line member comment.
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
