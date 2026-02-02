import { Atomic } from "../../typings/Atomic";

import { IMetadataConstantValue } from "./IMetadataConstantValue";

export type IMetadataConstant =
  | IMetadataConstant.IBase<"boolean", boolean>
  | IMetadataConstant.IBase<"number", number>
  | IMetadataConstant.IBase<"string", string>
  | IMetadataConstant.IBase<"bigint", string>;
export namespace IMetadataConstant {
  export interface IBase<
    Type extends Atomic.Literal,
    Value extends Atomic.Type,
  > {
    type: Type;
    values: IMetadataConstantValue<Value>[];
  }
}
