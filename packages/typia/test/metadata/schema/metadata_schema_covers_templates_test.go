package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaCoversTemplates verifies template-literal containment.
//
// Template coverage has explicit positive paths for string-like sources and
// exact template matches. It must not imply that a template covers every string.
//
// 1. Assert atomic string covers a template-literal string.
// 2. Assert an identical template covers the target template.
// 3. Assert unrelated sources do not cover template-literal strings.
// 4. Assert a template does not cover plain atomic string.
func TestMetadataSchemaCoversTemplates(t *testing.T) {
  target := testutil.TemplateMetadata(
    testutil.StringConstantMetadata("id-"),
    testutil.AtomicMetadata("number"),
  )
  if !metadata.MetadataSchema_covers(testutil.AtomicMetadata("string"), target) {
    t.Fatal("string atomic should cover template-literal strings")
  }
  if !metadata.MetadataSchema_covers(
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
    target,
  ) {
    t.Fatal("identical template-literal schema should cover its target")
  }
  if metadata.MetadataSchema_covers(testutil.AtomicMetadata("number"), target) {
    t.Fatal("number atomic should not cover template-literal strings")
  }
  if metadata.MetadataSchema_covers(
    testutil.TemplateMetadata(testutil.StringConstantMetadata("name-"), testutil.AtomicMetadata("number")),
    target,
  ) {
    t.Fatal("different template-literal strings should not cover each other")
  }
  if metadata.MetadataSchema_covers(target, testutil.AtomicMetadata("string")) {
    t.Fatal("template-literal schema should not cover every string")
  }
}
