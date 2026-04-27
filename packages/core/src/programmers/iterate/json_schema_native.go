package iterate

import h "github.com/samchon/typia/packages/core/src/programmers/helpers"

func json_schema_native(name string) h.Schema {
	switch name {
	case "Date":
		return h.Schema{"type": "string", "format": "date-time"}
	case "Uint8Array":
		return h.Schema{"type": "string", "contentEncoding": "base64"}
	default:
		return h.Schema{"type": "object", "x-typia-native": name}
	}
}
