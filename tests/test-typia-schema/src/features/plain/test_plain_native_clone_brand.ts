import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { assertDataViewClone } from "./PlainNativeClone";

/**
 * Verifies plain dynamic cloning recognizes intrinsic brands without trusting
 * prototype or toStringTag spoofing.
 *
 * @evidence contracts/testing.md#behavioral-verification Dynamic cloning recognizes intrinsic brands without trusting prototype or tag spoofing.
 * @evidence contracts/testing.md#independent-expectations Fixed plain outputs, zero getter reads and mutation-independent DataView bytes anchor behavior.
 * @evidence contracts/testing.md#distinguishing-cases Four prototype impostors, custom-tag real DataView and throwing toStringTag getter remain alongside nested independence.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor executes test_plain_native_clone_brand under the schema ttsx/native suite. PlainNativeClone helpers inspect actual emitted outputs and async Blob/File checks are awaited.
 * @evidence contracts/e2e.md#necessary-boundary Native any-clone emission must connect to brand-safe runtime dispatch rather than spoofable property inspection.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load/native artifact and generated factories across its input variants; no extra host process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each operation constructs local input payloads. Helper byte mutations are restored; RegExp helpers deliberately set local lastIndex to verify independence. Foreign VM objects are case-local; the suite owns host lifetime.
 * @evidence contracts/e2e.md#preserved-coverage Four prototype impostors, custom-tag real DataView and throwing toStringTag getter remain alongside nested independence. All helper assertions and original calls remain; source review does not substitute for final runtime checks.
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
