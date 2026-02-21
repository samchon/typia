import { OpenApi } from "../openapi/OpenApi";

/**
 * Random value generator interface for typia.
 *
 * `IRandomGenerator` defines methods for generating random values of various
 * types. Used by `typia.random<T>()` for mock data generation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IRandomGenerator {
  /** Generates a random boolean. */
  boolean(): boolean | undefined;

  /** Generates a random number within schema constraints. */
  number(schema: OpenApi.IJsonSchema.INumber): number;

  /** Generates a random integer within schema constraints. */
  integer(schema: OpenApi.IJsonSchema.IInteger): number;

  /** Generates a random bigint within schema constraints. */
  bigint(schema: OpenApi.IJsonSchema.IInteger): bigint;

  /** Generates a random string within schema constraints. */
  string(schema: OpenApi.IJsonSchema.IString): string;

  /** Generates a random array with elements from the generator function. */
  array<T>(
    schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
      element: (index: number, count: number) => T;
    },
  ): T[];

  /** Generates a random string matching the regex pattern. */
  pattern(regex: RegExp): string;

  // String format generators
  byte(): string;

  password(): string;

  regex(): string;

  uuid(): string;

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

  datetime(props?: { minimum?: number; maximum?: number }): string;

  date(props?: { minimum?: number; maximum?: number }): string;

  time(): string;

  duration(): string;

  jsonPointer(): string;

  relativeJsonPointer(): string;
}

export namespace IRandomGenerator {
  /** Custom generators for specific schema properties. */
  export interface CustomMap {
    string?: (
      schema: OpenApi.IJsonSchema.IString & Record<string, any>,
    ) => string;
    number?: (
      schema: OpenApi.IJsonSchema.INumber & Record<string, any>,
    ) => number;
    integer?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => number;
    bigint?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => bigint;
    boolean?: (schema: Record<string, any>) => boolean | undefined;
    array?: <T>(
      schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
        element: (index: number, count: number) => T;
      } & Record<string, any>,
    ) => T[];
  }
}
