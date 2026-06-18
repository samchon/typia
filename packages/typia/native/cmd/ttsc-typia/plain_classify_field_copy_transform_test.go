package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPlainClassifyFieldCopyTransform verifies plain.classify field-copy.
//
// plain.classify reconstructs a real instance of a class type from plain data.
// The field-copy strategy field-copies onto the prototype
// (Object.create(Class.prototype) + assign), so the result is a genuine instance
// whose methods come from the prototype, and a nested class property is itself
// reconstructed as an instance. The WeakMap-guarded recursion must terminate on
// a self-referential class.
//
//  1. Transform a fixture classifying a class with a nested class field, an
//     array of classes, and a self-referential class.
//  2. Require the emitted code to take the prototype path (Object.create).
//  3. Execute classify/assertClassify/validateClassify and require real
//     instances, working prototype methods, and validation behavior.
func TestPlainClassifyFieldCopyTransform(t *testing.T) {
  project := plainClassifyFieldCopyProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("classify field-copy transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, "Object.create") {
    t.Fatalf("classify of a named class should field-copy onto the prototype (Object.create):\n%s", out)
  }
  plainClassifyFieldCopyRunRuntimeCases(t, project, out)
}

func plainClassifyFieldCopyProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "plain-classify-fieldcopy-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(plainClassifyFieldCopyTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(plainClassifyFieldCopySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func plainClassifyFieldCopyRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(plainClassifyFieldCopyRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("classify field-copy runtime cases failed: %v\n%s", err, output)
  }
}

const plainClassifyFieldCopyTSConfig = `{
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

const plainClassifyFieldCopySource = `import typia from "typia";

export class User {
  id!: number;
  name!: string;
  greet(): string {
    return "hi " + this.name;
  }
}

export class Team {
  lead!: User;
  members!: User[];
}

export class Node {
  value!: number;
  next?: Node;
}

export const classifyTeam = typia.plain.createClassify<Team>();
export const classifyNode = typia.plain.createClassify<Node>();
export const assertClassifyUser = typia.plain.createAssertClassify<User>();
export const validateClassifyUser = typia.plain.createValidateClassify<User>();
`

const plainClassifyFieldCopyRuntimeRunner = `const mod = require("./main.cjs");

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

// (1) field copy onto the prototype: real instance + prototype method
const team = mod.classifyTeam({
  lead: { id: 1, name: "Kim" },
  members: [
    { id: 2, name: "Lee" },
    { id: 3, name: "Park" },
  ],
});
assert(team instanceof mod.Team, "team should be a Team instance");
assert(team.lead instanceof mod.User, "team.lead should be a User instance");
assert(
  team.lead.greet() === "hi Kim",
  "prototype method should work, got: " + team.lead.greet(),
);
assert(team.members[0] instanceof mod.User, "team.members[0] should be a User instance");
assert(
  team.members[1].greet() === "hi Park",
  "array element prototype method should work",
);

// (2) WeakMap-guarded recursion terminates on a finite self-referential chain
const node = mod.classifyNode({ value: 1, next: { value: 2, next: { value: 3 } } });
assert(node instanceof mod.Node, "node should be a Node instance");
assert(node.next instanceof mod.Node, "node.next should be a Node instance");
assert(node.next.next.value === 3, "deep recursion should preserve the leaf value");

// (3) assertClassify throws on invalid input
let threw = false;
try {
  mod.assertClassifyUser({ id: "not-a-number", name: "x" });
} catch (e) {
  threw = true;
}
assert(threw, "assertClassifyUser should throw on invalid input");
assert(
  mod.assertClassifyUser({ id: 9, name: "Han" }) instanceof mod.User,
  "assertClassifyUser should return a User instance on valid input",
);

// (4) validateClassify success / failure
const ok = mod.validateClassifyUser({ id: 5, name: "Choi" });
assert(ok.success === true, "validateClassifyUser should succeed on valid input");
assert(ok.data instanceof mod.User, "validateClassifyUser data should be a User instance");
const bad = mod.validateClassifyUser({ id: "nope" });
assert(bad.success === false, "validateClassifyUser should fail on invalid input");
assert(
  Array.isArray(bad.errors) && bad.errors.length > 0,
  "validateClassifyUser failure should populate errors",
);
`
