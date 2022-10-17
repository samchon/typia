import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
    schemas: Record<string, IJsonComponents.IObject>;
}
export namespace IJsonComponents {
    export interface IObject {
        $id?: string;
        type: "object";
        nullable: boolean;

        properties: Record<string, IJsonSchema>;
        patternProperties?: Record<string, IJsonSchema>;
        additionalProperties?: IJsonSchema;

        required?: string[];
        description?: string;
        "x-tson_jsDocTags"?: IJsDocTagInfo[];

        $recursiveAnchor?: boolean;
    }
}
