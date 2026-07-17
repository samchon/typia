package metadata

import (
  "regexp"
  "strings"
  "testing"
)

// TestMetadataCollectionGenericArgumentDot verifies only a type's own namespace
// qualification survives OpenAPI normalization as a dot.
//
// A dot in a Components Object key is read downstream as a namespace boundary:
// `JsonDescriptor.cascade` inherits the prefix component's description into the
// child. Normalization used to delete the angle brackets of `Gen<Ns.Inner>` and
// leave the argument's dot behind, so `GenNs.Inner` presented the unrelated
// `GenNs` interface as its parent — typia's and nestia's own
// `IPage<IShoppingSale.ISummary>` idiom, needing no contrived naming.
//
// Rewriting a dot must not merge two names that differ only by it, so a quoted
// literal's dot takes the escape-and-hash tier rather than the separator.
//
//  1. Preserve a real qualification, including a qualified generic's prefix.
//  2. Rewrite every dot that belongs to a flattened nested rendering.
//  3. Prove the rewrite keeps distinct names distinct and legal, and that the
//     LLM key space is deliberately left alone.
func TestMetadataCollectionGenericArgumentDot(t *testing.T) {
  // 1. AND 2. THE RULE
  expected := map[string]string{
    // a real namespace qualification is the whole point of the cascade
    "Merged.Child":      "Merged.Child",
    "A.B.C":             "A.B.C",
    "Plain":             "Plain",
    "__type":            "__type",
    "_":                 "_",
    "RecursiveA_x2F_B":  "RecursiveA_x2F_B",
    // a flattened type argument is not this type's namespace boundary
    "Gen<Ns.Inner>":     "GenNs-Inner",
    "IPage<IShop.ISum>": "IPageIShop-ISum",
    "Ns.Gen<Bar.Baz>":   "Ns.GenBar-Baz",
    "Gen<A.B, C.D>":     "GenA-BC-D",
    "Gen<Gen<A.B>>":     "GenGenA-B",
    // nor is a flattened union member's
    "Array<A.B | C.D>":  "ArrayA-BC-D",
    // no dot, no change
    "Gen<Plain>":        "GenPlain",
  }
  for input, want := range expected {
    if actual := MetadataCollection_replaceOpenApi(input); actual != want {
      t.Fatalf("OpenAPI name normalization: input=%q actual=%q expected=%q", input, actual, want)
    }
  }

  // 3. A UNICODE QUALIFICATION IS STILL A QUALIFICATION
  //
  // The accented rune is escaped, but the dot after it is a real namespace
  // boundary and must not be rewritten as a flattened one.
  if actual := MetadataCollection_replaceOpenApi("Café.Member"); strings.Contains(actual, ".") == false {
    t.Fatalf("a Unicode qualification lost its namespace boundary: actual=%q", actual)
  }

  // 4. REWRITING A DOT NEVER MERGES A LITERAL WITH ITS PEERS
  //
  // A quoted literal can own the separator itself, so a literal dot takes the
  // escape-and-hash tier instead of the separator. Without it `Recursive<"A.B">`
  // and `Recursive<"A-B">` would become one name, and the allocator would then
  // decide by discovery order which of the two keeps it.
  grammar := regexp.MustCompile(`^[a-zA-Z0-9.\-_]+$`)
  distinct := []string{
    `Recursive<"A.B">`,
    `Recursive<"A-B">`,
    `Recursive<"A_x2E_B">`,
    `Recursive<"AB">`,
    "Recursive<Plain>",
    "Recursive.A",
  }
  outputs := map[string]string{}
  for _, input := range distinct {
    actual := MetadataCollection_replaceOpenApi(input)
    if grammar.MatchString(actual) == false {
      t.Fatalf("illegal OpenAPI component name: input=%q output=%q", input, actual)
    }
    if previous, ok := outputs[actual]; ok {
      t.Fatalf("distinct names merged: first=%q second=%q output=%q", previous, input, actual)
    }
    outputs[actual] = input
  }

  // 5. NORMALIZATION IS NOT WHAT KEEPS EVERY NAME DISTINCT
  //
  // A qualified type argument and a quoted literal owning the separator do
  // normalize alike. Escaping out of that would cost every `IPage<IShop.ISum>`
  // key a hash, to separate names no real program declares together. The
  // allocator is the layer that bounds it: uniqueness is checked against every
  // id already handed out, so both types survive with their own key and neither
  // schema is dropped. Uniqueness must never rest on the separator alone.
  if MetadataCollection_replaceOpenApi("Recursive<A.B>") !=
    MetadataCollection_replaceOpenApi(`Recursive<"A-B">`) {
    t.Fatalf("this case no longer documents the residual; re-derive the note above")
  }
  taken := map[string]bool{}
  for _, input := range []string{"Recursive<A.B>", `Recursive<"A-B">`} {
    allocated := metadataCollection_allocateName(taken, MetadataCollection_replaceOpenApi(input))
    if taken[allocated] {
      t.Fatalf("a normalization collision dropped a type: input=%q id=%q", input, allocated)
    }
    taken[allocated] = true
  }

  // 6. THE LLM KEY SPACE IS DELIBERATELY UNTOUCHED
  //
  // Nothing reads a namespace parent out of an LLM `$defs` key or a
  // `reflect.name` result, so the rule is scoped to the OpenAPI key space and
  // this replacer keeps its existing contract.
  if actual := MetadataCollection_replace("Gen<Ns.Inner>"); actual != "GenNs.Inner" {
    t.Fatalf("the LLM key space changed shape: actual=%q", actual)
  }
}
