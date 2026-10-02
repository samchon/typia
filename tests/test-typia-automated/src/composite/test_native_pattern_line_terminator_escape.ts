import typia from "typia";

const isLF = typia.createIs<`a${"\n"}${string}b`>();
const isCR = typia.createIs<`a${"\r"}${string}b`>();
const isLS = typia.createIs<`a${"\u2028"}${string}b`>();
const isPS = typia.createIs<`a${"\u2029"}${string}b`>();
const isControl = typia.createIs<`prefix${string}postfix`>();

type LFRecord = Record<`a${"\n"}${string}`, number>;
const isRecord = typia.createIs<LFRecord>();
const stringifyRecord = typia.json.createStringify<LFRecord>();
const cloneRecord = typia.plain.createClone<LFRecord>();
const pruneRecord = typia.plain.createPrune<LFRecord>();
const camelRecord = typia.notations.createCamel<LFRecord>();
const fixture = {
  isLF,
  isCR,
  isLS,
  isPS,
  isControl,
  isRecord,
  stringifyRecord,
  cloneRecord,
  pruneRecord,
  camelRecord,
};

/**
 * Verifies pattern line terminator escape in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * patternLineTerminatorSource declarations; the former
 * patternLineTerminatorRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from patternLineTerminatorRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Exact LF, CR, line-separator and paragraph-separator characters determine acceptance, with line-removed strings rejecting. LF-bearing record keys enforce numeric values while nonmatching keys remain surplus; the source's other API declarations are emitted but this runner observes only predicates.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_pattern_line_terminator_escape in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed patternLineTerminatorSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/pattern_line_terminator_escape_transform_test.go patternLineTerminatorRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_pattern_line_terminator_escape = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const LS: any = String.fromCharCode(0x2028);
  const PS: any = String.fromCharCode(0x2029);
  const cases: any = [
    ["isLF", "a\nZZb", "aZZb"],
    ["isCR", "a\rZZb", "aZZb"],
    ["isLS", "a" + LS + "ZZb", "aZZb"],
    ["isPS", "a" + PS + "ZZb", "aZZb"],
  ];
  for (const [name, good, bad] of cases) {
    if (mod[name](good) !== true) {
      throw new Error(
        name +
          " must accept a value carrying its line terminator: " +
          JSON.stringify(good),
      );
    }
    if (mod[name](bad) !== false) {
      throw new Error(
        name +
          " must reject a value lacking its line terminator: " +
          JSON.stringify(bad),
      );
    }
  }

  if (mod.isControl("prefix_mid_postfix") !== true) {
    throw new Error(
      "line-terminator-free template must still accept a conforming value",
    );
  }
  if (mod.isControl("nope") !== false) {
    throw new Error(
      "line-terminator-free template must still reject a non-conforming value",
    );
  }

  // A Record index signature only constrains keys its key pattern matches, so the
  // newline in the key regex is what decides which keys get the number check. A
  // matching key with a bad value must fail, while a near-miss key that lacks the
  // newline is not matched (and so is left unchecked) -- together they prove the
  // escaped line terminator is load-bearing in the emitted regex.
  const goodRecord: any = {};
  goodRecord["a\nkey"] = 1;
  if (mod.isRecord(goodRecord) !== true) {
    throw new Error("Record: a matching key with a number value must pass");
  }
  const matchedBadValue: any = {};
  matchedBadValue["a\nkey"] = "not a number";
  if (mod.isRecord(matchedBadValue) !== false) {
    throw new Error(
      "Record: a newline-matching key with a non-number value must fail",
    );
  }
  if (mod.isRecord({ axkey: "not a number" }) !== true) {
    throw new Error(
      "Record: a key lacking the newline must not match the pattern, so it stays unchecked",
    );
  }
};
