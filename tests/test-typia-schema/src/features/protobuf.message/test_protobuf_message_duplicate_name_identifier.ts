import { TestValidator } from "@nestia/e2e";
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
 * 1. Reference two distinct types that share the declared name `Foo`.
 * 2. Assert every declared message name is a legal Protobuf identifier.
 * 3. Assert every field type resolves to a message the document declares, and
 *    that the duplicate is a sibling rather than a child.
 */
export const test_protobuf_message_duplicate_name_identifier = (): void => {
  const message: string = typia.protobuf.message<IArguments>();

  // 1. EVERY DECLARED NAME IS AN IDENTIFIER
  const identifier = /^[A-Za-z_][A-Za-z0-9_]*$/;
  const declared: string[] = [...message.matchAll(/message\s+(\S+)\s*\{/gu)].map(
    (m) => m[1]!,
  );
  TestValidator.equals(
    "every distinct type declares its own message",
    3,
    declared.length,
  );
  for (const name of declared)
    TestValidator.predicate(
      `message name ${JSON.stringify(name)} is a legal Protobuf identifier`,
      () => identifier.test(name),
    );

  // 2. AND EVERY FIELD TYPE RESOLVES TO ONE OF THEM
  const referenced: string[] = [...message.matchAll(/required\s+(\S+)\s+\w+\s*=/gu)]
    .map((m) => m[1]!)
    .filter((type) => scalars.has(type) === false);
  TestValidator.equals(
    "both duplicates are referenced, and distinctly",
    2,
    new Set(referenced).size,
  );
  for (const type of referenced)
    TestValidator.predicate(
      `field type ${JSON.stringify(type)} resolves to a declared message`,
      () =>
        type
          .split(".")
          .every((segment) => identifier.test(segment)) &&
        declared.includes(type.split(".").at(-1)!),
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

const scalars: Set<string> = new Set([
  "double",
  "float",
  "int32",
  "int64",
  "uint32",
  "uint64",
  "sint32",
  "sint64",
  "fixed32",
  "fixed64",
  "sfixed32",
  "sfixed64",
  "bool",
  "string",
  "bytes",
]);
