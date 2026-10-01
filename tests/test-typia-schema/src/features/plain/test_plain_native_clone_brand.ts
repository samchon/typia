import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { assertDataViewClone } from "./PlainNativeClone";

/**
 * Verifies plain dynamic cloning recognizes intrinsic brands without trusting
 * prototype or toStringTag spoofing.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.plain.createClone is evaluated by the native host on the types declared in this case and the result is checked by 5 assertions (… prototype impostor; toStringTag getter reads; toStringTag spoof properties; toStringTag spoof nested independence). The case documents its purpose as: Verifies plain dynamic cloning recognizes intrinsic brands without trusting prototype or toStringTag spoofing.
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (… prototype impostor; toStringTag getter reads; toStringTag spoof properties; toStringTag spoof nested independence) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_plain_native_clone_brand is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_plain_native_clone_brand = (): void => {
  const dynamicClone = typia.plain.createClone<any>();
  for (const [label, prototype] of [
    ["DataView", DataView.prototype],
    ["Blob", Blob.prototype],
    ["File", File.prototype],
    ["RegExp", RegExp.prototype],
  ] as const) {
    const input = Object.create(prototype) as { label: string };
    Object.defineProperty(input, "label", {
      enumerable: true,
      value: label,
    });
    TestEquality.equals(
      `${label} prototype impostor`,
      { label },
      dynamicClone(input),
    );
  }

  const taggedView = new DataView(Uint8Array.from([9, 1, 2, 8]).buffer, 1, 2);
  Object.defineProperty(taggedView, Symbol.toStringTag, {
    value: "CustomDataView",
  });
  assertDataViewClone(
    "custom-tag DataView",
    taggedView,
    dynamicClone(taggedView),
  );

  let tagReads = 0;
  const spoof = {
    get [Symbol.toStringTag](): string {
      ++tagReads;
      throw new Error("must not inspect a user toStringTag getter");
    },
    label: "plain",
    nested: { value: 1 },
  };
  const cloned = dynamicClone(spoof);
  TestEquality.equals("toStringTag getter reads", 0, tagReads);
  TestEquality.equals(
    "toStringTag spoof properties",
    { label: "plain", nested: { value: 1 } },
    cloned,
  );
  TestValidator.predicate(
    "toStringTag spoof nested independence",
    () => spoof.nested !== cloned.nested,
  );
};
