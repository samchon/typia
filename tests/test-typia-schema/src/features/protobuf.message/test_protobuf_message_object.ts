import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import pjs from "protobufjs";
import typia from "typia";

/**
 * Verifies protobuf message object against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains int32 id, contains string name, contains string email, contains bool
 * active.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Checks original IMember and atomic clauses, then parses actual emitted proto and compares the complete field-name/type map to literal id:int32,name:string,email:string,active:bool.
 * @evidence contracts/testing.md#independent-expectations The four authored property declarations establish field identities and scalar mappings. protobufJS supplies an independent grammar consumer; no emitted typia document becomes its own expected snapshot.
 * @evidence contracts/testing.md#distinguishing-cases Tagged int32, two string properties and boolean remain distinct mappings; exact parsed fields reject loss or extra declarations in addition to existing substring checks.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_message_object in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native message generation converts these TypeScript declaration identities to a usable proto document. An independent protobufJS consumer parses the real output; direct metadata helpers cannot establish the complete producer connection.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_message_object = (): void => {
  interface IMember {
    id: number & typia.tags.Type<"int32">;
    name: string;
    email: string;
    active: boolean;
  }

  const message: string = typia.protobuf.message<IMember>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IMember"),
  );
  TestValidator.predicate("contains int32 id", () =>
    message.includes("int32 id"),
  );
  TestValidator.predicate("contains string name", () =>
    message.includes("string name"),
  );
  TestValidator.predicate("contains string email", () =>
    message.includes("string email"),
  );
  TestValidator.predicate("contains bool active", () =>
    message.includes("bool active"),
  );
  const fields = pjs
    .parse(message, { keepCase: true })
    .root.lookupType("IMember").fields;
  TestEquality.equals(
    "parsed scalar fields",
    Object.fromEntries(
      Object.entries(fields).map(([name, field]) => [name, field.type]),
    ),
    {
      id: "int32",
      name: "string",
      email: "string",
      active: "bool",
    },
  );
};
