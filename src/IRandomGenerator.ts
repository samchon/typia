import { OpenApi } from "@samchon/openapi";

import { Customizable } from "./typings/Customizable";

export interface IRandomGenerator {
  // REGULAR
  boolean(): boolean;
  integer(props: OpenApi.IJsonSchema.IInteger): number;
  bigint(
    props: Omit<
      OpenApi.IJsonSchema.IInteger,
      "type" | "default" | "minimum" | "maximum" | "multipleOf"
    > & {
      type: "bigint";
      minimum?: bigint;
      maximum?: bigint;
      exclusiveMinimum?: boolean;
      exclusiveMaximum?: boolean;
      multipleOf?: bigint;
      default?: bigint;
    },
  ): bigint;
  number(props: OpenApi.IJsonSchema.INumber): number;
  string(props: Omit<OpenApi.IJsonSchema.IString, "format">): string;
  array<T>(
    props: OpenApi.IJsonSchema.IArray & {
      element: (index: number, count: number) => T;
    },
  ): T[];
  pattern(regex: RegExp): string;

  //----
  // FORMAT
  //----
  // SPECIAL CHARACTERS
  byte(): string;
  password(): string;
  regex(): string;
  uuid(): string;

  // ADDRESSES
  email(): string;
  hostname(): string;
  idnEmail(): string;
  idnHostname(): string;
  iri(): string;
  iriReference(): string;
  ipv4(): string;
  ipv6(): string;
  uri(): string;
  uriReference(): string;
  uriTemplate(): string;
  url(): string;

  // TIMESTAMPS
  datetime(props: { minimum?: number; maximum?: number }): string;
  date(props: { minimum?: number; maximum?: number }): string;
  time(): string;
  duration(): string;

  // POINTERS
  jsonPointer(): string;
  relativeJsonPointer(): string;

  customs?: IRandomGenerator.CustomMap;
}
export namespace IRandomGenerator {
  export type CustomMap = {
    [Type in keyof Customizable]?: (
      tags: ITypeTag[],
    ) => Customizable[Type] | undefined;
  };

  export interface ITypeTag {
    name: string;
    kind: string;
    value: any;
  }
}
