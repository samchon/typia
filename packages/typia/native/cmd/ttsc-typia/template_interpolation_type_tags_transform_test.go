package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestTemplateInterpolationTypeTagsTransform verifies type tags placed inside a
// template-literal interpolation.
//
// For years a `tags.*` constraint inside `${...}` was silently ignored: the
// template lowered each placeholder to a bare type-shaped regex span with
// nowhere to carry "and the captured value is in range", so
// “ `${number & Minimum<0> & Maximum<100>}%` “ validated as “ `${number}%` “
// (#1965), “ `${number & Type<"int32">}` “ accepted `"0.1"` (#1175), and
// “ `CHECK${string & MinLength<32> & Pattern<…>}` “ validated as `/^CHECK(.*)/`
// (#1202). The checker now captures each constrained placeholder and runs the
// placeholder's own tag predicates against the parsed substring.
//
//  1. Transform fixtures covering the three historical reproductions plus a
//     two-placeholder template, a union of differently-tagged templates, and a
//     whole-string tag (#1635) combined with an interpolation tag.
//  2. Require the emitted checker to capture and re-extract each placeholder.
//  3. Execute runtime cases: structurally-matching but tag-violating strings
//     must fail, in-range/conforming strings must pass, and validate must name
//     the violated placeholder tag.
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
  templateInterpolationTypeTagsRunRuntimeCases(t, project, out)
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

func templateInterpolationTypeTagsRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  // The int32 tag and the random generator pull two more internals than the
  // common stub set covers; stub them before the shared rewrite asserts that no
  // `typia/lib/internal/*` import survives.
  extraStubs := map[string]string{
    "is-type-int32-stub.cjs": "module.exports._isTypeInt32 = (value) => Number.isInteger(value) && -2147483648 <= value && value <= 2147483647;\n",
    "random-number-stub.cjs": templateInterpolationTypeTagsRandomNumberStub,
  }
  for name, content := range extraStubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_isTypeInt32")`, `require("./is-type-int32-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_randomNumber")`, `require("./random-number-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(templateInterpolationTypeTagsRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("template interpolation tags runtime cases failed: %v\n%s", err, output)
  }
}

const templateInterpolationTypeTagsRandomNumberStub = `module.exports._randomNumber = (schema) => {
  const min = schema.minimum ?? 0;
  const max = schema.maximum ?? 100;
  return Math.min(max, Math.max(min, min + (max - min) / 2));
};
`

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
interface DynKey {
  [key: ` + "`slot${number & tags.Minimum<0> & tags.Maximum<9>}`" + `]: string;
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
export const isInfix = typia.createIs<Infix>();
export const isNonAdj = typia.createIs<NonAdj>();
export const isStrNum = typia.createIs<StrNum>();
export const isNumStr = typia.createIs<NumStr>();
export const isDec = typia.createIs<Dec>();
export const isBigDot = typia.createIs<BigDot>();
export const equalsDynKey = typia.createEquals<DynKey>();
export const randomPercent = typia.createRandom<Percent>();
`

const templateInterpolationTypeTagsRuntimeRunner = `const mod = require("./main.cjs");

const hex32 = "0123456789abcdef0123456789abcdef";

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + " but got " + actual);
  }
};

// #1965 — numeric range inside the interpolation.
expect("percent 50", mod.isPercent("50%"), true);
expect("percent 0", mod.isPercent("0%"), true);
expect("percent 100", mod.isPercent("100%"), true);
expect("percent 33.5", mod.isPercent("33.5%"), true);
expect("percent -1", mod.isPercent("-1%"), false);
expect("percent 150", mod.isPercent("150%"), false);
// The base number pattern matches "1e3", but Maximum<100> rejects 1000.
expect("percent 1e3", mod.isPercent("1e3%"), false);
expect("percent missing suffix", mod.isPercent("50"), false);
expect("percent non-number", mod.isPercent("abc%"), false);

// #1175 — int32 tag inside the interpolation must reject decimals/overflow.
expect("int 42", mod.isIntStr("42"), true);
expect("int -5", mod.isIntStr("-5"), true);
expect("int 0.1", mod.isIntStr("0.1"), false);
expect("int overflow", mod.isIntStr("2147483648"), false);

// #1202 — string length + pattern inside the interpolation.
expect("check valid", mod.isCheck("CHECK" + hex32), true);
expect("check short", mod.isCheck("CHECK" + hex32.slice(1)), false);
expect("check long", mod.isCheck("CHECK" + hex32 + "0"), false);
expect("check non-hex", mod.isCheck("CHECK" + "g".repeat(32)), false);
expect("check nomatch", mod.isCheck("nomatch"), false);

// Two constrained placeholders — capture indices [1] and [2] must stay distinct.
expect("range ok", mod.isRange("5-50"), true);
expect("range min violated", mod.isRange("-1-50"), false);
expect("range max violated", mod.isRange("5-150"), false);

// Union of differently-tagged templates — the inline path per member.
expect("unit px ok", mod.isUnit("150px"), true);
expect("unit px violated", mod.isUnit("50px"), false);
expect("unit em ok", mod.isUnit("5em"), true);
expect("unit em violated", mod.isUnit("50em"), false);

// Whole-string tag (#1635) composed with an interpolation tag (#1968).
expect("combined ok", mod.isCombined("9px"), true);
expect("combined length violated", mod.isCombined("99px"), false);
expect("combined range violated", mod.isCombined("-1px"), false);

// A string placeholder spanning a newline: the captured value must include the
// line break, so MinLength<4> sees the whole "ab\ncd" (5 chars), not just "ab".
expect("multiline spans newline", mod.isMultiline("L:ab\ncd"), true);
expect("multiline too short", mod.isMultiline("L:x"), false);

// A bigint placeholder is captured as an integer only, so BigInt(...) is safe:
// an in-range integer passes, out-of-range fails, and a decimal string is
// rejected structurally (never reaching a throwing BigInt(".5") call).
expect("bigint in range", mod.isBigRange("#15"), true);
expect("bigint below", mod.isBigRange("#5"), false);
expect("bigint above", mod.isBigRange("#25"), false);
expect("bigint decimal rejected", mod.isBigRange("#15.5"), false);
expect("bigint non-digit rejected", mod.isBigRange("#abc"), false);

// bigint Exclude exercises check_exclude_literal's BigInt-literal branch.
expect("bigint excluded value", mod.isBigExcl("#5"), false);
expect("bigint allowed value", mod.isBigExcl("#3"), true);
expect("bigint exclude negative", mod.isBigExcl("#-1"), false);

// Adjacent variable-width placeholders fall back (tag unenforced) rather than a
// greedy-split false negative: "abc123" is a valid string-then-number(>=10)
// split (string="abc", number=123). If the number tag were wrongly enforced on
// the greedy split, the number group would be "3" and this would be false.
expect("adjacent placeholders fall back", mod.isAdjacent("abc123"), true);

// A sole string fenced by literals is enforced: the ^/$ anchors pin "a" and the
// final "b", so the split string="XbY" (length 3) is unique and exceeds
// MaxLength<2>, while "aXb" (string="X", length 1) is in range.
expect("sole string fenced by literals, too long", mod.isInfix("aXbYb"), false);
expect("sole string fenced by literals, in range", mod.isInfix("aXb"), true);

// A string with a placeholder sibling falls back (greedy ([\s\S]*) could overrun
// the fence), so its tag is unenforced rather than a false negative: "aXbXcd" is
// a valid string-X-string(>=3) split (second="bXcd") and stays true.
expect("string with sibling falls back", mod.isNonAdj("aXbXcd"), true);

// string-first across a separator the number's exponent can absorb: the string
// falls back (greedy could capture "xy-1e"), so "xy-1e-9" is no longer a false
// negative (string="xy" length 2 <= 2 is a valid split).
expect("strnum string-first falls back", mod.isStrNum("xy-1e-9"), true);

// number-first: "-" is not number-extendable, so both placeholders are pinned
// and enforced — number=50 > 9 fails, string="a" length 1 < 2 fails.
expect("numstr ok", mod.isNumStr("5-ab"), true);
expect("numstr number violated", mod.isNumStr("50-ab"), false);
expect("numstr string violated", mod.isNumStr("5-a"), false);

// number-"."-number: "." is a decimal extension, so the split slides ("1.9.0"
// splits as 1.9|0 or 1|9.0); the placeholder falls back, so the valid first="1"
// (<= 1.2) split is no longer a false negative.
expect("dec decimal-separator falls back", mod.isDec("1.9.0"), true);

// An untagged bigint lowers to the decimal NUMBER span, so it absorbs the ".";
// the number after it falls back, so "1.9.4" (valid as bigint=1 | number=9.4 >=
// 5) is not a false negative.
expect("bigint-dot-number falls back", mod.isBigDot("1.9.4"), true);

// A dynamic index key typed as a tagged-interpolation template (the
// check_dynamic_key path): a key whose number violates the tag no longer
// satisfies the index signature, so a strict equals rejects it.
expect("dynkey in range", mod.equalsDynKey({ slot5: "x" }), true);
expect("dynkey both ends", mod.equalsDynKey({ slot0: "x", slot9: "y" }), true);
expect("dynkey out of range", mod.equalsDynKey({ slot50: "x" }), false);
expect("dynkey non-number", mod.equalsDynKey({ slotABC: "x" }), false);

// validate must name the violated placeholder tag, not just the template.
const tooBig = mod.validatePercent("150%");
if (tooBig.success !== false) {
  throw new Error("validate should reject the out-of-range percent");
}
if (!tooBig.errors.some((e) => e.expected.includes("Maximum<100>"))) {
  throw new Error("validate error should name Maximum<100>: " + JSON.stringify(tooBig.errors));
}
if (mod.validatePercent("50%").success !== true) {
  throw new Error("validate should accept the in-range percent");
}

// random output must round-trip through the validator.
const generator = {
  array: (closure, count) => {
    const length = count ?? 3;
    return Array.from({ length }, (_, i) => closure(i));
  },
};
for (let i = 0; i < 100; ++i) {
  const value = mod.randomPercent(generator);
  if (mod.isPercent(value) !== true) {
    throw new Error("random percent did not round-trip: " + JSON.stringify(value));
  }
}
`
