import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
    schemas: IJsonComponents.ISchemas;
}
export namespace IJsonComponents {
    export type ISchemas = Record<string, IJsonComponents.IObject>;

    export interface IObject {
        $id?: string;
        type: "object";
        nullable: boolean;

        properties: Record<string, IJsonSchema>;
        required?: string[];
        description?: string;
        jsDocTags?: IJsDocTagInfo[];

        $recursiveAnchor?: boolean;
    }
}
