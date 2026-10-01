import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies `@x-*` extension values read numbers with JavaScript's grammar.
 *
 * The native cast used Go's float syntax (#2442), so `NaN` and `Infinity`
 * became values JSON cannot hold (`Infinity` even crashed the emitted schema),
 * `0x10` stayed text, and Go-only spellings such as `0x1p4` became numbers. The
 * expected values restore v12's JavaScript `Number()` reading for finite values
 * and keep the text for spellings JSON has no number for.
 *
 * 1. Declare one property per spelling from the issue's table.
 * 2. Generate the JSON schema and the LLM parameters.
 * 3. Assert each extension value, before and after a JSON round trip.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schema, typia.llm.parameters is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (json.schema; json.schema round trip; llm.parameters). The case documents its purpose as: Verifies `@x-*` extension values read numbers with JavaScript's grammar.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The native cast used Go's float syntax (#2442), so `NaN` and `Infinity` became values JSON cannot hold (`Infinity` even crashed the emitted schema), `0x10` stayed text, and Go-only spellings such as `0x1p4` became numbers. The expected values restore v12's JavaScript `Number()` reading for finite values and keep the text for spellings JSON has no number for. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (json.schema; json.schema round trip; llm.parameters) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schema_jsdoc_extension_numbers is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schema_jsdoc_extension_numbers = (): void => {
  const expected: Record<string, unknown> = {
    nan: "NaN",
    infinity: "Infinity",
    overflow: "1e400",
    hex: 16,
    binary: 5,
    goFloat: "0x1p4",
    separator: "1_000",
    negativeZero: 0,
    point: 0.5,
  };
  const schema = typia.json.schema<IItem>();
  const object: any = schema.components.schemas?.IItem;
  const parameters: any = typia.llm.parameters<IItem>();
  const levels = (properties: Record<string, any>) =>
    Object.fromEntries(
      Object.entries(properties).map(([key, value]) => [key, value["x-level"]]),
    );

  TestEquality.equals("json.schema", expected, levels(object.properties));
  TestEquality.equals(
    "json.schema round trip",
    expected,
    levels(JSON.parse(JSON.stringify(object)).properties),
  );
  TestEquality.equals(
    "llm.parameters",
    expected,
    levels(parameters.properties),
  );
};

interface IItem {
  /** @x-level NaN */
  nan: string;

  /** @x-level Infinity */
  infinity: string;

  /** @x-level 1e400 */
  overflow: string;

  /** @x-level 0x10 */
  hex: string;

  /** @x-level 0b101 */
  binary: string;

  /** @x-level 0x1p4 */
  goFloat: string;

  /** @x-level 1_000 */
  separator: string;

  /** @x-level -0 */
  negativeZero: string;

  /** @x-level .5 */
  point: string;
}
