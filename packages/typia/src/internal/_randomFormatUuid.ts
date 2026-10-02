import { _ILengthProps, _randomFormatLength } from "./_randomStringLength";

/**
 * Generate a version 4 UUID.
 *
 * Uses Math.random for hexadecimal draws and emits the 36-character grouped
 * form. The fixed-length wrapper rejects bounds that exclude 36 after at most
 * 256 candidates. This helper promises the UUID layout, not cryptographic
 * entropy or uniqueness across invocations.
 *
 * @evidence contracts/common.md#principled-implementation The template `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx` is filled with random hexadecimal digits, with the version nibble fixed to 4 and the variant nibble to 8, 9, a or b, which gives a version-4 UUID; its length is fixed, so the length wrapper only accepts or rejects it.
 * @evidence contracts/common.md#clear-and-simple-design One expression over the fixed-length wrapper.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The template is the RFC 4122 layout.
 * @evidence contracts/common.md#meaningful-documentation Native prose states version/layout, source, fixed length and bounded rejection, without promising cryptographic entropy or cross-call uniqueness.
 */
export const _randomFormatUuid = (props?: _ILengthProps): string =>
  _randomFormatLength(props, () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }),
  );
