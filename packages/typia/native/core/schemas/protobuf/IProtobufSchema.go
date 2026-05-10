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

func (IProtobufSchema_IByte) protobufSchema()    { return }
func (IProtobufSchema_IBoolean) protobufSchema() { return }
func (IProtobufSchema_IBigint) protobufSchema()  { return }
func (IProtobufSchema_INumber) protobufSchema()  { return }
func (IProtobufSchema_IString) protobufSchema()  { return }
func (IProtobufSchema_IArray) protobufSchema()   { return }
func (IProtobufSchema_IObject) protobufSchema()  { return }
func (IProtobufSchema_IMap) protobufSchema()     { return }
