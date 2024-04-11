import { Atomic } from "../../typings/Atomic";

import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataConstantValue<T extends Atomic.Type> {
  value: T;
  tags: IMetadataTypeTag[][] | undefined;
}
