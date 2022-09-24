import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTag } from "../metadata/IMetadataTag";

import { Atomic } from "../typings/Atomic";

export type IJsonSchema = IJsonSchema.NotUnknown | IJsonSchema.IUnkown;
export namespace IJsonSchema {
    export type NotUnknown =
        | IEnumeration<"boolean">
        | IEnumeration<"number">
        | IEnumeration<"bigint">
        | IEnumeration<"string">
        | IBoolean
        | INumber
        | IBigInt
        | IString
        | IArray
        | ITuple
        | IOneOf
        | IReference
        | IRecursiveReference;

    export interface IEnumeration<Type extends Atomic.Literal>
        extends IAtomic<Type> {
        enum: Array<Atomic.Mapper[Type]>;
    }

    export interface IAtomic<Type extends string> extends IBase {
        type: Type;
        nullable: boolean;
    }
    export interface IString extends IAtomic<"string"> {
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        format?: string;
    }
    export interface INumber extends IAtomic<"number" | "integer"> {
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: number;
        exclusiveMaximum?: number;
    }
    export interface IBoolean extends IAtomic<"boolean"> {}
    export interface IBigInt extends IAtomic<"bigint"> {}

    export interface IArray extends IAtomic<"array"> {
        items: IJsonSchema;
        minItems?: number;
        maxItems?: number;
    }
    export interface ITuple extends IAtomic<"array"> {
        items: IJsonSchema[];
    }
    export interface IReference extends IBase {
        $ref: string;
    }
    export interface IRecursiveReference extends IBase {
        $recursiveRef: string;
    }

    export interface IOneOf extends IBase {
        oneOf: IJsonSchema[];
    }
    export interface IUnkown {}

    interface IBase {
        description?: string;
        metaTags?: IMetadataTag[];
        jsDocTags?: IJsDocTagInfo[];
    }

    // interface IBase {
    //     description: string | undefined;
    //     metaTags: IMetadataTag[] | undefined;
    //     jsDocTags: IJsDocTagInfo[] | undefined;
    // }
}
