import { IMetadata } from "./IMetadata";
import { IMetadataParameter } from "./IMetadataParameter";

export interface IMetadataFunction {
  parameters: IMetadataParameter[];
  output: IMetadata;
  async: boolean;
}
