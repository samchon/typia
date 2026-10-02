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
 * @evidence contracts/testing.md#distinguishing-cases Missing required z and extra closed-shape fields reject both unequal-shape directions for objects and unions. Equal-shape objects/unions supply positive controls; generated additional-property rows retain their required-key distinction.
 * @evidence contracts/testing.md#execution-ownership The test-utils test:integration command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this exported case. the schemas are produced by typia.json.schemas in the native transform; covers runs in process.
 * @evidence contracts/e2e.md#necessary-boundary Native Plan and recursive Box schemas reach covers with authored containment verdicts, including mixed Plan/Box unions and duplicated Box branches as separate rows. Handwritten required/additionalProperties assertions execute in the plugin-free unit case; only generated-schema rows remain here.
 * @evidence contracts/e2e.md#shared-execution This case shares the test-utils integration project and native-plugin artifact lifecycle with the other src/features exports. Its runtime rows reuse emitted schemas/callbacks in this invocation instead of starting a compiler host per input; it performs no independent installation or host launch.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its schema/definition objects and payloads; document callers parse fresh text before conversion. Compiler-artifact reuse cannot supply a prior runtime verdict. This case opens no persistent service/process handle; fixture-reader unit temporary files are owned and released by that separate unit.
 * @evidence contracts/e2e.md#preserved-coverage All original generated pairs remain; all eight authored portable rows moved unchanged to test_schema_cover_required_properties. Missing required z changes seven wrong acceptance verdicts to rejection, and three equal-shape controls add accepted generated-object and union checks. The moved rows preserve their schemas and verdicts in the unit runner.
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
  // DECLARED SHAPE COMPARISONS
  //----
  // SINGLE OBJECT TYPE
  TestEquality.equals(
    "Plan3D can't cover Plan2D with missing required z",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: plan3D,
      y: plan2D,
    }),
  );
  TestEquality.equals(
    "Box3D can't cover Box2D with missing required z",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: box3D,
      y: box2D,
    }),
  );

  // UNION TYPE
  TestEquality.equals(
    "(Plan3D|Box3D) can't cover Plan2D",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: plan2D,
    }),
  );
  TestEquality.equals(
    "(Plan3D|Box3D) can't cover Box2D",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: box2D,
    }),
  );
  TestEquality.equals(
    "(Plan3D|Box3D) can't cover (Box2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: { oneOf: [box2D, box2D] },
    }),
  );
  TestEquality.equals(
    "(Plan3D|Box3D) can't cover (Plan2D|Box2D)",
    false,
    OpenApiTypeChecker.covers({
      components,
      x: { oneOf: [plan3D, box3D] },
      y: { oneOf: [plan2D, box2D] },
    }),
  );

  // DYNAMIC FEATURES
  TestEquality.equals(
    "additionalProperties can't cover a missing required z",
    false,
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
  for (const schema of [plan3D, box3D, { oneOf: [plan3D, box3D] }])
    TestEquality.equals(
      "equal object shapes cover each other",
      true,
      OpenApiTypeChecker.covers({
        components,
        x: schema,
        y: JSON.parse(JSON.stringify(schema)),
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
