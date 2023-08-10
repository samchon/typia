import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataTag } from "./IMetadataTag";

export interface IMetadataAlias {
    name: string;
    value: IMetadata;
    nullables: boolean[];

    description: string | null;
    tags: IMetadataTag[];
    jsDocTags: IJsDocTagInfo[];
    recursive: boolean;
}
