package main

import (
  "strings"
  "testing"
)

// Evaluation promises to decode the entire T. Every required member must
// become a question or fail compilation, including inherited/nested members.
func TestLlmEvaluationCompleteObjectShape(t *testing.T) {
  accepted := map[string]string{
    "getter only": `class Decision {
      /** Is it urgent? @probability 1 */ get urgent(): boolean { return true; }
    }`,
    "class getter": `class Decision {
      /** Is it active? */ active!: boolean;
      /** Is it urgent? @probability 1 */ get urgent(): boolean { return true; }
    }`,
    "inherited getter": `class Base {
      /** Is it urgent? @probability 1 */ get urgent(): boolean { return true; }
    }
    class Decision extends Base {
      /** Is it active? */
      active!: boolean;
    }`,
    "interface getter": `interface Decision {
      /** Is it active? */ active: boolean;
      /** Is it urgent? @probability 1 */ get urgent(): boolean;
    }`,
    "nested getter": `class Child {
      /** Is it urgent? @probability 1 */ get urgent(): boolean { return true; }
    }
    interface Decision { child: Child; }`,
    "setter": `class Decision {
      /** Is it active? */ active!: boolean;
      /** Is it urgent? @probability 1 */ set urgent(value: boolean) {}
    }`,
  }
  for name, declaration := range accepted {
    t.Run(name, func(t *testing.T) {
      source := `import typia from "typia";` + declaration + `
        export const evaluation = typia.llm.evaluation<Decision>();`
      project := llmEvaluationProject(t, "complete-"+strings.ReplaceAll(name, " ", "-"), source)
      out, diagnostic, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
      })
      if code != 0 || !strings.Contains(out, "threshold: 1") || !strings.Contains(out, `"urgent"`) {
        t.Fatalf("getter is not in the plan: code=%d threshold=%t urgent=%t diagnostic=%s", code, strings.Contains(out, "threshold: 1"), strings.Contains(out, `"urgent"`), diagnostic)
      }
    })
  }

  rejected := map[string]struct{ declaration, diagnostic string }{
    "method":        {`interface Decision { /** Is it active? */ active: boolean; execute(): void; }`, "function"},
    "private":       {`class Decision { /** Is it active? */ active!: boolean; private token = 1; }`, "private"},
    "protected":     {`class Decision { /** Is it active? */ active!: boolean; protected token = 1; }`, "protected"},
    "sharp private": {`class Decision { /** Is it active? */ active!: boolean; #token = 1; }`, "private"},
    "symbol":        {`declare const token: unique symbol; interface Decision { /** Is it active? */ active: boolean; [token]: boolean; }`, "symbol-keyed"},
    "symbol index":  {`interface Decision { /** Is it active? */ active: boolean; [key: symbol]: boolean; }`, "symbol-keyed"},
    "call":          {`interface Decision { /** Is it active? */ active: boolean; (): void; }`, "callable"},
    "construct":     {`interface Decision { /** Is it active? */ active: boolean; new(): Decision; }`, "constructable"},
    "nested method": {`interface Child { /** Is it urgent? */ urgent: boolean; execute(): void; }
      interface Decision { child: Child; }`, "function"},
    "inherited private": {`class Base { private token = 1; }
      class Decision extends Base { /** Is it active? */ active!: boolean; }`, "private"},
    "generic private": {`class Base<T> { private token!: T; }
      class Decision extends Base<boolean> { /** Is it active? */ active!: boolean; }`, "private"},
    "generic sharp private": {`class Base<T> { #token!: T; }
      class Decision extends Base<boolean> { /** Is it active? */ active!: boolean; }`, "private"},
    "interface extends private class": {`class Base { private token!: boolean; }
      interface Decision extends Base { active: boolean; }`, "private"},
    "internal": {`interface Decision {
      /** Is it active? */ active: boolean;
      /** @internal */ secret: boolean;
    }`, "hidden properties"},
    "intersection internal": {`type Decision = {
      /** Is it active? */ active: boolean;
    } & {
      /** @internal */ secret: boolean;
    };`, "hidden properties"},
    "overlapping intersection internal": {`type Decision = {
      /** Is it active? */ active: boolean;
      /** @internal */ secret: boolean;
    } & { secret: boolean };`, "hidden properties"},
  }
  for name, testcase := range rejected {
    t.Run(name, func(t *testing.T) {
      source := `import typia from "typia";` + testcase.declaration + `
        export const evaluation = typia.llm.evaluation<Decision>();`
      diagnostic := llmEvaluationDiagnosticsBuild(t, "complete-"+strings.ReplaceAll(name, " ", "-"), source)
      if !strings.Contains(diagnostic, testcase.diagnostic) {
        t.Fatalf("missing %q diagnostic: %s", testcase.diagnostic, diagnostic)
      }
    })
  }
}
