package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestProtobufObjectGenericUnionEncodeTransform checks the authored operation results described below.
//
// A generated helper cannot reference a lexical binding confined to a different closure; object-union routing and nested checkers must share an accessible scope.
//
// 1. The ObjectGenericUnion graph combines routing and nested object helpers so the prior out-of-scope _io reference is observable to the helper scanner.
// 2. The emitted encoder keeps property and object helpers in scopes where their references resolve.
//
// @evidence contracts/testing.md#behavioral-verification The emitted encoder keeps property and object helpers in scopes where their references resolve.
// @evidence contracts/testing.md#independent-expectations A generated helper cannot reference a lexical binding confined to a different closure; object-union routing and nested checkers must share an accessible scope.
// @evidence contracts/testing.md#distinguishing-cases The ObjectGenericUnion graph combines routing and nested object helpers so the prior out-of-scope _io reference is observable to the helper scanner.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestProtobufObjectGenericUnionEncodeTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestProtobufObjectGenericUnionEncodeTransform(t *testing.T) {
  project := protobufObjectGenericUnionProject(t)
  js := protobufObjectGenericUnionTransform(t, project)
  protobufObjectGenericUnionAssertScopedHelpers(t, js)
}

func protobufObjectGenericUnionProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "protobuf-object-generic-union-")
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
