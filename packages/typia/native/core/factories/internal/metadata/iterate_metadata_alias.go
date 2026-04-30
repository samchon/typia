package metadata

import (
	nativeast "github.com/microsoft/typescript-go/shim/ast"
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

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
