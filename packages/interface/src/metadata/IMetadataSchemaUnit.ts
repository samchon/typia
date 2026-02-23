import { IMetadataComponents } from "./IMetadataComponents";
import { IMetadataSchema } from "./IMetadataSchema";

<<<<<<< HEAD
export interface IMetadataSchemaUnit {
  schema: IMetadataSchema;
=======
/**
 * Single unit of metadata schema for one type.
 *
 * `IMetadataSchemaUnit` contains a metadata schema generated from a single
 * TypeScript type via `typia.reflect.schema<T>()`. The main schema is in
 * {@link schema}, while shared type definitions (objects, aliases, arrays,
 * tuples) are stored in {@link components}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IMetadataSchemaUnit {
  /** Metadata schema for the target type. */
  schema: IMetadataSchema;

  /** Shared type definitions referenced by the schema. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  components: IMetadataComponents;
}
