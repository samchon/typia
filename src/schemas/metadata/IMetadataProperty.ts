import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataCommentTag } from "./IMetadataCommentTag";

export interface IMetadataProperty {
    key: IMetadata;
    value: IMetadata;
    description: string | null;
    tags: IMetadataCommentTag[];
    jsDocTags: IJsDocTagInfo[];
}
