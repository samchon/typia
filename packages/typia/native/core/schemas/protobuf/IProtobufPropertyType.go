package protobuf

// IProtobufPropertyType is a protobuf schema together with the field number of
// the union member; only the types below implement it.
//
// @evidence contracts/common.md#principled-implementation The unexported marker method closes the set to the eight property variants, so a type switch over them is complete.
// @evidence contracts/common.md#clear-and-simple-design An interface that embeds the schema interface and adds one unexported marker.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only; no value is cast to it from outside this package.
// @evidence contracts/common.md#meaningful-documentation The doc states that the set is closed.
type IProtobufPropertyType interface {
  IProtobufSchema
  protobufPropertyType()
}

// IProtobufPropertyType_IByte is the bytes schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IByte struct {
  // IProtobufSchema_IByte carries the bytes encoding of this union member.
  IProtobufSchema_IByte

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IBoolean is the bool schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IBoolean struct {
  // IProtobufSchema_IBoolean carries the bool encoding of this union member.
  IProtobufSchema_IBoolean

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IBigint is the bigint schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IBigint struct {
  // IProtobufSchema_IBigint selects the integer encoding of this union member.
  IProtobufSchema_IBigint

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_INumber is the number schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_INumber struct {
  // IProtobufSchema_INumber selects the numeric encoding of this union member.
  IProtobufSchema_INumber

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IString is the string schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IString struct {
  // IProtobufSchema_IString carries the string encoding of this union member.
  IProtobufSchema_IString

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IArray is the array schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IArray struct {
  // IProtobufSchema_IArray describes the repeated encoding of this union member.
  IProtobufSchema_IArray

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IObject is the object schema of a property union member
// with its field number Index, which is nil until it is taken from a tag or
// assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IObject struct {
  // IProtobufSchema_IObject identifies the nested message of this union member.
  IProtobufSchema_IObject

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

// IProtobufPropertyType_IMap is the map schema of a property union member with
// its field number Index, which is nil until it is taken from a tag or assigned.
//
// @evidence contracts/common.md#principled-implementation A union member is its schema plus its field number, so the record embeds the schema and adds the pointer that distinguishes an unassigned number.
// @evidence contracts/common.md#clear-and-simple-design An embedded schema and one field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what Index means.
type IProtobufPropertyType_IMap struct {
  // IProtobufSchema_IMap describes the map encoding of this union member.
  IProtobufSchema_IMap

  // Index is the field number; nil means it has not been assigned yet.
  Index *int
}

func (IProtobufPropertyType_IByte) protobufPropertyType()    {}
func (IProtobufPropertyType_IBoolean) protobufPropertyType() {}
func (IProtobufPropertyType_IBigint) protobufPropertyType()  {}
func (IProtobufPropertyType_INumber) protobufPropertyType()  {}
func (IProtobufPropertyType_IString) protobufPropertyType()  {}
func (IProtobufPropertyType_IArray) protobufPropertyType()   {}
func (IProtobufPropertyType_IObject) protobufPropertyType()  {}
func (IProtobufPropertyType_IMap) protobufPropertyType()     {}
