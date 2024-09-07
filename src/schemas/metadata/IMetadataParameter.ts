import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";

export interface IMetadataParameter {
  name: string;
  type: IMetadata;
  description: string | null;
  jsDocTags: IJsDocTagInfo[];
}
