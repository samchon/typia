package factories

import (
  "slices"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestProtobufEmplacerRecoveryOwnership verifies unexpected panics stay visible.
//
// Unsupported metadata is diagnosed before emission, but an invariant failure
// inside the Protobuf emplacer must not be converted into a successful semantic
// result by a blanket recover.
//
//  1. Verify unsupported metadata remains an ordinary diagnostic.
//  2. Build a static object with an impossible empty semantic schema.
//  3. Require the panic to escape the post-validation emplacement pass.
//
// @evidence contracts/testing.md#behavioral-verification The protobuf emplacer runs on unsupported metadata, which must produce an ordinary diagnostic, and on a static object with an impossible schema, which must panic and not be swallowed.
// @evidence contracts/testing.md#independent-expectations Diagnostics for unsupported input and visibility of invariant failures are the stated contract; the expected error and panic are authored.
// @evidence contracts/testing.md#distinguishing-cases Diagnostic versus panic separates expected failure from an invariant violation.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the emplacer on constructed metadata and recovers a panic in the test itself, with no checker, filesystem fixture or process.
func TestProtobufEmplacerRecoveryOwnership(t *testing.T) {
  unsupported := schemametadata.MetadataSchema_initialize()
  unsupported.Any = true
  errors := protobufFactory_validate()(struct {
    Metadata *schemametadata.MetadataSchema
    Explore  MetadataFactory_IExplore
    Top      *schemametadata.MetadataSchema
  }{
    Metadata: unsupported,
    Explore:  MetadataFactory_IExplore{Top: true},
    Top:      unsupported,
  })
  if !slices.Contains(errors, "does not support any type") {
    t.Fatalf("unsupported any fallback mismatch: %v", errors)
  }

  key := MetadataFactory.SoleLiteral("value")
  dynamicKey := schemametadata.MetadataSchema_initialize()
  dynamicKey.Atomics = append(dynamicKey.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}))
  dynamic := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name: "BrokenMap",
    Properties: []*schemametadata.MetadataProperty{
      schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
        Key:   dynamicKey,
        Value: schemametadata.MetadataSchema_initialize(),
      }),
    },
  })
  value := schemametadata.MetadataSchema_initialize()
  value.Objects = append(value.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: dynamic}))
  object := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name: "Broken",
    Properties: []*schemametadata.MetadataProperty{
      schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
        Key:   key,
        Value: value,
      }),
    },
  })
  defer func() {
    if recover() == nil {
      t.Fatal("unexpected Protobuf emplacer panic was swallowed")
    }
  }()
  protobufFactory_emplaceObjects([]*schemametadata.MetadataObjectType{object})
}
