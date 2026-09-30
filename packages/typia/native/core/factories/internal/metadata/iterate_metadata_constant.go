package metadata

import (
  "fmt"
  "strconv"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_constant(props IMetadataIteratorProps) bool {
  if props.Options.Constant == false {
    return false
  }
  filter := func(flag nativechecker.TypeFlags) bool {
    return props.Type.Flags()&flag != 0
  }
  comment := func() struct {
    description *string
    jsDocTags   []schemametadata.IJsDocTagInfo
  } {
    if filter(nativechecker.TypeFlagsEnumLiteral) == false {
      return struct {
        description *string
        jsDocTags   []schemametadata.IJsDocTagInfo
      }{}
    }
    symbol := props.Type.Symbol()
    if symbol == nil {
      return struct {
        description *string
        jsDocTags   []schemametadata.IJsDocTagInfo
      }{}
    }
    return struct {
      description *string
      jsDocTags   []schemametadata.IJsDocTagInfo
    }{
      description: metadata_node_description(symbol),
      jsDocTags:   metadata_node_js_doc_tags(symbol),
    }
  }

  if filter(nativechecker.TypeFlagsStringLiteral) ||
    filter(nativechecker.TypeFlagsNumberLiteral) ||
    filter(nativechecker.TypeFlagsBigIntLiteral) {
    value := props.Type.AsLiteralType().Value()
    typ := "string"
    if filter(nativechecker.TypeFlagsNumberLiteral) {
      typ = "number"
    } else if filter(nativechecker.TypeFlagsBigIntLiteral) {
      typ = "bigint"
      // Normalize away the checker's unnameable `jsnum.PseudoBigInt`; see
      // MetadataBigint for why the stand-in has to be a comparable value.
      value = schemametadata.MetadataBigint{Text: fmt.Sprint(value)}
    }
    constant := iterate_metadata_constant_take(props.Metadata, typ)
    info := comment()
    iterate_metadata_constant_add(constant, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
      Value:       value,
      Tags:        [][]schemametadata.IMetadataTypeTag{},
      Description: info.description,
      JsDocTags:   info.jsDocTags,
      Origin:      props.Type,
      Duplicated:  filter(nativechecker.TypeFlagsEnumLiteral) && iterate_metadata_constant_shared(props.Checker, props.Type),
    }))
    return true
  }
  if filter(nativechecker.TypeFlagsBooleanLiteral) {
    value := false
    if props.Checker != nil && props.Checker.TypeToString(props.Type) == "true" {
      value = true
    }
    constant := iterate_metadata_constant_take(props.Metadata, "boolean")
    info := comment()
    iterate_metadata_constant_add(constant, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
      Value:       value,
      Tags:        [][]schemametadata.IMetadataTypeTag{},
      Description: info.description,
      JsDocTags:   info.jsDocTags,
    }))
    return true
  }
  return false
}

func iterate_metadata_constant_take(metadata *schemametadata.MetadataSchema, typ string) *schemametadata.MetadataConstant {
  for _, constant := range metadata.Constants {
    if constant.Type == typ {
      return constant
    }
  }
  constant := schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type:   typ,
    Values: []*schemametadata.MetadataConstantValue{},
  })
  metadata.Constants = append(metadata.Constants, constant)
  return constant
}

func iterate_metadata_constant_add(constant *schemametadata.MetadataConstant, value *schemametadata.MetadataConstantValue) {
  key := iterate_metadata_constant_key(value.Value)
  for _, oldbie := range constant.Values {
    if iterate_metadata_constant_key(oldbie.Value) == key {
      // A union lists one value through two constituents (an enum member and
      // a literal, or a literal with and without a type tag), so the second
      // folds into the first and its documentation and requirements are lost.
      // TypeScript already deduplicates identical types, so this is never the
      // same declaration twice.
      oldbie.Duplicated = true
      return
    }
  }
  constant.Values = append(constant.Values, value)
}

func iterate_metadata_constant_key(value any) string {
  switch v := value.(type) {
  case string:
    return v
  case bool:
    return strconv.FormatBool(v)
  case int:
    return strconv.Itoa(v)
  case int8:
    return strconv.FormatInt(int64(v), 10)
  case int16:
    return strconv.FormatInt(int64(v), 10)
  case int32:
    return strconv.FormatInt(int64(v), 10)
  case int64:
    return strconv.FormatInt(v, 10)
  case uint:
    return strconv.FormatUint(uint64(v), 10)
  case uint8:
    return strconv.FormatUint(uint64(v), 10)
  case uint16:
    return strconv.FormatUint(uint64(v), 10)
  case uint32:
    return strconv.FormatUint(uint64(v), 10)
  case uint64:
    return strconv.FormatUint(v, 10)
  case float32:
    return strconv.FormatFloat(float64(v), 'g', -1, 32)
  case float64:
    return strconv.FormatFloat(v, 'g', -1, 64)
  default:
    return fmt.Sprint(value)
  }
}

// iterate_metadata_constant_shared reports whether an enum literal type stands
// for several members of its enum. TypeScript gives members with one value a
// single literal type, so the second member's documentation is unreachable
// from the type and the only witness is the enum declaration.
func iterate_metadata_constant_shared(checker *nativechecker.Checker, typ *nativechecker.Type) bool {
  if checker == nil || typ == nil {
    return false
  }
  symbol := typ.Symbol()
  if symbol == nil || len(symbol.Declarations) == 0 {
    return false
  }
  declaration := symbol.Declarations[0]
  if declaration == nil || declaration.Kind != nativeast.KindEnumMember || declaration.Parent == nil {
    return false
  }
  enum := declaration.Parent.AsEnumDeclaration()
  if enum == nil || enum.Members == nil {
    return false
  }
  // compare by value: a member's own type may be the fresh form of the
  // regular literal type the union holds
  value := iterate_metadata_constant_key(typ.AsLiteralType().Value())
  count := 0
  for _, member := range enum.Members.Nodes {
    if member == nil || member.Symbol() == nil {
      continue
    }
    memberType := checker.GetTypeOfSymbol(member.Symbol())
    if memberType == nil || memberType.Flags()&nativechecker.TypeFlagsEnumLiteral == 0 || memberType.Flags()&(nativechecker.TypeFlagsStringLiteral|nativechecker.TypeFlagsNumberLiteral) == 0 {
      continue
    }
    if iterate_metadata_constant_key(memberType.AsLiteralType().Value()) == value {
      count++
    }
  }
  return count > 1
}
