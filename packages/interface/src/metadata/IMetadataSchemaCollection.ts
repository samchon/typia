import { IMetadataComponents } from "./IMetadataComponents";
import { IMetadataSchema } from "./IMetadataSchema";

/**
 * Collection of metadata schemas for multiple types.
 *
 * `IMetadataSchemaCollection` contains metadata schemas generated from multiple
 * TypeScript types via `typia.reflect.schemas<[T1, T2, ...]>()`. Each schema in
 * {@link schemas} corresponds to one input type, while shared type definitions
 * (objects, aliases, arrays, tuples) are stored in {@link components}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation One schema per input type plus a single shared components table, so definitions reused by several input types are stored once and each schema's references resolve into that same table.
 * @evidence contracts/common.md#clear-and-simple-design Two fields, mirroring IMetadataSchemaUnit with a list in place of a single schema.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Plain data without any resolution or merging helper.
 * @evidence contracts/common.md#meaningful-documentation The comment names the producing call `typia.reflect.schemas`, the roles of the two fields and links them.
 */
export interface IMetadataSchemaCollection {
  /** Array of metadata schemas, one per input type. */
  schemas: IMetadataSchema[];

  /** Shared type definitions referenced by schemas. */
  components: IMetadataComponents;
}
