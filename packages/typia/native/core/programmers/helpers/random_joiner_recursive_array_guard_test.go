package helpers

import (
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestRandomJoinerRequiresRecursiveArrayGuardFor scopes depth guards to owners.
//
// A recursive object helper can visit arrays whose element type is another
// recursive object. Those arrays should expose a `recursive` schema hint, but
// they must not be depth-stopped unless the array is the variable edge back to
// the current recursive owner.
//
//  1. Require guards for direct recursive arrays and fixed owner-object cycles.
//  2. Keep nested array, set, and map boundaries out of the required-cutoff
//     decision while still detecting that an owner path exists below them.
//  3. Check tuple owners and map-key graph cycles.
//  4. Ignore arrays of a separate recursive object when the current owner differs.
func TestRandomJoinerRequiresRecursiveArrayGuardFor(t *testing.T) {
  stringMeta := randomJoinerGuardAtomic("string")
  direct := nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
    Name:      "Direct",
    Value:     stringMeta,
    Recursive: true,
  })
  if !RandomJoiner.RequiresRecursiveArrayGuardFor(RandomJoiner_RecursiveArrayGuardProps{Array: direct}) {
    t.Fatal("direct recursive array should require a depth guard")
  }

  owner := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "Owner"})
  child := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "Child"})
  child.Properties = []*nativemetadata.MetadataProperty{
    nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{
      Key:   stringMeta,
      Value: randomJoinerGuardObject(owner),
    }),
  }
  if !RandomJoiner.RequiresRecursiveArrayGuardFor(RandomJoiner_RecursiveArrayGuardProps{
    Array:  randomJoinerGuardArray(randomJoinerGuardObject(child), false),
    Object: owner,
  }) {
    t.Fatal("array element with fixed edge to owner should require a depth guard")
  }

  tuple := nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{Name: "Tuple"})
  if !RandomJoiner.RequiresRecursiveArrayGuardFor(RandomJoiner_RecursiveArrayGuardProps{
    Array: randomJoinerGuardArray(randomJoinerGuardTuple(tuple), false),
    Tuple: tuple,
  }) {
    t.Fatal("array element with fixed edge to owner tuple should require a depth guard")
  }

  foreign := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "Foreign"})
  foreign.Properties = []*nativemetadata.MetadataProperty{
    nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{
      Key:   stringMeta,
      Value: randomJoinerGuardArraySchema(randomJoinerGuardObject(foreign), false),
    }),
  }
  if RandomJoiner.RequiresRecursiveArrayGuardFor(RandomJoiner_RecursiveArrayGuardProps{
    Array:  randomJoinerGuardArray(randomJoinerGuardObject(foreign), false),
    Object: owner,
  }) {
    t.Fatal("separate recursive object should not force the current array to be depth-stopped")
  }

  for name, value := range map[string]*nativemetadata.MetadataSchema{
    "nested_array": randomJoinerGuardArraySchema(randomJoinerGuardObject(owner), false),
    "set":          randomJoinerGuardSet(randomJoinerGuardObject(owner)),
    "map":          randomJoinerGuardMap(stringMeta, randomJoinerGuardObject(owner)),
  } {
    props := RandomJoiner_RecursiveArrayGuardProps{
      Array:  randomJoinerGuardArray(value, false),
      Object: owner,
    }
    if RandomJoiner.RequiresRecursiveArrayGuardFor(RandomJoiner_RecursiveArrayGuardProps{
      Array:  props.Array,
      Object: props.Object,
    }) {
      t.Fatalf("%s boundary should terminate recursion inside the nested container", name)
    }
    if !RandomJoiner.HasRecursiveOwnerPathFor(props) {
      t.Fatalf("%s boundary should still expose an owner path for depth propagation", name)
    }
  }

  childWithMap := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{Name: "ChildWithMap"})
  childWithMap.Properties = []*nativemetadata.MetadataProperty{
    nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{
      Key:   stringMeta,
      Value: randomJoinerGuardMap(randomJoinerGuardObject(owner), stringMeta),
    }),
  }
  crossContainer := RandomJoiner_RecursiveArrayGuardProps{
    Array:  randomJoinerGuardArray(randomJoinerGuardObject(childWithMap), false),
    Object: owner,
  }
  if RandomJoiner.RequiresRecursiveArrayGuardFor(crossContainer) {
    t.Fatal("map-key graph cycle should be cut off by the synthetic map entry array")
  }
  if !RandomJoiner.HasRecursiveOwnerPathFor(crossContainer) {
    t.Fatal("map-key graph cycle should still keep the owner path recursive")
  }
  if !RandomJoiner.HasDirectRecursiveOwnerPathFor(crossContainer) {
    t.Fatal("map-key graph cycle through an object element should stay a direct owner path")
  }

  nestedMap := RandomJoiner_RecursiveArrayGuardProps{
    Array:  randomJoinerGuardArray(randomJoinerGuardMap(stringMeta, randomJoinerGuardObject(owner)), false),
    Object: owner,
  }
  if RandomJoiner.HasDirectRecursiveOwnerPathFor(nestedMap) {
    t.Fatal("map root should not be treated as a direct owner path for outer MinItems")
  }
}

func randomJoinerGuardAtomic(kind string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind}))
  return meta
}

func randomJoinerGuardObject(object *nativemetadata.MetadataObjectType) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Objects = append(meta.Objects, nativemetadata.MetadataObject_create(nativemetadata.MetadataObject{Type: object}))
  return meta
}

func randomJoinerGuardTuple(tuple *nativemetadata.MetadataTupleType) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Tuples = append(meta.Tuples, nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{Type: tuple}))
  return meta
}

func randomJoinerGuardArray(value *nativemetadata.MetadataSchema, recursive bool) *nativemetadata.MetadataArrayType {
  return nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
    Name:      "Array",
    Value:     value,
    Recursive: recursive,
  })
}

func randomJoinerGuardArraySchema(value *nativemetadata.MetadataSchema, recursive bool) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Arrays = append(meta.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
    Type: randomJoinerGuardArray(value, recursive),
  }))
  return meta
}

func randomJoinerGuardSet(value *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Sets = append(meta.Sets, nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: value}))
  return meta
}

func randomJoinerGuardMap(key *nativemetadata.MetadataSchema, value *nativemetadata.MetadataSchema) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Maps = append(meta.Maps, nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{
    Key:   key,
    Value: value,
  }))
  return meta
}
