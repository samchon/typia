import typia from "typia";

/**
 * Verifies generated Protobuf decoders reject truncated sized wire records.
 *
 * Decoder validation runs after wire parsing, so `is` and `validate` variants
 * must not turn a partial string or byte view into a successful product value.
 * Nested, packed, map, and unknown-field paths must share the reader boundary.
 *
 * 1. Exercise every direct and factory decoder with truncated strings and bytes.
 * 2. Cover optional, repeated, map, nested, packed, unknown, and fixed-width data.
 * 3. Keep zero-length, exact-end, and sliced-buffer valid controls.
 *
 * @evidence contracts/testing.md#behavioral-verification Eight variants reject truncated string/bytes; direct paths also cover optional/repeated/map/nested/packed/unknown/fixed-width truncation, exact ends, zero length and sliced-buffer bounds.
 * @evidence contracts/testing.md#independent-expectations Hand-framed field tags and declared lengths independently establish overflow or exact consumption. Literal ab/a/map and fixed-width zero values certify valid controls without typia encode output.
 * @evidence contracts/testing.md#distinguishing-cases Every original malformed placement and valid counterpart remain; subarray exact-end and one-byte-short views distinguish backing-buffer size from the payload view limit.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_decode_truncated_length_delimited in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native decode call sites select field numbers, reader operations and direct/factory/validation wrappers that consume the authored binary vectors. Portable reader units cannot prove this generated field dispatch and wrapper assembly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_decode_truncated_length_delimited = (): void => {
  const decoders: Array<readonly [string, (input: Uint8Array) => unknown]> = [
    ["decode", (input) => typia.protobuf.decode<IProduct>(input)],
    ["createDecode", typia.protobuf.createDecode<IProduct>()],
    ["assertDecode", (input) => typia.protobuf.assertDecode<IProduct>(input)],
    ["createAssertDecode", typia.protobuf.createAssertDecode<IProduct>()],
    ["isDecode", (input) => typia.protobuf.isDecode<IProduct>(input)],
    ["createIsDecode", typia.protobuf.createIsDecode<IProduct>()],
    [
      "validateDecode",
      (input) => typia.protobuf.validateDecode<IProduct>(input),
    ],
    ["createValidateDecode", typia.protobuf.createValidateDecode<IProduct>()],
  ];
  for (const [label, decode] of decoders) {
    assertOverflow(`${label} string`, () =>
      decode(Uint8Array.of(0x0a, 3, 0x61, 0x62)),
    );
    assertOverflow(`${label} bytes`, () =>
      decode(Uint8Array.of(0x12, 3, 1, 2)),
    );
  }

  const zero: typia.Resolved<IString> = typia.protobuf.decode<IString>(
    Uint8Array.of(0x0a, 0),
  );
  if (zero.value !== "") throw new Error("zero-length string did not decode.");
  const exact: typia.Resolved<IString> = typia.protobuf.decode<IString>(
    Uint8Array.of(0x0a, 2, 0x61, 0x62),
  );
  if (exact.value !== "ab") throw new Error("exact-end string did not decode.");

  const framed: Uint8Array = Uint8Array.of(0xff, 0x0a, 1, 0x61, 0xff);
  if (typia.protobuf.decode<IString>(framed.subarray(1, 4)).value !== "a")
    throw new Error("a sliced-buffer payload did not respect its exact end.");
  assertOverflow("sliced-buffer string", () =>
    typia.protobuf.decode<IString>(framed.subarray(1, 3)),
  );

  assertOverflow("optional string", () =>
    typia.protobuf.decode<IOptional>(Uint8Array.of(0x0a, 2, 0x61)),
  );
  assertOverflow("repeated string", () =>
    typia.protobuf.decode<IRepeated>(Uint8Array.of(0x0a, 2, 0x61)),
  );
  assertOverflow("map key", () =>
    typia.protobuf.decode<IMap>(Uint8Array.of(0x0a, 2, 0x0a, 1, 0x61)),
  );
  assertOverflow("map value", () =>
    typia.protobuf.decode<IMap>(Uint8Array.of(0x0a, 2, 0x12, 1, 0x61)),
  );
  assertOverflow("nested message", () =>
    typia.protobuf.decode<INested>(Uint8Array.of(0x0a, 2, 0x0a, 1, 0x61)),
  );
  assertOverflow("packed uint32", () =>
    typia.protobuf.decode<IPacked>(Uint8Array.of(0x0a, 1, 0x80, 1)),
  );
  assertOverflow("unknown length-delimited field", () =>
    typia.protobuf.decode<IUnknown>(Uint8Array.of(0x12, 2, 0x61)),
  );
  assertOverflow("float", () =>
    typia.protobuf.decode<IFloat>(Uint8Array.of(0x0d, 0, 0, 0)),
  );
  assertOverflow("double", () =>
    typia.protobuf.decode<IDouble>(Uint8Array.of(0x09, 0, 0, 0, 0, 0, 0, 0)),
  );

  if (
    typia.protobuf.decode<IRepeated>(Uint8Array.of(0x0a, 1, 0x61)).values[0] !==
    "a"
  )
    throw new Error("exact repeated string did not decode.");
  if (
    typia.protobuf
      .decode<IPacked>(Uint8Array.of(0x0a, 2, 1, 2))
      .values.join() !== "1,2"
  )
    throw new Error("exact packed values did not decode.");
  if (
    typia.protobuf.decode<IMap>(
      Uint8Array.of(0x0a, 6, 0x0a, 1, 0x61, 0x12, 1, 0x62),
    ).values.a !== "b"
  )
    throw new Error("exact map entry did not decode.");
  if (
    typia.protobuf.decode<INested>(Uint8Array.of(0x0a, 3, 0x0a, 1, 0x61)).value
      .text !== "a"
  )
    throw new Error("exact nested message did not decode.");
  if (
    typia.protobuf.decode<IFloat>(Uint8Array.of(0x0d, 0, 0, 0, 0)).value !==
      0 ||
    typia.protobuf.decode<IDouble>(Uint8Array.of(0x09, 0, 0, 0, 0, 0, 0, 0, 0))
      .value !== 0
  )
    throw new Error("exact fixed-width values did not decode.");
};

interface IProduct {
  text: string;
  data: Uint8Array;
}

interface IString {
  value: string;
}

interface IOptional {
  value?: string;
}

interface IRepeated {
  values: string[];
}

interface IMap {
  values: Record<string, string>;
}

interface INested {
  value: {
    text: string;
  };
}

interface IPacked {
  values: Array<number & typia.tags.Type<"uint32">>;
}

interface IUnknown {
  value?: string;
}

interface IFloat {
  value: number & typia.tags.Type<"float">;
}

interface IDouble {
  value: number & typia.tags.Type<"double">;
}

const assertOverflow = (label: string, closure: () => unknown): void => {
  try {
    closure();
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Error on typia.protobuf.decode(): buffer overflow."
    )
      return;
    throw new Error(`${label} reported ${String(error)} instead of overflow.`);
  }
  throw new Error(`${label} accepted a truncated Protobuf payload.`);
};
