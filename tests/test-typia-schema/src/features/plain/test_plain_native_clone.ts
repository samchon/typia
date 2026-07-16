import { TestValidator } from "@nestia/e2e";
import vm from "node:vm";
import typia from "typia";

interface INativePayload {
  view: DataView;
  sharedView: DataView;
  typed: Uint16Array;
  buffer: ArrayBuffer;
  shared: SharedArrayBuffer;
  blob: Blob;
  file: File;
  regexp: RegExp;
  dynamic: any;
  union: DataView | RegExp;
}

/**
 * Verifies plain clone and classify preserve supported native values.
 *
 * Native values exercise constructor-specific state that ordinary object
 * traversal cannot recover. This pins visible DataView ranges, binary content,
 * Blob/File metadata, RegExp state policy, cross-realm brands, and prototype
 * impostor negatives through direct, factory, typed, union, and any paths.
 *
 * 1. Clone and classify typed native payloads through direct and factory calls.
 * 2. Require exact content/range copies with independent mutable storage.
 * 3. Exercise dynamic and cross-realm natives plus prototype-spoof negatives.
 */
export const test_plain_native_clone = async (): Promise<void> => {
  const clone = typia.plain.createClone<INativePayload>();
  const classify = typia.plain.createClassify<INativePayload>();
  const operations: Array<[string, (input: INativePayload) => INativePayload]> =
    [
      ["direct clone", (input) => typia.plain.clone<INativePayload>(input)],
      ["factory clone", clone],
      [
        "direct classify",
        (input) => typia.plain.classify<INativePayload>(input),
      ],
      ["factory classify", classify],
    ];
  for (const [index, [label, operation]] of operations.entries()) {
    const input = createPayload(index % 2 === 0 ? "view" : "regexp");
    const output = operation(input);
    await assertPayloadClone(label, input, output);
  }

  const directDynamicOperations: Array<[string, (input: any) => any]> = [
    ["direct dynamic clone", (input) => typia.plain.clone<any>(input)],
  ];
  const factoryDynamicOperations: Array<[string, (input: any) => any]> = [
    ["factory dynamic clone", typia.plain.createClone<any>()],
  ];
  for (const [label, operation] of [
    ...directDynamicOperations,
    ...factoryDynamicOperations,
  ]) {
    const input = createDynamicPayload();
    const output = operation(input);
    await assertDynamicClone(label, input, output);
  }

  const cloneUnion = typia.plain.createClone<DataView | Blob | File | RegExp>();
  const zeroView = new DataView(new ArrayBuffer(0));
  assertDataViewClone(
    "native union zero DataView",
    zeroView,
    cloneUnion(zeroView) as DataView,
  );
  const fullView = new DataView(Uint8Array.from([7, 8, 9]).buffer);
  assertDataViewClone(
    "native union full DataView",
    fullView,
    cloneUnion(fullView) as DataView,
  );
  const unionView = new DataView(Uint8Array.from([9, 1, 2, 8]).buffer, 1, 2);
  assertDataViewClone(
    "native union DataView",
    unionView,
    cloneUnion(unionView) as DataView,
  );
  const unionBlob = new Blob([Uint8Array.from([3, 4])], {
    type: "application/x-union",
  });
  await assertBlobClone(
    "native union Blob",
    unionBlob,
    cloneUnion(unionBlob) as Blob,
  );
  const unionFile = new File([Uint8Array.from([5, 6])], "union.bin", {
    type: "application/octet-stream",
    lastModified: 1_234,
  });
  await assertFileClone(
    "native union File",
    unionFile,
    cloneUnion(unionFile) as File,
  );
  const unionRegExp = /union/giu;
  unionRegExp.lastIndex = 4;
  assertRegExpClone(
    "native union RegExp",
    unionRegExp,
    cloneUnion(unionRegExp) as RegExp,
  );

  assertValidatedNegativeTwins();
  assertCrossRealmClones();
  assertPrototypeNegativeTwins();
};

const createPayload = (union: "view" | "regexp"): INativePayload => {
  const buffer = Uint8Array.from([10, 20, 30, 40, 50]).buffer;
  const shared = new SharedArrayBuffer(5);
  new Uint8Array(shared).set([50, 40, 30, 20, 10]);
  const dynamicBuffer = Uint8Array.from([7, 6, 5, 4]).buffer;
  const dynamicRegExp = /dynamic/gi;
  dynamicRegExp.lastIndex = 3;
  const unionRegExp = /union/gimu;
  unionRegExp.lastIndex = 2;
  return {
    view: new DataView(buffer, 1, 3),
    sharedView: new DataView(shared, 2, 2),
    typed: new Uint16Array([100, 200, 300]),
    buffer: Uint8Array.from([1, 2, 3]).buffer,
    shared,
    blob: new Blob([Uint8Array.from([0, 1, 255])], {
      type: "application/x-typia",
    }),
    file: new File([Uint8Array.from([3, 2, 1])], "native.bin", {
      type: "application/octet-stream",
      lastModified: 987_654_321,
    }),
    regexp: /plain\s+native/giu,
    dynamic: {
      view: new DataView(dynamicBuffer, 1, 2),
      regexp: dynamicRegExp,
      file: new File(["dynamic"], "dynamic.txt", {
        type: "text/plain",
        lastModified: 777,
      }),
    },
    union:
      union === "view"
        ? new DataView(Uint8Array.from([4, 3, 2, 1]).buffer, 1, 2)
        : unionRegExp,
  };
};

const createDynamicPayload = (): any => {
  const arrayBuffer = Uint8Array.from([1, 3, 5, 7]).buffer;
  const shared = new SharedArrayBuffer(4);
  new Uint8Array(shared).set([2, 4, 6, 8]);
  const regexp = /dynamic-any/gis;
  regexp.lastIndex = 5;
  return {
    view: new DataView(arrayBuffer, 1, 2),
    sharedView: new DataView(shared, 1, 2),
    typed: new Uint8Array([8, 6, 4, 2]),
    arrayBuffer,
    shared,
    blob: new Blob([Uint8Array.from([9, 8, 7])], { type: "text/x-any" }),
    file: new File([Uint8Array.from([6, 5, 4])], "any.bin", {
      type: "application/x-any",
      lastModified: 456_789,
    }),
    regexp,
  };
};

const assertPayloadClone = async (
  label: string,
  input: INativePayload,
  output: INativePayload,
): Promise<void> => {
  TestValidator.predicate(`${label} root identity`, () => input !== output);
  assertDataViewClone(`${label} DataView`, input.view, output.view);
  assertDataViewClone(
    `${label} shared DataView`,
    input.sharedView,
    output.sharedView,
  );
  assertTypedArrayClone(`${label} typed array`, input.typed, output.typed);
  assertBufferClone(`${label} ArrayBuffer`, input.buffer, output.buffer);
  assertBufferClone(`${label} SharedArrayBuffer`, input.shared, output.shared);
  await assertBlobClone(`${label} Blob`, input.blob, output.blob);
  await assertFileClone(`${label} File`, input.file, output.file);
  assertRegExpClone(`${label} RegExp`, input.regexp, output.regexp);
  assertDataViewClone(
    `${label} nested any DataView`,
    input.dynamic.view,
    output.dynamic.view,
  );
  assertRegExpClone(
    `${label} nested any RegExp`,
    input.dynamic.regexp,
    output.dynamic.regexp,
  );
  await assertFileClone(
    `${label} nested any File`,
    input.dynamic.file,
    output.dynamic.file,
  );
  if (input.union instanceof DataView)
    assertDataViewClone(
      `${label} native union`,
      input.union,
      output.union as DataView,
    );
  else
    assertRegExpClone(
      `${label} native union`,
      input.union,
      output.union as RegExp,
    );
};

const assertDynamicClone = async (
  label: string,
  input: any,
  output: any,
): Promise<void> => {
  TestValidator.predicate(`${label} root identity`, () => input !== output);
  assertDataViewClone(`${label} DataView`, input.view, output.view);
  assertDataViewClone(
    `${label} shared DataView`,
    input.sharedView,
    output.sharedView,
  );
  assertTypedArrayClone(`${label} typed array`, input.typed, output.typed);
  assertBufferClone(
    `${label} ArrayBuffer`,
    input.arrayBuffer,
    output.arrayBuffer,
  );
  assertBufferClone(`${label} SharedArrayBuffer`, input.shared, output.shared);
  await assertBlobClone(`${label} Blob`, input.blob, output.blob);
  await assertFileClone(`${label} File`, input.file, output.file);
  assertRegExpClone(`${label} RegExp`, input.regexp, output.regexp);
};

const assertDataViewClone = (
  label: string,
  input: DataView,
  output: DataView,
): void => {
  TestValidator.predicate(
    `${label} instance`,
    () => output instanceof DataView,
  );
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestValidator.equals(`${label} byteOffset`, 0, output.byteOffset);
  TestValidator.equals(
    `${label} byteLength`,
    input.byteLength,
    output.byteLength,
  );
  TestValidator.equals(
    `${label} backing length`,
    input.byteLength,
    output.buffer.byteLength,
  );
  TestValidator.equals(
    `${label} backing brand`,
    Object.prototype.toString.call(input.buffer),
    Object.prototype.toString.call(output.buffer),
  );
  const expected = visibleBytes(input);
  TestValidator.equals(
    `${label} visible bytes`,
    expected,
    visibleBytes(output),
  );
  if (input.byteLength !== 0) {
    const source = input.getUint8(0);
    input.setUint8(0, source ^ 0xff);
    TestValidator.equals(
      `${label} source independence`,
      expected,
      visibleBytes(output),
    );
    input.setUint8(0, source);

    const cloned = output.getUint8(0);
    output.setUint8(0, cloned ^ 0xff);
    TestValidator.equals(
      `${label} result independence`,
      expected,
      visibleBytes(input),
    );
    output.setUint8(0, cloned);
  }
};

const visibleBytes = (view: DataView): number[] =>
  Array.from(new Uint8Array(view.buffer, view.byteOffset, view.byteLength));

const assertTypedArrayClone = (
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
  TestValidator.equals(`${label} content`, expected, Array.from(output));
  if (input.length !== 0) {
    const source = input[0]!;
    input[0] = source + 1;
    TestValidator.equals(
      `${label} source independence`,
      expected,
      Array.from(output),
    );
    input[0] = source;
  }
};

const assertBufferClone = (
  label: string,
  input: ArrayBuffer | SharedArrayBuffer,
  output: ArrayBuffer | SharedArrayBuffer,
): void => {
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestValidator.equals(
    `${label} brand`,
    Object.prototype.toString.call(input),
    Object.prototype.toString.call(output),
  );
  const expected = Array.from(new Uint8Array(input));
  TestValidator.equals(
    `${label} content`,
    expected,
    Array.from(new Uint8Array(output)),
  );
  if (input.byteLength !== 0) {
    const source = new Uint8Array(input);
    source[0] = source[0]! ^ 0xff;
    TestValidator.equals(
      `${label} independence`,
      expected,
      Array.from(new Uint8Array(output)),
    );
    source[0] = expected[0]!;
  }
};

const assertBlobClone = async (
  label: string,
  input: Blob,
  output: Blob,
): Promise<void> => {
  TestValidator.predicate(`${label} instance`, () => output instanceof Blob);
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestValidator.equals(`${label} type`, input.type, output.type);
  TestValidator.equals(`${label} size`, input.size, output.size);
  TestValidator.equals(
    `${label} content`,
    Array.from(new Uint8Array(await input.arrayBuffer())),
    Array.from(new Uint8Array(await output.arrayBuffer())),
  );
};

const assertFileClone = async (
  label: string,
  input: File,
  output: File,
): Promise<void> => {
  TestValidator.predicate(`${label} instance`, () => output instanceof File);
  await assertBlobClone(label, input, output);
  TestValidator.equals(`${label} name`, input.name, output.name);
  TestValidator.equals(
    `${label} lastModified`,
    input.lastModified,
    output.lastModified,
  );
};

const assertRegExpClone = (
  label: string,
  input: RegExp,
  output: RegExp,
): void => {
  TestValidator.predicate(`${label} instance`, () => output instanceof RegExp);
  TestValidator.predicate(`${label} identity`, () => input !== output);
  TestValidator.equals(`${label} source`, input.source, output.source);
  TestValidator.equals(`${label} flags`, input.flags, output.flags);
  TestValidator.equals(`${label} lastIndex reset`, 0, output.lastIndex);
  input.lastIndex = 2;
  TestValidator.equals(
    `${label} source state independence`,
    0,
    output.lastIndex,
  );
  output.lastIndex = 3;
  TestValidator.equals(
    `${label} result state independence`,
    2,
    input.lastIndex,
  );
  output.lastIndex = 0;
};

const assertValidatedNegativeTwins = (): void => {
  const factory = typia.plain.createIsClone<INativePayload>();
  const invalidView = {
    ...createPayload("view"),
    view: new Uint8Array([1, 2]),
  };
  const invalidBlob = {
    ...createPayload("view"),
    blob: { size: 3, type: "application/x-fake" },
  };
  const invalidRegExp = {
    ...createPayload("view"),
    regexp: { source: "fake", flags: "g" },
  };
  TestValidator.predicate(
    "factory rejects DataView twin",
    () => factory(invalidView) === null,
  );
  TestValidator.predicate(
    "factory rejects Blob twin",
    () => factory(invalidBlob) === null,
  );
  TestValidator.predicate(
    "factory rejects RegExp twin",
    () => factory(invalidRegExp) === null,
  );
  TestValidator.predicate(
    "direct rejects native twin",
    () => typia.plain.isClone<INativePayload>(invalidView) === null,
  );
};

const assertCrossRealmClones = (): void => {
  const foreign = vm.runInNewContext(`(() => {
    const buffer = Uint8Array.from([9, 8, 7, 6]).buffer;
    const shared = new SharedArrayBuffer(4);
    new Uint8Array(shared).set([1, 2, 3, 4]);
    const regexp = /foreign/gim;
    regexp.lastIndex = 6;
    return {
      view: new DataView(buffer, 1, 2),
      sharedView: new DataView(shared, 1, 2),
      typed: new Uint8Array([4, 5, 6]),
      buffer,
      shared,
      regexp,
    };
  })()`);
  const dynamicClone = typia.plain.createClone<any>();
  const output = dynamicClone(foreign);
  assertDataViewClone("cross-realm any DataView", foreign.view, output.view);
  assertDataViewClone(
    "cross-realm any shared DataView",
    foreign.sharedView,
    output.sharedView,
  );
  assertTypedArrayClone(
    "cross-realm any typed array",
    foreign.typed,
    output.typed,
  );
  assertBufferClone(
    "cross-realm any ArrayBuffer",
    foreign.buffer,
    output.buffer,
  );
  assertBufferClone(
    "cross-realm any SharedArrayBuffer",
    foreign.shared,
    output.shared,
  );
  assertRegExpClone("cross-realm any RegExp", foreign.regexp, output.regexp);

  const typedViewClone = typia.plain.createClone<DataView>();
  const typedRegExpClone = typia.plain.createClone<RegExp>();
  assertDataViewClone(
    "cross-realm typed DataView",
    foreign.view,
    typedViewClone(foreign.view),
  );
  assertRegExpClone(
    "cross-realm typed RegExp",
    foreign.regexp,
    typedRegExpClone(foreign.regexp),
  );
};

const assertPrototypeNegativeTwins = (): void => {
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
    const output = dynamicClone(input);
    TestValidator.equals(`${label} prototype impostor`, { label }, output);
  }

  const spoof = {
    [Symbol.toStringTag]: "DataView",
    label: "plain",
    nested: { value: 1 },
  };
  const cloned = dynamicClone(spoof);
  TestValidator.predicate(
    "toStringTag spoof remains plain",
    () => !(cloned instanceof DataView),
  );
  TestValidator.equals(
    "toStringTag spoof properties",
    {
      label: "plain",
      nested: { value: 1 },
    },
    cloned,
  );
  TestValidator.predicate(
    "toStringTag spoof nested independence",
    () => spoof.nested !== cloned.nested,
  );
};
