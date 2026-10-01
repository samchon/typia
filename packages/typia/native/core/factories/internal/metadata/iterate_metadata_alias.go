package metadata

import (
  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_alias records a type alias as a named alias entry instead of
// expanding it. It reports false when the Absorb option is on and for a type that
// is not declared by a type alias.
//
// @evidence contracts/common.md#principled-implementation A type declared by a type alias is recorded as an alias entry that refers to the emplaced alias type, so recursive and shared aliases keep their names in the schema; it declines when Absorb is on, which analyzes the structure inside an intersection, and for any type not declared by a type alias.
// @evidence contracts/common.md#clear-and-simple-design One function over the shared emplace service; the symbol lookup is a small private wrapper.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declaration kind of the alias symbol and no alias name is listed.
// @evidence contracts/common.md#meaningful-documentation The doc states both declines.
func Iterate_metadata_alias(props IMetadataIteratorProps) bool {
  if props.Options.Absorb != false {
    return false
  }
  aliasSymbol := nativechecker_type_name_symbol(props.Type)
  if aliasSymbol == nil || len(aliasSymbol.Declarations) == 0 {
    return false
  }
  if aliasSymbol.Declarations[0].Kind != nativeast.KindTypeAliasDeclaration {
    return false
  }

  typ := Emplace_metadata_alias(props)
  for _, elem := range props.Metadata.Aliases {
    if elem.Type.Name == typ.Name {
      return true
    }
  }
  props.Metadata.Aliases = append(props.Metadata.Aliases, schemametadata.MetadataAlias_create(schemametadata.MetadataAlias{
    Type: typ,
    Tags: [][]schemametadata.IMetadataTypeTag{},
  }))
  return true
}

func nativechecker_type_name_symbol(typ *nativechecker.Type) *nativeast.Symbol {
  return nativechecker.Type_getTypeNameSymbol(typ)
}
