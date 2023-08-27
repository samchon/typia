import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";

export interface IMetadataAlias {
    name: string;
    value: IMetadata;
    nullables: boolean[];

    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    recursive: boolean;
}
