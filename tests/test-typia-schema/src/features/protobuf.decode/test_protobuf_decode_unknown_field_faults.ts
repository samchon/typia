import typia from "typia";

/**
 * Verifies generated Protobuf decoders attribute every unknown-field fault to
 * typia and bound an unknown varint at ten bytes.
 *
 * A generated decoder routes every field it does not know to the reader's
 * `skipType` with `tag & 0x07`, so a payload author reaches wire types 6 and 7
 * and a bare END_GROUP, none of which are skippable, and reaches the varint skip
 * with as many continuation bytes as they like. The first case must not surface
 * an anonymous error that no user can trace back to typia, and the second must
 * not accept a varint longer than a 64-bit value can occupy while `uint32` on
 * the very same buffer stops at ten.
 *
 * 1. Decode payloads whose unknown field declares each non-skippable wire type
 *    and assert the error names typia and the wire type.
 * 2. Decode an unknown varint field of ten bytes and of eleven, asserting the
 *    first skips and the second is rejected.
 * 3. Assert every known field still survives an unknown field, and that the
 *    prefixed error reaches each throwing decoder factory alike.
 */
export const test_protobuf_decode_unknown_field_faults = (): void => {
  // IValue field 1 = "a", then an unknown field 2 with the given wire type
  const unknown = (wire: number, ...payload: number[]): Uint8Array =>
    Uint8Array.from([0x0a, 1, 0x61, (2 << 3) | wire, ...payload]);

  //----
  // NON-SKIPPABLE WIRE TYPES ARE ATTRIBUTED TO TYPIA
  //----
  for (const wire of [4, 6, 7])
    assertMessage(
      `unknown field with wire type ${wire}`,
      `${PREFIX}invalid wire type ${wire} at offset 4.`,
      () => typia.protobuf.decode<IValue>(unknown(wire)),
    );

  // A reader fault is a wire-framing failure rather than a validation failure,
  // so it is raised rather than reported, and every decoder surfaces it alike.
  // `isDecode` and `validateDecode` report a *type* mismatch by null or by a
  // failure result; a payload that never decoded has no value to report on.
  const decoders: Array<readonly [string, (input: Uint8Array) => unknown]> = [
    ["decode", (input) => typia.protobuf.decode<IValue>(input)],
    ["createDecode", typia.protobuf.createDecode<IValue>()],
    ["assertDecode", (input) => typia.protobuf.assertDecode<IValue>(input)],
    ["createAssertDecode", typia.protobuf.createAssertDecode<IValue>()],
    ["isDecode", (input) => typia.protobuf.isDecode<IValue>(input)],
    ["createIsDecode", typia.protobuf.createIsDecode<IValue>()],
    ["validateDecode", (input) => typia.protobuf.validateDecode<IValue>(input)],
    ["createValidateDecode", typia.protobuf.createValidateDecode<IValue>()],
  ];
  for (const [label, decode] of decoders) {
    assertMessage(label, `${PREFIX}invalid wire type 6 at offset 4.`, () =>
      decode(unknown(6)),
    );
    assertMessage(`${label} with an over-long varint`, OVERLONG, () =>
      decode(unknown(0, ...continuations(10), 0x01)),
    );
  }

  //----
  // AN UNKNOWN VARINT IS BOUND TO TEN BYTES
  //----
  // ten bytes is legal and skips, leaving the known field intact
  const ten: Uint8Array = unknown(0, ...continuations(9), 0x01);
  if (typia.protobuf.decode<IValue>(ten).value !== "a")
    throw new Error("a legal ten-byte unknown varint broke a known field.");

  // the eleventh byte is one past the limit and is rejected rather than skipped
  assertMessage("eleven-byte unknown varint", OVERLONG, () =>
    typia.protobuf.decode<IValue>(unknown(0, ...continuations(10), 0x01)),
  );
  // a runaway of continuation bytes is a length fault, decided at byte ten
  assertMessage("runaway unknown varint", OVERLONG, () =>
    typia.protobuf.decode<IValue>(unknown(0, ...continuations(64))),
  );

  //----
  // WHAT MUST NOT CHANGE
  //----
  // #2083: a varint the buffer truncates before the limit stays a framing fault
  assertMessage("truncated unknown varint", OVERFLOW, () =>
    typia.protobuf.decode<IValue>(unknown(0, ...continuations(5))),
  );
  // #2116: a zero-length unknown record still advances exactly its two bytes
  if (typia.protobuf.decode<IValue>(unknown(2, 0)).value !== "a")
    throw new Error("a zero-length unknown record broke a known field.");
  // a valid payload round-trips untouched
  const encoded: Uint8Array = typia.protobuf.encode<IValue>({ value: "a" });
  if (typia.protobuf.decode<IValue>(encoded).value !== "a")
    throw new Error("a valid payload no longer round-trips.");
  if (typia.protobuf.isDecode<IValue>(encoded)?.value !== "a")
    throw new Error("isDecode rejected a valid payload.");
};

interface IValue {
  value: string;
}

/** Bytes carrying only the continuation bit, so a varint never terminates. */
const continuations = (count: number): number[] =>
  new Array(count).fill(0x80) as number[];

const assertMessage = (
  label: string,
  expected: string,
  closure: () => unknown,
): void => {
  try {
    closure();
  } catch (error) {
    if (error instanceof Error && error.message === expected) return;
    throw new Error(
      `${label} reported ${String(error)} instead of ${JSON.stringify(expected)}.`,
    );
  }
  throw new Error(`${label} was accepted by a generated Protobuf decoder.`);
};

const PREFIX = "Error on typia.protobuf.decode(): ";
const OVERFLOW = `${PREFIX}buffer overflow.`;
const OVERLONG = `${PREFIX}varint exceeds 10 bytes.`;
