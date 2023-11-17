import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";

import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
  schemas?:
    | undefined
    | Record<string, IJsonComponents.IObject | IJsonComponents.IAlias>;
}
export namespace IJsonComponents {
  export interface IObject {
    $id?: undefined | string;
    type: "object";

    /**
     * Only when swagger mode.
     */
    nullable?: undefined | boolean;

    properties: Record<string, IJsonSchema>;
    patternProperties?: undefined | Record<string, IJsonSchema>;
    additionalProperties?: undefined | IJsonSchema;

    required?: undefined | string[];
    description?: undefined | string;
    "x-typia-jsDocTags"?: undefined | IJsDocTagInfo[];
    "x-typia-patternProperties"?: undefined | Record<string, IJsonSchema>;
    "x-typia-additionalProperties"?: undefined | IJsonSchema;
  }

  export type IAlias = IJsonSchema & IIdentified;
  interface IIdentified {
    $id?: undefined | string;
    $recursiveAnchor?: undefined | boolean;
  }
}
