import { OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies object coverage on schemas generated for 2D and 3D shapes.
 *
 * Covers must follow structural containment for natively generated object
 * schemas.
 *
 * 1. Generate schemas of Plan2D, Plan3D, Box2D and Box3D natively.
 * 2. Compare coverage in both directions.
 * 3. Assert each authored verdict.
 *
 * @evidence contracts/testing.md#behavioral-verification covers is called on natively generated object schemas and each titled comparison is asserted.
 * @evidence contracts/testing.md#independent-expectations Containment follows the declared required fields, authored in the test.
 * @evidence contracts/testing.md#distinguishing-cases Positive and negative directions for objects, nested objects and unions are separate titles.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the schemas are produced by typia.json.schemas in the native transform; covers runs in process.
 */
export const test_json_schema_type_checker_cover_object = (): void => {
  const app: IJsonSchemaCollection =
    typia.json.schemas<[Plan2D, Plan3D, Box2D, Box3D]>();
  const components: OpenApi.IComponents = app.components;

  const plan2D: OpenApi.IJsonSchema = components.schemas!.Plan2D!;
  const plan3D: OpenApi.IJsonSchema = components.schemas!.Plan3D!;
  const box2D: OpenApi.IJsonSchema = components.schemas!.Box2D!;
  const box3D: OpenApi.IJsonSchema = components.schemas!.Box3D!;

  //----
  // SUCCESS SCENARIOS
  //----
  // SINGLE OBJECT TYPE
  TestEquality.equals(
    "Plan3D covers Plan2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: plan3D,
      y: plan2D,
    }),
  );
  TestEquality.equals(
    "Box3D covers Box2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: box3D,
      y: box2D,
    }),
  );

  // UNION TYPE
  TestEquality.equals(
    "(Plan3D|Box3D) covers Plan2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: plan2D,
    }),
  );
  TestEquality.equals(
    "(Plan3D|Box3D) covers Box2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: box2D,
    }),
  );
  TestEquality.equals(
    "(Plan3D|Box3D) covers (Plan2D|Box2D)",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: { oneOf: [box2D, box2D] },
    }),
  );

  // DYNAMIC FEATURES
  TestEquality.equals(
    "optional covers required",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
    }),
  );
  TestEquality.equals(
    "(additionalProperties := true) cover static",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "(additionalProperties := object) covers static",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {},
          required: [],
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "(additionalProperties := true) covers everything",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "additionalProperties covers relationship",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: box3D,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: box2D,
        required: [],
      },
    }),
  );

  //----
  // FAILURE SCENARIOS
  //----
  // SINGLE OBJECT TYPE
  TestEquality.equals(
    "Plan2D can't cover Plan3D",
    false,
    OpenApiTypeChecker.covers({ components, x: plan2D, y: plan3D }),
  );
  TestEquality.equals(
    "Box2D can't cover Box3D",
    false,
    OpenApiTypeChecker.covers({ components, x: box2D, y: box3D }),
  );

  // UNION TYPE
  TestEquality.equals(
    "Plan3D can't cover (Plan2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: plan3D,
      y: { oneOf: [plan2D, box2D] },
    }),
  );
  TestEquality.equals(
    "Box3D can't cover (Plan2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: box3D,
      y: { oneOf: [plan2D, box2D] },
    }),
  );

  // DYNAMIC FEATURES
  TestEquality.equals(
    "required can't cover optional",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: ["id"],
      },
      y: {
        type: "object",
        properties: {
          id: { type: "string" },
        },
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "static can't cover (additionalProperties := true)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "static can't cover (additionalProperties := object)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {},
          required: [],
        },
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "nothing can cover (additionalProperties := true)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: [],
        },
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: true,
        required: [],
      },
    }),
  );
  TestEquality.equals(
    "relationship can't cover additionalProperties",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "object",
        properties: {},
        additionalProperties: box2D,
        required: [],
      },
      y: {
        type: "object",
        properties: {},
        additionalProperties: box3D,
        required: [],
      },
    }),
  );
};

type Plan2D = {
  center: Point2D;
  size: Point2D;
  geometries: Geometry2D[];
};
type Plan3D = {
  center: Point3D;
  size: Point3D;
  geometries: Geometry3D[];
};
type Geometry3D = {
  position: Point3D;
  scale: Point3D;
};
type Geometry2D = {
  position: Point2D;
  scale: Point2D;
};
type Point2D = {
  x: number;
  y: number;
};
type Point3D = {
  x: number;
  y: number;
  z: number;
};
type Box2D = {
  size: Point2D;
  nested: Box2D;
};
type Box3D = {
  size: Point3D;
  nested: Box3D;
};
