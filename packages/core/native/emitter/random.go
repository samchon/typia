package emitter

import (
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitRandomArrowFunction emits the runtime generator consumed by
// typia.random<T>(generator?).
func EmitRandomArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if native, ok := findUnsupportedRandomNative(schema); ok {
		return "", fmt.Errorf("%w: random does not support %s", ErrUnsupportedSchema, native)
	}
	return emitRandomDirectArrowFunction(schema)
}

// EmitCreateRandomArrowFunction emits the reusable generator returned by
// typia.createRandom<T>(generator?).
func EmitCreateRandomArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	if native, ok := findUnsupportedRandomNative(schema); ok {
		return "", fmt.Errorf("%w: random does not support %s", ErrUnsupportedSchema, native)
	}
	return emitCreateRandomDirectArrowFunction(schema)
}

func findUnsupportedRandomNative(schema *metadata.Schema) (string, bool) {
	var found string
	ok := newSchemaWalker().walkSchema(schema, func(s *metadata.Schema) bool {
		for _, native := range s.Natives {
			switch native.Name {
			case "WeakMap", "WeakSet":
				found = native.Name
				return true
			}
		}
		return false
	})
	return found, ok
}
