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
// The current analyzer implements: atomics, literal constants, unions,
// intersections (tag merging), objects (with recursive registry), arrays,
// tuples, natives, and `any`. Aliases, maps, sets, templates, functions, and
// escapes can be added incrementally as more programmers need them.
package analyzer

import (
	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// Options mirrors typia's `MetadataFactory.IOptions` — the knobs callers can
// flip to change analyser behaviour (e.g. emit escape variants for Date).
type Options struct {
	// Escape controls whether Date/Uint8Array-style transformations are
	// extracted into `Escaped`. The default is false.
	Escape bool
	// Constant controls extraction of literal values into the constant
	// bucket. The default is true.
	Constant bool
	// Absorb matches typia's `absorb` option — tags on atomics are merged
	// across union members. The default is true.
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
	return a.WalkWithTypeNode(t, nil)
}

// WalkWithTypeNode prefers the resolved checker type, but falls back to the
// explicit syntax node when tsgo collapses a constrained type to `any`
// (currently observed on `string & tags.Format<...>`-style intersections).
func (a *Analyzer) WalkWithTypeNode(t *shimchecker.Type, typeNode *ast.Node) (*metadata.Schema, bool) {
	if a == nil {
		return nil, false
	}
	if a.Checker == nil {
		if typeNode != nil {
			return a.walkTypeNode(typeNode)
		}
		return nil, false
	}

	syntaxPreferred := false
	if typeNode != nil {
		syntaxPreferred = t == nil || t.Flags()&shimchecker.TypeFlagsAny != 0
		if !syntaxPreferred {
			switch typeNode.Kind {
			case ast.KindIntersectionType,
				ast.KindTupleType,
				ast.KindArrayType,
				ast.KindTypeLiteral,
				ast.KindOptionalType,
				ast.KindRestType,
				ast.KindStringKeyword,
				ast.KindNumberKeyword,
				ast.KindBooleanKeyword,
				ast.KindBigIntKeyword,
				ast.KindLiteralType,
				ast.KindNullKeyword,
				ast.KindUndefinedKeyword,
				ast.KindVoidKeyword,
				ast.KindTemplateLiteralType:
				syntaxPreferred = true
			case ast.KindTypeReference:
				if ref := typeNode.AsTypeReferenceNode(); ref != nil {
					if referencedInterfaceDeclaration(a.Checker, ref, t) != nil ||
						aliasDeclarationTargetTypeAlias(a.Checker, ref) != nil {
						syntaxPreferred = true
					}
				}
			}
		}
		if syntaxPreferred {
			if out, ok := a.walkTypeNode(typeNode); ok {
				return out, true
			}
		}
	}

	var checkerOut *metadata.Schema
	checkerOk := false
	if t != nil {
		checkerOut = metadata.NewSchema()
		checkerOk = a.iterate(checkerOut, t)
	}

	if typeNode != nil {
		if !checkerOk || schemaLooksDegraded(checkerOut) {
			if out, ok := a.walkTypeNode(typeNode); ok {
				return out, true
			}
		}
	}

	if checkerOk {
		return checkerOut, true
	}
	if typeNode != nil {
		return a.walkTypeNode(typeNode)
	}
	return nil, false
}

func schemaLooksDegraded(schema *metadata.Schema) bool {
	if schema == nil || schema.Empty() {
		return true
	}
	return schema.Name() == "unknown"
}

// FromType is the convenience entrypoint used by the standalone rewriter. It
// wraps a throwaway Analyzer.
func FromType(checker *shimchecker.Checker, t *shimchecker.Type) (*metadata.Schema, bool) {
	return New(checker, DefaultOptions(), nil).Walk(t)
}
