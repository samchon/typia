package emitter

import (
	"sort"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// atomicWithTags wraps the base typeof/... check of an atomic with each of
// its tags' validations. The tag matrix is treated as a product-of-sums:
// every row is AND-ed; rows are OR-ed together. Empty tag matrix falls
// through as just `base`.
func atomicWithTags(base, ve string, matrix metadata.TagMatrix) string {
	if len(matrix) == 0 {
		return base
	}
	rows := make([]string, 0, len(matrix))
	for _, row := range matrix {
		checks := make([]string, 0, len(row)+1)
		checks = append(checks, base)
		for _, tag := range row {
			if js := tagCheck(ve, tag); js != "" {
				checks = append(checks, js)
			}
		}
		rows = append(rows, "("+strings.Join(checks, " && ")+")")
	}
	if len(rows) == 1 {
		return rows[0]
	}
	sort.Strings(rows)
	return "(" + strings.Join(rows, " || ") + ")"
}
