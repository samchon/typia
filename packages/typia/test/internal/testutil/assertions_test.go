package testutil

import (
	"os"
	"os/exec"
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

func assertHelperProcessFails(t *testing.T, testName string, envName string) {
	t.Helper()

	command := exec.Command(os.Args[0], "-test.run=^"+testName+"$")
	command.Env = append(os.Environ(), envName+"=1")
	if err := command.Run(); err == nil {
		t.Fatalf("expected helper process %s to fail", envName)
	}
}
