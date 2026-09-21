package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestMetadataTypeTagSoleMalformedDiagnostic verifies a malformed type tag is
// reported even when no valid tag accompanies it.
//
// MetadataTypeTagFactory.Analyze collects a message for every malformed tag
// object, but returned early when no tag object survived, before those messages
// reached the error list. A sole malformed tag therefore vanished: the
// constraint its author wrote was enforced nowhere, while the same tag beside a
// valid one was reported (samchon/typia#2400). The now-visible message must
// also name the malformed `validate` property instead of blaming `target`.
// The accompanied case keeps its message, and a valid sole tag is the negative
// twin that must keep compiling.
//
//  1. Build one project whose calls carry a sole non-literal tag value, the
//     same value beside a valid tag, and the same value through
//     `typia.llm.evaluation`, and a separate project with a valid sole tag.
//  2. Require the first build to fail through the transform-diagnostic path.
//  3. Require every malformed call's messages, and the valid project to
//     compile.
func TestMetadataTypeTagSoleMalformedDiagnostic(t *testing.T) {
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "sole-malformed-tag-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(llmEvaluationDiagnosticsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "src", "main.ts"), []byte(metadataTypeTagSoleMalformedSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(dir, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("sole malformed tag build should fail with code 3, got %d\nstderr=%s", code, errText)
  }
  normalized := strings.ReplaceAll(filepath.ToSlash(errText), "\r\n", "\n")
  const value = "  - the property [\"typia.tag.value\"] must be a literal, literal tuple, object, or undefined type."
  const validate = "  - the property [\"typia.tag.validate\"] must be a string literal, or an object whose keys are 'boolean', 'bigint', 'number', 'string', 'array', or 'object'."
  for _, expected := range []string{
    "- number & Minimum<number>\n" + value + "\n" + validate,
    "- number & Minimum<number> & Maximum<10>\n" + value + "\n" + validate,
    "- Probe.flag: boolean & Probabilitynumber\n" + value,
  } {
    if !strings.Contains(normalized, expected) {
      t.Fatalf("sole malformed tag diagnostic missing %q:\n%s", expected, errText)
    }
  }
  if strings.Contains(normalized, "typia.tag.target") {
    t.Fatalf("a malformed validate must not be reported as target:\n%s", errText)
  }
  llmEvaluationAccepts(t, "sole-valid-tag", metadataTypeTagSoleValidSource)
}

const metadataTypeTagSoleValidSource = `import typia, { tags } from "typia";

typia.is<number & tags.Minimum<0>>(1);
`

const metadataTypeTagSoleMalformedSource = `import typia, { tags } from "typia";

type Probe = {
  /** Is it flagged? */
  flag: boolean & tags.Probability<number>;
};

typia.is<number & tags.Minimum<number>>(1);
typia.is<number & tags.Minimum<number> & tags.Maximum<10>>(1);
typia.llm.evaluation<Probe>();
`
