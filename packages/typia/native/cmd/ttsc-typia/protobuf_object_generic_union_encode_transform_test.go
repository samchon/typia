package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufObjectGenericUnionEncodeTransform keeps protobuf createEncode()
// helper scopes aligned when an object-union predicate shares property helpers
// with nested object checkers. A previous transform placed `_ip*` helpers in the
// outer IIFE while their bodies referenced `_io*` helpers declared inside the
// encoder closure, causing ObjectGenericUnion to fail with `_io3 is not defined`.
func TestProtobufObjectGenericUnionEncodeTransform(t *testing.T) {
  project := protobufObjectGenericUnionProject(t)
  js := protobufObjectGenericUnionTransform(t, project)
  protobufObjectGenericUnionAssertScopedHelpers(t, js)
  protobufObjectGenericUnionRunRuntime(t, project, js)
}

func protobufObjectGenericUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "protobuf-object-generic-union-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(protobufObjectGenericUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(protobufObjectGenericUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func protobufObjectGenericUnionTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("protobuf object generic union transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func protobufObjectGenericUnionAssertScopedHelpers(t *testing.T, js string) {
  t.Helper()
  encoder := strings.Index(js, "const encoder =")
  if encoder == -1 {
    t.Fatalf("generated output is missing encoder helper:\n%s", js)
  }
  if prefix := js[:encoder]; strings.Contains(prefix, "const _ip") {
    t.Fatalf("protobuf property predicates escaped the encoder scope:\n%s", js)
  }
  if strings.Index(js[encoder:], "const _ip") == -1 || strings.Index(js[encoder:], "const _io") == -1 {
    t.Fatalf("generated output does not contain scoped predicate/checker helpers:\n%s", js)
  }
}

func protobufObjectGenericUnionRunRuntime(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  stubs := map[string]string{
    "protobuf-writer-stub.cjs":  protobufObjectGenericUnionWriterStub,
    "throw-type-guard-stub.cjs": protobufObjectGenericUnionThrowStub,
  }
  for name, content := range stubs {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write %s: %v", name, err)
    }
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_ProtobufSizer")`, `require("./protobuf-writer-stub.cjs")`)
  runtimeJS = strings.ReplaceAll(runtimeJS, `require("typia/lib/internal/_ProtobufWriter")`, `require("./protobuf-writer-stub.cjs")`)
  runtimeJS = ttscTypiaTestRewriteCommonJS(t, runtimeJS)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(protobufObjectGenericUnionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("protobuf object generic union runtime failed: %v\n%s", err, output)
  }
}

const protobufObjectGenericUnionTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const protobufObjectGenericUnionSource = `import typia from "typia";

export type ObjectGenericUnion = {
  value: ObjectGenericUnion.ISaleEntireArticle;
};

export namespace ObjectGenericUnion {
  export type ISaleEntireArticle = ISaleQuestion | ISaleReview;
  type ISaleQuestion = ISaleInquiry<ISaleQuestion.IContent>;
  namespace ISaleQuestion {
    export type IContent = ISaleInquiry.IContent;
  }
  type ISaleReview = ISaleInquiry<ISaleReview.IContent>;
  namespace ISaleReview {
    export interface IContent extends ISaleInquiry.IContent {
      score: number;
    }
  }

  interface ISaleInquiry<Content extends ISaleInquiry.IContent>
    extends ISaleArticle<Content> {
    writer: string;
    answer: ISaleAnswer | null;
  }
  namespace ISaleInquiry {
    export type IContent = ISaleArticle.IContent;
  }
  type ISaleAnswer = ISaleArticle<ISaleAnswer.IContent>;
  namespace ISaleAnswer {
    export type IContent = ISaleArticle.IContent;
  }

  interface ISaleArticle<Content extends ISaleArticle.IContent> {
    id: string;
    hit: number;
    contents: Content[];
    created_at: string;
  }
  namespace ISaleArticle {
    export interface IContent extends IUpdate {
      id: string;
      created_at: string;
    }
    export interface IUpdate {
      title: string;
      body: string;
      files: IAttachmentFile[];
    }
  }

  export interface IAttachmentFile {
    name: string;
    extension: string | null;
    url: string;
  }
}

export const encode = typia.protobuf.createEncode<ObjectGenericUnion>();
`

const protobufObjectGenericUnionWriterStub = `class ProtobufWriterStub {
  constructor() {
    return new Proxy(this, {
      get(target, property) {
        if (property === "buffer") return () => new Uint8Array([1]);
        if (property in target) return target[property];
        return () => target;
      },
    });
  }
  fork() {
    return this;
  }
  ldelim() {
    return this;
  }
}

module.exports._ProtobufSizer = ProtobufWriterStub;
module.exports._ProtobufWriter = ProtobufWriterStub;
`

const protobufObjectGenericUnionThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new TypeError(props.expected);
  Object.assign(error, props);
  throw error;
};
`

const protobufObjectGenericUnionRuntimeRunner = `const { encode } = require("./main.cjs");

const input = {
  value: {
    id: "id",
    writer: "robot",
    contents: [
      {
        id: "content",
        title: "title",
        body: "body",
        files: [{ name: "file", extension: null, url: "https://typia.io/file" }],
        created_at: "now",
      },
    ],
    answer: null,
    created_at: "now",
    hit: 0,
  },
};

const encoded = encode(input);
if (!(encoded instanceof Uint8Array)) {
  throw new Error("encode() did not return Uint8Array");
}
`
