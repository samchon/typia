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
 * @evidence contracts/testing.md#behavioral-verification typia.plain.createClone, typia.plain.createClassify, typia.plain.clone is evaluated by the native host on the types declared in this case and the result is checked by 1 assertion (rejects RegExp twin). The case documents its purpose as: Verifies plain clone and classify preserve RegExp source and flags while resetting lastIndex.
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (rejects RegExp twin) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_plain_native_clone_regexp is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
