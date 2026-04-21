// Package analyzer bridges typescript-go's Checker output into ttsc's
// MetadataSchema IR. It is the Go port of typia's
// `packages/core/src/factories/MetadataFactory.ts` together with the
// `iterate_metadata_*` family in
// `packages/core/src/factories/internal/metadata/`.
//
// File layout mirrors the TypeScript original so side-by-side diffs stay
// legible:
//
//   - analyzer.go                     Analyzer type + constructors + entry
//   - iterate_metadata.go             the dispatcher
//   - iterate_metadata_atomic.go      string / number / boolean / bigint
//   - iterate_metadata_constant.go    literal values
//   - iterate_metadata_union.go       union + mergeInto helper
//   - iterate_metadata_intersection.go intersection + tag extraction path
//   - iterate_metadata_object.go      objects (+ recursive registry)
//   - iterate_metadata_array.go       arrays
//   - iterate_metadata_tuple.go       tuples
//   - native.go                       Date / Uint8Array / Map / Set / …
//   - tag.go                          typia.tag<…> extraction + attach
//   - type_key.go                     stable key / display-name helpers
//   - shim_type_string.go             Checker.typeToString access
//
// Phase 0 implements: atomics, literal constants, unions, intersections (tag
// merging), objects (with recursive registry), arrays, tuples, natives, and
// `any`. Aliases, maps, sets, templates, functions, escapes land in Phase 1
// as the programmers need them.
package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// Options mirrors typia's `MetadataFactory.IOptions` — the knobs callers can
// flip to change analyser behaviour (e.g. emit escape variants for Date).
type Options struct {
	// Escape controls whether Date/Uint8Array-style transformations are
	// extracted into `Escaped`. Phase 0 defaults to false.
	Escape bool
	// Constant controls extraction of literal values into the constant
	// bucket. Phase 0 defaults to true.
	Constant bool
	// Absorb matches typia's `absorb` option — tags on atomics are merged
	// across union members. Phase 0 defaults to true.
	Absorb bool
}

// DefaultOptions returns typia's common defaults (constant on, escape off,
// absorb on).
func DefaultOptions() Options { return Options{Constant: true, Absorb: true} }

// Analyzer holds the state shared between every `Walk` call inside a single
// transform. Creating a new Analyzer per `typia.is<T>()` emit is fine; the
// object Collection gets populated as we go so recursive types close.
type Analyzer struct {
	Checker    *shimchecker.Checker
	Options    Options
	Collection *metadata.Collection

	// visiting tracks types currently descending into so recursive
	// references resolve to the pre-registered placeholder instead of
	// infinitely recursing. Keyed by Type.Id() because tsgo can hand back
	// distinct pointers for the same semantic type mid-walk.
	visitingObjects map[string]*metadata.ObjectType
	visitingArrays  map[string]*metadata.ArrayType
	visitingTuples  map[string]*metadata.TupleType
}

// New returns a fresh analyzer with the given checker and options. If
// `collection` is nil, a fresh one is created.
func New(checker *shimchecker.Checker, opts Options, collection *metadata.Collection) *Analyzer {
	if collection == nil {
		collection = metadata.NewCollection()
	}
	return &Analyzer{
		Checker:         checker,
		Options:         opts,
		Collection:      collection,
		visitingObjects: make(map[string]*metadata.ObjectType),
		visitingArrays:  make(map[string]*metadata.ArrayType),
		visitingTuples:  make(map[string]*metadata.TupleType),
	}
}

// Walk is the public entry — ports `MetadataFactory.analyze` +
// `explore_metadata`. Returns (nil, false) when the type isn't supported yet
// so callers can bail gracefully.
func (a *Analyzer) Walk(t *shimchecker.Type) (*metadata.Schema, bool) {
	if a == nil || a.Checker == nil || t == nil {
		return nil, false
	}
	out := metadata.NewSchema()
	if !a.iterate(out, t) {
		return nil, false
	}
	return out, true
}

// FromType is the compatibility entrypoint used by the Phase 0 driver. It
// wraps a throwaway Analyzer.
func FromType(checker *shimchecker.Checker, t *shimchecker.Type) (*metadata.Schema, bool) {
	return New(checker, DefaultOptions(), nil).Walk(t)
}
