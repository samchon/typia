package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCallableTypeLiteralBoundariesTransform verifies that how a callable or
// constructable type is spelled cannot change what typia emits or how the
// emitted validator answers (#2238).
//
// #2250 gave call-only and construct-only `interface` declarations the function
// metadata semantics their mutually assignable function-type aliases already
// had. The same shape written as a type literal — `type X = { (v: number):
// string }` or the anonymous body at the call site — still reached structural
// object metadata, so a real function or class was rejected by the literal
// spelling and accepted by both the interface and the alias spelling. This
// regression pins the whole declaration-spelling axis rather than that one
// witness, because a fix that keyed on one node kind, one position, or one
// transform option would move a single cell and leave the class intact.
//
// The oracles are chosen so that no assertion reads its expectation from the
// emit under test. Mutual assignability is proven by the compiler: every
// spelling group compiles a bidirectional `Same<>` assertion, so "these must
// agree" is a TypeScript fact rather than a claim of this file. For member-free
// callable shapes the absolute answers come from typia's published function-type
// contract (default options skip a function slot, `functional: true` requires a
// real function). For member-carrying shapes the interface spelling is the
// oracle, because #2250 merged it as the reviewed boundary and #2238 declares
// hybrid callables an explicit negative boundary whose declared members must not
// be erased; the anchors below therefore also pin one value that the structural
// path must still accept, so a collapse of every hybrid answer to `false` cannot
// masquerade as parity.
//
//  1. Compile one project that spells fourteen callable shapes as an interface,
//     as a named type literal, as an anonymous literal at the call site, and —
//     where a plain function twin exists — as a function-type alias, each across
//     six positions, both call forms, and both transform options.
//  2. Execute every spelling group against one shared value set and require the
//     spellings to agree, then pin absolute anchors the parity assertions cannot
//     see.
//  3. Repeat the call-only and construct-only pairs across local, re-exported,
//     and ambient declaration provenance.
//  4. Require equivalent spellings to share one support-or-diagnostic contract,
//     compiling each shape alone so a diagnostic count attributes to one pair.
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
  output, err := callableTypeLiteralRun(
    t,
    spellingProject,
    "spelling-runtime",
    callableTypeLiteralSpellingRunner(),
    map[string]string{
      "default.cjs":    ttscTypiaTestRewriteCommonJS(t, emits["default"]),
      "functional.cjs": ttscTypiaTestRewriteCommonJS(t, emits["functional"]),
    },
  )
  if err != nil {
    failures = append(failures, fmt.Sprintf("spelling runtime matrix failed: %v\n%s", err, output))
  }
  for _, expected := range []string{
    // 2 modes x 14 shapes x 6 positions x 2 forms x 12 values.
    "RAN 4032 SPELLING GROUPS",
    // 2 modes x 2 member-spelling pairs x 6 positions x 2 forms x 12 values x
    // 3 declaration spellings.
    "RAN 1728 MEMBER PAIRS",
    // 43 anchor rows x 3 declaration spellings.
    "RAN 129 ANCHORS",
    // 4 optional-member states x 2 modes.
    "RAN 8 OPTIONAL MEMBER ROWS",
  } {
    if !strings.Contains(output, expected) {
      failures = append(failures, fmt.Sprintf("spelling runner did not report %q; got:\n%s", expected, output))
    }
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
  provenanceOutput, provenanceErr := callableTypeLiteralRun(
    t,
    provenanceProject,
    "provenance-runtime",
    callableTypeLiteralProvenanceRunner,
    map[string]string{
      "default.cjs":    ttscTypiaTestRewriteCommonJS(t, provenanceEmits["default"]),
      "functional.cjs": ttscTypiaTestRewriteCommonJS(t, provenanceEmits["functional"]),
    },
  )
  if provenanceErr != nil {
    failures = append(failures, fmt.Sprintf("provenance runtime matrix failed: %v\n%s", provenanceErr, provenanceOutput))
  }
  // 3 provenances x 2 kinds x 3 spellings x 2 forms x 2 modes x 2 values.
  if expected := "RAN 144 PROVENANCE CALLS"; !strings.Contains(provenanceOutput, expected) {
    failures = append(failures, fmt.Sprintf("provenance runner did not report %q; got:\n%s", expected, provenanceOutput))
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

// callableTypeLiteralSpellingRunner builds the runner from the same tables the
// fixture is generated from, so a shape, position, or spelling added to one can
// never go unexercised by the other.
func callableTypeLiteralSpellingRunner() string {
  shapes := []string{}
  aliased := []string{}
  pairs := []string{}
  positions := []string{}
  for _, shape := range callableTypeLiteralShapes() {
    shapes = append(shapes, `"`+shape.Name+`"`)
    if shape.Alias != "" {
      aliased = append(aliased, `"`+shape.Name+`"`)
    }
    if shape.MemberTwin != "" && shape.Name < shape.MemberTwin {
      pairs = append(pairs, `["`+shape.Name+`", "`+shape.MemberTwin+`"]`)
    }
  }
  for _, position := range callableTypeLiteralPositions() {
    positions = append(positions, `"`+position.Name+`"`)
  }
  runner := callableTypeLiteralSpellingRunnerTemplate
  for _, replacement := range []struct {
    Placeholder string
    Value       string
  }{
    {Placeholder: "__SHAPES__", Value: strings.Join(shapes, ", ")},
    {Placeholder: "__ALIASED__", Value: strings.Join(aliased, ", ")},
    {Placeholder: "__MEMBER_PAIRS__", Value: strings.Join(pairs, ", ")},
    {Placeholder: "__POSITIONS__", Value: strings.Join(positions, ", ")},
  } {
    runner = strings.Replace(runner, replacement.Placeholder, replacement.Value, 1)
  }
  return runner
}

func callableTypeLiteralProject(t *testing.T, name string, files map[string]string) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "callable-type-literal-"+name+"-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
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

func callableTypeLiteralRun(
  t *testing.T,
  project string,
  name string,
  runner string,
  modules map[string]string,
) (string, error) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
    return "", nil
  }
  runtimeDir := filepath.Join(project, name)
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir %s: %v", name, err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  files := map[string]string{"run.cjs": runner}
  for file, content := range modules {
    files[file] = content
  }
  for file, content := range files {
    if err := os.WriteFile(filepath.Join(runtimeDir, file), []byte(content), 0o644); err != nil {
      t.Fatalf("write runtime file %s: %v", file, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
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

  runtimeProject := callableTypeLiteralProject(t, "consumers-runtime", nil)
  modules := map[string]string{
    "http-stub.cjs": callableTypeLiteralHTTPStub,
    "llm-stub.cjs":  callableTypeLiteralLLMStub,
  }
  for name, js := range emits {
    modules[name+".cjs"] = ttscTypiaTestRewriteCommonJS(t, callableTypeLiteralStubInternals(js))
  }
  output, err := callableTypeLiteralRun(t, runtimeProject, "runtime", callableTypeLiteralConsumerRunner, modules)
  if err != nil {
    failures = append(failures, fmt.Sprintf("consumer-family runtime matrix failed: %v\n%s", err, output))
  }
  // 23 consumer families x 3 spellings, plus 6 anchor rows.
  if expected := "RAN 69 CONSUMER FAMILIES 6 ANCHORS"; !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("consumer runner did not report %q; got:\n%s", expected, output))
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

// callableTypeLiteralStubInternals redirects the shipped runtime helpers that
// only the consumer fixture pulls in. ttscTypiaTestRewriteCommonJS covers the
// shared ones and fails loudly on anything left unresolved, so these have to be
// replaced before it runs.
func callableTypeLiteralStubInternals(js string) string {
  for _, replacement := range []struct {
    Helper string
    Stub   string
  }{
    {Helper: "_httpFormDataReadString", Stub: "http-stub.cjs"},
    {Helper: "_httpQueryReadString", Stub: "http-stub.cjs"},
    {Helper: "_httpQueryParseURLSearchParams", Stub: "http-stub.cjs"},
    {Helper: "_llmApplicationFinalize", Stub: "llm-stub.cjs"},
  } {
    js = strings.ReplaceAll(js, `require("typia/lib/internal/`+replacement.Helper+`")`, `require("./`+replacement.Stub+`")`)
  }
  return js
}

const callableTypeLiteralHTTPStub = `module.exports._httpFormDataReadString = (input) =>
  input === null ? undefined : input === "null" ? null : input;
module.exports._httpQueryReadString = (input) =>
  input === null ? undefined : input === "null" ? null : input;
module.exports._httpQueryParseURLSearchParams = (input) =>
  typeof input === "string" ? new URLSearchParams(input) : input;
`

const callableTypeLiteralLLMStub = `module.exports._llmApplicationFinalize = (app, config) => ({
  ...app,
  config: config ?? {},
  functions: app.functions,
});
`

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

const callableTypeLiteralConsumerRunner = `const modules = {
  interface: require("./interface.cjs"),
  literal: require("./literal.cjs"),
  alias: require("./alias.cjs"),
};

let families = 0;
let anchors = 0;
const failures = [];
const fn = (input) => ({ value: String(input.value) });
const other = (input) => ({ value: "other:" + input.value });
const holder = () => ({ fn });

// Each family is reduced to a JSON-comparable observation so three independent
// emits can be compared as behavior rather than as text.
const observations = {
  is: (mod) => [mod.is(holder()), mod.is({}), mod.is({ fn: {} })],
  validate: (mod) => [mod.validate(holder()).success, mod.validate({}).success],
  functional: (mod) => [typeof mod.functional, Object.keys(mod.functional(holder()) || {})],
  random: (mod) => Object.keys(mod.random()),
  clone: (mod) => mod.clone(holder()),
  prune: (mod) => { const value = holder(); mod.prune(value); return Object.keys(value); },
  classify: (mod) => mod.classify(holder()),
  camel: (mod) => mod.camel(holder()),
  pascal: (mod) => mod.pascal(holder()),
  equals: (mod) => [mod.equals(holder(), holder()), mod.equals({ fn }, { fn: other })],
  cover: (mod) => [mod.cover(holder(), holder())],
  stringify: (mod) => mod.stringify(holder()),
  jsonSchema: (mod) => mod.jsonSchema,
  jsonSchemas: (mod) => mod.jsonSchemas,
  jsonApplication: (mod) => mod.jsonApplication,
  reflectSchema: (mod) => mod.reflectSchema,
  reflectSchemas: (mod) => mod.reflectSchemas,
  reflectName: (mod) => mod.reflectName,
  llmSchema: (mod) => mod.llmSchema,
  llmParameters: (mod) => mod.llmParameters,
  httpFormData: (mod) => {
    const value = new FormData();
    value.set("fn", "value");
    return mod.httpFormData(value);
  },
  httpHeaders: (mod) => mod.httpHeaders(new Headers({ fn: "value" })),
  httpQuery: (mod) => mod.httpQuery(new URLSearchParams({ fn: "value" })),
};

for (const [family, observe] of Object.entries(observations)) {
  const answers = {};
  for (const spelling of ["interface", "literal", "alias"]) {
    families += 1;
    try {
      answers[spelling] = JSON.stringify(observe(modules[spelling]));
    } catch (error) {
      answers[spelling] = "threw " + String(error && error.message);
    }
  }
  for (const spelling of ["literal", "alias"]) {
    if (answers[spelling] !== answers.interface) {
      failures.push(
        "consumer " + family + ": interface=" + answers.interface + " " + spelling + "=" + answers[spelling]);
    }
  }
}

// Parity cannot see a change that moves every spelling the same way, so these
// pin what a function slot means to the consumers that must act on it, taken
// from typia's published behavior for a function-typed member: it is not JSON
// data, it is not reconstructed by a plain copy, and it carries no identity that
// structural equality could compare.
const anchorRows = [
  ["is accepts a real function", (mod) => mod.is(holder()), true],
  ["stringify omits the function slot", (mod) => mod.stringify(holder()), "{}"],
  ["clone drops the function slot", (mod) => mod.clone(holder()).fn, undefined],
  ["classify drops the function slot", (mod) => mod.classify(holder()).fn, undefined],
  ["prune keeps the declared slot", (mod) => { const value = holder(); mod.prune(value); return value.fn; }, fn],
  ["equals ignores function identity", (mod) => mod.equals({ fn }, { fn: other }), true],
];
for (const [label, observe, expected] of anchorRows) {
  anchors += 1;
  const actual = observe(modules.interface);
  if (actual !== expected) {
    failures.push("consumer anchor " + label + ": expected " + expected + " but got " + actual);
  }
}

console.log("RAN " + families + " CONSUMER FAMILIES " + anchors + " ANCHORS");
if (failures.length !== 0) throw new Error("MISMATCHES:\n" + failures.join("\n"));
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

const callableTypeLiteralProvenanceRunner = `const modules = {
  default: require("./default.cjs"),
  functional: require("./functional.cjs"),
};

let calls = 0;
const failures = [];
const callable = (value) => String(value);
class Constructable { constructor(value) { this.value = value; } }

// A declaration's provenance is not part of its type, so the four-cell function
// contract has to hold identically for a local declaration, one imported from a
// sibling module, and one from an ambient module declaration.
const expectations = {
  default: { real: true, placeholder: true },
  functional: { real: true, placeholder: false },
};
for (const provenance of ["Local", "Reexported", "Ambient"]) {
  for (const kind of ["Call", "Construct"]) {
    const real = kind === "Call" ? callable : Constructable;
    for (const spelling of ["Literal", "Alias", "Interface"]) {
      for (const form of ["direct", "factory"]) {
        const name = form + provenance + kind + spelling;
        for (const mode of ["default", "functional"]) {
          for (const [label, value] of [["real", real], ["placeholder", {}]]) {
            calls += 1;
            const validator = modules[mode][name];
            if (typeof validator !== "function") {
              failures.push("missing export " + mode + " " + name);
              continue;
            }
            const actual = validator(value);
            const expected = expectations[mode][label];
            if (actual !== expected) {
              failures.push(mode + " " + name + " " + label + ": expected " + expected + " but got " + actual);
            }
          }
        }
      }
    }
  }
}

console.log("RAN " + calls + " PROVENANCE CALLS");
if (failures.length !== 0) throw new Error("MISMATCHES:\n" + failures.join("\n"));
`

const callableTypeLiteralSpellingRunnerTemplate = `const modules = {
  default: require("./default.cjs"),
  functional: require("./functional.cjs"),
};

let groups = 0;
let memberPairs = 0;
let anchors = 0;
let optionalRows = 0;
const failures = [];

// A missing export means the fixture and this runner disagree about the matrix.
// Reporting it by name keeps that from surfacing as an unattributable TypeError
// halfway through the run.
const call = (mode, name, input) => {
  const validator = modules[mode][name];
  if (typeof validator !== "function") {
    failures.push("missing export " + mode + " " + name);
    return "MISSING";
  }
  return validator(input);
};

const callable = (value) => String(value);
class Constructable { constructor(value) { this.value = value; } }
const methoded = Object.assign((value) => String(value), { method: () => undefined });
const labeled = Object.assign((value) => String(value), { label: "present" });
const mislabeled = Object.assign((value) => String(value), { label: 123 });
const indexed = Object.assign((value) => String(value), { extra: 1 });
// An object carrying every apparent member TypeScript gives a callable object
// type — the global Function interface's apply/call/bind/toString/prototype/
// length/arguments/caller plus name — beside the members each shape declares.
// It is the one value the structural path a member-carrying shape must keep is
// supposed to accept, so without it a regression that answered false everywhere
// would satisfy every parity assertion below.
const apparent = {
  apply: () => undefined,
  call: () => undefined,
  bind: () => undefined,
  toString: () => "",
  length: 0,
  name: "",
  prototype: {},
  arguments: null,
  caller: () => undefined,
  label: "present",
  method: () => undefined,
  extra: 1,
};

const shapes = [__SHAPES__];
const aliasedShapes = new Set([__ALIASED__]);
// Each pair differs only in whether its member is written as a method shorthand
// or as a function-typed property. TypeScript calls them the same type, so every
// validator built from either must answer identically.
const memberSpellingPairs = [__MEMBER_PAIRS__];
const positions = [__POSITIONS__];
const values = [
  ["callable", callable],
  ["constructable", Constructable],
  ["methoded", methoded],
  ["labeled", labeled],
  ["mislabeled", mislabeled],
  ["indexed", indexed],
  ["apparent", apparent],
  ["placeholder", {}],
  ["dataOnly", { label: "present" }],
  ["badDataOnly", { label: 123 }],
  ["unionData", { kind: "data", value: 1 }],
  ["badUnionData", { kind: "data", value: "bad" }],
];

const wrap = (position, value) =>
  position === "Nested" || position === "OptionalProperty"
    ? { fn: value }
    : position === "Generic"
      ? { payload: value }
      : value;

for (const mode of ["default", "functional"]) {
  for (const position of positions) {
    for (const form of ["direct", "factory"]) {
      for (const [label, value] of values) {
        const input = wrap(position, value);
        for (const shape of shapes) {
          groups += 1;
          const spellings = ["Interface", "Literal", "Inline"];
          if (aliasedShapes.has(shape)) spellings.push("Alias");
          const answers = spellings.map((spelling) => call(mode, form + shape + spelling + position, input));
          for (let i = 1; i < answers.length; ++i) {
            if (answers[i] !== answers[0]) {
              failures.push(
                "spelling " + mode + " " + form + shape + position + " " + label +
                ": " + spellings[0] + "=" + answers[0] + " " + spellings[i] + "=" + answers[i]);
            }
          }
        }
        for (const [method, property] of memberSpellingPairs) {
          for (const spelling of ["Interface", "Literal", "Inline"]) {
            memberPairs += 1;
            const left = call(mode, form + method + spelling + position, input);
            const right = call(mode, form + property + spelling + position, input);
            if (left !== right) {
              failures.push(
                "member " + spelling + " " + mode + " " + form + method + "/" + property + position + " " + label +
                ": method=" + left + " property=" + right);
            }
          }
        }
      }
    }
  }
}

// Parity cannot see a change that moves every spelling the same way, so these
// anchors pin the answers themselves. A member-free callable is a function type,
// which typia documents as a slot default options skip and functional options
// require a real function for. A member-carrying callable keeps the structural
// object shape #2250 merged and #2238 declares an explicit negative boundary:
// its guard opens with a typeof "object" test, so a real function is rejected,
// and it still requires the members it declares, so a bare {} is rejected too.
const anchorRows = [
  ["default", "directPureCall", "Top", callable, true],
  ["functional", "directPureCall", "Top", callable, true],
  ["default", "directPureCall", "Top", {}, true],
  ["functional", "directPureCall", "Top", {}, false],
  ["default", "factoryPureCall", "Top", callable, true],
  ["functional", "factoryPureCall", "Top", {}, false],
  ["default", "directPureConstruct", "Top", Constructable, true],
  ["functional", "directPureConstruct", "Top", Constructable, true],
  ["default", "directPureConstruct", "Top", {}, true],
  ["functional", "directPureConstruct", "Top", {}, false],
  ["default", "directOverload", "Top", callable, true],
  ["functional", "directOverload", "Top", callable, true],
  ["functional", "directOverload", "Top", {}, false],
  ["default", "directConstructOverload", "Top", Constructable, true],
  ["functional", "directConstructOverload", "Top", {}, false],
  ["default", "directCallAndConstruct", "Top", callable, true],
  ["functional", "directCallAndConstruct", "Top", callable, true],
  ["functional", "directCallAndConstruct", "Top", {}, false],
  ["default", "directPureCall", "Nested", { fn: callable }, true],
  ["functional", "directPureCall", "Nested", { fn: callable }, true],
  ["functional", "directPureCall", "Nested", { fn: {} }, false],
  ["default", "directPureCall", "EmptyIntersection", callable, true],
  ["functional", "directPureCall", "EmptyIntersection", callable, true],
  ["functional", "directPureCall", "EmptyIntersection", {}, false],
  ["default", "directPureCall", "Generic", { payload: callable }, true],
  ["functional", "directPureCall", "Generic", { payload: {} }, false],
  ["default", "directPureCall", "UnionArm", callable, true],
  ["default", "directPureCall", "UnionArm", { kind: "data", value: 1 }, true],
  ["default", "directPureCall", "UnionArm", { kind: "data", value: "bad" }, false],
  ["functional", "directPureCall", "UnionArm", callable, true],
  ["functional", "directPureCall", "UnionArm", { kind: "data", value: 1 }, true],
  ["functional", "directPureCall", "UnionArm", { kind: "data", value: "bad" }, false],

  ["default", "directRequiredMember", "Top", labeled, false],
  ["functional", "directRequiredMember", "Top", labeled, false],
  ["default", "directRequiredMember", "Top", {}, false],
  ["default", "directRequiredMember", "Top", apparent, true],
  ["functional", "directRequiredMember", "Top", apparent, true],
  ["default", "directIndexSignature", "Top", indexed, false],
  ["default", "directIndexSignature", "Top", apparent, true],
  ["default", "directMethod", "Top", methoded, false],
  ["default", "directMethod", "Top", apparent, true],
  ["default", "directMethodProperty", "Top", methoded, false],
  ["default", "directMethodProperty", "Top", apparent, true],
];
for (const [mode, prefix, position, value, expected] of anchorRows) {
  for (const spelling of ["Interface", "Literal", "Inline"]) {
    anchors += 1;
    const name = prefix + spelling + position;
    const actual = call(mode, name, value);
    if (actual !== expected) {
      failures.push("anchor " + mode + " " + name + ": expected " + expected + " but got " + actual);
    }
  }
}

// The optional data member is its own boundary: a callable shape whose only
// member may be absent is the shape most likely to be mistaken for a member-free
// one, so a fix that widened the signature-only rule too far would erase the
// member and start accepting a bare function. Present-valid, omitted,
// present-invalid, and data-only are the four states that distinguish "the
// member is still checked" from "the member is gone", and the interface spelling
// is the oracle #2250 merged for them.
for (const [label, value] of [
  ["present-valid", labeled],
  ["omitted", callable],
  ["present-invalid", mislabeled],
  ["data-only", { label: "present" }],
]) {
  for (const mode of ["default", "functional"]) {
    optionalRows += 1;
    const oracle = call(mode, "directOptionalMemberInterfaceTop", value);
    for (const spelling of ["Literal", "Inline"]) {
      const actual = call(mode, "directOptionalMember" + spelling + "Top", value);
      if (actual !== oracle) {
        failures.push(
          "optional member " + mode + " " + spelling + " " + label +
          ": expected the interface oracle " + oracle + " but got " + actual);
      }
    }
    // A callable value that omits the optional member must not be accepted while
    // the declared member is still part of the type; if it were, the member had
    // been erased.
    if (label === "omitted" && oracle !== false) {
      failures.push("optional member " + mode + " omitted: interface oracle accepted a bare function");
    }
  }
}

console.log("RAN " + groups + " SPELLING GROUPS");
console.log("RAN " + memberPairs + " MEMBER PAIRS");
console.log("RAN " + anchors + " ANCHORS");
console.log("RAN " + optionalRows + " OPTIONAL MEMBER ROWS");
if (failures.length !== 0) throw new Error("MISMATCHES:\n" + failures.join("\n"));
`
