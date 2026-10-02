import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import pjs from "protobufjs";
import typia from "typia";

import { Foo as Alpha } from "../json.schema/ComponentNameCollisionAlpha";
import { Foo as Beta } from "../json.schema/ComponentNameCollisionBeta";

interface IArguments {
  a: Alpha;
  b: Beta;
}

/**
 * Verifies a disambiguated type stays a parseable, separate Protobuf message.
 *
 * `protobuf.message` splits a metadata name on `.` and nests each segment as a
 * child message, so it reads the same dot the OpenAPI key space does. Two
 * unrelated `Foo` types therefore used to emit the second one _inside_ the
 * first, as `message Foo { message o1 { ... } }`. The counter is no longer
 * joined with a dot, which separates them — but a message name is an
 * identifier, so the separator has to survive `ProtobufNameEncoder`, or the
 * emitted schema is text no Protobuf parser accepts.
 *
 * Protobuf.js resolves the document the way a consumer would, which is what
 * makes it a fair witness for _name resolution_: a collision or a broken
 * separator shows up as a lookup failure rather than a pattern mismatch. It is
 * not a witness for legality. protobuf.js is lenient — it accepts a proto3
 * document containing `required`, reports its syntax as proto3, and records the
 * label — so it agrees with documents a real compiler rejects. Whether the
 * emitted document actually compiles is pinned separately, by
 * `TestProtobufMessageDocumentCompiles`, against a strict compiler front end.
 *
 * 1. Reference two distinct types that share the declared name `Foo`.
 * 2. Parse the emitted document with protobuf.js and resolve every message.
 * 3. Assert the duplicate is a sibling rather than a child, and that each of the
 *    two `Foo` types keeps its own field.
 *
 * @evidence contracts/testing.md#behavioral-verification Parses the native-generated document with protobufJS, checks three distinct message declarations, resolves both Foo fields to their own types and requires different sibling message identities.
 * @evidence contracts/testing.md#independent-expectations The two imported Foo definitions have independently declared stringa and numberb fields. protobufJS establishes parseability and reference resolution, while strict compiler legality is checked separately; literal three-message count distinguishes a lost definition.
 * @evidence contracts/testing.md#distinguishing-cases Same-name types from different modules retain separate fields and identifiers, and a nonnested declaration check rejects the previous dotted-name nesting shape; this case covers definition provenance rather than a generic object message.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_protobuf_message_duplicate_name_identifier in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native message generation converts these TypeScript declaration identities to a usable proto document. An independent protobufJS consumer parses the real output; direct metadata helpers cannot establish the complete producer connection.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_protobuf_message_duplicate_name_identifier = (): void => {
  const message: string = typia.protobuf.message<IArguments>();

  // 1. THE GRAMMAR ACCEPTS THE DOCUMENT
  const parsed = (): pjs.IParserResult =>
    pjs.parse(message, { keepCase: true });
  TestValidator.predicate("protobuf.js parses the emitted document", () => {
    try {
      parsed();
      return true;
    } catch {
      return false;
    }
  });

  const root: pjs.Root = parsed().root;
  const declared: string[] = [
    ...message.matchAll(/message\s+(\S+)\s*\{/gu),
  ].map((m) => m[1]!);
  TestEquality.equals(
    "every distinct type declares its own message",
    3,
    declared.length,
  );

  // 2. EACH DUPLICATE KEEPS ITS OWN FIELD
  const root$: pjs.Type = root.lookupType("IArguments");
  const fieldType = (field: string): pjs.Type =>
    root.lookupType(root$.fields[field]!.type);
  TestValidator.predicate(
    "the first Foo keeps its own string field",
    () => fieldType("a").fields.a?.type === "string",
  );
  TestValidator.predicate(
    "the disambiguated Foo keeps its own numeric field",
    () => fieldType("b").fields.b?.type === "double",
  );
  TestValidator.notEquals(
    "the two types resolve to different messages",
    root$.fields.a!.type,
    root$.fields.b!.type,
  );

  // 3. THE DUPLICATE IS A SIBLING, NOT A CHILD
  //
  // A dotted counter nested the unrelated second `Foo` inside the first one's
  // message, which is the same overloading this batch removes from the key.
  TestValidator.predicate(
    "the disambiguated type is not nested inside the name it disambiguates",
    () => /message\s+Foo\s*\{[^}]*message\s/u.test(message) === false,
  );
};
