import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies numeric comment tags read JavaScript numbers.
 *
 * Numeric JSDoc tags used Go's float syntax and spliced their text into the
 * validator (#2442). `@minimum 0x10`, which JavaScript reads as 16, failed to
 * compile, and a bigint `@multipleOf 1e3` spliced `1e3n`, which is no BigInt
 * literal, so the validator threw a `TypeError` mixing BigInt and number. The
 * boundaries below come from the values `Number()` gives each spelling.
 *
 * 1. Declare hexadecimal, exponent, and binary tag values.
 * 2. Validate values on and one step past each boundary.
 * 3. Assert the emitted JSON schema carries the numeric values.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.is, typia.json.schema is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (valid; hex minimum; bigint multipleOf; binary minItems; schema values). The case documents its purpose as: Verifies numeric comment tags read JavaScript numbers.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: Numeric JSDoc tags used Go's float syntax and spliced their text into the validator (#2442). `@minimum 0x10`, which JavaScript reads as 16, failed to compile, and a bigint `@multipleOf 1e3` spliced `1e3n`, which is no BigInt literal, so the validator threw a `TypeError` mixing BigInt and number. The boundaries below come from the values `Number()` gives each spelling. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (valid; hex minimum; bigint multipleOf; binary minItems; schema values) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_comment_tag_javascript_numbers is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_comment_tag_javascript_numbers = (): void => {
  const valid: IValue = { hex: 16, big: 2000n, list: ["a", "b", "c"] };
  TestValidator.predicate("valid", () => typia.is<IValue>(valid));
  TestValidator.predicate(
    "hex minimum",
    () => typia.is<IValue>({ ...valid, hex: 15 }) === false,
  );
  TestValidator.predicate(
    "bigint multipleOf",
    () => typia.is<IValue>({ ...valid, big: 1500n }) === false,
  );
  TestValidator.predicate(
    "binary minItems",
    () => typia.is<IValue>({ ...valid, list: ["a", "b"] }) === false,
  );

  const schema: any =
    typia.json.schema<INumbers>().components.schemas?.INumbers;
  TestValidator.predicate(
    "schema values",
    () =>
      schema.properties.hex.minimum === 16 &&
      schema.properties.exponent.multipleOf === 1000 &&
      schema.properties.list.minItems === 3,
  );
};

interface IValue {
  /** @minimum 0x10 */
  hex: number;

  /** @multipleOf 1e3 */
  big: bigint;

  /** @minItems 0b11 */
  list: string[];
}
interface INumbers {
  /** @minimum 0x10 */
  hex: number;

  /** @multipleOf 1e3 */
  exponent: number;

  /** @minItems 0b11 */
  list: string[];
}
