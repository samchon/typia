import { OpenApi } from "@samchon/openapi";

/**
 * Interface for generating random values for various data types.
 *
 * `IRandomGenerator` defines the contract for generating random values that can
 * be used by typia for creating mock data, testing scenarios, and random value
 * generation based on JSON schema constraints.
 *
 * This interface supports generating random values for:
 *
 * - Basic types (boolean, number, integer, bigint, string, array)
 * - String format patterns (email, URL, UUID, etc.)
 * - Date and time formats
 * - Various address and identifier formats
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @example
 *   ```typescript
 *   const generator: IRandomGenerator = {
 *     boolean: () => Math.random() > 0.5,
 *     number: (schema) => Math.random() * (schema.maximum ?? 100),
 *     string: (schema) => "example-string",
 *     email: () => "test@example.com",
 *     // ... implement other methods
 *   };
 *   ```;
 */
export interface IRandomGenerator {
  // REGULAR DATA TYPES

  /**
   * Generates a random boolean value.
   *
   * @returns Random boolean value or undefined
   */
  boolean(): boolean | undefined;

  /**
   * Generates a random number based on JSON schema constraints.
   *
   * @param schema JSON schema with number constraints (min, max, etc.)
   * @returns Random number within the specified constraints
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
   * @param schema JSON schema with string constraints (minLength, maxLength,
   *   pattern, etc.)
   * @returns Random string matching the specified constraints
   */
  string(schema: OpenApi.IJsonSchema.IString): string;

  /**
   * Generates a random array with elements created by the provided generator
   * function.
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

export namespace IRandomGenerator {
  /**
   * Map of custom generators for different data types.
   *
   * This interface allows customization of random generation for specific types
   * when they have certain schema properties or constraints.
   *
   * @example
   *   ```typescript
   *   const generator: Partial<IRandomGenerator> = {
   *     string: (schema) => {
   *       if ((schema as any)["x-typia-monetary"] === "dollar") {
   *         return "$" + Math.floor(Math.random() * 1000);
   *       }
   *       return "default-string";
   *     },
   *     number: (schema) => {
   *       if ((schema as any)["x-typia-powerOf"] !== undefined) {
   *         const powerOf = (schema as any)["x-typia-powerOf"];
   *         return Math.pow(powerOf, Math.random() * 10 + 1);
   *       }
   *       return Math.random() * 100;
   *     }
   *   };
   *   ```;
   */
  export interface CustomMap {
    /**
     * Custom string generator that can handle special string formats based on
     * schema properties.
     */
    string?: (
      schema: OpenApi.IJsonSchema.IString & Record<string, any>,
    ) => string;

    /**
     * Custom number generator that can handle special number constraints based
     * on schema properties.
     */
    number?: (
      schema: OpenApi.IJsonSchema.INumber & Record<string, any>,
    ) => number;

    /**
     * Custom integer generator that can handle special integer constraints
     * based on schema properties.
     */
    integer?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => number;

    /**
     * Custom bigint generator that can handle special bigint constraints based
     * on schema properties.
     */
    bigint?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => bigint;

    /**
     * Custom boolean generator that can handle special boolean constraints
     * based on schema properties.
     */
    boolean?: (schema: Record<string, any>) => boolean | undefined;

    /**
     * Custom array generator that can handle special array constraints based on
     * schema properties.
     */
    array?: <T>(
      schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
        element: (index: number, count: number) => T;
      } & Record<string, any>,
    ) => T[];
  }
}
