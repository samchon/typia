import { TestValidator } from "@nestia/e2e";
import typia from "typia";

import {
  assertBlobClone,
  assertDataViewClone,
  assertFileClone,
  assertRegExpClone,
} from "./PlainNativeClone";

interface ICollectionPayload {
  views: Set<DataView>;
  files: Map<string, File>;
  dynamic: any;
}

/**
 * Verifies plain clone and classify recurse into native values stored in Set
 * and Map collections.
 */
export const test_plain_native_clone_collection = async (): Promise<void> => {
  const clone = typia.plain.createClone<ICollectionPayload>();
  const classify = typia.plain.createClassify<ICollectionPayload>();
  const operations: Array<
    [string, (input: ICollectionPayload) => ICollectionPayload]
  > = [
    ["direct clone", (input) => typia.plain.clone<ICollectionPayload>(input)],
    ["factory clone", clone],
    [
      "direct classify",
      (input) => typia.plain.classify<ICollectionPayload>(input),
    ],
    ["factory classify", classify],
  ];
  for (const [label, operation] of operations) {
    const input = createPayload();
    const output = operation(input);
    TestValidator.predicate(
      `${label} Set identity`,
      () => input.views !== output.views,
    );
    TestValidator.predicate(
      `${label} Map identity`,
      () => input.files !== output.files,
    );
    assertDataViewClone(
      `${label} Set DataView`,
      [...input.views][0]!,
      [...output.views][0]!,
    );
    await assertFileClone(
      `${label} Map File`,
      input.files.get("file")!,
      output.files.get("file")!,
    );

    const inputDynamic = input.dynamic as Map<string, Blob | RegExp>;
    const outputDynamic = output.dynamic as Map<string, Blob | RegExp>;
    TestValidator.predicate(
      `${label} dynamic Map identity`,
      () => inputDynamic !== outputDynamic,
    );
    await assertBlobClone(
      `${label} dynamic Map Blob`,
      inputDynamic.get("blob") as Blob,
      outputDynamic.get("blob") as Blob,
    );
    assertRegExpClone(
      `${label} dynamic Map RegExp`,
      inputDynamic.get("regexp") as RegExp,
      outputDynamic.get("regexp") as RegExp,
    );
  }
};

const createPayload = (): ICollectionPayload => {
  const regexp = /collection/gis;
  regexp.lastIndex = 4;
  return {
    views: new Set([new DataView(Uint8Array.from([9, 1, 2, 8]).buffer, 1, 2)]),
    files: new Map([
      [
        "file",
        new File([Uint8Array.from([3, 2, 1])], "collection.bin", {
          type: "application/octet-stream",
          lastModified: 246_810,
        }),
      ],
    ]),
    dynamic: new Map<string, Blob | RegExp>([
      ["blob", new Blob(["collection"], { type: "text/plain" })],
      ["regexp", regexp],
    ]),
  };
};
