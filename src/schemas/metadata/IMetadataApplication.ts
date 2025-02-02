import type { IMetadata } from "./IMetadata";
import type { IMetadataComponents } from "./IMetadataComponents";

export interface IMetadataApplication {
  metadatas: IMetadata[];
  components: IMetadataComponents;
}
