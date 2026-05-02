package main

import (
  "strings"
  "testing"
)

func TestCleanupTypeScriptTransformTextNormalizesParenthesizedReturnTypes(t *testing.T) {
  input := strings.Join([]string{
    `const __assert = (input: any): (ICitizen) => {`,
    `  return input;`,
    `};`,
    `const __stringify = (input: ICitizen): (string) => String(input);`,
    `const encoder = <Writer extends import("typia/lib/internal/_IProtobufWriter")._IProtobufWriter>(writer: Writer): (Writer) => writer;`,
    `const parse = (input: string): string | (null) => input;`,
  }, "\n")

  output := cleanupTypeScriptTransformText(input)

  for _, forbidden := range []string{
    ": (ICitizen) =>",
    ": (string) =>",
    ": (Writer) =>",
    "| (null)",
  } {
    if strings.Contains(output, forbidden) {
      t.Fatalf("cleanup left invalid parenthesized type %q in:\n%s", forbidden, output)
    }
  }
  for _, expected := range []string{
    ": ICitizen =>",
    ": string =>",
    ": Writer =>",
    "| null",
  } {
    if !strings.Contains(output, expected) {
      t.Fatalf("cleanup missing normalized type %q in:\n%s", expected, output)
    }
  }
}
