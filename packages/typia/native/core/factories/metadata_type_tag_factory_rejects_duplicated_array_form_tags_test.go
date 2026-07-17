package factories

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryRejectsDuplicatedArrayFormTags verifies an array-form tag rejects a second tag of its own kind.
//
// Every array-form `exclusive` list names its own kind, so the tag can never be
// duplicated. The check compared that list of kinds against the opposite tag's
// `Name` — `"minimum"` against `"Minimum<0>"` — which never matches, so
// `number & Minimum<5> & Minimum<0>` compiled and emitted `{"minimum": 0}`
// while its validator required 5. This is one half of the mutation proof:
// reverting the kind comparison back to `Name` turns this red. Restoring the
// same-kind guard leaves this green, because a duplicate is same-kind; it reds
// only the cross-kind rejection test instead.
//
// 1. Build two tags of one kind from each array-form declaration.
// 2. Validate the pair and require rejection.
// 3. Require the report to name the kind and the conflicting tag.
func TestMetadataTypeTagFactoryRejectsDuplicatedArrayFormTags(t *testing.T) {
  for _, declaration := range metadataTypeTagFactoryTestDeclarations() {
    first := declaration.tag("A")
    second := declaration.tag("B")
    success, messages := metadataTypeTagFactoryTestValidate(
      declaration.target,
      []schemametadata.IMetadataTypeTag{first, second},
    )
    if success {
      t.Fatalf("kind %s must not be duplicated on one property", declaration.kind)
    }
    if len(messages) != 1 ||
      strings.Contains(messages[0], declaration.kind) == false ||
      strings.Contains(messages[0], second.Name) == false {
      t.Fatalf("the %s duplication report must name the conflict, reported %#v", declaration.kind, messages)
    }
  }
}
