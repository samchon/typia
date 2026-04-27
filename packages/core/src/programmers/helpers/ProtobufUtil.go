package helpers

import "sort"

type protobufUtilNamespace struct{}

var ProtobufUtil = protobufUtilNamespace{}

func (protobufUtilNamespace) Size(wire ProtobufWire) int {
	switch wire {
	case ProtobufWireI32:
		return 4
	case ProtobufWireI64:
		return 8
	default:
		return 1
	}
}

func (protobufUtilNamespace) GetSequence(property Metadata) int {
	if sequence := GetInt(property, "sequence"); sequence != 0 {
		return sequence
	}
	if jsDoc := GetMap(property, "jsDocTags"); jsDoc != nil {
		return AsInt(jsDoc["sequence"])
	}
	for _, tag := range GetSlice(property, "tags") {
		if value := GetInt(tag, "sequence"); value != 0 {
			return value
		}
	}
	return 0
}

func (protobufUtilNamespace) IsUnion(metadata Metadata) bool {
	count := len(ProtobufUtil.GetAtomics(metadata))
	for _, key := range []string{"arrays", "tuples", "maps", "sets", "objects", "natives"} {
		count += len(GetSlice(metadata, key))
	}
	return count > 1
}

func (protobufUtilNamespace) GetAtomics(metadata Metadata) []string {
	set := map[string]bool{}
	for _, atomic := range GetSlice(metadata, "atomics") {
		if name := GetName(atomic); name != "" {
			set[name] = true
		}
	}
	for _, constant := range GetSlice(metadata, "constants") {
		if name := GetName(constant); name != "" {
			set[name] = true
		}
	}
	out := make([]string, 0, len(set))
	for key := range set {
		out = append(out, key)
	}
	sort.Strings(out)
	return out
}

func (protobufUtilNamespace) GetNumbers(metadata Metadata) []Metadata {
	out := make([]Metadata, 0)
	for _, atomic := range GetSlice(metadata, "atomics") {
		item := AsMetadata(atomic)
		if GetName(item) == "number" {
			out = append(out, item)
		}
	}
	for _, constant := range GetSlice(metadata, "constants") {
		item := AsMetadata(constant)
		if GetName(item) == "number" {
			out = append(out, item)
		}
	}
	return out
}

func (protobufUtilNamespace) GetBigints(metadata Metadata) []Metadata {
	out := make([]Metadata, 0)
	for _, atomic := range GetSlice(metadata, "atomics") {
		item := AsMetadata(atomic)
		if GetName(item) == "bigint" {
			out = append(out, item)
		}
	}
	for _, constant := range GetSlice(metadata, "constants") {
		item := AsMetadata(constant)
		if GetName(item) == "bigint" {
			out = append(out, item)
		}
	}
	return out
}

func (protobufUtilNamespace) AtomicOrder(name string) int {
	switch name {
	case "boolean":
		return 0
	case "int32", "uint32", "sint32", "fixed32", "sfixed32", "float":
		return 1
	case "int64", "uint64", "sint64", "fixed64", "sfixed64", "double", "bigint":
		return 2
	case "string":
		return 3
	default:
		return 4
	}
}

func (protobufUtilNamespace) CompareAtomics(left string, right string) int {
	return ProtobufUtil.AtomicOrder(left) - ProtobufUtil.AtomicOrder(right)
}

func (protobufUtilNamespace) NumberType(metadata Metadata) string {
	for _, tag := range GetSlice(metadata, "tags") {
		if str := GetString(tag, "kind"); str != "" {
			return str
		}
		if str := GetString(tag, "name"); str != "" {
			return str
		}
	}
	return "double"
}

func (protobufUtilNamespace) BigintType(metadata Metadata) string {
	for _, tag := range GetSlice(metadata, "tags") {
		if str := GetString(tag, "kind"); str != "" {
			return str
		}
		if str := GetString(tag, "name"); str != "" {
			return str
		}
	}
	return "int64"
}

func (protobufUtilNamespace) Decode(wire ProtobufWire, name string) Expression {
	switch wire {
	case ProtobufWireI32:
		return Expr("reader." + name + "()")
	case ProtobufWireI64:
		return Expr("reader." + name + "()")
	case ProtobufWireLen:
		return Expr("reader." + name + "()")
	default:
		return Expr("reader." + name + "()")
	}
}
