package main

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimparser "github.com/microsoft/typescript-go/shim/parser"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestExactOptionalFamilyEmissionContract verifies all original validator producers.
//
// The removed exact-optional fixture's root, nested, array and union fields
// compile through eight validator families plus clone and forced random
// inclusion/omission. Inspecting each emitted producer prevents one shared
// manual entry test from standing in for the complete compiler assembly.
//
// @evidence contracts/testing.md#behavioral-verification Calls the real in-process transform with exactOptionalPropertyTypes:true and undefined:false, parses actual emitted JavaScript, and checks each validator's strict presence guards plus throwing/collecting diagnostic structure. Clone and both random producers must retain omission branches and required assignments.
// @evidence contracts/testing.md#independent-expectations Original authored interfaces determine optional key names, explicit unions and root/nested/array/union populations. Literal AST operators, diagnostic property names and callback literals are independent expectations rather than snapshots or comparisons between two emitters.
// @evidence contracts/testing.md#distinguishing-cases Eight validator families, nested number versus root/union string, explicit undefined unions, required undefined and both random inclusion choices survive. This assembly unit does not claim runtime TypeGuardError class identity or executable JavaScript verdicts.
// @evidence contracts/testing.md#execution-ownership The native Go runner calls runTransform and parses the emitted source in process; temporary fixture lifetime is test-owned. No Node, compiler subprocess or plugin binary build is launched.
func TestExactOptionalFamilyEmissionContract(t *testing.T) {
  source := `import typia from "typia";
interface IExactOptional { required: string; optional?: string; optionalUndefined?: string | undefined; requiredUndefined: string | undefined; nested?: IExactOptionalNested; array: IExactOptionalNested[]; union: IExactOptionalUnion; }
interface IExactOptionalNested { optional?: number; optionalUndefined?: number | undefined; }
type IExactOptionalUnion = { type: "a"; optional?: string; optionalUndefined?: string | undefined; } | { type: "b"; value: string; };
interface IExactOptionalClone { required: string; optional?: string; optionalUndefined?: string | undefined; requiredUndefined: string | undefined; nested: IExactOptionalCloneNested; array: IExactOptionalCloneNested[]; }
interface IExactOptionalCloneNested { optional?: number; optionalUndefined?: number | undefined; }
export const isRoot=typia.createIs<IExactOptional>();
export const equalsRoot=typia.createEquals<IExactOptional>();
export const assertRoot=typia.createAssert<IExactOptional>();
export const assertGuardRoot=typia.createAssertGuard<IExactOptional>();
export const assertEqualsRoot=typia.createAssertEquals<IExactOptional>();
export const assertGuardEqualsRoot=typia.createAssertGuardEquals<IExactOptional>();
export const validateRoot=typia.createValidate<IExactOptional>();
export const validateEqualsRoot=typia.createValidateEquals<IExactOptional>();
export const isUnion=typia.createIs<IExactOptionalUnion>();
export const cloneRoot=typia.plain.createClone<IExactOptionalClone>();
export const randomOmitted=()=>typia.random<IExactOptionalClone>({boolean:()=>false,string:()=>"value",array:({element})=>[element(0,1)]});
export const randomIncluded=()=>typia.random<IExactOptionalClone>({boolean:()=>true,string:()=>"value",array:({element})=>[element(0,1)]});
`
  project := compareEqualCoverProject(t, "exact-optional-family-", source)
  config := `{"compilerOptions":{"target":"ES2022","module":"commonjs","moduleResolution":"bundler","ignoreDeprecations":"6.0","types":["*"],"esModuleInterop":true,"strict":true,"exactOptionalPropertyTypes":true,"skipLibCheck":true},"include":["src"]}`
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(config), 0o644); err != nil {
    t.Fatal(err)
  }
  output, stderr, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js", "--plugins-json", `[{"config":{"transform":"typia/lib/transform","undefined":false},"name":"typia","stage":"transform"}]`})
  })
  if code != 0 {
    t.Fatalf("exact optional transform failed %d: %s", code, stderr)
  }
  file := shimparser.ParseSourceFile(shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(project, "emitted.js"))}, output, shimcore.ScriptKindJS)
  bindings := map[string]*shimast.Node{}
  assertImports := map[string]bool{}
  var walk func(*shimast.Node) bool
  walk = func(node *shimast.Node) bool {
    if node.Kind == shimast.KindVariableDeclaration {
      declaration := node.AsVariableDeclaration()
      if declaration.Initializer != nil {
        bindings[declaration.Name().Text()] = declaration.Initializer
        init := declaration.Initializer
        // esModuleInterop emits the namespace as __importStar(require(module)).
        if init.Kind == shimast.KindCallExpression {
          wrapper := init.AsCallExpression()
          if wrapper.Expression.Kind == shimast.KindIdentifier && shimast.NodeText(wrapper.Expression) == "__importStar" && wrapper.Arguments != nil && len(wrapper.Arguments.Nodes) == 1 {
            init = wrapper.Arguments.Nodes[0]
          }
        }
        if init.Kind == shimast.KindCallExpression {
          call := init.AsCallExpression()
          if call.Expression.Kind == shimast.KindIdentifier && shimast.NodeText(call.Expression) == "require" && call.Arguments != nil && len(call.Arguments.Nodes) == 1 && call.Arguments.Nodes[0].Kind == shimast.KindStringLiteral && shimast.NodeText(call.Arguments.Nodes[0]) == "typia/lib/internal/_assertGuard" {
            assertImports[declaration.Name().Text()] = true
          }
        }
      }
    }
    if node.Kind == shimast.KindBinaryExpression {
      binary := node.AsBinaryExpression()
      if binary.OperatorToken.Kind == shimast.KindEqualsToken && binary.Left.Kind == shimast.KindPropertyAccessExpression {
        access := binary.Left.AsPropertyAccessExpression()
        if access.Expression.Kind == shimast.KindIdentifier && shimast.NodeText(access.Expression) == "exports" {
          exported := binary.Right
          // CommonJS can assign the previously declared producer by identifier.
          // Follow that exact binding instead of replacing its body with a name.
          if exported.Kind == shimast.KindIdentifier {
            if initializer := bindings[shimast.NodeText(exported)]; initializer != nil {
              exported = initializer
            }
          }
          bindings[access.Name().Text()] = exported
        }
      }
    }
    node.ForEachChild(walk)
    return false
  }
  walk(file.AsNode())
  if len(assertImports) == 0 {
    t.Fatalf("assert family must import the actual typia _assertGuard runtime helper; actual emitted source:\n%s", output)
  }
  validators := []string{"isRoot", "equalsRoot", "assertRoot", "assertGuardRoot", "assertEqualsRoot", "assertGuardEqualsRoot", "validateRoot", "validateEqualsRoot", "isUnion"}
  for _, name := range append(validators, "cloneRoot", "randomOmitted", "randomIncluded") {
    t.Run(name, func(t *testing.T) {
      body := bindings[name]
      if body == nil {
        t.Fatalf("producer %s missing", name)
      }
      inOptional, ownOptional, emptyBranches, requiredAssignments, diagnosticPath, diagnosticValue, diagnosticExpected, optionalSuffix := 0, 0, 0, 0, 0, 0, 0, 0
      assertCalls, optionalDiagnostics, indexedArrayPaths := 0, 0, 0
      var inspect func(*shimast.Node) bool
      inspect = func(node *shimast.Node) bool {
        if node.Kind == shimast.KindCallExpression {
          call := node.AsCallExpression()
          callee := exactOptionalUnwrap(call.Expression)
          if callee.Kind == shimast.KindPropertyAccessExpression {
            access := callee.AsPropertyAccessExpression()
            if access.Name().Text() == "_assertGuard" && access.Expression.Kind == shimast.KindIdentifier && assertImports[shimast.NodeText(access.Expression)] {
              assertCalls++
            }
          }
        }
        if node.Kind == shimast.KindObjectLiteralExpression {
          props := map[string]*shimast.Node{}
          for _, property := range node.AsObjectLiteralExpression().Properties.Nodes {
            if property.Kind == shimast.KindPropertyAssignment {
              props[property.Name().Text()] = property.AsPropertyAssignment().Initializer
            }
          }
          path, value, expected := props["path"], props["value"], props["expected"]
          if path != nil && value != nil && expected != nil {
            value = exactOptionalUnwrap(value)
            if exactOptionalPropertyValue(value) && expected.Kind == shimast.KindStringLiteral && (shimast.NodeText(expected) == "string" || shimast.NodeText(expected) == "number") && exactOptionalContains(path, shimast.KindStringLiteral, ".optional") && exactOptionalContains(path, shimast.KindIdentifier, "_path") {
              optionalDiagnostics++
            }
          }
        }
        if node.Kind == shimast.KindBinaryExpression && node.AsBinaryExpression().OperatorToken.Kind == shimast.KindPlusToken {
          if exactOptionalContains(node, shimast.KindStringLiteral, ".array[") && exactOptionalContains(node, shimast.KindStringLiteral, "]") && exactOptionalHasIndex(node) {
            indexedArrayPaths++
          }
        }
        if node.Kind == shimast.KindBinaryExpression {
          binary := node.AsBinaryExpression()
          if binary.OperatorToken.Kind == shimast.KindInKeyword && binary.Left.Kind == shimast.KindStringLiteral && shimast.NodeText(binary.Left) == "optional" {
            inOptional++
          }
        }
        if node.Kind == shimast.KindPropertyAssignment {
          key := node.Name().Text()
          switch key {
          case "optional":
            ownOptional++
          case "requiredUndefined":
            requiredAssignments++
          case "path":
            diagnosticPath++
          case "value":
            diagnosticValue++
          case "expected":
            diagnosticExpected++
          }
        }
        if node.Kind == shimast.KindConditionalExpression {
          conditional := node.AsConditionalExpression()
          if conditional.WhenFalse.Kind == shimast.KindObjectLiteralExpression && len(conditional.WhenFalse.AsObjectLiteralExpression().Properties.Nodes) == 0 {
            emptyBranches++
          }
        }
        if node.Kind == shimast.KindStringLiteral && shimast.NodeText(node) == ".optional" {
          optionalSuffix++
        }
        node.ForEachChild(inspect)
        return false
      }
      inspect(body)
      if name == "cloneRoot" || name == "randomOmitted" || name == "randomIncluded" {
        if ownOptional < 2 || emptyBranches < 2 || requiredAssignments == 0 {
          t.Fatalf("own-key/omission/required contract missing: optional=%d empty=%d required=%d", ownOptional, emptyBranches, requiredAssignments)
        }
        return
      }
      minimum := 3
      if name == "isUnion" {
        minimum = 1
      }
      if inOptional < minimum {
        t.Fatalf("root/nested/union strict optional absence guards=%d want at least %d", inOptional, minimum)
      }
      if name == "assertRoot" || name == "assertGuardRoot" || name == "assertEqualsRoot" || name == "assertGuardEqualsRoot" || name == "validateRoot" || name == "validateEqualsRoot" {
        if diagnosticPath == 0 || diagnosticValue == 0 || diagnosticExpected == 0 || optionalSuffix == 0 {
          t.Fatalf("diagnostic path/value/expected optional assembly missing: %d/%d/%d/%d", diagnosticPath, diagnosticValue, diagnosticExpected, optionalSuffix)
        }
        if optionalDiagnostics < 2 || indexedArrayPaths == 0 {
          t.Fatalf("root/nested optional diagnostic triple or indexed array path missing: triples=%d arrayPaths=%d", optionalDiagnostics, indexedArrayPaths)
        }
        if strings.HasPrefix(name, "assert") && assertCalls == 0 {
          t.Fatal("assert diagnostics must call the actual imported _assertGuard")
        }
      }
    })
  }
}

// These walkers inspect concrete operators and operands, never execute JavaScript.
func exactOptionalUnwrap(node *shimast.Node) *shimast.Node {
  for node.Kind == shimast.KindParenthesizedExpression {
    node = node.AsParenthesizedExpression().Expression
  }
  if node.Kind == shimast.KindBinaryExpression && node.AsBinaryExpression().OperatorToken.Kind == shimast.KindCommaToken {
    return exactOptionalUnwrap(node.AsBinaryExpression().Right)
  }
  return node
}
func exactOptionalContains(node *shimast.Node, kind shimast.Kind, text string) bool {
  found := false
  var visit func(*shimast.Node) bool
  visit = func(n *shimast.Node) bool {
    if n.Kind == kind && shimast.NodeText(n) == text {
      found = true
    }
    n.ForEachChild(visit)
    return false
  }
  visit(node)
  return found
}
func exactOptionalHasIndex(node *shimast.Node) bool {
  found := false
  var visit func(*shimast.Node) bool
  visit = func(n *shimast.Node) bool {
    if n.Kind == shimast.KindIdentifier && strings.HasPrefix(shimast.NodeText(n), "_index") {
      found = true
    }
    n.ForEachChild(visit)
    return false
  }
  visit(node)
  return found
}
func exactOptionalPropertyValue(value *shimast.Node) bool {
  if value.Kind == shimast.KindPropertyAccessExpression {
    return value.AsPropertyAccessExpression().Name().Text() == "optional"
  }
  if value.Kind == shimast.KindElementAccessExpression {
    key := value.AsElementAccessExpression().ArgumentExpression
    return key.Kind == shimast.KindStringLiteral && shimast.NodeText(key) == "optional"
  }
  return false
}
