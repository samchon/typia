package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTemplateLiteralTypeTagsTransform verifies whole-template length and pattern checks.
//
// A tagged template string must satisfy its structural pattern and independent length bounds together; a generic string check alone loses either contribution.
//
// 1. Minimum and maximum length tags accompany a template pattern, contrasting each independent constraint with the surrounding syntax.
// 2. The output imports both string length helpers, applies the authored maximum thirty and retains the prefix/postfix pattern.
//
// @evidence contracts/testing.md#behavioral-verification The output imports both string length helpers, applies the authored maximum thirty and retains the prefix/postfix pattern.
// @evidence contracts/testing.md#independent-expectations A tagged template string must satisfy its structural pattern and independent length bounds together; a generic string check alone loses either contribution.
// @evidence contracts/testing.md#distinguishing-cases Minimum and maximum length tags accompany a template pattern, contrasting each independent constraint with the surrounding syntax.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTemplateLiteralTypeTagsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestTemplateLiteralTypeTagsTransform(t *testing.T) {
  project := templateLiteralTypeTagsProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("template literal tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  if !strings.Contains(out, `require("typia/lib/internal/_stringLengthLte")`) ||
    !strings.Contains(out, "._stringLengthLte(input, 30)") ||
    !strings.Contains(out, `require("typia/lib/internal/_stringLengthGte")`) ||
    !strings.Contains(out, "RegExp(/^prefix(.*)postfix$/)") {
    t.Fatalf("emitted checker should combine the template pattern with its tags:\n%s", out)
  }
}

func templateLiteralTypeTagsProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "template-tags-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(templateLiteralTypeTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(templateLiteralTypeTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const templateLiteralTypeTagsTSConfig = `{
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

const templateLiteralTypeTagsSource = `import typia, { tags } from "typia";

type Tagged = tags.MaxLength<30> & tags.Pattern<"^[a-zA-Z0-9_]+$"> & ` + "`prefix${string}postfix`" + `;
type TaggedUnion =
  | (` + "`a${string}`" + ` & tags.MinLength<3>)
  | (` + "`b${string}`" + ` & tags.MaxLength<5>);

export const isTagged = typia.createIs<Tagged>();
export const validateTagged = typia.createValidate<Tagged>();
export const isTaggedUnion = typia.createIs<TaggedUnion>();
`
