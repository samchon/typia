import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IMetadata } from "./IMetadata";

export interface IMetadataProperty {
  key: IMetadata;
  value: IMetadata;
  description: string | null;
  jsDocTags: IJsDocTagInfo[];
}
