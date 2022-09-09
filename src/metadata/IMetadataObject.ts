import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataProperty } from "./IMetadataProperty";

export interface IMetadataObject {
    name: string;
    properties: IMetadataProperty[];
    description?: string;
    jsDocTags: IJsDocTagInfo[];

    /**
     * @internal
     */
    index: number;

    /**
     * @internal
     */
    validated: boolean;

    /**
     * @internal
     */
    recursive: boolean;

    /**
     * @internal
     */
    nullables: boolean[];
}
