import { OpenApi } from "@typia/interface";
import { IJsonSchemaCollection } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter, LlmTypeChecker } from "@typia/utils";

/**
 * Verifies array coverage respects element shape and union placement.
 *
 * A containing structural shape can cover its narrower element shape, but the
 * reverse and a missing union variant must fail even through nested
 * references.
 *
 * 1. Convert authored 2D/3D point, geometry, plan and box component graphs.
 * 2. Retain the ten directional and mixed-union comparisons and add equal-shape
 *    positive controls.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.schema feeds LlmTypeChecker.covers directly; ten unequal-shape comparisons and four equal-shape controls distinguish required-field rejection, closed-shape rejection, item unions, array unions and missing variants.
 * @evidence contracts/testing.md#independent-expectations Authored required 2D/3D fields and separate literal booleans establish structural coverage direction. The check helper requires conversion success before inspecting coverage; no expected boolean is computed by covers.
 * @evidence contracts/testing.md#distinguishing-cases The ten original unequal-shape comparisons reject either missing required z fields or extra fields in the closed shape. Equal Plan/Box arrays, item unions and array unions provide positive controls. Native object/array schema emission remains in its matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from declared fields rather than generated at execution. Private local helpers remain reviewed through this owning case.
 */
export const test_llm_type_checker_cover_array = () => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {
        Point2D: {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
          },
          required: ["x", "y"],
        },
        Point3D: {
          type: "object",
          properties: {
            x: {
              type: "number",
            },
            y: {
              type: "number",
            },
            z: {
              type: "number",
            },
          },
          required: ["x", "y", "z"],
        },
        Geometry2D: {
          type: "object",
          properties: {
            position: {
              $ref: "#/components/schemas/Point2D",
            },
            scale: {
              $ref: "#/components/schemas/Point2D",
            },
          },
          required: ["position", "scale"],
        },
        Geometry3D: {
          type: "object",
          properties: {
            position: {
              $ref: "#/components/schemas/Point3D",
            },
            scale: {
              $ref: "#/components/schemas/Point3D",
            },
          },
          required: ["position", "scale"],
        },
        Plan2D: {
          type: "object",
          properties: {
            center: {
              $ref: "#/components/schemas/Point2D",
            },
            size: {
              $ref: "#/components/schemas/Point2D",
            },
            geometries: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Geometry2D",
              },
            },
          },
          required: ["center", "size", "geometries"],
        },
        Plan3D: {
          type: "object",
          properties: {
            center: {
              $ref: "#/components/schemas/Point3D",
            },
            size: {
              $ref: "#/components/schemas/Point3D",
            },
            geometries: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Geometry3D",
              },
            },
          },
          required: ["center", "size", "geometries"],
        },
        Box2D: {
          type: "object",
          properties: {
            size: {
              $ref: "#/components/schemas/Point2D",
            },
            nested: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Point2D",
              },
            },
          },
          required: ["size", "nested"],
        },
        Box3D: {
          type: "object",
          properties: {
            size: {
              $ref: "#/components/schemas/Point3D",
            },
            nested: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Point3D",
              },
            },
          },
          required: ["size", "nested"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/Plan2D",
      },
      {
        $ref: "#/components/schemas/Plan3D",
      },
      {
        $ref: "#/components/schemas/Box2D",
      },
      {
        $ref: "#/components/schemas/Box3D",
      },
    ],
  };
  const components: OpenApi.IComponents = collection.components;
  const plan2D: OpenApi.IJsonSchema = components.schemas!.Plan2D!;
  const plan3D: OpenApi.IJsonSchema = components.schemas!.Plan3D!;
  const box2D: OpenApi.IJsonSchema = components.schemas!.Box2D!;
  const box3D: OpenApi.IJsonSchema = components.schemas!.Box3D!;

  const $defs = {};
  const check = (x: OpenApi.IJsonSchema, y: OpenApi.IJsonSchema): boolean => {
    const [a, b] = [x, y].map((schema) => {
      const result = LlmSchemaConverter.schema({
        components: collection.components,
        schema: schema,
        $defs,
      });
      if (result.success === false)
        throw new Error(`Failed to compose schema.`);
      return result.value;
    });
    return LlmTypeChecker.covers({
      x: a!,
      y: b!,
      $defs,
    });
  };

  TestEquality.equals(
    "Plan3D[] can't cover Plan2D[] with missing required z",
    false,
    check({ type: "array", items: plan3D }, { type: "array", items: plan2D }),
  );
  TestEquality.equals(
    "Box3D[] can't cover Box2D[] with missing required z",
    false,
    check({ type: "array", items: box3D }, { type: "array", items: box2D }),
  );
  TestEquality.equals(
    "Array<Plan3D|Box3D> can't cover Array<Plan2D|Box2D>",
    false,
    check(
      {
        type: "array",
        items: {
          oneOf: [plan3D, box3D],
        },
      },
      {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
      },
    ),
  );
  TestEquality.equals(
    "(Plan3D|Box3D)[] can't cover (Plan2D|Box2D)[]",
    false,
    check(
      {
        oneOf: [
          { type: "array", items: plan3D },
          { type: "array", items: box3D },
        ],
      },
      {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
    ),
  );

  TestEquality.equals(
    "Plan2D[] can't cover Plan3D[]",
    false,
    check({ type: "array", items: plan2D }, { type: "array", items: plan3D }),
  );
  TestEquality.equals(
    "Box2D[] can't cover Box3D[]",
    false,
    check({ type: "array", items: box2D }, { type: "array", items: box3D }),
  );
  TestEquality.equals(
    "Array<Plan2D|Box2D> can't cover Array<Plan3D|Box3D>",
    false,
    check(
      {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
      },
      {
        type: "array",
        items: {
          oneOf: [plan3D, box3D],
        },
      },
    ),
  );
  TestEquality.equals(
    "(Plan2D[]|Box2D[]) can't cover (Plan3D[]|Box3D[])",
    false,
    check(
      {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
      {
        oneOf: [
          { type: "array", items: plan3D },
          { type: "array", items: box3D },
        ],
      },
    ),
  );
  TestEquality.equals(
    "Plan3D[] can't cover (Plan2D|Box2D)[]",
    false,
    check(
      { type: "array", items: plan3D },
      {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
    ),
  );
  TestEquality.equals(
    "Box3D[] can't cover Array<Plan2D|Box2D>",
    false,
    check(
      { type: "array", items: box3D },
      {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
      },
    ),
  );
  for (const schema of [
    { type: "array" as const, items: plan3D },
    { type: "array" as const, items: box3D },
    { type: "array" as const, items: { oneOf: [plan3D, box3D] } },
    {
      oneOf: [
        { type: "array" as const, items: plan3D },
        { type: "array" as const, items: box3D },
      ],
    },
  ])
    TestEquality.equals(
      "equal array shapes cover each other",
      true,
      check(schema, JSON.parse(JSON.stringify(schema))),
    );
};
