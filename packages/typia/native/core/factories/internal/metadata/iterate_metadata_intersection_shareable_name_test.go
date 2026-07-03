package metadata

import "testing"

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
