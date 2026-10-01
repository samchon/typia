package testutil

import (
	"testing"

	metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func assertConstantValues(t *testing.T, schema *metadata.MetadataSchema, kind string, values []any) {
	t.Helper()

	if !schema.Required || len(schema.Constants) != 1 {
		t.Fatalf("unexpected constant metadata: %+v", schema)
	}
	constant := schema.Constants[0]
	if constant.Type != kind || len(constant.Values) != len(values) {
		t.Fatalf("unexpected constant bucket: %+v", constant)
	}
	for i, value := range values {
		if constant.Values[i].Value != value {
			t.Fatalf("unexpected constant value at %d: %+v", i, constant.Values[i])
		}
	}
}
