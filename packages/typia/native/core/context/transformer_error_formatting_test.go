package context

import (
	"strings"
	"testing"

	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestTransformerErrorFormatting covers metadata error rendering.
//
// Transformer diagnostics are assembled from metadata factory errors before
// command code turns them into TypeScript diagnostics. The formatter has several
// path cases that are clearer to verify directly than through a large invalid
// TypeScript fixture.
//
// 1. Render direct transformer errors.
// 2. Render object property, dynamic-key, parameter, and return diagnostics.
// 3. Exercise JSON fallback formatting for unmarshalable values.
// 4. Verify identifier path validation for edge names.
func TestTransformerErrorFormatting(t *testing.T) {
	err := NewTransformerError(TransformerError_IProps{
		Code:    "typia.test",
		Message: "message",
	})
	if err.Error() != "message" {
		t.Fatalf("direct error message mismatch: %s", err.Error())
	}

	object := schemametadata.MetadataObjectType{Name: "IObject"}
	formatted := TransformerError_from(struct {
		Code   string
		Errors []TransformerError_MetadataFactory_IError
	}{
		Code: "typia.fixture",
		Errors: []TransformerError_MetadataFactory_IError{
			{
				Name: "string",
				Explore: TransformerError_MetadataFactory_IExplore{
					Object:   &object,
					Property: "validName",
				},
				Messages: []string{"valid property"},
			},
			{
				Name: "number",
				Explore: TransformerError_MetadataFactory_IExplore{
					Object:   &object,
					Property: "invalid-name",
				},
				Messages: []string{"quoted property"},
			},
			{
				Name: "dynamic",
				Explore: TransformerError_MetadataFactory_IExplore{
					Object:   &object,
					Property: map[string]any{"key": true},
				},
				Messages: []string{"dynamic key"},
			},
			{
				Name: "parameter",
				Explore: TransformerError_MetadataFactory_IExplore{
					Parameter: map[string]any{"index": 0},
				},
				Messages: []string{"parameter message"},
			},
			{
				Name: "output",
				Explore: TransformerError_MetadataFactory_IExplore{
					Output: true,
				},
				Messages: []string{"return message"},
			},
		},
	})
	text := formatted.Error()
	for _, part := range []string{
		"IObject.validName: string",
		"IObject[\"invalid-name\"]: number",
		"IObject[key]: dynamic",
		"(parameter: {\"index\":0})",
		"(return type)",
	} {
		if !strings.Contains(text, part) {
			t.Fatalf("formatted transformer error missing %q:\n%s", part, text)
		}
	}
	if transformerError_json(func() {}) != "null" {
		t.Fatal("unmarshalable values should render as null")
	}
	for _, name := range []string{"", "1bad", "bad-name"} {
		if transformerError_variable(name) {
			t.Fatalf("%q should not be a variable path segment", name)
		}
	}
}
