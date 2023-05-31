import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";

export interface IMetadataDefinition {
    name: string;
    value: IMetadata;

    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    nullables: boolean[];
}
