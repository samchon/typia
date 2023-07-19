import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataTag } from "./IMetadataTag";

export interface IMetadataProperty {
    key: IMetadata;
    value: IMetadata;
    description: string | null;
    tags: IMetadataTag[];
    jsDocTags: IJsDocTagInfo[];
}
