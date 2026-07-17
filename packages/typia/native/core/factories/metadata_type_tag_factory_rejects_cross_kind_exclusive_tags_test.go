package factories

import (
  "strings"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataTypeTagFactoryRejectsCrossKindExclusiveTags verifies each array-form tag rejects the cross-kind partner it declares.
//
// The cross-kind partner is the whole reason an `exclusive` list holds more
// than the tag's own kind: `Minimum` lists `exclusiveMinimum`, `Format` lists
// `pattern`. The declaration is the spec and it forbids the coexistence, so
// `number & Minimum<0> & ExclusiveMinimum<5>` and
// `string & Format<"uuid"> & Pattern<...>` must not compile. The original check
// scanned only same-kind tags, so the two never met; dropping that same-kind
// guard is what lets this fire, so restoring the guard turns this red while
// leaving the same-kind duplication test green.
//
// 1. Derive every declared cross-kind pair from the declarations themselves.
// 2. Validate each pair, both orders, and require rejection naming the conflict.
// 3. Require all six declarations to contribute exactly one cross-kind partner.
func TestMetadataTypeTagFactoryRejectsCrossKindExclusiveTags(t *testing.T) {
  declarations := metadataTypeTagFactoryTestDeclarations()
  byKind := map[string]metadataTypeTagFactoryTestDeclaration{}
  for _, declaration := range declarations {
    byKind[declaration.kind] = declaration
  }

  covered := 0
  for _, declaration := range declarations {
    for _, kind := range declaration.exclusive {
      if kind == declaration.kind {
        continue
      }
      opposite, ok := byKind[kind]
      if ok == false {
        t.Fatalf("%s declares the unknown partner kind %s", declaration.kind, kind)
      }
      if opposite.target != declaration.target {
        t.Fatalf("%s and %s must share a target to ever conflict", declaration.kind, kind)
      }
      covered++

      subject := declaration.tag("A")
      partner := opposite.tag("B")
      success, messages := metadataTypeTagFactoryTestValidate(
        declaration.target,
        []schemametadata.IMetadataTypeTag{subject, partner},
      )
      if success {
        t.Fatalf("kind %s must not be used with kind %s", declaration.kind, kind)
      }
      if len(messages) != 1 ||
        strings.Contains(messages[0], declaration.kind) == false ||
        strings.Contains(messages[0], partner.Name) == false {
        t.Fatalf("the %s and %s conflict report must name the conflict, reported %#v", declaration.kind, kind, messages)
      }
    }
  }
  if covered != len(declarations) {
    t.Fatalf("every array-form declaration should name exactly one cross-kind partner, covered %d of %d", covered, len(declarations))
  }
}
