import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataCommentTag } from "./IMetadataCommentTag";

export interface IMetadataAlias {
    name: string;
    value: IMetadata;
    nullables: boolean[];

    description: string | null;
    tags: IMetadataCommentTag[];
    jsDocTags: IJsDocTagInfo[];
    recursive: boolean;
}
