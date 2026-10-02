package main

import (
  "strings"
  "testing"
)

// TestCompareLessNaNTransform verifies NaN-last total ordering.
//
// Relational comparison treats NaN as equal to every value because both `<`
// and `>` return false. The compare contract instead needs a total scalar order
// so its documented two-direction sort comparator never collapses distinct
// numeric or Date values.
//
//  1. Transform direct and factory comparators over scalars and containers.
//  2. Require the scalar comparator to distinguish self-unequal operands before
//     relational comparison, placing NaN after ordinary values.
//  3. Require Date comparison to retain timestamp conversion.
//
// @evidence contracts/testing.md#behavioral-verification The emitted scalar comparator checks both operands for self-inequality, equates two NaNs, places a single NaN last and retains ordinary relational comparison; Date emission still converts timestamps.
// @evidence contracts/testing.md#independent-expectations NaN is the only JavaScript numeric value unequal to itself; checking both operands before relational comparisons implements the documented NaN-last total order without coercing other scalar kinds. Date ordering compares timestamps under the same numeric rule.
// @evidence contracts/testing.md#distinguishing-cases The predicate text distinguishes left-only, right-only and both-NaN branches from ordinary relational ordering, and the fixture combines direct/factory scalar, Date, array, tuple, nested and mixed scalar emissions.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestCompareLessNaNTransform as a unit test through the captured in-process runTransform helper. It inspects generated comparator decisions and starts no JavaScript runtime.
func TestCompareLessNaNTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "compare-less-nan-", compareLessNaNSource)
  js := compareEqualCoverTransform(t, project)
  for _, expected := range []string{
    "x !== x ? (y !== y ? 0 : 1) : y !== y ? -1 : x < y ? -1 : x > y ? 1 : 0",
    ".getTime()",
  } {
    if !strings.Contains(js, expected) {
      t.Fatalf("NaN-last comparator is missing %q:\n%s", expected, js)
    }
  }

}

const compareLessNaNSource = `import typia from "typia";

export const lessNumber = typia.compare.createLess<number>();
export const lessNumberDirect = (x: number, y: number) => typia.compare.less<number>(x, y);
export const lessDate = typia.compare.createLess<Date>();
export const lessArray = typia.compare.createLess<number[]>();
export const lessTuple = typia.compare.createLess<[number, Date]>();
export const lessNested = typia.compare.createLess<{ value: number }>();
export const lessMixed = typia.compare.createLess<number | string>();
`
