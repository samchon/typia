package metadata

import "strconv"

// floatFormatG returns the shortest round-trippable base-10 representation of
// f, matching ECMAScript's default Number-to-string conversion for JS emitters.
// Extracted to its own file so tests can poke at edge cases (NaN/Inf) without
// mixing with the schema helpers.
func floatFormatG(f float64) string { return strconv.FormatFloat(f, 'g', -1, 64) }
