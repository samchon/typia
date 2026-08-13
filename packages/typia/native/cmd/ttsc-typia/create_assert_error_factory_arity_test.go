package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCreateAssertErrorFactoryArity verifies the declared and emitted arity of
// created assert functions agree (#2328).
//
// Every `create*Assert*` factory emits `(input, errorFactory = <create-time
// factory>) => ...`, but the declarations returned `(input) => T`. A pointwise
// hand-off such as `rows.map(parseUser)` therefore type-checked while
// `Array#map` handed the element index to `errorFactory`. The declared surface
// has to name that parameter, without breaking the documented
// `AssertionGuard<T>` annotation or an ordinary one-parameter callback
// position.
//
//  1. Type-check a fixture that overrides `errorFactory` at call time on every
//     member of the family, and that pins the `.map` hand-off as an error while
//     the adjacent one-parameter controls still compile.
//  2. Transform a runtime fixture and execute it in Node.
//  3. Require the call-time factory to build the error and a numeric second
//     argument to fall back to the ordinary type-guard error.
func TestCreateAssertErrorFactoryArity(t *testing.T) {
  surface := compareEqualCoverProject(t, "create-assert-error-factory-", createAssertErrorFactorySurfaceSource)
  ttscTypiaTestTypecheck(t, surface)

  project := compareEqualCoverProject(t, "create-assert-error-factory-runtime-", createAssertErrorFactoryRuntimeSource)
  ttscTypiaTestTypecheck(t, project)
  js := compareEqualCoverTransform(t, project)
  if !strings.Contains(js, "(input, errorFactory)") {
    t.Fatalf("emitted factory lost its errorFactory parameter:\n%s", js)
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
  if err := os.WriteFile(runner, []byte(createAssertErrorFactoryRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("created assert error factory runtime cases failed: %v\n%s", err, output)
  }
}

// createAssertErrorFactorySurfaceSource is type-checked, never executed: the
// http, protobuf and notation members pull runtime helpers this package stubs
// only for the emit it runs, so the executed fixture stays on the module family.
const createAssertErrorFactorySurfaceSource = `import { StandardSchemaV1 } from "@standard-schema/spec";
import typia, { AssertionGuard, TypeGuardError } from "typia";

interface User {
  id: number;
}
interface StringUser {
  id: string;
}
interface SnakeUser {
  user_id: string;
}

type ErrorFactory = (props: TypeGuardError.IProps) => Error;
type UserGuard = (
  input: unknown,
  errorFactory?: undefined | ErrorFactory,
) => asserts input is User;

const factory: ErrorFactory = (props) =>
  Object.assign(new Error("call-time"), { path: props.path });

const assertUser = typia.createAssert<User>();
const assertUserEquals = typia.createAssertEquals<User>();
const guardUser: UserGuard = typia.createAssertGuard<User>();
const guardUserEquals: UserGuard = typia.createAssertGuardEquals<User>();
const jsonParse = typia.json.createAssertParse<User>();
const jsonStringify = typia.json.createAssertStringify<User>();
const httpFormData = typia.http.createAssertFormData<StringUser>();
const httpQuery = typia.http.createAssertQuery<StringUser>();
const httpHeaders = typia.http.createAssertHeaders<StringUser>();
const notationCamel = typia.notations.createAssertCamel<SnakeUser>();
const notationPascal = typia.notations.createAssertPascal<SnakeUser>();
const notationSnake = typia.notations.createAssertSnake<SnakeUser>();
const notationKebab = typia.notations.createAssertKebab<SnakeUser>();
const plainClone = typia.plain.createAssertClone<User>();
const plainPrune = typia.plain.createAssertPrune<User>();
const plainClassify = typia.plain.createAssertClassify<User>();
const protobufDecode = typia.protobuf.createAssertDecode<User>();
const protobufEncode = typia.protobuf.createAssertEncode<User>();

// Every call below is a compile-time assertion that the family member declares
// the call-time override the emit gives it.
export const overrides = (
  raw: unknown,
  text: string,
  user: User,
  snake: SnakeUser,
  form: FormData,
  headers: Record<string, string | string[] | undefined>,
  bytes: Uint8Array,
): void => {
  assertUser(raw, factory);
  assertUserEquals(raw, factory);
  guardUser(raw, factory);
  guardUserEquals(raw, factory);
  jsonParse(text, factory);
  jsonStringify(user, factory);
  httpFormData(form, factory);
  httpQuery(text, factory);
  httpHeaders(headers, factory);
  notationCamel(snake, factory);
  notationPascal(snake, factory);
  notationSnake(snake, factory);
  notationKebab(snake, factory);
  plainClone(raw, factory);
  plainPrune(raw, factory);
  plainClassify(raw, factory);
  protobufDecode(bytes, factory);
  protobufEncode(user, factory);
};

// The narrowing contract of the guard family survives the extra parameter, and
// the documented one-parameter annotation still accepts the created guard.
export const documented: AssertionGuard<User> = typia.createAssertGuard<User>();
export const narrowed = (raw: unknown): number => {
  guardUser(raw);
  return raw.id;
};

declare const rows: unknown[];

// @ts-expect-error Array#map hands the element index to errorFactory.
export const mappedAssert = rows.map(assertUser);
// @ts-expect-error the guard family carries the same hazard.
export const mappedGuard = rows.map(guardUser);

// Adjacent one-axis controls that must keep compiling.
export const mappedExplicit = rows.map((row) => assertUser(row));
type Parser = (input: unknown) => User;
export const parser: Parser = assertUser;
declare function takesParser(parse: (input: unknown) => User): User;
export const parsed = takesParser(assertUser);
export const standard: StandardSchemaV1<User, User> = typia.createValidate<User>();
`

const createAssertErrorFactoryRuntimeSource = `import typia, { TypeGuardError } from "typia";

interface User {
  id: number;
}

export const assertUser = typia.createAssert<User>();
export const assertUserEquals = typia.createAssertEquals<User>();
export const withOverride = (
  input: unknown,
  errorFactory: (props: TypeGuardError.IProps) => Error,
): User => assertUser(input, errorFactory);
`

const createAssertErrorFactoryRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) throw new Error(label + ": expected " + expected + ", got " + actual);
};

const capture = (task) => {
  try {
    task();
  } catch (exp) {
    return exp;
  }
  throw new Error("expected the assertion to throw");
};

expect("valid input passes", 1, mod.assertUser({ id: 1 }).id);

// A pointwise hand-off fills errorFactory with the element index. Both the
// falsy 0 and a truthy index must reach the ordinary type-guard error.
for (const index of [0, 1, 2]) {
  const error = capture(() => mod.assertUser({ id: "bad" }, index));
  expect("index " + index + " expected", "number", error.expected);
  expect("index " + index + " path", "$input.id", error.path);
  expect("index " + index + " method", "typia.createAssert", error.method);
}

// The declared parameter is real: a callable factory still wins.
const custom = capture(() =>
  mod.withOverride({ id: "bad" }, (props) => Object.assign(new Error("call-time"), props)),
);
expect("call-time factory message", "call-time", custom.message);
expect("call-time factory path", "$input.id", custom.path);

const equals = capture(() => mod.assertUserEquals({ id: 1, extra: true }, 4));
expect("equals surplus expected", "undefined", equals.expected);
`
