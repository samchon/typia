import { TestValidator } from "@nestia/e2e";
import vm from "node:vm";
import typia from "typia";

import { assertRegExpClone } from "./PlainNativeClone";

interface IRegExpPayload {
  regexp: RegExp;
  dynamic: any;
  union: RegExp | DataView;
}

/**
 * Verifies plain clone and classify preserve RegExp source and flags while
 * resetting lastIndex.
 *
 * @evidence contracts/testing.md#behavioral-verification Clone/classify preserve RegExp source/flags while resetting match position.
 * @evidence contracts/testing.md#independent-expectations Original source/flags, fixed zero output lastIndex and separate state mutations independently anchor results.
 * @evidence contracts/testing.md#distinguishing-cases Four operations retain typed/nested-any/alternating union inputs, root-any and native union, foreign-realm typed/any clones and a fake-brand negative.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor executes test_plain_native_clone_regexp under the schema ttsx/native suite. PlainNativeClone helpers inspect actual emitted outputs and async Blob/File checks are awaited.
 * @evidence contracts/e2e.md#necessary-boundary Native RegExp metadata and dynamic dispatch must produce actual RegExp clones with reset independent state.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load/native artifact and generated factories across its input variants; no extra host process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each operation constructs local input payloads. Helper byte mutations are restored; RegExp helpers deliberately set local lastIndex to verify independence. Foreign VM objects are case-local; the suite owns host lifetime.
 * @evidence contracts/e2e.md#preserved-coverage Four operations retain typed/nested-any/alternating union inputs, root-any and native union, foreign-realm typed/any clones and a fake-brand negative. All helper assertions and original calls remain; source review does not substitute for final runtime checks.
 */
export const test_plain_native_clone_regexp = (): void => {
  const clone = typia.plain.createClone<IRegExpPayload>();
  const classify = typia.plain.createClassify<IRegExpPayload>();
  const operations: Array<[string, (input: IRegExpPayload) => IRegExpPayload]> =
    [
      ["direct clone", (input) => typia.plain.clone<IRegExpPayload>(input)],
      ["factory clone", clone],
      [
        "direct classify",
        (input) => typia.plain.classify<IRegExpPayload>(input),
      ],
      ["factory classify", classify],
    ];
  for (const [index, [label, operation]] of operations.entries()) {
    const input = createPayload(index % 2 === 0);
    const output = operation(input);
    assertRegExpClone(`${label} RegExp`, input.regexp, output.regexp);
    assertRegExpClone(
      `${label} nested any RegExp`,
      input.dynamic.regexp,
      output.dynamic.regexp,
    );
    if (input.union instanceof RegExp)
      assertRegExpClone(
        `${label} union RegExp`,
        input.union,
        output.union as RegExp,
      );
  }

  const root = /root-any/gis;
  root.lastIndex = 5;
  assertRegExpClone(
    "root any RegExp",
    root,
    typia.plain.createClone<any>()(root),
  );
  const union = /native-union/gimu;
  union.lastIndex = 4;
  assertRegExpClone(
    "native union RegExp",
    union,
    typia.plain.createClone<RegExp | DataView>()(union) as RegExp,
  );

  const foreign = vm.runInNewContext(`(() => {
    const regexp = /foreign/gim;
    regexp.lastIndex = 6;
    return regexp;
  })()`);
  assertRegExpClone(
    "cross-realm any RegExp",
    foreign,
    typia.plain.createClone<any>()(foreign),
  );
  assertRegExpClone(
    "cross-realm typed RegExp",
    foreign,
    typia.plain.createClone<RegExp>()(foreign),
  );

  const invalid = {
    ...createPayload(true),
    regexp: { source: "fake", flags: "g" },
  };
  TestValidator.predicate(
    "rejects RegExp twin",
    () => typia.plain.createIsClone<IRegExpPayload>()(invalid) === null,
  );
};

const createPayload = (regexpUnion: boolean): IRegExpPayload => {
  const regexp = /plain\s+native/giu;
  regexp.lastIndex = 3;
  const dynamic = /dynamic/gis;
  dynamic.lastIndex = 5;
  const union = /union/gimu;
  union.lastIndex = 2;
  return {
    regexp,
    dynamic: { regexp: dynamic },
    union: regexpUnion
      ? union
      : new DataView(Uint8Array.from([4, 3, 2, 1]).buffer, 1, 2),
  };
};
