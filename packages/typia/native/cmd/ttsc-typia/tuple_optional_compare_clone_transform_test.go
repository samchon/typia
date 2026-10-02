package main

import (
  "crypto/sha256"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTupleOptionalCompareCloneTransform verifies equivalent optional-tuple syntax in native emission.
//
// Parentheses around an optional element's type do not change tuple membership
// or the optional marker. The original pair/triple, singleton, nested, required
// and rest fixture remains intact; only the singleton type spelling changes in
// the candidate. This is an artifact-equivalence unit, not JavaScript execution.
//
//  1. Transform the exact original authored tuple fixture in process.
//  2. Transform its two parenthesized singleton-optional call sites in the same
//     isolated project and require byte-identical complete JavaScript output.
//
// @evidence contracts/testing.md#behavioral-verification Both original and parenthesized singleton-optional fixtures transform successfully and emit identical complete JavaScript. Their source payloads must differ in exactly the two singleton call sites; all other tuple controls remain unchanged.
// @evidence contracts/testing.md#independent-expectations Grouping number inside parentheses preserves the number type and the enclosing tuple's optional element. Identical output is therefore expected independently of the native emitter; this unit does not certify the correctness of either program's JavaScript runtime outcomes.
// @evidence contracts/testing.md#distinguishing-cases The changed singleton optional equals/clone sites coexist with unchanged optional pair/triple/nested, fully required and rest controls. The shared TypeScript execution suite retains the former runtime inputs and phantom-slot/reflexivity assertions.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit Test and calls runTransform twice in process on a cleaned-up temporary fixture. No compiler or JavaScript subprocess is launched; source and artifact hashes identify the actual compared inputs and output.
func TestTupleOptionalCompareCloneTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "tuple-optional-equivalence-", tupleOptionalCompareCloneSource)
  transform := func() string {
    out, stderr, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
    })
    if code != 0 {
      t.Fatalf("tuple transform failed: code=%d stderr=%s", code, stderr)
    }
    return out
  }
  original := transform()
  if strings.Count(tupleOptionalCompareCloneSource, "[number?]") != 2 {
    t.Fatal("expected exactly the two original singleton optional sites")
  }
  candidate := strings.ReplaceAll(tupleOptionalCompareCloneSource, "[number?]", "[(number)?]")
  if err := os.WriteFile(filepath.Join(project, "src", "main.ts"), []byte(candidate), 0o644); err != nil {
    t.Fatal(err)
  }
  converted := transform()
  if converted != original {
    t.Fatalf("parenthesized optional type changed native emission:\noriginal:\n%s\ncandidate:\n%s", original, converted)
  }
  t.Logf("source AST spellings differ at two singleton optional sites: original=%x candidate=%x; same %d JavaScript bytes artifact=%x", sha256.Sum256([]byte(tupleOptionalCompareCloneSource)), sha256.Sum256([]byte(candidate)), len(original), sha256.Sum256([]byte(original)))
}

const tupleOptionalCompareCloneSource = `import typia from "typia";

export const isPair = typia.createIs<[string, number?]>();
export const equalsPair = typia.compare.createEquals<[string, number?]>();
export const clonePair = typia.plain.createClone<[string, number?]>();
export const classifyPair = typia.plain.createClassify<[string, number?]>();

export const isTriple = typia.createIs<[string, number?, boolean?]>();
export const equalsTriple = typia.compare.createEquals<[string, number?, boolean?]>();
export const cloneTriple = typia.plain.createClone<[string, number?, boolean?]>();
export const classifyTriple = typia.plain.createClassify<[string, number?, boolean?]>();

// boundary: a tuple whose only element is optional.
export const equalsSolo = typia.compare.createEquals<[number?]>();
export const cloneSolo = typia.plain.createClone<[number?]>();

// boundary: an optional trailing element that is itself a nested tuple.
export const equalsNested = typia.compare.createEquals<[string, [number, boolean]?]>();
export const cloneNested = typia.plain.createClone<[string, [number, boolean]?]>();

// control: a fully-required tuple must stay byte-identical.
export const equalsFixed = typia.compare.createEquals<[string, number]>();
export const cloneFixed = typia.plain.createClone<[string, number]>();

// control: a rest tuple must stay byte-identical.
export const equalsRest = typia.compare.createEquals<[string, ...number[]]>();
export const cloneRest = typia.plain.createClone<[string, ...number[]]>();
`
