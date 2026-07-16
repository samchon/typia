import { TestValidator } from "@nestia/e2e";
import typia from "typia";

import { assertBlobClone, assertFileClone } from "./PlainNativeClone";

interface IBlobFilePayload {
  blob: Blob;
  file: File;
  dynamic: any;
}

/**
 * Verifies plain clone and classify preserve Blob and File content and
 * metadata.
 */
export const test_plain_native_clone_blob_file = async (): Promise<void> => {
  const clone = typia.plain.createClone<IBlobFilePayload>();
  const classify = typia.plain.createClassify<IBlobFilePayload>();
  const operations: Array<
    [string, (input: IBlobFilePayload) => IBlobFilePayload]
  > = [
    ["direct clone", (input) => typia.plain.clone<IBlobFilePayload>(input)],
    ["factory clone", clone],
    [
      "direct classify",
      (input) => typia.plain.classify<IBlobFilePayload>(input),
    ],
    ["factory classify", classify],
  ];
  for (const [label, operation] of operations) {
    const input = createPayload();
    const output = operation(input);
    TestValidator.predicate(`${label} root identity`, () => input !== output);
    await assertBlobClone(`${label} Blob`, input.blob, output.blob);
    await assertFileClone(`${label} File`, input.file, output.file);
    await assertBlobClone(
      `${label} nested any Blob`,
      input.dynamic.blob,
      output.dynamic.blob,
    );
    await assertFileClone(
      `${label} nested any File`,
      input.dynamic.file,
      output.dynamic.file,
    );
  }

  const dynamicClone = typia.plain.createClone<any>();
  const dynamicInput = createPayload().dynamic;
  const dynamicOutput = dynamicClone(dynamicInput);
  await assertBlobClone("root any Blob", dynamicInput.blob, dynamicOutput.blob);
  await assertFileClone("root any File", dynamicInput.file, dynamicOutput.file);

  const cloneUnion = typia.plain.createClone<Blob | File>();
  const values: Array<[string, Blob | File]> = [
    ["non-empty Blob", createPayload().blob],
    ["empty Blob", new Blob([], { type: "application/x-empty" })],
    ["non-empty File", createPayload().file],
    [
      "empty File",
      new File([], "empty.bin", {
        type: "application/octet-stream",
        lastModified: 321,
      }),
    ],
  ];
  for (const [label, input] of values) {
    const output = cloneUnion(input);
    if (input instanceof File)
      await assertFileClone(label, input, output as File);
    else await assertBlobClone(label, input, output as Blob);
  }

  const invalidBlob = {
    ...createPayload(),
    blob: { size: 3, type: "application/x-fake" },
  };
  const invalidFile = { ...createPayload(), file: new Blob() };
  const isClone = typia.plain.createIsClone<IBlobFilePayload>();
  TestValidator.predicate(
    "rejects Blob twin",
    () => isClone(invalidBlob) === null,
  );
  TestValidator.predicate(
    "rejects File twin",
    () => isClone(invalidFile) === null,
  );
};

const createPayload = (): IBlobFilePayload => ({
  blob: new Blob([Uint8Array.from([0, 1, 255])], {
    type: "application/x-typia",
  }),
  file: new File([Uint8Array.from([3, 2, 1])], "native.bin", {
    type: "application/octet-stream",
    lastModified: 987_654_321,
  }),
  dynamic: {
    blob: new Blob([Uint8Array.from([9, 8, 7])], { type: "text/x-any" }),
    file: new File(["dynamic"], "dynamic.txt", {
      type: "text/plain",
      lastModified: 777,
    }),
  },
});
