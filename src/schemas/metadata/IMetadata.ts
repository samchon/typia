import { IMetadataAtomic } from "./IMetadataAtomic";
import { IMetadataConstant } from "./IMetadataConstant";
import { IMetadataEntry } from "./IMetadataEntry";
import { IMetadataEscaped } from "./IMetadataEscaped";
import { IMetadataFunction } from "./IMetadataFunction";
import { IMetadataTemplate } from "./IMetadataTemplate";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadata {
  any: boolean;
  required: boolean;
  optional: boolean;
  nullable: boolean;
  functions: IMetadataFunction[];

  atomics: IMetadataAtomic[];
  constants: IMetadataConstant[];
  templates: IMetadataTemplate[];
  escaped: IMetadataEscaped | null;

  rest: IMetadata | null;
  arrays: {
    name: string;
    tags: IMetadataTypeTag[][];
  }[];
  tuples: {
    name: string;
    tags: IMetadataTypeTag[][];
  }[];
  objects: {
    name: string;
    tags: IMetadataTypeTag[][];
  }[];
  aliases: string[];

  natives: string[];
  sets: IMetadata[];
  maps: IMetadataEntry[];
}
