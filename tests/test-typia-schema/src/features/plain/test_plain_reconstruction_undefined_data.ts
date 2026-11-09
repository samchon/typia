import assert from "node:assert/strict";
import typia from "typia";

/**
 * Verifies reconstruction keeps data that ordinary validation accepts.
 *
 * A dictionary need not inherit valueOf, and a present undefined index entry
 * must not be passed to a required object decoder.
 *
 * 1. Clone a null-prototype dictionary and a record with a valueOf data field.
 * 2. Reconstruct an undefined index entry and a defined sibling, then check a
 *    malformed sibling still fails validation.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated clone and checked reconstruction preserve authored values and do not call missing methods or dereference undefined.
 * @evidence contracts/testing.md#independent-expectations Literal records supply content, hasOwn distinguishes a missing key from explicit undefined, and reference inequality distinguishes copying from returning input.
 * @evidence contracts/testing.md#distinguishing-cases Null-prototype and non-callable valueOf data contrast with an authored callable; undefined and valid entries contrast with a malformed defined sibling.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor runs this schema feature through the ordinary ttsx project.
 * @evidence contracts/e2e.md#necessary-boundary Both emitted index loops and the untyped runtime clone must execute through public transformed calls.
 * @evidence contracts/e2e.md#shared-execution The feature uses the existing schema project and native build.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity All records and conversion methods are local inputs; no global or prototype is changed.
 * @evidence contracts/e2e.md#preserved-coverage Existing optional member and plain clone tests remain enabled.
 */
export const test_plain_reconstruction_undefined_data = (): void => {
  const dictionary = Object.assign(Object.create(null), { values: [1, 2] });
  assert.equal(typia.is<{ data: unknown }>({ data: dictionary }), true);
  assert.deepEqual(typia.plain.clone<unknown>(dictionary), { values: [1, 2] });
  assert.deepEqual(
    typia.plain.isClone<{ data: unknown }>({ data: dictionary }),
    {
      data: { values: [1, 2] },
    },
  );
  assert.deepEqual(typia.plain.clone<unknown>({ valueOf: 1 }), { valueOf: 1 });
  assert.equal(typia.plain.clone<unknown>({ valueOf: () => 2 }), 2);

  type RecordData = Record<string, { inner_value: number }>;
  const input = { empty_key: undefined, present_key: { inner_value: 3 } };
  assert.equal(typia.is<RecordData>(input), true);
  // The default runtime validator admits this entry; TypeScript's index
  // signature cannot express that policy.
  const admitted = input as unknown as RecordData;
  for (const output of [
    typia.plain.clone<RecordData>(admitted),
    typia.plain.isClone<RecordData>(admitted),
    typia.plain.createAssertClone<RecordData>()(input),
    typia.plain.createAssertClassify<RecordData>()(input),
  ]) {
    assert.deepEqual(output, input);
    assert.ok(output && Object.hasOwn(output, "empty_key"));
    assert.notEqual(output.present_key, input.present_key);
  }
  assert.deepEqual(typia.notations.createAssertCamel<RecordData>()(admitted), {
    emptyKey: undefined,
    presentKey: { innerValue: 3 },
  });
  {
    const undefined = 1;
    void undefined;
    assert.deepEqual(typia.plain.clone<RecordData>(admitted), input);
    assert.deepEqual(typia.plain.classify<RecordData>(admitted), input);
    assert.deepEqual(typia.notations.camel<RecordData>(admitted), {
      emptyKey: globalThis.undefined,
      presentKey: { innerValue: 3 },
    });
  }
  const malformed = { key: { inner_value: "bad" } } as unknown as RecordData;
  assert.equal(typia.plain.isClone<RecordData>(malformed), null);
};
