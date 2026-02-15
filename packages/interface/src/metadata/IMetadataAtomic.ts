import { Atomic } from "../typings/Atomic";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataAtomic {
  type: Atomic.Type;
  tags: IMetadataTypeTag[][];
}
