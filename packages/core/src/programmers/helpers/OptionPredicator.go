package helpers

type optionPredicatorNamespace struct{}

var OptionPredicator = optionPredicatorNamespace{}

func (optionPredicatorNamespace) Numeric(metadata Metadata, options Metadata) bool {
	return OptionPredicator.Finite(metadata) || GetBool(options, "numeric")
}

func (optionPredicatorNamespace) Functional(options Metadata) bool {
	return GetBool(options, "functional")
}

func (optionPredicatorNamespace) Finite(metadata Metadata) bool {
	for _, atomic := range GetSlice(metadata, "atomics") {
		if GetName(atomic) == "number" {
			return true
		}
	}
	for _, constant := range GetSlice(metadata, "constants") {
		if GetName(constant) == "number" {
			return true
		}
	}
	for _, tag := range GetSlice(metadata, "tags") {
		if GetName(tag) == "finite" {
			return true
		}
	}
	return false
}

func (optionPredicatorNamespace) Undefined(options Metadata) bool {
	if Has(options, "undefined") {
		return GetBool(options, "undefined")
	}
	return true
}
