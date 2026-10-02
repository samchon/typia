package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTemplateInterpolationTypeTagsTransform verifies constraints on captured template interpolation values.
//
// A constraint attached to an interpolated type applies to that captured value, not merely the surrounding template string; pattern membership alone would accept a violating placeholder.
//
// 1. Multiple constrained placeholder positions exercise numeric/string captures; whole-template length tags are checked by the neighboring template tag case.
// 2. The emitted checker contains each authored capture and re-extraction fragment for constrained placeholders.
//
// @evidence contracts/testing.md#behavioral-verification The emitted checker contains each authored capture and re-extraction fragment for constrained placeholders.
// @evidence contracts/testing.md#independent-expectations A constraint attached to an interpolated type applies to that captured value, not merely the surrounding template string; pattern membership alone would accept a violating placeholder.
// @evidence contracts/testing.md#distinguishing-cases Multiple constrained placeholder positions exercise numeric/string captures; whole-template length tags are checked by the neighboring template tag case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTemplateInterpolationTypeTagsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestTemplateInterpolationTypeTagsTransform(t *testing.T) {
  project := templateInterpolationTypeTagsProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("template interpolation tags transform failed: code=%d stderr=\n%s", code, errText)
  }
  // The constrained number placeholder must be captured and re-extracted, and
  // the int32 tag must reach the parsed numeric value.
  for _, needle := range []string{
    `RegExp(/^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)%$/).test(input)`,
    `Number(RegExp(/^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)%$/).exec(input)[1])`,
    `_isTypeInt32(Number(RegExp(`,
    // constrained string placeholders capture newlines too
    `RegExp(/^L:([\s\S]*)$/)`,
    // bigint placeholders capture an integer and parse via BigInt(...)
    `BigInt(RegExp(/^#([+-]?\d+)$/).exec(input)[1])`,
  } {
    if !strings.Contains(out, needle) {
      t.Fatalf("emitted checker should capture and re-extract constrained placeholders (missing %q):\n%s", needle, out)
    }
  }
}

func templateInterpolationTypeTagsProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "template-interp-tags-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(templateLiteralTypeTagsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(templateInterpolationTypeTagsSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const templateInterpolationTypeTagsSource = `import typia, { tags } from "typia";

type Percent = ` + "`${number & tags.Minimum<0> & tags.Maximum<100>}%`" + `;
type IntStr = ` + "`${number & tags.Type<\"int32\">}`" + `;
type Check = ` + "`CHECK${string & tags.MinLength<32> & tags.MaxLength<32> & tags.Pattern<\"^[0-9a-fA-F]+$\">}`" + `;
type Range = ` + "`${number & tags.Minimum<0>}-${number & tags.Maximum<100>}`" + `;
type Unit =
  | (` + "`${number & tags.Minimum<100>}px`" + `)
  | (` + "`${number & tags.Maximum<10>}em`" + `);
type Combined = ` + "`${number & tags.Minimum<0> & tags.Maximum<99>}px`" + ` & tags.MaxLength<3>;
type Multiline = ` + "`L:${string & tags.MinLength<4>}`" + `;
type BigRange = ` + "`#${bigint & tags.Minimum<10n> & tags.Maximum<20n>}`" + `;
type BigExcl = ` + "`#${bigint & tags.Minimum<0n> & tags.Exclude<[5n]>}`" + `;
type Adjacent = ` + "`${string}${number & tags.Minimum<10>}`" + `;
type Infix = ` + "`a${string & tags.MaxLength<2>}b`" + `;
type NonAdj = ` + "`${string}X${string & tags.MinLength<3>}`" + `;
type StrNum = ` + "`${string & tags.MaxLength<2>}-${number}`" + `;
type NumStr = ` + "`${number & tags.Maximum<9>}-${string & tags.MinLength<2>}`" + `;
type Dec = ` + "`${number & tags.Maximum<1.2>}.${number}`" + `;
type BigDot = ` + "`${bigint}.${number & tags.Minimum<5>}`" + `;
type Triple = ` + "`${string & tags.MaxLength<2>}${string & tags.MinLength<2>}${number & tags.Minimum<10>}`" + `;
type AmbiguousUnion = Adjacent | NonAdj;
interface DynKey {
  [key: ` + "`slot${number & tags.Minimum<0> & tags.Maximum<9>}`" + `]: string;
}
interface AmbiguousDynKey {
  [key: ` + "`${string}${number & tags.Minimum<10>}`" + `]: string;
}

export const isPercent = typia.createIs<Percent>();
export const validatePercent = typia.createValidate<Percent>();
export const isIntStr = typia.createIs<IntStr>();
export const isCheck = typia.createIs<Check>();
export const isRange = typia.createIs<Range>();
export const isUnit = typia.createIs<Unit>();
export const isCombined = typia.createIs<Combined>();
export const isMultiline = typia.createIs<Multiline>();
export const isBigRange = typia.createIs<BigRange>();
export const isBigExcl = typia.createIs<BigExcl>();
export const isAdjacent = typia.createIs<Adjacent>();
export const validateAdjacent = typia.createValidate<Adjacent>();
export const assertAdjacent = typia.createAssert<Adjacent>();
export const isInfix = typia.createIs<Infix>();
export const isNonAdj = typia.createIs<NonAdj>();
export const isStrNum = typia.createIs<StrNum>();
export const isNumStr = typia.createIs<NumStr>();
export const isDec = typia.createIs<Dec>();
export const isBigDot = typia.createIs<BigDot>();
export const isTriple = typia.createIs<Triple>();
export const isAmbiguousUnion = typia.createIs<AmbiguousUnion>();
export const equalsDynKey = typia.createEquals<DynKey>();
export const equalsAmbiguousDynKey = typia.createEquals<AmbiguousDynKey>();
export const randomPercent = typia.createRandom<Percent>();
export const randomAdjacent = typia.createRandom<Adjacent>();
export const stringifyAdjacent = typia.json.createValidateStringify<{ value: Adjacent }>();
export const schemaAdjacent = typia.json.schemas<[Adjacent]>();
`
