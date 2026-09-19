import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies a nested array without `items` downgrades to an open `any[]`.
 *
 * `OpenApiTypeChecker.isArray` requires `items`, so an items-less array matched
 * no checker and every downgrader collapsed it into `{}`, the unconstrained
 * schema; the guard #2392 added inside the array branch was never reached
 * (#2404). The top-level case alone does not cover the object walk, and a
 * described top-level array pins that the restored copy keeps the attributes of
 * the schema it replaces.
 *
 * 1. Downgrade an object whose property is an items-less array to every version.
 * 2. Downgrade a described top-level items-less array to every version.
 * 3. Assert each array keeps `type: "array"` with `items: {}` and its description.
 */
export const test_json_schema_downgrade_items_omitted_nested = (): void => {
  const object = {
    type: "object",
    properties: {
      tags: { type: "array", description: "Free-form tags" },
    },
    required: ["tags"],
  } as unknown as OpenApi.IJsonSchema;
  const described = {
    type: "array",
    description: "Anything",
  } as unknown as OpenApi.IJsonSchema;

  for (const version of ["2.0", "3.0", "3.1"] as const) {
    const nested: any = OpenApiConverter.downgradeSchema({
      version,
      components: {},
      downgraded: {},
      schema: object,
    } as any);
    TestEquality.equals(
      `v${version} nested open array`,
      nested.properties.tags,
      {
        type: "array",
        items: {},
        description: "Free-form tags",
      },
    );

    const top: any = OpenApiConverter.downgradeSchema({
      version,
      components: {},
      downgraded: {},
      schema: described,
    } as any);
    TestEquality.equals(`v${version} described open array`, top, {
      type: "array",
      items: {},
      description: "Anything",
    });
  }
};
