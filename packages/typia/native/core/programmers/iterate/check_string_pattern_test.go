package iterate

import (
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCheckStringCachesOnlyStaticPatterns verifies the string check's cache boundary.
//
// Pattern-kind metadata alone cannot justify replacing arbitrary validation
// code. Only a flag-free constructor with the authored source and input has
// the standard tag's stateless behavior.
//
// 1. Build real string-check expressions for standard and custom tag forms.
// 2. Require one lazy var slot for repeated standard sources, and none otherwise.
// 3. Repeat through standalone and compiler-integrated node factories.
//
// @evidence contracts/testing.md#behavioral-verification Check_string builds AST checks from tag metadata. Standard and empty sources register exactly one uninitialized var after repeated calls; flags, altered source, altered input, arbitrary predicates and other tag kinds register none. Standard receiver expressions use nullish assignment so construction remains lazy.
// @evidence contracts/testing.md#independent-expectations A flag-free RegExp(source).test(input) can reuse one stateless object. Additional flags or authored expressions are independent behavior and must remain unchanged; uninitialized var slots preserve lazy and early-module use.
// @evidence contracts/testing.md#distinguishing-cases Standard, empty and invalid sources have custom flags, mismatched source, mismatched input, custom predicate, non-pattern kind and absent importer negative twins. Two distinct sources require two slots; repeated requests reuse one. Both factory modes are exercised.
// @evidence contracts/testing.md#execution-ownership The native Go suite discovers this in-process unit test. It calls the real checker builder and importer with in-memory AST and metadata; no compiler artifact or JavaScript subprocess is needed. The schema E2E case owns actual module lowering and construction counts.
func TestCheckStringCachesOnlyStaticPatterns(t *testing.T) {
  for _, emit := range []*shimprinter.EmitContext{nil, shimprinter.NewEmitContext()} {
    for _, row := range []struct {
      source string
      script string
      kind string
      cached bool
    }{
      {"x", `RegExp("x").test($input)`, "pattern", true},
      {"", `RegExp("").test($input)`, "pattern", true},
      {"[", `RegExp("[").test($input)`, "pattern", true},
      {"x", `RegExp("x", "g").test($input)`, "pattern", false},
      {"x", `RegExp("y").test($input)`, "pattern", false},
      {"x", `RegExp("x").test("other")`, "pattern", false},
      {"x", `$input === "allow"`, "pattern", false},
      {"x", `RegExp("x").test($input)`, "custom", false},
    } {
      importer := nativecontext.NewImportProgrammer()
      if emit != nil { importer.SetEmitContext(emit) }
      props := Check_stringProps{
        Context: nativecontext.ITypiaContext{Emit: emit, Importer: importer},
        Input: nativecontext.NodeFactoryOf(emit).NewIdentifier("input"),
        Atomic: &nativemetadata.MetadataAtomic{Type: "string", Tags: [][]nativemetadata.IMetadataTypeTag{{{
          Target: "string", Name: "test", Kind: row.kind, Value: row.source, Validate: row.script,
        }}}},
      }
      first := Check_string(props).Conditions[0][0].Expression
      Check_string(props)
      statements := importer.ToStatements()
      expected := 0
      if row.cached { expected = 1 }
      if len(statements) != expected { t.Fatalf("%s: expected %d cache slots, got %d", row.script, expected, len(statements)) }
      if row.cached {
        declaration := statements[0].AsVariableStatement().DeclarationList.AsVariableDeclarationList()
        if declaration.Flags & (shimast.NodeFlagsLet | shimast.NodeFlagsConst) != 0 || declaration.Declarations.Nodes[0].AsVariableDeclaration().Initializer != nil {
          t.Fatalf("%s: cache must use an uninitialized var", row.script)
        }
        receiver := first.AsCallExpression().Expression.AsPropertyAccessExpression().Expression
        if receiver.Kind != shimast.KindParenthesizedExpression || receiver.AsParenthesizedExpression().Expression.AsBinaryExpression().OperatorToken.Kind != shimast.KindQuestionQuestionEqualsToken {
          t.Fatalf("%s: construction must be lazy", row.script)
        }
        props.Atomic.Tags[0][0].Value = "different"
        props.Atomic.Tags[0][0].Validate = `RegExp("different").test($input)`
        Check_string(props)
        if len(importer.ToStatements()) != 2 { t.Fatal("distinct sources must have distinct slots") }
      }
      props.Context.Importer = nil
      Check_string(props)
    }
  }
}
