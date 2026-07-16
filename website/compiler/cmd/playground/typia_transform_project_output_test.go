package main

import (
  "bytes"
  "encoding/json"
  "testing"
)

// TestWriteTypiaTransformProjectOutputPreservesContract verifies the playground plugin response.
//
// The worker depends on project transforms returning structured diagnostics
// beside the TypeScript map even when the plugin exits nonzero. Losing either
// field would force the browser to choose between partial output and stderr.
//
// 1. Encode successful multi-file output and assert status zero.
// 2. Encode a partial map with a transform diagnostic and assert status three.
// 3. Decode both payloads and verify their browser-facing fields.
func TestWriteTypiaTransformProjectOutputPreservesContract(t *testing.T) {
  t.Run("success", func(t *testing.T) {
    stdout := bytes.Buffer{}
    stderr := bytes.Buffer{}
    code := writeTypiaTransformProjectOutput(&stdout, &stderr, map[string]string{
      "src/playground.ts": "export const input = true;",
      "src/helper.ts":     "export const helper = true;",
    }, nil)
    if code != 0 {
      t.Fatalf("successful transform status: %d", code)
    }
    payload := typiaTransformProjectOutput{}
    if err := json.Unmarshal(stdout.Bytes(), &payload); err != nil {
      t.Fatal(err)
    }
    if len(payload.TypeScript) != 2 || len(payload.Diagnostics) != 0 {
      t.Fatalf("successful transform payload: %#v", payload)
    }
  })

  t.Run("diagnostic", func(t *testing.T) {
    stdout := bytes.Buffer{}
    stderr := bytes.Buffer{}
    code := writeTypiaTransformProjectOutput(&stdout, &stderr, map[string]string{
      "src/playground.ts": "export const partial = true;",
    }, []typiaPlaygroundDiag{{
      File:    "/work/src/playground.ts",
      Line:    2,
      Column:  5,
      Code:    "typia.is",
      Message: "unsupported type",
    }})
    if code != 3 {
      t.Fatalf("diagnostic transform status: %d", code)
    }
    payload := typiaTransformProjectOutput{}
    if err := json.Unmarshal(stdout.Bytes(), &payload); err != nil {
      t.Fatal(err)
    }
    if len(payload.TypeScript) != 1 || len(payload.Diagnostics) != 1 {
      t.Fatalf("diagnostic transform payload: %#v", payload)
    }
    diagnostic := payload.Diagnostics[0]
    if diagnostic.Category != "error" || diagnostic.Code != "typia.is" || diagnostic.Line != 2 || diagnostic.Character != 5 || diagnostic.MessageText != "unsupported type" {
      t.Fatalf("structured diagnostic mismatch: %#v", diagnostic)
    }
  })
}
