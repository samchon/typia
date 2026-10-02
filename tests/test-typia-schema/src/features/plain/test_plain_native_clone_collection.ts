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
 *
 * @evidence contracts/testing.md#behavioral-verification Clone/classify recurse into native values held by Sets and Maps.
 * @evidence contracts/testing.md#independent-expectations Source byte/content/metadata expectations and independent container identities anchor deep cloning.
 * @evidence contracts/testing.md#distinguishing-cases Four direct/factory operations retain typed Set<DataView>, Map<string,File> and any Map Blob/RegExp entries.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor executes test_plain_native_clone_collection under the schema ttsx/native suite. PlainNativeClone helpers inspect actual emitted outputs and async Blob/File checks are awaited.
 * @evidence contracts/e2e.md#necessary-boundary Native collection traversal must connect recursively to branded runtime cloning for typed and dynamic values.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load/native artifact and generated factories across its input variants; no extra host process or build is created.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each operation constructs local input payloads. Helper byte mutations are restored; RegExp helpers deliberately set local lastIndex to verify independence. Foreign VM objects are case-local; the suite owns host lifetime.
 * @evidence contracts/e2e.md#preserved-coverage Four direct/factory operations retain typed Set<DataView>, Map<string,File> and any Map Blob/RegExp entries. All helper assertions and original calls remain; source review does not substitute for final runtime checks.
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
