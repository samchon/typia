//go:build typia_native_internal
// +build typia_native_internal

package protobuf

import "testing"

// TestProtobufMarkerCoverage exercises protobuf marker methods.
//
// Protobuf schema structs use private marker methods to distinguish schema and
// property-type variants. The methods are intentionally empty, so this direct
// unit test exists to keep every marker implementation visible to Go coverage.
//
// 1. Assign every schema variant to the schema marker interface.
// 2. Assign every property variant to the property marker interface.
// 3. Invoke marker methods directly inside the protobuf package.
// 4. Verify interface assignments keep the expected variant count.
func TestProtobufMarkerCoverage(t *testing.T) {
	schemas := []IProtobufSchema{
		IProtobufSchema_IByte{},
		IProtobufSchema_IBoolean{},
		IProtobufSchema_IBigint{},
		IProtobufSchema_INumber{},
		IProtobufSchema_IString{},
		IProtobufSchema_IArray{},
		IProtobufSchema_IObject{},
		IProtobufSchema_IMap{},
	}
	properties := []IProtobufPropertyType{
		IProtobufPropertyType_IByte{},
		IProtobufPropertyType_IBoolean{},
		IProtobufPropertyType_IBigint{},
		IProtobufPropertyType_INumber{},
		IProtobufPropertyType_IString{},
		IProtobufPropertyType_IArray{},
		IProtobufPropertyType_IObject{},
		IProtobufPropertyType_IMap{},
	}
	IProtobufSchema_IByte{}.protobufSchema()
	IProtobufSchema_IBoolean{}.protobufSchema()
	IProtobufSchema_IBigint{}.protobufSchema()
	IProtobufSchema_INumber{}.protobufSchema()
	IProtobufSchema_IString{}.protobufSchema()
	IProtobufSchema_IArray{}.protobufSchema()
	IProtobufSchema_IObject{}.protobufSchema()
	IProtobufSchema_IMap{}.protobufSchema()
	IProtobufPropertyType_IByte{}.protobufPropertyType()
	IProtobufPropertyType_IBoolean{}.protobufPropertyType()
	IProtobufPropertyType_IBigint{}.protobufPropertyType()
	IProtobufPropertyType_INumber{}.protobufPropertyType()
	IProtobufPropertyType_IString{}.protobufPropertyType()
	IProtobufPropertyType_IArray{}.protobufPropertyType()
	IProtobufPropertyType_IObject{}.protobufPropertyType()
	IProtobufPropertyType_IMap{}.protobufPropertyType()
	if len(schemas) != 8 || len(properties) != 8 {
		t.Fatal("protobuf marker variant count mismatch")
	}
}
