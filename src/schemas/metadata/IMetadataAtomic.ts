import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataAtomic {
  type: "boolean" | "bigint" | "number" | "string";
  tags: IMetadataTypeTag[][];
}
