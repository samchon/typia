package protobuf

// IProtobufSchema is a protobuf type of a value; only the types below implement
// it.
//
// @evidence contracts/common.md#principled-implementation The unexported marker method closes the set to the eight schema variants.
// @evidence contracts/common.md#clear-and-simple-design An interface with one unexported marker.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states that the set is closed.
type IProtobufSchema interface {
  protobufSchema()
}

// IProtobufSchema_IByte is the `bytes` type, which a Uint8Array maps to.
//
// @evidence contracts/common.md#principled-implementation Only the kind is needed, which is `bytes`.
// @evidence contracts/common.md#clear-and-simple-design A one-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IByte struct {
  Type string
}

// IProtobufSchema_IBoolean is the `bool` type.
//
// @evidence contracts/common.md#principled-implementation Only the kind is needed, which is `bool`.
// @evidence contracts/common.md#clear-and-simple-design A one-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IBoolean struct {
  Type string
}

// IProtobufSchema_IBigint is a bigint, whose Name is the protobuf integer type,
// `int64` or `uint64`.
//
// @evidence contracts/common.md#principled-implementation The protobuf type name is the only thing that distinguishes the two bigint encodings, so it is a field.
// @evidence contracts/common.md#clear-and-simple-design A two-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IBigint struct {
  Type string
  Name string
}

// IProtobufSchema_INumber is a number, whose Name is the protobuf numeric type
// such as `int32`, `uint32`, `float` or `double`.
//
// @evidence contracts/common.md#principled-implementation The protobuf type name selects the wire encoding of a number, so it is a field.
// @evidence contracts/common.md#clear-and-simple-design A two-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_INumber struct {
  Type string
  Name string
}

// IProtobufSchema_IString is the `string` type.
//
// @evidence contracts/common.md#principled-implementation Only the kind is needed, which is `string`.
// @evidence contracts/common.md#clear-and-simple-design A one-field record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IString struct {
  Type string
}

// IProtobufSchema_IArray is a repeated field: Array is the metadata array type
// and Value is the schema of its element.
//
// @evidence contracts/common.md#principled-implementation The element schema is resolved once and the array type is kept so the programmers can name the array and its element.
// @evidence contracts/common.md#clear-and-simple-design A three-field record whose Array is untyped, holding a metadata array type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IArray struct {
  Type  string
  Array any
  Value IProtobufSchema
}

// IProtobufSchema_IObject is a nested message: Object is the metadata object
// type that it refers to.
//
// @evidence contracts/common.md#principled-implementation The message is identified by the object type, which the programmers look up for its properties.
// @evidence contracts/common.md#clear-and-simple-design A two-field record whose Object holds the metadata object type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IObject struct {
  Type   string
  Object any
}

// IProtobufSchema_IMap is a map field: Map is the metadata map or dynamic object
// type, and Key and Value are the schemas of its key and value.
//
// @evidence contracts/common.md#principled-implementation A map field needs its source type and the schemas of both sides, which are resolved once.
// @evidence contracts/common.md#clear-and-simple-design A four-field record whose Map holds the metadata type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IProtobufSchema_IMap struct {
  Type  string
  Map   any
  Key   IProtobufSchema
  Value IProtobufSchema
}

func (IProtobufSchema_IByte) protobufSchema()    {}
func (IProtobufSchema_IBoolean) protobufSchema() {}
func (IProtobufSchema_IBigint) protobufSchema()  {}
func (IProtobufSchema_INumber) protobufSchema()  {}
func (IProtobufSchema_IString) protobufSchema()  {}
func (IProtobufSchema_IArray) protobufSchema()   {}
func (IProtobufSchema_IObject) protobufSchema()  {}
func (IProtobufSchema_IMap) protobufSchema()     {}
