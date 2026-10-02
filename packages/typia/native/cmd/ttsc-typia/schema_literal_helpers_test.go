package main

import (
  "path/filepath"
  "reflect"
  "strconv"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimparser "github.com/microsoft/typescript-go/shim/parser"
)

// ttscTypiaTestSchemaLiteral decodes the emitted schema object's AST without
// executing JavaScript. It rejects expressions rather than evaluating them.
func ttscTypiaTestSchemaLiteral(t *testing.T, output string) map[string]any {
  t.Helper()
  file := shimparser.ParseSourceFile(shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "emitted.ts"))}, output, shimcore.ScriptKindTS)
  var found map[string]any
  var walk func(*shimast.Node) bool
  walk = func(node *shimast.Node) bool {
    if node.Kind == shimast.KindObjectLiteralExpression {
      hasComponents := false
      for _, property := range node.AsObjectLiteralExpression().Properties.Nodes {
        if property.Kind == shimast.KindPropertyAssignment && property.Name().Text() == "components" {
          hasComponents = true
        }
      }
      if hasComponents {
        if found != nil {
          t.Fatal("multiple schema collection literals emitted")
        }
        found = ttscTypiaTestLiteral(t, node).(map[string]any)
        return false
      }
    }
    node.ForEachChild(walk)
    return false
  }
  walk(file.AsNode())
  if found == nil {
    t.Fatalf("schema collection literal missing:\n%s", output)
  }
  return found
}

func ttscTypiaTestLiteral(t *testing.T, node *shimast.Node) any {
  t.Helper()
  switch node.Kind {
  case shimast.KindObjectLiteralExpression:
    value := map[string]any{}
    for _, p := range node.AsObjectLiteralExpression().Properties.Nodes {
      if p.Kind != shimast.KindPropertyAssignment {
        t.Fatalf("schema contains non-property literal: %v", p.Kind)
      }
      key := p.Name().Text()
      if _, exists := value[key]; exists {
        t.Fatalf("duplicate schema property %q", key)
      }
      value[key] = ttscTypiaTestLiteral(t, p.AsPropertyAssignment().Initializer)
    }
    return value
  case shimast.KindArrayLiteralExpression:
    value := []any{}
    for _, e := range node.AsArrayLiteralExpression().Elements.Nodes {
      value = append(value, ttscTypiaTestLiteral(t, e))
    }
    return value
  case shimast.KindStringLiteral:
    return node.Text()
  case shimast.KindNumericLiteral:
    value, err := strconv.ParseFloat(node.Text(), 64)
    if err != nil {
      t.Fatal(err)
    }
    return value
  case shimast.KindTrueKeyword:
    return true
  case shimast.KindFalseKeyword:
    return false
  case shimast.KindNullKeyword:
    return nil
  default:
    t.Fatalf("schema contains non-literal expression %v", node.Kind)
    return nil
  }
}

func ttscTypiaTestSchemaPath(t *testing.T, unit map[string]any, path ...string) any {
  t.Helper()
  var value any = unit
  for _, key := range path {
    object, ok := value.(map[string]any)
    if !ok {
      t.Fatalf("schema path %v crosses non-object %v", path, value)
    }
    value, ok = object[key]
    if !ok {
      t.Fatalf("schema path %v missing %q", path, key)
    }
  }
  return value
}

func ttscTypiaTestSchemaEqual(t *testing.T, actual, expected any) {
  t.Helper()
  if !reflect.DeepEqual(actual, expected) {
    t.Fatalf("schema mismatch: got %#v want %#v", actual, expected)
  }
}
