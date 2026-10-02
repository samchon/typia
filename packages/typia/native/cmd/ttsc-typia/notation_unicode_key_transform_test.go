package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationUnicodeKeyTransform verifies Unicode preservation in emitted notation assignments.
//
// UTF-8 byte slicing must not corrupt a multibyte property character; valid Unicode spelling supplies an independent target key rather than a copied emitter result.
//
// 1. Multibyte keys and ASCII boundary combinations contrast with U+FFFD corruption while retaining complete assignments.
// 2. The generated assignments equal the authored Unicode target spellings and contain neither raw nor escaped replacement characters.
//
// @evidence contracts/testing.md#behavioral-verification The generated assignments equal the authored Unicode target spellings and contain neither raw nor escaped replacement characters.
// @evidence contracts/testing.md#independent-expectations UTF-8 byte slicing must not corrupt a multibyte property character; valid Unicode spelling supplies an independent target key rather than a copied emitter result.
// @evidence contracts/testing.md#distinguishing-cases Multibyte keys and ASCII boundary combinations contrast with U+FFFD corruption while retaining complete assignments.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNotationUnicodeKeyTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNotationUnicodeKeyTransform(t *testing.T) {
  project := notationUnicodeKeyProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("unicode notation transform failed: code=%d stderr=\n%s", code, errText)
  }
  // The printer escapes every non-ASCII code unit, so a corrupted key reaches
  // the output as the escape text rather than as the replacement rune itself.
  // Both forms are rejected; checking only the rune would never fire.
  if strings.Contains(out, `\uFFFD`) || strings.ContainsRune(out, '�') {
    t.Fatalf("emitted converter must not contain U+FFFD; a key was corrupted by byte slicing:\n%s", out)
  }
  // Pin the exact emitted assignments for the witnesses of each half of the
  // defect: the multi-byte first character and the post-underscore segment that
  // byte slicing destroyed, plus the two characters that the simple per-rune
  // case mapping got wrong. The printer escapes every non-ASCII code unit, so
  // these are the literal bytes of the emitted JavaScript.
  for _, assignment := range []string{
    `["\u00E9cole"]: input["\u00C9cole"]`,
    `["Key\u00D6lig"]: input["key_\u00D6lig"]`,
    `["SS"]: input["\u00DF"]`,
    `["i\u0307stanbul"]: input["\u0130stanbul"]`,
  } {
    if !strings.Contains(out, assignment) {
      t.Fatalf("emitted converter should contain the assignment %s:\n%s", assignment, out)
    }
  }
}

func notationUnicodeKeyProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "notation-unicode-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(notationUnicodeKeyTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(notationUnicodeKeySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const notationUnicodeKeyTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const notationUnicodeKeySource = `import typia from "typia";

interface SourceRecord {
  "\u00C9cole": number;
  "\u00F6lwert": number;
  "\u65E5\u672C\u8A9E": number;
  "key_\u00D6lig": number;
  "\u00D6": number;
  "\u0130stanbul": number;
  "\u00DF": number;
  "\uD801\uDC28test": number;
  "\u0391\u03A3_\u0391\u03A3": number;
  "e\u0301cole": number;
  "\u00FCber_Stra\u00DFe": number;
  MAX_COUNT: number;
  fooBar: number;
}

type DynamicRecord = Record<string, number>;

export const toCamel = typia.notations.createCamel<SourceRecord>();
export const toPascal = typia.notations.createPascal<SourceRecord>();
export const toSnake = typia.notations.createSnake<SourceRecord>();
export const toKebab = typia.notations.createKebab<SourceRecord>();

export const toCamelDynamic = typia.notations.createCamel<DynamicRecord>();
export const toPascalDynamic = typia.notations.createPascal<DynamicRecord>();
export const toSnakeDynamic = typia.notations.createSnake<DynamicRecord>();
export const toKebabDynamic = typia.notations.createKebab<DynamicRecord>();
`
