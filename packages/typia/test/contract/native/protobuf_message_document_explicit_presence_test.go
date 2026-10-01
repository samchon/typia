package typia_test

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  testutil "github.com/samchon/typia/packages/typia/test/internal/testutil"
)

// TestProtobufMessageDocumentExplicitPresence verifies singular fields stay labeled.
//
// A Protobuf compiler accepts both `optional int32 id = 1;` and a bare
// `int32 id = 1;`, so the compiler oracle cannot tell the two apart — but the
// codecs can. ProtobufEncodeProgrammer writes a required non-nullable field
// unguarded, emitting it even at the scalar default, and ProtobufDecodeProgrammer
// defaults an absent required number to `undefined`. A bare field is implicit
// presence, which lets a peer drop default values from the wire and decode back
// into a missing property, so dropping the label to satisfy proto3 would trade
// an illegal document for a lossy one. This pins the choice the oracle cannot.
//
// 1. Render a document whose scalars are required, optional, and nullable.
// 2. Require every singular field to keep an explicit presence label.
// 3. Require `required` to be gone, and repeated fields to stay unlabeled.
//
// @evidence contracts/testing.md#behavioral-verification A rendered document must declare the exact optional and repeated field lines, carry no required label and no optional repeated combination.
// @evidence contracts/testing.md#independent-expectations Explicit presence is required so default values survive the wire; the expected field lines are authored from the protobuf syntax, not derived from the renderer.
// @evidence contracts/testing.md#distinguishing-cases Required, nullable, optional and repeated fields give each label decision; this case relies on substring checks and so cannot assert layout beyond those lines, while legality is owned by the compile case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It renders in memory with no filesystem fixture, process or native command build.
func TestProtobufMessageDocumentExplicitPresence(t *testing.T) {
  document := protobufMessageDocumentRender([]*schemametadata.MetadataObjectType{
    protobufMessageDocumentObject("IPresence",
      testutil.Property("id", protobufMessageDocumentTagged("number", "int32")),
      testutil.Property("nickname", protobufMessageDocumentNullable(testutil.AtomicMetadata("string"))),
      testutil.Property("timeout", protobufMessageDocumentOptional(protobufMessageDocumentTagged("number", "int32"))),
      testutil.Property("tags", testutil.ArrayMetadata(testutil.AtomicMetadata("string"))),
    ),
  })
  for _, field := range []string{
    "optional int32 id = 1;",
    "optional string nickname = 2;",
    "optional int32 timeout = 3;",
    "repeated string tags = 4;",
  } {
    if strings.Contains(document, field) == false {
      t.Errorf("emitted document must declare %q:\n%s", field, document)
    }
  }
  if strings.Contains(document, "required") {
    t.Errorf("proto3 document must not carry a `required` label:\n%s", document)
  }
  if strings.Contains(document, "optional repeated") {
    t.Errorf("a repeated field must not take a presence label:\n%s", document)
  }
}
