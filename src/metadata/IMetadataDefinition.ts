import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadata } from "./IMetadata";
import { IMetadataTag } from "./IMetadataTag";

export interface IMetadataDefinition {
    name: string;
    value: IMetadata;
    description?: string;
    tags: IMetadataTag[];
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
    nullables: boolean[];
}
