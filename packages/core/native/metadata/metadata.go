// Package metadata is ttsc's in-memory representation of TypeScript types
// after they have been analyzed by the engine. It is the Go port of typia's
// `packages/core/src/schemas/metadata/*.ts` module and is the single IR
// consumed by every code generator in `../emitter`.
//
// Design guarantees:
//
//   - Zero dependencies outside the Go standard library. Schemas must be
//     trivially inspectable, JSON-serialisable, and debuggable.
//   - Mirrors the TypeScript class layout — file names match their TS siblings
//     (`MetadataAtomic.ts` ↔ `atomic.go`, etc.) so side-by-side diffs stay
//     legible.
//   - Pointers (`*T`) are used where the TS class uses `null` so the zero
//     value is unambiguous for callers.
//
// File layout:
//
//   - tag.go         TypeTag + TagMatrix (IMetadataTypeTag)
//   - atomic.go      AtomicKind, Atomic, Constant, Template
//   - container.go   ArrayType/Ref, TupleType/Ref, Property, ObjectType/Ref
//   - alias.go       AliasType, AliasRef
//   - special.go     Native, Escaped, Parameter, Function, SetRef, MapRef
//   - schema.go      Schema + accessor / predicate methods
//   - name.go        computeName() + safeName()
//   - jslit.go       JS literal rendering helpers
//   - collection.go  Collection registry for shared references
//   - format.go      format enum used by Metadata* tag validators
package metadata
