package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestReflectLiteralsNonLiteralRejectionTransform verifies every argument that
// names no listable literal is refused at compile time.
//
// `reflect.literals` hands back the members of a union, so an argument it
// cannot enumerate has no answer to give. Refusing it is the point: emitting an
// empty array for `never`, or dropping the half it cannot render from a mixed
// argument, would hand the caller a list that silently disagrees with the type
// it was derived from (issue #2377).
//
// The two diagnostics stay distinguishable because they say different things:
// `NO` reports that nothing listable was found at all, while `ONLY` reports
// that something listable was found beside something that is not. Collapsing
// them would hide which half of a mixed argument is wrong.
//
//  1. Transform arguments naming no listable member: `never` and the bare
//     `null` flag, which carry nothing, and `string`, `any`, and a tag-branded
//     atomic, which carry a member that cannot be enumerated.
//  2. Transform arguments mixing a listable member with one that is not,
//     including `boolean | number`, where the listable half is an atomic rather
//     than a constant.
//  3. Assert each fails, and with the diagnostic its composition calls for.
func TestReflectLiteralsNonLiteralRejectionTransform(t *testing.T) {
  cases := []struct {
    Name     string
    Argument string
    Message  string
  }{
    {"never", "never", "no constant literal type found."},
    {"never alias", "Empty", "no constant literal type found."},
    {"exhaustive exclude", `Exclude<"a" | "b", "a" | "b">`, "no constant literal type found."},
    {"bare null", "null", "no constant literal type found."},
    {"atomic", "string", "no constant literal type found."},
    {"any", "any", "no constant literal type found."},
    {"tag branded atomic", `string & tags.Format<"uuid">`, "no constant literal type found."},
    {"nullable atomic", "string | null", "no constant literal type found."},
    {"literal beside atomic", `"a" | number`, "only constant literal types are allowed."},
    {"literal beside template", "`prefix${number}` | \"a\"", "only constant literal types are allowed."},
    {"renderable atomic beside atomic", "boolean | number", "only constant literal types are allowed."},
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.Name, func(t *testing.T) {
      project := reflectLiteralsRejectionProject(t, tc.Argument)
      out, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "js",
        })
      })
      if code == 0 {
        t.Fatalf("reflect.literals<%s> transformed successfully, want rejection:\n%s", tc.Argument, out)
      }
      if !strings.Contains(errText, "typia transform error") {
        t.Fatalf("reflect.literals<%s> diagnostics missing:\nstdout=%s\nstderr=%s", tc.Argument, out, errText)
      }
      if !strings.Contains(errText, tc.Message) {
        t.Fatalf("reflect.literals<%s> reported the wrong reason, want %q:\n%s", tc.Argument, tc.Message, errText)
      }
    })
  }
}

func reflectLiteralsRejectionProject(t *testing.T, argument string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "reflect-literals-reject-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  source := "import typia, { tags } from \"typia\";\n\nexport const values = typia.reflect.literals<" + argument + ">();\n"
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}
