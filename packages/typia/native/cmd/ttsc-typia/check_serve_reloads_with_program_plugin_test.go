package main

import (
  "encoding/json"
  "path/filepath"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestCheckServeReloadsWithProgramPlugin verifies typia's resident check loads
// a fresh Program for every cycle while a linked ProgramPlugin is selected.
//
// typia's analysis reads the ASTs the linked program hooks produce, and such a
// hook rewrites them in place, so a kept Program would show the next cycle
// source an earlier cycle already rewrote.
//
//  1. Select buildObservationPlugin, a ProgramPlugin without CheckProgram, as
//     linked manifest entry 0.
//  2. Answer a passing cycle, then a transform failure after an edit of a
//     known source.
//  3. Require a new load and no update for each cycle, each answer equal to a
//     cold check.
//
// @evidence contracts/testing.md#behavioral-verification check-serve cycles with a linked ProgramPlugin must report one more load and no update per cycle, never reused, and match cold `check` status and output; a kept Program fails the counters.
// @evidence contracts/testing.md#independent-expectations The residency rule (a mutating linked hook requires a fresh Program) fixes the counters; cold `check` of the same files is the oracle for the answers.
// @evidence contracts/testing.md#distinguishing-cases An edit of a known source would be an incremental update without the plugin, as TestCheckServeMatchesColdCheck asserts; here it must reload, and both a passing and a failing answer are compared.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers this unit test; the plugin is selected with t.Setenv and check-serve runs in a goroutine of the test process.
func TestCheckServeReloadsWithProgramPlugin(t *testing.T) {
  root := checkServeProject(t)
  main := filepath.Join(root, "src", "main.ts")
  typiaCheckWrite(t, main, typiaCheckValidSource)
  // buildObservationPlugin consumes this file on every application.
  typiaCheckWrite(t, filepath.Join(root, "external.txt"), "consumed\n")
  payload, _ := json.Marshal([]driver.PluginEntry{{Name: "observation-test", Stage: "transform", Config: map[string]any{"mode": "complete"}}})
  t.Setenv(driver.LinkedPluginsEnv, string(payload))
  args := []string{"--tsconfig=" + filepath.Join(root, "tsconfig.json"), "--cwd=" + root}
  serve := startCheckServe(t, args)

  first := serve.send(t, `{}`)
  if first.Status != 0 || first.Telemetry.ProgramLoads != 1 || first.Telemetry.Reused {
    t.Fatalf("first cycle = %#v", first)
  }
  checkServeAssertCold(t, args, first)

  typiaCheckWrite(t, main, transformDiagnosticSource)
  second := serve.send(t, checkServeChanged(t, main))
  if second.Status != 3 || second.Telemetry.ProgramLoads != 2 ||
    second.Telemetry.ProgramUpdates != 0 || second.Telemetry.Reused || !second.TypeScriptDiagnosticsReported {
    t.Fatalf("edited cycle = %#v", second)
  }
  checkServeAssertCold(t, args, second)
  if code := serve.stop(); code != 0 {
    t.Fatalf("check-serve exited with %d after stdin closed", code)
  }
}
