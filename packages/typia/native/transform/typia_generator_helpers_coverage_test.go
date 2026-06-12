//go:build typia_native_internal
// +build typia_native_internal

package transform

import (
	"os"
	"path/filepath"
	"testing"
)

// TestTypiaGeneratorHelpersCoverage exercises generator filesystem helpers.
//
// The full generator path requires a compiler program, but its directory
// validation, file gathering, supported-extension filtering, and copy helpers
// are deterministic filesystem behavior. This test covers those helpers with
// temporary directories only.
//
// 1. Create a nested input/output tree with supported and unsupported files.
// 2. Gather only TypeScript implementation files while skipping declaration files.
// 3. Copy a gathered file into the output tree.
// 4. Run a minimal successful Build over a plain TypeScript project.
// 5. Cover directory detection and invalid input errors from Build.
// 6. Exercise filesystem and working-directory failures on gather, copy, and Build.
func TestTypiaGeneratorHelpersCoverage(t *testing.T) {
	root := t.TempDir()
	input := filepath.Join(root, "input")
	output := filepath.Join(root, "output")
	nested := filepath.Join(input, "nested")
	if err := os.MkdirAll(nested, 0o755); err != nil {
		t.Fatalf("mkdir input: %v", err)
	}
	files := map[string]string{
		filepath.Join(input, "main.ts"):        "export const main = 1;\n",
		filepath.Join(input, "types.d.ts"):     "declare const value: number;\n",
		filepath.Join(nested, "component.tsx"): "export const component = 1;\n",
		filepath.Join(nested, "note.txt"):      "ignore\n",
	}
	for file, text := range files {
		if err := os.WriteFile(file, []byte(text), 0o644); err != nil {
			t.Fatalf("write %s: %v", file, err)
		}
	}
	if ok, err := typiaGenerator_is_directory(input); err != nil || !ok {
		t.Fatalf("input should be a directory: ok=%v err=%v", ok, err)
	}
	if !typiaGenerator_is_supported_extension("main.ts") ||
		!typiaGenerator_is_supported_extension("component.tsx") ||
		typiaGenerator_is_supported_extension("types.d.ts") ||
		typiaGenerator_is_supported_extension("note.txt") {
		t.Fatal("supported extension helper returned unexpected values")
	}
	container := []string{}
	if err := typiaGenerator_gather(typiaGenerator_gatherProps{
		Location:  TypiaGenerator_ILocation{Input: input, Output: output},
		Container: &container,
		From:      input,
		To:        output,
	}); err != nil {
		t.Fatalf("gather failed: %v", err)
	}
	if len(container) != 2 {
		t.Fatalf("expected two supported files, got %d: %v", len(container), container)
	}
	target := filepath.Join(output, "copied.ts")
	if err := typiaGenerator_copy(container[0], target); err != nil {
		t.Fatalf("copy failed: %v", err)
	}
	if _, err := os.Stat(target); err != nil {
		t.Fatalf("copied file is missing: %v", err)
	}
	if err := typiaGenerator_copy(filepath.Join(input, "missing.ts"), filepath.Join(output, "missing.ts")); err == nil {
		t.Fatal("copying a missing file should fail")
	}
	copyBlocker := filepath.Join(root, "copy-blocker")
	if err := os.WriteFile(copyBlocker, []byte("block"), 0o644); err != nil {
		t.Fatalf("write copy blocker: %v", err)
	}
	if err := typiaGenerator_copy(container[0], filepath.Join(copyBlocker, "child.ts")); err == nil {
		t.Fatal("copying through a file parent should fail")
	}
	if err := typiaGenerator_copy(container[0], output); err == nil {
		t.Fatal("copying onto a directory should fail")
	}
	if _, err := typiaGenerator_is_directory(filepath.Join(root, "missing")); err == nil {
		t.Fatal("missing directory detection should return an error")
	}
	if err := typiaGenerator_gather(typiaGenerator_gatherProps{
		Location:  TypiaGenerator_ILocation{Input: input, Output: output},
		Container: &container,
		From:      output,
		To:        output,
	}); err != nil {
		t.Fatalf("gather should skip the output directory: %v", err)
	}
	if err := typiaGenerator_gather(typiaGenerator_gatherProps{
		Location:  TypiaGenerator_ILocation{Input: input, Output: output},
		Container: &container,
		From:      filepath.Join(input, "main.ts"),
		To:        filepath.Join(output, "main.ts"),
	}); err == nil {
		t.Fatal("gathering from a file path should fail")
	}
	project := filepath.Join(root, "tsconfig.json")
	if err := os.WriteFile(project, []byte(`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["input/**/*.ts", "input/**/*.tsx"]
}
`), 0o644); err != nil {
		t.Fatalf("write tsconfig: %v", err)
	}
	if err := TypiaGenerator.Build(TypiaGenerator_ILocation{
		Input:   input,
		Output:  filepath.Join(root, "generated"),
		Project: project,
	}); err != nil {
		t.Fatalf("minimal generator build failed: %v", err)
	}
	if err := TypiaGenerator.Build(TypiaGenerator_ILocation{
		Input:   filepath.Join(root, "missing"),
		Output:  output,
		Project: filepath.Join(input, "tsconfig.json"),
	}); err == nil {
		t.Fatal("missing input directory should fail")
	}
	if err := TypiaGenerator.Build(TypiaGenerator_ILocation{
		Input:   filepath.Join(input, "main.ts"),
		Output:  output,
		Project: project,
	}); err == nil {
		t.Fatal("file input should fail directory validation")
	}
	if err := TypiaGenerator.Build(TypiaGenerator_ILocation{
		Input:   input,
		Output:  filepath.Join(copyBlocker, "generated"),
		Project: project,
	}); err == nil {
		t.Fatal("output under a file parent should fail")
	}

	badProject := filepath.Join(root, "bad-tsconfig.json")
	if err := os.WriteFile(badProject, []byte(`{
  "compilerOptions": {
    "target": "DefinitelyNotATarget",
    "module": "commonjs",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["input/**/*.ts"]
}
`), 0o644); err != nil {
		t.Fatalf("write bad tsconfig: %v", err)
	}
	if err := TypiaGenerator.Build(TypiaGenerator_ILocation{
		Input:   input,
		Output:  filepath.Join(root, "bad-generated"),
		Project: badProject,
	}); err == nil {
		t.Fatal("generator should report compiler diagnostics")
	}
}
