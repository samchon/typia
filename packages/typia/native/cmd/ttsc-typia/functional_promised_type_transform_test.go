package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestFunctionalPromisedTypeTransform verifies semantic async wrappers.
//
// Every functional family shares the return-type classifier. A derived Promise
// must produce an async wrapper that validates the fulfilled value, while a
// non-thenable class merely named Promise must remain synchronous.
//
//  1. Transform all assert, is/equals, and validate function variants.
//  2. Exercise derived class/interface and branded Promise results.
//  3. Pin invalid parameters, invalid fulfilled values, rejection, and the
//     shadowed-name negative control without regressing receiver forwarding.
func TestFunctionalPromisedTypeTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "functional-promised-type-", functionalPromisedTypeSource)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if !strings.Contains(js, "async function") || !strings.Contains(js, "await Reflect.apply") {
    t.Fatalf("promised wrappers do not emit async/await:\n%s", js)
  }
  if !strings.Contains(js, "Reflect.apply") {
    t.Fatalf("promised wrappers do not preserve receiver forwarding:\n%s", js)
  }

  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(functionalPromisedTypeRuntime), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("functional promised-type runtime cases failed: %v\n%s", err, output)
  }
}

const functionalPromisedTypeSource = `import typia from "typia";

export interface Receiver { base: number; }
export interface Input { value: number; }
export interface Output { total: number; }

export class DerivedPromise<T> extends Promise<T> {}
export interface InterfacePromise<T> extends Promise<T> {}
export type BrandedPromise<T> = Promise<T> & { readonly __brand: unique symbol };
export namespace Shadow {
  export class Promise<T> {
    public constructor(public value: T) {}
  }
}

export function promisedTarget(this: Receiver, input: Input): DerivedPromise<Output> {
  return new DerivedPromise((resolve) => resolve({ total: this.base + input.value }));
}
export function interfaceTarget(input: Input): InterfacePromise<Output> {
  return Promise.resolve({ total: input.value }) as InterfacePromise<Output>;
}
export function brandedTarget(input: Input): BrandedPromise<Output> {
  return Promise.resolve({ total: input.value }) as BrandedPromise<Output>;
}
export function shadowedTarget(input: Input): Shadow.Promise<Output> {
  return new Shadow.Promise({ total: input.value });
}
export function rejectingTarget(): DerivedPromise<Output> {
  return new DerivedPromise((_resolve, reject) => reject(new Error("promised rejection")));
}

export const promised = {
  assertFunction: typia.functional.assertFunction(promisedTarget),
  assertParameters: typia.functional.assertParameters(promisedTarget),
  assertReturn: typia.functional.assertReturn(promisedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(promisedTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(promisedTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(promisedTarget),
  isFunction: typia.functional.isFunction(promisedTarget),
  isParameters: typia.functional.isParameters(promisedTarget),
  isReturn: typia.functional.isReturn(promisedTarget),
  equalsFunction: typia.functional.equalsFunction(promisedTarget),
  equalsParameters: typia.functional.equalsParameters(promisedTarget),
  equalsReturn: typia.functional.equalsReturn(promisedTarget),
  validateFunction: typia.functional.validateFunction(promisedTarget),
  validateParameters: typia.functional.validateParameters(promisedTarget),
  validateReturn: typia.functional.validateReturn(promisedTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(promisedTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(promisedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(promisedTarget),
};

export const shadowed = {
  assertFunction: typia.functional.assertFunction(shadowedTarget),
  assertParameters: typia.functional.assertParameters(shadowedTarget),
  assertReturn: typia.functional.assertReturn(shadowedTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(shadowedTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(shadowedTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(shadowedTarget),
  isFunction: typia.functional.isFunction(shadowedTarget),
  isParameters: typia.functional.isParameters(shadowedTarget),
  isReturn: typia.functional.isReturn(shadowedTarget),
  equalsFunction: typia.functional.equalsFunction(shadowedTarget),
  equalsParameters: typia.functional.equalsParameters(shadowedTarget),
  equalsReturn: typia.functional.equalsReturn(shadowedTarget),
  validateFunction: typia.functional.validateFunction(shadowedTarget),
  validateParameters: typia.functional.validateParameters(shadowedTarget),
  validateReturn: typia.functional.validateReturn(shadowedTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(shadowedTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(shadowedTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(shadowedTarget),
};

export const semanticShapes = {
  interfaceAssert: typia.functional.assertReturn<(input: Input) => InterfacePromise<Output>>(interfaceTarget),
  interfaceIs: typia.functional.isReturn(interfaceTarget),
  interfaceValidate: typia.functional.validateReturn(interfaceTarget),
  brandedAssert: typia.functional.assertReturn(brandedTarget),
  brandedIs: typia.functional.isReturn<(input: Input) => BrandedPromise<Output>>(brandedTarget),
  brandedValidate: typia.functional.validateReturn(brandedTarget),
};
export const rejecting = typia.functional.assertReturn(rejectingTarget);

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
export type PromisedWrapperCases = [
  Assert<Equal<ReturnType<typeof promised.isFunction>, Promise<Output | null>>>,
  Assert<Equal<ReturnType<typeof promised.validateReturn>, Promise<typia.IValidation<Output>>>>,
  Assert<Equal<ReturnType<typeof shadowed.isFunction>, Shadow.Promise<Output> | null>>,
  Assert<Equal<ReturnType<typeof shadowed.validateReturn>, typia.IValidation<Shadow.Promise<Output>>>>,
];
`

const functionalPromisedTypeRuntime = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) throw new Error(label + ": expected " + expected + ", got " + actual);
};
const assertNames = new Set([
  "assertFunction", "assertParameters", "assertReturn",
  "assertEqualsFunction", "assertEqualsParameters", "assertEqualsReturn",
]);
const validateNames = new Set([
  "validateFunction", "validateParameters", "validateReturn",
  "validateEqualsFunction", "validateEqualsParameters", "validateEqualsReturn",
]);

(async () => {
  for (const [name, wrapped] of Object.entries(mod.promised)) {
    const pending = wrapped.call({ base: 40 }, { value: 2 });
    expect("promised " + name + " returns Promise", pending instanceof Promise, true);
    const result = await pending;
    if (validateNames.has(name)) {
      expect("promised " + name + " succeeds", result.success, true);
      expect("promised " + name + " fulfilled total", result.data.total, 42);
    } else {
      expect("promised " + name + " is non-null", result === null, false);
      expect("promised " + name + " fulfilled total", result.total, 42);
    }

    const invalid = wrapped.call({ base: 40 }, { value: "bad" });
    expect("invalid " + name + " keeps Promise shape", invalid instanceof Promise, true);
    if (assertNames.has(name)) {
      let error;
      try { await invalid; } catch (exp) { error = exp; }
      expect("invalid " + name + " rejects", Boolean(error), true);
    } else {
      const failure = await invalid;
      if (validateNames.has(name)) expect("invalid " + name + " validation fails", failure.success, false);
      else expect("invalid " + name + " returns null", failure, null);
    }
  }

  for (const [name, wrapped] of Object.entries(mod.semanticShapes)) {
    const pending = wrapped({ value: 7 });
    expect(name + " returns Promise", pending instanceof Promise, true);
    const result = await pending;
    if (name.endsWith("Validate")) {
      expect(name + " succeeds", result.success, true);
      expect(name + " total", result.data.total, 7);
    } else expect(name + " total", result.total, 7);
  }

  for (const [name, wrapped] of Object.entries(mod.shadowed)) {
    const result = wrapped({ value: 9 });
    expect("shadowed " + name + " stays synchronous", result instanceof Promise, false);
    if (validateNames.has(name)) {
      expect("shadowed " + name + " succeeds", result.success, true);
      expect("shadowed " + name + " value", result.data.value.total, 9);
    } else {
      expect("shadowed " + name + " is non-null", result === null, false);
      expect("shadowed " + name + " value", result.value.total, 9);
    }
  }

  let rejection;
  try { await mod.rejecting(); } catch (error) { rejection = error; }
  expect("rejection propagates", rejection && rejection.message, "promised rejection");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
`
