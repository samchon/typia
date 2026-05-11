//go:build js && wasm

package main

import (
  "bytes"
  "fmt"
  "io"
  "os"
  "runtime"
  "syscall/js"
  "time"
)

// Reuse the same package-level identifiers the native CLI declares. Under
// `js && wasm`, the native `main.go` is excluded, so we re-declare them here.
var (
  version = "0.1.0-dev"
  commit  = "dev"
  date    = "unknown"
)

var (
  stdout io.Writer = os.Stdout
  stderr io.Writer = os.Stderr
)

// main keeps the Go runtime alive forever after registering the JS entry
// points. JS code calls `globalThis.ttscTypia.transform({...})` repeatedly;
// each call reuses the same Go process (no re-instantiation cost).
func main() {
  api := map[string]any{
    "transform": js.FuncOf(jsTransform),
    "build":     js.FuncOf(jsBuild),
    "version":   js.FuncOf(jsVersion),
  }
  js.Global().Set("ttscTypia", js.ValueOf(api))

  // Signal readiness so the JS host can resolve a "ready" promise.
  if ready := js.Global().Get("ttscTypiaReady"); ready.Type() == js.TypeFunction {
    ready.Invoke()
  }

  // A perpetual idle goroutine prevents Go's wasm deadlock detector from
  // tripping while syscall.fsCall callbacks are in flight. `select {}` alone
  // is wrongly classified as "all goroutines asleep" the moment the FS path
  // hands the request off to JS.
  go func() {
    for {
      time.Sleep(time.Hour)
    }
  }()
  select {}
}

// jsVersion returns the build metadata for this wasm binary.
func jsVersion(this js.Value, args []js.Value) any {
  return js.ValueOf(map[string]any{
    "version": version,
    "commit":  commit,
    "date":    date,
    "go":      runtime.Version(),
    "goos":    runtime.GOOS,
    "goarch":  runtime.GOARCH,
  })
}

// jsTransform runs the project transform pipeline on a single file.
//
// JS input shape:
//   {
//     cwd:      string,   // absolute virtual path
//     tsconfig: string,   // absolute path to tsconfig.json
//     file?:    string,   // absolute path of the .ts file to rewrite. Omit
//                         // for project-wide JSON output.
//     output?:  "ts"|"js",
//   }
//
// JS output: Promise<{ code: number, stdout: string, stderr: string }>.
//
// The handler returns a Promise so the JS event loop can drain while Go
// services its own asynchronous file-system callbacks. Returning a synchronous
// value would re-enter JS and deadlock on `fs.stat` callbacks.
//
// Caller is responsible for populating an in-memory filesystem (via the
// `globalThis.fs` shim picked up by wasm_exec.js) with every path referenced
// here before invoking transform.
func jsTransform(this js.Value, args []js.Value) any {
  if len(args) == 0 || args[0].Type() != js.TypeObject {
    return errorPromise(2, "ttsc-typia: transform requires an options object")
  }
  argv := transformArgs(args[0])
  return makePromise(func() any {
    return runWithCapturedIO(func() int { return runTransform(argv) })
  })
}

// jsBuild runs the project build pipeline. JS input mirrors jsTransform but
// has no `file`/`output`. Returns a Promise.
func jsBuild(this js.Value, args []js.Value) any {
  if len(args) == 0 || args[0].Type() != js.TypeObject {
    return errorPromise(2, "ttsc-typia: build requires an options object")
  }
  argv := buildArgs(args[0])
  return makePromise(func() any {
    return runWithCapturedIO(func() int { return runBuild(argv) })
  })
}

// makePromise wraps a Go computation as a JS Promise. The returned object is
// `new Promise((resolve, reject) => { ... })`. The executor synchronously
// captures the callbacks; the work itself runs in a goroutine so the JS event
// loop can drive `fs.stat` and friends to completion before we ask Go to
// receive the callback.
func makePromise(work func() any) js.Value {
  var executor js.Func
  executor = js.FuncOf(func(this js.Value, args []js.Value) any {
    resolve := args[0]
    reject := args[1]
    go func() {
      defer func() {
        if r := recover(); r != nil {
          err := js.Global().Get("Error").New(fmt.Sprintf("%v", r))
          reject.Invoke(err)
        }
        executor.Release()
      }()
      resolve.Invoke(work())
    }()
    return nil
  })
  return js.Global().Get("Promise").New(executor)
}

func errorPromise(code int, message string) js.Value {
  return makePromise(func() any { return errorResponse(code, message) })
}

func transformArgs(opts js.Value) []string {
  out := []string{}
  if v := stringProp(opts, "cwd"); v != "" {
    out = append(out, "--cwd="+v)
  }
  if v := stringProp(opts, "tsconfig"); v != "" {
    out = append(out, "--tsconfig="+v)
  } else {
    out = append(out, "--tsconfig=tsconfig.json")
  }
  if v := stringProp(opts, "file"); v != "" {
    out = append(out, "--file="+v)
  }
  if v := stringProp(opts, "output"); v != "" {
    out = append(out, "--output="+v)
  } else {
    out = append(out, "--output=ts")
  }
  return out
}

func buildArgs(opts js.Value) []string {
  out := []string{}
  if v := stringProp(opts, "cwd"); v != "" {
    out = append(out, "--cwd="+v)
  }
  if v := stringProp(opts, "tsconfig"); v != "" {
    out = append(out, "--tsconfig="+v)
  } else {
    out = append(out, "--tsconfig=tsconfig.json")
  }
  if outDir := stringProp(opts, "outDir"); outDir != "" {
    out = append(out, "--outDir="+outDir)
  }
  if boolProp(opts, "emit") {
    out = append(out, "--emit")
  }
  if boolProp(opts, "noEmit") {
    out = append(out, "--noEmit")
  }
  return out
}

func runWithCapturedIO(task func() int) any {
  // Swap the package-level writers so the inner Go functions feel like a
  // normal CLI invocation but their output lands in JS-visible buffers.
  // This is safe under the contract that JS calls are serialized (no
  // concurrent invocations from JS).
  oldOut, oldErr := stdout, stderr
  var outBuf, errBuf bytes.Buffer
  stdout = &outBuf
  stderr = &errBuf
  defer func() {
    stdout = oldOut
    stderr = oldErr
  }()

  code := task()
  return js.ValueOf(map[string]any{
    "code":   code,
    "stdout": outBuf.String(),
    "stderr": errBuf.String(),
  })
}

func errorResponse(code int, message string) any {
  return js.ValueOf(map[string]any{
    "code":   code,
    "stdout": "",
    "stderr": fmt.Sprintf("%s\n", message),
  })
}

func stringProp(obj js.Value, key string) string {
  v := obj.Get(key)
  if v.Type() != js.TypeString {
    return ""
  }
  return v.String()
}

func boolProp(obj js.Value, key string) bool {
  v := obj.Get(key)
  if v.Type() != js.TypeBoolean {
    return false
  }
  return v.Bool()
}
