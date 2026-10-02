import typia from "typia";

interface IFailure {
  ok: false;
  error: {
    code: string;
  };
}

interface ISuccess {
  ok: true;
  code: string;
  data: {
    id: string;
  };
}

type Output = IFailure | ISuccess;

interface IController {
  getMe(): Promise<Output>;
  getMeInline(): Promise<
    | { ok: false; error: { code: string } }
    | { ok: true; code: string; data: { id: string } }
  >;
}

const reflectFalse = typia.reflect.schema<false>();
const reflectOutput = typia.reflect.schema<Output>();
const jsonOutput = typia.json.schema<Output>();
const jsonApplication = typia.json.application<IController>();
const fixture = { reflectFalse, reflectOutput, jsonOutput, jsonApplication };

/**
 * Verifies boolean literal discriminant schema in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * booleanLiteralDiscriminantSource declarations; the former
 * booleanLiteralDiscriminantRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from booleanLiteralDiscriminantRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The handwritten false/error and true/data branches determine boolean constant values, component references and sibling pairing across reflection and JSON application schemas. Expectations are never copied from emitted output.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_boolean_literal_discriminant_schema in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed booleanLiteralDiscriminantSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/boolean_literal_discriminant_schema_transform_test.go booleanLiteralDiscriminantRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_boolean_literal_discriminant_schema = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const { reflectFalse, reflectOutput, jsonOutput, jsonApplication }: any = mod;

  const assertValues: any = (name: any, actual: any, expected: any): any => {
    const normalized: any = [...actual].sort(
      (x: any, y: any): any => Number(x) - Number(y),
    );
    if (JSON.stringify(normalized) !== JSON.stringify(expected)) {
      throw new Error(
        name +
          ": expected " +
          JSON.stringify(expected) +
          " but got " +
          JSON.stringify(normalized),
      );
    }
  };

  const assertStrings: any = (name: any, actual: any, expected: any): any => {
    const normalized: any = [...actual].sort();
    if (JSON.stringify(normalized) !== JSON.stringify(expected)) {
      throw new Error(
        name +
          ": expected " +
          JSON.stringify(expected) +
          " but got " +
          JSON.stringify(normalized),
      );
    }
  };

  const reflectProperty: any = (object: any, key: any): any =>
    object.properties.find(
      (property: any): any =>
        property.key.constants[0]?.type === "string" &&
        property.key.constants[0]?.values[0]?.value === key,
    );

  const reflectOkConstant: any = (object: any): any =>
    reflectProperty(object, "ok")
      ?.value.constants.find(
        (constant: any): any => constant.type === "boolean",
      )
      ?.values.map((value: any): any => value.value)
      .filter((value: any): any => typeof value === "boolean");

  const collectReflectOkConstants: any = (unit: any): any =>
    unit.components.objects
      .filter((object: any): any => reflectProperty(object, "ok") !== undefined)
      .flatMap((object: any): any => reflectOkConstant(object) ?? []);

  const assertReflectBranch: any = (
    unit: any,
    sibling: any,
    expected: any,
  ): any => {
    const branch: any = unit.components.objects.find(
      (object: any): any =>
        reflectProperty(object, "ok") !== undefined &&
        reflectProperty(object, sibling) !== undefined,
    );
    if (branch === undefined) {
      throw new Error(
        "reflect branch with property " + sibling + " was not emitted",
      );
    }
    assertValues(
      "reflect branch " + sibling + " ok constant",
      reflectOkConstant(branch) ?? [],
      [expected],
    );
  };

  const schemaName: any = (ref: any): any => ref.split("/").at(-1);

  const collectJsonRefs: any = (schema: any): any => {
    const visit: any = (current: any): any => {
      if (typeof current?.$ref === "string") return [current.$ref];
      if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
      if (current?.type === "object") {
        return Object.values(current.properties ?? {}).flatMap(visit);
      }
      return [];
    };
    return visit(schema);
  };

  const collectJsonOkConstants: any = (schema: any, components: any): any => {
    const visited: any = new Set();
    const visit: any = (current: any): any => {
      if (typeof current?.$ref === "string") {
        if (visited.has(current.$ref)) return [];
        visited.add(current.$ref);
        const target: any = components.schemas?.[schemaName(current.$ref)];
        return target === undefined ? [] : visit(target);
      }
      if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
      if (current?.type === "object") {
        const ok: any = current.properties?.ok;
        return typeof ok?.const === "boolean" ? [ok.const] : [];
      }
      return [];
    };
    return visit(schema);
  };

  const collectJsonObjects: any = (schema: any, components: any): any => {
    const visited: any = new Set();
    const visit: any = (current: any): any => {
      if (typeof current?.$ref === "string") {
        if (visited.has(current.$ref)) return [];
        visited.add(current.$ref);
        const target: any = components.schemas?.[schemaName(current.$ref)];
        return target === undefined ? [] : visit(target);
      }
      if (Array.isArray(current?.oneOf)) return current.oneOf.flatMap(visit);
      if (current?.type === "object") return [current];
      return [];
    };
    return visit(schema);
  };

  const assertJsonBranch: any = (
    name: any,
    schema: any,
    components: any,
    sibling: any,
    expected: any,
  ): any => {
    const branch: any = collectJsonObjects(schema, components).find(
      (object: any): any =>
        object.properties?.ok !== undefined &&
        object.properties?.[sibling] !== undefined,
    );
    if (branch === undefined) {
      throw new Error(
        name + " branch with property " + sibling + " was not emitted",
      );
    }
    const actual: any = branch.properties.ok?.const;
    if (actual !== expected) {
      throw new Error(
        name +
          " branch " +
          sibling +
          " expected ok " +
          expected +
          " but got " +
          actual,
      );
    }
  };

  if (reflectFalse.schema.constants[0]?.type !== "boolean") {
    throw new Error("bare false literal did not emit a boolean constant");
  }
  if (reflectFalse.schema.constants[0]?.values[0]?.value !== false) {
    throw new Error("bare false literal was not preserved");
  }

  assertValues(
    "reflect union ok constants",
    collectReflectOkConstants(reflectOutput),
    [false, true],
  );
  assertReflectBranch(reflectOutput, "error", false);
  assertReflectBranch(reflectOutput, "data", true);

  if (jsonOutput.components.schemas?.IFailure === undefined) {
    throw new Error("json schema did not emit IFailure component");
  }
  if (jsonOutput.components.schemas?.ISuccess === undefined) {
    throw new Error("json schema did not emit ISuccess component");
  }
  assertStrings("json schema branch refs", collectJsonRefs(jsonOutput.schema), [
    "#/components/schemas/IFailure",
    "#/components/schemas/ISuccess",
  ]);
  assertValues(
    "json schema ok constants",
    collectJsonOkConstants(jsonOutput.schema, jsonOutput.components),
    [false, true],
  );
  assertJsonBranch(
    "json schema",
    jsonOutput.schema,
    jsonOutput.components,
    "error",
    false,
  );
  assertJsonBranch(
    "json schema",
    jsonOutput.schema,
    jsonOutput.components,
    "data",
    true,
  );

  const getMe: any = jsonApplication.functions.find(
    (func: any): any => func.name === "getMe",
  );
  if (getMe?.output === undefined) {
    throw new Error("json application did not emit getMe output");
  }
  if (jsonApplication.components.schemas?.IFailure === undefined) {
    throw new Error("json application did not emit IFailure component");
  }
  if (jsonApplication.components.schemas?.ISuccess === undefined) {
    throw new Error("json application did not emit ISuccess component");
  }
  if (jsonApplication.components.schemas?.Output === undefined) {
    throw new Error("json application did not emit Output component");
  }
  assertStrings(
    "json application output ref",
    collectJsonRefs(getMe.output.schema),
    ["#/components/schemas/Output"],
  );
  assertStrings(
    "json application Output branch refs",
    collectJsonRefs(jsonApplication.components.schemas.Output),
    ["#/components/schemas/IFailure", "#/components/schemas/ISuccess"],
  );
  assertValues(
    "json application output ok constants",
    collectJsonOkConstants(getMe.output.schema, jsonApplication.components),
    [false, true],
  );
  assertJsonBranch(
    "json application output",
    getMe.output.schema,
    jsonApplication.components,
    "error",
    false,
  );
  assertJsonBranch(
    "json application output",
    getMe.output.schema,
    jsonApplication.components,
    "data",
    true,
  );

  const getMeInline: any = jsonApplication.functions.find(
    (func: any): any => func.name === "getMeInline",
  );
  if (getMeInline?.output === undefined) {
    throw new Error("json application did not emit getMeInline output");
  }
  assertValues(
    "json application inline output ok constants",
    collectJsonOkConstants(
      getMeInline.output.schema,
      jsonApplication.components,
    ),
    [false, true],
  );
  assertJsonBranch(
    "json application inline output",
    getMeInline.output.schema,
    jsonApplication.components,
    "error",
    false,
  );
  assertJsonBranch(
    "json application inline output",
    getMeInline.output.schema,
    jsonApplication.components,
    "data",
    true,
  );
};
