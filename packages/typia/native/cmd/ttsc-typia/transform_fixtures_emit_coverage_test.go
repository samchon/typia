//go:build typia_native_internal
// +build typia_native_internal

package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestTransformSyntheticEmitCoverage exercises typia transforms inside Go coverage.
//
// The TypeScript projects run the native backend as a separate process, so they
// validate behavior but do not contribute to Go coverage profiles. This test
// builds temporary TypeScript projects and calls the command entrypoints
// directly, which makes transformer, adapter, and programmer code visible to
// `-coverpkg`.
//
// The `_js` lane asserted the opposite of this until samchon/typia#2134 was
// fixed: it required every fixture to report "no output produced". These
// projects all set `rootDir`/`outDir`, and the old identity check compared whole
// path stems, so it asked whether `dist/main` equalled `src/main` and never
// found the artifact the emit had just written. Reading those exit 3s as the
// specification turned this suite into the defect's own guard rail -- it would
// have failed the repair -- and left the JS emit path it exists to cover
// unreached, since the run stopped at the identity check.
//
// 1. Create isolated temporary TypeScript projects under the native package.
// 2. Transform each project's `src/main.ts` to TypeScript output in memory.
// 3. Transform each project's `src/main.ts` to JavaScript and require emitted
//    CommonJS, which is what reaches the printer and the emit path.
// 4. Cover reflect metadata, protobuf maps, and object-union emit paths.
// 5. Run build/check/project-transform command paths against the same project.
func TestTransformSyntheticEmitCoverage(t *testing.T) {
  cases := []struct {
    name   string
    source string
  }{
    {"core", transformCoverageCoreSource},
    {"json", transformCoverageJSONSource},
    {"http", transformCoverageHTTPSource},
    {"plain", transformCoveragePlainSource},
    {"functional", transformCoverageFunctionalSource},
    {"complex", transformCoverageComplexSource},
    {"protobuf", transformCoverageProtobufSource},
    {"reflect-metadata", transformCoverageReflectMetadataSource},
  }
  projects := map[string]string{}
  for _, tc := range cases {
    tc := tc
    projects[tc.name] = transformCoverageProject(t, tc.name, tc.source)
    t.Run(tc.name+"_ts", func(t *testing.T) {
      out, errText, code := transformCoverageCapture(func() int {
        return runTransform([]string{
          "--cwd", projects[tc.name],
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "ts",
        })
      })
      if code != 0 {
        t.Fatalf("transform ts failed for %s: code=%d stderr=\n%s", tc.name, code, errText)
      }
      if !strings.Contains(out, "export") && !strings.Contains(out, "const") {
        t.Fatalf("transform ts output for %s looks empty:\n%s", tc.name, out)
      }
    })
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.name+"_js", func(t *testing.T) {
      out, errText, code := transformCoverageCapture(func() int {
        return runTransform([]string{
          "--cwd", projects[tc.name],
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "js",
        })
      })
      if code != 0 {
        t.Fatalf("transform js failed for %s: code=%d stderr=\n%s", tc.name, code, errText)
      }
      // These fixtures compile as `commonjs`, so a real emit is module-wrapped
      // JavaScript. The lowering itself is pinned by the dedicated single-file
      // `js` cases; what this lane adds is that every fixture's shape reaches
      // the printer at all.
      if !strings.Contains(out, `"use strict"`) || !strings.Contains(out, "exports.") {
        t.Fatalf("transform js output for %s is not emitted CommonJS:\n%s", tc.name, out)
      }
    })
  }
  core := projects["core"]
  if _, errText, code := transformCoverageCapture(func() int {
    return runBuild([]string{
      "--cwd", core,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--verbose",
    })
  }); code != 0 {
    t.Fatalf("build check failed: code=%d stderr=\n%s", code, errText)
  }
  if out, errText, code := transformCoverageCapture(func() int {
    return runTransform([]string{
      "--cwd", core,
      "--tsconfig", "tsconfig.json",
    })
  }); code != 0 {
    t.Fatalf("project transform failed: code=%d stderr=\n%s", code, errText)
  } else if !strings.Contains(out, `"typescript"`) {
    t.Fatalf("project transform output should include TypeScript map:\n%s", out)
  }
}

func transformCoverageProject(t *testing.T, name string, source string) string {
  t.Helper()
  root := transformCoverageRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, name+"-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(transformCoverageTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  if name == "reflect-metadata" {
    reflectDir := filepath.Join(src, "typia", "src")
    if err := os.MkdirAll(reflectDir, 0o755); err != nil {
      t.Fatalf("mkdir reflect stub: %v", err)
    }
    if err := os.WriteFile(filepath.Join(reflectDir, "reflect.ts"), []byte(transformCoverageReflectStubSource), 0o644); err != nil {
      t.Fatalf("write reflect stub: %v", err)
    }
  }
  return dir
}

func transformCoverageRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  return filepath.Clean(filepath.Join(filepath.Dir(file), "..", "..", "..", "..", ".."))
}

func transformCoverageCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

const transformCoverageTSConfig = `{
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
    "outDir": "dist"
  },
  "include": ["src"]
}
`

const transformCoverageCoreSource = `import typia, { tags } from "typia";

interface User {
  id: string & tags.Format<"uuid">;
  age: number & tags.Type<"uint32">;
  name: string;
  active?: boolean;
  tags: string[];
  tuple: [string, number, boolean?];
  nested: { value: string | number | null };
}

export const check = (input: unknown): boolean => typia.is<User>(input);
export const assertUser = (input: unknown): User => typia.assert<User>(input);
export const assertGuardUser = (input: unknown): void => typia.assertGuard<User>(input);
export const validateUser = (input: unknown) => typia.validate<User>(input);
export const equalsUser = (input: unknown): boolean => typia.equals<User>(input);
export const assertEqualsUser = (input: unknown): User => typia.assertEquals<User>(input);
export const assertGuardEqualsUser = (input: unknown): void => typia.assertGuardEquals<User>(input);
export const validateEqualsUser = (input: unknown) => typia.validateEquals<User>(input);
export const randomUser = (): User => typia.random<User>();
export const reflectName = typia.reflect.name<User>();
export const reflectRegularName = typia.reflect.name<User, true>();
// @ts-ignore legacy native transformer entrypoint
export const metadata = typia.reflect.metadata<[User, string]>();
export const schema = typia.reflect.schema<User>();
export const schemas = typia.reflect.schemas<[User]>();
export const createIs = typia.createIs<User>();
export const createAssert = typia.createAssert<User>();
export const createAssertGuard = typia.createAssertGuard<User>();
export const createValidate = typia.createValidate<User>();
export const createEquals = typia.createEquals<User>();
export const createAssertEquals = typia.createAssertEquals<User>();
export const createAssertGuardEquals = typia.createAssertGuardEquals<User>();
export const createValidateEquals = typia.createValidateEquals<User>();
export const createRandom = typia.createRandom<User>();
`

const transformCoverageJSONSource = `import typia from "typia";

interface JsonUser {
  id: string;
  created_at: string;
  nested: Array<{ value: number | string | null }>;
}

export const schema = typia.json.schema<JsonUser>();
export const schema30 = typia.json.schema<JsonUser, "3.0">();
export const schemas = typia.json.schemas<[JsonUser]>();
export const schemas30 = typia.json.schemas<[JsonUser], "3.0">();
export const assertParse = (input: string) => typia.json.assertParse<JsonUser>(input);
export const isParse = (input: string) => typia.json.isParse<JsonUser>(input);
export const validateParse = (input: string) => typia.json.validateParse<JsonUser>(input);
export const assertStringify = (input: unknown) => typia.json.assertStringify<JsonUser>(input);
export const isStringify = (input: unknown) => typia.json.isStringify<JsonUser>(input);
export const validateStringify = (input: unknown) => typia.json.validateStringify<JsonUser>(input);
export const createStringify = typia.json.createStringify<JsonUser>();
export const createAssertStringify = typia.json.createAssertStringify<JsonUser>();
export const createIsStringify = typia.json.createIsStringify<JsonUser>();
export const createValidateStringify = typia.json.createValidateStringify<JsonUser>();
export const createIsParse = typia.json.createIsParse<JsonUser>();
export const createAssertParse = typia.json.createAssertParse<JsonUser>();
export const createValidateParse = typia.json.createValidateParse<JsonUser>();
`

const transformCoverageHTTPSource = `import typia, { tags } from "typia";

interface QueryInput {
  id: string;
  limit?: number & tags.Type<"uint32">;
  tags?: string[];
}

interface HeaderInput {
  authorization: string;
  "x-request-id"?: string;
}

interface FormInput {
  title: string;
  count?: number;
}

export const assertQuery = (input: URLSearchParams) => typia.http.assertQuery<QueryInput>(input);
export const isQuery = (input: URLSearchParams) => typia.http.isQuery<QueryInput>(input);
export const validateQuery = (input: URLSearchParams) => typia.http.validateQuery<QueryInput>(input);
export const assertHeaders = (input: Headers) => typia.http.assertHeaders<HeaderInput>(input);
export const isHeaders = (input: Headers) => typia.http.isHeaders<HeaderInput>(input);
export const validateHeaders = (input: Headers) => typia.http.validateHeaders<HeaderInput>(input);
export const assertFormData = (input: FormData) => typia.http.assertFormData<FormInput>(input);
export const isFormData = (input: FormData) => typia.http.isFormData<FormInput>(input);
export const validateFormData = (input: FormData) => typia.http.validateFormData<FormInput>(input);
export const createQuery = typia.http.createQuery<QueryInput>();
export const createAssertQuery = typia.http.createAssertQuery<QueryInput>();
export const createIsQuery = typia.http.createIsQuery<QueryInput>();
export const createValidateQuery = typia.http.createValidateQuery<QueryInput>();
export const createHeaders = typia.http.createHeaders<HeaderInput>();
export const createAssertHeaders = typia.http.createAssertHeaders<HeaderInput>();
export const createIsHeaders = typia.http.createIsHeaders<HeaderInput>();
export const createValidateHeaders = typia.http.createValidateHeaders<HeaderInput>();
export const createFormData = typia.http.createFormData<FormInput>();
export const createAssertFormData = typia.http.createAssertFormData<FormInput>();
export const createIsFormData = typia.http.createIsFormData<FormInput>();
export const createValidateFormData = typia.http.createValidateFormData<FormInput>();
export const createParameter = typia.http.createParameter<string | null>();
`

const transformCoveragePlainSource = `import typia from "typia";

interface PlainUser {
  id: string;
  snake_name: string;
  children?: PlainUser[];
}

class PlainAccount {
  id!: string;
  snake_name!: string;
  children?: PlainAccount[];
  describe(): string {
    return this.id;
  }
}

export const clone = (input: unknown) => typia.plain.assertClone<PlainUser>(input);
export const isClone = (input: unknown) => typia.plain.isClone<PlainUser>(input);
export const validateClone = (input: unknown) => typia.plain.validateClone<PlainUser>(input);
export const prune = (input: PlainUser) => typia.plain.assertPrune<PlainUser>(input);
export const isPrune = (input: unknown) => typia.plain.isPrune<PlainUser>(input);
export const validatePrune = (input: unknown) => typia.plain.validatePrune<PlainUser>(input);
export const createClone = typia.plain.createClone<PlainUser>();
export const createAssertClone = typia.plain.createAssertClone<PlainUser>();
export const createIsClone = typia.plain.createIsClone<PlainUser>();
export const createValidateClone = typia.plain.createValidateClone<PlainUser>();
export const createPrune = typia.plain.createPrune<PlainUser>();
export const createAssertPrune = typia.plain.createAssertPrune<PlainUser>();
export const createIsPrune = typia.plain.createIsPrune<PlainUser>();
export const createValidatePrune = typia.plain.createValidatePrune<PlainUser>();
export const classify = (input: PlainAccount) => typia.plain.classify<PlainAccount>(input);
export const assertClassify = (input: unknown) => typia.plain.assertClassify<PlainAccount>(input);
export const validateClassify = (input: unknown) => typia.plain.validateClassify<PlainAccount>(input);
export const createClassify = typia.plain.createClassify<PlainAccount>();
export const createAssertClassify = typia.plain.createAssertClassify<PlainAccount>();
export const createValidateClassify = typia.plain.createValidateClassify<PlainAccount>();
export const literals = typia.reflect.literals<false | 1 | "two">();
export const createCamel = typia.notations.createCamel<PlainUser>();
export const createAssertCamel = typia.notations.createAssertCamel<PlainUser>();
export const createIsCamel = typia.notations.createIsCamel<PlainUser>();
export const createValidateCamel = typia.notations.createValidateCamel<PlainUser>();
export const createPascal = typia.notations.createPascal<PlainUser>();
export const createAssertPascal = typia.notations.createAssertPascal<PlainUser>();
export const createIsPascal = typia.notations.createIsPascal<PlainUser>();
export const createValidatePascal = typia.notations.createValidatePascal<PlainUser>();
export const createSnake = typia.notations.createSnake<PlainUser>();
export const createAssertSnake = typia.notations.createAssertSnake<PlainUser>();
export const createIsSnake = typia.notations.createIsSnake<PlainUser>();
export const createValidateSnake = typia.notations.createValidateSnake<PlainUser>();
`

const transformCoverageFunctionalSource = `import typia from "typia";

interface Payload {
  id: string;
  count: number;
}

type Handler = (payload: Payload, flag?: boolean) => Promise<Payload>;

const handler: Handler = async (payload) => payload;
const errorFactory = (props: typia.TypeGuardError.IProps): Error => new Error(props.path);

export const assertFunction = typia.functional.assertFunction<Handler>(handler, errorFactory);
export const assertParameters = typia.functional.assertParameters<Handler>(handler, errorFactory);
export const assertReturn = typia.functional.assertReturn<Handler>(handler, errorFactory);
export const assertEqualsFunction = typia.functional.assertEqualsFunction<Handler>(handler, errorFactory);
export const assertEqualsParameters = typia.functional.assertEqualsParameters<Handler>(handler, errorFactory);
export const assertEqualsReturn = typia.functional.assertEqualsReturn<Handler>(handler, errorFactory);
export const isFunction = typia.functional.isFunction<Handler>(handler);
export const isParameters = typia.functional.isParameters<Handler>(handler);
export const isReturn = typia.functional.isReturn<Handler>(handler);
export const equalsFunction = typia.functional.equalsFunction<Handler>(handler);
export const equalsParameters = typia.functional.equalsParameters<Handler>(handler);
export const equalsReturn = typia.functional.equalsReturn<Handler>(handler);
export const validateFunction = typia.functional.validateFunction<Handler>(handler);
export const validateParameters = typia.functional.validateParameters<Handler>(handler);
export const validateReturn = typia.functional.validateReturn<Handler>(handler);
export const validateEqualsFunction = typia.functional.validateEqualsFunction<Handler>(handler);
export const validateEqualsParameters = typia.functional.validateEqualsParameters<Handler>(handler);
export const validateEqualsReturn = typia.functional.validateEqualsReturn<Handler>(handler);
`

const transformCoverageComplexSource = `import typia, { tags } from "typia";

type Code = ` + "`code-${number}-${string}`" + `;
type ObjectIntersection = { left: string } & { right: number };
type OptionalIntersection = { optional?: string } & { required: number };
type TaggedString = string & tags.Format<"uuid">;
type TaggedNumber = number & tags.Minimum<1> & tags.Maximum<10>;
type TaggedArray = Array<string> & tags.MinItems<1> & tags.MaxItems<4>;
type TaggedLiteral = "alpha" & tags.JsonSchemaPlugin<{ "x-literal": "alpha" }>;
type TaggedTemplate = ` + "`item-${number}`" + ` & tags.Pattern<"^item-">;
type TaggedBytes = Uint8Array & tags.JsonSchemaPlugin<{ "x-bytes": true }>;
type TaggedSet = Set<string> & tags.JsonSchemaPlugin<{ "x-set": true }>;
type TaggedMap = Map<string, number> & tags.JsonSchemaPlugin<{ "x-map": true }>;
type TaggedObject = Nested & tags.JsonSchemaPlugin<{ "x-object": true }>;

interface Nested {
  id: string & tags.Format<"uuid">;
  count: number & tags.Minimum<1> & tags.Maximum<10>;
  label: "alpha" | "beta" | "gamma";
}

interface Complex {
  tuple: [string, number, boolean?, ...Array<"tail">];
  readonlyArray: readonly Nested[];
  set: Set<Nested>;
  map: Map<string, Nested>;
  date: Date;
  bytes: Uint8Array;
  int16: Int16Array;
  float32: Float32Array;
  buffer: ArrayBuffer;
  view: DataView;
  pattern: RegExp;
  code: Code;
  big: bigint;
  dynamic: Record<string, Nested | null>;
  intersected: ObjectIntersection;
  optionalIntersected: OptionalIntersection;
  taggedString: TaggedString;
  taggedNumber: TaggedNumber;
  taggedArray: TaggedArray;
  taggedLiteral: TaggedLiteral;
  taggedTemplate: TaggedTemplate;
  taggedBytes: TaggedBytes;
  taggedSet: TaggedSet;
  taggedMap: TaggedMap;
  taggedObject: TaggedObject;
}

interface JsonComplex {
  tuple: [string, number, boolean, "tail"];
  readonlyArray: readonly Nested[];
  code: Code;
  dynamic: Record<string, Nested | null>;
}

export const isComplex = (input: unknown) => typia.is<Complex>(input);
export const assertComplex = (input: unknown) => typia.assert<Complex>(input);
export const validateComplex = (input: unknown) => typia.validate<Complex>(input);
export const isObjectIntersection = (input: unknown) => typia.is<ObjectIntersection>(input);
export const isOptionalIntersection = (input: unknown) => typia.is<OptionalIntersection>(input);
export const isTaggedString = (input: unknown) => typia.is<TaggedString>(input);
export const isTaggedNumber = (input: unknown) => typia.is<TaggedNumber>(input);
export const isTaggedArray = (input: unknown) => typia.is<TaggedArray>(input);
export const isTaggedLiteral = (input: unknown) => typia.is<TaggedLiteral>(input);
export const isTaggedTemplate = (input: unknown) => typia.is<TaggedTemplate>(input);
export const isTaggedBytes = (input: unknown) => typia.is<TaggedBytes>(input);
export const isTaggedSet = (input: unknown) => typia.is<TaggedSet>(input);
export const isTaggedMap = (input: unknown) => typia.is<TaggedMap>(input);
export const isTaggedObject = (input: unknown) => typia.is<TaggedObject>(input);
export const randomComplex = () => typia.random<Complex>();
export const createRandomComplex = typia.createRandom<Complex>();
export const cloneComplex = typia.plain.createClone<Complex>();
export const assertCloneComplex = typia.plain.createAssertClone<Complex>();
export const isCloneComplex = typia.plain.createIsClone<Complex>();
export const validateCloneComplex = typia.plain.createValidateClone<Complex>();
export const stringifyComplex = typia.json.createStringify<JsonComplex>();
export const assertStringifyComplex = typia.json.createAssertStringify<JsonComplex>();
export const isStringifyComplex = typia.json.createIsStringify<JsonComplex>();
export const validateStringifyComplex = typia.json.createValidateStringify<JsonComplex>();
`

const transformCoverageProtobufSource = `import typia, { tags } from "typia";

interface ProtoChild {
  id: string;
  flag: boolean;
  int32: number & tags.Type<"int32">;
  uint32: number & tags.Type<"uint32">;
  float: number & tags.Type<"float">;
  double: number & tags.Type<"double">;
  big: bigint & tags.Type<"int64">;
  unsignedBig: bigint & tags.Type<"uint64">;
}

interface ProtoAlpha {
  kind: "alpha";
  value: string;
}

interface ProtoBeta {
  kind: "beta";
  count: number & tags.Type<"int32">;
}

interface ProtoFile {
  name: string;
  children: ProtoChild[];
  flags: boolean[];
  values: Array<number & tags.Type<"float">>;
  lookup: Map<string, ProtoChild>;
  dictionary: Record<string, ProtoChild>;
  union: ProtoAlpha | ProtoBeta;
}

export const message = typia.protobuf.message<ProtoFile>();
export const assertDecode = (input: Uint8Array) => typia.protobuf.assertDecode<ProtoFile>(input);
export const isDecode = (input: Uint8Array) => typia.protobuf.isDecode<ProtoFile>(input);
export const validateDecode = (input: Uint8Array) => typia.protobuf.validateDecode<ProtoFile>(input);
export const assertEncode = (input: unknown) => typia.protobuf.assertEncode<ProtoFile>(input);
export const isEncode = (input: unknown) => typia.protobuf.isEncode<ProtoFile>(input);
export const validateEncode = (input: unknown) => typia.protobuf.validateEncode<ProtoFile>(input);
export const createDecode = typia.protobuf.createDecode<ProtoFile>();
export const createIsDecode = typia.protobuf.createIsDecode<ProtoFile>();
export const createAssertDecode = typia.protobuf.createAssertDecode<ProtoFile>();
export const createValidateDecode = typia.protobuf.createValidateDecode<ProtoFile>();
export const createEncode = typia.protobuf.createEncode<ProtoFile>();
export const createIsEncode = typia.protobuf.createIsEncode<ProtoFile>();
export const createAssertEncode = typia.protobuf.createAssertEncode<ProtoFile>();
export const createValidateEncode = typia.protobuf.createValidateEncode<ProtoFile>();
`

const transformCoverageInvalidIntersectionSource = `import typia, { tags } from "typia";

type StandaloneTag = tags.Format<"uuid">;
type Nonsensible = string & number;
type TupleTag = [string] & tags.MinItems<1>;
type WrongTarget = { value: string } & tags.Format<"uuid">;

export const standaloneTag = typia.createIs<StandaloneTag>();
export const nonsensible = typia.createIs<Nonsensible>();
export const tupleTag = typia.createIs<TupleTag>();
export const wrongTarget = typia.createIs<WrongTarget>();
`

const transformCoverageReflectMetadataSource = `import { metadata } from "./typia/src/reflect";

interface Reflected {
  id: string;
  nested: { value: number | string };
}

export const reflected = metadata<[Reflected, string]>();
`

const transformCoverageReflectStubSource = `export function metadata<Types extends unknown[]>(): unknown {
  throw new Error("transform-only stub");
}
`
