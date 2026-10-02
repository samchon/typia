package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestBuildNoEmitReportsTransformDiagnostics checks the authored operation results described below.
//
// NoEmit suppresses publication rather than transform analysis, so an invalid typia call still requires its transform diagnostic. Verbose summaries belong only to the explicit verbose mode.
//
// 1. Configured and command-selected noEmit paths are checked in quiet and verbose modes, including absent output directories and incremental files.
// 2. Quiet and verbose noEmit builds return status three with the exact source location, typia.is code and missing-generic cause; neither emits artifacts.
//
// @evidence contracts/testing.md#behavioral-verification Quiet and verbose noEmit builds return status three with the exact source location, typia.is code and missing-generic cause; neither emits artifacts.
// @evidence contracts/testing.md#independent-expectations NoEmit suppresses publication rather than transform analysis, so an invalid typia call still requires its transform diagnostic. Verbose summaries belong only to the explicit verbose mode.
// @evidence contracts/testing.md#distinguishing-cases Configured and command-selected noEmit paths are checked in quiet and verbose modes, including absent output directories and incremental files.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildNoEmitReportsTransformDiagnostics as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestBuildNoEmitReportsTransformDiagnostics(t *testing.T) {
  cases := []struct {
    name       string
    configured bool
    verbose    bool
    run        func(project, manifest string) int
  }{
    {
      name: "check-command",
      run: func(project, manifest string) int {
        return run([]string{
          "check",
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--manifest", manifest,
        })
      },
    },
    {
      name:    "explicit-no-emit",
      verbose: true,
      run: func(project, manifest string) int {
        return runBuild([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--noEmit",
          "--manifest", manifest,
          "--verbose",
        })
      },
    },
    {
      name:       "configured-no-emit",
      configured: true,
      run: func(project, manifest string) int {
        return runBuild([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--manifest", manifest,
        })
      },
    },
  }
  for _, tc := range cases {
    t.Run(tc.name, func(t *testing.T) {
      project := buildNoEmitDiagnosticProject(t, tc.configured)
      manifest := filepath.Join(project, "artifacts", "manifest.json")
      out, errText, code := ttscTypiaTestCapture(func() int {
        return tc.run(project, manifest)
      })
      if code != 3 {
        t.Fatalf("analysis-only transform should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, out, errText)
      }
      normalized := filepath.ToSlash(errText)
      if !strings.Contains(normalized, "src/main.ts:3:9 - error TS(typia.is):") ||
        !strings.Contains(normalized, "non-specified generic argument") {
        t.Fatalf("analysis-only diagnostic lost detail:\n%s", errText)
      }
      if tc.verbose {
        if !strings.Contains(out, "emit=false") {
          t.Fatalf("verbose no-emit summary missing:\n%s", out)
        }
      } else if strings.TrimSpace(out) != "" {
        t.Fatalf("quiet no-emit run wrote stdout:\n%s", out)
      }
      for _, path := range []string{
        filepath.Join(project, "dist"),
        filepath.Join(project, "cache.tsbuildinfo"),
        manifest,
      } {
        if _, err := os.Stat(path); !os.IsNotExist(err) {
          t.Fatalf("analysis-only run published %s: %v", path, err)
        }
      }
    })
  }
}

func buildNoEmitDiagnosticProject(t *testing.T, noEmit bool) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  configuredNoEmit := ""
  if noEmit {
    configuredNoEmit = `,
    "noEmit": true`
  }
  config := `{
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
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "incremental": true,
    "tsBuildInfoFile": "cache.tsbuildinfo"` + configuredNoEmit + `
  },
  "include": ["src"]
}
`
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(config), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(transformDiagnosticSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}
