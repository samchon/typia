import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies root schema references follow aliases without descending into
 * values.
 *
 * A valid alias chain was reported as recursive because the resolver revisited
 * its original schema. Following aliases must terminate on genuine cycles and
 * preserve the shared reference reader's spelling and dictionary rules.
 *
 * 1. Resolve direct, escaped and long alias chains to their original leaf.
 * 2. Retain nested references and diagnose missing or malformed alias targets.
 * 3. Reject self and multi-key cycles and distinguish own from inherited keys.
 *
 * @evidence contracts/testing.md#behavioral-verification Calls the actual public OpenApiTypeChecker.unreference and checks terminal identity, diagnostic schema/accessor/message and propagation of a component getter error. Valid chains must succeed while actual cycles must fail without throwing or hanging.
 * @evidence contracts/testing.md#independent-expectations Authored component maps identify a literal terminal schema. Explicit cycle edges and absent keys determine literal reasons and accessors; no expected result is computed with the resolver or a copied traversal algorithm.
 * @evidence contracts/testing.md#distinguishing-cases Covers non-reference and unknown schemas, direct and chained references, slash/tilde/space/percent spellings, missing/malformed/foreign targets at root and later hops, own prototype-named keys versus inheritance, null-prototype dictionaries, self/two/three-key cycles and entry chains, a 12000-hop chain, nested recursive object identity and own getter exceptions.
 * @evidence contracts/testing.md#execution-ownership This matching exported case is registered by test-utils unit node:test entry under its plugin-free configuration. It imports the actual public utility and requires no native producer, installed consumer or worker; packed wiring is a separate integration gate.
 */
export const test_openapi_unreference_alias_chains = (): void => {
  const leaf: OpenApi.IJsonSchema = {
    type: "object",
    properties: { child: { $ref: "#/components/schemas/A" } },
    required: [],
  };
  for (const schema of [leaf, {}]) {
    const result = OpenApiTypeChecker.unreference({ schema, components: {} });
    assert.equal(result.success, true);
    if (result.success) assert.equal(result.value, schema);
  }
  const schemas: Record<string, OpenApi.IJsonSchema> = {
    A: { $ref: "#/components/schemas/B" },
    B: leaf,
    "A/B": { $ref: "#/components/schemas/C~0D" },
    "C~D": leaf,
    "A B": { $ref: "#/components/schemas/100%" },
    "100%": leaf,
    "A~1B": { $ref: "#/components/schemas/B" },
    ["__proto__"]: { $ref: "#/components/schemas/constructor" },
    constructor: leaf,
  };
  for (const reference of [
    "B",
    "A",
    "A~1B",
    "A~01B",
    "A%20B",
    "A B",
    "100%",
    "__proto__",
  ]) {
    const result = OpenApiTypeChecker.unreference({
      schema: { $ref: `#/components/schemas/${reference}` },
      components: { schemas },
    });
    assert.equal(result.success, true, reference);
    if (result.success) assert.equal(result.value, leaf, reference);
  }
  assert.deepEqual(leaf.properties?.child, { $ref: "#/components/schemas/A" });

  for (const reference of [
    "#/components/schemas/Missing",
    "#/components/schemas/A~2B",
    "#/components/schemas/A/B",
    "#/components/schemas/A%2FB",
    "https://example.com/schema#/components/schemas/B",
    "#/definitions/B",
  ]) {
    const schema: OpenApi.IJsonSchema = { $ref: reference };
    const result = OpenApiTypeChecker.unreference({
      schema,
      components: { schemas },
      accessor: "$root",
      refAccessor: "$components",
    });
    assert.equal(result.success, false, reference);
    if (!result.success) {
      assert.equal(result.error.method, "OpenApiTypeChecker.unreference");
      assert.equal(result.error.reasons.length, 1);
      assert.equal(result.error.reasons[0]?.schema, schema);
      assert.equal(result.error.reasons[0]?.accessor, "$root");
      assert.equal(
        result.error.reasons[0]?.message,
        `unable to find reference type ${JSON.stringify(reference === "#/components/schemas/Missing" ? "Missing" : reference)}.`,
      );
    }
  }
  for (const target of [
    "#/components/schemas/Missing",
    "#/components/schemas/A~2B",
    "#/definitions/B",
  ]) {
    const alias: OpenApi.IJsonSchema = { $ref: target };
    const result = OpenApiTypeChecker.unreference({
      schema: { $ref: "#/components/schemas/A" },
      components: { schemas: { A: alias } },
      refAccessor: "$components",
    });
    assert.equal(result.success, false);
    if (!result.success) {
      assert.equal(result.error.reasons[0]?.schema, alias);
      assert.equal(result.error.reasons[0]?.accessor, '$components["A"]');
      assert.equal(
        result.error.reasons[0]?.message,
        `unable to find reference type ${JSON.stringify(target === "#/components/schemas/Missing" ? "Missing" : target)}.`,
      );
    }
  }
  const cycles: {
    schemas: Record<string, OpenApi.IJsonSchema>;
    key: string;
    accessor: string;
  }[] = [
    {
      schemas: { A: { $ref: "#/components/schemas/A" } },
      key: "A",
      accessor: '$components["A"]',
    },
    {
      schemas: {
        A: { $ref: "#/components/schemas/B" },
        B: { $ref: "#/components/schemas/A" },
      },
      key: "A",
      accessor: '$components["B"]',
    },
    {
      schemas: {
        A: { $ref: "#/components/schemas/B" },
        B: { $ref: "#/components/schemas/C" },
        C: { $ref: "#/components/schemas/A" },
      },
      key: "A",
      accessor: '$components["C"]',
    },
    {
      schemas: {
        A: { $ref: "#/components/schemas/B" },
        B: { $ref: "#/components/schemas/C" },
        C: { $ref: "#/components/schemas/B" },
      },
      key: "B",
      accessor: '$components["C"]',
    },
  ];
  for (const scenario of cycles) {
    const result = OpenApiTypeChecker.unreference({
      schema: { $ref: "#/components/schemas/A" },
      components: { schemas: scenario.schemas },
      refAccessor: "$components",
    });
    assert.equal(result.success, false);
    if (!result.success) {
      assert.equal(result.error.reasons.length, 1);
      assert.equal(result.error.reasons[0]?.accessor, scenario.accessor);
      assert.equal(
        result.error.reasons[0]?.message,
        `recursive reference type ${JSON.stringify(scenario.key)}.`,
      );
    }
  }
  const inherited: Record<string, OpenApi.IJsonSchema> = Object.create({
    A: leaf,
  });
  for (const key of ["A", "__proto__", "constructor", "toString"]) {
    const result = OpenApiTypeChecker.unreference({
      schema: { $ref: `#/components/schemas/${key}` },
      components: { schemas: inherited },
    });
    assert.equal(result.success, false, key);
  }
  const nullPrototype: Record<string, OpenApi.IJsonSchema> =
    Object.create(null);
  nullPrototype.A = { $ref: "#/components/schemas/__proto__" };
  nullPrototype["__proto__"] = leaf;
  const safe = OpenApiTypeChecker.unreference({
    schema: { $ref: "#/components/schemas/A" },
    components: { schemas: nullPrototype },
  });
  assert.equal(safe.success, true);
  if (safe.success) assert.equal(safe.value, leaf);
  const long: Record<string, OpenApi.IJsonSchema> = {};
  for (let i = 0; i < 12000; i++)
    long[`N${i}`] = { $ref: `#/components/schemas/N${i + 1}` };
  long.N12000 = leaf;
  const deep = OpenApiTypeChecker.unreference({
    schema: { $ref: "#/components/schemas/N0" },
    components: { schemas: long },
  });
  assert.equal(deep.success, true);
  if (deep.success) assert.equal(deep.value, leaf);
  const error = new Error("component getter");
  const exotic: Record<string, OpenApi.IJsonSchema> = {
    get A(): OpenApi.IJsonSchema {
      throw error;
    },
  };
  assert.throws(
    () =>
      OpenApiTypeChecker.unreference({
        schema: { $ref: "#/components/schemas/A" },
        components: { schemas: exotic },
      }),
    (thrown) => thrown === error,
  );
};
