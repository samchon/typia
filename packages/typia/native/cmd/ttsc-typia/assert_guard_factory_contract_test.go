package main

import (
  "path/filepath"
  "strings"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestAssertGuardFactoryContract verifies factory assertion-guard types and replacement of its call.
//
// An assertion function narrows its argument and returns void, and the public AssertionGuard signature owns the optional error factory parameter. Authored Equal/Assert types and an expected-error assignment establish those static expectations.
//
// 1. Explicit/inferred and ordinary/equals factory typings contrast with an invalid nested-guard assignment; generated runtime execution is outside this case.
// 2. The checker verifies two inferred guards have assertion signatures rather than nested guard return types; the fixture typechecks void return/narrowing contracts and the generic factory call disappears from emit.
//
// @evidence contracts/testing.md#behavioral-verification The checker verifies two inferred guards have assertion signatures rather than nested guard return types; the fixture typechecks void return/narrowing contracts and the generic factory call disappears from emit.
// @evidence contracts/testing.md#independent-expectations An assertion function narrows its argument and returns void, and the public AssertionGuard signature owns the optional error factory parameter. Authored Equal/Assert types and an expected-error assignment establish those static expectations.
// @evidence contracts/testing.md#distinguishing-cases Explicit/inferred and ordinary/equals factory typings contrast with an invalid nested-guard assignment; generated runtime execution is outside this case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestAssertGuardFactoryContract as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestAssertGuardFactoryContract(t *testing.T) {
  project := compareEqualCoverProject(t, "assert-guard-factory-", assertGuardFactorySource)
  ttscTypiaTestAssertGuardFactoryType(t, project)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if strings.Contains(js, "createAssertGuard<") {
    t.Fatalf("assert guard factory call was not transformed:\n%s", js)
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

// Narrowing is asserted inside a function body: TypeScript does not apply an
// assertion signature to a module-scoped binding, so the same lines at the top
// level leave the value unknown.
export const narrowing = (value: unknown): number => {
  guard(value);
  return value.id;
};

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;
type Guard = (
  input: unknown,
  errorFactory?: undefined | ((props: TypeGuardError.IProps) => Error),
) => asserts input is User;
export type FactoryCases = [
  Assert<Equal<typeof inferred, Guard>>,
  Assert<Equal<typeof inferredEquals, Guard>>,
  Assert<Equal<typeof returned, void>>,
];

// @ts-expect-error invoking an assertion guard returns void, not another guard.
const nested: AssertionGuard<User> = guard(input);
void nested;
`
