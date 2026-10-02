import { ProtobufVarintCorpus } from "@typia/template/protobuf-varint-corpus";
import assert from "node:assert/strict";

/**
 * Verifies the shared varint fixture guard retains every declared shape check.
 *
 * Portable reader tests must not compile a native validator just to load their
 * independent oracle. Replacing that guard must preserve tagged bytes/counts,
 * all required metadata and row fields, permitted nulls and surplus keys.
 *
 * 1. Accept an independently authored complete document and its boundary twins.
 * 2. Change one field at a time and require the guard to reject at that path.
 * 3. Preserve the former ordinary-assert surplus/undefined/sparse-array policy.
 *
 * @evidence contracts/testing.md#behavioral-verification ProtobufVarintCorpus.parse runs directly on valid and one-axis malformed documents. Identity checks pin borrowing, and each rejected shape must throw a TypeError identifying the altered field path; accepting a malformed row or dropping a field check fails.
 * @evidence contracts/testing.md#independent-expectations Expected acceptance comes from the original IDocument/IEntry declarations: required strings, string arrays/records, lowercase complete hex pairs, signed int32 consumed, nullable string value and three fault literals. No reader or generated validator supplies expected results. Surplus properties, default undefined record values and Array.every sparse slots are explicit compatibility controls traced to the former checker.
 * @evidence contracts/testing.md#distinguishing-cases All required document and row fields have malformed twins, including missing values, null objects, wrong containers, invalid hex, fractional/nonfinite/one-past-int32 counts, invalid value/fault domains, and empty entries. Both signed extrema, empty bytes, nullable values, every fault class and permitted structural extras remain positive controls.
 * @evidence contracts/testing.md#execution-ownership The plugin-free test-utils unit runner explicitly registers test_protobuf_varint_corpus_shape under tsconfig.unit.json and --no-plugins. Pure parse calls use fresh local documents, do not read or alter the corpus file/cache, and need no producer artifact or external process.
 */
export const test_protobuf_varint_corpus_shape = (): void => {
  const baseline = document();
  assert.equal(ProtobufVarintCorpus.parse(baseline), baseline);
  for (const consumed of [-2147483648, 2147483647]) {
    const input = document();
    input.entries[0]!.consumed = consumed;
    assert.equal(ProtobufVarintCorpus.parse(input), input);
  }
  for (const fault of [null, "truncated", "overlong", "overflow"] as const) {
    const input = document();
    input.entries[0]!.fault = fault;
    input.entries[0]!.value = null;
    input.entries[0]!.bytes = "";
    assert.equal(ProtobufVarintCorpus.parse(input), input);
  }
  const extra = { ...document(), extra: "permitted" };
  assert.equal(ProtobufVarintCorpus.parse(extra), extra);
  const undefinedRecords = { ...document(), fields: { vacant: undefined } };
  assert.equal(ProtobufVarintCorpus.parse(undefinedRecords), undefinedRecords);
  const inherited = Object.create(document()) as unknown;
  assert.equal(ProtobufVarintCorpus.parse(inherited), inherited);
  const sparse = {
    ...document(),
    consumers: new Array(2),
    entries: new Array(2),
  };
  assert.equal(ProtobufVarintCorpus.parse(sparse), sparse);

  const malformed: Array<[string, (input: any) => void]> = [];
  for (const key of ["specification", "oracle", "purpose", "strictness"])
    for (const value of [undefined, null, 1])
      malformed.push([
        `$input.${key}`,
        (input) => {
          input[key] = value;
        },
      ]);
  for (const value of [undefined, null, {}])
    malformed.push([
      "$input.consumers",
      (input) => {
        input.consumers = value;
      },
    ]);
  malformed.push([
    "$input.consumers[0]",
    (input) => {
      input.consumers = [1];
    },
  ]);
  for (const key of ["fields", "faults"]) {
    for (const value of [undefined, null, "object"])
      malformed.push([
        `$input.${key}`,
        (input) => {
          input[key] = value;
        },
      ]);
    malformed.push([
      `$input.${key}["bad"]`,
      (input) => {
        input[key] = { bad: 1 };
      },
    ]);
  }
  for (const value of [undefined, null, {}, []])
    malformed.push([
      "$input.entries",
      (input) => {
        input.entries = value;
      },
    ]);
  malformed.push([
    "$input.entries[0]",
    (input) => {
      input.entries = [null];
    },
  ]);
  for (const value of [undefined, null, 1])
    malformed.push([
      "$input.entries[0].name",
      (input) => {
        input.entries[0].name = value;
      },
    ]);
  for (const value of [undefined, null, 1, "0", "FF", "gg", "00x"])
    malformed.push([
      "$input.entries[0].bytes",
      (input) => {
        input.entries[0].bytes = value;
      },
    ]);
  for (const value of [
    undefined,
    null,
    "1",
    0.5,
    -2147483649,
    2147483648,
    Infinity,
    NaN,
  ])
    malformed.push([
      "$input.entries[0].consumed",
      (input) => {
        input.entries[0].consumed = value;
      },
    ]);
  for (const value of [undefined, 1, {}])
    malformed.push([
      "$input.entries[0].value",
      (input) => {
        input.entries[0].value = value;
      },
    ]);
  for (const value of [undefined, "unknown", 1, {}])
    malformed.push([
      "$input.entries[0].fault",
      (input) => {
        input.entries[0].fault = value;
      },
    ]);
  for (const [path, change] of malformed) {
    const input = document();
    change(input);
    assert.throws(
      () => ProtobufVarintCorpus.parse(input),
      (error: unknown) =>
        error instanceof TypeError && error.message.includes(`at ${path}:`),
      path,
    );
  }
  for (const input of [null, undefined, 1, "document"])
    assert.throws(
      () => ProtobufVarintCorpus.parse(input),
      (error: unknown) =>
        error instanceof TypeError && error.message.includes("at $input:"),
    );
};

const document = (): ProtobufVarintCorpus.IDocument => ({
  specification: "varints",
  oracle: "independent parser",
  purpose: "guard test",
  strictness: "64-bit wire",
  consumers: ["reader"],
  fields: { bytes: "octets" },
  faults: { truncated: "short" },
  entries: [
    { name: "zero", bytes: "00", consumed: 1, value: "0", fault: null },
  ],
});
