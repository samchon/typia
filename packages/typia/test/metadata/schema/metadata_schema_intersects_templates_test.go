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
// 2. Assert distinct template buckets conservatively intersect.
// 3. Assert a template does not intersect an unrelated primitive.
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
    testutil.TemplateMetadata(testutil.StringConstantMetadata("name-"), testutil.AtomicMetadata("number")),
  ) {
    t.Fatal("template-literal buckets should conservatively intersect")
  }
  if metadata.MetadataSchema_intersects(idNumber, testutil.AtomicMetadata("number")) {
    t.Fatal("template-literal strings should not intersect number atomic")
  }
}
