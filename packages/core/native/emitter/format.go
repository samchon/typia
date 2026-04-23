package emitter

import "strconv"

// formatFloatG emits the shortest round-trippable base-10 representation of
// f. Matches ECMAScript's Number-to-string for double values.
func formatFloatG(f float64) string { return strconv.FormatFloat(f, 'g', -1, 64) }
