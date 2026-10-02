package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPrivateFieldFilterIsTransform verifies public properties without private binder keys in emitted validation.
//
// JavaScript private fields are not publicly accessible structural properties; including their internal binder names would emit invalid access while dropping public data would weaken validation.
//
// 1. Classes with private and public members share one fixture, so exclusion is paired with positive public property preservation.
// 2. The output retains all authored public members and contains no mangled private-key marker.
//
// @evidence contracts/testing.md#behavioral-verification The output retains all authored public members and contains no mangled private-key marker.
// @evidence contracts/testing.md#independent-expectations JavaScript private fields are not publicly accessible structural properties; including their internal binder names would emit invalid access while dropping public data would weaken validation.
// @evidence contracts/testing.md#distinguishing-cases Classes with private and public members share one fixture, so exclusion is paired with positive public property preservation.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestPrivateFieldFilterIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestPrivateFieldFilterIsTransform(t *testing.T) {
  project := privateFieldFilterProject(t)

  ts := privateFieldFilterTransform(t, project, "ts")
  // A `#private` member surfaces in a validator only as a mangled key —
  // `input["�#1@#secret"]`. The class SOURCE (echoed above the validators)
  // also spells `#secret`, so the bare name is not a defect marker; the `@#`
  // infix is unique to the mangled key and never appears in class source, so it
  // is the exact byte signature of the leak.
  if strings.Contains(ts, "@#") {
    t.Fatalf("emit references a mangled #private key (leaked into validated shape):\n%s", ts)
  }
  // The public shape must still be validated.
  for _, needle := range []string{"input.label", "input.tag"} {
    if !strings.Contains(ts, needle) {
      t.Fatalf("emit dropped a public property %q:\n%s", needle, ts)
    }
  }

}

func privateFieldFilterProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "private-field-filter-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(privateFieldFilterTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(privateFieldFilterSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func privateFieldFilterTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("private field filter transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

const privateFieldFilterTSConfig = `{
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

const privateFieldFilterSource = `import typia from "typia";

export class Box {
  #secret: boolean;
  public label: string;
  constructor(label: string, secret: boolean) {
    this.label = label;
    this.#secret = secret;
  }
}

export class SubBox extends Box {
  #extra: number;
  public tag: string;
  constructor() {
    super("hi", true);
    this.#extra = 1;
    this.tag = "t";
  }
}

export class SoloPrivate {
  #solo: string;
  constructor() {
    this.#solo = "x";
  }
}

export class MethodPrivate {
  public label: string;
  #hidden(): number {
    return 1;
  }
  get #view(): number {
    return 2;
  }
  set #view(_next: number) {}
  constructor(label: string) {
    this.label = label;
    void this.#hidden();
    this.#view = this.#view;
  }
}

export class KeywordBox {
  private secret: boolean;
  protected token: string;
  public label: string;
  constructor(label: string, secret: boolean, token: string) {
    this.label = label;
    this.secret = secret;
    this.token = token;
  }
}

export const isBox = typia.createIs<Box>();
export const assertBox = typia.createAssert<Box>();
export const validateBox = typia.createValidate<Box>();
export const isSubBox = typia.createIs<SubBox>();
export const isSolo = typia.createIs<SoloPrivate>();
export const isMethod = typia.createIs<MethodPrivate>();
export const isKeyword = typia.createIs<KeywordBox>();
`
