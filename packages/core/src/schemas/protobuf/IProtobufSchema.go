package protobuf

import "github.com/samchon/typia/packages/core/src/schemas/metadata"

type IProtobufSchema interface {
	ProtobufKind() string
}

type IProtobufSchemaByte struct {
	Type string
}

func (IProtobufSchemaByte) ProtobufKind() string { return "bytes" }

type IProtobufSchemaBoolean struct {
	Type string
}

func (IProtobufSchemaBoolean) ProtobufKind() string { return "bool" }

type IProtobufSchemaBigint struct {
	Type string
	Name string
}

func (IProtobufSchemaBigint) ProtobufKind() string { return "bigint" }

type IProtobufSchemaNumber struct {
	Type string
	Name string
}

func (IProtobufSchemaNumber) ProtobufKind() string { return "number" }

type IProtobufSchemaString struct {
	Type string
}

func (IProtobufSchemaString) ProtobufKind() string { return "string" }

type IProtobufSchemaArray struct {
	Type  string
	Array *metadata.MetadataArrayType
	Value IProtobufSchema
}

func (IProtobufSchemaArray) ProtobufKind() string { return "array" }

type IProtobufSchemaObject struct {
	Type   string
	Object *metadata.MetadataObjectType
}

func (IProtobufSchemaObject) ProtobufKind() string { return "object" }

type IProtobufSchemaMap struct {
	Type  string
	Map   any
	Key   IProtobufSchema
	Value IProtobufSchema
}

func (IProtobufSchemaMap) ProtobufKind() string { return "map" }

func NewIProtobufSchemaByte() IProtobufSchemaByte {
	return IProtobufSchemaByte{Type: "bytes"}
}

func NewIProtobufSchemaBoolean() IProtobufSchemaBoolean {
	return IProtobufSchemaBoolean{Type: "bool"}
}

func NewIProtobufSchemaString() IProtobufSchemaString {
	return IProtobufSchemaString{Type: "string"}
}
