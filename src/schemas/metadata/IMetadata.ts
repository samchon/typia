import { IMetadataAlias } from "./IMetadataAlias";
import { IMetadataArray } from "./IMetadataArray";
import { IMetadataAtomic } from "./IMetadataAtomic";
import { IMetadataConstant } from "./IMetadataConstant";
import { IMetadataEscaped } from "./IMetadataEscaped";
import { IMetadataFunction } from "./IMetadataFunction";
import { IMetadataMap } from "./IMetadataMap";
import { IMetadataNative } from "./IMetadataNative";
import { IMetadataObject } from "./IMetadataObject";
import { IMetadataSet } from "./IMetadataSet";
import { IMetadataTemplate } from "./IMetadataTemplate";
import { IMetadataTuple } from "./IMetadataTuple";

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
  arrays: IMetadataArray[];
  tuples: IMetadataTuple[];
  objects: IMetadataObject[];
  aliases: IMetadataAlias[];

  natives: IMetadataNative[];
  sets: IMetadataSet[];
  maps: IMetadataMap[];
}
