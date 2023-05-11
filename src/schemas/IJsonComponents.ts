import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
    schemas: Record<string, IJsonComponents.IObject>;
}
export namespace IJsonComponents {
    export interface IObject {
        /**
         * Used only when ajv mode.
         */
        $id?: string;
        $recursiveAnchor?: boolean;

        type: "object";

        /**
         * Only when swagger mode.
         */
        nullable?: boolean;

        properties: Record<string, IJsonSchema>;
        patternProperties?: Record<string, IJsonSchema>;
        additionalProperties?: IJsonSchema;

        required?: string[];
        description?: string;
        "x-typia-jsDocTags"?: IJsDocTagInfo[];
        "x-typia-patternProperties"?: Record<string, IJsonSchema>;
        "x-typia-additionalProperties"?: IJsonSchema;
    }
}
