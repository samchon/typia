package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestMetadataSchemaIntersectsTemplates verifies template-literal overlap.
//
// Template-literal metadata is string-shaped and can overlap another template
// bucket. Union specialization must treat shared template properties
// conservatively instead of using them as discriminators.
//
// 1. Assert identical template-literal schemas intersect.
// 2. Assert overlapping non-identical template buckets intersect.
// 3. Assert string literals conservatively intersect template-literal strings.
// 4. Assert a template does not intersect an unrelated primitive.
//
// @evidence contracts/testing.md#behavioral-verification MetadataSchema_intersects compares identical and overlapping templates, a string literal with a template and a template with a number atomic.
// @evidence contracts/testing.md#independent-expectations Template-literal strings are strings, so overlap with strings follows value sets, with the conservative literal case documented; verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases Three positives (identical, overlapping, string literal) and the number atomic negative.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It calls the exported intersection function on constructed metadata with no filesystem fixture, process or native command build.
func TestMetadataSchemaIntersectsTemplates(t *testing.T) {
  idNumber := testutil.TemplateMetadata(
    testutil.StringConstantMetadata("id-"),
    testutil.AtomicMetadata("number"),
  )
  if !metadata.MetadataSchema_intersects(
    idNumber,
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("identical template-literal schemas should intersect")
  }
  if !metadata.MetadataSchema_intersects(
    idNumber,
    testutil.TemplateMetadata(testutil.StringConstantMetadata("id-"), testutil.AtomicMetadata("string")),
  ) {
    t.Fatal("overlapping template-literal buckets should intersect")
  }
  if !metadata.MetadataSchema_intersects(idNumber, testutil.StringConstantMetadata("id-1")) {
    t.Fatal("string literal should conservatively intersect template-literal strings")
  }
  if metadata.MetadataSchema_intersects(idNumber, testutil.AtomicMetadata("number")) {
    t.Fatal("template-literal strings should not intersect number atomic")
  }
}
