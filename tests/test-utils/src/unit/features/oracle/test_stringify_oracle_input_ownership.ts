import { prepareStringify } from "@typia/template/stringify";
import assert from "node:assert/strict";

/**
 * Verifies the stringify check judges against a reference taken before the
 * producer runs.
 *
 * A reference computed from the input after the producer returns moves with a
 * producer that edits its own input, so a serializer that rewrites the value
 * and then serializes the rewritten value would be certified against itself.
 * The check must also reject data that differs from the original, text that is
 * not JSON, and a defined result for a value JSON omits.
 *
 * 1. Accept a faithful serializer, including values JSON omits and `toJSON`.
 * 2. Reject callbacks that mutate the input before serializing, drop or add
 *    members, return stale or malformed text, or answer an omitted value.
 * 3. Require every rejection to carry the scenario's own failure message.
 *
 */
export const test_stringify_oracle_input_ownership = (): void => {
  const MESSAGE: string = "stringify failure";
  const input = (): {
    nested: { value: number };
    list: number[];
    text: string;
  } => ({
    nested: { value: 7 },
    list: [1, 2],
    text: "a",
  });
  const run = (
    produce: (value: ReturnType<typeof input>) => string | undefined,
  ): void => {
    const value = input();
    const check = prepareStringify(value, MESSAGE);
    check(produce(value));
  };

  // 1. FAITHFUL SERIALIZERS
  assert.doesNotThrow(() => run((value) => JSON.stringify(value)));
  assert.doesNotThrow(() => run((value) => JSON.stringify(value, null, 2)));
  assert.doesNotThrow(() =>
    run(
      (value) =>
        `{"text":${JSON.stringify(value.text)},"list":[1,2],"nested":{"value":7}}`,
    ),
  );
  for (const omitted of [undefined, () => 1, { toJSON: () => undefined }]) {
    const check = prepareStringify(omitted, MESSAGE);
    assert.doesNotThrow(() => check(JSON.stringify(omitted)));
  }
  const dated = { when: new Date(0), tags: ["x"] };
  assert.doesNotThrow(() =>
    prepareStringify(dated, MESSAGE)(JSON.stringify(dated)),
  );

  // 2. UNFAITHFUL CALLBACKS
  for (const produce of [
    // the input is edited, then the edited input is serialized faithfully
    (value: ReturnType<typeof input>) => {
      value.nested.value = 8;
      return JSON.stringify(value);
    },
    (value: ReturnType<typeof input>) => {
      value.list.push(3);
      return JSON.stringify(value);
    },
    (value: ReturnType<typeof input>) => {
      delete (value as Partial<typeof value>).text;
      return JSON.stringify(value);
    },
    // the input is left alone but the text is wrong
    () => JSON.stringify({ nested: { value: 8 }, list: [1, 2], text: "a" }),
    () => JSON.stringify({ nested: { value: 7 }, list: [1, 2] }),
    () =>
      JSON.stringify({
        nested: { value: 7 },
        list: [1, 2],
        text: "a",
        extra: true,
      }),
    () => JSON.stringify({ nested: { value: 7 }, list: [1], text: "a" }),
    () => '{"nested":{"value":7},"list":[1,2],"text":"a"',
    () => "not json",
    () => "",
    () => undefined,
    () => 1 as unknown as string,
    () => null as unknown as string,
  ])
    assert.throws(() => run(produce), /stringify failure/);
  assert.throws(
    () => prepareStringify(undefined, MESSAGE)("null"),
    /stringify failure/,
  );
  assert.throws(
    () => prepareStringify(() => 1, MESSAGE)("1"),
    /stringify failure/,
  );
  const unstable = { value: 1 };
  assert.throws(() => {
    const check = prepareStringify(unstable, MESSAGE);
    unstable.value = 2;
    check(JSON.stringify(unstable));
  }, /stringify failure/);
};
