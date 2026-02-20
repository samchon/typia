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
 */
export interface IMetadataSchemaCollection {
  /** Array of metadata schemas, one per input type. */
  schemas: IMetadataSchema[];

  /** Shared type definitions referenced by schemas. */
  components: IMetadataComponents;
}
