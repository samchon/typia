package adapter

import (
  "path/filepath"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

type CallSite struct {
  File       *shimast.SourceFile
  FilePath   string
  Module     string
  Method     string
  Call       *shimast.CallExpression
  RootName   string
  Namespaces []string
}

func CollectCallSites(files []*shimast.SourceFile, checker *shimchecker.Checker) []CallSite {
  sites := []CallSite{}
  for _, file := range files {
    if file == nil || file.IsDeclarationFile {
      continue
    }
    file.ForEachChild(func(node *shimast.Node) bool {
      visitCallSite(file, checker, node, &sites)
      return false
    })
  }
  return sites
}

func visitCallSite(file *shimast.SourceFile, checker *shimchecker.Checker, node *shimast.Node, sites *[]CallSite) {
  if node == nil {
    return
  }
  if node.Kind == shimast.KindCallExpression {
    if site, ok := tryCallSite(file, checker, node); ok {
      *sites = append(*sites, site)
    }
  }
  node.ForEachChild(func(child *shimast.Node) bool {
    visitCallSite(file, checker, child, sites)
    return false
  })
}

func tryCallSite(file *shimast.SourceFile, checker *shimchecker.Checker, node *shimast.Node) (CallSite, bool) {
  if checker == nil {
    return CallSite{}, false
  }
  call := node.AsCallExpression()
  if call == nil {
    return CallSite{}, false
  }
  signature := checker.GetResolvedSignature(node)
  if signature == nil {
    return CallSite{}, false
  }
  declaration := signature.Declaration()
  if declaration == nil {
    return CallSite{}, false
  }
  sourceFile := shimast.GetSourceFileOfNode(declaration)
  if sourceFile == nil {
    return CallSite{}, false
  }
  module, ok := matchTypiaModule(sourceFile.FileName())
  if !ok {
    return CallSite{}, false
  }
  method := callSiteMethodName(checker, declaration, call)
  if method == "" {
    return CallSite{}, false
  }
  root, namespaces, ok := extractRootAndNamespaces(call, method)
  if !ok {
    return CallSite{}, false
  }
  return CallSite{
    File:       file,
    FilePath:   file.FileName(),
    Module:     module,
    Method:     method,
    Call:       call,
    RootName:   root,
    Namespaces: namespaces,
  }, true
}

func matchTypiaModule(location string) (string, bool) {
  location = filepath.ToSlash(location)
  for _, suffix := range []string{".d.ts", ".ts"} {
    for _, middle := range []string{"typia/lib/", "typia/src/", "packages/typia/src/"} {
      index := strings.LastIndex(location, middle)
      if index < 0 {
        continue
      }
      name := location[index+len(middle):]
      if !strings.HasSuffix(name, suffix) {
        continue
      }
      name = strings.TrimSuffix(name, suffix)
      if strings.Contains(name, "/") {
        continue
      }
      return name, true
    }
  }
  return "", false
}

func callSiteMethodName(checker *shimchecker.Checker, declaration *shimast.Node, call *shimast.CallExpression) string {
  if name := declaration.Name(); name != nil {
    if symbol := checker.GetSymbolAtLocation(name); symbol != nil && symbol.Name != "" {
      return symbol.Name
    }
    if name.Kind == shimast.KindIdentifier {
      if id := name.AsIdentifier(); id != nil {
        return id.Text
      }
    }
  }
  if call.Expression != nil && call.Expression.Kind == shimast.KindPropertyAccessExpression {
    if property := call.Expression.AsPropertyAccessExpression(); property != nil {
      if name := property.Name(); name != nil && name.Kind == shimast.KindIdentifier {
        if id := name.AsIdentifier(); id != nil {
          return id.Text
        }
      }
    }
  }
  return ""
}

func extractRootAndNamespaces(call *shimast.CallExpression, method string) (string, []string, bool) {
  expression := call.Expression
  segments := []string{}
  for expression != nil && expression.Kind == shimast.KindPropertyAccessExpression {
    property := expression.AsPropertyAccessExpression()
    if property == nil {
      break
    }
    name := property.Name()
    if name == nil || name.Kind != shimast.KindIdentifier {
      return "", nil, false
    }
    id := name.AsIdentifier()
    if id == nil || id.Text == "" {
      return "", nil, false
    }
    segments = append([]string{id.Text}, segments...)
    expression = property.Expression
  }
  if expression == nil || expression.Kind != shimast.KindIdentifier {
    return "", nil, false
  }
  root := expression.AsIdentifier()
  if root == nil || root.Text == "" || len(segments) == 0 {
    return "", nil, false
  }
  if segments[len(segments)-1] != method {
    return "", nil, false
  }
  return root.Text, segments[:len(segments)-1], true
}
