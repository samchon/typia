import typia from "typia";

export type AtomicIntersection = [
  AtomicIntersection.Wrapper<boolean>,
  AtomicIntersection.Wrapper<number>,
  AtomicIntersection.Wrapper<string>,
];

namespace AtomicIntersection {
  export type Wrapper<T> = T & { __meta?: object };
}

const schema = typia.json.schema<AtomicIntersection>();
const fixture = { schema };

/**
 * Verifies atomic intersection schema in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * atomicIntersectionSchemaSource declarations; the former
 * atomicIntersectionSchemaRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from atomicIntersectionSchemaRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The source tuple's boolean, number and string bases establish prefixItems order and component primitive types. Optional marker properties must not replace those bases with object schemas; this assertion does not validate every JSON Schema field.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_atomic_intersection_schema in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed atomicIntersectionSchemaSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/atomic_intersection_schema_transform_test.go atomicIntersectionSchemaRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_atomic_intersection_schema = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const unit: any = mod.schema;

  const schemas: any = unit.components?.schemas ?? {};
  const tuple: any = schemas.AtomicIntersection;
  if (tuple?.type !== "array" || Array.isArray(tuple.prefixItems) === false) {
    throw new Error(
      "AtomicIntersection tuple schema was not emitted: " +
        JSON.stringify(unit),
    );
  }

  const schemaName: any = (ref: any): any => ref.split("/").at(-1);
  const actual: any = tuple.prefixItems.map((item: any): any => {
    const target: any = schemas[schemaName(item.$ref)];
    if (target === undefined) {
      throw new Error("missing tuple component for " + item.$ref);
    }
    return target.type;
  });
  const expected: any = ["boolean", "number", "string"];
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(
      "AtomicIntersection wrapper schemas were " +
        JSON.stringify(actual) +
        ", expected " +
        JSON.stringify(expected),
    );
  }
};
