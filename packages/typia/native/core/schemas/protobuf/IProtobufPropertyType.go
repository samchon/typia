package protobuf

type IProtobufPropertyType interface {
  IProtobufSchema
  protobufPropertyType()
}

type IProtobufPropertyType_IByte struct {
  IProtobufSchema_IByte
  Index *int
}

type IProtobufPropertyType_IBoolean struct {
  IProtobufSchema_IBoolean
  Index *int
}

type IProtobufPropertyType_IBigint struct {
  IProtobufSchema_IBigint
  Index *int
}

type IProtobufPropertyType_INumber struct {
  IProtobufSchema_INumber
  Index *int
}

type IProtobufPropertyType_IString struct {
  IProtobufSchema_IString
  Index *int
}

type IProtobufPropertyType_IArray struct {
  IProtobufSchema_IArray
  Index *int
}

type IProtobufPropertyType_IObject struct {
  IProtobufSchema_IObject
  Index *int
}

type IProtobufPropertyType_IMap struct {
  IProtobufSchema_IMap
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
