package main

import (
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
)

// TestCompareFunctionalUnionMembershipTransform verifies that compare.equals
// selects an object-union member with the same functional-property semantics as
// typia.is and the plain member routers (samchon/typia#2252).
//
// Object comparison deliberately ignores function-valued properties after it
// has selected a member. That must not make those properties invisible while
// selecting a member when the active `functional: true` option makes them part
// of membership. Otherwise a string-valued later member enters an earlier
// function-bearing member, and equality or cover can ignore the later member's
// distinguishing data. The default mode remains intentionally lenient for a
// sole function-valued property.
//
//  1. Transform functional and default-option variants of direct/factory is,
//     equals, cover, clone, prune, and nested equality calls over both union
//     orders.
//  2. Execute distinct valid, invalid, same-reference, reversed-order, nested,
//     and actual-function-member controls against the emitted JavaScript.
//  3. Require compare.less to retain its existing multi-object-union diagnostic.
func TestCompareFunctionalUnionMembershipTransform(t *testing.T) {
	project := compareFunctionalUnionMembershipProject(t)
	functional := compareFunctionalUnionMembershipTransform(t, project, true)
	defaultMode := compareFunctionalUnionMembershipTransform(t, project, false)
	compareFunctionalUnionMembershipRunRuntimeCases(t, project, functional, defaultMode)
	if strings.Contains(functional, `typeof v.handler === "function"`) == false {
		t.Fatalf("functional equality emit did not retain the function membership guard:\n%s", functional)
	}
	compareFunctionalUnionMembershipRejectsLess(t, project)
}

func compareFunctionalUnionMembershipProject(t *testing.T) string {
	t.Helper()
	base := os.Getenv("TYPIA_TEST_TMPDIR")
	if base == "" {
		root := ttscTypiaTestRepoRoot(t)
		base = filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
	}
	if err := os.MkdirAll(base, 0o755); err != nil {
		t.Fatalf("mkdir temp base: %v", err)
	}
	dir, err := os.MkdirTemp(base, "compare-functional-union-")
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
	if err := os.WriteFile(filepath.Join(dir, "tsconfig.main.json"), []byte(compareFunctionalUnionMembershipTSConfig("src/main.ts")), 0o644); err != nil {
		t.Fatalf("write main tsconfig: %v", err)
	}
	if err := os.WriteFile(filepath.Join(dir, "tsconfig.less.json"), []byte(compareFunctionalUnionMembershipTSConfig("src/less.ts")), 0o644); err != nil {
		t.Fatalf("write less tsconfig: %v", err)
	}
	compareFunctionalUnionMembershipWriteTypiaFixture(t, dir)
	if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareFunctionalUnionMembershipSource), 0o644); err != nil {
		t.Fatalf("write source: %v", err)
	}
	if err := os.WriteFile(filepath.Join(src, "less.ts"), []byte(compareFunctionalUnionMembershipLessSource), 0o644); err != nil {
		t.Fatalf("write less source: %v", err)
	}
	return dir
}

func compareFunctionalUnionMembershipWriteTypiaFixture(t *testing.T, project string) {
	t.Helper()
	root := filepath.Join(project, "node_modules", "typia")
	if err := os.MkdirAll(filepath.Join(root, "src"), 0o755); err != nil {
		t.Fatalf("mkdir typia fixture: %v", err)
	}
	if err := os.MkdirAll(filepath.Join(root, "lib"), 0o755); err != nil {
		t.Fatalf("mkdir typia fixture lib: %v", err)
	}
	files := map[string]string{
		"package.json": `{
  "name": "typia",
  "version": "0.0.0-test",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./lib/transform": "./lib/transform.js"
  },
  "ttsc": {
    "plugin": { "transform": "typia/lib/transform" }
  }
}
`,
		"src/index.ts":     compareFunctionalUnionMembershipTypiaIndex,
		"src/module.ts":    compareFunctionalUnionMembershipTypiaModule,
		"src/compare.ts":   compareFunctionalUnionMembershipTypiaCompare,
		"src/plain.ts":     compareFunctionalUnionMembershipTypiaPlain,
		"lib/transform.js": "module.exports = {};\n",
	}
	for name, body := range files {
		if err := os.WriteFile(filepath.Join(root, name), []byte(body), 0o644); err != nil {
			t.Fatalf("write typia fixture %s: %v", name, err)
		}
	}
}

func compareFunctionalUnionMembershipTransform(t *testing.T, project string, functional bool) string {
	t.Helper()
	payload := `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`
	if functional {
		payload = `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`
	}
	out, errText, code := ttscTypiaTestCapture(func() int {
		return runTransform([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.main.json",
			"--file", "src/main.ts",
			"--output", "js",
			"--plugins-json=" + payload,
		})
	})
	if code != 0 {
		t.Fatalf("functional=%t transform failed: code=%d stderr=\n%s", functional, code, errText)
	}
	return out
}

func compareFunctionalUnionMembershipRunRuntimeCases(t *testing.T, project string, functional string, defaultMode string) {
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
	if err := os.WriteFile(filepath.Join(runtimeDir, "throw-type-guard-error-stub.cjs"), []byte(compareFunctionalUnionMembershipThrowStub), 0o644); err != nil {
		t.Fatalf("write throw type guard error stub: %v", err)
	}
	for _, output := range []struct {
		name string
		js   string
	}{
		{name: "functional.cjs", js: functional},
		{name: "default.cjs", js: defaultMode},
	} {
		js := strings.ReplaceAll(output.js, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
		js = ttscTypiaTestRewriteCommonJS(t, js)
		if err := os.WriteFile(filepath.Join(runtimeDir, output.name), []byte(js), 0o644); err != nil {
			t.Fatalf("write %s: %v", output.name, err)
		}
	}
	runner := filepath.Join(runtimeDir, "run.cjs")
	if err := os.WriteFile(runner, []byte(compareFunctionalUnionMembershipRuntimeRunner), 0o644); err != nil {
		t.Fatalf("write runtime runner: %v", err)
	}
	cmd := exec.Command(node, runner)
	cmd.Dir = runtimeDir
	output, err := cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("functional union membership runtime cases failed: %v\n%s", err, output)
	}
	if strings.Contains(string(output), "RAN 24 CASES") == false {
		t.Fatalf("functional union membership runner skipped cases:\n%s", output)
	}
}

func compareFunctionalUnionMembershipRejectsLess(t *testing.T, project string) {
	t.Helper()
	payload := `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`
	_, errText, code := ttscTypiaTestCapture(func() int {
		return runTransform([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.less.json",
			"--file", "src/less.ts",
			"--output", "js",
			"--plugins-json=" + payload,
		})
	})
	if code == 0 || strings.Contains(errText, "unable to order a union of multiple object types") == false {
		t.Fatalf("compare.less did not retain its object-union diagnostic: code=%d stderr=\n%s", code, errText)
	}
}

func compareFunctionalUnionMembershipTSConfig(entry string) string {
	return `{
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
  "include": ["` + entry + `"]
}
`
}

const compareFunctionalUnionMembershipTypiaIndex = `import * as typia from "./module";

export default typia;
export * from "./module";
`

const compareFunctionalUnionMembershipTypiaModule = `export * as compare from "./compare";
export * as plain from "./plain";

export declare function is<T>(input: unknown): input is T;
export declare function createIs<T>(): (input: unknown) => input is T;
`

const compareFunctionalUnionMembershipTypiaCompare = `export type Cover<T> = T extends object
  ? { [K in keyof T]?: Cover<T[K]> }
  : T;

export declare function equals<T>(x: T, y: T): boolean;
export declare function cover<T>(x: T, y: Cover<T>): boolean;
export declare function less<T>(x: T, y: T): boolean;
export declare function createEquals<T>(): (x: T, y: T) => boolean;
export declare function createCover<T>(): (x: T, y: Cover<T>) => boolean;
`

const compareFunctionalUnionMembershipTypiaPlain = `export declare function clone<T>(input: T): T;
export declare function createClone<T>(): (input: T) => T;
export declare function createPrune<T extends object>(): (input: T) => void;
`

const compareFunctionalUnionMembershipThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error("guard: " + props.expected);
  error.name = "TypeGuardError";
  throw error;
};
`

const compareFunctionalUnionMembershipSource = `import typia from "typia";

type FunctionUnion =
  | { handler: (value: number) => string; common: string }
  | { handler: string; common: string; label: string };
type StringFirstUnion =
  | { handler: string; common: string; label: string }
  | { handler: (value: number) => string; common: string };
type Nested = { value: FunctionUnion };

export const directIs = (input: unknown): input is FunctionUnion =>
  typia.is<FunctionUnion>(input);
export const factoryIs = typia.createIs<FunctionUnion>();
export const directEquals = (x: unknown, y: unknown): boolean =>
  typia.compare.equals<FunctionUnion>(x as FunctionUnion, y as FunctionUnion);
export const factoryEquals = typia.compare.createEquals<FunctionUnion>();
export const directCover = (x: FunctionUnion, y: unknown): boolean =>
  typia.compare.cover<FunctionUnion>(x, y as typia.compare.Cover<FunctionUnion>);
export const factoryCover = typia.compare.createCover<FunctionUnion>();
export const directClone = (input: FunctionUnion) =>
  typia.plain.clone<FunctionUnion>(input);
export const factoryClone = typia.plain.createClone<FunctionUnion>();
export const prune = typia.plain.createPrune<FunctionUnion>();

export const reversedEquals = typia.compare.createEquals<StringFirstUnion>();
export const nestedEquals = typia.compare.createEquals<Nested>();
export const nestedDirectEquals = (x: Nested, y: Nested): boolean =>
  typia.compare.equals<Nested>(x, y);
`

const compareFunctionalUnionMembershipLessSource = `import typia from "typia";

type FunctionUnion =
  | { handler: (value: number) => string; common: string }
  | { handler: string; common: string; label: string };

typia.compare.less<FunctionUnion>({} as FunctionUnion, {} as FunctionUnion);
`

const compareFunctionalUnionMembershipRuntimeRunner = `const functional = require("./functional.cjs");
const defaults = require("./default.cjs");

let ran = 0;
const expect = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected)
    throw new Error(name + ": expected " + expected + ", got " + actual);
};
const expectJson = (name, actual, expected) =>
  expect(name, JSON.stringify(actual), JSON.stringify(expected));

const left = { handler: "text", common: "same", label: "left" };
const right = { handler: "text", common: "same", label: "right" };
const equal = { handler: "text", common: "same", label: "left" };
const invalidLeft = { handler: 1, common: "same", label: "left" };
const invalidRight = { handler: 1, common: "same", label: "right" };

// Functional mode must use handler while routing, then preserve equality's
// established post-selection treatment of actual function-valued properties.
expect("functional direct is accepts later member", functional.directIs(left), true);
expect("functional factory is accepts later member", functional.factoryIs(right), true);
expect("functional direct equals distinguishes later label", functional.directEquals(left, right), false);
expect("functional factory equals distinguishes later label", functional.factoryEquals(left, right), false);
expect("functional direct equals keeps equal later member", functional.directEquals(left, equal), true);
expect("functional factory equals keeps equal later member", functional.factoryEquals(left, equal), true);
expect("functional direct cover distinguishes later label", functional.directCover(left, right), false);
expect("functional factory cover distinguishes later label", functional.factoryCover(left, right), false);
expectJson("functional direct clone preserves later member", functional.directClone(left), left);
expectJson("functional factory clone preserves later member", functional.factoryClone(right), right);

const pruned = { ...left, extra: true };
functional.prune(pruned);
expectJson("functional prune retains selected later label", pruned, left);
expect("functional reversed union distinguishes later label", functional.reversedEquals(left, right), false);
expect("functional nested factory distinguishes later label", functional.nestedEquals({ value: left }, { value: right }), false);
expect("functional nested direct distinguishes later label", functional.nestedDirectEquals({ value: left }, { value: right }), false);

expect("functional direct is rejects invalid handler", functional.directIs(invalidLeft), false);
expect("functional factory is rejects invalid handler", functional.factoryIs(invalidRight), false);
expect("functional direct equals rejects distinct invalid operands", functional.directEquals(invalidLeft, invalidRight), false);
expect("functional factory equals rejects distinct invalid operands", functional.factoryEquals(invalidLeft, invalidRight), false);
expect("functional same invalid reference keeps identity fast path", functional.factoryEquals(invalidLeft, invalidLeft), true);

const functionLeft = { handler: (value) => String(value), common: "same" };
const functionRight = { handler: (value) => "#" + value, common: "same" };
const functionDifferentCommon = { handler: (value) => String(value), common: "different" };
expect("functional actual functions keep method identity ignored", functional.factoryEquals(functionLeft, functionRight), true);
expect("functional actual function member still compares data", functional.factoryEquals(functionLeft, functionDifferentCommon), false);

// Default mode deliberately treats a sole function-valued member as lenient.
// The option boundary must stay visible rather than changing compare globally.
expect("default direct is keeps function member lenient", defaults.directIs(invalidLeft), true);
expect("default factory is keeps function member lenient", defaults.factoryIs(invalidRight), true);
expect("default equals keeps function member ignored", defaults.factoryEquals(invalidLeft, invalidRight), true);

console.log("RAN " + ran + " CASES");
`
