import { IMetadataProperty } from "./IMetadataProperty";

export interface IMetadataObject {
    name: string;
    properties: IMetadataProperty[];
    description?: string;

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
