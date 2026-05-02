package adapter

import (
  "path/filepath"
  "strconv"
  "strings"
  "unicode"

  shimast "github.com/microsoft/typescript-go/shim/ast"
)

func commonJSImportIdentifierSubstitutions(file *shimast.SourceFile) map[string]string {
  if file == nil || file.Statements == nil {
    return nil
  }
  output := map[string]string{}
  counts := map[string]int{}
  for _, stmt := range file.Statements.Nodes {
    if stmt == nil || stmt.Kind != shimast.KindImportDeclaration {
      continue
    }
    decl := stmt.AsImportDeclaration()
    if decl == nil || decl.ImportClause == nil || decl.ModuleSpecifier == nil || decl.ModuleSpecifier.Kind != shimast.KindStringLiteral {
      continue
    }
    clause := decl.ImportClause.AsImportClause()
    if clause == nil || clause.PhaseModifier == shimast.KindTypeKeyword {
      continue
    }
    base := commonJSImportAliasBase(decl.ModuleSpecifier.Text())
    counts[base]++
    moduleAlias := base + "_" + strconv.Itoa(counts[base])
    if name := clause.Name(); name != nil {
      output[name.Text()] = moduleAlias + ".default"
    }
    if clause.NamedBindings == nil || clause.NamedBindings.Kind != shimast.KindNamedImports {
      continue
    }
    named := clause.NamedBindings.AsNamedImports()
    if named == nil || named.Elements == nil {
      continue
    }
    for _, elem := range named.Elements.Nodes {
      if elem == nil {
        continue
      }
      spec := elem.AsImportSpecifier()
      if spec == nil || spec.IsTypeOnly {
        continue
      }
      name := spec.Name()
      if name == nil {
        continue
      }
      local := name.Text()
      imported := local
      if spec.PropertyName != nil {
        imported = spec.PropertyName.Text()
      }
      output[local] = moduleAlias + "." + imported
    }
  }
  if len(output) == 0 {
    return nil
  }
  return output
}

func commonJSImportAliasBase(module string) string {
  base := strings.TrimSuffix(filepath.Base(module), filepath.Ext(module))
  if base == "" || base == "." || base == string(filepath.Separator) {
    base = "mod"
  }
  var builder strings.Builder
  for _, r := range base {
    if r == '_' || r == '$' || unicode.IsLetter(r) || unicode.IsDigit(r) {
      builder.WriteRune(r)
    } else {
      builder.WriteByte('_')
    }
  }
  text := builder.String()
  if text == "" {
    text = "mod"
  }
  first := []rune(text)[0]
  if first != '_' && first != '$' && !unicode.IsLetter(first) {
    text = "_" + text
  }
  return text
}
