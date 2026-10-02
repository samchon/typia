/**
 * Encodes fixture fields into a local FormData, repeating array entries and
 * omitting undefined values.
 *
 * @evidence contracts/common.md#principled-implementation Encodes fixture fields into a local FormData, repeating array entries and omitting undefined values.
 * @evidence contracts/common.md#clear-and-simple-design append distinguishes Blob/File from scalars, preserves a File name and stringifies other values; no decoder output supplies preparation.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This helper models the suite's flat transport-compatible fixture domain, not arbitrary object serialization or multipart framing.
 * @evidence contracts/common.md#meaningful-documentation The description identifies repeated-entry and binary-part behavior useful to callers.
 */
export const create_form_data = (input: Record<string, any>): FormData => {
  const encoded: FormData = new FormData();
  for (const [key, value] of Object.entries(input))
    if (Array.isArray(value)) value.map(append(encoded)(key));
    else append(encoded)(key)(value);
  return encoded;
};

const append = (data: FormData) => (key: string) => (value: any) => {
  if (value === undefined) return;
  else if (value instanceof Blob)
    if (value instanceof File) data.append(key, value, value.name);
    else data.append(key, value);
  else data.append(key, String(value));
};
