import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import pjs from "protobufjs";
import typia from "typia";

/**
 * Verifies protobuf message optional against the native typia.tags.Type,
 * typia.protobuf.message output.
 *
 * The case builds its input in this file and asserts contains message keyword,
 * contains optional timeout, contains optional debug.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification Checks original optional clauses, parses actual proto and requires exactly debug/name/timeout, with explicit proto3 optional int32/bool presence metadata and explicit-presence string name.
 * @evidence contracts/testing.md#independent-expectations The published protobuf message contract gives every singular field explicit proto3 presence, including TypeScript-required name; optional properties do not have a distinct wire label. Literal type/presence pairs and the independent protobufJS parser establish these expectations.
 * @evidence contracts/testing.md#distinguishing-cases Required source name and optional numeric/boolean properties all retain explicit wire presence; scalar kinds remain distinct. Original text checks remain; sibling array/map cases own repeated and map fields without singular optional labels.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_message_optional in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native message generation converts these TypeScript declaration identities to a usable proto document. An independent protobufJS consumer parses the real output; direct metadata helpers cannot establish the complete producer connection.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_message_optional = (): void => {
  interface IConfig {
    name: string;
    timeout?: number & typia.tags.Type<"int32">;
    debug?: boolean;
  }

  const message: string = typia.protobuf.message<IConfig>();

  TestValidator.predicate("contains message keyword", () =>
    message.includes("message IConfig"),
  );
  TestValidator.predicate("contains optional timeout", () =>
    message.includes("optional int32 timeout"),
  );
  TestValidator.predicate("contains optional debug", () =>
    message.includes("optional bool debug"),
  );
  const fields = pjs
    .parse(message, { keepCase: true })
    .root.lookupType("IConfig").fields;
  TestEquality.equals("parsed config field names", Object.keys(fields).sort(), [
    "debug",
    "name",
    "timeout",
  ]);
  TestEquality.equals(
    "parsed optional timeout",
    [
      fields.timeout!.type,
      fields.timeout!.optional,
      fields.timeout!.getOption("proto3_optional"),
    ],
    ["int32", true, true],
  );
  TestEquality.equals(
    "parsed optional debug",
    [
      fields.debug!.type,
      fields.debug!.optional,
      fields.debug!.getOption("proto3_optional"),
    ],
    ["bool", true, true],
  );
  TestEquality.equals(
    "parsed required source name",
    [fields.name!.type, fields.name!.getOption("proto3_optional")],
    ["string", true],
  );
};
