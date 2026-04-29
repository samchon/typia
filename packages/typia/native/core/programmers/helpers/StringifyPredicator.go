package helpers

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type stringifyPredicatorNamespace struct{}

var StringifyPredicator = stringifyPredicatorNamespace{}

func (stringifyPredicatorNamespace) Require_escape(value string) bool {
	for _, ch := range value {
		for _, escaped := range stringifyPredicator_escaped {
			if ch == escaped {
				return true
			}
		}
	}
	return false
}

func (stringifyPredicatorNamespace) Undefindable(metadata *nativemetadata.MetadataSchema) bool {
	return metadata.IsRequired() == false ||
		(metadata.Escaped != nil && metadata.Escaped.Returns.IsRequired() == false)
}

var stringifyPredicator_escaped = []rune{'"', '\\', '\b', '\f', '\n', '\n', '\r', '\t'}
