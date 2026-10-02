package typia_test

import (
  "testing"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataObjectTypeSanitizesInvalidUTF8Names verifies object-name cleanup.
//
// TypeScript symbols can contain invalid UTF-8 after crossing the Go shim
// boundary. Object type creation normalizes those names so metadata keys and
// generated helper names remain valid strings.
//
// 1. Build an object type with an invalid UTF-8 byte in its name.
// 2. Assert creation replaces the invalid byte with a stable marker.
// 3. Convert the object to JSON and assert the sanitized name is serialized.
//
// @evidence contracts/testing.md#behavioral-verification An object type created with an invalid UTF-8 byte in its name is compared to the sanitized name and to its JSON name.
// @evidence contracts/testing.md#independent-expectations The replacement marker is the documented sanitization; the expected __User is authored.
// @evidence contracts/testing.md#distinguishing-cases One invalid byte; valid names pass through unchanged by every other case.
// @evidence contracts/testing.md#execution-ownership The packages/typia/test module (pnpm test:go:public) runs this Test function in process with the Go test runner. It creates the type in memory with no filesystem fixture, process or native command build.
func TestMetadataObjectTypeSanitizesInvalidUTF8Names(t *testing.T) {
  object := metadata.MetadataObjectType_create(metadata.MetadataObjectType{
    Name: string([]byte{0xff, 'U', 's', 'e', 'r'}),
  })

  if object.Name != "__User" {
    t.Fatalf("invalid UTF-8 should be replaced in object name: %q", object.Name)
  }
  if json := object.ToJSON(); json.Name != "__User" {
    t.Fatalf("sanitized object name should be serialized: %q", json.Name)
  }
}
