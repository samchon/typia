import type { IMetadataAlias } from "./IMetadataAlias";
import type { IMetadataArray } from "./IMetadataArray";
import type { IMetadataAtomic } from "./IMetadataAtomic";
import type { IMetadataConstant } from "./IMetadataConstant";
import type { IMetadataEscaped } from "./IMetadataEscaped";
import type { IMetadataFunction } from "./IMetadataFunction";
import type { IMetadataMap } from "./IMetadataMap";
import type { IMetadataNative } from "./IMetadataNative";
import type { IMetadataObject } from "./IMetadataObject";
import type { IMetadataSet } from "./IMetadataSet";
import type { IMetadataTemplate } from "./IMetadataTemplate";
import type { IMetadataTuple } from "./IMetadataTuple";

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
