import type { IProtobufPropertyType } from "./IProtobufPropertyType";

export interface IProtobufProperty {
  fixed: boolean;
  union: IProtobufPropertyType[];
}
