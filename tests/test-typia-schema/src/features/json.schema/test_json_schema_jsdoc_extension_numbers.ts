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
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that JSON schemas and LLM parameters retain JavaScript-compatible x-level numeric/text values and survive JSON serialization.
 * @evidence contracts/testing.md#independent-expectations The hand-authored map pins Number grammar and JSON finiteness: hex/binary/.5 become finite numbers, NaN/Infinity/overflow/Go-only/separator spellings remain text.
 * @evidence contracts/testing.md#distinguishing-cases Nine spellings including negative zero and overflow survive both JSON and LLM output; JSON roundtrip distinguishes invalid non-finite serialization.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schema_jsdoc_extension_numbers through test-typia-schema start. Its actual typia call expressions are transformed in the suite project and their emitted values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary The shared native JSDoc cast must read source comments and emit valid JavaScript literals in both public producers. Direct schema-writer unit calls do not establish TypeScript call resolution, emitted JavaScript evaluation and public runtime consumption together.
 * @evidence contracts/e2e.md#shared-execution The case uses the existing ttsx schema-suite project and runner; sibling schema cases reuse the same content-keyed plugin artifact. All declared variants are prepared together, without per-variant compiler launches or fixture installs.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Produced schema objects and helper projections belong to this invocation; no generated schema is retained between cases. The suite owns process termination and ttsc owns content-keyed artifact invalidation; this case makes no cold-cache assertion.
 * @evidence contracts/e2e.md#preserved-coverage Nine spellings including negative zero and overflow survive both JSON and LLM output; JSON roundtrip distinguishes invalid non-finite serialization. Every original producer call and assertion stays enrolled under the same exported case; no portable assertion was removed or represented as independently covered elsewhere.
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
