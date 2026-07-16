package main

import (
	"encoding/json"
	"os"
	"path/filepath"
	"reflect"
	"slices"
	"testing"
)

// TestTransformProjectReportsTypeDependencies verifies the bundler envelope.
//
// A validator's emitted JavaScript depends on type-only source files that are
// absent from the JavaScript import graph. The project transform must expose a
// deterministic conservative source set without making the validator watch
// itself or reporting dependencies for an explicitly disabled rewrite.
//
// 1. Transform a validator whose generic type crosses imports and re-exports.
// 2. Assert aliases, declarations, unrelated project sources, and package types.
// 3. Repeat for determinism, then disable rewriting as the negative control.
func TestTransformProjectReportsTypeDependencies(t *testing.T) {
	project := transformDependenciesProject(t)
	first := transformDependenciesRun(t, project)
	dependencies := first.Dependencies["src/validator.ts"]
	if len(dependencies) == 0 {
		t.Fatal("validator transform did not report any type dependencies")
	}
	if !slices.IsSorted(dependencies) {
		t.Fatalf("validator dependencies are not deterministic: %v", dependencies)
	}

	seen := map[string]bool{}
	for _, dependency := range dependencies {
		if seen[dependency] {
			t.Fatalf("validator dependency was duplicated: %s in %v", dependency, dependencies)
		}
		seen[dependency] = true
	}
	if seen["src/validator.ts"] {
		t.Fatalf("validator reported itself as a dependency: %v", dependencies)
	}
	for _, expected := range []string{
		"node_modules/typia/lib/module.d.ts",
		"src/alias.ts",
		"src/barrel.ts",
		"src/globals.d.ts",
		"src/model.ts",
		"src/unrelated.ts",
	} {
		if !seen[expected] {
			t.Fatalf("validator dependency set omitted %s: %v", expected, dependencies)
		}
	}
	if _, ok := first.Dependencies["src/unrelated.ts"]; ok {
		t.Fatalf("an unchanged non-typia source received a dependency list: %+v", first.Dependencies)
	}
	if len(first.Dependencies) != 1 {
		t.Fatalf("only the transformed validator should report dependencies: %+v", first.Dependencies)
	}

	second := transformDependenciesRun(t, project)
	if !reflect.DeepEqual(first.Dependencies, second.Dependencies) {
		t.Fatalf("dependency envelope changed across identical transforms:\nfirst=%+v\nsecond=%+v", first.Dependencies, second.Dependencies)
	}
	if err := os.WriteFile(filepath.Join(project, "src", "model.ts"), []byte("export interface Model { value: number }\n"), 0o644); err != nil {
		t.Fatalf("change type-only model: %v", err)
	}
	changed := transformDependenciesRun(t, project)
	if changed.TypeScript["src/validator.ts"] == first.TypeScript["src/validator.ts"] {
		t.Fatal("changing only the imported model did not regenerate the validator")
	}
	if !reflect.DeepEqual(first.Dependencies, changed.Dependencies) {
		t.Fatalf("type-only change altered the stable dependency graph:\nbefore=%+v\nafter=%+v", first.Dependencies, changed.Dependencies)
	}

	disabled := transformDependenciesRun(t, project, "--rewrite-mode", "none")
	if len(disabled.Dependencies) != 0 {
		t.Fatalf("disabled typia rewriting reported dependencies: %+v", disabled.Dependencies)
	}
}

type transformDependenciesOutput struct {
	Dependencies map[string][]string `json:"dependencies"`
	TypeScript   map[string]string   `json:"typescript"`
}

func transformDependenciesRun(t *testing.T, project string, extra ...string) transformDependenciesOutput {
	t.Helper()
	args := []string{"--cwd", project, "--tsconfig", "tsconfig.json"}
	args = append(args, extra...)
	out, errText, code := ttscTypiaTestCapture(func() int {
		return runTransform(args)
	})
	if code != 0 {
		t.Fatalf("project transform failed: code=%d\nstdout=%s\nstderr=%s", code, out, errText)
	}
	var result transformDependenciesOutput
	if err := json.Unmarshal([]byte(out), &result); err != nil {
		t.Fatalf("decode transform dependency envelope: %v\n%s", err, out)
	}
	return result
}

func transformDependenciesProject(t *testing.T) string {
	t.Helper()
	project := t.TempDir()
	src := filepath.Join(project, "src")
	if err := os.MkdirAll(src, 0o755); err != nil {
		t.Fatalf("mkdir fixture src: %v", err)
	}
	if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(transformDependenciesTSConfig), 0o644); err != nil {
		t.Fatalf("write tsconfig: %v", err)
	}
	transformDiagnosticWriteTypiaStub(t, project)
	files := map[string]string{
		"alias.ts": `import type { Model as ImportedModel } from "./model";
export type Box<T> = { data: T };
export type Alias = Box<ImportedModel>;
`,
		"barrel.ts": `export type { Alias as Reexported } from "./alias";
`,
		"globals.d.ts": `interface DeclaredMetadata { tag: string }
`,
		"model.ts": `export interface Model { value: string }
`,
		"unrelated.ts": `export const unrelated = "still a project input";
`,
		"validator.ts": `import typia from "typia";
import type { Reexported } from "@model/barrel";
type Product<T> = { payload: T; meta: DeclaredMetadata };
export const check = (input: unknown): boolean => typia.is<Product<Reexported>>(input);
`,
	}
	for name, body := range files {
		if err := os.WriteFile(filepath.Join(src, name), []byte(body), 0o644); err != nil {
			t.Fatalf("write fixture %s: %v", name, err)
		}
	}
	return project
}

const transformDependenciesTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
		"ignoreDeprecations": "6.0",
		"types": ["*"],
		"baseUrl": ".",
		"paths": { "@model/*": ["src/*"] },
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`
