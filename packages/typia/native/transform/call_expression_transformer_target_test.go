package transform

import "testing"

// TestCallExpressionTransformerTargetModuleMatchesTypiaPathSegments verifies
// target detection only accepts real `typia` path segments. A package whose
// directory merely ends with `typia`, such as `fake-typia`, must not be
// transformed as if it were the typia runtime declarations.
func TestCallExpressionTransformerTargetModuleMatchesTypiaPathSegments(t *testing.T) {
  cases := []struct {
    name     string
    location string
    module   string
    matched  bool
  }{
    {
      name:     "installed lib declaration",
      location: "C:/repo/node_modules/typia/lib/misc.d.ts",
      module:   "misc",
      matched:  true,
    },
    {
      name:     "workspace source",
      location: "D:/github/samchon/typia/packages/typia/src/module.ts",
      module:   "module",
      matched:  true,
    },
    {
      name:     "fake package suffix",
      location: "C:/repo/node_modules/fake-typia/lib/misc.d.ts",
      matched:  false,
    },
    {
      name:     "nested lib file",
      location: "C:/repo/node_modules/typia/lib/internal/_isType.d.ts",
      matched:  false,
    },
  }

  for _, tc := range cases {
    module, matched := callExpressionTransformer_targetModule(tc.location)
    if matched != tc.matched || module != tc.module {
      t.Fatalf("%s: targetModule(%q) = (%q, %v), expected (%q, %v)", tc.name, tc.location, module, matched, tc.module, tc.matched)
    }
  }
}
