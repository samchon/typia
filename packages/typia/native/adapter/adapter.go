package adapter

import (
  "fmt"
  "os"
  "runtime/debug"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeprinter "github.com/samchon/typia/packages/typia/native/internal/printer"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

type PluginOptions struct {
  Functional bool
  Numeric    bool
  Finite     bool
  Undefined  bool
}

func (p PluginOptions) TransformOptions() nativecontext.ITransformOptions {
  return nativecontext.ITransformOptions{
    Finite:     boolPointer(p.Finite),
    Numeric:    boolPointer(p.Numeric),
    Functional: boolPointer(p.Functional),
    Undefined:  boolPointer(p.Undefined),
    Runtime:    "typia",
  }
}

func boolPointer(value bool) *bool {
  if value == false {
    return nil
  }
  return &value
}

func EmitCallWithOptions(program *driver.Program, site CallSite, plugin PluginOptions) (text string, handled bool, err error) {
  return emitCallWithOptions(program, site, plugin, false)
}

func EmitCallWithOptionsPreservingTypes(program *driver.Program, site CallSite, plugin PluginOptions) (text string, handled bool, err error) {
  return emitCallWithOptions(program, site, plugin, true)
}

func emitCallWithOptions(program *driver.Program, site CallSite, plugin PluginOptions, preserveTypes bool) (text string, handled bool, err error) {
  if program == nil || program.Checker == nil || site.Call == nil {
    return "", false, nil
  }
  importer := nativeprogrammers.NewImportProgrammer(nativeprogrammers.ImportProgrammer_IOptions{
    InternalPrefix: "typia_transform_",
    Runtime:        "typia",
  })
  context := nativecontext.ITypiaContext{
    Program:         program,
    CompilerOptions: program.ParsedConfig.ParsedConfig.CompilerOptions,
    Checker:         program.Checker,
    Options:         plugin.TransformOptions(),
    Importer:        importer,
  }
  defer func() {
    if exp := recover(); exp != nil {
      if e, ok := exp.(*nativetransform.TransformerError); ok {
        text = ""
        handled = true
        err = e
        return
      }
      text = ""
      handled = true
      if os.Getenv("TYPIA_NATIVE_DEBUG_STACK") != "" {
        err = fmt.Errorf("%v\n%s", exp, debug.Stack())
      } else {
        err = fmt.Errorf("%v", exp)
      }
    }
  }()
  var node *shimast.Node
  if site.Module != "" && site.Method != "" {
    node = nativetransform.CallExpressionTransformer.TransformKnown(nativetransform.CallExpressionTransformer_TransformKnownProps{
      Context:    context,
      Expression: site.Call,
      Module:     site.Module,
      Method:     site.Method,
    })
  } else {
    node = nativetransform.CallExpressionTransformer.Transform(nativetransform.CallExpressionTransformer_TransformProps{
      Context:    context,
      Expression: site.Call,
    })
  }
  if node == nil || node == site.Call.AsNode() {
    return "", false, nil
  }
  if preserveTypes {
    return cleanupPrintedExpression(nativeprinter.EmitPreservingTypesWithIdentifierSubstitutions(
      node,
      site.File,
      nil,
    )), true, nil
  }
  return cleanupPrintedExpression(nativeprinter.EmitWithIdentifierSubstitutions(
    node,
    site.File,
    identifierSubstitutionsForEmit(program, site.File),
  )), true, nil
}

func identifierSubstitutionsForEmit(program *driver.Program, file any) map[string]string {
  if program == nil ||
    program.ParsedConfig == nil ||
    program.ParsedConfig.ParsedConfig == nil ||
    program.ParsedConfig.ParsedConfig.CompilerOptions == nil ||
    program.ParsedConfig.ParsedConfig.CompilerOptions.GetEmitModuleKind().String() != "CommonJS" {
    return nil
  }
  sourceFile, ok := file.(*shimast.SourceFile)
  if ok == false {
    return nil
  }
  return commonJSImportIdentifierSubstitutions(sourceFile)
}

func cleanupPrintedExpression(text string) string {
  text = strings.TrimSpace(text)
  text = strings.TrimSuffix(text, ";")
  text = parenthesizeSingleParameterArrows(text)
  if strings.HasPrefix(text, "(") && strings.HasSuffix(text, ")") {
    return text
  }
  if strings.Contains(text, "=>") || strings.Contains(text, "function") {
    return "(" + text + ")"
  }
  return text
}

// parenthesizeSingleParameterArrows wraps a bare single-parameter arrow head
// `x =>` into `(x) =>`. It reproduces the regex
// `(^|[\s(=,:?])([A-Za-z_$][A-Za-z0-9_$]*) =>` -> `${1}(${2}) =>` with a manual
// byte scan: the printed call-site expression is large and this pass ran on
// every site, where the regex backtracker dominated the cleanup CPU.
func parenthesizeSingleParameterArrows(text string) string {
  arrow := strings.Index(text, " =>")
  if arrow < 0 {
    return text
  }
  var b strings.Builder
  last := 0
  for arrow >= 0 {
    end := arrow // identifier ends just before the space of " =>"
    start := end
    for start > 0 && isArrowIdentByte(text[start-1]) {
      start--
    }
    if end > start && isArrowIdentStart(text[start]) &&
      (start == 0 || isArrowBoundaryByte(text[start-1])) {
      if b.Cap() == 0 {
        b.Grow(len(text) + 16)
      }
      b.WriteString(text[last:start])
      b.WriteByte('(')
      b.WriteString(text[start:end])
      b.WriteByte(')')
      last = end
    }
    next := strings.Index(text[arrow+3:], " =>")
    if next < 0 {
      break
    }
    arrow += 3 + next
  }
  if last == 0 {
    return text
  }
  b.WriteString(text[last:])
  return b.String()
}

func isArrowIdentStart(c byte) bool {
  return c == '_' || c == '$' ||
    (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}

func isArrowIdentByte(c byte) bool {
  return isArrowIdentStart(c) || (c >= '0' && c <= '9')
}

// isArrowBoundaryByte matches the regex class [\s(=,:?] (RE2 `\s` is
// [\t\n\f\r ], i.e. no vertical tab).
func isArrowBoundaryByte(c byte) bool {
  switch c {
  case ' ', '\t', '\n', '\f', '\r', '(', '=', ',', ':', '?':
    return true
  }
  return false
}

func UnsupportedReason(site CallSite) string {
  if site.Call == nil {
    return "invalid call expression"
  }
  if site.Call.TypeArguments == nil || len(site.Call.TypeArguments.Nodes) == 0 {
    switch site.Module {
    case "module":
      switch site.Method {
      case "assert", "assertEquals", "assertGuard", "assertGuardEquals", "assertType", "equals", "is", "validate", "validateEquals":
        return ""
      }
    case "json":
      switch site.Method {
      case "stringify", "assertStringify", "isStringify", "validateStringify":
        return ""
      }
    }
    return "generic argument is not specified."
  }
  return ""
}

func FormatTransformError(site CallSite, err error) string {
  if err == nil {
    return ""
  }
  code := "typia." + site.Method
  if site.Module != "" {
    code = "typia." + site.Module + "." + site.Method
  }
  return fmt.Sprintf("error TS(%s): %s", code, err.Error())
}
