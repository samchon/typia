import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IMetadataProperty } from "./IMetadataProperty";

export interface IMetadataObjectType {
  name: string;
  properties: IMetadataProperty[];
  description?: undefined | string;
  jsDocTags: IJsDocTagInfo[];

  index: number;
  recursive: boolean;
  nullables: boolean[];
}
