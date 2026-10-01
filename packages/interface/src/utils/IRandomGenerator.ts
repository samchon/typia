import { OpenApi } from "../openapi/OpenApi";

/**
 * Random value generator interface for typia.
 *
 * `IRandomGenerator` defines methods for generating random values of various
 * types. Used by `typia.random<T>()` for mock data generation.
 *
 * Every method is replaceable: `typia.random<T>()` accepts a
 * `Partial<IRandomGenerator>` and falls back to its built-in generator for each
 * method that is not supplied. The generated code passes the `minLength` and
 * `maxLength` bounds of a property to the string format and pattern generators
 * when the property carries length tags; a custom generator has to honor them
 * for its value to pass the generated validator.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The interface lists one method per atomic kind, array and string format that the random programmer can request, so a caller can replace any of them through `Partial<IRandomGenerator>`. Each signature takes the schema or bounds the generated code actually passes: JSON schemas for atomics, length bounds for formats and patterns, and epoch bounds for dates. The format methods now declare the optional length bounds that the generated code forwards, which the earlier parameterless declarations omitted.
 * @evidence contracts/common.md#clear-and-simple-design One flat method table with no inheritance; the two small bound records and the custom map are in the namespace because only these signatures use them.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Replacement happens through the supplied generator object; the declaration does not patch the built-in generator. It cannot make a custom generator honor the bounds it receives, which the comment states as the caller's duty.
 * @evidence contracts/common.md#meaningful-documentation The comment states the purpose, the replacement and fallback rule and the length-bound duty, and each method has its own comment.
 */
export interface IRandomGenerator {
  /**
   * Generates a random boolean.
   *
   * @evidence contracts/common.md#principled-implementation Returns a boolean or undefined, the same optional boolean the generated code accepts for a boolean leaf, and takes no argument because a boolean has no constraints to forward.
   * @evidence contracts/common.md#clear-and-simple-design A single parameterless method.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only; the built-in uses Math.random and this contract does not name it.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment states what is generated.
   */
  boolean(): boolean | undefined;

  /**
   * Generates a random number within schema constraints.
   *
   * @evidence contracts/common.md#principled-implementation Takes the OpenAPI number schema so a generator sees minimum, maximum, exclusive bounds and multipleOf, and returns a number.
   * @evidence contracts/common.md#clear-and-simple-design One method with the schema as its only parameter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only; constraint handling belongs to the generator that implements it.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment says it follows schema constraints.
   */
  number(schema: OpenApi.IJsonSchema.INumber): number;

  /**
   * Generates a random integer within schema constraints.
   *
   * @evidence contracts/common.md#principled-implementation Takes the integer schema, whose bounds are whole numbers, and returns a number, since an integer outside the safe range cannot be a number anyway.
   * @evidence contracts/common.md#clear-and-simple-design One method with the schema as its only parameter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment says it follows schema constraints.
   */
  integer(schema: OpenApi.IJsonSchema.IInteger): number;

  /**
   * Generates a random bigint within schema constraints.
   *
   * @evidence contracts/common.md#principled-implementation Takes the integer schema and returns a bigint, so bounds beyond the safe integer range stay exact in the result.
   * @evidence contracts/common.md#clear-and-simple-design One method, parallel to integer but with a bigint result.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment says it follows schema constraints.
   */
  bigint(schema: OpenApi.IJsonSchema.IInteger): bigint;

  /**
   * Generates a random string within schema constraints.
   *
   * @evidence contracts/common.md#principled-implementation Takes the string schema, which carries length, format and pattern keywords, and returns a string; this is the fallback used when no more specific format or pattern generator applies.
   * @evidence contracts/common.md#clear-and-simple-design One method; format and pattern generators are separate methods because the generated code selects them first.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment says it follows schema constraints.
   */
  string(schema: OpenApi.IJsonSchema.IString): string;

  /**
   * Generates a random array with elements from the generator function.
   *
   * @evidence contracts/common.md#principled-implementation The parameter is the array schema without `items`, an element callback that receives the index and the final count so the generator can build elements after choosing a length, and an optional recursion flag that lets a custom generator shorten cyclic structures so generation terminates.
   * @evidence contracts/common.md#clear-and-simple-design The callback is passed in instead of a items schema because the generated code owns how elements are built.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The recursion flag is a documented hint, and the contract does not guarantee termination for a generator that ignores it.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment and the flag's comment state the callback role and the termination purpose.
   */
  array<T>(
    schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
      element: (index: number, count: number) => T;

      /**
       * Whether this array lies on a recursive type's cycle. Custom generators
       * can bias toward fewer (or zero) elements so graph-shaped data
       * terminates instead of growing without bound.
       */
      recursive?: boolean;
    },
  ): T[];

  /**
   * Generates a random string matching the regex pattern.
   *
   * @param regex Pattern the string must match
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Takes the compiled RegExp, which the generated code builds from the schema pattern, plus optional length bounds so a pattern combined with length tags can be generated at an acceptable length.
   * @evidence contracts/common.md#clear-and-simple-design One method with the pattern first and an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only; matching the expression and counting characters are done by the implementation.
   * @evidence contracts/common.md#meaningful-documentation The comment documents both parameters.
   */
  pattern(regex: RegExp, props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a Base64 string for the `byte` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a Base64 string for the byte format; the built-in implementation produces lengths that are multiples of four, so the optional length bounds are mapped to such lengths.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  byte(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a string for the documentation-only `password` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation The password format has no grammar, so any string within the bounds is acceptable; the method returns a string.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and states that it is documentation only.
   */
  password(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a source string for the `regex` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation The regex format requires a source string that compiles, and the built-in generator emits only literal characters, which are valid in any expression, so a string of any length is acceptable.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  regex(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a UUID string for the `uuid` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a UUID in the textual 8-4-4-4-12 form; the bounds parameter exists because a length tag could constrain it, and the fixed length of that form means a conflicting bound can only be unsatisfiable.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  uuid(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an email address for the `email` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an address of local part, at sign and domain with a top-level label; the bounds parameter lets the local part absorb the requested length.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  email(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a hostname for the `hostname` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns dot-joined labels; the bounds are realized by splitting the length across labels, within the 63-character label and 253-character total limits of a hostname.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  hostname(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an internationalized email address for the `idn-email` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an internationalized email address; its checker needs a top-level label of at least two characters, which the built-in generator accounts for when it spends length.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  idnEmail(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an internationalized hostname for the `idn-hostname` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an internationalized hostname with the same label structure as hostname, so a single label is valid.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  idnHostname(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an internationalized resource identifier for the `iri` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an internationalized resource identifier; the built-in generator emits an absolute https URL, which is also a valid IRI.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  iri(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an IRI reference for the `iri-reference` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an IRI reference; an absolute IRI is also a valid reference, which is why the built-in generator can reuse its URL form.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  iriReference(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an IPv4 address for the `ipv4` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a dotted quad of four octets of one to three digits, each at most 255; the bounds select how many digits each octet uses, within the 7 to 15 character range of the form.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  ipv4(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an IPv6 address for the `ipv6` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an IPv6 address; the built-in generator covers the compressed, full eight-group and IPv4-suffixed forms so lengths from two to the longest form are expressible.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  ipv6(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a URI for the `uri` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a URI; an absolute https URL is a valid URI, so the built-in generator reuses its URL builder.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  uri(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a URI reference for the `uri-reference` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a URI reference; absolute URIs are valid references.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  uriReference(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a URI template for the `uri-template` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a URI template; a URL without expressions is a valid template.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  uriTemplate(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a URL for the `url` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an absolute https URL whose path segment absorbs extra requested length, since a URL's path is unbounded.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  url(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an RFC 3339 date-time string for the `date-time` format.
   *
   * @param props Epoch millisecond bounds, and the length bounds of the
   *   property when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an RFC 3339 date-time; the parameter combines epoch bounds, which select the instant, with length bounds, which select the fractional-second digits, since a date-time has few valid lengths.
   * @evidence contracts/common.md#clear-and-simple-design One method whose parameter is the intersection of the two bound records.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the combined bounds.
   */
  datetime(
    props?: IRandomGenerator.IEpochProps & IRandomGenerator.ILengthProps,
  ): string;

  /**
   * Generates a `YYYY-MM-DD` date string for the `date` format.
   *
   * @param props Epoch millisecond bounds, and the length bounds of the
   *   property when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a calendar date; epoch bounds select the day and length bounds are accepted for uniformity, though a date has one length.
   * @evidence contracts/common.md#clear-and-simple-design One method with the same parameter type as datetime.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the combined bounds.
   */
  date(
    props?: IRandomGenerator.IEpochProps & IRandomGenerator.ILengthProps,
  ): string;

  /**
   * Generates an RFC 3339 time string for the `time` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an RFC 3339 time with a mandatory offset; the built-in generator reaches every length it can express by choosing fraction digits and offset form.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  time(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates an ISO 8601 duration string for the `duration` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns an ISO 8601 duration; with no bound it composes designators, and with a bound a single year designator with an unbounded digit count expresses any length from three up.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  duration(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a JSON pointer for the `json-pointer` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a JSON pointer; the built-in generator uses a fixed components prefix with a variable token and falls back to the empty pointer or a one-token pointer when the bound is shorter than that prefix.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  jsonPointer(props?: IRandomGenerator.ILengthProps): string;

  /**
   * Generates a relative JSON pointer for the `relative-json-pointer` format.
   *
   * @param props Length bounds of the property, when it carries length tags
   *
   * @evidence contracts/common.md#principled-implementation Returns a relative JSON pointer, a non-negative integer optionally followed by a hash or a pointer; a single digit is the shortest form.
   * @evidence contracts/common.md#clear-and-simple-design One method with an optional bounds record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
   * @evidence contracts/common.md#meaningful-documentation The comment names the format and documents the bounds parameter.
   */
  relativeJsonPointer(props?: IRandomGenerator.ILengthProps): string;
}
export namespace IRandomGenerator {
  /**
   * String length bounds that the generated code forwards to a generator.
   *
   * @evidence contracts/common.md#principled-implementation Two optional numbers mirror the schema's minLength and maxLength; they are optional because either side may be open.
   * @evidence contracts/common.md#clear-and-simple-design A separate record shared by every format method instead of repeated inline literals.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; it does not validate that the bounds are consistent.
   * @evidence contracts/common.md#meaningful-documentation The comment and field comments say they are forwarded by the generated code when the property has length tags.
   */
  export interface ILengthProps {
    /** Minimum number of characters, when the property has a `minLength`. */
    minLength?: number;

    /** Maximum number of characters, when the property has a `maxLength`. */
    maxLength?: number;
  }

  /**
   * Epoch millisecond bounds of a generated date or date-time.
   *
   * @evidence contracts/common.md#principled-implementation Two optional epoch millisecond numbers bound the instant of a date or date-time; either side may be open.
   * @evidence contracts/common.md#clear-and-simple-design A separate record because only date and datetime use it.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; it does not validate the order of the bounds.
   * @evidence contracts/common.md#meaningful-documentation The comment and field comments state that the unit is milliseconds since the epoch.
   */
  export interface IEpochProps {
    /** Earliest instant, in milliseconds since the epoch. */
    minimum?: number;

    /** Latest instant, in milliseconds since the epoch. */
    maximum?: number;
  }

  /**
   * Custom generators keyed by the schema kind they would replace.
   *
   * @evidence contracts/common.md#principled-implementation Each optional member is keyed by a schema kind and receives that kind's schema extended with arbitrary extra keys, so a custom generator can read vendor keywords; the return type matches the kind's value type.
   * @evidence contracts/common.md#clear-and-simple-design Six optional members, one per kind that has a schema-driven generator. No code in this repository reads the map, so it documents an extension shape and not a behavior verified here.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The map supplies replacements by value and patches nothing.
   * @evidence contracts/common.md#meaningful-documentation The comment names the keyed-by-kind role and each member names the schema it receives.
   */
  export interface CustomMap {
    /**
     * Custom string generator, called with the string schema.
     *
     * @evidence contracts/common.md#principled-implementation A function from the string schema, plus extra keys, to a string.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives.
     */
    string?: (
      schema: OpenApi.IJsonSchema.IString & Record<string, any>,
    ) => string;

    /**
     * Custom number generator, called with the number schema.
     *
     * @evidence contracts/common.md#principled-implementation A function from the number schema, plus extra keys, to a number.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives.
     */
    number?: (
      schema: OpenApi.IJsonSchema.INumber & Record<string, any>,
    ) => number;

    /**
     * Custom integer generator, called with the integer schema.
     *
     * @evidence contracts/common.md#principled-implementation A function from the integer schema, plus extra keys, to a number.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives.
     */
    integer?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => number;

    /**
     * Custom bigint generator, called with the integer schema.
     *
     * @evidence contracts/common.md#principled-implementation A function from the integer schema, plus extra keys, to a bigint.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives.
     */
    bigint?: (
      schema: OpenApi.IJsonSchema.IInteger & Record<string, any>,
    ) => bigint;

    /**
     * Custom boolean generator, called with the schema record.
     *
     * @evidence contracts/common.md#principled-implementation A function from a free-form schema record to an optional boolean, the same result type as the interface's boolean method.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives.
     */
    boolean?: (schema: Record<string, any>) => boolean | undefined;

    /**
     * Custom array generator, called with the array schema and an element
     * generator.
     *
     * @evidence contracts/common.md#principled-implementation A generic function from the array schema, the element callback and the recursion flag, plus extra keys, to an array of the element type.
     * @evidence contracts/common.md#clear-and-simple-design One optional member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type declaration only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment states the schema it receives, and the recursion flag has its own comment.
     */
    array?: <T>(
      schema: Omit<OpenApi.IJsonSchema.IArray, "items"> & {
        element: (index: number, count: number) => T;

        /**
         * Whether this array lies on a recursive type's cycle. Custom
         * generators can bias toward fewer (or zero) elements so graph-shaped
         * data terminates instead of growing without bound.
         */
        recursive?: boolean;
      } & Record<string, any>,
    ) => T[];
  }
}
