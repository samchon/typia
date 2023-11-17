import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";

export interface IMetadataProperty {
  key: IMetadata;
  value: IMetadata;
  description: string | null;
  jsDocTags: IJsDocTagInfo[];
}
