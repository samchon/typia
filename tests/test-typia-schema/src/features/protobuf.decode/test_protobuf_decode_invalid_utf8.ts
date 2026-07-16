import typia from "typia";

/** Verifies every generated proto3 string position rejects malformed UTF-8. */
export const test_protobuf_decode_invalid_utf8 = (): void => {
  for (const [, text] of VALID_TEXTS) {
    const payload: Uint8Array = ENCODER.encode(text);
    const bytes: Uint8Array = Uint8Array.of(0xff, 0x80, 0xc0, 0xaf);
    const wire: Uint8Array = message({ bytes, defaultString: payload });
    for (const [decoder, decode] of DECODERS)
      assertDecoded(decoder, decode(wire), text, bytes);
  }

  for (const [label, payload] of INVALID_UTF8) {
    const bytesOnly: Uint8Array = message({
      bytes: payload,
      defaultString: ASCII,
    });
    for (const [decoder, decode] of DECODERS)
      assertDecoded(decoder, decode(bytesOnly), ASCII_TEXT, payload);

    for (const position of STRING_POSITIONS) {
      const wire: Uint8Array = message({
        bytes: payload,
        defaultString: ASCII,
        malformed: { payload, position },
      });
      for (const [decoder, decode] of DECODERS)
        assertInvalid(`${decoder}: ${position}: ${label}`, () => decode(wire));
    }
  }
};

interface IUtf8Surface {
  singular: string;
  optional?: string;
  repeated: string[];
  nested: IUtf8Nested;
  dictionary: Map<string, string>;
  bytes: Uint8Array;
}

interface IUtf8Nested {
  value: string;
}

type StringPosition = (typeof STRING_POSITIONS)[number];

const directIs = (input: Uint8Array): typia.Resolved<IUtf8Surface> => {
  const value = typia.protobuf.isDecode<IUtf8Surface>(input);
  if (value === null) throw new Error("direct isDecode returned null");
  return value;
};
const directValidate = (
  input: Uint8Array,
): typia.Resolved<IUtf8Surface> =>
  unwrap(
    "direct validateDecode",
    typia.protobuf.validateDecode<IUtf8Surface>(input),
  );

const factoryDecode = typia.protobuf.createDecode<IUtf8Surface>();
const factoryAssert = typia.protobuf.createAssertDecode<IUtf8Surface>();
const factoryIs = typia.protobuf.createIsDecode<IUtf8Surface>();
const factoryValidate = typia.protobuf.createValidateDecode<IUtf8Surface>();

const DECODERS: readonly (readonly [
  string,
  (input: Uint8Array) => typia.Resolved<IUtf8Surface>,
])[] = [
  ["direct decode", (input) => typia.protobuf.decode<IUtf8Surface>(input)],
  [
    "direct assertDecode",
    (input) => typia.protobuf.assertDecode<IUtf8Surface>(input),
  ],
  ["direct isDecode", directIs],
  ["direct validateDecode", directValidate],
  ["factory decode", factoryDecode],
  ["factory assertDecode", factoryAssert],
  [
    "factory isDecode",
    (input) => {
      const value = factoryIs(input);
      if (value === null) throw new Error("factory isDecode returned null");
      return value;
    },
  ],
  [
    "factory validateDecode",
    (input) => unwrap("factory validateDecode", factoryValidate(input)),
  ],
];

const unwrap = <T>(label: string, validation: typia.IValidation<T>): T => {
  if (validation.success === false)
    throw new Error(`${label} rejected a structurally valid message.`);
  return validation.data;
};

const assertDecoded = (
  decoder: string,
  value: typia.Resolved<IUtf8Surface>,
  text: string,
  bytes: Uint8Array,
): void => {
  const mapValue: string | undefined = value.dictionary.get(text);
  if (
    value.singular !== text ||
    value.optional !== text ||
    value.repeated.length !== 1 ||
    value.repeated[0] !== text ||
    value.nested.value !== text ||
    value.dictionary.size !== 1 ||
    mapValue !== text ||
    value.bytes.length !== bytes.length ||
    value.bytes.some((byte, index) => byte !== bytes[index])
  )
    throw new Error(`${decoder} changed a valid string or bytes payload.`);
};

const assertInvalid = (label: string, task: () => unknown): void => {
  try {
    task();
  } catch (error) {
    if (error instanceof Error && error.message === INVALID_UTF8_ERROR) return;
    throw new Error(`${label} raised an unstable error.`, { cause: error });
  }
  throw new Error(`${label} accepted invalid UTF-8.`);
};

const message = (props: {
  bytes: Uint8Array;
  defaultString: Uint8Array;
  malformed?: { payload: Uint8Array; position: StringPosition };
}): Uint8Array => {
  const string = (position: StringPosition): Uint8Array =>
    props.malformed?.position === position
      ? props.malformed.payload
      : props.defaultString;
  return concat(
    field(1, string("singular")),
    field(2, string("optional")),
    field(3, string("repeated")),
    field(4, field(1, string("nested"))),
    field(
      5,
      concat(field(1, string("map key")), field(2, string("map value"))),
    ),
    field(6, props.bytes),
  );
};

const field = (sequence: number, payload: Uint8Array): Uint8Array =>
  Uint8Array.from([
    (sequence << 3) | 2,
    ...varint(payload.length),
    ...payload,
  ]);

const concat = (...arrays: readonly Uint8Array[]): Uint8Array =>
  Uint8Array.from(arrays.flatMap((array) => [...array]));

const varint = (value: number): number[] => {
  const output: number[] = [];
  do {
    const byte: number = value & 0x7f;
    value >>>= 7;
    output.push(value === 0 ? byte : byte | 0x80);
  } while (value !== 0);
  return output;
};

const INVALID_UTF8_ERROR =
  "Error on typia.protobuf.decode(): invalid UTF-8 string.";
const ENCODER = new TextEncoder();
const ASCII_TEXT = "valid";
const ASCII = ENCODER.encode(ASCII_TEXT);

const STRING_POSITIONS = [
  "singular",
  "optional",
  "repeated",
  "nested",
  "map key",
  "map value",
] as const;

const VALID_TEXTS = [
  ["empty", ""],
  ["ASCII", "Protocol Buffers"],
  ["multibyte", "é水값"],
  ["emoji", "🫢"],
  ["UTF-8 boundaries", "\u0000\u007f\u0080\u07ff\u0800\uffff\u{10000}\u{10ffff}"],
] as const;

const INVALID_UTF8 = [
  ["invalid leading byte", Uint8Array.of(0xff)],
  ["lone continuation", Uint8Array.of(0x80)],
  ["overlong encoding", Uint8Array.of(0xc0, 0xaf)],
  ["truncated multibyte", Uint8Array.of(0xe2, 0x82)],
  ["encoded surrogate", Uint8Array.of(0xed, 0xa0, 0x80)],
  ["out-of-range code point", Uint8Array.of(0xf4, 0x90, 0x80, 0x80)],
] as const;
