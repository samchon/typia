import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import pjs from "protobufjs";
import typia from "typia";

/**
 * Verifies protobuf message map against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains map string string, contains map string int32.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Checks original map clauses and parses actual emitted proto, asserting exactly counts/data maps with string keys and int32/string value types.
 * @evidence contracts/testing.md#independent-expectations Handwritten Map declarations and int32 tag establish map/type expectations; independent protobufJS grammar parsing prevents malformed text containing the desired substrings from passing.
 * @evidence contracts/testing.md#distinguishing-cases Two value kinds and exact field population distinguish map syntax from repeated/scalar emission while retaining all original textual checks.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_message_map in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native message generation converts these TypeScript declaration identities to a usable proto document. An independent protobufJS consumer parses the real output; direct metadata helpers cannot establish the complete producer connection.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_message_map = (): void => {
  interface ICache {
    data: Map<string, string>;
    counts: Map<string, number & typia.tags.Type<"int32">>;
  }

  const message: string = typia.protobuf.message<ICache>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message ICache"),
  );
  TestValidator.predicate("contains map string string", () =>
    message.includes("map<string, string> data"),
  );
  TestValidator.predicate("contains map string int32", () =>
    message.includes("map<string, int32> counts"),
  );
  const fields = pjs
    .parse(message, { keepCase: true })
    .root.lookupType("ICache").fields;
  TestEquality.equals("parsed map field names", Object.keys(fields).sort(), [
    "counts",
    "data",
  ]);
  const data = fields.data;
  const counts = fields.counts;
  if (!(data instanceof pjs.MapField) || !(counts instanceof pjs.MapField))
    throw new Error(
      "Expected data and counts to be parsed MapField instances.",
    );
  TestEquality.equals(
    "parsed data map",
    [data.map, data.keyType, data.type],
    [true, "string", "string"],
  );
  TestEquality.equals(
    "parsed counts map",
    [counts.map, counts.keyType, counts.type],
    [true, "string", "int32"],
  );
};
