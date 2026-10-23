package main

import (
  "encoding/json"
  "os"
  "path/filepath"
  "testing"
)

// TestProjectDependenciesHeritageFormsTransform verifies both type and value
// heritage retain empty bases and phantom type arguments in dependency reports.
//
// TypeScript 7.1 represents interface extends and class implements with type
// references, while class extends keeps an expression with type arguments.
// Empty bases and unused generic arguments cannot be recovered from properties.
//
// 1. Declare aliased and qualified empty generic interfaces, classes and contracts.
// 2. Transform validators for interface, class, implements and class-expression forms.
// 3. Require all written heritage and argument files, excluding an unused sibling.
//
// @evidence contracts/testing.md#behavioral-verification Calls the real project transform and checks main.ts dependencies include each empty interface, base class, implemented contract and phantom argument file. A valid plain class without heritage is transformed in the same project and an unconsumed sibling must remain absent.
// @evidence contracts/testing.md#independent-expectations Editing any authored empty base or phantom type argument can change the consumed type, so their written references belong to the dependency contract even before they contribute a property. The unrelated interface is never referenced and must not become a dependency.
// @evidence contracts/testing.md#distinguishing-cases Interface extends, class extends, class implements and class-expression extends/implements combine named aliases, qualified namespace names and generic arguments. The plain-class and unused-file controls distinguish absent heritage from over-reporting; the existing empty-heritage test owns the minimal interface witness.
// @evidence contracts/testing.md#execution-ownership The canonical native and 7.1 Go populations discover this in-process transform unit. It shares immutable declaration inputs through the existing fixture helper and starts no compiler or JavaScript subprocess.
func TestProjectDependenciesHeritageFormsTransform(t *testing.T) {
  project := ttscTypiaTestFixtureDirectory(t, "heritage-forms-")
  if err := os.MkdirAll(filepath.Join(project, "src"), 0o755); err != nil {
    t.Fatal(err)
  }
  files := map[string]string{
    "tsconfig.json":         projectDependenciesEnvelopeTSConfig,
    "src/interface-base.ts": `export namespace Types { export interface Empty<T> {} }`,
    "src/class-base.ts":     `export class Parent<T> {}`,
    "src/contract.ts":       `export interface Contract<T> {}`,
    "src/tag.ts":            `export interface Tag { id: string }`,
    "src/unrelated.ts":      `export interface Unused { unused: string }`,
    "src/models.ts": `import { Types } from "./interface-base";
import { Parent as Base } from "./class-base";
import { Contract as ContractAlias } from "./contract";
import { Tag } from "./tag";
export interface ViaInterface extends Types.Empty<Tag> { id: string }
export class ViaClass extends Base<Tag> { id!: string }
export class ViaImplements implements ContractAlias<Tag> { id!: string }
export const Bound = class extends Base<Tag> implements ContractAlias<Tag> { id!: string };
export class Plain { id!: string }
`,
    "src/main.ts": `import typia from "typia";
import { ViaInterface, ViaClass, ViaImplements, Bound, Plain } from "./models";
export const i = typia.createIs<ViaInterface>();
export const c = typia.createIs<ViaClass>();
export const m = (input: unknown) => typia.validate<ViaImplements>(input);
export const e = typia.createIs<InstanceType<typeof Bound>>();
export const p = typia.createIs<Plain>();
`,
  }
  for name, text := range files {
    if err := os.WriteFile(filepath.Join(project, name), []byte(text), 0o644); err != nil {
      t.Fatal(err)
    }
  }
  ttscTypiaTestTypecheck(t, project)
  output, errors, code := ttscTypiaTestCapture(func() int { return runTransform([]string{"--cwd", project, "--output", "ts"}) })
  if code != 0 {
    t.Fatalf("heritage transform: %d\n%s", code, errors)
  }
  var envelope struct {
    Dependencies map[string][]string `json:"dependencies"`
  }
  if err := json.Unmarshal([]byte(output), &envelope); err != nil {
    t.Fatal(err)
  }
  found := map[string]bool{}
  for _, name := range envelope.Dependencies["src/main.ts"] {
    found[name] = true
  }
  for _, name := range []string{"models", "interface-base", "class-base", "contract", "tag"} {
    if !found["src/"+name+".ts"] {
      t.Errorf("missing %s heritage dependency: %v", name, found)
    }
  }
  if found["src/unrelated.ts"] {
    t.Errorf("unconsumed heritage was reported: %v", found)
  }
}
