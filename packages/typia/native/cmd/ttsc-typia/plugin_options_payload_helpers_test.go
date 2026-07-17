package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// pluginOptionsPayloadCase is one row of the #1887 regression matrix: a project
// whose tsconfig the user wrote a particular way, the payload ttsc resolves that
// tsconfig into and hands the plugin, and whether typia's `functional` option is
// on as a result.
//
// `functional` is the probe because its effect is visible in the transform's own
// output: with the option on, a function-typed property becomes significant and
// the emitted validator checks it; with the option off, the property is skipped.
type pluginOptionsPayloadCase struct {
  name string
  // base is a base tsconfig the leaf `extends`, or "" for a single-file project.
  base string
  // leafPlugins is the `compilerOptions.plugins` text of the leaf tsconfig, or
  // "" when the leaf declares no plugins at all.
  leafPlugins string
  // payload is the `--plugins-json` manifest ttsc sends for this project.
  payload string
  // functional is whether the emitted validator must check the function-typed
  // property.
  functional bool
}

// pluginOptionsPayloadCases returns the matrix every host must satisfy.
//
// Each row pairs the tsconfig the user wrote with the payload the host resolves
// it into, so the oracle is ttsc's plugin contract rather than typia's current
// output. The rows are the reproduction table of samchon/typia#1887: the
// comment and sibling-entry rows prove typia no longer matches option names
// against raw tsconfig text, and the `extends` row proves it no longer ignores
// the entry that loaded it.
func pluginOptionsPayloadCases() []pluginOptionsPayloadCase {
  return []pluginOptionsPayloadCase{
    {
      // The documented shape, and the only one the old scrape read correctly.
      // Pins behaviour that must not change.
      name:        "option inline on typia's entry",
      leafPlugins: `[{ "transform": "typia/lib/transform", "functional": true }]`,
      payload:     `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`,
      functional:  true,
    },
    {
      // The user disabled the option. tsconfig is JSONC, so the host drops the
      // comment and typia's entry carries nothing.
      name: "option commented out with a line comment",
      leafPlugins: `[{
        "transform": "typia/lib/transform"
        // "functional": true
      }]`,
      payload:    `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      functional: false,
    },
    {
      name: "option commented out with a block comment",
      leafPlugins: `[{
        "transform": "typia/lib/transform"
        /* "functional": true */
      }]`,
      payload:    `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`,
      functional: false,
    },
    {
      // A transform host carries every transform-stage plugin's entry. The
      // option belongs to the sibling, and reading it would be reading someone
      // else's configuration.
      name: "option owned by another plugin's entry",
      leafPlugins: `[
        { "transform": "other/lib/transform", "functional": true },
        { "transform": "typia/lib/transform" }
      ]`,
      payload: `[
        {"config":{"transform":"other/lib/transform","functional":true},"name":"other","stage":"transform"},
        {"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}
      ]`,
      functional: false,
    },
    {
      // The standard monorepo layout: a shared base declares the plugin and its
      // options, the leaf only extends it. The host resolved the chain and sent
      // the merged entry -- which is why the plugin is running at all.
      name: "option declared in a base tsconfig the leaf extends",
      base: `{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform", "functional": true }]
  }
}
`,
      payload:    `[{"config":{"transform":"typia/lib/transform","functional":true},"name":"typia","stage":"transform"}]`,
      functional: true,
    },
  }
}

// pluginOptionsPayloadProject materializes one matrix row as a real project: the
// tsconfig exactly as the user wrote it (comments, sibling entries, `extends`
// chain and all), a typia stub to resolve the import against, and a source file
// with a function-typed property for the option to act on.
func pluginOptionsPayloadProject(t *testing.T, tc pluginOptionsPayloadCase) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }

  extends := ""
  if tc.base != "" {
    if err := os.WriteFile(filepath.Join(project, "tsconfig.base.json"), []byte(tc.base), 0o644); err != nil {
      t.Fatalf("write base tsconfig: %v", err)
    }
    extends = `"extends": "./tsconfig.base.json",
  `
  }
  plugins := ""
  if tc.leafPlugins != "" {
    plugins = `,
    "plugins": ` + tc.leafPlugins
  }
  config := `{
  ` + extends + `"compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist"` + plugins + `
  },
  "include": ["src"]
}
`
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(config), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(pluginOptionsPayloadSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

// pluginOptionsPayloadAssert checks one host's output against the row's expected
// option state.
func pluginOptionsPayloadAssert(t *testing.T, tc pluginOptionsPayloadCase, output string) {
  t.Helper()
  checked := pluginOptionsPayloadFunctionalCheck(output)
  if checked == tc.functional {
    return
  }
  if tc.functional {
    t.Fatalf("functional is configured on but the validator skipped the function property:\n%s", output)
  }
  t.Fatalf("functional is not configured but the validator checked the function property:\n%s", output)
}

func pluginOptionsPayloadFunctionalCheck(output string) bool {
  return strings.Contains(output, pluginOptionsPayloadFunctionalNeedle)
}

// pluginOptionsPayloadFunctionalNeedle is the guard typia emits for the
// function-typed property only when `functional` is enabled.
const pluginOptionsPayloadFunctionalNeedle = `"function" === typeof input.cb`

const pluginOptionsPayloadSource = `import typia from "typia";
export interface IX {
  value: number;
  cb: () => void;
}
export const check = (input: unknown): boolean => typia.is<IX>(input);
`
