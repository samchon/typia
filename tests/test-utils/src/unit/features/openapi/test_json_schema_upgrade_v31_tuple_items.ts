import { OpenApi, OpenApiV3_1 } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { OpenApiConverter, OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI 3.1 tuple conversion preserves standard items constraints.
 *
 * JSON Schema 2020-12 assigns tuple rest behavior to `items`; the deprecated
 * `additionalItems` keyword has no effect beside `prefixItems`. Emended rest
 * constraints must be emitted as native `items`, and native nonprefix false
 * items must retain the empty closed-array meaning through conversion.
 *
 * 1. Upgrade schema, false, true and omitted rest forms beside prefixItems.
 * 2. Downgrade emended tuples and compare independently authored raw fields.
 * 3. Validate roundtrip rest and minimum-length boundaries, including empty closed
 *    tuples and ordinary arrays with boolean or omitted items.
 */
export const test_json_schema_upgrade_v31_tuple_items = (): void => {
  const schemaRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
    items: { type: "number" },
    additionalItems: false,
    minItems: 1,
  } as OpenApiV3_1.IJsonSchema);
  assertTupleRest("schema rest", schemaRest, { type: "number" });
  expectValidation(
    "schema rest accepts numbers",
    schemaRest,
    ["x", 1, 2],
    true,
  );
  expectValidation(
    "schema rest rejects strings",
    schemaRest,
    ["x", "y"],
    false,
  );

  const falseRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
    items: false,
  } as unknown as OpenApiV3_1.IJsonSchema);
  assertTupleRest("false rest", falseRest, false);
  expectValidation("false rest permits omitted prefix", falseRest, [], true);
  expectValidation("false rest accepts prefix", falseRest, ["x"], true);
  expectValidation("false rest rejects extra", falseRest, ["x", 1], false);

  const openRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
  } as OpenApiV3_1.IJsonSchema);
  assertTupleRest("omitted items is open", openRest, true);
  expectValidation(
    "open rest accepts extra",
    openRest,
    ["x", { anything: true }],
    true,
  );

  const trueRest = upgrade({
    type: "array",
    prefixItems: [{ type: "string" }],
    items: true,
  });
  assertTupleRest("explicit true items is open", trueRest, true);
  expectValidation("true rest permits omitted prefix", trueRest, [], true);
  expectValidation(
    "true rest accepts arbitrary extra",
    trueRest,
    ["x", 1],
    true,
  );

  for (const row of [
    {
      label: "schema",
      rest: { type: "number" } as const,
      items: { type: "number" } as const,
      extra: 1,
      badExtra: "bad",
    },
    { label: "false", rest: false, items: false, extra: 1, badExtra: 1 },
    { label: "true", rest: true, items: true, extra: { arbitrary: true } },
    { label: "omitted", rest: undefined, items: false, extra: 1, badExtra: 1 },
  ]) {
    const source: OpenApi.IJsonSchema.ITuple = {
      type: "array",
      prefixItems: [{ type: "string" }],
      ...(row.rest === undefined ? {} : { additionalItems: row.rest }),
    };
    const raw = downgrade(source);
    TestEquality.equals(
      `${row.label} native tuple fields`,
      {
        type: "type" in raw ? raw.type : undefined,
        prefixItems: "prefixItems" in raw ? raw.prefixItems : undefined,
        items: "items" in raw ? raw.items : undefined,
        minItems: "minItems" in raw ? raw.minItems : undefined,
        additionalItems:
          "additionalItems" in raw ? raw.additionalItems : undefined,
      },
      {
        type: "array",
        prefixItems: [{ type: "string" }],
        items: row.items,
        minItems: 1,
        additionalItems: undefined,
      },
    );
    const roundtrip = upgrade(raw);
    expectValidation(
      `${row.label} required prefix survives`,
      roundtrip,
      [],
      false,
    );
    expectValidation(`${row.label} prefix accepts`, roundtrip, ["x"], true);
    expectValidation(
      `${row.label} extra policy`,
      roundtrip,
      ["x", row.extra],
      row.rest !== false && row.rest !== undefined,
    );
    if (row.badExtra !== undefined)
      expectValidation(
        `${row.label} rejects wrong extra`,
        roundtrip,
        ["x", row.badExtra],
        false,
      );
    expectValidation(
      `${row.label} explicit zero permits empty`,
      upgrade(downgrade({ ...source, minItems: 0 })),
      [],
      true,
    );
  }

  for (const items of [true, undefined] as const) {
    const ordinary = upgrade({
      type: "array",
      ...(items === undefined ? {} : { items }),
    });
    TestEquality.equals(
      "ordinary unconstrained items",
      "items" in ordinary ? ordinary.items : undefined,
      {},
    );
    expectValidation("ordinary open empty", ordinary, [], true);
    expectValidation(
      "ordinary open heterogeneous",
      ordinary,
      [1, "x", {}],
      true,
    );
    expectValidation("ordinary array rejects scalar", ordinary, 1, false);
  }
  for (const minItems of [0, 1]) {
    const closed = upgrade({
      type: "array",
      items: false,
      minItems,
      maxItems: 2,
    });
    assertTupleRest("nonprefix false is closed", closed, false);
    const raw = downgrade(closed);
    TestEquality.equals(
      "empty closed native fields",
      {
        prefixItems: "prefixItems" in raw ? raw.prefixItems : undefined,
        items: "items" in raw ? raw.items : undefined,
        minItems: "minItems" in raw ? raw.minItems : undefined,
        maxItems: "maxItems" in raw ? raw.maxItems : undefined,
      },
      { prefixItems: undefined, items: false, minItems, maxItems: 2 },
    );
    const roundtrip = upgrade(raw);
    expectValidation("empty closed minimum", roundtrip, [], minItems === 0);
    expectValidation("empty closed rejects member", roundtrip, [1], false);
  }
};

const upgrade = (schema: OpenApiV3_1.IJsonSchema): OpenApi.IJsonSchema =>
  OpenApiConverter.upgradeSchema({ components: {}, schema });

const downgrade = (schema: OpenApi.IJsonSchema): OpenApiV3_1.IJsonSchema =>
  OpenApiConverter.downgradeSchema({
    components: {},
    schema,
    version: "3.1",
    downgraded: {},
  });

const assertTupleRest = (
  label: string,
  schema: OpenApi.IJsonSchema,
  expected: boolean | OpenApi.IJsonSchema,
): void => {
  if (!("prefixItems" in schema))
    throw new Error(`${label} did not produce a tuple.`);
  TestEquality.equals(label, schema.additionalItems, expected);
};

const expectValidation = (
  label: string,
  schema: OpenApi.IJsonSchema,
  value: unknown,
  success: boolean,
): void =>
  TestEquality.equals(
    label,
    OpenApiValidator.validate({ components: {}, schema, value, required: true })
      .success,
    success,
  );
