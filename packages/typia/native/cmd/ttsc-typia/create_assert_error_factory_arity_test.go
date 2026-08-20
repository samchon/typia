package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCreateAssertErrorFactoryArity verifies that the declared arity of created
// assert functions agrees with the emitted one (#2328).
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
//  2. Transform that same fixture and require each member's emitted function to
//     carry the parameter, with factories outside the family as the controls
//     that must not.
//  3. Transform a runtime fixture, execute it, and require the call-time factory
//     to build the error while a numeric second argument falls back to the
//     ordinary type-guard error.
func TestCreateAssertErrorFactoryArity(t *testing.T) {
  surface := compareEqualCoverProject(t, "create-assert-error-factory-", createAssertErrorFactorySurfaceSource)
  ttscTypiaTestTypecheck(t, surface)
  createAssertErrorFactoryAssertEmittedArity(t, compareEqualCoverTransform(t, surface))

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

// createAssertErrorFactoryAssertEmittedArity requires each member of the family
// to emit the parameter its declaration now names, and each control not to.
//
// The declaration and the emit are written on opposite sides of the codebase,
// so a declaration test alone can over-promise: dropping `Guardian.Parameter`
// from one programmer would leave the type claiming a parameter the function no
// longer takes. The emitted body of each member is what settles it.
func createAssertErrorFactoryAssertEmittedArity(t *testing.T, js string) {
  t.Helper()
  starts := make([]int, len(createAssertErrorFactoryMembers))
  for i, name := range createAssertErrorFactoryMembers {
    // The CommonJS prologue lists every export on one `void 0` line, so the
    // real assignment is the last occurrence, never the first.
    index := strings.LastIndex(js, "exports."+name+" = ")
    if index < 0 {
      t.Fatalf("emit has no assignment for %s:\n%s", name, js)
    }
    starts[i] = index
  }
  for i, name := range createAssertErrorFactoryMembers {
    end := strings.LastIndex(js, "exports."+createAssertErrorFactorySentinel+" = ")
    if i+1 < len(createAssertErrorFactoryMembers) {
      end = starts[i+1]
    }
    if starts[i] >= end {
      t.Fatalf("emitted members are out of source order at %s", name)
    }
    segment := js[starts[i]:end]
    // The returned function is the public one. Every composed member also
    // builds a private `__assert` that takes the parameter, so matching the
    // parameter list anywhere in the segment would keep passing after the
    // returned arrow lost it.
    carries := strings.Contains(segment, "return (input, errorFactory)")
    if strings.HasPrefix(name, "m") && carries == false {
      t.Fatalf("%s lost its errorFactory parameter:\n%s", name, segment)
    }
    if strings.HasPrefix(name, "n") && strings.Contains(segment, "errorFactory") {
      t.Fatalf("%s gained an errorFactory parameter it does not declare:\n%s", name, segment)
    }
  }
}

// createAssertErrorFactoryMembers lists the emitted fixture exports in source
// order: `m*` is the whole family whose emitted function takes `errorFactory`,
// `n*` are factories that must not grow one.
var createAssertErrorFactoryMembers = []string{
  "m01", "m02", "m03", "m04", "m05", "m06", "m07", "m08", "m09",
  "m10", "m11", "m12", "m13", "m14", "m15", "m16", "m17", "m18",
  "n01", "n02", "n03",
}

const createAssertErrorFactorySentinel = "zzz"

// createAssertErrorFactorySurfaceSource is type-checked and transformed, but
// never executed: the http, protobuf and notation members pull runtime helpers
// this package stubs only for the emit it runs, so the executed fixture stays
// on the module family.
const createAssertErrorFactorySurfaceSource = `import typia, {
  AssertionGuard,
  StandardSchemaV1,
  TypeGuardError,
} from "typia";

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

type Assert<T extends true> = T;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? true
    : false;

const factory: ErrorFactory = (props) =>
  Object.assign(new Error("call-time"), { path: props.path });

const assertUser = typia.createAssert<User>();
const assertUserEquals = typia.createAssertEquals<User>();
const guardUser = typia.createAssertGuard<User>();
const guardUserEquals = typia.createAssertGuardEquals<User>();
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

// typia's own declaration of the guard factories, not a local alias: the guard
// family is the one place where a user annotation could hide a reverted change.
export type GuardCases = [
  Assert<Equal<typeof guardUser, UserGuard>>,
  Assert<Equal<typeof guardUserEquals, UserGuard>>,
];

const annotatedGuard: UserGuard = guardUser;
const annotatedGuardEquals: UserGuard = guardUserEquals;

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
  annotatedGuard(raw, factory);
  annotatedGuardEquals(raw, factory);
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
  annotatedGuard(raw);
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

// The emitted-arity census. Order is load-bearing: the assertion slices the
// emit between consecutive assignments, and ` + "`zzz`" + ` closes the last one.
export const m01 = typia.createAssert<User>();
export const m02 = typia.createAssertEquals<User>();
export const m03 = typia.createAssertGuard<User>();
export const m04 = typia.createAssertGuardEquals<User>();
export const m05 = typia.json.createAssertParse<User>();
export const m06 = typia.json.createAssertStringify<User>();
export const m07 = typia.http.createAssertFormData<StringUser>();
export const m08 = typia.http.createAssertQuery<StringUser>();
export const m09 = typia.http.createAssertHeaders<StringUser>();
export const m10 = typia.notations.createAssertCamel<SnakeUser>();
export const m11 = typia.notations.createAssertPascal<SnakeUser>();
export const m12 = typia.notations.createAssertSnake<SnakeUser>();
export const m13 = typia.notations.createAssertKebab<SnakeUser>();
export const m14 = typia.plain.createAssertClone<User>();
export const m15 = typia.plain.createAssertPrune<User>();
export const m16 = typia.plain.createAssertClassify<User>();
export const m17 = typia.protobuf.createAssertDecode<User>();
export const m18 = typia.protobuf.createAssertEncode<User>();
export const n01 = typia.createIs<User>();
export const n02 = typia.json.createIsParse<User>();
export const n03 = typia.plain.createClone<User>();
export const zzz = 0;
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
