package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestCallableTypeLiteralBoundariesTransform verifies equivalent callable declaration spellings and rejection boundaries.
//
// TypeScript equivalent call/construct signatures have the same structural meaning, so spelling alone cannot change typia support or emitted validation.
//
// 1. Named subshapes distinguish callable-only and member-bearing variants, intersections and aliases; neighboring declarations supply equivalence controls and unsupported operations retain rejection identities.
// 2. The matrix compares interface, type literal and alias emissions and rejection counts; provenance emits must not leak forbidden internal names.
//
// @evidence contracts/testing.md#behavioral-verification The matrix compares interface, type literal and alias emissions and rejection counts; provenance emits must not leak forbidden internal names.
// @evidence contracts/testing.md#independent-expectations TypeScript equivalent call/construct signatures have the same structural meaning, so spelling alone cannot change typia support or emitted validation.
// @evidence contracts/testing.md#distinguishing-cases Named subshapes distinguish callable-only and member-bearing variants, intersections and aliases; neighboring declarations supply equivalence controls and unsupported operations retain rejection identities.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestCallableTypeLiteralBoundariesTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestCallableTypeLiteralBoundariesTransform(t *testing.T) {
  failures := []string{}
  // Each matrix gets its own project so one transform never has to compile the
  // other's fixture, and so a diagnostic can never be attributed to the wrong
  // file.
  spellingProject := callableTypeLiteralProject(t, "spelling", map[string]string{
    "src/main.ts": callableTypeLiteralSpellingSource(),
  })
  provenanceProject := callableTypeLiteralProject(t, "provenance", map[string]string{
    "src/main.ts":      callableTypeLiteralProvenanceSource,
    "src/reexport.ts":  callableTypeLiteralReexportSource,
    "src/ambient.d.ts": callableTypeLiteralAmbientSource,
  })
  // Both fixtures state their premise as compiled `Same<>` assertions, and the
  // transform host reports typia's diagnostics rather than the checker's, so
  // they are typechecked before anything is concluded from them.
  ttscTypiaTestTypecheck(t, spellingProject)
  ttscTypiaTestTypecheck(t, provenanceProject)

  emits := map[string]string{}
  for _, mode := range callableTypeLiteralModes() {
    emits[mode.Name] = callableTypeLiteralTransform(t, spellingProject, "src/main.ts", mode.Functional)
  }

  provenanceEmits := map[string]string{}
  for _, mode := range callableTypeLiteralModes() {
    provenanceEmits[mode.Name] = callableTypeLiteralTransform(t, provenanceProject, "src/main.ts", mode.Functional)
  }
  // The provenance fixture declares nothing but member-free call and construct
  // signatures, so the failure is legible in its emit alone: TypeScript augments
  // a callable object's apparent members with the global `Function` members, and
  // these fragments appear exactly when a signature-only shape was expanded as a
  // structural object instead. Reading the emit stops the runtime matrix from
  // passing on a coincidence, and it is asserted here rather than on the
  // spelling fixture because that fixture deliberately contains member-carrying
  // shapes, for which the same fragments are correct.
  for _, mode := range callableTypeLiteralModes() {
    for _, fragment := range []string{"input.apply", "input.bind", "input.caller", "input.prototype"} {
      if strings.Contains(provenanceEmits[mode.Name], fragment) {
        failures = append(failures, fmt.Sprintf(
          "%s provenance emit expanded a member-free callable through apparent Function member %q:\n%s",
          mode.Name, fragment, provenanceEmits[mode.Name]))
      }
    }
  }

  failures = append(failures, callableTypeLiteralConsumerFamilies(t)...)
  failures = append(failures, callableTypeLiteralDiagnosticTwins(t)...)

  if len(failures) != 0 {
    t.Fatalf(
      "callable declaration-spelling mismatches:\n%s\n\ndefault emit:\n%s\n\nfunctional emit:\n%s",
      strings.Join(failures, "\n\n"),
      emits["default"],
      emits["functional"],
    )
  }
}

func callableTypeLiteralModes() []struct {
  Name       string
  Functional bool
} {
  return []struct {
    Name       string
    Functional bool
  }{
    {Name: "default", Functional: false},
    {Name: "functional", Functional: true},
  }
}

// callableTypeLiteralShape is one callable object shape under test. Body is the
// object-type body shared verbatim by the interface, named-literal, and inline
// spellings, which is the point of the fixture: only the declaration keyword
// differs between them.
type callableTypeLiteralShape struct {
  Name string
  Body string
  // Alias is the plain function-type spelling of the same type, empty when the
  // shape carries members and therefore has no function twin — its only alias
  // spelling would be an intersection, which typia's intersection contract owns
  // rather than this declaration-identity boundary.
  Alias string
  // IntersectionAlias is that intersection spelling. It is mutually assignable
  // with the declaration spellings, so it is compiled and executed as evidence
  // of where the declaration-identity contract legitimately hands over to the
  // intersection contract, and never as a validator this change has to move.
  IntersectionAlias string
  // MemberTwin names the shape that is the same TypeScript type written with the
  // other member spelling (`method(): void` against `method: () => void`).
  MemberTwin string
}

// callableTypeLiteralShapes lists every callable shape whose declaration
// spelling must not matter. The list is deliberately wider than the call-only
// and construct-only pair #2238 reproduces, because the members typia treats as
// unchecked are where the spellings historically disagreed, and because a fix
// that only looked at signature-only shapes has to be shown not to swallow the
// member-carrying ones.
func callableTypeLiteralShapes() []callableTypeLiteralShape {
  call := "((value: number) => string)"
  construct := "(new (value: number) => { value: number })"
  return []callableTypeLiteralShape{
    {Name: "PureCall", Body: "{ (value: number): string }", Alias: call},
    {Name: "PureConstruct", Body: "{ new (value: number): { value: number } }", Alias: construct},
    {Name: "Overload", Body: "{ (value: number): string; (value: string): number }",
      IntersectionAlias: call + " & ((value: string) => number)"},
    {Name: "ConstructOverload", Body: "{ new (value: number): { value: number }; new (value: string): { value: string } }",
      IntersectionAlias: construct + " & (new (value: string) => { value: string })"},
    {Name: "CallAndConstruct", Body: "{ (value: number): string; new (value: number): { value: number } }",
      IntersectionAlias: call + " & " + construct},
    {Name: "Method", Body: "{ (value: number): string; method(): void }", MemberTwin: "MethodProperty",
      IntersectionAlias: call + " & { method(): void }"},
    {Name: "MethodProperty", Body: "{ (value: number): string; method: () => void }", MemberTwin: "Method",
      IntersectionAlias: call + " & { method: () => void }"},
    {Name: "OptionalMethod", Body: "{ (value: number): string; method?(): void }", MemberTwin: "OptionalMethodProperty",
      IntersectionAlias: call + " & { method?(): void }"},
    {Name: "OptionalMethodProperty", Body: "{ (value: number): string; method?: () => void }", MemberTwin: "OptionalMethod",
      IntersectionAlias: call + " & { method?: () => void }"},
    {Name: "SymbolMember", Body: "{ (value: number): string; [callableBrand]: string }",
      IntersectionAlias: call + " & { [callableBrand]: string }"},
    {Name: "OptionalSymbolMember", Body: "{ (value: number): string; readonly [callableBrand]?: never }",
      IntersectionAlias: call + " & { readonly [callableBrand]?: never }"},
    {Name: "OptionalMember", Body: "{ (value: number): string; label?: string }",
      IntersectionAlias: call + " & { label?: string }"},
    {Name: "RequiredMember", Body: "{ (value: number): string; label: string }",
      IntersectionAlias: call + " & { label: string }"},
    {Name: "IndexSignature", Body: "{ (value: number): string; [key: string]: unknown }",
      IntersectionAlias: call + " & { [key: string]: unknown }"},
  }
}

// callableTypeLiteralPositions places the shape where a validator can meet it.
// Top level and a nested property are the two the issue reproduces; the optional
// property, union arm, generic instantiation, and semantically empty
// intersection are the neighboring routes that reach the same classification
// through a different iterator, and each of them once produced a different
// answer for a function type than for an object type.
func callableTypeLiteralPositions() []struct {
  Name  string
  Build func(target string) string
} {
  return []struct {
    Name  string
    Build func(target string) string
  }{
    {Name: "Top", Build: func(target string) string { return target }},
    {Name: "Nested", Build: func(target string) string { return "{ fn: " + target + " }" }},
    {Name: "OptionalProperty", Build: func(target string) string { return "{ fn?: " + target + " }" }},
    {Name: "UnionArm", Build: func(target string) string { return "(" + target + `) | { kind: "data"; value: number }` }},
    {Name: "Generic", Build: func(target string) string { return "CallableWrapper<" + target + ">" }},
    {Name: "EmptyIntersection", Build: func(target string) string { return "(" + target + ") & Record<never, never>" }},
  }
}

// callableTypeLiteralSpellings names the declaration spellings of one shape.
// `Inline` has no declaration at all: the object-type body is written straight
// into the type argument, which is the only form that never reaches the alias
// iterator, so leaving it out would let a fix that only handled named aliases
// pass.
func callableTypeLiteralSpellings() []string {
  return []string{"Interface", "Literal", "Inline", "Alias"}
}

func callableTypeLiteralTarget(shape callableTypeLiteralShape, spelling string) string {
  switch spelling {
  case "Interface", "Literal":
    return shape.Name + spelling
  case "Inline":
    return shape.Body
  case "Alias":
    return shape.Name + "Alias"
  }
  return ""
}

func callableTypeLiteralSpellingSource() string {
  builder := &strings.Builder{}
  builder.WriteString(`import typia from "typia";

declare const callableBrand: unique symbol;
type CallableWrapper<T> = { payload: T };
type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;

`)
  for _, shape := range callableTypeLiteralShapes() {
    builder.WriteString("interface " + shape.Name + "Interface " + shape.Body + "\n")
    builder.WriteString("type " + shape.Name + "Literal = " + shape.Body + ";\n")
    if shape.Alias != "" {
      builder.WriteString("type " + shape.Name + "Alias = " + shape.Alias + ";\n")
    }
    // The declaration axis, proven by the compiler rather than asserted here.
    // These assertions are only load-bearing because the fixture is typechecked:
    // the transform host reports typia's own diagnostics, not the checker's, so
    // an unchecked fixture would let a false `Same<>` pass unnoticed and turn
    // every parity claim below into a claim about two unrelated types.
    builder.WriteString("type _" + shape.Name + "LiteralTwin = Assert<Same<" + shape.Name + "Interface, " + shape.Name + "Literal>>;\n")
    builder.WriteString("type _" + shape.Name + "InlineTwin = Assert<Same<" + shape.Name + "Interface, " + shape.Body + ">>;\n")
    if shape.Alias != "" {
      builder.WriteString("type _" + shape.Name + "AliasTwin = Assert<Same<" + shape.Name + "Interface, " + shape.Name + "Alias>>;\n")
    }
    if shape.IntersectionAlias != "" {
      // Type-level only: the intersection spelling is the declared hand-over
      // point to typia's intersection contract, so it is proven equivalent here
      // and exercised as a diagnostic, never as a validator.
      builder.WriteString("type _" + shape.Name + "IntersectionTwin = Assert<Same<" + shape.Name + "Interface, " + shape.IntersectionAlias + ">>;\n")
    }
    if shape.MemberTwin != "" {
      // The member axis: a method shorthand against a function-typed property.
      builder.WriteString("type _" + shape.Name + "MemberTwin = Assert<Same<" + shape.Name + "Interface, " + shape.MemberTwin + "Interface>>;\n")
    }
  }
  builder.WriteString("\n")
  for _, shape := range callableTypeLiteralShapes() {
    for _, spelling := range callableTypeLiteralSpellings() {
      if spelling == "Alias" && shape.Alias == "" {
        continue
      }
      for _, position := range callableTypeLiteralPositions() {
        target := position.Build(callableTypeLiteralTarget(shape, spelling))
        name := shape.Name + spelling + position.Name
        builder.WriteString("export const direct" + name + " = (input: unknown): boolean => typia.is<" + target + ">(input);\n")
        builder.WriteString("export const factory" + name + " = typia.createIs<" + target + ">();\n")
      }
    }
  }
  return builder.String()
}

func callableTypeLiteralProject(t *testing.T, name string, files map[string]string) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "callable-type-literal-"+name+"-")
  if err := os.MkdirAll(filepath.Join(dir, "src"), 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  contents := map[string]string{"tsconfig.json": compareEqualCoverTSConfig}
  for file, content := range files {
    contents[file] = content
  }
  for file, content := range contents {
    if err := os.WriteFile(filepath.Join(dir, filepath.FromSlash(file)), []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", file, err)
    }
  }
  return dir
}

func callableTypeLiteralTransform(t *testing.T, project string, file string, functional bool) string {
  t.Helper()
  option := ""
  if functional {
    option = `,"functional":true`
  }
  payload := `[{"config":{"transform":"typia/lib/transform"` + option + `},"name":"typia","stage":"transform"}]`
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", file,
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("callable declaration transform %s (functional=%t) failed: code=%d stdout=\n%s\nstderr=\n%s", file, functional, code, out, errText)
  }
  return out
}

// callableTypeLiteralDiagnosticTwins requires equivalent spellings to share one
// support-or-diagnostic contract, and pins where that contract legitimately
// stops being a declaration-identity question.
//
// Isolation is load-bearing. The transform reports diagnostics per file, so
// several shapes in one project collapse into a count that no longer says which
// pair produced which message, and a shape that stopped erroring cancels out a
// shape that started erroring twice. One project per shape per spelling keeps
// every count attributable and keeps a failing sibling from contaminating a
// spelling that must transform.
//
// The interface, named-literal, and inline spellings of one shape are the same
// declaration written three ways, so they must always agree. A member-carrying
// shape's only function-type spelling is an intersection, and typia rejects an
// intersection of runtime callability with a further obligation; that rejection
// belongs to typia's intersection contract, not to declaration identity, so it
// is recorded as the expected boundary rather than silently generalized.
func callableTypeLiteralDiagnosticTwins(t *testing.T) []string {
  t.Helper()
  failures := []string{}
  for _, shape := range callableTypeLiteralShapes() {
    observed := map[string]string{}
    functionSpelling := shape.Alias
    if functionSpelling == "" {
      functionSpelling = shape.IntersectionAlias
    }
    for _, spelling := range callableTypeLiteralSpellings() {
      declaration := ""
      target := "Target"
      switch spelling {
      case "Interface":
        declaration = "interface Target " + shape.Body + "\n"
      case "Literal":
        declaration = "type Target = " + shape.Body + ";\n"
      case "Inline":
        target = shape.Body
      case "Alias":
        declaration = "type Target = " + functionSpelling + ";\n"
      }
      // The equivalence of these spellings is established once, by typechecking
      // the spelling fixture, rather than restated in every one of these
      // single-shape projects.
      source := "import typia from \"typia\";\n\ndeclare const callableBrand: unique symbol;\n" + declaration +
        "export const direct = (input: unknown): boolean => typia.is<" + target + ">(input);\n" +
        "export const factory = typia.createIs<" + target + ">();\n"
      project := callableTypeLiteralProject(
        t,
        "twin-"+strings.ToLower(shape.Name)+"-"+strings.ToLower(spelling),
        map[string]string{"src/main.ts": source},
      )
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", "src/main.ts",
          "--output", "js",
        })
      })
      observed[spelling] = fmt.Sprintf("code=%d nonsensible=%d unsupported=%d",
        code,
        strings.Count(errText, "nonsensible intersection"),
        strings.Count(errText, "does not support"),
      )
    }
    for _, spelling := range []string{"Literal", "Inline"} {
      if observed[spelling] != observed["Interface"] {
        failures = append(failures, fmt.Sprintf(
          "%s: %s spelling reported %s but the interface spelling reported %s",
          shape.Name, spelling, observed[spelling], observed["Interface"]))
      }
    }
    const supported = "code=0 nonsensible=0 unsupported=0"
    if observed["Interface"] != supported {
      failures = append(failures, fmt.Sprintf(
        "%s: interface spelling reported %s; expected %s", shape.Name, observed["Interface"], supported))
    }
    // A member-free shape's function-type spelling is a plain function type, so
    // it is inside this change's contract and must agree with the declaration
    // spellings.
    if shape.Alias != "" {
      if observed["Alias"] != observed["Interface"] {
        failures = append(failures, fmt.Sprintf(
          "%s: alias spelling reported %s but the interface spelling reported %s",
          shape.Name, observed["Alias"], observed["Interface"]))
      }
      continue
    }
    // Every function-type spelling must report what the declaration spellings
    // report, including a member-carrying shape's, whose only such spelling is an
    // intersection of a call signature with the rest.
    //
    // This row is what samchon/typia#2276 closed. Before it, six of the twelve
    // shapes disagreed here — `{ method(): void }` was accepted while
    // `{ method: () => void }` was refused, and `{ label?: string }` was accepted
    // while `{ label: string }` was refused — because a call-signature-only arm
    // was neither an object nor a phantom brand, so the intersection was called
    // nonsensible while the interface spelling of the same type, which is one
    // object carrying a call signature, was accepted.
    if observed["Alias"] != observed["Interface"] {
      failures = append(failures, fmt.Sprintf(
        "%s: alias spelling reported %s but the interface spelling reported %s",
        shape.Name, observed["Alias"], observed["Interface"]))
    }
  }
  return failures
}

// callableTypeLiteralConsumerFamilies checks the invariant where it actually
// reaches users. `metadata_get_function_node` feeds MetadataFactory.Analyze, and
// every typia operation reads the same metadata, so a declaration-spelling split
// is not an `is` bug: it changes what `random` generates, what `plain.clone`
// copies, what `json.schema` and `llm.application` publish, and which
// diagnostics `compare` and `protobuf` report.
//
// The three spellings are compiled in separate projects under one shared type
// name, so their emits must be byte-identical rather than merely equivalent.
// That is the strongest oracle available here: it cannot be satisfied by two
// different validators that happen to agree on the executed inputs, and it needs
// no expected-value table that could be written from the implementation's own
// output. The runtime rows then pin the answers the emit alone cannot: a
// function slot is dropped from JSON, cloned away, and ignored by equality.
func callableTypeLiteralConsumerFamilies(t *testing.T) []string {
  t.Helper()
  failures := []string{}
  spellings := []struct {
    Name        string
    Declaration string
  }{
    // One line each, so a diagnostic's reported position is comparable across
    // the three projects rather than shifted by the declaration's own height.
    {Name: "interface", Declaration: "interface Consumer { (input: { value: number }): { value: string } }\n"},
    {Name: "literal", Declaration: "type Consumer = { (input: { value: number }): { value: string } };\n"},
    {Name: "alias", Declaration: "type Consumer = (input: { value: number }) => { value: string };\n"},
  }

  emits := map[string]string{}
  for _, spelling := range spellings {
    project := callableTypeLiteralProject(t, "consumers-"+spelling.Name, map[string]string{
      "src/main.ts": spelling.Declaration + callableTypeLiteralConsumerSource,
    })
    emits[spelling.Name] = callableTypeLiteralTransform(t, project, "src/main.ts", false)
  }
  for _, spelling := range []string{"literal", "alias"} {
    if emits[spelling] != emits["interface"] {
      failures = append(failures, fmt.Sprintf(
        "consumer emits differ between the interface and %s spellings\n\ninterface:\n%s\n\n%s:\n%s",
        spelling, emits["interface"], spelling, emits[spelling]))
    }
  }

  // The families whose contract is a rejection are checked by their exact
  // diagnostic rather than by an exit code, and one isolated project per
  // spelling keeps each message attributable.
  rejections := map[string]string{}
  for _, spelling := range spellings {
    project := callableTypeLiteralProject(t, "consumer-rejections-"+spelling.Name, map[string]string{
      "src/main.ts": spelling.Declaration + callableTypeLiteralConsumerRejectionSource,
    })
    _, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", "src/main.ts",
        "--output", "js",
      })
    })
    if code == 0 {
      failures = append(failures, fmt.Sprintf(
        "%s spelling: the unsupported-domain consumers transformed successfully", spelling.Name))
    }
    // Each spelling gets its own temporary project, so the only text that may
    // legitimately differ between their diagnostics is that directory.
    rejections[spelling.Name] = strings.ReplaceAll(
      strings.ReplaceAll(errText, project, "<project>"),
      strings.ReplaceAll(project, `\`, "/"), "<project>")
  }
  for _, spelling := range []string{"literal", "alias"} {
    if rejections[spelling] != rejections["interface"] {
      failures = append(failures, fmt.Sprintf(
        "consumer diagnostics differ between the interface and %s spellings\n\ninterface:\n%s\n\n%s:\n%s",
        spelling, rejections["interface"], spelling, rejections[spelling]))
    }
  }
  return failures
}

const callableTypeLiteralConsumerSource = `import typia from "typia";

interface ConsumerHolder {
  fn: Consumer;
}
type ConsumerFunctional = (input: ConsumerHolder) => ConsumerHolder;

export const is = typia.createIs<ConsumerHolder>();
export const validate = typia.createValidate<ConsumerHolder>();
export const functional = typia.functional.isFunction<ConsumerFunctional>((input) => input);
export const random = typia.createRandom<ConsumerHolder>();
export const clone = typia.plain.createClone<ConsumerHolder>();
export const prune = typia.plain.createPrune<ConsumerHolder>();
export const classify = typia.plain.createClassify<ConsumerHolder>();
export const camel = typia.notations.createCamel<ConsumerHolder>();
export const pascal = typia.notations.createPascal<ConsumerHolder>();
export const equals = typia.compare.createEquals<ConsumerHolder>();
export const cover = typia.compare.createCover<ConsumerHolder>();
export const stringify = typia.json.createStringify<ConsumerHolder>();
export const jsonSchema = typia.json.schema<ConsumerHolder>();
export const jsonSchemas = typia.json.schemas<[ConsumerHolder]>();
export const jsonApplication = typia.json.application<ConsumerHolder>();
export const reflectSchema = typia.reflect.schema<ConsumerHolder>();
export const reflectSchemas = typia.reflect.schemas<[ConsumerHolder]>();
export const reflectName = typia.reflect.name<ConsumerHolder, true>();
export const llmSchema = typia.llm.schema<ConsumerHolder>({});
export const llmParameters = typia.llm.parameters<ConsumerHolder>();
export const httpFormData = typia.http.createFormData<ConsumerHolder>();
export const httpHeaders = typia.http.createHeaders<ConsumerHolder>();
export const httpQuery = typia.http.createQuery<ConsumerHolder>();
`

const callableTypeLiteralConsumerRejectionSource = `import typia from "typia";

interface RejectionHolder {
  fn: Consumer;
}

typia.compare.createEquals<Consumer>();
typia.protobuf.createEncode<RejectionHolder>();
typia.protobuf.createDecode<RejectionHolder>();
`

const callableTypeLiteralReexportSource = `export type ReexportedCallLiteral = { (value: number): string };
export type ReexportedCallAlias = (value: number) => string;
export interface ReexportedCallInterface {
  (value: number): string;
}
export type ReexportedConstructLiteral = { new (value: number): { value: number } };
export type ReexportedConstructAlias = new (value: number) => { value: number };
export interface ReexportedConstructInterface {
  new (value: number): { value: number };
}
`

const callableTypeLiteralAmbientSource = `declare module "ambient-callable-declarations" {
  export type AmbientCallLiteral = { (value: number): string };
  export type AmbientCallAlias = (value: number) => string;
  export interface AmbientCallInterface {
    (value: number): string;
  }
  export type AmbientConstructLiteral = { new (value: number): { value: number } };
  export type AmbientConstructAlias = new (value: number) => { value: number };
  export interface AmbientConstructInterface {
    new (value: number): { value: number };
  }
}
`

const callableTypeLiteralProvenanceSource = `import typia from "typia";
import type {
  ReexportedCallAlias,
  ReexportedCallInterface,
  ReexportedCallLiteral,
  ReexportedConstructAlias,
  ReexportedConstructInterface,
  ReexportedConstructLiteral,
} from "./reexport";
import type {
  AmbientCallAlias,
  AmbientCallInterface,
  AmbientCallLiteral,
  AmbientConstructAlias,
  AmbientConstructInterface,
  AmbientConstructLiteral,
} from "ambient-callable-declarations";

type LocalCallLiteral = { (value: number): string };
type LocalCallAlias = (value: number) => string;
interface LocalCallInterface {
  (value: number): string;
}
type LocalConstructLiteral = { new (value: number): { value: number } };
type LocalConstructAlias = new (value: number) => { value: number };
interface LocalConstructInterface {
  new (value: number): { value: number };
}

type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
type _LocalCall = Assert<Same<LocalCallLiteral, LocalCallAlias>>;
type _LocalCallInterface = Assert<Same<LocalCallLiteral, LocalCallInterface>>;
type _LocalConstruct = Assert<Same<LocalConstructLiteral, LocalConstructAlias>>;
type _LocalConstructInterface = Assert<Same<LocalConstructLiteral, LocalConstructInterface>>;
type _ReexportedCall = Assert<Same<ReexportedCallLiteral, ReexportedCallAlias>>;
type _ReexportedCallInterface = Assert<Same<ReexportedCallLiteral, ReexportedCallInterface>>;
type _ReexportedConstruct = Assert<Same<ReexportedConstructLiteral, ReexportedConstructAlias>>;
type _ReexportedConstructInterface = Assert<Same<ReexportedConstructLiteral, ReexportedConstructInterface>>;
type _AmbientCall = Assert<Same<AmbientCallLiteral, AmbientCallAlias>>;
type _AmbientCallInterface = Assert<Same<AmbientCallLiteral, AmbientCallInterface>>;
type _AmbientConstruct = Assert<Same<AmbientConstructLiteral, AmbientConstructAlias>>;
type _AmbientConstructInterface = Assert<Same<AmbientConstructLiteral, AmbientConstructInterface>>;

export const directLocalCallLiteral = (input: unknown): boolean => typia.is<LocalCallLiteral>(input);
export const factoryLocalCallLiteral = typia.createIs<LocalCallLiteral>();
export const directLocalCallAlias = (input: unknown): boolean => typia.is<LocalCallAlias>(input);
export const factoryLocalCallAlias = typia.createIs<LocalCallAlias>();
export const directLocalCallInterface = (input: unknown): boolean => typia.is<LocalCallInterface>(input);
export const factoryLocalCallInterface = typia.createIs<LocalCallInterface>();
export const directLocalConstructLiteral = (input: unknown): boolean => typia.is<LocalConstructLiteral>(input);
export const factoryLocalConstructLiteral = typia.createIs<LocalConstructLiteral>();
export const directLocalConstructAlias = (input: unknown): boolean => typia.is<LocalConstructAlias>(input);
export const factoryLocalConstructAlias = typia.createIs<LocalConstructAlias>();
export const directLocalConstructInterface = (input: unknown): boolean => typia.is<LocalConstructInterface>(input);
export const factoryLocalConstructInterface = typia.createIs<LocalConstructInterface>();

export const directReexportedCallLiteral = (input: unknown): boolean => typia.is<ReexportedCallLiteral>(input);
export const factoryReexportedCallLiteral = typia.createIs<ReexportedCallLiteral>();
export const directReexportedCallAlias = (input: unknown): boolean => typia.is<ReexportedCallAlias>(input);
export const factoryReexportedCallAlias = typia.createIs<ReexportedCallAlias>();
export const directReexportedCallInterface = (input: unknown): boolean => typia.is<ReexportedCallInterface>(input);
export const factoryReexportedCallInterface = typia.createIs<ReexportedCallInterface>();
export const directReexportedConstructLiteral = (input: unknown): boolean => typia.is<ReexportedConstructLiteral>(input);
export const factoryReexportedConstructLiteral = typia.createIs<ReexportedConstructLiteral>();
export const directReexportedConstructAlias = (input: unknown): boolean => typia.is<ReexportedConstructAlias>(input);
export const factoryReexportedConstructAlias = typia.createIs<ReexportedConstructAlias>();
export const directReexportedConstructInterface = (input: unknown): boolean => typia.is<ReexportedConstructInterface>(input);
export const factoryReexportedConstructInterface = typia.createIs<ReexportedConstructInterface>();

export const directAmbientCallLiteral = (input: unknown): boolean => typia.is<AmbientCallLiteral>(input);
export const factoryAmbientCallLiteral = typia.createIs<AmbientCallLiteral>();
export const directAmbientCallAlias = (input: unknown): boolean => typia.is<AmbientCallAlias>(input);
export const factoryAmbientCallAlias = typia.createIs<AmbientCallAlias>();
export const directAmbientCallInterface = (input: unknown): boolean => typia.is<AmbientCallInterface>(input);
export const factoryAmbientCallInterface = typia.createIs<AmbientCallInterface>();
export const directAmbientConstructLiteral = (input: unknown): boolean => typia.is<AmbientConstructLiteral>(input);
export const factoryAmbientConstructLiteral = typia.createIs<AmbientConstructLiteral>();
export const directAmbientConstructAlias = (input: unknown): boolean => typia.is<AmbientConstructAlias>(input);
export const factoryAmbientConstructAlias = typia.createIs<AmbientConstructAlias>();
export const directAmbientConstructInterface = (input: unknown): boolean => typia.is<AmbientConstructInterface>(input);
export const factoryAmbientConstructInterface = typia.createIs<AmbientConstructInterface>();
`
