package protobuf

type IProtobufSchema interface {
  protobufSchema()
}

type IProtobufSchema_IByte struct {
  Type string
}

type IProtobufSchema_IBoolean struct {
  Type string
}

type IProtobufSchema_IBigint struct {
  Type string
  Name string
}

type IProtobufSchema_INumber struct {
  Type string
  Name string
}

type IProtobufSchema_IString struct {
  Type string
}

type IProtobufSchema_IArray struct {
  Type  string
  Array any
  Value IProtobufSchema
}

type IProtobufSchema_IObject struct {
  Type   string
  Object any
}

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
