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
