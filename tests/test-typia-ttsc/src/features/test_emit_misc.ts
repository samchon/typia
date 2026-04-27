import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/** Misc.literals / misc.clone / misc.prune / notations.camel / reflect.name. */
export async function test_emit_misc(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "misc");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  const emitted = fs.readFileSync(mainPath, "utf8");
  assert.equal(
    emitted.includes("const __clone = (v)"),
    false,
    "misc clone fixture should use schema-shaped clone emit, not the generic walker",
  );
  assert.equal(
    emitted.includes("const __walk ="),
    false,
    "notation fixture should use schema-shaped notation emit, not the generic walker",
  );
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    statuses: string[];
    booleans: boolean[];
    bigintLiterals: bigint[];
    schemaName: string;
    inlineName: string;
    regularInlineName: string;
    regularAliasName: string;
    nonRegularAliasName: string;
    regularConditionalName: string;
    reflected: {
      schema: {
        objects: Array<{ name: string; tags: unknown[] }>;
      };
      components: {
        objects: Array<{
          name: string;
          description?: string;
          jsDocTags: Array<{ name: string; text?: unknown[] }>;
          properties: Array<{
            value: {
              templates: Array<{ row: unknown[] }>;
            };
            description: string | null;
            jsDocTags: Array<{ name: string; text?: unknown[] }>;
            mutability?: "readonly" | null;
          }>;
          dynamicProperties?: unknown;
          additionalProperties?: unknown;
        }>;
      };
    };
    toCamel: (x: { first_name: string; last_name: string }) => {
      firstName: string;
      lastName: string;
    };
    toSnake: (x: { __userID: string; displayName: string }) => {
      __user_id: string;
      display_name: string;
    };
    pruneMember: (x: Record<string, unknown>) => Record<string, unknown>;
    cloneMember: (x: { id: string; name: string }) => {
      id: string;
      name: string;
    };
    cloneRich: (x: {
      created: Date;
      bytes: Uint8Array;
      tags: Set<string>;
      scores: Map<string, number>;
      value: bigint;
    }) => {
      created: Date;
      bytes: Uint8Array;
      tags: Set<string>;
      scores: Map<string, number>;
      value: bigint;
    };
    cloneNativeString: (x: String) => string;
    cloneUnion: (
      x: string | { id: string; nested_value: { first_name: string } },
    ) => string | { id: string; nested_value: { first_name: string } };
    notationUnion: (
      x: string | { id: string; nested_value: { first_name: string } },
    ) => string | { id: string; nestedValue: { firstName: string } };
    cloneDynamic: (x: {
      fixed_value: string;
      extra_user: { first_name: string };
      ignored?: { first_name: string };
    }) => {
      fixed_value: string;
      extra_user: { first_name: string };
    };
    notationDynamic: (x: {
      fixed_value: string;
      extra_user: { first_name: string };
      ignored?: { first_name: string };
    }) => {
      fixedValue: string;
      extra_user: { firstName: string };
    };
    cloneAdditional: (
      x: Record<string, { first_name: string }>,
    ) => Record<string, { first_name: string }>;
    notationAdditional: (
      x: Record<string, { first_name: string }>,
    ) => Record<string, { firstName: string }>;
    cloneRecursive: (x: {
      name_value: string;
      children: Array<{ name_value: string; children: unknown[] }>;
    }) => {
      name_value: string;
      children: Array<{ name_value: string; children: unknown[] }>;
    };
    notationRecursive: (x: {
      name_value: string;
      children: Array<{ name_value: string; children: unknown[] }>;
    }) => {
      nameValue: string;
      children: Array<{ nameValue: string; children: unknown[] }>;
    };
    randomMap: () => Map<string, number>;
    randomSet: () => Set<string>;
    createRandomMap: () => Map<string, number>;
    createRandomSet: () => Set<string>;
    randomRecursiveCollections: () => {
      name: string;
      tags: Set<string>;
      scores: Map<string, number>;
      children: unknown[];
    } & Record<`extra_${string}`, string>;
  };

  assert.deepEqual([...mod.statuses].sort(), ["active", "archived", "pending"]);
  assert.equal(mod.schemaName, "Member");
  assert.deepEqual(mod.booleans, [true, false]);
  assert.deepEqual(mod.bigintLiterals, [BigInt(1), BigInt(2)]);
  assert.equal(mod.inlineName, "{ value: string }");
  assert.match(mod.regularInlineName, /^TypeLiteral#[0-9]+$/);
  assert.match(mod.regularAliasName, /^TypeLiteral#[0-9]+$/);
  assert.equal(mod.nonRegularAliasName, "{ value: string }");
  assert.match(mod.regularConditionalName, /^TypeLiteral#[0-9]+$/);
  const reflectedObject = mod.reflected.components.objects.find(
    (obj) => obj.name === "ReflectTarget",
  )!;
  assert.equal(reflectedObject.name, "ReflectTarget");
  assert.equal(reflectedObject.description, "Reflect object docs.");
  assert.deepEqual(reflectedObject.jsDocTags, [
    {
      name: "deprecated",
      text: [{ text: "Object deprecated.", kind: "text" }],
    },
  ]);
  assert.equal("dynamicProperties" in reflectedObject, false);
  assert.equal("additionalProperties" in reflectedObject, false);
  const reflectedProperty = reflectedObject.properties[0]!;
  assert.equal(reflectedProperty.description, "Visible property docs.");
  assert.equal(reflectedProperty.jsDocTags[0]!.name, "deprecated");
  assert.deepEqual(reflectedProperty.jsDocTags[0]!.text, [
    { text: "Use replacement.", kind: "text" },
  ]);
  assert.deepEqual(
    reflectedProperty.jsDocTags.map((tag) => tag.name),
    ["deprecated", "example", "example"],
  );
  assert.deepEqual(reflectedProperty.jsDocTags[1]!.text, [
    { text: "first sample", kind: "text" },
  ]);
  assert.deepEqual(reflectedProperty.jsDocTags[2]!.text, [
    { text: "second sample", kind: "text" },
  ]);
  assert.equal(reflectedProperty.mutability, "readonly");
  assert.equal(
    typeof reflectedProperty.value.templates[0]!.row[0],
    "object",
    "reflect template rows must contain schema objects, not raw strings",
  );

  assert.deepEqual(mod.toCamel({ first_name: "Jane", last_name: "Doe" }), {
    firstName: "Jane",
    lastName: "Doe",
  });
  assert.deepEqual(mod.toSnake({ __userID: "u", displayName: "Jane" }), {
    __user_id: "u",
    display_name: "Jane",
  });

  const pruned = mod.pruneMember({
    id: "a",
    name: "Bob",
    extra: "should be gone",
  });
  assert.deepEqual(pruned, { id: "a", name: "Bob" });

  const src = { id: "a", name: "Bob" };
  const cloned = mod.cloneMember(src);
  assert.deepEqual(cloned, src);
  assert.notStrictEqual(cloned, src, "clone should create a new reference");

  const rich = {
    created: new Date("2026-04-27T00:00:00.000Z"),
    bytes: new Uint8Array([1, 2, 3]),
    tags: new Set(["a", "b"]),
    scores: new Map([["a", 1]]),
    value: BigInt(10),
  };
  const clonedRich = mod.cloneRich(rich);
  assert.notStrictEqual(clonedRich, rich);
  assert.notStrictEqual(clonedRich.created, rich.created);
  assert.equal(clonedRich.created.getTime(), rich.created.getTime());
  assert.deepEqual([...clonedRich.bytes], [1, 2, 3]);
  assert.notStrictEqual(clonedRich.bytes, rich.bytes);
  assert.deepEqual([...clonedRich.tags], ["a", "b"]);
  assert.notStrictEqual(clonedRich.tags, rich.tags);
  assert.deepEqual([...clonedRich.scores], [["a", 1]]);
  assert.notStrictEqual(clonedRich.scores, rich.scores);
  assert.equal(clonedRich.value, BigInt(10));
  assert.equal(mod.cloneNativeString(new String("wrapped")), "wrapped");
  assert.equal(mod.cloneUnion("scalar"), "scalar");
  assert.deepEqual(
    mod.cloneUnion({ id: "a", nested_value: { first_name: "Jane" } }),
    {
      id: "a",
      nested_value: { first_name: "Jane" },
    },
  );
  assert.deepEqual(
    mod.notationUnion({ id: "a", nested_value: { first_name: "Jane" } }),
    { id: "a", nestedValue: { firstName: "Jane" } },
  );
  assert.deepEqual(
    mod.cloneDynamic({
      fixed_value: "fixed",
      extra_user: { first_name: "Jane" },
      ignored: { first_name: "Drop" },
    }),
    {
      fixed_value: "fixed",
      extra_user: { first_name: "Jane" },
    },
  );
  assert.deepEqual(
    mod.notationDynamic({
      fixed_value: "fixed",
      extra_user: { first_name: "Jane" },
      ignored: { first_name: "Drop" },
    }),
    {
      fixedValue: "fixed",
      extra_user: { firstName: "Jane" },
    },
  );
  assert.deepEqual(
    mod.cloneAdditional({
      first: { first_name: "Jane" },
      second: { first_name: "John" },
    }),
    {
      first: { first_name: "Jane" },
      second: { first_name: "John" },
    },
  );
  assert.deepEqual(
    mod.notationAdditional({
      first: { first_name: "Jane" },
      second: { first_name: "John" },
    }),
    {
      first: { firstName: "Jane" },
      second: { firstName: "John" },
    },
  );
  const recursive = {
    name_value: "root",
    children: [{ name_value: "leaf", children: [] }],
  };
  const clonedRecursive = mod.cloneRecursive(recursive);
  assert.deepEqual(clonedRecursive, recursive);
  assert.notStrictEqual(clonedRecursive, recursive);
  assert.notStrictEqual(clonedRecursive.children[0], recursive.children[0]);
  assert.deepEqual(mod.notationRecursive(recursive), {
    nameValue: "root",
    children: [{ nameValue: "leaf", children: [] }],
  });
  assert.ok(mod.randomMap() instanceof Map);
  assert.ok(mod.randomSet() instanceof Set);
  assert.ok(mod.createRandomMap() instanceof Map);
  assert.ok(mod.createRandomSet() instanceof Set);
  const recursiveRandom = mod.randomRecursiveCollections();
  assert.ok(recursiveRandom.tags instanceof Set);
  assert.ok(recursiveRandom.scores instanceof Map);
  assert.ok(Array.isArray(recursiveRandom.children));
  assert.ok(emitted.includes("new Set((5 >= _depth ?"));
  assert.ok(emitted.includes("new Map((5 >= _depth ?"));
  assert.ok(emitted.includes("Object.fromEntries((5 >= _depth ?"));
}
