import typia from "typia";

interface DynamicComposite {
  id: string;
  name: string;
  [index: number]: number;
  [key: `prefix_${string}`]: string;
  [key: `${string}_postfix`]: string;
  [key: `value_${number}`]: boolean | string | number;
  [key: `between_${string}_and_${number}`]: boolean;
}

interface DynamicTemplate {
  [key: `prefix_${string}`]: string;
  [key: `${string}_postfix`]: string;
  [key: `value_${number}`]: number;
  [key: `between_${string}_and_${number}`]: boolean;
}

interface DynamicUnion {
  [key: number | `prefix_${string}` | `${string}_postfix`]: string;
  [key: `value_between_${number}_and_${number}`]: number;
}

interface LiteralOnly {
  z: string;
  a: number;
}

interface SingleDynamic {
  [key: `only_${string}`]: string;
}

type OrdinaryUnion = string | number;

const schemas =
  typia.json.schemas<
    [
      DynamicComposite,
      DynamicTemplate,
      DynamicUnion,
      LiteralOnly,
      SingleDynamic,
      OrdinaryUnion,
    ]
  >();
const fixture = { schemas };

/**
 * Verifies json schema dynamic key determinism in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonSchemaDynamicKeyDeterminismSource declarations; the former
 * jsonSchemaDynamicKeyDeterminismRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonSchemaDynamicKeyDeterminismRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The authored component value types establish each additionalProperties.oneOf order. Literal keys z then a, their primitive types and required order, a single string dynamic schema, ordinary union order and six root references are separately pinned; runtime assertions do not prove repeated-build determinism.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_schema_dynamic_key_determinism in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonSchemaDynamicKeyDeterminismSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_schema_dynamic_key_determinism_transform_test.go jsonSchemaDynamicKeyDeterminismRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_schema_dynamic_key_determinism = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const unit: any = mod.schemas;

  const components: any = unit.components?.schemas ?? {};
  const assertTypes: any = (name: any, expected: any): any => {
    const additional: any = components[name]?.additionalProperties;
    const actual: any = Array.isArray(additional?.oneOf)
      ? additional.oneOf.map((schema: any): any => schema.type)
      : [additional?.type];
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        name +
          " branches were " +
          JSON.stringify(actual) +
          ", expected " +
          JSON.stringify(expected),
      );
    }
  };

  assertTypes("DynamicComposite", ["number", "string", "boolean"]);
  assertTypes("DynamicTemplate", ["string", "number", "boolean"]);
  assertTypes("DynamicUnion", ["string", "number"]);

  const literal: any = components.LiteralOnly;
  const literalShape: any = {
    type: literal?.type,
    propertyKeys: Object.keys(literal?.properties ?? {}),
    propertyTypes: Object.values(literal?.properties ?? {}).map(
      (schema: any): any => schema.type,
    ),
    required: literal?.required,
    additionalProperties: literal?.additionalProperties,
  };
  const expectedLiteralShape: any = {
    type: "object",
    propertyKeys: ["z", "a"],
    propertyTypes: ["string", "number"],
    required: ["z", "a"],
    additionalProperties: false,
  };
  if (JSON.stringify(literalShape) !== JSON.stringify(expectedLiteralShape)) {
    throw new Error(
      "zero-dynamic literal schema changed: " + JSON.stringify(literalShape),
    );
  }
  if (components.SingleDynamic?.additionalProperties?.type !== "string") {
    throw new Error(
      "single dynamic-key schema changed: " +
        JSON.stringify(components.SingleDynamic),
    );
  }
  const ordinaryTypes: any =
    components.OrdinaryUnion?.oneOf?.map((schema: any): any => schema.type) ??
    [];
  if (JSON.stringify(ordinaryTypes) !== JSON.stringify(["string", "number"])) {
    throw new Error(
      "ordinary union branches changed: " + JSON.stringify(ordinaryTypes),
    );
  }

  const refs: any = unit.schemas.map((schema: any): any => schema.$ref);
  const expectedRefs: any = [
    "#/components/schemas/DynamicComposite",
    "#/components/schemas/DynamicTemplate",
    "#/components/schemas/DynamicUnion",
    "#/components/schemas/LiteralOnly",
    "#/components/schemas/SingleDynamic",
    "#/components/schemas/OrdinaryUnion",
  ];
  if (JSON.stringify(refs) !== JSON.stringify(expectedRefs)) {
    throw new Error("schema order changed: " + JSON.stringify(refs));
  }
};
