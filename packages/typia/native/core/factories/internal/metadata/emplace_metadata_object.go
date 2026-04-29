package metadata

import (
	nativeast "github.com/microsoft/typescript-go/shim/ast"
	nativechecker "github.com/microsoft/typescript-go/shim/checker"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Emplace_metadata_object(props IMetadataIteratorProps) *schemametadata.MetadataObjectType {
	obj, newbie := props.Components.Emplace(props.Checker, props.Type)
	metadata_array_util_add_bool(&obj.Nullables, props.Metadata.Nullable)
	if newbie == false {
		return obj
	}

	isClass := props.Type != nil && props.Type.IsClass()
	isProperty := emplace_metadata_object_significant(props.Options.Functional)
	pred := func(node *nativeast.Node) bool {
		if node == nil {
			return true
		}
		if isClass && node.ModifierFlags()&(nativeast.ModifierFlagsPrivate|nativeast.ModifierFlagsProtected) != 0 {
			return false
		}
		return isProperty(node)
	}

	insert := func(next struct {
		Key        *schemametadata.MetadataSchema
		Value      *schemametadata.MetadataSchema
		Symbol     *nativeast.Symbol
		Node       *nativeast.Node
		FilterTags func(schemametadata.IJsDocTagInfo) bool
	}) *schemametadata.MetadataProperty {
		description := metadata_node_description(next.Symbol)
		jsDocTags := metadata_node_js_doc_tags(next.Symbol)
		if next.FilterTags != nil {
			filtered := []schemametadata.IJsDocTagInfo{}
			for _, tag := range jsDocTags {
				if next.FilterTags(tag) {
					filtered = append(filtered, tag)
				}
			}
			jsDocTags = filtered
		}
		var mutability *string
		if next.Node != nil && next.Node.ModifierFlags()&nativeast.ModifierFlagsReadonly != 0 {
			value := "readonly"
			mutability = &value
		}
		property := schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
			Key:         next.Key,
			Value:       next.Value,
			Description: description,
			JsDocTags:   jsDocTags,
			Mutability:  mutability,
		})
		obj.Properties = append(obj.Properties, property)
		return property
	}

	for _, symbol := range nativechecker.Checker_getApparentProperties(props.Checker, props.Type) {
		if metadata_is_internal(symbol) {
			continue
		}
		var node *nativeast.Node
		if len(symbol.Declarations) != 0 {
			node = symbol.Declarations[0]
		}
		var typ *nativechecker.Type
		if node != nil {
			typ = props.Checker.GetTypeOfSymbolAtLocation(symbol, node)
		} else {
			typ = nativechecker.Checker_getTypeOfPropertyOfType(props.Checker, props.Type, symbol.Name)
		}
		if (node != nil && pred(node) == false) || typ == nil {
			continue
		}

		key := MetadataHelper.Literal_to_metadata(symbol.Name)
		explore := MetadataFactory_IExplore{
			Top:       false,
			Object:    obj,
			Property:  symbol.Name,
			Parameter: nil,
			Nested:    nil,
			Aliased:   false,
			Escaped:   false,
			Output:    false,
		}
		value := Explore_metadata(Explore_metadata_IProps{
			Options:     props.Options,
			Checker:     props.Checker,
			Components:  props.Components,
			Errors:      props.Errors,
			Type:        typ,
			Explore:     explore,
			Intersected: false,
		})
		value.Optional = symbol.Flags&nativeast.SymbolFlagsOptional != 0
		insert(struct {
			Key        *schemametadata.MetadataSchema
			Value      *schemametadata.MetadataSchema
			Symbol     *nativeast.Symbol
			Node       *nativeast.Node
			FilterTags func(schemametadata.IJsDocTagInfo) bool
		}{
			Key:    key,
			Value:  value,
			Symbol: symbol,
			Node:   node,
		})
	}

	for _, index := range nativechecker.Checker_getIndexInfosOfType(props.Checker, props.Type) {
		analyzer := func(typ *nativechecker.Type) func(any) *schemametadata.MetadataSchema {
			return func(property any) *schemametadata.MetadataSchema {
				explore := MetadataFactory_IExplore{
					Top:       false,
					Object:    obj,
					Property:  property,
					Parameter: nil,
					Nested:    nil,
					Aliased:   false,
					Escaped:   false,
					Output:    false,
				}
				return Explore_metadata(Explore_metadata_IProps{
					Options:     props.Options,
					Checker:     props.Checker,
					Components:  props.Components,
					Errors:      props.Errors,
					Type:        typ,
					Explore:     explore,
					Intersected: false,
				})
			}
		}
		key := analyzer(index.KeyType())(nil)
		value := analyzer(index.ValueType())(struct{}{})
		if emplace_metadata_object_valid_dynamic_key(key) == false && props.Errors != nil {
			*props.Errors = append(*props.Errors, MetadataFactory_IError{
				Name: key.GetName(),
				Explore: MetadataFactory_IExplore{
					Top:       false,
					Object:    obj,
					Property:  "[key]",
					Parameter: nil,
					Nested:    nil,
					Aliased:   false,
					Escaped:   false,
					Output:    false,
				},
				Messages: []string{},
			})
		}
		insert(struct {
			Key        *schemametadata.MetadataSchema
			Value      *schemametadata.MetadataSchema
			Symbol     *nativeast.Symbol
			Node       *nativeast.Node
			FilterTags func(schemametadata.IJsDocTagInfo) bool
		}{
			Key:   key,
			Value: value,
			FilterTags: func(doc schemametadata.IJsDocTagInfo) bool {
				return doc.Name != "default"
			},
		})
	}
	return obj
}

func emplace_metadata_object_significant(functional bool) func(node *nativeast.Node) bool {
	if functional {
		return func(node *nativeast.Node) bool {
			return node.Kind != nativeast.KindGetAccessor && node.Kind != nativeast.KindSetAccessor
		}
	}
	return func(node *nativeast.Node) bool {
		switch node.Kind {
		case nativeast.KindParameter,
			nativeast.KindPropertyDeclaration,
			nativeast.KindPropertyAssignment,
			nativeast.KindPropertySignature,
			nativeast.KindTypeLiteral,
			nativeast.KindShorthandPropertyAssignment:
			return true
		default:
			return false
		}
	}
}

func emplace_metadata_object_valid_dynamic_key(key *schemametadata.MetadataSchema) bool {
	total := len(key.Atomics) + len(key.Templates)
	for _, constant := range key.Constants {
		total += len(constant.Values)
	}
	for _, native := range key.Natives {
		if native.Name == "Boolean" || native.Name == "BigInt" || native.Name == "Number" || native.Name == "String" {
			total++
		}
	}
	return total == key.Size()
}

func iterate_optional_coalesce(props struct {
	Metadata *schemametadata.MetadataSchema
	Type     *nativechecker.Type
}) {
	if props.Type != nil && (props.Type.IsUnion() || props.Type.IsIntersection()) {
		for _, child := range props.Type.Types() {
			iterate_optional_coalesce(struct {
				Metadata *schemametadata.MetadataSchema
				Type     *nativechecker.Type
			}{
				Metadata: props.Metadata,
				Type:     child,
			})
		}
		return
	}
	Iterate_metadata_coalesce(struct {
		Metadata *schemametadata.MetadataSchema
		Type     *nativechecker.Type
	}{
		Metadata: props.Metadata,
		Type:     props.Type,
	})
}
