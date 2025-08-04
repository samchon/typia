import { OpenApi } from "@samchon/openapi";

/**
 * Contract for generating realistic random test data across all data types.
 *
 * Provides the blueprint for creating random data generators that respect schema 
 * constraints. Used by typia's random data generation to create meaningful test 
 * data that matches your TypeScript types including validation rules, format 
 * constraints, and ranges.
 *
 * Essential for generating mock APIs, test fixtures, and property-based testing 
 * scenarios where you need realistic data that actually fits your type definitions.
 *
 * @example
 * ```typescript
 * const generator: IRandomGenerator = {
 *   boolean: () => Math.random() > 0.5,
 *   number: (schema) => {
 *     const min = schema.minimum ?? 0;
 *     const max = schema.maximum ?? 100;
 *     return Math.random() * (max - min) + min;
 *   },
 *   email: () => `user${Math.floor(Math.random() * 1000)}@example.com`,
 *   // ... implement other methods
 * };
 * 
 * const randomUser = typia.random<User>(generator);
 * ```
 */
export interface IRandomGenerator {
  // REGULAR DATA TYPES

  /**
   * Generates random boolean values.
   */
  boolean(): boolean | undefined;

  /**
   * Generates random numbers respecting schema constraints like min/max values.
   */
  number(schema: OpenApi.IJsonSchema.INumber): number;

  /**
   * Generates a random integer based on JSON schema constraints.
   *
   * @param schema JSON schema with integer constraints (min, max, etc.)
   * @returns Random integer within the specified constraints
   */
  integer(schema: OpenApi.IJsonSchema.IInteger): number;

  /**
   * Generates a random bigint based on JSON schema constraints.
   *
   * @param schema JSON schema with integer constraints (min, max, etc.)
   * @returns Random bigint within the specified constraints
   */
  bigint(schema: OpenApi.IJsonSchema.IInteger): bigint;

  /**
   * Generates a random string based on JSON schema constraints.
   *
   * @param schema JSON schema with string constraints (minLength, maxLength, pattern, etc.)
   * @returns Random string matching the specified constraints
   */
  string(schema: OpenApi.IJsonSchema.IString): string;

  /**
   * Generates a random array with elements created by the provided generator function.
   *
   * @param schema Array schema with element generator function
   * @returns Random array with generated elements
   */
  array<T>(
    schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
      element: (index: number, count: number) => T;
    },
  ): T[];

  /**
   * Generates a random string matching the given regular expression pattern.
   *
   * @param regex Regular expression pattern to match
   * @returns Random string matching the pattern
   */
  pattern(regex: RegExp): string;

  //----
  // STRING FORMATS
  //----

  // SPECIAL CHARACTER FORMATS

  /**
   * Generates a random base64-encoded byte string.
   *
   * @returns Random base64 string
   */
  byte(): string;

  /**
   * Generates a random password string.
   *
   * @returns Random password
   */
  password(): string;

  /**
   * Generates a random regular expression pattern string.
   *
   * @returns Random regex pattern
   */
  regex(): string;

  /**
   * Generates a random UUID (Universally Unique Identifier).
   *
   * @returns Random UUID string in standard format
   */
  uuid(): string;

  // ADDRESS AND IDENTIFIER FORMATS

  /**
   * Generates a random email address.
   *
   * @returns Random email address
   */
  email(): string;

  /**
   * Generates a random hostname.
   *
   * @returns Random hostname
   */
  hostname(): string;

  /**
   * Generates a random internationalized email address.
   *
   * @returns Random IDN email address
   */
  idnEmail(): string;

  /**
   * Generates a random internationalized hostname.
   *
   * @returns Random IDN hostname
   */
  idnHostname(): string;

  /**
   * Generates a random IRI (Internationalized Resource Identifier).
   *
   * @returns Random IRI
   */
  iri(): string;

  /**
   * Generates a random IRI reference.
   *
   * @returns Random IRI reference
   */
  iriReference(): string;

  /**
   * Generates a random IPv4 address.
   *
   * @returns Random IPv4 address
   */
  ipv4(): string;

  /**
   * Generates a random IPv6 address.
   *
   * @returns Random IPv6 address
   */
  ipv6(): string;

  /**
   * Generates a random URI (Uniform Resource Identifier).
   *
   * @returns Random URI
   */
  uri(): string;

  /**
   * Generates a random URI reference.
   *
   * @returns Random URI reference
   */
  uriReference(): string;

  /**
   * Generates a random URI template.
   *
   * @returns Random URI template
   */
  uriTemplate(): string;

  /**
   * Generates a random URL (Uniform Resource Locator).
   *
   * @returns Random URL
   */
  url(): string;

  // DATE AND TIME FORMATS

  /**
   * Generates a random datetime string in ISO 8601 format.
   *
   * @param props Optional constraints for minimum and maximum timestamp values
   * @returns Random datetime string
   */
  datetime(props?: { minimum?: number; maximum?: number }): string;

  /**
   * Generates a random date string in ISO 8601 format (YYYY-MM-DD).
   *
   * @param props Optional constraints for minimum and maximum timestamp values
   * @returns Random date string
   */
  date(props?: { minimum?: number; maximum?: number }): string;

  /**
   * Generates a random time string in ISO 8601 format (HH:MM:SS).
   *
   * @returns Random time string
   */
  time(): string;

  /**
   * Generates a random duration string in ISO 8601 format.
   *
   * @returns Random duration string
   */
  duration(): string;

  // JSON POINTER FORMATS

  /**
   * Generates a random JSON pointer string.
   *
   * @returns Random JSON pointer
   */
  jsonPointer(): string;

  /**
   * Generates a random relative JSON pointer string.
   *
   * @returns Random relative JSON pointer
   */
  relativeJsonPointer(): string;
}
