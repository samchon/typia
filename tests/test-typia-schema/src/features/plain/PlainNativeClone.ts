import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";

export const assertDataViewClone = (
  label: string,
  input: DataView,
  output: DataView,
): void => {
  TestValidator.predicate(
    `${label} instance`,
    () => output instanceof DataView,
  );
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestEquality.equals(`${label} byteOffset`, 0, output.byteOffset);
  TestEquality.equals(
    `${label} byteLength`,
    input.byteLength,
    output.byteLength,
  );
  TestEquality.equals(
    `${label} backing length`,
    input.byteLength,
    output.buffer.byteLength,
  );
  TestEquality.equals(
    `${label} backing brand`,
    Object.prototype.toString.call(input.buffer),
    Object.prototype.toString.call(output.buffer),
  );
  const expected = visibleBytes(input);
  TestEquality.equals(`${label} visible bytes`, expected, visibleBytes(output));
  if (input.byteLength !== 0) {
    const source = input.getUint8(0);
    input.setUint8(0, source ^ 0xff);
    TestEquality.equals(
      `${label} source independence`,
      expected,
      visibleBytes(output),
    );
    input.setUint8(0, source);

    const cloned = output.getUint8(0);
    output.setUint8(0, cloned ^ 0xff);
    TestEquality.equals(
      `${label} result independence`,
      expected,
      visibleBytes(input),
    );
    output.setUint8(0, cloned);
  }
};

export const assertTypedArrayClone = (
  label: string,
  input: Uint16Array | Uint8Array,
  output: Uint16Array | Uint8Array,
): void => {
  TestValidator.predicate(label, () =>
    input instanceof Uint16Array
      ? output instanceof Uint16Array
      : output instanceof Uint8Array,
  );
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestValidator.predicate(
    `${label} buffer identity`,
    () => input.buffer !== output.buffer,
  );
  const expected = Array.from(input);
  TestEquality.equals(`${label} content`, expected, Array.from(output));
  if (input.length !== 0) {
    const source = input[0]!;
    input[0] = source + 1;
    TestEquality.equals(
      `${label} source independence`,
      expected,
      Array.from(output),
    );
    input[0] = source;
  }
};

export const assertBufferClone = (
  label: string,
  input: ArrayBuffer | SharedArrayBuffer,
  output: ArrayBuffer | SharedArrayBuffer,
): void => {
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestEquality.equals(
    `${label} brand`,
    Object.prototype.toString.call(input),
    Object.prototype.toString.call(output),
  );
  const expected = Array.from(new Uint8Array(input));
  TestEquality.equals(
    `${label} content`,
    expected,
    Array.from(new Uint8Array(output)),
  );
  if (input.byteLength !== 0) {
    const source = new Uint8Array(input);
    source[0] = source[0]! ^ 0xff;
    TestEquality.equals(
      `${label} independence`,
      expected,
      Array.from(new Uint8Array(output)),
    );
    source[0] = expected[0]!;
  }
};

export const assertBlobClone = async (
  label: string,
  input: Blob,
  output: Blob,
): Promise<void> => {
  TestValidator.predicate(`${label} instance`, () => output instanceof Blob);
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestEquality.equals(`${label} type`, input.type, output.type);
  TestEquality.equals(`${label} size`, input.size, output.size);
  TestEquality.equals(
    `${label} content`,
    Array.from(new Uint8Array(await input.arrayBuffer())),
    Array.from(new Uint8Array(await output.arrayBuffer())),
  );
};

export const assertFileClone = async (
  label: string,
  input: File,
  output: File,
): Promise<void> => {
  TestValidator.predicate(`${label} instance`, () => output instanceof File);
  await assertBlobClone(label, input, output);
  TestEquality.equals(`${label} name`, input.name, output.name);
  TestEquality.equals(
    `${label} lastModified`,
    input.lastModified,
    output.lastModified,
  );
};

export const assertRegExpClone = (
  label: string,
  input: RegExp,
  output: RegExp,
): void => {
  TestValidator.predicate(`${label} instance`, () => output instanceof RegExp);
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestEquality.equals(`${label} source`, input.source, output.source);
  TestEquality.equals(`${label} flags`, input.flags, output.flags);
  TestEquality.equals(`${label} lastIndex reset`, 0, output.lastIndex);
  input.lastIndex = 2;
  TestEquality.equals(
    `${label} source state independence`,
    0,
    output.lastIndex,
  );
  output.lastIndex = 3;
  TestEquality.equals(`${label} result state independence`, 2, input.lastIndex);
  output.lastIndex = 0;
};

const visibleBytes = (view: DataView): number[] =>
  Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));
