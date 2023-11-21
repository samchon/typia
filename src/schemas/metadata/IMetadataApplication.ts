import { IMetadata } from "./IMetadata";
import { IMetadataComponents } from "./IMetadataComponents";

export interface IMetadataApplication {
  metadatas: IMetadata[];
  components: IMetadataComponents;
}
