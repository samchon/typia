import { IJsonSchemaCollection, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

/**
 * Verifies array and union coverage on schemas generated for 2D and 3D shapes.
 *
 * OpenApiTypeChecker.covers must follow structural containment for natively
 * generated array schemas.
 *
 * 1. Generate schemas of Plan2D, Plan3D, Box2D and Box3D natively.
 * 2. Compare coverage in both directions for arrays and unions.
 * 3. Assert each authored verdict.
 *
 * @evidence contracts/testing.md#behavioral-verification covers is called on natively generated schemas and each titled comparison is asserted.
 * @evidence contracts/testing.md#independent-expectations Containment between a 3D and a 2D shape (more required fields) is authored from the type declarations.
 * @evidence contracts/testing.md#distinguishing-cases Positive and negative directions for arrays, item unions and array unions are separate titles.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the schemas are produced by typia.json.schemas in the native transform; covers runs in process.
 * @evidence contracts/e2e.md#necessary-boundary Native Plan2D/Plan3D and recursive Box schemas reach covers. Ten authored containment verdicts include wider-to-narrower positives and reversed negatives, pinning tuple/reference interoperability.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage The previous inputs, producer calls and behavioral assertions remain in this exported DynamicExecutor case; portable rows described above have not yet been transferred to unit coverage. Producer parity and structural acceptance retain their stated oracle limits rather than certifying semantic correctness.
 */
export const test_json_schema_type_checker_cover_array = (): void => {
  const app: IJsonSchemaCollection =
    typia.json.schemas<[Plan2D, Plan3D, Box2D, Box3D]>();
  const components: OpenApi.IComponents = app.components;

  const plan2D: OpenApi.IJsonSchema = components.schemas!.Plan2D!;
  const plan3D: OpenApi.IJsonSchema = components.schemas!.Plan3D!;

  const box2D: OpenApi.IJsonSchema = components.schemas!.Box2D!;
  const box3D: OpenApi.IJsonSchema = components.schemas!.Box3D!;

  TestEquality.equals(
    "Plan3D[] covers Plan2D[]",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: plan3D },
      y: { type: "array", items: plan2D },
    }),
  );
  TestEquality.equals(
    "Box3D[] covers Box2D[]",
    true,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: box3D },
      y: { type: "array", items: box2D },
    }),
  );
  TestEquality.equals(
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
  TestEquality.equals(
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

  TestEquality.equals(
    "Plan2D[] can't cover Plan3D[]",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: plan2D },
      y: { type: "array", items: plan3D },
    }),
  );
  TestEquality.equals(
    "Box2D[] can't cover Box3D[]",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { type: "array", items: box2D },
      y: { type: "array", items: box3D },
    }),
  );
  TestEquality.equals(
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
  TestEquality.equals(
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
  TestEquality.equals(
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
  TestEquality.equals(
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
