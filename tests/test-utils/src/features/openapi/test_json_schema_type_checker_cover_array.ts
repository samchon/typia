import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_json_schema_type_checker_cover_array = (): void => {
  const app: IJsonSchemaCollection =
    typia.json.schemas<[Plan2D, Plan3D, Box2D, Box3D]>();
  const components: OpenApi.IComponents = app.components;

  const plan2D: OpenApi.IJsonSchema = components.schemas!.Plan2D!;
  const plan3D: OpenApi.IJsonSchema = components.schemas!.Plan3D!;

  const box2D: OpenApi.IJsonSchema = components.schemas!.Box2D!;
  const box3D: OpenApi.IJsonSchema = components.schemas!.Box3D!;

  TestValidator.equals(
    "Plan3D[] covers Plan2D[]",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: plan3D },
      y: { type: "array", items: plan2D },
    }),
  );
  TestValidator.equals(
    "Box3D[] covers Box2D[]",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: box3D },
      y: { type: "array", items: box2D },
    }),
  );
  TestValidator.equals(
    "Array<Plan3D|Box3D> covers Array<Plan2D|Box2D>",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "array",
        items: {
          oneOf: [plan3D, box3D],
        },
      },
      y: {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
      },
    }),
  );
  TestValidator.equals(
    "(Plan3D|Box3D)[] covers (Plan2D|Box2D)[]",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: {
        oneOf: [
          { type: "array", items: plan3D },
          { type: "array", items: box3D },
        ],
      },
      y: {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
    }),
  );

  TestValidator.equals(
    "Plan2D[] can't cover Plan3D[]",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: plan2D },
      y: { type: "array", items: plan3D },
    }),
  );
  TestValidator.equals(
    "Box2D[] can't cover Box3D[]",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: box2D },
      y: { type: "array", items: box3D },
    }),
  );
  TestValidator.equals(
    "Array<Plan2D|Box2D> can't cover Array<Plan3D|Box3D>",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
      },
      y: {
        type: "array",
        items: {
          oneOf: [plan3D, box3D],
        },
      },
    }),
  );
  TestValidator.equals(
    "(Plan2D[]|Box2D[]) can't cover (Plan3D[]|Box3D[])",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
      y: {
        oneOf: [
          { type: "array", items: plan3D },
          { type: "array", items: box3D },
        ],
      },
    }),
  );
  TestValidator.equals(
    "Plan3D[] can't cover (Plan2D|Box2D)[]",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: plan3D },
      y: {
        oneOf: [
          { type: "array", items: plan2D },
          { type: "array", items: box2D },
        ],
      },
    }),
  );
  TestValidator.equals(
    "Box3D[] can't cover Array<Plan2D|Box2D>",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: box3D },
      y: {
        type: "array",
        items: {
          oneOf: [plan2D, box2D],
        },
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
