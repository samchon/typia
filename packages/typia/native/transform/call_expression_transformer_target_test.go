package transform

import "testing"

// TestCallExpressionTransformerTargetModuleMatchesTypiaPathSegments verifies
// target detection only accepts real `typia` path segments. A package whose
// directory merely ends with `typia`, such as `fake-typia`, must not be
// transformed as if it were the typia runtime declarations.
//
// @evidence contracts/testing.md#behavioral-verification Calls the actual declaration-owner classifier and asserts both its family and acceptance, distinguishing supported root/basic and namespace declarations from unrelated package suffixes and nested helper files.
// @evidence contracts/testing.md#independent-expectations Literal source and packed declaration paths follow typia's maintained layout; the root API uses the module functor family while plain uses its own family, independently of classifier output.
// @evidence contracts/testing.md#distinguishing-cases Current source and packed basic declarations must match alongside legacy module declarations; fake-typia and internal/basic twins must not match, preserving the package and top-level declaration boundaries.
// @evidence contracts/testing.md#execution-ownership The public/native Go command executes this named Test function; each t.Run owns one path/family result and tests portable classification without building a consumer or invoking a native host.
func TestCallExpressionTransformerTargetModuleMatchesTypiaPathSegments(t *testing.T) {
  cases := []struct {
    name     string
    location string
    module   string
    matched  bool
  }{
    {
      name:     "installed lib declaration",
      location: "C:/repo/node_modules/typia/lib/plain.d.ts",
      module:   "plain",
      matched:  true,
    },
    {
      name:     "workspace source",
      location: "D:/github/samchon/typia/packages/typia/src/module.ts",
      module:   "module",
      matched:  true,
    },
    {
      name:     "root direct declarations",
      location: "D:/github/samchon/typia/packages/typia/src/basic.ts",
      module:   "module",
      matched:  true,
    },
    {
      name:     "packed root declarations",
      location: "/repo/node_modules/typia/lib/basic.d.ts",
      module:   "module",
      matched:  true,
    },
    {
      name:     "fake root declaration owner",
      location: "/repo/node_modules/fake-typia/lib/basic.d.ts",
      matched:  false,
    },
    {
      name:     "nested root-named helper",
      location: "/repo/node_modules/typia/lib/internal/basic.d.ts",
      matched:  false,
    },
    {
      name:     "fake package suffix",
      location: "C:/repo/node_modules/fake-typia/lib/plain.d.ts",
      matched:  false,
    },
    {
      name:     "nested lib file",
      location: "C:/repo/node_modules/typia/lib/internal/_isType.d.ts",
      matched:  false,
    },
  }

  for _, tc := range cases {
    t.Run(tc.name, func(t *testing.T) {
      module, matched := callExpressionTransformer_targetModule(tc.location)
      if matched != tc.matched || module != tc.module {
        t.Fatalf("targetModule(%q) = (%q, %v), expected (%q, %v)", tc.location, module, matched, tc.module, tc.matched)
      }
    })
  }
}
