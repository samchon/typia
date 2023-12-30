import { IJsonSchema } from "./IJsonSchema";

export interface IJsonComponents {
  schemas?: undefined | Record<string, IJsonComponents.IAlias>;
}
export namespace IJsonComponents {
  /**
   * @deprecated
   */
  export interface IObject extends IJsonSchema.IObject {
    $id?: undefined | string;
  }

  export type IAlias = IJsonSchema & IIdentified;
  interface IIdentified {
    $id?: undefined | string;
    $recursiveAnchor?: undefined | boolean;
  }
}
