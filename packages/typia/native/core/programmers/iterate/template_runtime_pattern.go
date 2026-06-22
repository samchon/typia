package iterate

import (
  "fmt"
  "strings"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

// templateCapture records a template-literal interpolation whose placeholder
// carries a runtime-checkable type tag. The structural regex keeps a capturing
// group around that placeholder so the checker can re-extract the matched
// substring, parse it to the placeholder's base type, and run the placeholder's
// own tag predicates against it (#1968).
type templateCapture struct {
  // Index is the 1-based position of the capturing group inside the structural
  // regex, i.e. the `match[Index]` slot that holds the placeholder substring.
  Index int
  // Kind is the placeholder base type: "number", "bigint", or "string". It
  // selects the coercion (`Number(...)` / `BigInt(...)` for the numeric kinds,
  // the raw substring for string) and which transpiler owns the value checks.
  Kind string
  // Atomic is the constrained primitive whose tag matrix drives the conditions.
  Atomic *nativemetadata.MetadataAtomic
}

// template_runtime_pattern builds the structural regex of a template literal for
// the runtime checker and, alongside it, the capture map of every constrained
// interpolation placeholder.
//
// It mirrors template_to_pattern's structural output verbatim for every
// non-constrained element, so templates without a runtime-checkable
// interpolation tag emit exactly the same pattern as before (preserving the
// single-`test()` fast path and the #1635 whole-string behavior). The only
// structural change is around a constrained placeholder: a numeric one is
// wrapped in a capturing group, a bigint one is captured as an integer
// (`([+-]?\d+)`, keeping `BigInt(...)` safe), and a string one is captured with
// a newline-inclusive `([\s\S]*)` (instead of the bare `(.*)`) so the tag check
// sees the placeholder's whole value even across a line break.
//
// json.schema keeps calling metadata_to_pattern directly, so it stays on the
// historical lossy pattern (no capture, no sub-range enforcement) — see #1968's
// schema-lossiness decision.
func template_runtime_pattern(row []*nativemetadata.MetadataSchema) (string, []templateCapture) {
  parts := make([]string, 0, len(row))
  captures := []templateCapture{}
  running := 0
  for i, meta := range row {
    sub := metadata_to_pattern(struct {
      top      bool
      metadata *nativemetadata.MetadataSchema
    }{
      top:      false,
      metadata: meta,
    })
    if atomic, kind, ok := template_constrained_capture(meta); ok && template_clear_boundary(row, i) {
      switch kind {
      case "number":
        // A bare numeric placeholder lowers to a non-capturing pattern, so wrap
        // it; the wrapping paren is the next capturing group.
        sub = "(" + sub + ")"
      case "bigint":
        // The shared number pattern admits decimals/exponents, but those make
        // `BigInt(...)` throw and no bigint stringifies that way. Capture an
        // integer only, so the extraction parses safely.
        sub = "([+-]?\\d+)"
      default:
        // A string placeholder lowers to "(.*)", but `.` excludes newlines,
        // so a value spanning a line break would hand the tag check only the
        // first line (under-reporting length, mismatching Pattern). Capture
        // every character instead, anchored by PatternUtil.Fix.
        sub = "([\\s\\S]*)"
      }
      captures = append(captures, templateCapture{
        Index:  running + 1,
        Kind:   kind,
        Atomic: atomic,
      })
    }
    running += template_count_capturing_groups(sub)
    parts = append(parts, sub)
  }
  return nativeutils.PatternUtil.Fix(strings.Join(parts, "")), captures
}

// template_clear_boundary reports whether the placeholder at row[i] is delimited
// strongly enough that the greedy structural regex assigns it a unique — hence
// correct — substring. An ambiguous placeholder falls back to structural-only
// matching (tag unenforced, as before) rather than risking a false negative.
//
// Two adjacent variable-width placeholders slide their shared boundary iff the
// left one can extend over the first character of the literal between them: a
// smaller (non-greedy) split exists exactly when the left variable's match could
// grow rightward past it. So the placeholder is captured only when, on each side,
// the nearest variable neighbor cannot absorb the separating literal's first
// character — `template_boundary_safe` checks that with `template_right_extends`.
//
// Examples (all confirmed by regex semantics):
//   - `${n}-${n}` (#1965): "-" is not in a number's right-extension set, so both
//     numbers are pinned and enforced.
//   - `${number}.${number}` / IP grids: "." extends a number (decimal), so the
//     split slides ("5.9.1.1.1" splits as 5.9|… or 5|9.1|…) — fall back.
//   - `${string}-${number}` / `${string}X${string}`: a string absorbs any
//     character, so a string with any sibling falls back.
//   - `a${string}b` / `prefix${string}suffix` / `${number}%` / `CODE-${string}`:
//     sole placeholder, the `^`/`$` anchors pin both ends — enforced.
func template_clear_boundary(row []*nativemetadata.MetadataSchema, i int) bool {
  return template_boundary_safe(row, i, -1) && template_boundary_safe(row, i, 1)
}

// template_boundary_safe reports whether row[i]'s boundary in direction dir
// (-1 left, +1 right) is pinned. The template edge or an immediate literal whose
// first character the relevant variable cannot absorb pins it; an immediate
// variable neighbor (no separating literal) never does.
func template_boundary_safe(row []*nativemetadata.MetadataSchema, i int, dir int) bool {
  j := i + dir
  if j < 0 || j >= len(row) {
    return true // template start/end
  }
  if template_is_literal(row[j]) == false {
    return false // a variable-width placeholder sits flush against row[i]
  }
  k := j + dir
  if k < 0 || k >= len(row) {
    return true // literal then the template edge
  }
  // row[k] is the nearest variable across the literal row[j]. The boundary slides
  // iff the variable on the row[i] side can extend over the literal's first
  // character: rightward that is row[i] itself, leftward it is the left variable.
  absorber := row[i]
  if dir < 0 {
    absorber = row[k]
  }
  ch, ok := template_literal_first(row[j])
  if ok == false {
    return true
  }
  return template_right_extends(template_variable_kind(absorber), ch) == false
}

// template_variable_kind returns the base type a variable placeholder matches:
// "number", "bigint", or "string". Anything else (boolean, unions, constants)
// is treated as "string" — conservatively absorbing, so its neighbor falls back.
func template_variable_kind(meta *nativemetadata.MetadataSchema) string {
  if meta != nil && meta.Bucket() == 1 && len(meta.Atomics) == 1 {
    switch meta.Atomics[0].Type {
    case "number", "bigint":
      return meta.Atomics[0].Type
    }
  }
  return "string"
}

// template_right_extends reports whether a variable of the given kind, having
// matched up to a boundary, could extend its match over ch. number and bigint
// placeholders both lower to PatternUtil.NUMBER (metadata_to_pattern), which ends
// in a digit and can grow through another digit, a decimal point, or an exponent
// marker — the leading sign cannot follow a digit. (A constrained bigint is
// captured as integer-only, but an unconstrained or fallen-back bigint neighbor
// still matches the decimal/exponent NUMBER span, so it absorbs the same set.) A
// string matches every character.
func template_right_extends(kind string, ch rune) bool {
  switch kind {
  case "number", "bigint":
    return (ch >= '0' && ch <= '9') || ch == '.' || ch == 'e' || ch == 'E'
  default:
    return true
  }
}

// template_literal_first returns the first character of a literal segment's text.
func template_literal_first(meta *nativemetadata.MetadataSchema) (rune, bool) {
  if meta == nil || len(meta.Constants) == 0 || len(meta.Constants[0].Values) == 0 {
    return 0, false
  }
  runes := []rune(fmt.Sprint(meta.Constants[0].Values[0].Value))
  if len(runes) == 0 {
    return 0, false
  }
  return runes[0], true
}

// template_is_literal reports whether a row element is a single fixed literal
// segment (exactly one constant value), i.e. a fixed-width boundary between
// placeholders.
func template_is_literal(meta *nativemetadata.MetadataSchema) bool {
  return meta != nil && meta.IsConstant() && meta.Size() == 1
}

// template_constrained_capture reports whether a template placeholder is a
// simple primitive (`number`, `bigint`, or `string`) carrying a fully
// runtime-checkable tag matrix, returning its atomic and base-type kind. Only
// such placeholders earn a capture group plus extraction-based conditions.
//
// The matrix must be fully constrained — every OR row contributes at least one
// validate-able tag. A row with no validate-able tag accepts every value of the
// base type, which would unconstrain the whole matrix; honoring only the
// validate-able rows would then reject values the type accepts. Such
// placeholders (and `boolean`/union/constant placeholders, and tags with no
// `Validate`) fall back to the historical behavior: structural match only, with
// the tag left unenforced rather than emitting a broken check.
func template_constrained_capture(meta *nativemetadata.MetadataSchema) (*nativemetadata.MetadataAtomic, string, bool) {
  if meta == nil || meta.Bucket() != 1 || len(meta.Atomics) != 1 {
    return nil, "", false
  }
  if meta.IsRequired() == false || meta.Nullable {
    return nil, "", false
  }
  atomic := meta.Atomics[0]
  if atomic == nil || (atomic.Type != "number" && atomic.Type != "bigint" && atomic.Type != "string") {
    return nil, "", false
  }
  if template_fully_constrained(atomic.Tags) == false {
    return nil, "", false
  }
  return atomic, atomic.Type, true
}

// template_fully_constrained reports whether every OR row of a tag matrix holds
// at least one validate-able tag, so no row admits the base type unconditionally.
func template_fully_constrained(tags [][]nativemetadata.IMetadataTypeTag) bool {
  if len(tags) == 0 {
    return false
  }
  for _, row := range tags {
    validating := false
    for _, tag := range row {
      if tag.Validate != "" {
        validating = true
        break
      }
    }
    if validating == false {
      return false
    }
  }
  return true
}

// template_count_capturing_groups counts the capturing groups in a regex
// fragment: an unescaped `(` that does not open an inline group `(?...)`. It
// drives the running capture index, so it must agree with how a JS regex engine
// numbers groups left to right.
func template_count_capturing_groups(pattern string) int {
  runes := []rune(pattern)
  count := 0
  backslashes := 0
  for i, ch := range runes {
    if ch == '\\' {
      backslashes++
      continue
    }
    if ch == '(' && backslashes%2 == 0 {
      if i+1 >= len(runes) || runes[i+1] != '?' {
        count++
      }
    }
    backslashes = 0
  }
  return count
}
