import type { IMetadata } from "./IMetadata";
import type { IMetadataParameter } from "./IMetadataParameter";

export interface IMetadataFunction {
  parameters: IMetadataParameter[];
  output: IMetadata;
  async: boolean;
}
