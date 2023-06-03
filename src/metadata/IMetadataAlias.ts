import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";

export interface IMetadataAlias {
    name: string;
    value: IMetadata;

    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    recursive: boolean;
    nullables: boolean[];
}
