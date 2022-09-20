import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataTag } from "./IMetadataTag";

export interface IMetadataProperty {
    key: IMetadata;
    value: IMetadata;
    description?: string;
    tags: IMetadataTag[];
    jsDocTags: IJsDocTagInfo[];
}
