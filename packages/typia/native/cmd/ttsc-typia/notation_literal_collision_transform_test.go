package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestNotationLiteralCollisionTransform verifies static destination collisions are rejected.
//
// Literal property metadata exposes every source key during code emission. A
// converter must reject two distinct literals that normalize to one result
// instead of emitting duplicate assignments whose last value silently wins.
//
//  1. Transform direct and factory plain/assert/is/validate calls for all cases.
//  2. Give each naming family two literal keys with one normalized destination.
//  3. Execute every operation and require an error naming both source keys and destination.
func TestNotationLiteralCollisionTransform(t *testing.T) {
  project := notationLiteralCollisionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("literal collision transform failed: code=%d stderr=\n%s", code, errText)
  }
  notationLiteralCollisionRunRuntimeCases(t, project, out)
}

func notationLiteralCollisionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-literal-collision-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationDynamicKeysTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationLiteralCollisionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func notationLiteralCollisionRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(notationLiteralCollisionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("literal collision runtime cases failed: %v\n%s", err, output)
  }
}

const notationLiteralCollisionSource = `import typia from "typia";

interface CamelCollision { user_id: string; userId: string; }
interface PascalCollision { user_id: string; UserId: string; }
interface SnakeCollision { userId: string; user_id: string; }
interface KebabCollision { userId: string; user_id: string; }

export const camel = {
  direct: (input: CamelCollision) => typia.notations.camel<CamelCollision>(input),
  create: typia.notations.createCamel<CamelCollision>(),
  assert: (input: unknown) => typia.notations.assertCamel<CamelCollision>(input),
  createAssert: typia.notations.createAssertCamel<CamelCollision>(),
  is: (input: unknown) => typia.notations.isCamel<CamelCollision>(input),
  createIs: typia.notations.createIsCamel<CamelCollision>(),
  validate: (input: unknown) => typia.notations.validateCamel<CamelCollision>(input),
  createValidate: typia.notations.createValidateCamel<CamelCollision>(),
};
export const pascal = {
  direct: (input: PascalCollision) => typia.notations.pascal<PascalCollision>(input),
  create: typia.notations.createPascal<PascalCollision>(),
  assert: (input: unknown) => typia.notations.assertPascal<PascalCollision>(input),
  createAssert: typia.notations.createAssertPascal<PascalCollision>(),
  is: (input: unknown) => typia.notations.isPascal<PascalCollision>(input),
  createIs: typia.notations.createIsPascal<PascalCollision>(),
  validate: (input: unknown) => typia.notations.validatePascal<PascalCollision>(input),
  createValidate: typia.notations.createValidatePascal<PascalCollision>(),
};
export const snake = {
  direct: (input: SnakeCollision) => typia.notations.snake<SnakeCollision>(input),
  create: typia.notations.createSnake<SnakeCollision>(),
  assert: (input: unknown) => typia.notations.assertSnake<SnakeCollision>(input),
  createAssert: typia.notations.createAssertSnake<SnakeCollision>(),
  is: (input: unknown) => typia.notations.isSnake<SnakeCollision>(input),
  createIs: typia.notations.createIsSnake<SnakeCollision>(),
  validate: (input: unknown) => typia.notations.validateSnake<SnakeCollision>(input),
  createValidate: typia.notations.createValidateSnake<SnakeCollision>(),
};
export const kebab = {
  direct: (input: KebabCollision) => typia.notations.kebab<KebabCollision>(input),
  create: typia.notations.createKebab<KebabCollision>(),
  assert: (input: unknown) => typia.notations.assertKebab<KebabCollision>(input),
  createAssert: typia.notations.createAssertKebab<KebabCollision>(),
  is: (input: unknown) => typia.notations.isKebab<KebabCollision>(input),
  createIs: typia.notations.createIsKebab<KebabCollision>(),
  validate: (input: unknown) => typia.notations.validateKebab<KebabCollision>(input),
  createValidate: typia.notations.createValidateKebab<KebabCollision>(),
};
`

const notationLiteralCollisionRuntimeRunner = `const mod = require("./main.cjs");

const families = [
  { name: "camel", api: mod.camel, input: { user_id: "a", userId: "b" }, expected: ["user_id", "userId", "userId"] },
  { name: "pascal", api: mod.pascal, input: { user_id: "a", UserId: "b" }, expected: ["user_id", "UserId", "UserId"] },
  { name: "snake", api: mod.snake, input: { userId: "a", user_id: "b" }, expected: ["userId", "user_id", "user_id"] },
  { name: "kebab", api: mod.kebab, input: { userId: "a", user_id: "b" }, expected: ["userId", "user_id", "user-id"] },
];
const variants = ["direct", "create", "assert", "createAssert", "is", "createIs", "validate", "createValidate"];

for (const family of families) {
  for (const variant of variants) {
    let collision = null;
    try {
      family.api[variant](family.input);
    } catch (error) {
      collision = error;
    }
    if (collision === null) {
      throw new Error(family.name + "." + variant + " silently accepted a literal destination collision");
    }
    for (const key of family.expected) {
      if (!String(collision.message).includes(JSON.stringify(key))) {
        throw new Error(family.name + "." + variant + " collision omitted " + key + ": " + collision.message);
      }
    }
  }
}
`
