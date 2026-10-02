import typia, { tags } from "typia";

interface IConfig {
  port: number & tags.Exclude<[0, 22, 80]>;
  name: string & tags.Exclude<["admin", "root"]>;
  serial: bigint & tags.Exclude<[0n]>;
  account: `user-${string}` & tags.Exclude<["user-admin"]>;
}

const isConfig = typia.createIs<IConfig>();
const validateConfig = typia.createValidate<IConfig>();
const schema =
  typia.json.schemas<[{ port: number & tags.Exclude<[0, 22, 80]> }]>();
const fixture = { isConfig, validateConfig, schema };

/**
 * Verifies exclude type tag in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original excludeTypeTagSource
 * declarations; the former excludeTypeTagRuntimeRunner observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from excludeTypeTagRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The declared Exclude lists reject exactly the listed number, string and bigint literals and the excluded template member. Authored nonexcluded values remain accepted; diagnostics retain Exclude and the numeric schema retains its exact not.enum list.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_exclude_type_tag in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed excludeTypeTagSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/exclude_type_tag_transform_test.go excludeTypeTagRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_exclude_type_tag = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const valid: any = {
    port: 8080,
    name: "user",
    serial: 1n,
    account: "user-one",
  };
  if (mod.isConfig(valid) !== true) {
    throw new Error("non-excluded values should pass is");
  }
  for (const port of [0, 22, 80]) {
    if (mod.isConfig({ ...valid, port }) !== false) {
      throw new Error("excluded port " + port + " should fail is");
    }
  }
  for (const name of ["admin", "root"]) {
    if (mod.isConfig({ ...valid, name }) !== false) {
      throw new Error("excluded name " + name + " should fail is");
    }
  }
  if (mod.isConfig({ ...valid, serial: 0n }) !== false) {
    throw new Error("excluded bigint serial should fail is");
  }
  if (mod.isConfig({ ...valid, serial: 2n }) !== true) {
    throw new Error("non-excluded bigint serial should pass is");
  }
  if (mod.isConfig({ ...valid, account: "user-admin" }) !== false) {
    throw new Error("excluded template literal value should fail is");
  }
  if (mod.isConfig({ ...valid, account: "nomatch" }) !== false) {
    throw new Error(
      "template pattern should still be enforced next to exclude",
    );
  }

  const failure: any = mod.validateConfig({ ...valid, port: 22 });
  if (failure.success !== false) {
    throw new Error("excluded port should fail validate");
  }
  if (
    !failure.errors.some(
      (e: any): any =>
        e.path === "$input.port" && e.expected.includes("Exclude"),
    )
  ) {
    throw new Error(
      "validate error should name the exclude tag: " +
        JSON.stringify(failure.errors),
    );
  }
  if (mod.validateConfig(valid).success !== true) {
    throw new Error("valid input should pass validate");
  }

  const unit: any = mod.schema.schemas[0];
  const resolved: any = unit.$ref
    ? mod.schema.components.schemas[unit.$ref.split("/").pop()]
    : unit;
  const port: any = resolved.properties.port;
  if (!port.not || JSON.stringify(port.not["enum"]) !== "[0,22,80]") {
    throw new Error(
      "JSON schema should carry not.enum: " + JSON.stringify(port),
    );
  }
};
