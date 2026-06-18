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

  // Capture the declaring source file (named declarations only) so plain.classify
  // can value-import a cross-module class it reconstructs. Additive: other
  // features ignore obj.Source.
  if props.Type != nil {
    if sym := props.Type.Symbol(); sym != nil && len(sym.Declarations) != 0 {
      if src := nativeast.GetSourceFileOfNode(sym.Declarations[0]); src != nil {
        file := src.FileName()
        obj.Source = &file
      }
    }
  }

  isClass := props.Type != nil && props.Type.IsClass()
  isProperty := emplace_metadata_object_significant(props.Options.Functional, props.Options.Methods)
  pred := func(node *nativeast.Node) bool {
    if node == nil {
      return true
    }
    if isClass && node.ModifierFlags()&(nativeast.ModifierFlagsPrivate|nativeast.ModifierFlagsProtected) != 0 {
      return false
    }
    return isProperty(node)
  }

  insert := func(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
    property := emplace_metadata_object_create_property(next)
    obj.Properties = append(obj.Properties, property)
    return property
  }
  if emplace_metadata_object_intersection(props, obj, insert, pred) {
    return obj
  }

  for _, symbol := range props.Components.ApparentProperties(props.Checker, props.Type) {
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
    insert(emplace_metadata_object_insert{
      Key:    key,
      Value:  value,
      Symbol: symbol,
      Node:   node,
    })
  }

  for _, index := range props.Components.IndexInfos(props.Checker, props.Type) {
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
    insert(emplace_metadata_object_insert{
      Key:   key,
      Value: value,
      FilterTags: func(doc schemametadata.IJsDocTagInfo) bool {
        return doc.Name != "default"
      },
    })
  }
  return obj
}

type emplace_metadata_object_insert struct {
  Key        *schemametadata.MetadataSchema
  Value      *schemametadata.MetadataSchema
  Symbol     *nativeast.Symbol
  Node       *nativeast.Node
  FilterTags func(schemametadata.IJsDocTagInfo) bool
}

func emplace_metadata_object_create_property(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
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
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:         next.Key,
    Value:       next.Value,
    Description: description,
    JsDocTags:   jsDocTags,
    Mutability:  mutability,
  })
}

func emplace_metadata_object_intersection(
  props IMetadataIteratorProps,
  obj *schemametadata.MetadataObjectType,
  insert func(emplace_metadata_object_insert) *schemametadata.MetadataProperty,
  pred func(node *nativeast.Node) bool,
) bool {
  if props.Checker == nil ||
    props.Type == nil ||
    props.Type.IsIntersection() == false ||
    iterate_metadata_intersection_is_plain_object_only(props.Checker, props.Components, props.Type, map[*nativechecker.Type]bool{}) == false {
    return false
  }
  children := emplace_metadata_object_intersection_children(props.Type, map[*nativechecker.Type]bool{})
  if len(children) < 2 || emplace_metadata_object_intersection_has_duplicate_key(props.Checker, props.Components, children) {
    return false
  }
  merged := []*schemametadata.MetadataProperty{}
  checkProperties := []*schemametadata.MetadataProperty{}
  parentObjects := []*schemametadata.MetadataObject{}
  props.Explore.Object = obj
  props.Explore.Top = false
  for _, child := range children {
    if emplace_metadata_object_shareable_child(props, child) {
      explore := props.Explore
      explore.Object = obj
      explore.Property = nil
      explore.Aliased = false
      metadata := Explore_metadata(Explore_metadata_IProps{
        Options:    props.Options,
        Checker:    props.Checker,
        Components: props.Components,
        Errors:     props.Errors,
        Type:       child,
        Explore:    explore,
        Prunable:   props.Prunable,
      })
      if metadata.Size() != 1 || len(metadata.Objects) != 1 {
        return false
      }
      if len(metadata.Objects[0].Tags) != 0 {
        return false
      }
      parentObjects = append(parentObjects, metadata.Objects[0])
      for _, property := range metadata.Objects[0].Type.Properties {
        merged = append(merged, emplace_metadata_object_clone_property(property))
      }
    } else if emplace_metadata_object_intersection_append(
      props,
      child,
      func(next emplace_metadata_object_insert) *schemametadata.MetadataProperty {
        property := emplace_metadata_object_create_property(next)
        merged = append(merged, property)
        checkProperties = append(checkProperties, property)
        return property
      },
      pred,
    ) == false {
      return false
    }
  }
  obj.Properties = append(obj.Properties, merged...)
  if len(parentObjects) != 0 {
    obj.Parent_objects_ = append(obj.Parent_objects_, parentObjects...)
    obj.Check_properties_ = append(obj.Check_properties_, checkProperties...)
  }
  return true
}

func emplace_metadata_object_shareable_child(props IMetadataIteratorProps, child *nativechecker.Type) bool {
  fullName := metadata_type_full_name(props.Checker, child, props.Components)
  sanitized := iterate_metadata_intersection_sanitize_name(fullName)
  return iterate_metadata_intersection_shareable_name(fullName, sanitized)
}

func emplace_metadata_object_intersection_append(
  props IMetadataIteratorProps,
  child *nativechecker.Type,
  insert func(emplace_metadata_object_insert) *schemametadata.MetadataProperty,
  pred func(node *nativeast.Node) bool,
) bool {
  if props.Checker == nil || child == nil || len(props.Components.IndexInfos(props.Checker, child)) != 0 {
    return false
  }
  for _, symbol := range props.Components.ApparentProperties(props.Checker, child) {
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
      typ = nativechecker.Checker_getTypeOfPropertyOfType(props.Checker, child, symbol.Name)
    }
    if (node != nil && pred(node) == false) || typ == nil {
      continue
    }

    explore := props.Explore
    explore.Property = symbol.Name
    explore.Parameter = nil
    explore.Nested = nil
    explore.Aliased = false
    explore.Escaped = false
    explore.Output = false
    value := Explore_metadata(Explore_metadata_IProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Type:        typ,
      Explore:     explore,
      Intersected: false,
      Prunable:    props.Prunable,
    })
    value.Optional = symbol.Flags&nativeast.SymbolFlagsOptional != 0
    insert(emplace_metadata_object_insert{
      Key:    MetadataHelper.Literal_to_metadata(symbol.Name),
      Value:  value,
      Symbol: symbol,
      Node:   node,
    })
  }
  return true
}

func emplace_metadata_object_intersection_children(
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) []*nativechecker.Type {
  if typ == nil || visited[typ] {
    return nil
  }
  visited[typ] = true
  if typ.IsIntersection() == false {
    return []*nativechecker.Type{typ}
  }
  output := []*nativechecker.Type{}
  for _, child := range typ.Types() {
    output = append(output, emplace_metadata_object_intersection_children(child, visited)...)
  }
  return output
}

func emplace_metadata_object_intersection_has_duplicate_key(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  children []*nativechecker.Type,
) bool {
  keys := map[string]bool{}
  for _, child := range children {
    if child == nil {
      return true
    }
    for _, symbol := range collection.ApparentProperties(checker, child) {
      if keys[symbol.Name] {
        return true
      }
      keys[symbol.Name] = true
    }
  }
  return false
}

func emplace_metadata_object_clone_property(property *schemametadata.MetadataProperty) *schemametadata.MetadataProperty {
  if property == nil {
    return nil
  }
  description := property.Description
  if description != nil {
    value := *description
    description = &value
  }
  mutability := property.Mutability
  if mutability != nil {
    value := *mutability
    mutability = &value
  }
  return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:         property.Key,
    Value:       property.Value.Clone(),
    Description: description,
    JsDocTags:   property.JsDocTags,
    Mutability:  mutability,
  })
}

func emplace_metadata_object_significant(functional bool, methods bool) func(node *nativeast.Node) bool {
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
    case nativeast.KindMethodDeclaration,
      nativeast.KindMethodSignature:
      return methods
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
