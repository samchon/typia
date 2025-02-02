import type { Atomic } from "../../typings/Atomic";

import type { IJsDocTagInfo } from "./IJsDocTagInfo";
import type { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataConstantValue<T extends Atomic.Type> {
  value: T;
  tags: IMetadataTypeTag[][];
  description?: string | null;
  jsDocTags?: IJsDocTagInfo[];
}
