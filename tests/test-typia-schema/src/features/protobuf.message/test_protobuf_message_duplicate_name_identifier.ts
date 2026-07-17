import { TestValidator } from "@nestia/e2e";
import pjs from "protobufjs";
import typia from "typia";

import { Foo as Alpha } from "../json.schema/ComponentNameCollisionAlpha";
import { Foo as Beta } from "../json.schema/ComponentNameCollisionBeta";

interface IArguments {
  a: Alpha;
  b: Beta;
}

/**
 * Verifies a disambiguated type stays a legal, separate Protobuf message.
 *
 * `protobuf.message` splits a metadata name on `.` and nests each segment as a
 * child message, so it reads the same dot the OpenAPI key space does. Two
 * unrelated `Foo` types therefore used to emit the second one *inside* the
 * first, as `message Foo { message o1 { ... } }`. The counter is no longer
 * joined with a dot, which separates them — but a message name is an
 * identifier, so the separator has to survive `ProtobufNameEncoder`, or the
 * emitted schema is text no Protobuf parser accepts.
 *
 * The grammar is the oracle rather than a hand-written pattern: the document is
 * handed to protobuf.js, which is what a consumer would do with it.
 *
 * 1. Reference two distinct types that share the declared name `Foo`.
 * 2. Parse the emitted document with protobuf.js and resolve every message.
 * 3. Assert the duplicate is a sibling rather than a child, and that each of
 *    the two `Foo` types keeps its own field.
 */
export const test_protobuf_message_duplicate_name_identifier = (): void => {
  const message: string = typia.protobuf.message<IArguments>();

  // 1. THE GRAMMAR ACCEPTS THE DOCUMENT
  const parsed = (): pjs.IParserResult => pjs.parse(message, { keepCase: true });
  TestValidator.predicate("protobuf.js parses the emitted document", () => {
    try {
      parsed();
      return true;
    } catch {
      return false;
    }
  });

  const root: pjs.Root = parsed().root;
  const declared: string[] = [...message.matchAll(/message\s+(\S+)\s*\{/gu)].map(
    (m) => m[1]!,
  );
  TestValidator.equals(
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
