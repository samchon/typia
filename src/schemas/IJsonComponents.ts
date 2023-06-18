import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
    schemas?: Record<string, IJsonComponents.IObject | IJsonComponents.IAlias>;
}
export namespace IJsonComponents {
    export interface IObject {
        $id?: string;
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

    export type IAlias = IJsonSchema & {
        $id?: string;
        $recursiveAnchor?: boolean;
    };
}
