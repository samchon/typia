import typia from "typia";

/**
 * Verifies generated Protobuf decoders accept unknown zero-length
 * length-delimited fields.
 *
 * An empty string, an empty bytes value, an empty embedded message, and an
 * empty packed repeated field all serialize to the same length-delimited record
 * with a declared length of zero. Skipping such a record must consume exactly
 * its two bytes, otherwise a reader that does not know the field desynchronizes
 * and rejects a well-formed payload, which is the forward compatibility that
 * unknown-field skipping exists to provide.
 *
 * 1. Round-trip messages whose trailing field is an empty string, bytes value, or
 *    embedded message, and decode them through a schema missing that field.
 * 2. Decode the same record hand-built as the leading and the trailing field,
 *    through every direct and factory decoder.
 * 3. Assert the record leaves a required, optional, packed, and surrounding known
 *    field intact, and that a truncated record is still rejected.
 */
export const test_protobuf_decode_zero_length_unknown_field = (): void => {
  // field 2 length-delimited declaring a length of zero, around field 1 = "a"
  const trailing: Uint8Array = Uint8Array.of(0x0a, 1, 0x61, 0x12, 0);
  const leading: Uint8Array = Uint8Array.of(0x12, 0, 0x0a, 1, 0x61);

  // an unknown zero-length record is what a newer schema's empty field emits
  const evolved: Array<readonly [string, Uint8Array]> = [
    [
      "empty string",
      typia.protobuf.encode<IEvolvedString>({ value: "a", extra: "" }),
    ],
    [
      "empty bytes",
      typia.protobuf.encode<IEvolvedBytes>({
        value: "a",
        extra: new Uint8Array(0),
      }),
    ],
    [
      "empty embedded message",
      typia.protobuf.encode<IEvolvedNested>({ value: "a", extra: {} }),
    ],
  ];
  for (const [label, encoded] of evolved) {
    if (encoded.join() !== trailing.join())
      throw new Error(
        `${label} encoded to ${encoded.join()} instead of ${trailing.join()}.`,
      );
    if (typia.protobuf.decode<IValue>(encoded).value !== "a")
      throw new Error(`${label} did not survive a decoder missing the field.`);
  }

  // an empty packed repeated field encodes to the identical record, which
  // typia's own writer never emits because it omits an empty repeated field
  const packed: typia.Resolved<IPacked> = typia.protobuf.decode<IPacked>(
    Uint8Array.of(0x0a, 2, 1, 2, 0x12, 0),
  );
  if (packed.values.join() !== "1,2")
    throw new Error(
      "a trailing empty packed record broke a known packed repeated field.",
    );

  const decoders: Array<
    readonly [string, (input: Uint8Array) => typia.Resolved<IValue>]
  > = [
    ["decode", (input) => typia.protobuf.decode<IValue>(input)],
    ["createDecode", typia.protobuf.createDecode<IValue>()],
    ["assertDecode", (input) => typia.protobuf.assertDecode<IValue>(input)],
    ["createAssertDecode", typia.protobuf.createAssertDecode<IValue>()],
    [
      "isDecode",
      (input) => must("isDecode", typia.protobuf.isDecode<IValue>(input)),
    ],
    [
      "createIsDecode",
      (
        (closure) => (input: Uint8Array) =>
          must("createIsDecode", closure(input))
      )(typia.protobuf.createIsDecode<IValue>()),
    ],
    [
      "validateDecode",
      (input) =>
        unwrap("validateDecode", typia.protobuf.validateDecode<IValue>(input)),
    ],
    [
      "createValidateDecode",
      (
        (closure) => (input: Uint8Array) =>
          unwrap("createValidateDecode", closure(input))
      )(typia.protobuf.createValidateDecode<IValue>()),
    ],
  ];
  for (const [label, decode] of decoders) {
    if (decode(leading).value !== "a")
      throw new Error(
        `${label} desynchronized on a leading zero-length record.`,
      );
    if (decode(trailing).value !== "a")
      throw new Error(
        `${label} desynchronized on a trailing zero-length record.`,
      );
  }

  // optional presence and a record standing between two known fields
  if (typia.protobuf.decode<IOptional>(leading).value !== "a")
    throw new Error(
      "an optional field lost its value to a zero-length record.",
    );
  if (
    typia.protobuf.decode<IOptional>(Uint8Array.of(0x12, 0)).value !== undefined
  )
    throw new Error("a lone zero-length record produced a phantom value.");
  const pair: typia.Resolved<IPair> = typia.protobuf.decode<IPair>(
    Uint8Array.of(0x0a, 1, 0x61, 0x1a, 0, 0x12, 1, 0x62),
  );
  if (pair.first !== "a" || pair.second !== "b")
    throw new Error(
      "a zero-length record between two known fields desynchronized.",
    );

  // #2083: a declared length beyond the buffer is still rejected
  assertOverflow("truncated unknown record", () =>
    typia.protobuf.decode<IValue>(Uint8Array.of(0x0a, 1, 0x61, 0x12, 2, 0x62)),
  );
};

interface IValue {
  value: string;
}

interface IOptional {
  value?: string;
}

interface IEvolvedString {
  value: string;
  extra: string;
}

interface IEvolvedBytes {
  value: string;
  extra: Uint8Array;
}

interface IEvolvedNested {
  value: string;
  extra: {
    text?: string;
  };
}

interface IPacked {
  values: Array<number & typia.tags.Type<"uint32">>;
}

interface IPair {
  first: string;
  second: string;
}

const must = <T>(label: string, value: T | null): T => {
  if (value === null) throw new Error(`${label} rejected a valid payload.`);
  return value;
};

const unwrap = <T>(label: string, result: typia.IValidation<T>): T => {
  if (result.success === false)
    throw new Error(`${label} rejected a valid payload.`);
  return result.data;
};

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
