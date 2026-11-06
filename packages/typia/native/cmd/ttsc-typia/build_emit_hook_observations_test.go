package main

import (
  "crypto/sha256"
  "encoding/hex"
  "encoding/json"
  "errors"
  "os"
  "path/filepath"
  "slices"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

func init() { driver.RegisterPlugin(buildObservationPlugin{}) }

// TestBuildEmitHookObservations verifies linked-hook external-input reports and
// explicit incompleteness survive the native build boundary.
//
// The host cannot reconstruct a hook's consumed bytes from the filesystem after
// the hook returns. Its supplied proof and limitations must reach ttsc intact.
//
// 1. Consume and report one external file through the driver's linked-hook seam.
// 2. Exercise complete, incomplete, unproved, changed-after-read and failing hooks.
// 3. Assert original proof, diagnostics and empty failed-build provenance.
//
// @evidence contracts/testing.md#behavioral-verification Real in-process linked hooks feed runBuild input hashes, physical paths and incompleteness. A hook changing the file after its read must retain its original hash; a failing hook retains observations and publishes no script ownership.
// @evidence contracts/testing.md#independent-expectations Authored external text and independently computed SHA-256 define consumed content. Explicit incomplete reports cannot be promoted to completeness, and an error cannot publish a successful artifact.
// @evidence contracts/testing.md#distinguishing-cases Complete, explicitly incomplete, unproved, post-read mutation and failure cases share one registered hook but isolated files and Programs. An unproved read retains its path without invented hash or physical identity; ordinary unlinked builds are covered by the companion observation test.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes this unit test through in-process driver registration and runBuild. The supported plugin seam supplies reports without patching driver methods; t.Setenv restores selection after each subcase.
func TestBuildEmitHookObservations(t *testing.T) {
  for _, mode := range []string{"complete", "incomplete", "unproved", "mutate", "fail"} {
    t.Run(mode, func(t *testing.T) {
      root := buildAtomicityProject(t, false)
      external := filepath.Join(root, "external.txt")
      buildObservationWrite(t, external, "consumed\n")
      payload, _ := json.Marshal([]driver.PluginEntry{{Name: "observation-test", Stage: "transform", Config: map[string]any{"mode": mode}}})
      t.Setenv(driver.LinkedPluginsEnv, string(payload))
      observed, proof := filepath.Join(root, "observations.json"), filepath.Join(root, "provenance.json")
      _, errors, code := ttscTypiaTestCapture(func() int {
        return runBuild([]string{"--cwd", root, "--emit-observations-json", observed, "--emit-provenance-json", proof})
      })
      if (code != 0) != (mode == "fail") {
        t.Fatalf("status %d\n%s", code, errors)
      }
      result := buildObservationRead(t, observed)
      if !slices.Contains(result.Inputs, external) {
        t.Fatalf("lost external input: %#v", result)
      }
      if mode == "unproved" {
        if result.Hashes[external] != nil || result.Realpaths[external] != nil {
          t.Fatal("invented proof for an unproved hook read")
        }
        return
      }
      hash := sha256.Sum256([]byte("consumed\n"))
      actual := result.Hashes[external]
      if !slices.Contains(result.Inputs, external) || actual == nil || *actual != hex.EncodeToString(hash[:]) {
        t.Fatalf("lost consumed external input: %#v", result)
      }
      expectedPhysical, err := filepath.EvalSymlinks(external)
      if err != nil {
        t.Fatal(err)
      }
      if physical := result.Realpaths[external]; physical == nil || *physical != expectedPhysical {
        t.Fatalf("lost physical proof: %#v", result.Realpaths)
      }
      incomplete := result.Complete != nil && !*result.Complete
      if incomplete != (mode == "incomplete") {
        t.Fatalf("wrong completeness in %s: %#v", mode, result.Complete)
      }
      if mode == "fail" {
        var owners map[string][]string
        data, err := os.ReadFile(proof)
        if err != nil {
          t.Fatal(err)
        }
        if err := json.Unmarshal(data, &owners); err != nil || len(owners) != 0 {
          t.Fatalf("failed hook published output: %s (%v)", data, err)
        }
      }
    })
  }
}

type buildObservationPlugin struct{}

// ApplyProgram supplies fixture-owned external observations through the public
// linked-hook interface; it changes no compiler or host method.
func (buildObservationPlugin) ApplyProgram(_ *driver.Program, ctx driver.PluginContext) error {
  input := filepath.Join(ctx.Cwd, "external.txt")
  data, err := os.ReadFile(input)
  if err != nil {
    return err
  }
  if ctx.Entry.Config["mode"] == "unproved" {
    ctx.ReportHostInput(input)
    return nil
  }
  digest := sha256.Sum256(data)
  hash := hex.EncodeToString(digest[:])
  ctx.ReportHostInputHash(input, &hash)
  physical, err := filepath.EvalSymlinks(input)
  if err != nil {
    return err
  }
  ctx.ReportHostInputRealpath(input, &physical)
  switch ctx.Entry.Config["mode"] {
  case "incomplete":
    ctx.ReportObservationIncomplete()
  case "mutate":
    return os.WriteFile(input, []byte("changed after consumption\n"), 0o644)
  case "fail":
    return errors.New("authored hook failure")
  }
  return nil
}
