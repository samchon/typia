import { TestValidator } from "@nestia/e2e";
import typia from "typia";

import { assertDataViewClone } from "./PlainNativeClone";

/**
 * Verifies plain dynamic cloning recognizes intrinsic brands without trusting
 * prototype or toStringTag spoofing.
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
    TestValidator.equals(
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
  TestValidator.equals("toStringTag getter reads", 0, tagReads);
  TestValidator.equals(
    "toStringTag spoof properties",
    { label: "plain", nested: { value: 1 } },
    cloned,
  );
  TestValidator.predicate(
    "toStringTag spoof nested independence",
    () => spoof.nested !== cloned.nested,
  );
};
