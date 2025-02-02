import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IMetadata } from "./IMetadata";

export interface IMetadataParameter {
  name: string;
  type: IMetadata;
  description: string | null;
  jsDocTags: IJsDocTagInfo[];
}
