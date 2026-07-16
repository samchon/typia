import { TestStructure } from "@typia/template";

import { create_form_data } from "../utils/create_form_data";
import { resolved_equal_to_async } from "../utils/resolved_equal_to_async";

/**
 * Verifies the FormData oracle compares blob content, not only blob metadata.
 *
 * `Blob.arrayBuffer()` is asynchronous, so the resolving oracle could reach a
 * blob's brand and nothing else: two blobs of the same length and media type but
 * different bytes compared equal, which is exactly the corruption an HTTP
 * multipart round trip can produce. The asynchronous variant closes that gap,
 * and the last two cases pin the projection a real `FormData` performs, so the
 * oracle cannot be tightened into rejecting correct product output.
 *
 * 1. Accept identical content and reject same-size different bytes.
 * 2. Reject a changed `File` name, media type, and modification time.
 * 3. Round trip through a real `FormData` and require the result to be accepted.
 */
export const test_resolved_equal_to_async_oracle = async (): Promise<void> => {
  const wrong: string[] = [];
  for (const item of await cases()) {
    const actual: boolean = await resolved_equal_to_async(PROBE)(item.x, item.y);
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

const cases = async (): Promise<ICase[]> => {
  // A REAL FORMDATA ROUND TRIP, WHOSE PROJECTION THE ORACLE MUST ACCEPT
  const blob: Blob = new Blob([Uint8Array.from([7, 8, 9])], {
    type: "application/x-typia",
  });
  const file: File = new File([Uint8Array.from([1, 2, 3])], "payload.bin", {
    type: "application/octet-stream",
    lastModified: 123_456_789,
  });
  const input: Record<string, unknown> = { blob, file };
  const form: FormData = create_form_data(input);
  const output: Record<string, unknown> = {
    blob: form.get("blob"),
    file: form.get("file"),
  };

  return [
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
      x: { part: new File([Uint8Array.from([1])], "a.bin", { lastModified: 1 }) },
      y: { part: new File([Uint8Array.from([2])], "a.bin", { lastModified: 1 }) },
    },
    {
      title: "file rejects a different name",
      equal: false,
      x: { part: new File([Uint8Array.from([1])], "a.bin", { lastModified: 1 }) },
      y: { part: new File([Uint8Array.from([1])], "b.bin", { lastModified: 1 }) },
    },
    {
      title: "file rejects a different last modified time",
      equal: false,
      x: { part: new File([Uint8Array.from([1])], "a.bin", { lastModified: 1 }) },
      y: { part: new File([Uint8Array.from([1])], "a.bin", { lastModified: 2 }) },
    },
    {
      title: "file rejects a different media type",
      equal: false,
      x: {
        part: new File([Uint8Array.from([1])], "a.bin", {
          lastModified: 1,
          type: "text/plain",
        }),
      },
      y: {
        part: new File([Uint8Array.from([1])], "a.bin", {
          lastModified: 1,
          type: "application/json",
        }),
      },
    },
    {
      title: "form data round trip is accepted",
      equal: true,
      x: input,
      y: output,
    },
    {
      title: "form data round trip rejects a swapped part",
      equal: false,
      x: input,
      y: { blob: output.file, file: output.blob },
    },
  ];
};
