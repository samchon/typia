import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import pjs from "protobufjs";
import typia from "typia";

/**
 * Verifies protobuf message array against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains repeated double prices, contains repeated string tags.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Checks original message/repeated field text and independently parses the generated document, asserting exactly name/prices/tags with scalar string and repeated double/string types.
 * @evidence contracts/testing.md#independent-expectations Handwritten IProduct declarations independently establish names, scalar types and repeated cardinality. protobufJS parses actual output grammar rather than a typia-generated expected document.
 * @evidence contracts/testing.md#distinguishing-cases Scalar name versus repeated numeric/string fields distinguish cardinality and atomic mapping; parser assertions strengthen the original substring checks without removing them.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_message_array in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native message generation converts these TypeScript declaration identities to a usable proto document. An independent protobufJS consumer parses the real output; direct metadata helpers cannot establish the complete producer connection.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_message_array = (): void => {
  interface IProduct {
    name: string;
    prices: (number & typia.tags.Type<"double">)[];
    tags: string[];
  }

  const message: string = typia.protobuf.message<IProduct>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IProduct"),
  );
  TestValidator.predicate("contains repeated double prices", () =>
    message.includes("repeated double prices"),
  );
  TestValidator.predicate("contains repeated string tags", () =>
    message.includes("repeated string tags"),
  );
  const fields = pjs
    .parse(message, { keepCase: true })
    .root.lookupType("IProduct").fields;
  TestEquality.equals("parsed field names", Object.keys(fields).sort(), [
    "name",
    "prices",
    "tags",
  ]);
  TestEquality.equals("parsed scalar name", fields.name!.type, "string");
  TestEquality.equals(
    "parsed repeated price type",
    [fields.prices!.type, fields.prices!.repeated],
    ["double", true],
  );
  TestEquality.equals(
    "parsed repeated tag type",
    [fields.tags!.type, fields.tags!.repeated],
    ["string", true],
  );
};
