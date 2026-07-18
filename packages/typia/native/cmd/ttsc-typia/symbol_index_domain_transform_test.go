package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestSymbolIndexDomainTransform verifies a symbol index signature stays out
// of typia's string-keyed validation and JSON Schema shape (#2240).
//
// TypeScript keeps string and symbol index domains distinct, including when a
// symbol index key is intersected with a nominal brand. This regression pins
// that boundary through the real transform because treating every checker
// IndexInfo as a JSON string index makes unrelated Object.keys values inherit a
// symbol index's value constraint. An ordinary string index and the explicit
// symbol-member behavior fixed by #2226 are adjacent controls.
//
//  1. Compile checker-level keyof assertions for symbol and string indexes.
//  2. Execute validators over ordinary extras and symbol-valued properties.
//  3. Compare the symbol-index schema exactly with a plain-object control while
//     requiring a normal string index to retain additionalProperties.
func TestSymbolIndexDomainTransform(t *testing.T) {
  project := symbolIndexDomainProject(t)
  js := symbolIndexDomainTransform(t, project)
  symbolIndexDomainRunRuntimeCases(t, project, js)
}

func symbolIndexDomainProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "symbol-index-domain-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(symbolIndexDomainTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(symbolIndexDomainSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func symbolIndexDomainTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("symbol index domain transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func symbolIndexDomainRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(symbolIndexDomainRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("symbol index domain runtime cases failed: %v\n%s", err, output)
  }
}

const symbolIndexDomainTSConfig = `{
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

const symbolIndexDomainSource = `import typia from "typia";

declare const explicitSymbol: unique symbol;

interface SymbolIndex {
  name: string;
  [key: symbol]: number;
}

type BrandedSymbol = symbol & {
  readonly __brand: unique symbol;
};

interface BrandedSymbolIndex {
  name: string;
  [key: BrandedSymbol]: number;
}

interface PlainObject {
  name: string;
}

interface StringIndex {
  name: string;
  [key: string]: string;
}

interface ExplicitSymbolMember {
  name: string;
  [explicitSymbol]: number;
}

type Assert<T extends true> = T;
type _SymbolIndexHasNoStringDomain = Assert<
  string extends keyof SymbolIndex ? false : true
>;
type _SymbolIndexHasNoNumberDomain = Assert<
  number extends keyof SymbolIndex ? false : true
>;
type _SymbolIndexHasSymbolDomain = Assert<
  symbol extends keyof SymbolIndex ? true : false
>;
type _BrandedSymbolIndexHasNoStringDomain = Assert<
  string extends keyof BrandedSymbolIndex ? false : true
>;
type _BrandedSymbolIndexHasNoNumberDomain = Assert<
  number extends keyof BrandedSymbolIndex ? false : true
>;
type _BrandedSymbolIndexHasBrandedDomain = Assert<
  BrandedSymbol extends keyof BrandedSymbolIndex ? true : false
>;
type _StringIndexHasStringDomain = Assert<
  string extends keyof StringIndex ? true : false
>;
type _StringIndexHasNumberDomain = Assert<
  number extends keyof StringIndex ? true : false
>;
type _StringIndexHasNoSymbolDomain = Assert<
  symbol extends keyof StringIndex ? false : true
>;
type _ExplicitSymbolMemberIsPresent = Assert<
  typeof explicitSymbol extends keyof ExplicitSymbolMember ? true : false
>;

export const isSymbolIndex = typia.createIs<SymbolIndex>();
export const isBrandedSymbolIndex =
  typia.createIs<BrandedSymbolIndex>();
export const isPlainObject = typia.createIs<PlainObject>();
export const isStringIndex = typia.createIs<StringIndex>();
export const isExplicitSymbolMember =
  typia.createIs<ExplicitSymbolMember>();
export const schemas = typia.json.schemas<[
  SymbolIndex,
  BrandedSymbolIndex,
  PlainObject,
  StringIndex,
  ExplicitSymbolMember,
]>();
`

const symbolIndexDomainRuntimeRunner = `const mod = require("./main.cjs");

const failures = [];
const expect = (label, actual, expected) => {
  if (actual !== expected) {
    failures.push(
      label +
        ": expected " +
        JSON.stringify(expected) +
        " but got " +
        JSON.stringify(actual),
    );
  }
};

expect("symbol index plain", mod.isSymbolIndex({ name: "x" }), true);
expect(
  "symbol index ignores a numeric string extra",
  mod.isSymbolIndex({ name: "x", extra: 1 }),
  true,
);
expect(
  "symbol index ignores a string extra",
  mod.isSymbolIndex({ name: "x", extra: "unrelated" }),
  true,
);
expect(
  "symbol index ignores a matching symbol value",
  mod.isSymbolIndex({ name: "x", [Symbol("key")]: 1 }),
  true,
);
expect(
  "symbol index ignores a non-matching symbol value",
  mod.isSymbolIndex({ name: "x", [Symbol("key")]: "outside-json-shape" }),
  true,
);
expect("symbol index validates named properties", mod.isSymbolIndex({ name: 1 }), false);

expect(
  "branded symbol index plain",
  mod.isBrandedSymbolIndex({ name: "x" }),
  true,
);
expect(
  "branded symbol index ignores a string extra",
  mod.isBrandedSymbolIndex({ name: "x", extra: "unrelated" }),
  true,
);
expect(
  "branded symbol index ignores a matching symbol value",
  mod.isBrandedSymbolIndex({ name: "x", [Symbol("key")]: 1 }),
  true,
);
expect(
  "branded symbol index ignores a non-matching symbol value",
  mod.isBrandedSymbolIndex({ name: "x", [Symbol("key")]: "outside-json-shape" }),
  true,
);
expect(
  "branded symbol index validates named properties",
  mod.isBrandedSymbolIndex({ name: 1 }),
  false,
);

expect("plain object ignores a string extra", mod.isPlainObject({ name: "x", extra: 1 }), true);
expect("plain object validates named properties", mod.isPlainObject({ name: 1 }), false);

expect("string index accepts matching extra", mod.isStringIndex({ name: "x", extra: "ok" }), true);
expect("string index rejects mismatching extra", mod.isStringIndex({ name: "x", extra: 1 }), false);

expect(
  "explicit symbol member remains outside the JSON shape",
  mod.isExplicitSymbolMember({ name: "x", [Symbol("member")]: "ignored" }),
  true,
);
expect(
  "explicit symbol member validates named properties",
  mod.isExplicitSymbolMember({ name: 1 }),
  false,
);

const schemas = mod.schemas.components.schemas;
const plain = {
  type: "object",
  properties: { name: { type: "string" } },
  required: ["name"],
  additionalProperties: false,
};
const stringIndex = {
  type: "object",
  properties: { name: { type: "string" } },
  required: ["name"],
  additionalProperties: { type: "string" },
};
expect(
  "plain object exact schema",
  JSON.stringify(schemas.PlainObject),
  JSON.stringify(plain),
);
expect(
  "symbol index exact schema",
  JSON.stringify(schemas.SymbolIndex),
  JSON.stringify(plain),
);
expect(
  "branded symbol index exact schema",
  JSON.stringify(schemas.BrandedSymbolIndex),
  JSON.stringify(plain),
);
expect(
  "explicit symbol member exact schema",
  JSON.stringify(schemas.ExplicitSymbolMember),
  JSON.stringify(plain),
);
expect(
  "string index exact schema",
  JSON.stringify(schemas.StringIndex),
  JSON.stringify(stringIndex),
);
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
