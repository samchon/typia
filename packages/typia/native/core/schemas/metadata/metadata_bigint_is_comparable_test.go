package metadata

import (
  "encoding/json"
  "fmt"
  "testing"
)

// TestMetadataBigintIsComparable pins the property the whole representation
// rests on: two independently built values of the same bigint are `==`.
//
// A `MetadataConstantValue.Value` is compared with `==` inside the factories --
// the intersection tag assigner matches a child's constant against the merged
// parent's that way -- and every other value it can hold (`string`, `bool`, the
// number) is a comparable value. A pointer stand-in such as `*math/big.Int`
// builds a fresh allocation per literal, so those comparisons would test
// identity and, for bigints alone, silently decide "not the same constant":
// `(1n | 2n) & tags.Type<"int64">` lost its tag that way. This is the guard,
// held one level below the transform so a future change to the representation
// fails here rather than as a dropped tag three packages away.
//
//  1. Build the same value twice, independently, and compare with `==`.
//  2. Compare a different value, and a negative against its positive.
//  3. Check the two renderings every consumer reads: `fmt.Sprint` for the emit
//     and `encoding/json` for metadata a downstream tool marshals.
//
// @evidence contracts/testing.md#behavioral-verification Equality is evaluated on independently built values of the same and different bigints, including after boxing in an interface value and for a negative and its positive.
// @evidence contracts/testing.md#independent-expectations Go comparison semantics for the chosen representation are the oracle; the test pins that the constant value representation stays comparable with ==, which the factories rely on.
// @evidence contracts/testing.md#distinguishing-cases Equal, boxed equal, distinct and sign-flipped values separate comparability from identity.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It evaluates comparisons in memory with no filesystem fixture, process or native command build.
func TestMetadataBigintIsComparable(t *testing.T) {
  const digits = "9007199254740993"
  left := MetadataBigint{Text: digits}
  right := MetadataBigint{Text: digits}
  if left != right {
    t.Fatalf("two values of the same bigint must be ==: %v vs %v", left, right)
  }
  var boxed any = left
  if boxed != any(right) {
    t.Fatalf("the same bigint must stay == once boxed in the `any` a constant value holds")
  }
  if left == (MetadataBigint{Text: "9007199254740992"}) {
    t.Fatalf("distinct bigints must not compare equal")
  }
  if left == (MetadataBigint{Text: "-" + digits}) {
    t.Fatalf("a negative must not compare equal to its positive")
  }

  if got := fmt.Sprint(left); got != digits {
    t.Fatalf("fmt.Sprint must render the base-10 digits, got %q", got)
  }
  if got := fmt.Sprint(MetadataBigint{Text: "-5"}); got != "-5" {
    t.Fatalf("a negative must keep its sign, got %q", got)
  }

  encoded, err := json.Marshal(left)
  if err != nil {
    t.Fatalf("marshal bigint: %v", err)
  }
  if string(encoded) != digits {
    t.Fatalf("marshaled bigint must be the unquoted digits, got %s", encoded)
  }
  zero, err := json.Marshal(MetadataBigint{})
  if err != nil {
    t.Fatalf("marshal zero bigint: %v", err)
  }
  if string(zero) != "0" {
    t.Fatalf("the zero value must marshal as 0, got %s", zero)
  }
}
