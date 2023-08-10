import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataProperty } from "./IMetadataProperty";

export interface IMetadataObject {
    name: string;
    properties: IMetadataProperty[];
    description?: string;
    jsDocTags: IJsDocTagInfo[];

    index: number;
    recursive: boolean;
    nullables: boolean[];

    /**
     * @internal
     */
    validated: boolean;
}
