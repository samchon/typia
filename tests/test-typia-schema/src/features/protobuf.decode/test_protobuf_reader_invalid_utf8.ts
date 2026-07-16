import { _ProtobufReader } from "typia/lib/internal/_ProtobufReader";

/** Verifies Protobuf strings reject malformed UTF-8 without narrowing bytes. */
export const test_protobuf_reader_invalid_utf8 = (): void => {
  for (const [label, text] of VALID_TEXTS) {
    const payload: Uint8Array = ENCODER.encode(text);
    const decoded: string = new _ProtobufReader(frame(payload)).string();
    if (decoded !== text)
      throw new Error(`${label} decoded as ${JSON.stringify(decoded)}.`);
  }

  for (const [label, payload] of INVALID_UTF8) {
    assertInvalid(label, () => new _ProtobufReader(frame(payload)).string());

    const bytes: Uint8Array = new _ProtobufReader(frame(payload)).bytes();
    if (
      bytes.length !== payload.length ||
      bytes.some((value, index) => value !== payload[index])
    )
      throw new Error(`${label} bytes payload was changed.`);
  }
};

const assertInvalid = (label: string, task: () => unknown): void => {
  try {
    task();
  } catch (error) {
    if (error instanceof Error && error.message === INVALID_UTF8_ERROR) return;
    throw new Error(`${label} raised an unstable error.`, { cause: error });
  }
  throw new Error(`${label} was accepted as a Protobuf string.`);
};

const frame = (payload: Uint8Array): Uint8Array =>
  Uint8Array.from([...varint(payload.length), ...payload]);

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
