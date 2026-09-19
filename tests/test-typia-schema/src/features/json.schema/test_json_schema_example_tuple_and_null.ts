import typia, { tags } from "typia";

import { _equalsExactly } from "../../internal/_equalsExactly";

/**
 * Verifies tags.Example and tags.Examples keep the tuple and null values they
 * declare.
 *
 * `tags.Example<V>` declares `V` as any literal, object, array, or `null`, and
 * its own documentation shows `string[] & Example<["admin", "active"]>`. The
 * tag analyzer accepted only a single constant or object value, so a tuple or
 * `null` example was rejected beside another tag and silently dropped alone,
 * where #2400 turned the drop into a compile error. A `null` inside the tag's
 * schema content was also lost on emission, because object writers read a Go
 * `nil` as absent (#2403). Each must compile and reach the schema unchanged.
 *
 * 1. Tag string arrays with tuple examples, alone and beside `MinItems`.
 * 2. Tag values with a `null` example, an object example holding a `null` field,
 *    and an `Examples` record holding a `null` member.
 * 3. Assert every example lands in the emitted JSON schema as written.
 */
export const test_json_schema_example_tuple_and_null = (): void => {
  const properties: Record<string, any> = (
    typia.json.schema<IMember>().schema as any
  ).properties;
  _equalsExactly("sole tuple", properties.roles.example, ["admin", "active"]);
  _equalsExactly("accompanied tuple", properties.groups.example, ["staff"]);
  _equalsExactly(
    "null example",
    properties.nickname.oneOf.find((s: any) => s.type === "string").example,
    null,
  );
  _equalsExactly("object with null", properties.profile.example, {
    name: "John",
    alias: null,
  });
  _equalsExactly(
    "examples with null",
    properties.memo.oneOf.find((s: any) => s.type === "string").examples,
    { empty: null, filled: "note" },
  );
  _equalsExactly(
    "null kept by key",
    "alias" in properties.profile.example &&
      "empty" in
        properties.memo.oneOf.find((s: any) => s.type === "string").examples,
    true,
  );
};

interface IMember {
  roles: string[] & tags.Example<["admin", "active"]>;
  groups: string[] & tags.MinItems<1> & tags.Example<["staff"]>;
  nickname: (string & tags.Example<null>) | null;
  profile: { name: string; alias: string | null } & tags.Example<{
    name: "John";
    alias: null;
  }>;
  memo: (string & tags.Examples<{ empty: null; filled: "note" }>) | null;
}
