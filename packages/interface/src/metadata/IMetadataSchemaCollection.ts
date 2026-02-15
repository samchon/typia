import { IMetadataComponents } from "./IMetadataComponents";
import { IMetadataSchema } from "./IMetadataSchema";

export interface IMetadataSchemaCollection {
  schemas: IMetadataSchema[];
  components: IMetadataComponents;
}
