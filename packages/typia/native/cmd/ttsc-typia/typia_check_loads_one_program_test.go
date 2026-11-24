package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "strings"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// The driver pairs manifest entries with registrations by position, and Go
// runs package init functions in file-name order. This registration follows
// the ones in build_emit_hook_observations_test.go (entry 0) and
// transform_prints_files_rewritten_outside_typia_test.go (entry 1), so it
// answers manifest entry 2.
func init() { driver.RegisterPlugin(typiaCheckLoadProbe{}) }

// typiaCheckLoads counts driver.LoadProgram calls that selected the probe.
var typiaCheckLoads int

// typiaCheckValidSource is a source whose only typia call transforms cleanly.
const typiaCheckValidSource = `import typia from "typia";
export const isValue = (input: unknown): input is { value: number } =>
  typia.is<{ value: number }>(input);
`

func typiaCheckWrite(t *testing.T, file, text string) {
  t.Helper()
  if err := os.MkdirAll(filepath.Dir(file), 0o755); err != nil {
    t.Fatal(err)
  }
  if err := os.WriteFile(file, []byte(text), 0o644); err != nil {
    t.Fatal(err)
  }
}

// typiaCheckLoadProbe is a linked SourcePreamblePlugin contributing no text.
// LoadProgram asks every linked plugin for its preamble once per load, so the
// calls count Program loads.
type typiaCheckLoadProbe struct{}

func (typiaCheckLoadProbe) SourcePreamble(driver.PluginContext) (string, error) {
  typiaCheckLoads++
  return "", nil
}

// TestTypiaCheckLoadsOneProgram verifies an analysis-only `check` answers from
// the one Program it loads, with the diagnostics and linked-hook outcome the
// emit lane would report.
//
// `check` used to load the project, diagnose it, then load it again with emit
// forced so typia's transformer could run inside the emit pipeline. The
// analysis now runs typia's transformer over the first Program, so it must
// still reach every file the emit lane transforms, including under
// emitDeclarationOnly, which the forced reload cleared, and still run the
// linked program hooks.
//
//  1. Select two linked ProgramPlugins and the load-counting probe.
//  2. Check a project with an invalid typia call, the same project under
//     emitDeclarationOnly, a valid project and a failing linked hook.
//  3. Require one load each, the typia diagnostic, a clean pass and the hook's
//     failure respectively.
//
// @evidence contracts/testing.md#behavioral-verification run("check") must report the typia diagnostic with its location, pass a valid project silently and surface a linked hook's error, each after exactly one LoadProgram; a forced-emit reload, a missed file or a skipped hook fails an assertion.
// @evidence contracts/testing.md#independent-expectations The authored generic typia.is call must fail at src/main.ts:3:9, the authored hook returns "authored hook failure", and one LoadProgram per invocation is the issue's acceptance criterion.
// @evidence contracts/testing.md#distinguishing-cases Invalid, emitDeclarationOnly-invalid, valid and hook-failure cases; the emitDeclarationOnly twin distinguishes a selection computed from the noEmit Program's own options, which would analyze nothing. Existing noEmit tests own manifest, verbose and allowImportingTsExtensions behavior.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit test; linked plugins are selected with t.Setenv and the command runs in process through run.
func TestTypiaCheckLoadsOneProgram(t *testing.T) {
  for _, tc := range []struct {
    name            string
    declarationOnly bool
    valid           bool
    hook            string
    status          int
    stderr          string
  }{
    {name: "transform-failure", hook: "complete", status: 3, stderr: "src/main.ts:3:9 - error TS(typia.is):"},
    {name: "declaration-only", declarationOnly: true, hook: "complete", status: 3, stderr: "src/main.ts:3:9 - error TS(typia.is):"},
    {name: "valid", valid: true, hook: "complete", status: 0},
    {name: "hook-failure", hook: "fail", status: 3, stderr: "ttsc-typia build: emit failed: authored hook failure"},
  } {
    t.Run(tc.name, func(t *testing.T) {
      project := buildNoEmitDiagnosticProject(t, false)
      if tc.declarationOnly {
        config := filepath.Join(project, "tsconfig.json")
        text, err := os.ReadFile(config)
        if err != nil {
          t.Fatal(err)
        }
        typiaCheckWrite(t, config, strings.Replace(string(text), `"declaration": true,`, `"declaration": true,
    "emitDeclarationOnly": true,`, 1))
      }
      if tc.valid {
        typiaCheckWrite(t, filepath.Join(project, "src", "main.ts"), typiaCheckValidSource)
      }
      typiaCheckWrite(t, filepath.Join(project, "external.txt"), "consumed\n")
      payload, _ := json.Marshal([]driver.PluginEntry{
        {Name: "observation-test", Stage: "transform", Config: map[string]any{"mode": tc.hook}},
        {Name: "linked-edit", Stage: "transform", Config: map[string]any{}},
        {Name: "load-probe", Stage: "transform", Config: map[string]any{}},
      })
      t.Setenv(driver.LinkedPluginsEnv, string(payload))
      typiaCheckLoads = 0
      out, errText, code := ttscTypiaTestCapture(func() int {
        return run([]string{"check", "--cwd", project, "--tsconfig", "tsconfig.json"})
      })
      if code != tc.status || typiaCheckLoads != 1 {
        t.Fatalf("check = %d after %d loads, want %d after one\nstdout=%s\nstderr=%s", code, typiaCheckLoads, tc.status, out, errText)
      }
      normalized := filepath.ToSlash(errText)
      if tc.stderr == "" {
        if strings.TrimSpace(out+errText) != "" {
          t.Fatalf("a passing check printed output:\nstdout=%s\nstderr=%s", out, errText)
        }
      } else if !strings.Contains(normalized, tc.stderr) {
        t.Fatalf("check lost %q:\n%s", tc.stderr, errText)
      }
      if tc.hook == "fail" && strings.Contains(normalized, "TS(typia") {
        t.Fatalf("a failed linked hook must stop the analysis before typia runs:\n%s", errText)
      }
    })
  }
}
