import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
    objects?: Record<string, IJsonComponents.IObject>;
    aliases?: Record<string, IJsonComponents.IAlias>;
    arrays?: Record<string, IJsonComponents.IArray>;
    tuples?: Record<string, IJsonComponents.ITuple | IJsonComponents.IArray>;
}
export namespace IJsonComponents {
    export interface IArray extends IJsonSchema.IArray {
        $id?: string;
        $recursiveAnchor?: true;
    }
    export interface ITuple extends IJsonSchema.ITuple {
        $id?: string;
        $recursiveAnchor?: true;
    }
    export interface IObject {
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

    export type IAlias = IJsonSchema & {
        $id?: string;
        $recursiveAnchor?: boolean;
    };
}
