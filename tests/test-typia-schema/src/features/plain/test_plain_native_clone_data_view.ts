import { TestValidator } from "@nestia/e2e";
import vm from "node:vm";
import typia from "typia";

import {
  assertBufferClone,
  assertDataViewClone,
  assertTypedArrayClone,
} from "./PlainNativeClone";

interface IBinaryPayload {
  view: DataView;
  sharedView: DataView;
  typed: Uint16Array;
  buffer: ArrayBuffer;
  shared: SharedArrayBuffer;
  dynamic: any;
}

/**
 * Verifies plain clone and classify preserve binary native ranges and storage
 * independence.
 */
export const test_plain_native_clone_data_view = (): void => {
  const clone = typia.plain.createClone<IBinaryPayload>();
  const classify = typia.plain.createClassify<IBinaryPayload>();
  const operations: Array<[string, (input: IBinaryPayload) => IBinaryPayload]> =
    [
      ["direct clone", (input) => typia.plain.clone<IBinaryPayload>(input)],
      ["factory clone", clone],
      [
        "direct classify",
        (input) => typia.plain.classify<IBinaryPayload>(input),
      ],
      ["factory classify", classify],
    ];
  for (const [label, operation] of operations) {
    const input = createPayload();
    const output = operation(input);
    TestValidator.predicate(`${label} root identity`, () => input !== output);
    assertDataViewClone(`${label} DataView`, input.view, output.view);
    assertDataViewClone(
      `${label} shared DataView`,
      input.sharedView,
      output.sharedView,
    );
    assertTypedArrayClone(`${label} typed array`, input.typed, output.typed);
    assertBufferClone(`${label} ArrayBuffer`, input.buffer, output.buffer);
    assertBufferClone(
      `${label} SharedArrayBuffer`,
      input.shared,
      output.shared,
    );
    assertDataViewClone(
      `${label} nested any DataView`,
      input.dynamic.view,
      output.dynamic.view,
    );
  }

  for (const [label, operation] of [
    ["direct dynamic clone", (input: any) => typia.plain.clone<any>(input)],
    ["factory dynamic clone", typia.plain.createClone<any>()],
  ] as const) {
    const input = createPayload().dynamic;
    const output = operation(input);
    assertDataViewClone(`${label} DataView`, input.view, output.view);
    assertTypedArrayClone(`${label} typed array`, input.typed, output.typed);
    assertBufferClone(`${label} ArrayBuffer`, input.buffer, output.buffer);
    assertBufferClone(
      `${label} SharedArrayBuffer`,
      input.shared,
      output.shared,
    );
  }

  const cloneUnion = typia.plain.createClone<DataView | ArrayBuffer>();
  for (const [label, input] of [
    ["zero DataView", new DataView(new ArrayBuffer(0))],
    ["full DataView", new DataView(Uint8Array.from([7, 8, 9]).buffer)],
    [
      "sliced DataView",
      new DataView(Uint8Array.from([9, 1, 2, 8]).buffer, 1, 2),
    ],
  ] as const)
    assertDataViewClone(label, input, cloneUnion(input) as DataView);

  const foreign = vm.runInNewContext(`(() => {
    const buffer = Uint8Array.from([9, 8, 7, 6]).buffer;
    const shared = new SharedArrayBuffer(4);
    new Uint8Array(shared).set([1, 2, 3, 4]);
    return {
      view: new DataView(buffer, 1, 2),
      sharedView: new DataView(shared, 1, 2),
      typed: new Uint8Array([4, 5, 6]),
      buffer,
      shared,
    };
  })()`);
  const foreignOutput = typia.plain.createClone<any>()(foreign);
  assertDataViewClone(
    "cross-realm any DataView",
    foreign.view,
    foreignOutput.view,
  );
  assertDataViewClone(
    "cross-realm any shared DataView",
    foreign.sharedView,
    foreignOutput.sharedView,
  );
  assertTypedArrayClone(
    "cross-realm any typed array",
    foreign.typed,
    foreignOutput.typed,
  );
  assertBufferClone(
    "cross-realm any ArrayBuffer",
    foreign.buffer,
    foreignOutput.buffer,
  );
  assertBufferClone(
    "cross-realm any SharedArrayBuffer",
    foreign.shared,
    foreignOutput.shared,
  );
  assertDataViewClone(
    "cross-realm typed DataView",
    foreign.view,
    typia.plain.createClone<DataView>()(foreign.view),
  );

  const invalid = { ...createPayload(), view: new Uint8Array([1, 2]) };
  TestValidator.predicate(
    "factory rejects DataView twin",
    () => typia.plain.createIsClone<IBinaryPayload>()(invalid) === null,
  );
  TestValidator.predicate(
    "direct rejects DataView twin",
    () => typia.plain.isClone<IBinaryPayload>(invalid) === null,
  );
};

const createPayload = (): IBinaryPayload => {
  const buffer = Uint8Array.from([10, 20, 30, 40, 50]).buffer;
  const shared = new SharedArrayBuffer(5);
  new Uint8Array(shared).set([50, 40, 30, 20, 10]);
  const dynamicBuffer = Uint8Array.from([7, 6, 5, 4]).buffer;
  const dynamicShared = new SharedArrayBuffer(4);
  new Uint8Array(dynamicShared).set([2, 4, 6, 8]);
  return {
    view: new DataView(buffer, 1, 3),
    sharedView: new DataView(shared, 2, 2),
    typed: new Uint16Array([100, 200, 300]),
    buffer: Uint8Array.from([1, 2, 3]).buffer,
    shared,
    dynamic: {
      view: new DataView(dynamicBuffer, 1, 2),
      typed: new Uint8Array([8, 6, 4, 2]),
      buffer: dynamicBuffer,
      shared: dynamicShared,
    },
  };
};
