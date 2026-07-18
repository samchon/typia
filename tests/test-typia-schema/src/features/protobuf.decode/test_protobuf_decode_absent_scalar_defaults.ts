import typia from "typia";

/**
 * Verifies a decoded absent required scalar takes its proto3 typed default for
 * every scalar kind, not only `string`.
 *
 * In proto3 a singular scalar equal to its default is not written on the wire,
 * so a conformant peer encodes an all-defaults message as the empty payload and
 * an absent scalar must decode to its type default: `number -> 0`,
 * `boolean -> false`, `bigint -> 0n`, `string -> ""`. typia seeded an absent
 * required `number`/`boolean`/`bigint` with `undefined` instead, so `decode`
 * returned `undefined` and every validating decoder threw `invalid type` on a
 * valid peer message. The typia encoder writes every required non-nullable
 * field unconditionally even at the default, so this never surfaced in a
 * typia-only round-trip; the oracle here is a hand-built absent-field payload,
 * not typia's own encode output.
 *
 * 1. Decode the empty payload for a message of required `number`, `boolean`,
 *    `bigint`, and `string` through every direct and factory decoder, asserting
 *    each field takes its typed default and every validating decoder accepts it.
 * 2. Assert an absent optional scalar stays `undefined` and an absent nullable
 *    scalar stays `null`, so the new seed touches only the required scalar case.
 * 3. Assert a constrained scalar at the default is judged by its constraint on
 *    the seeded `0`, the precise diagnostic, not an `invalid type` on `undefined`.
 */
export const test_protobuf_decode_absent_scalar_defaults = (): void => {
  // an all-defaults proto3 message: a conformant peer omits every field equal
  // to its scalar default, so the whole message serializes to no bytes at all
  const empty: Uint8Array = new Uint8Array(0);

  const decoders: Array<
    readonly [string, (input: Uint8Array) => typia.Resolved<IScalars>]
  > = [
    ["decode", (input) => typia.protobuf.decode<IScalars>(input)],
    ["createDecode", typia.protobuf.createDecode<IScalars>()],
    ["assertDecode", (input) => typia.protobuf.assertDecode<IScalars>(input)],
    ["createAssertDecode", typia.protobuf.createAssertDecode<IScalars>()],
    [
      "isDecode",
      (input) => must("isDecode", typia.protobuf.isDecode<IScalars>(input)),
    ],
    [
      "createIsDecode",
      (
        (closure) => (input: Uint8Array) =>
          must("createIsDecode", closure(input))
      )(typia.protobuf.createIsDecode<IScalars>()),
    ],
    [
      "validateDecode",
      (input) =>
        unwrap("validateDecode", typia.protobuf.validateDecode<IScalars>(input)),
    ],
    [
      "createValidateDecode",
      (
        (closure) => (input: Uint8Array) =>
          unwrap("createValidateDecode", closure(input))
      )(typia.protobuf.createValidateDecode<IScalars>()),
    ],
  ];
  for (const [label, decode] of decoders) {
    const value: typia.Resolved<IScalars> = decode(empty);
    if (value.n !== 0)
      throw new Error(
        `${label}: absent required number seeded ${String(value.n)} instead of 0.`,
      );
    if (value.b !== false)
      throw new Error(
        `${label}: absent required boolean seeded ${String(value.b)} instead of false.`,
      );
    if (value.big !== 0n)
      throw new Error(
        `${label}: absent required bigint seeded ${String(value.big)} instead of 0n.`,
      );
    if (value.s !== "")
      throw new Error(
        `${label}: absent required string seeded ${JSON.stringify(value.s)} instead of "".`,
      );
  }

  // an absent optional scalar has no presence, so it stays undefined
  const optional: typia.Resolved<IOptional> =
    typia.protobuf.decode<IOptional>(empty);
  if (
    optional.n !== undefined ||
    optional.b !== undefined ||
    optional.big !== undefined
  )
    throw new Error("an absent optional scalar was seeded a default value.");

  // an absent nullable scalar decodes to null, never the scalar default
  const nullable: typia.Resolved<INullable> =
    typia.protobuf.decode<INullable>(empty);
  if (nullable.n !== null)
    throw new Error(
      `an absent nullable scalar decoded to ${String(nullable.n)} instead of null.`,
    );

  // a constrained scalar at the default is the peer's out-of-spec value: it is
  // judged by its constraint on the seeded 0, not reported as an invalid type
  // on undefined
  const constrained: typia.IValidation<IConstrained> =
    typia.protobuf.validateDecode<IConstrained>(empty);
  if (constrained.success !== false)
    throw new Error("a constrained scalar at the default passed validation.");
  const error: typia.IValidation.IError | undefined = constrained.errors.find(
    (e) => e.path === "$input.value",
  );
  if (error === undefined)
    throw new Error("the constrained scalar reported no validation error.");
  if (error.value !== 0)
    throw new Error(
      `the constrained scalar was judged at ${String(error.value)} instead of the seeded default 0.`,
    );
};

interface IScalars {
  n: number;
  b: boolean;
  big: bigint;
  s: string;
}

interface IOptional {
  n?: number;
  b?: boolean;
  big?: bigint;
}

interface INullable {
  n: number | null;
}

interface IConstrained {
  value: number & typia.tags.Minimum<1>;
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
