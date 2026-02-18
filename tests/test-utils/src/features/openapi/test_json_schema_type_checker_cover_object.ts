import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

export const test_json_schema_type_checker_cover_object = (): void => {
  const app: IJsonSchemaCollection =
    typia.json.schemas<[Plan2D, Plan3D, Box2D, Box3D]>();
  const components: OpenApi.IComponents = app.components as any;

  const plan2D: OpenApi.IJsonSchema = components.schemas!.Plan2D!;
  const plan3D: OpenApi.IJsonSchema = components.schemas!.Plan3D!;
  const box2D: OpenApi.IJsonSchema = components.schemas!.Box2D!;
  const box3D: OpenApi.IJsonSchema = components.schemas!.Box3D!;

  //----
  // SUCCESS SCENARIOS
  //----
  // SINGLE OBJECT TYPE
  TestValidator.equals(
    "Plan3D covers Plan2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: plan3D,
      y: plan2D,
    }),
  );
  TestValidator.equals(
    "Box3D covers Box2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: box3D,
      y: box2D,
    }),
  );

  // UNION TYPE
  TestValidator.equals(
    "(Plan3D|Box3D) covers Plan2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: plan2D,
    }),
  );
  TestValidator.equals(
    "(Plan3D|Box3D) covers Box2D",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: box2D,
    }),
  );
  TestValidator.equals(
    "(Plan3D|Box3D) covers (Plan2D|Box2D)",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: { oneOf: [box2D, box2D] },
    }),
  );

  // DYNAMIC FEATURES
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
    "Plan2D can't cover Plan3D",
    false,
    OpenApiTypeChecker.covers({ components, x: plan2D, y: plan3D }),
  );
  TestValidator.equals(
    "Box2D can't cover Box3D",
    false,
    OpenApiTypeChecker.covers({ components, x: box2D, y: box3D }),
  );

  // UNION TYPE
  TestValidator.equals(
    "Plan3D can't cover (Plan2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: plan3D,
      y: { oneOf: [plan2D, box2D] },
    }),
  );
  TestValidator.equals(
    "Box3D can't cover (Plan2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: box3D,
      y: { oneOf: [plan2D, box2D] },
    }),
  );

  // DYNAMIC FEATURES
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
  TestValidator.equals(
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
