package metadata

import "testing"

//
// @evidence contracts/testing.md#behavioral-verification The shareable-name predicate is called on a named interface, anonymous object literals, an intersection rendering and a TypeLiteral name; each verdict is compared.
// @evidence contracts/testing.md#independent-expectations Only named types can be shared across intersection members; the four names and verdicts are authored.
// @evidence contracts/testing.md#distinguishing-cases One shareable name against three structural names.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the private predicate directly in the same package with no program load or process.
func TestIterateMetadataIntersectionShareableNameRejectsStructuralIntersections(t *testing.T) {
  cases := []struct {
    name      string
    sanitized string
    expected  bool
  }{
    {name: "RoleBase", sanitized: "RoleBase", expected: true},
    {name: "{ x: number; }", sanitized: "__type", expected: false},
    {name: "IPoint & { type: \"point\"; }", sanitized: "IPoint & { type: \"point\"; }", expected: false},
    {name: "TypeLiteral", sanitized: "__type", expected: false},
  }
  for _, next := range cases {
    actual := iterate_metadata_intersection_shareable_name(next.name, next.sanitized)
    if actual != next.expected {
      t.Fatalf("shareable(%q, %q) = %v", next.name, next.sanitized, actual)
    }
  }
}
