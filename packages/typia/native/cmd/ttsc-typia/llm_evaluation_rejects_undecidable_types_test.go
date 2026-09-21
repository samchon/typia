package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestLlmEvaluationRejectsUndecidableTypes verifies typia.llm.evaluation
// rejects every position an evaluation model cannot answer.
//
// An evaluation model answers only closed sets: booleans, one option of a
// literal union, a level of a numeric union, and membership in a literal set.
// Every other shape, a leaf without the JSDoc text that becomes its question,
// and a decision type that asks nothing must fail at compile time on the exact
// accessor, instead of emitting a question the model cannot receive or a value
// decode() can never produce. A valid neighbor type in the same project is
// the positive twin that must keep compiling.
//
//  1. Build one project with one call per rejected shape, and a separate
//     project with a valid decision type.
//  2. Require the first build to fail through the transform-diagnostic path.
//  3. Require each rejected accessor with its message, and the valid project
//     to compile.
func TestLlmEvaluationRejectsUndecidableTypes(t *testing.T) {
  errText := llmEvaluationDiagnosticsBuild(t, "undecidable", llmEvaluationUndecidableSource)
  for _, expected := range []string{
    "- $input\n  - LLM evaluation type must be an object type.",
    "- $input\n  - LLM evaluation type must be a single object type.",
    "- $input\n  - LLM evaluation type must have at least one decision property.",
    "- $input\n  - LLM evaluation does not support dynamic keys.",
    "- $input.text\n  - LLM evaluation supports only boolean",
    "- $input.count\n  - LLM evaluation supports only boolean",
    "- $input.big\n  - LLM evaluation supports only boolean",
    "- $input.template\n  - LLM evaluation supports only boolean",
    "- $input.date\n  - LLM evaluation supports only boolean",
    "- $input.tuple\n  - LLM evaluation supports only boolean",
    "- $input.map\n  - LLM evaluation supports only boolean",
    "- $input.sole\n  - LLM evaluation does not support a single literal value, because it decides nothing.",
    "- $input.yes\n  - LLM evaluation does not support a single literal value, because it decides nothing.",
    "- $input.mixed\n  - LLM evaluation does not support union types mixing different question kinds.",
    "- $input.flagOrLabel\n  - LLM evaluation does not support union types mixing different question kinds.",
    "- $input.bigints\n  - LLM evaluation does not support bigint literal types.",
    "- $input.nullable\n  - LLM evaluation does not support nullable properties.",
    "- $input.optional\n  - LLM evaluation does not support optional, undefined, void, or never properties, because every property of the result needs an answer.",
    "- $input.undefinable\n  - LLM evaluation does not support optional, undefined, void, or never properties, because every property of the result needs an answer.",
    "- $input.voided\n  - LLM evaluation does not support optional, undefined, void, or never properties, because every property of the result needs an answer.",
    "- $input.impossible\n  - LLM evaluation does not support optional, undefined, void, or never properties, because every property of the result needs an answer.",
    "- $input.objects\n  - LLM evaluation does not support union types.",
    "- $input.rows\n  - LLM evaluation supports only arrays of a string literal union or string enum.",
    "- $input.levels\n  - LLM evaluation supports only arrays of a string literal union or string enum.",
    "- $input.tagged\n  - LLM evaluation does not support array type tags, because the answered members decide the array.",
    "- $input.record\n  - LLM evaluation does not support dynamic keys.",
    "- $input.empty\n  - LLM evaluation object must have at least one decision property.",
    "- $input.node.child\n  - LLM evaluation does not support recursive types.",
    "- $input.undocumented\n  - LLM evaluation property must have a JSDoc description, because it is the question text.",
    "- $input.blank\n  - LLM evaluation property must have a JSDoc description, because it is the question text.",
    "- $input.nbsp\n  - LLM evaluation property must have a JSDoc description, because it is the question text.",
    "- $input.tagOnly\n  - LLM evaluation property must have a JSDoc description, because it is the question text.",
    "- $input.secret\n  - LLM evaluation does not support hidden properties, because every property of the result needs an answer.",
    "- $input.method\n  - LLM evaluation does not support function properties.",
    "- $input.anything\n  - LLM evaluation does not support any or unknown types, because an evaluation model answers only closed sets.",
    "- $input.opaque\n  - LLM evaluation does not support any or unknown types, because an evaluation model answers only closed sets.",
  } {
    if !strings.Contains(errText, expected) {
      t.Fatalf("llm.evaluation diagnostic missing %q:\n%s", expected, errText)
    }
  }
  llmEvaluationAccepts(t, "undecidable-valid", llmEvaluationUndecidableValidSource)
}

// llmEvaluationDiagnosticsBuild builds a fixture project that must fail through
// the transform-diagnostic path and returns its normalized stderr.
func llmEvaluationDiagnosticsBuild(t *testing.T, name string, source string) string {
  t.Helper()
  dir := llmEvaluationProject(t, name, source)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(dir, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("%s llm.evaluation build should fail with code 3, got %d\nstderr=%s", name, code, errText)
  }
  normalized := strings.ReplaceAll(filepath.ToSlash(errText), "\r\n", "\n")
  if !strings.Contains(normalized, "error TS(typia.llm.evaluation):") {
    t.Fatalf("%s llm.evaluation diagnostic code missing:\n%s", name, errText)
  }
  return normalized
}

// llmEvaluationAccepts builds a fixture project that must compile without any
// diagnostic. A positive twin lives in its own project because diagnostic
// line numbers are not a reliable way to prove a call stayed quiet.
func llmEvaluationAccepts(t *testing.T, name string, source string) {
  t.Helper()
  dir := llmEvaluationProject(t, name, source)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(dir, "dist"),
    })
  })
  if code != 0 {
    t.Fatalf("%s positive twin must compile, got code %d\nstderr=%s", name, code, errText)
  }
}

// llmEvaluationProject writes a single-file fixture project and returns its
// directory, removed when the test ends.
func llmEvaluationProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "llm-evaluation-"+name+"-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(llmEvaluationDiagnosticsTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const llmEvaluationDiagnosticsTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const llmEvaluationUndecidableValidSource = `import typia from "typia";

interface IValid {
  /** Is it urgent? */
  urgent: boolean;
  /** Which team? */
  team: "billing" | "technical";
}
typia.llm.evaluation<IValid>();
`

const llmEvaluationUndecidableSource = `import typia, { tags } from "typia";

interface IFlag {
  /** Is it urgent? */
  urgent: boolean;
}
interface IOther {
  /** Is it late? */
  late: boolean;
}
typia.llm.evaluation<any>();
typia.llm.evaluation<IFlag | IOther>();
typia.llm.evaluation<{}>();
typia.llm.evaluation<Record<string, boolean>>();

interface INode {
  /** Is it a leaf? */
  leaf: boolean;
  child: INode;
}

typia.llm.evaluation<{
  /** Text? */ text: string;
  /** Count? */ count: number;
  /** Big? */ big: bigint;
  /** Template? */ template: ` + "`id-${string}`" + `;
  /** Date? */ date: Date;
  /** Tuple? */ tuple: [boolean];
  /** Map? */ map: Map<string, boolean>;
  /** Sole? */ sole: "only";
  /** Yes? */ yes: true;
  /** Mixed? */ mixed: "one" | 2;
  /** Flag or label? */ flagOrLabel: boolean | "label";
  /** Bigints? */ bigints: 1n | 2n;
  /** Nullable? */ nullable: boolean | null;
  /** Optional? */ optional?: boolean;
  /** Undefinable? */ undefinable: boolean | undefined;
  /** Voided? */ voided: void;
  /** Impossible? */ impossible: never;
  objects: { /** A? */ a: boolean } | { /** B? */ b: boolean };
  /** Rows? */ rows: Array<{ /** Row? */ row: boolean }>;
  /** Levels? */ levels: Array<1 | 2>;
  /** Tagged? */ tagged: Array<"a" | "b"> & tags.MinItems<1>;
  record: Record<string, boolean>;
  empty: {};
  node: INode;
  undocumented: boolean;
  /**   */ blank: boolean;
  /** @probability 0.5 */ tagOnly: boolean;
  /**   */ nbsp: boolean;
  /**
   * Secret?
   *
   * @hidden
   */
  secret: boolean;
  /** Method? */ method: () => boolean;
  /** Anything? */ anything: any;
  /** Opaque? */ opaque: unknown;
}>();
`
