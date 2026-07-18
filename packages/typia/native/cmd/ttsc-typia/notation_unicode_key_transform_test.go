package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNotationUnicodeKeyTransform verifies the notation emit keeps a non-ASCII
// key intact and agrees with the runtime helper.
//
// Issue #2227: the emit computed each renamed key by slicing one *byte*
// (`value[:1]`) before case-converting it, so a multi-byte rune's lead byte was
// handed to the case operation on its own, could not be decoded, and came back
// as U+FFFD — `typia.notations.createPascal<{ "École": number }>()` emitted the
// key `"��cole"`. The static path corrupted the key while the dynamic
// (index-signature) path, which calls the runtime `_notationPascal`, did not, so
// one object could carry two different renamings of the same character and the
// emitted key did not match its declared `CamelCase<T>` / `PascalCase<T>` type.
//
// The same fix covers the second half of the divergence: JavaScript performs
// Unicode *full* case conversion while Go's `strings.ToUpper`/`ToLower` perform
// the *simple* per-rune mapping, so the emit also disagreed with the runtime on
// `ß` -> `SS`, `İ` -> `i` + U+0307, and the word-final sigma `ΑΣ` -> `ας`. That
// half reached `snake`/`kebab` too, which never sliced a byte.
//
// Every key and every expectation below is written with `\uXXXX` escapes so the
// fixture cannot be silently renormalized (NFC/NFD) by an editor, and so the
// combining-mark and surrogate-pair cases stay exactly what they claim to be.
//
//  1. Transform a fixture whose keys cover a multi-byte first character, a
//     multi-byte character right after an underscore, a key that is a single
//     multi-byte character, a combining mark (NFD), a surrogate pair, and the
//     case-folding-sensitive `İ`, `ß`, and word-final sigma — plus two ASCII
//     keys as a regression anchor.
//  2. Require the emitted JavaScript to carry no U+FFFD at all.
//  3. Execute each statically emitted converter and assert its key-to-value map
//     equals the expectation derived from JavaScript's own case semantics.
//  4. Execute the dynamic `Record` converter, which routes through the runtime
//     `_notation*` helper, over the same keys and require an identical map, so
//     the compile-time emit and the runtime helper are proven equal per key.
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
  notationUnicodeKeyRunRuntimeCases(t, project, out)
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

func notationUnicodeKeyRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(notationUnicodeKeyRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("unicode notation runtime cases failed: %v\n%s", err, output)
  }
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

const notationUnicodeKeyRuntimeRunner = `const mod = require("./main.cjs");

// Every source key carries a distinct value, so comparing the whole
// key-to-value map proves the per-key renaming rather than just the key set.
const input = {
  ["\u00C9cole"]: 1,
  ["\u00F6lwert"]: 2,
  ["\u65E5\u672C\u8A9E"]: 3,
  ["key_\u00D6lig"]: 4,
  ["\u00D6"]: 5,
  ["\u0130stanbul"]: 6,
  ["\u00DF"]: 7,
  ["\uD801\uDC28test"]: 8,
  ["\u0391\u03A3_\u0391\u03A3"]: 9,
  ["e\u0301cole"]: 10,
  ["\u00FCber_Stra\u00DFe"]: 11,
  ["MAX_COUNT"]: 12,
  ["fooBar"]: 13,
};

// Expectations are JavaScript's own case semantics, not a snapshot of the Go
// emit: full case conversion (ß -> SS, İ -> i + U+0307, word-final
// sigma ΑΣ -> ας) and UTF-16 code-unit indexing, under which
// str[0] of an astral character is an uncased lone surrogate and stays put.
const expected = {
  camel: {
    ["\u00E9cole"]: 1,
    ["\u00F6lwert"]: 2,
    ["\u65E5\u672C\u8A9E"]: 3,
    ["key\u00D6lig"]: 4,
    ["\u00F6"]: 5,
    ["i\u0307stanbul"]: 6,
    ["\u00DF"]: 7,
    ["\uD801\uDC28test"]: 8,
    ["\u03B1\u03C2\u0391\u03C3"]: 9,
    ["e\u0301cole"]: 10,
    ["\u00FCberStra\u00DFe"]: 11,
    ["maxCount"]: 12,
    ["fooBar"]: 13,
  },
  pascal: {
    ["\u00C9cole"]: 1,
    ["\u00D6lwert"]: 2,
    ["\u65E5\u672C\u8A9E"]: 3,
    ["Key\u00D6lig"]: 4,
    ["\u00D6"]: 5,
    ["\u0130stanbul"]: 6,
    ["SS"]: 7,
    ["\uD801\uDC28test"]: 8,
    ["\u0391\u03C3\u0391\u03C3"]: 9,
    ["E\u0301cole"]: 10,
    ["\u00DCberStra\u00DFe"]: 11,
    ["MaxCount"]: 12,
    ["FooBar"]: 13,
  },
  snake: {
    ["\u00E9cole"]: 1,
    ["\u00F6lwert"]: 2,
    ["\u65E5\u672C\u8A9E"]: 3,
    ["key_\u00F6lig"]: 4,
    ["\u00F6"]: 5,
    ["i\u0307stanbul"]: 6,
    ["\u00DF"]: 7,
    ["\uD801\uDC28test"]: 8,
    ["\u03B1\u03C2_\u03B1\u03C2"]: 9,
    ["e\u0301cole"]: 10,
    ["\u00FCber_stra\u00DFe"]: 11,
    ["max_count"]: 12,
    ["foo_bar"]: 13,
  },
  kebab: {
    ["\u00E9cole"]: 1,
    ["\u00F6lwert"]: 2,
    ["\u65E5\u672C\u8A9E"]: 3,
    ["key-\u00F6lig"]: 4,
    ["\u00F6"]: 5,
    ["i\u0307stanbul"]: 6,
    ["\u00DF"]: 7,
    ["\uD801\uDC28test"]: 8,
    ["\u03B1\u03C2-\u03B1\u03C2"]: 9,
    ["e\u0301cole"]: 10,
    ["\u00FCber-stra\u00DFe"]: 11,
    ["max-count"]: 12,
    ["foo-bar"]: 13,
  },
};

const normalize = (object) =>
  JSON.stringify(
    Object.entries(object)
      .map(([key, value]) => [Array.from(key, (c) => c.charCodeAt(0)), value])
      .sort((a, b) => (String(a) < String(b) ? -1 : 1)),
  );

const notations = ["camel", "pascal", "snake", "kebab"];
const capitalize = (name) => name[0].toUpperCase() + name.substring(1);

for (const notation of notations) {
  const want = normalize(expected[notation]);

  // The statically emitted converter: one property assignment per known key.
  const staticResult = mod["to" + capitalize(notation)](input);
  if (normalize(staticResult) !== want) {
    throw new Error(
      "static " + notation + " emit disagreed with JavaScript case semantics:\n" +
        "  expected " + want + "\n" +
        "  actual   " + normalize(staticResult),
    );
  }

  // The dynamic converter: one runtime _notation* call per index-signature key.
  const dynamicResult = mod["to" + capitalize(notation) + "Dynamic"](input);
  if (normalize(dynamicResult) !== normalize(staticResult)) {
    throw new Error(
      "static " + notation + " emit disagreed with the runtime helper:\n" +
        "  runtime " + normalize(dynamicResult) + "\n" +
        "  emit    " + normalize(staticResult),
    );
  }

  for (const key of Object.keys(staticResult)) {
    if (key.includes("�")) {
      throw new Error(
        "renamed " + notation + " key contains U+FFFD: " + JSON.stringify(key),
      );
    }
  }
}
`
