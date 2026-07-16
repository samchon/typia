package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestNotationDynamicKeysTransform verifies dynamic key rewriting and collision rejection.
//
// Index signatures use the dynamic object-entry branch rather than statically
// emitted property assignments. That branch must apply the selected rename to
// every runtime key and reject two source keys that normalize to one destination
// before either value is silently lost.
//
//  1. Transform direct and factory forms of plain/assert/is/validate operations
//     for camel, Pascal, snake, and kebab notation.
//  2. Require valid dynamic and nested keys to use each selected convention.
//  3. Require every operation form to throw on a dynamic destination collision.
func TestNotationDynamicKeysTransform(t *testing.T) {
  project := notationDynamicKeysProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("dynamic notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  notationDynamicKeysRunRuntimeCases(t, project, out)
}

func notationDynamicKeysProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-dynamic-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationDynamicKeysSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func notationDynamicKeysRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(notationDynamicKeysRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("dynamic notation runtime cases failed: %v\n%s", err, output)
  }
}

const notationDynamicKeysTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const notationDynamicKeysSource = `import typia from "typia";

type UnderscoreRecord = Record<string, { inner_key: string }>;
type CamelRecord = Record<string, { innerValue: string }>;
interface SnakeLiteral { "__proto__": { innerValue: string }; }

export const snakeLiteral = (input: SnakeLiteral) =>
  typia.notations.snake<SnakeLiteral>(input);

export const camel = {
  direct: (input: UnderscoreRecord) => typia.notations.camel<UnderscoreRecord>(input),
  create: typia.notations.createCamel<UnderscoreRecord>(),
  assert: (input: unknown) => typia.notations.assertCamel<UnderscoreRecord>(input),
  createAssert: typia.notations.createAssertCamel<UnderscoreRecord>(),
  is: (input: unknown) => typia.notations.isCamel<UnderscoreRecord>(input),
  createIs: typia.notations.createIsCamel<UnderscoreRecord>(),
  validate: (input: unknown) => typia.notations.validateCamel<UnderscoreRecord>(input),
  createValidate: typia.notations.createValidateCamel<UnderscoreRecord>(),
};
export const pascal = {
  direct: (input: UnderscoreRecord) => typia.notations.pascal<UnderscoreRecord>(input),
  create: typia.notations.createPascal<UnderscoreRecord>(),
  assert: (input: unknown) => typia.notations.assertPascal<UnderscoreRecord>(input),
  createAssert: typia.notations.createAssertPascal<UnderscoreRecord>(),
  is: (input: unknown) => typia.notations.isPascal<UnderscoreRecord>(input),
  createIs: typia.notations.createIsPascal<UnderscoreRecord>(),
  validate: (input: unknown) => typia.notations.validatePascal<UnderscoreRecord>(input),
  createValidate: typia.notations.createValidatePascal<UnderscoreRecord>(),
};
export const snake = {
  direct: (input: CamelRecord) => typia.notations.snake<CamelRecord>(input),
  create: typia.notations.createSnake<CamelRecord>(),
  assert: (input: unknown) => typia.notations.assertSnake<CamelRecord>(input),
  createAssert: typia.notations.createAssertSnake<CamelRecord>(),
  is: (input: unknown) => typia.notations.isSnake<CamelRecord>(input),
  createIs: typia.notations.createIsSnake<CamelRecord>(),
  validate: (input: unknown) => typia.notations.validateSnake<CamelRecord>(input),
  createValidate: typia.notations.createValidateSnake<CamelRecord>(),
};
export const kebab = {
  direct: (input: CamelRecord) => typia.notations.kebab<CamelRecord>(input),
  create: typia.notations.createKebab<CamelRecord>(),
  assert: (input: unknown) => typia.notations.assertKebab<CamelRecord>(input),
  createAssert: typia.notations.createAssertKebab<CamelRecord>(),
  is: (input: unknown) => typia.notations.isKebab<CamelRecord>(input),
  createIs: typia.notations.createIsKebab<CamelRecord>(),
  validate: (input: unknown) => typia.notations.validateKebab<CamelRecord>(input),
  createValidate: typia.notations.createValidateKebab<CamelRecord>(),
};
`

const notationDynamicKeysRuntimeRunner = `const mod = require("./main.cjs");

const literalMagic = mod.snakeLiteral(
  Object.fromEntries([["__proto__", { innerValue: "literal" }]]),
);
if (
  Object.getPrototypeOf(literalMagic) !== Object.prototype ||
  !Object.hasOwn(literalMagic, "__proto__") ||
  !Object.hasOwn(literalMagic.__proto__, "inner_value")
) {
  throw new Error("snake literal __proto__ was not emitted as an own data property");
}

const families = [
  {
    name: "camel",
    api: mod.camel,
    valid: { user_id: { inner_key: "u" }, account_name: { inner_key: "a" } },
    expected: [["userId", "innerKey"], ["accountName", "innerKey"]],
    collision: { user_id: { inner_key: "a" }, userId: { inner_key: "b" } },
    collisionKeys: ["user_id", "userId", "userId"],
  },
  {
    name: "pascal",
    api: mod.pascal,
    valid: { user_id: { inner_key: "u" }, account_name: { inner_key: "a" } },
    expected: [["UserId", "InnerKey"], ["AccountName", "InnerKey"]],
    collision: { user_id: { inner_key: "a" }, UserId: { inner_key: "b" } },
    collisionKeys: ["user_id", "UserId", "UserId"],
  },
  {
    name: "snake",
    api: mod.snake,
    valid: Object.fromEntries([
      ["userId", { innerValue: "u" }],
      ["accountName", { innerValue: "a" }],
      ["__proto__", { innerValue: "p" }],
    ]),
    expected: [["user_id", "inner_value"], ["account_name", "inner_value"], ["__proto__", "inner_value"]],
    collision: { userId: { innerValue: "a" }, user_id: { innerValue: "b" } },
    collisionKeys: ["userId", "user_id", "user_id"],
  },
  {
    name: "kebab",
    api: mod.kebab,
    valid: { userId: { innerValue: "u" }, account_name: { innerValue: "a" } },
    expected: [["user-id", "inner-value"], ["account-name", "inner-value"]],
    collision: { userId: { innerValue: "a" }, user_id: { innerValue: "b" } },
    collisionKeys: ["userId", "user_id", "user-id"],
  },
];
const variants = ["direct", "create", "assert", "createAssert", "is", "createIs", "validate", "createValidate"];

for (const family of families) {
  for (const variant of variants) {
    const raw = family.api[variant](family.valid);
    const converted = variant === "validate" || variant === "createValidate"
      ? raw.success === true ? raw.data : null
      : raw;
    if (converted === null) {
      throw new Error(family.name + "." + variant + " rejected valid dynamic input");
    }
    if (Object.keys(converted).length !== family.expected.length) {
      throw new Error(family.name + "." + variant + " emitted unexpected keys: " + JSON.stringify(converted));
    }
    for (const [outer, inner] of family.expected) {
      if (
        !Object.hasOwn(converted, outer) ||
        Object.keys(converted[outer]).length !== 1 ||
        !Object.hasOwn(converted[outer], inner)
      ) {
        throw new Error(family.name + "." + variant + " kept an unconverted key: " + JSON.stringify(converted));
      }
    }

    let collision = null;
    try {
      family.api[variant](family.collision);
    } catch (error) {
      collision = error;
    }
    if (collision === null) {
      throw new Error(family.name + "." + variant + " silently accepted a destination collision");
    }
    for (const key of family.collisionKeys) {
      if (!String(collision.message).includes(JSON.stringify(key))) {
        throw new Error(family.name + "." + variant + " collision omitted " + key + ": " + collision.message);
      }
    }
  }
}
`
