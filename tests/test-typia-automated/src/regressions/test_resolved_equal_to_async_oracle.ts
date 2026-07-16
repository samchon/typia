import { TestStructure } from "@typia/template";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to_async } from "../utils/resolved_equal_to_async";

/**
 * Verifies the FormData oracle compares blob content and metadata, not brands.
 *
 * The resolving oracle used to answer `x instanceof File ? y instanceof File :
 * true` for a blob, so two blobs of any size, media type, name, modification
 * time, and content compared equal. Metadata is now synchronous, and because
 * `Blob.arrayBuffer()` is not, byte equality lives in this asynchronous variant,
 * which the four FormData internals use. The last cases pin the projection a
 * real `FormData` performs, so the oracle cannot be tightened into rejecting
 * correct product output.
 *
 * 1. Reject a changed size, media type, name, and modification time.
 * 2. Reject same-size different bytes, which only the awaited pass can see.
 * 3. Round trip through a real `FormData` and require the result accepted.
 */
export const test_resolved_equal_to_async_oracle = async (): Promise<void> => {
  const wrong: string[] = [];
  for (const item of await cases()) {
    const actual: boolean = await resolved_equal_to_async(PROBE)(
      item.x,
      item.y,
      { silent: true },
    );
    if (actual !== item.equal) wrong.push(`${item.title} -> ${actual}`);
  }
  if (wrong.length !== 0)
    throw new Error(
      `Bug on resolved_equal_to_async(): wrong answers.\n  - ${wrong.join(
        "\n  - ",
      )}`,
    );
};

const PROBE: TestStructure<any> = {
  constructor: { name: "Probe" },
  generate: () => ({}),
};

interface ICase {
  title: string;
  equal: boolean;
  x: unknown;
  y: unknown;
}

const file = (props: {
  bytes: number[];
  name?: string;
  type?: string;
  lastModified?: number;
}): File =>
  new File([Uint8Array.from(props.bytes)], props.name ?? "a.bin", {
    type: props.type ?? "application/octet-stream",
    lastModified: props.lastModified ?? 1,
  });

const cases = async (): Promise<ICase[]> => {
  // A REAL FORMDATA ROUND TRIP, WHOSE PROJECTION THE ORACLE MUST ACCEPT
  const blob: Blob = new Blob([Uint8Array.from([7, 8, 9])], {
    type: "application/x-typia",
  });
  const named: File = file({ bytes: [1, 2, 3], name: "payload.bin" });
  const input: Record<string, unknown> = { blob, file: named };
  const form: FormData = create_form_data(input);
  const output: Record<string, unknown> = {
    blob: form.get("blob"),
    file: form.get("file"),
  };

  return [
    // CONTENT: ONLY THE AWAITED PASS CAN SEE THESE
    {
      title: "blob accepts identical content",
      equal: true,
      x: { part: new Blob([Uint8Array.from([1, 2, 3])]) },
      y: { part: new Blob([Uint8Array.from([1, 2, 3])]) },
    },
    {
      title: "blob rejects same-size different content",
      equal: false,
      x: { part: new Blob([Uint8Array.from([1, 2, 3])]) },
      y: { part: new Blob([Uint8Array.from([1, 2, 4])]) },
    },
    {
      title: "file rejects same-size different content",
      equal: false,
      x: { part: file({ bytes: [1] }) },
      y: { part: file({ bytes: [2] }) },
    },
    // METADATA
    {
      title: "file accepts identical metadata and content",
      equal: true,
      x: { part: file({ bytes: [1] }) },
      y: { part: file({ bytes: [1] }) },
    },
    {
      title: "file rejects a different name",
      equal: false,
      x: { part: file({ bytes: [1], name: "a.bin" }) },
      y: { part: file({ bytes: [1], name: "b.bin" }) },
    },
    {
      title: "file rejects a different last modified time",
      equal: false,
      x: { part: file({ bytes: [1], lastModified: 1 }) },
      y: { part: file({ bytes: [1], lastModified: 2 }) },
    },
    {
      title: "file rejects a different media type",
      equal: false,
      x: { part: file({ bytes: [1], type: "text/plain" }) },
      y: { part: file({ bytes: [1], type: "application/json" }) },
    },
    {
      title: "file rejects demotion into a plain blob",
      equal: false,
      x: { part: file({ bytes: [1] }) },
      y: { part: new Blob([Uint8Array.from([1])]) },
    },
    {
      title: "blob rejects a different size",
      equal: false,
      x: { part: new Blob([Uint8Array.from([1])]) },
      y: { part: new Blob([Uint8Array.from([1, 2])]) },
    },
    {
      title: "blob rejects a different media type",
      equal: false,
      x: { part: new Blob([Uint8Array.from([1])], { type: "text/plain" }) },
      y: {
        part: new Blob([Uint8Array.from([1])], { type: "application/json" }),
      },
    },
    // THE FORMDATA PROJECTION: A BLOB LEGITIMATELY MATERIALIZES AS A FILE
    {
      title: "blob accepts materialization into a file",
      equal: true,
      x: { part: new Blob([Uint8Array.from([1])], { type: "text/plain" }) },
      y: {
        part: new File([Uint8Array.from([1])], "blob", { type: "text/plain" }),
      },
    },
    {
      title: "form data round trip is accepted",
      equal: true,
      x: input,
      y: output,
    },
    {
      title: "form data round trip rejects swapped parts",
      equal: false,
      x: input,
      y: { blob: output.file, file: output.blob },
    },
  ];
};
