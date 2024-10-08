import { OpenApi } from "@samchon/openapi";

export interface IRandomGenerator {
  // REGULAR
  boolean(): boolean | undefined;
  number(schema: OpenApi.IJsonSchema.INumber): number;
  integer(schema: OpenApi.IJsonSchema.IInteger): number;
  bigint(schema: OpenApi.IJsonSchema.IInteger): bigint;
  string(schema: OpenApi.IJsonSchema.IString): string;
  array<T>(
    schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
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
  datetime(props?: { minimum?: number; maximum?: number }): string;
  date(props?: { minimum?: number; maximum?: number }): string;
  time(): string;
  duration(): string;

  // POINTERS
  jsonPointer(): string;
  relativeJsonPointer(): string;
}
