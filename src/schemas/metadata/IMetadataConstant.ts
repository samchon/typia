import { Atomic } from "../../typings/Atomic";

import { IMetadataTypeTag } from "./IMetadataTypeTag";

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
    values: Value[];

    /**
     * @internal
     */
    tags?: Type extends "boolean" ? IMetadataTypeTag[][] | undefined : never;
  }
}
