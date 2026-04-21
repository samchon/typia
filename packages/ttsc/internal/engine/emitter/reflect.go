package emitter

import (
	"encoding/json"
	"errors"
	"fmt"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitReflectSchemaExpression returns a JS expression whose runtime value is
// the MetadataSchema itself as a plain JSON object — lets callers do
// `typia.reflect.schema<T>()` and inspect the IR at runtime. Phase 0 emits
// the schema exactly as the Go side sees it, serialised via encoding/json.
func EmitReflectSchemaExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	raw, err := json.Marshal(schema)
	if err != nil {
		return "", fmt.Errorf("reflect.schema: %w", err)
	}
	return "(" + string(raw) + ")", nil
}

// EmitReflectNameExpression returns the display name of the schema — useful
// for error messages and debugging.
func EmitReflectNameExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	return jsonQuote(schema.Name()), nil
}
