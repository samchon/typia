package ttsc

import "testing"

func TestLlmBoolConfigTextReadsPropertySpecificLiteral(t *testing.T) {
	text := `{ strict: true; equals: false }`
	if !llmBoolConfigText(text, "strict") {
		t.Fatal("strict should be enabled")
	}
	if llmBoolConfigText(text, "equals") {
		t.Fatal("equals should remain disabled when equals is false")
	}
}

func TestLlmBoolConfigTextIgnoresOtherTrueProperties(t *testing.T) {
	text := `{ equals: false; description: "true"; strict: false }`
	if llmBoolConfigText(text, "equals") {
		t.Fatal("equals should not be enabled by unrelated true text")
	}
	if llmBoolConfigText(text, "strict") {
		t.Fatal("strict should not be enabled by unrelated true text")
	}
}

func TestLlmBoolConfigTextAcceptsQuotedPropertyName(t *testing.T) {
	if !llmBoolConfigText(`{ "equals": true }`, "equals") {
		t.Fatal("quoted equals property should be parsed")
	}
}
