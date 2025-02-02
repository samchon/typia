import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IMetadata } from "./IMetadata";

export interface IMetadataAliasType {
  name: string;
  value: IMetadata;
  nullables: boolean[];

  description: string | null;
  jsDocTags: IJsDocTagInfo[];
  recursive: boolean;
}
