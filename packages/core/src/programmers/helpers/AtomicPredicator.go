package helpers

type atomicPredicatorNamespace struct{}

var AtomicPredicator = atomicPredicatorNamespace{}

func (atomicPredicatorNamespace) Constant(name string, metadata Metadata) bool {
	for _, constant := range GetSlice(metadata, "constants") {
		if GetName(constant) == name {
			return true
		}
	}
	return false
}

func (atomicPredicatorNamespace) Atomic(name string, metadata Metadata) bool {
	for _, atomic := range GetSlice(metadata, "atomics") {
		if GetName(atomic) == name {
			return true
		}
	}
	return false
}

func (atomicPredicatorNamespace) Native(name string, metadata Metadata) bool {
	for _, native := range GetSlice(metadata, "natives") {
		if GetName(native) == name {
			return true
		}
	}
	return false
}

func (atomicPredicatorNamespace) Template(metadata Metadata) bool {
	return len(GetSlice(metadata, "templates")) != 0
}
