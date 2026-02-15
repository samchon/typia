import { Atomic } from "../typings/Atomic";
import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

export interface IMetadataSchema {
  any: boolean;
  required: boolean;
  optional: boolean;
  nullable: boolean;
  functions: IMetadataSchema.IFunction[];

  atomics: IMetadataSchema.IAtomic[];
  constants: IMetadataSchema.IConstant[];
  templates: IMetadataSchema.ITemplate[];
  escaped: IMetadataSchema.IEscaped | null;

  rest: IMetadataSchema | null;
  arrays: IMetadataSchema.IReference[];
  tuples: IMetadataSchema.IReference[];
  objects: IMetadataSchema.IReference[];
  aliases: IMetadataSchema.IReference[];

  natives: IMetadataSchema.IReference[];
  sets: IMetadataSchema.ISet[];
  maps: IMetadataSchema.IMap[];
}
export namespace IMetadataSchema {
  export interface IFunction {
    async: boolean;
    parameters: IParameter[];
    output: IMetadataSchema;
  }

  export interface IParameter {
    name: string;
    type: IMetadataSchema;
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
  }

  export interface IAtomic {
    type: "boolean" | "bigint" | "number" | "string";
    tags: IMetadataTypeTag[][];
  }

  export type IConstant =
    | IConstant.IBase<"boolean">
    | IConstant.IBase<"number">
    | IConstant.IBase<"string">
    | IConstant.IBase<"bigint">;
  export namespace IConstant {
    export interface IBase<Type extends Atomic.Literal> {
      type: Type;
      values: IValue<Atomic.Mapper[Type]>[];
    }
    export interface IValue<T extends Atomic.Type> {
      value: T;
      tags: IMetadataTypeTag[][];
      description?: string | null;
      jsDocTags?: IJsDocTagInfo[];
    }
  }

  export interface ITemplate {
    row: IMetadataSchema[];
    tags: IMetadataTypeTag[][];
  }

  export interface IEscaped {
    original: IMetadataSchema;
    returns: IMetadataSchema;
  }

  export interface IAliasType {
    name: string;
    value: IMetadataSchema;
    nullables: boolean[];

    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    recursive: boolean;
  }

  export interface IArrayType {
    name: string;
    value: IMetadataSchema;

    nullables: boolean[];
    recursive: boolean;
    index: number | null;
  }

  export interface ITupleType {
    name: string;
    elements: IMetadataSchema[];

    index: number | null;
    recursive: boolean;
    nullables: boolean[];
  }

  export interface IObjectType {
    name: string;
    properties: IProperty[];
    description?: undefined | string;
    jsDocTags: IJsDocTagInfo[];

    index: number;
    recursive: boolean;
    nullables: boolean[];
  }

  export interface IProperty {
    key: IMetadataSchema;
    value: IMetadataSchema;
    description: string | null;
    jsDocTags: IJsDocTagInfo[];
    mutability?: "readonly" | null | undefined;
  }

  export interface IMap {
    key: IMetadataSchema;
    value: IMetadataSchema;
    tags: IMetadataTypeTag[][];
  }

  export interface ISet {
    value: IMetadataSchema;
    tags: IMetadataTypeTag[][];
  }

  export interface IReference {
    name: string;
    tags: IMetadataTypeTag[][];
  }
}
