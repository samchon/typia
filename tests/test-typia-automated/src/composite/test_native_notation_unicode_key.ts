import typia from "typia";

interface SourceRecord {
  "\u00C9cole": number;
  "\u00F6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "key_\u00D6lig": number;
  "\u00D6": number;
  "\u0130stanbul": number;
  "\u00DF": number;
  "\uD801\uDC28test": number;
  "\u0391\u03A3_\u0391\u03A3": number;
  "e\u0301cole": number;
  "\u00FCber_Stra\u00DFe": number;
  MAX_COUNT: number;
  fooBar: number;
}

type DynamicRecord = Record<string, number>;

const toCamel = typia.notations.createCamel<SourceRecord>();
const toPascal = typia.notations.createPascal<SourceRecord>();
const toSnake = typia.notations.createSnake<SourceRecord>();
const toKebab = typia.notations.createKebab<SourceRecord>();

const toCamelDynamic = typia.notations.createCamel<DynamicRecord>();
const toPascalDynamic = typia.notations.createPascal<DynamicRecord>();
const toSnakeDynamic = typia.notations.createSnake<DynamicRecord>();
const toKebabDynamic = typia.notations.createKebab<DynamicRecord>();
const fixture = {
  toCamel,
  toPascal,
  toSnake,
  toKebab,
  toCamelDynamic,
  toPascalDynamic,
  toSnakeDynamic,
  toKebabDynamic,
};

/**
 * Verifies notation unicode key in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original notationUnicodeKeySource
 * declarations; the former notationUnicodeKeyRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: the literal runtime
 * assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from notationUnicodeKeyRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten Unicode output names and their distinct values establish each case mapping, including combining marks, complete astral code points, Greek forms and ordinary ASCII controls. normalize retains full codePointAt values instead of discarding the low surrogate. Dynamic-to-static agreement is a correlated consistency check; authored static expectations provide the independent anchor.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_notation_unicode_key in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed notationUnicodeKeySource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/notation_unicode_key_transform_test.go notationUnicodeKeyRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_notation_unicode_key = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  // Every source key carries a distinct value, so comparing the whole
  // key-to-value map proves the per-key renaming rather than just the key set.
  const input: any = {
    ["\u00C9cole"]: 1,
    ["\u00F6lwert"]: 2,
    ["\u65E5\u672C\u8A9E"]: 3,
    ["key_\u00D6lig"]: 4,
    ["\u00D6"]: 5,
    ["\u0130stanbul"]: 6,
    ["\u00DF"]: 7,
    ["\uD801\uDC28test"]: 8,
    ["\u0391\u03A3_\u0391\u03A3"]: 9,
    ["e\u0301cole"]: 10,
    ["\u00FCber_Stra\u00DFe"]: 11,
    ["MAX_COUNT"]: 12,
    ["fooBar"]: 13,
  };

  // Expectations are JavaScript's own case semantics, not a snapshot of the Go
  // emit: full case conversion (ß -> SS, İ -> i + U+0307, word-final
  // sigma ΑΣ -> ας) and UTF-16 code-unit indexing, under which
  // str[0] of an astral character is an uncased lone surrogate and stays put.
  const expected: any = {
    camel: {
      ["\u00E9cole"]: 1,
      ["\u00F6lwert"]: 2,
      ["\u65E5\u672C\u8A9E"]: 3,
      ["key\u00D6lig"]: 4,
      ["\u00F6"]: 5,
      ["i\u0307stanbul"]: 6,
      ["\u00DF"]: 7,
      ["\uD801\uDC28test"]: 8,
      ["\u03B1\u03C2\u0391\u03C3"]: 9,
      ["e\u0301cole"]: 10,
      ["\u00FCberStra\u00DFe"]: 11,
      ["maxCount"]: 12,
      ["fooBar"]: 13,
    },
    pascal: {
      ["\u00C9cole"]: 1,
      ["\u00D6lwert"]: 2,
      ["\u65E5\u672C\u8A9E"]: 3,
      ["Key\u00D6lig"]: 4,
      ["\u00D6"]: 5,
      ["\u0130stanbul"]: 6,
      ["SS"]: 7,
      ["\uD801\uDC28test"]: 8,
      ["\u0391\u03C3\u0391\u03C3"]: 9,
      ["E\u0301cole"]: 10,
      ["\u00DCberStra\u00DFe"]: 11,
      ["MaxCount"]: 12,
      ["FooBar"]: 13,
    },
    snake: {
      ["\u00E9cole"]: 1,
      ["\u00F6lwert"]: 2,
      ["\u65E5\u672C\u8A9E"]: 3,
      ["key_\u00F6lig"]: 4,
      ["\u00F6"]: 5,
      ["i\u0307stanbul"]: 6,
      ["\u00DF"]: 7,
      ["\uD801\uDC28test"]: 8,
      ["\u03B1\u03C2_\u03B1\u03C2"]: 9,
      ["e\u0301cole"]: 10,
      ["\u00FCber_stra\u00DFe"]: 11,
      ["max_count"]: 12,
      ["foo_bar"]: 13,
    },
    kebab: {
      ["\u00E9cole"]: 1,
      ["\u00F6lwert"]: 2,
      ["\u65E5\u672C\u8A9E"]: 3,
      ["key-\u00F6lig"]: 4,
      ["\u00F6"]: 5,
      ["i\u0307stanbul"]: 6,
      ["\u00DF"]: 7,
      ["\uD801\uDC28test"]: 8,
      ["\u03B1\u03C2-\u03B1\u03C2"]: 9,
      ["e\u0301cole"]: 10,
      ["\u00FCber-stra\u00DFe"]: 11,
      ["max-count"]: 12,
      ["foo-bar"]: 13,
    },
  };

  const normalize: any = (object: any): any =>
    JSON.stringify(
      Object.entries(object)
        .map(([key, value]: any): any => [
          Array.from(key, (c: any): any => c.codePointAt(0)),
          value,
        ])
        .sort((a: any, b: any): any => (String(a) < String(b) ? -1 : 1)),
    );

  const notations: any = ["camel", "pascal", "snake", "kebab"];
  const capitalize: any = (name: any): any =>
    name[0].toUpperCase() + name.substring(1);

  for (const notation of notations) {
    const want: any = normalize(expected[notation]);

    // The statically emitted converter: one property assignment per known key.
    const staticResult: any = mod["to" + capitalize(notation)](input);
    if (normalize(staticResult) !== want) {
      throw new Error(
        "static " +
          notation +
          " emit disagreed with JavaScript case semantics:\n" +
          "  expected " +
          want +
          "\n" +
          "  actual   " +
          normalize(staticResult),
      );
    }

    // The dynamic converter: one runtime _notation* call per index-signature key.
    const dynamicResult: any =
      mod["to" + capitalize(notation) + "Dynamic"](input);
    if (normalize(dynamicResult) !== normalize(staticResult)) {
      throw new Error(
        "static " +
          notation +
          " emit disagreed with the runtime helper:\n" +
          "  runtime " +
          normalize(dynamicResult) +
          "\n" +
          "  emit    " +
          normalize(staticResult),
      );
    }

    for (const key of Object.keys(staticResult)) {
      if (key.includes("�")) {
        throw new Error(
          "renamed " +
            notation +
            " key contains U+FFFD: " +
            JSON.stringify(key),
        );
      }
    }
  }
};
