package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestAssertGuardFactoryContract verifies factory typing and runtime shape.
//
// An assertion-guard factory returns the guard itself. Its successful invocation
// returns void while narrowing the input; it never returns another callable
// assertion guard.
//
//  1. Compile normal and equals factories with explicit and inferred types.
//  2. Prove successful invocations narrow and have a void return type.
//  3. Exercise custom errors and the equals-only surplus-property boundary.
func TestAssertGuardFactoryContract(t *testing.T) {
  project := compareEqualCoverProject(t, "assert-guard-factory-", assertGuardFactorySource)
  ttscTypiaTestAssertGuardFactoryType(t, project)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if strings.Contains(js, "createAssertGuard<") {
    t.Fatalf("assert guard factory call was not transformed:\n%s", js)
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
  if err := os.WriteFile(runner, []byte(assertGuardFactoryRuntime), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("assert guard factory runtime cases failed: %v\n%s", err, output)
  }
}

func ttscTypiaTestAssertGuardFactoryType(t *testing.T, project string) {
  t.Helper()
  program, diagnostics, err := driver.LoadProgram(project, "tsconfig.json", driver.LoadProgramOptions{})
  if err != nil {
    t.Fatalf("load assertion guard fixture: %v", err)
  }
  if len(diagnostics) != 0 {
    t.Fatalf("assertion guard fixture diagnostics: %+v", diagnostics)
  }
  defer program.Close()

  source := program.SourceFile(filepath.Join(project, "src", "main.ts"))
  if source == nil {
    t.Fatal("assertion guard fixture source was not loaded")
  }
  found := 0
  for _, statement := range source.Statements.Nodes {
    if statement.Kind != shimast.KindVariableStatement {
      continue
    }
    for _, declaration := range statement.AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes {
      name := declaration.Name().Text()
      if name != "inferred" && name != "inferredEquals" {
        continue
      }
      found++
      typeName := program.Checker.TypeToString(program.Checker.GetTypeAtLocation(declaration))
      if strings.Contains(typeName, "=> AssertionGuard") {
        t.Fatalf("%s returns a nested assertion guard: %s", name, typeName)
      }
      if typeName != "AssertionGuard<User>" && !strings.Contains(typeName, "asserts input is User") {
        t.Fatalf("%s is not an assertion guard: %s", name, typeName)
      }
    }
  }
  if found != 2 {
    t.Fatalf("expected two inferred assertion guards, found %d", found)
  }
}

const assertGuardFactorySource = `import typia, { AssertionGuard, TypeGuardError } from "typia";

interface User {
  id: number;
}

const custom = (props: TypeGuardError.IProps): Error =>
  Object.assign(new Error("custom guard"), props);

export const guard: AssertionGuard<User> = typia.createAssertGuard<User>(custom);
export const equalsGuard: AssertionGuard<User> = typia.createAssertGuardEquals<User>(custom);
export const inferred = typia.createAssertGuard<User>();
export const inferredEquals = typia.createAssertGuardEquals<User>();

let input: unknown = { id: 1 };
const returned = guard(input);
input.id satisfies number;

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
export type FactoryCases = [
  Assert<Equal<typeof inferred, AssertionGuard<User>>>,
  Assert<Equal<typeof inferredEquals, AssertionGuard<User>>>,
  Assert<Equal<typeof returned, void>>,
];

// @ts-expect-error invoking an assertion guard returns void, not another guard.
const nested: AssertionGuard<User> = guard(input);
void nested;
`

const assertGuardFactoryRuntime = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) throw new Error(label + ": expected " + expected + ", got " + actual);
};

expect("normal success returns void", mod.guard({ id: 1 }), undefined);
expect("equals success returns void", mod.equalsGuard({ id: 1 }), undefined);
expect("normal permits surplus", mod.guard({ id: 1, extra: true }), undefined);

for (const [label, guard, value] of [
  ["normal invalid", mod.guard, { id: "bad" }],
  ["equals invalid", mod.equalsGuard, { id: "bad" }],
  ["equals surplus", mod.equalsGuard, { id: 1, extra: true }],
]) {
  let error;
  try {
    guard(value);
  } catch (exp) {
    error = exp;
  }
  expect(label + " uses custom error", error && error.message, "custom guard");
}
`
