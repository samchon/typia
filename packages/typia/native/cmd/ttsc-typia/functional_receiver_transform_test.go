package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestFunctionalReceiverTransform verifies dynamic receiver preservation.
//
// Functional wrappers advertise the target function's receiver contract, so
// the emitted wrapper must be an ordinary function and must invoke the captured
// target with the wrapper's call-site `this`. Arrow wrappers and bare calls
// silently discard that contract.
//
//  1. Transform all assert, is/equals, and validate parameter/return variants.
//  2. Exercise sync and async targets through `.call`, binding, and extraction.
//  3. Preserve validation failures, thrown errors, and receiver-dependent data.
func TestFunctionalReceiverTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "functional-receiver-", functionalReceiverSource)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if !strings.Contains(js, "Reflect.apply") {
    t.Fatalf("functional output does not forward the dynamic receiver:\n%s", js)
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
  if err := os.WriteFile(runner, []byte(functionalReceiverRuntime), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("functional receiver runtime cases failed: %v\n%s", err, output)
  }
}

const functionalReceiverSource = `import typia from "typia";

export interface Receiver {
  base: number;
  calls: number;
}
export interface Input {
  value: number;
}
export interface Output {
  total: number;
}

export function syncTarget(this: Receiver, input: Input): Output {
  this.calls += 1;
  return { total: this.base + input.value };
}
export async function asyncTarget(this: Receiver, input: Input): Promise<Output> {
  this.calls += 1;
  return { total: this.base + input.value };
}

export const sync = {
  assertFunction: typia.functional.assertFunction(syncTarget),
  assertParameters: typia.functional.assertParameters(syncTarget),
  assertReturn: typia.functional.assertReturn(syncTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(syncTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(syncTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(syncTarget),
  isFunction: typia.functional.isFunction(syncTarget),
  isParameters: typia.functional.isParameters(syncTarget),
  isReturn: typia.functional.isReturn(syncTarget),
  equalsFunction: typia.functional.equalsFunction(syncTarget),
  equalsParameters: typia.functional.equalsParameters(syncTarget),
  equalsReturn: typia.functional.equalsReturn(syncTarget),
  validateFunction: typia.functional.validateFunction(syncTarget),
  validateParameters: typia.functional.validateParameters(syncTarget),
  validateReturn: typia.functional.validateReturn(syncTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(syncTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(syncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(syncTarget),
};

export const asynchronous = {
  assertFunction: typia.functional.assertFunction(asyncTarget),
  assertParameters: typia.functional.assertParameters(asyncTarget),
  assertReturn: typia.functional.assertReturn(asyncTarget),
  assertEqualsFunction: typia.functional.assertEqualsFunction(asyncTarget),
  assertEqualsParameters: typia.functional.assertEqualsParameters(asyncTarget),
  assertEqualsReturn: typia.functional.assertEqualsReturn(asyncTarget),
  isFunction: typia.functional.isFunction(asyncTarget),
  isParameters: typia.functional.isParameters(asyncTarget),
  isReturn: typia.functional.isReturn(asyncTarget),
  equalsFunction: typia.functional.equalsFunction(asyncTarget),
  equalsParameters: typia.functional.equalsParameters(asyncTarget),
  equalsReturn: typia.functional.equalsReturn(asyncTarget),
  validateFunction: typia.functional.validateFunction(asyncTarget),
  validateParameters: typia.functional.validateParameters(asyncTarget),
  validateReturn: typia.functional.validateReturn(asyncTarget),
  validateEqualsFunction: typia.functional.validateEqualsFunction(asyncTarget),
  validateEqualsParameters: typia.functional.validateEqualsParameters(asyncTarget),
  validateEqualsReturn: typia.functional.validateEqualsReturn(asyncTarget),
};

const boundReceiver: Receiver = { base: 20, calls: 0 };
export const boundAssert = typia.functional.assertFunction(syncTarget).bind(boundReceiver);
export const throwing = typia.functional.assertParameters(function (this: Receiver, input: Input): Output {
  throw new Error(String(this.base + input.value));
});

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
export type ReceiverCases = [
  Assert<Equal<ThisParameterType<typeof sync.assertFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.isFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.equalsParameters>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.validateReturn>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof sync.validateEqualsFunction>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.assertReturn>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.isParameters>, Receiver>>,
  Assert<Equal<ThisParameterType<typeof asynchronous.validateFunction>, Receiver>>,
];
`

const functionalReceiverRuntime = `const mod = require("./main.cjs");

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
const checkResult = (label, name, result) => {
  if (validateNames.has(name)) {
    expect(label + " success", result.success, true);
    expect(label + " total", result.data.total, 42);
  } else {
    expect(label + " non-null", result === null, false);
    expect(label + " total", result.total, 42);
  }
};

(async () => {
  for (const [name, wrapped] of Object.entries(mod.sync)) {
    const receiver = { base: 40, calls: 0 };
    const result = wrapped.call(receiver, { value: 2 });
    checkResult("sync " + name, name, result);
    expect("sync " + name + " receiver calls", receiver.calls, 1);
  }
  for (const [name, wrapped] of Object.entries(mod.asynchronous)) {
    const receiver = { base: 40, calls: 0 };
    const result = await wrapped.call(receiver, { value: 2 });
    checkResult("async " + name, name, result);
    expect("async " + name + " receiver calls", receiver.calls, 1);
  }

  const ignored = { base: 100, calls: 0 };
  const bound = mod.boundAssert.call(ignored, { value: 2 });
  expect("bound wrapper keeps bound receiver", bound.total, 22);
  expect("bound wrapper ignores call receiver", ignored.calls, 0);

  const receiver = { base: 40, calls: 0 };
  let thrown;
  try {
    mod.throwing.call(receiver, { value: 2 });
  } catch (error) {
    thrown = error;
  }
  expect("thrown target error", thrown && thrown.message, "42");

  for (const name of ["assertFunction", "isFunction", "validateFunction"]) {
    const receiver = { base: 40, calls: 0 };
    let result;
    let error;
    try {
      result = mod.sync[name].call(receiver, { value: "bad" });
    } catch (exp) {
      error = exp;
    }
    if (assertNames.has(name)) expect("assert invalid throws", Boolean(error), true);
    else if (validateNames.has(name)) expect("validate invalid fails", result.success, false);
    else expect("is invalid returns null", result, null);
    expect(name + " invalid does not invoke target", receiver.calls, 0);
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
`
