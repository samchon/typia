import { IJsDocTagInfo } from "../metadata/IJsDocTagInfo";
import { IMetadataTypeTag } from "../metadata/IMetadataTypeTag";

import { Atomic } from "../../typings/Atomic";

import { Type } from "../../tags/Type";

export type IJsonSchema = IJsonSchema.Known | IJsonSchema.IUnknown;
export namespace IJsonSchema {
  export type Known =
    | IEnumeration<"boolean">
    | IEnumeration<"number">
    | IEnumeration<"string">
    | IBoolean
    | IInteger
    | INumber
    | IString
    | IArray
    | ITuple
    | IObject
    | IReference
    | INullOnly
    | IOneOf;

  export interface IUnknown extends IAttribute {
    type?: undefined | undefined;
  }

  /* -----------------------------------------------------------
        ATOMICS
    ----------------------------------------------------------- */
  export interface IEnumeration<
    Literal extends Exclude<Atomic.Literal, "bigint">,
  > extends Omit<IAtomic<Literal>, "x-typia-typeTags"> {
    enum: Array<Atomic.Mapper[Literal]>;
  }
  export interface IAtomic<Literal extends Exclude<Atomic.Literal, "bigint">>
    extends ISignificant<Literal> {
    default?: undefined | Atomic.Mapper[Literal];
  }
  export interface IString extends IAtomic<"string"> {
    minLength?: undefined | (number & Type<"uint32">);
    maxLength?: undefined | (number & Type<"uint32">);
    pattern?: undefined | string;
    format?:
      | undefined
      | "byte"
      | "password"
      | "regex"
      | "uuid"
      | "email"
      | "hostname"
      | "ipv4"
      | "ipv6"
      | "uri"
      | "uri-reference"
      | "uri-template"
      | "url"
      | "date-time"
      | "date"
      | "time"
      | "duration"
      | "json-pointer"
      | "relative-json-pointer"
      | (string & {});
    "x-typia-typeTags"?: undefined | IMetadataTypeTag[];
  }
  export interface INumber extends IAtomic<"number"> {
    minimum?: undefined | number;
    maximum?: undefined | number;
    exclusiveMinimum?: undefined | boolean;
    exclusiveMaximum?: undefined | boolean;
    multipleOf?: undefined | number;
    "x-typia-typeTags"?: undefined | IMetadataTypeTag[];
  }
  export interface IInteger extends IAtomic<"integer"> {
    minimum?: undefined | (number & Type<"int32">);
    maximum?: undefined | (number & Type<"int32">);
    exclusiveMinimum?: undefined | boolean;
    exclusiveMaximum?: undefined | boolean;
    multipleOf?: undefined | (number & Type<"int32">);
    "x-typia-typeTags"?: undefined | IMetadataTypeTag[];
  }
  export interface IBoolean extends IAtomic<"boolean"> {
    "x-typia-typeTags"?: undefined | IMetadataTypeTag[];
  }

  /* -----------------------------------------------------------
        OBJECTS
    ----------------------------------------------------------- */
  export interface IArray extends ISignificant<"array"> {
    items: IJsonSchema;
    minItems?: undefined | (number & Type<"uint32">);
    maxItems?: undefined | (number & Type<"uint32">);
    "x-typia-tuple"?: undefined | ITuple;
    "x-typia-typeTags"?: undefined | IMetadataTypeTag[];
  }
  export interface ITuple extends ISignificant<"array"> {
    items: IJsonSchema[];
    minItems: number & Type<"uint32">;
    maxItems?: undefined | (number & Type<"uint32">);
  }
  export interface IObject extends ISignificant<"object"> {
    properties: Record<string, IJsonSchema>;
    required?: undefined | string[];
    patternProperties?: undefined | Record<string, IJsonSchema>;
    additionalProperties?: undefined | IJsonSchema;
    "x-typia-patternProperties"?: undefined | Record<string, IJsonSchema>;
    "x-typia-additionalProperties"?: undefined | IJsonSchema;
  }
  export interface IReference extends IAttribute {
    $ref: string;
  }
  export interface INullOnly extends IAttribute {
    type: "null";
  }

  /* -----------------------------------------------------------
        MISCELLANEOUS
    ----------------------------------------------------------- */
  export interface IOneOf extends IAttribute {
    oneOf: IJsonSchema[];
  }

  export interface ISignificant<Literal extends string> extends IAttribute {
    type: Literal;

    /**
     * Only when swagger mode.
     */
    nullable?: undefined | boolean;
  }
  export interface IAttribute {
    deprecated?: undefined | boolean;
    title?: undefined | string;
    description?: undefined | string;
    "x-typia-jsDocTags"?: undefined | IJsDocTagInfo[];
    "x-typia-required"?: undefined | boolean;
    "x-typia-optional"?: undefined | boolean;
    "x-typia-rest"?: undefined | boolean;
  }
}
