package protobuf

type IProtobufPropertyType interface {
	IProtobufSchema
	ProtobufIndex() int
}

type IProtobufPropertyTypeByte struct {
	IProtobufSchemaByte
	Index int
}

func (m IProtobufPropertyTypeByte) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeBoolean struct {
	IProtobufSchemaBoolean
	Index int
}

func (m IProtobufPropertyTypeBoolean) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeBigint struct {
	IProtobufSchemaBigint
	Index int
}

func (m IProtobufPropertyTypeBigint) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeNumber struct {
	IProtobufSchemaNumber
	Index int
}

func (m IProtobufPropertyTypeNumber) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeString struct {
	IProtobufSchemaString
	Index int
}

func (m IProtobufPropertyTypeString) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeArray struct {
	IProtobufSchemaArray
	Index int
}

func (m IProtobufPropertyTypeArray) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeObject struct {
	IProtobufSchemaObject
	Index int
}

func (m IProtobufPropertyTypeObject) ProtobufIndex() int { return m.Index }

type IProtobufPropertyTypeMap struct {
	IProtobufSchemaMap
	Index int
}

func (m IProtobufPropertyTypeMap) ProtobufIndex() int { return m.Index }
