//go:build ttsc_typescript_7_1

package main

import (
  "os"
  "path/filepath"
  "reflect"
  "regexp"
  "strings"
  "testing"

  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// TestContentMapperTransform verifies inherited compiler flags expose mapped
// types to typia and Program.Close releases their mapper project.
//
// The native command reloads a Program inside the plugin host. Its nil TsgoArgs
// must inherit the launcher environment, including the explicit permission to
// execute content mappers; typia must inspect mapped types rather than any.
//
// 1. Build without permission and require TS18068 without launching a mapper.
// 2. Forward --runExternalCode and build string-property validators and schemas.
// 3. Change the SQL column, rebuild and require the new property and closeProject.
//
// @evidence contracts/testing.md#behavioral-verification Invokes runBuild with its real LoadProgram path, requires the compiler permission diagnostic and no mapper log without the flag, then checks validator string-property guards and schema literals for two mapped column names and observes closeProject after each build.
// @evidence contracts/testing.md#independent-expectations The fixture mapper declares one string column named by query.sql. TypeScript's external-code permission gate supplies TS18068; the authored column and string type determine the required validator guard and schema properties independently of typia output.
// @evidence contracts/testing.md#distinguishing-cases Denied execution must not start the mapper. Allowed name and label builds must retain their own column and reject the old column's validator shape. Every allowed build must close its project. Runtime positive, missing-property and wrong-type verdicts belong to the companion CLI consumer case.
// @evidence contracts/testing.md#execution-ownership The tagged Go command test executes only on the 7.1 target through test:go:7.1. It invokes the command in process and starts a real Node mapper because flag inheritance, mapped declarations and Program.Close cannot be proved by a fake host.
// @evidence contracts/e2e.md#necessary-boundary The compiler must start the real framed-JSON-RPC mapper, pass its declarations to the native transformer, and close it after the command; a direct metadata unit cannot verify that connection.
// @evidence contracts/e2e.md#shared-execution One fixture and mapper implementation serve the permission control and both column states. Fresh Programs are necessary to observe changed external input and separate lifetimes, while declaration dependencies are shared by the existing fixture helper.
// @evidence contracts/e2e.md#state-isolation-and-reuse-validity The fixture owns its SQL, outputs and mapper log; each command closes its Program before the next column is written. t.Setenv restores the inherited flags and test cleanup removes only this writable fixture.
// @evidence contracts/e2e.md#preserved-coverage This new native-host case owns inherited permission and mapper close checks; the companion installed-CLI case retains executable validator and schema assertions for both source states.
func TestContentMapperTransform(t *testing.T) {
  project := ttscTypiaTestFixtureDirectory(t, "content-mapper-")
  mapper := filepath.Join(project, "node_modules", "sql-mapper")
  if err := os.MkdirAll(mapper, 0o755); err != nil { t.Fatal(err) }
  script, err := os.ReadFile(filepath.Join(ttscTypiaTestRepoRoot(t), "tests", "test-typia-schema", "fixtures", "content-mapper", "mapper.cjs"))
  if err != nil { t.Fatal(err) }
  for name, text := range map[string]string{
    "tsconfig.json": `{"compilerOptions":{"target":"es2022","module":"nodenext","moduleResolution":"nodenext","strict":true,"skipLibCheck":true,"outDir":"out"},"files":["index.ts"],"contentMappers":[{"package":"sql-mapper","extensions":[".sql"]}]}`,
    "index.ts": `import typia from "typia"; import { query } from "./query.sql"; export const isRow = typia.createIs<typeof query>(); export const schema = typia.json.schema<typeof query>();`,
    "query.sql": "name\n",
    "node_modules/sql-mapper/package.json": `{"name":"sql-mapper","version":"1.0.0","typescript":{"contentMapper":{"exec":["node","./mapper.cjs"]}}}`,
    "node_modules/sql-mapper/mapper.cjs": string(script),
  } { if err := os.WriteFile(filepath.Join(project,name),[]byte(text),0o644);err!=nil {t.Fatal(err)} }
  t.Setenv(driver.TsgoArgsEnv, "[]")
  _, errors, code := ttscTypiaTestCapture(func() int { return runBuild([]string{"--cwd",project,"--emit"}) })
  if code==0 || !strings.Contains(errors,"TS18068") {t.Fatalf("missing permission gate: %d\n%s",code,errors)}
  logPath:=filepath.Join(mapper,"mapper.log")
  if _,err:=os.Stat(logPath); !os.IsNotExist(err) {t.Fatalf("denied mapper launched: %v",err)}
  t.Setenv(driver.TsgoArgsEnv, `["--runExternalCode"]`)
  previous:=""
  for _,column:=range []string{"name","label"} {
    if err:=os.WriteFile(filepath.Join(project,"query.sql"),[]byte(column+"\n"),0o644);err!=nil{t.Fatal(err)}
    if previous!="" {if err:=os.Remove(logPath);err!=nil{t.Fatal(err)}}
    _,errors,code=ttscTypiaTestCapture(func()int{return runBuild([]string{"--cwd",project,"--emit"})})
    if code!=0 {t.Fatalf("mapped build: %d\n%s",code,errors)}
    emitted,err:=os.ReadFile(filepath.Join(project,"out","index.js"));if err!=nil{t.Fatal(err)}
    guard:=regexp.MustCompile(`(?:"string"\s*===\s*typeof input\.`+column+`\b|typeof input\.`+column+`\s*===\s*"string")`)
    if !guard.Match(emitted) {t.Fatalf("lost mapped string guard %s:\n%s",guard,emitted)}
    if previous!=""&&strings.Contains(string(emitted),`typeof input.`+previous) {t.Fatalf("stale mapped property:\n%s",emitted)}
    schema:=ttscTypiaTestSchemaLiteral(t,string(emitted))
    root,ok:=schema["schema"].(map[string]any)
    if !ok||!reflect.DeepEqual(root["properties"],map[string]any{column:map[string]any{"type":"string"}})||!reflect.DeepEqual(root["required"],[]any{column}) {t.Fatalf("wrong mapped schema: %#v",schema)}
    log,err:=os.ReadFile(logPath);if err!=nil||!strings.Contains(string(log),"closeProject\n"){t.Fatalf("mapper not closed: %v\n%s",err,log)}
    previous=column
  }
}
