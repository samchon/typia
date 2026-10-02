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
 * @evidence contracts/testing.md#behavioral-verification Numeric JSDoc tags interpret hexadecimal, exponent and binary spellings as JavaScript numbers.
 * @evidence contracts/testing.md#independent-expectations Authored 16, 1000 and 3 values plus below-bound/nonmultiple twins independently anchor runtime and schema results.
 * @evidence contracts/testing.md#distinguishing-cases Hex minimum, bigint exponent multiple, binary item count and three emitted schema keywords remain distinct.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_comment_tag_javascript_numbers in the schema start suite under ttsx and the native plugin; the exported body owns these assertions.
 * @evidence contracts/e2e.md#necessary-boundary Comment numeric parsing must feed valid emitted JavaScript checks and schema values rather than Go literal syntax.
 * @evidence contracts/e2e.md#shared-execution The suite project load and native artifact are reused with neighboring cases; no per-input process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and observed outputs are local to the case. The suite owns shared host lifetime; mutable data is not handed to another case and no cold cache behavior is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Hex minimum, bigint exponent multiple, binary item count and three emitted schema keywords remain distinct. Source review preserves the executable matrix; final native execution is tracked separately.
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
