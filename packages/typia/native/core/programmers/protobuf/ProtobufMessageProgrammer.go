package protobuf

import (
  "fmt"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  schemaprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

type protobufMessageProgrammerNamespace struct{}

var ProtobufMessageProgrammer = protobufMessageProgrammerNamespace{}

type ProtobufMessageProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Type    *shimchecker.Type
}

type protobufMessageProgrammer_Hierarchy struct {
  Key      string
  Object   *schemametadata.MetadataObjectType
  Children map[string]*protobufMessageProgrammer_Hierarchy
  Order    []string
}

var protobufMessageProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufMessageProgrammerNamespace) Write(props ProtobufMessageProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufMessageProgrammer_factory, props.Context.Emit)
  collection := schemametadata.NewMetadataCollection()
  nativefactories.ProtobufFactory.Metadata(nativefactories.ProtobufFactory_IProps{
    Method:     "typia.protobuf.message",
    Checker:    props.Context.Checker,
    Components: collection,
    Type:       props.Type,
  })
  content := ProtobufMessageProgrammer.Document(collection.Objects())
  lines := strings.Split(content, "\n")
  elements := make([]*shimast.Node, 0, len(lines))
  for _, line := range lines {
    elements = append(elements, f.NewStringLiteral(line, shimast.TokenFlagsNone))
  }
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(
      props.Context.Emit,
      f.NewArrayLiteralExpression(f.NewNodeList(elements), true),
      "join",
    ),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral("\n", shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
}

// Document renders the `.proto` text for the given protobuf metadata objects.
//
// The rendered text is the artifact `typia.protobuf.message<T>()` hands to
// another language, so it is kept separate from the AST wrapping above: a
// document is testable against a real Protobuf compiler, an emitted call
// expression is not.
func (protobufMessageProgrammerNamespace) Document(objects []*schemametadata.MetadataObjectType) string {
  hierarchies := map[string]*protobufMessageProgrammer_Hierarchy{}
  order := []string{}
  for _, object := range objects {
    if protobufMessageProgrammer_is_dynamic_object(object) {
      continue
    }
    order = protobufMessageProgrammer_emplace(hierarchies, order, object)
  }
  bodies := []string{}
  for _, key := range order {
    bodies = append(bodies, protobufMessageProgrammer_write_hierarchy(hierarchies[key]))
  }
  return "syntax = \"proto3\";\n\n" + strings.Join(bodies, "\n\n")
}

func protobufMessageProgrammer_emplace(hierarchies map[string]*protobufMessageProgrammer_Hierarchy, order []string, object *schemametadata.MetadataObjectType) []string {
  current := hierarchies
  currentOrder := &order
  accessors := strings.Split(object.Name, ".")
  for i, access := range accessors {
    hierarchy, ok := current[access]
    if ok == false {
      hierarchy = &protobufMessageProgrammer_Hierarchy{
        Key:      access,
        Children: map[string]*protobufMessageProgrammer_Hierarchy{},
      }
      current[access] = hierarchy
      *currentOrder = append(*currentOrder, access)
    }
    current = hierarchy.Children
    // Track insertion order per level. Ranging the Children map directly (as the
    // emit pass previously did) made nested message output non-deterministic.
    currentOrder = &hierarchy.Order
    if i == len(accessors)-1 {
      hierarchy.Object = object
    }
  }
  return order
}

func protobufMessageProgrammer_is_dynamic_object(object *schemametadata.MetadataObjectType) bool {
  return len(object.Properties) == 1 && object.Properties[0].Key.IsSoleLiteral() == false
}

func protobufMessageProgrammer_write_hierarchy(hierarchy *protobufMessageProgrammer_Hierarchy) string {
  elements := []string{"message " + nativeutils.ProtobufNameEncoder.Encode(hierarchy.Key) + " {"}
  if hierarchy.Object != nil {
    text := protobufMessageProgrammer_write_object(hierarchy.Object)
    for _, line := range strings.Split(text, "\n") {
      elements = append(elements, "  "+line)
    }
  }
  if len(hierarchy.Children) != 0 {
    for _, key := range hierarchy.Order {
      body := protobufMessageProgrammer_write_hierarchy(hierarchy.Children[key])
      lines := strings.Split(body, "\n")
      for i, line := range lines {
        lines[i] = "  " + line
      }
      elements = append(elements, strings.Join(lines, "\n"))
    }
  }
  elements = append(elements, "}")
  return strings.Join(elements, "\n")
}

func protobufMessageProgrammer_write_object(obj *schemametadata.MetadataObjectType) string {
  lines := []string{}
  for _, p := range obj.Properties {
    if p.Of_protobuf_ == nil {
      nativefactories.ProtobufFactory.EmplaceObject(obj)
    }
    key := ""
    if literal := p.Key.GetSoleLiteral(); literal != nil {
      key = *literal
    }
    lines = append(lines, protobufMessageProgrammer_decodeProperty(struct {
      Key   string
      Union []schemaprotobuf.IProtobufPropertyType
    }{
      Key:   key,
      Union: p.Of_protobuf_.Union,
    }))
  }
  return strings.Join(lines, "\n")
}

func protobufMessageProgrammer_decodeProperty(props struct {
  Key   string
  Union []schemaprotobuf.IProtobufPropertyType
}) string {
  if len(props.Union) == 1 {
    top := props.Union[0]
    words := []string{}
    // Every singular field carries proto3 explicit presence.
    //
    // proto3 removed `required`, so a required non-nullable property cannot keep
    // that label; a compiler rejects the whole document over it. `optional` is
    // the label that matches what the codecs already do, rather than the merely
    // legal one: ProtobufEncodeProgrammer writes a required non-nullable field
    // unguarded, so it emits the field even when the value equals the scalar
    // default, and ProtobufDecodeProgrammer defaults an absent required number
    // or boolean to `undefined`. A bare field means implicit presence, which
    // licenses a peer to drop default values from the wire and would decode back
    // into a property the declared type says is always there. `optional` keeps
    // that presence explicit on both sides.
    //
    // Requiredness itself is a TypeScript-level guarantee that proto3 has no
    // label for; `protobuf.assertEncode` / `assertDecode` remain the place it is
    // enforced.
    if protobufMessageProgrammer_schemaType(top) != "array" && protobufMessageProgrammer_schemaType(top) != "map" {
      words = append(words, "optional")
    }
    words = append(words, protobufMessageProgrammer_decodeSchema(top), props.Key, "=", protobufMessageProgrammer_index(top)+";")
    return strings.Join(words, " ")
  }
  lines := []string{"oneof " + props.Key + " {"}
  for _, typ := range props.Union {
    idx := protobufMessageProgrammer_index(typ)
    lines = append(lines, "  "+protobufMessageProgrammer_decodeSchema(typ)+" v"+idx+" = "+idx+";")
  }
  lines = append(lines, "}")
  return strings.Join(lines, "\n")
}

func protobufMessageProgrammer_decodeSchema(schema schemaprotobuf.IProtobufSchema) string {
  switch v := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    return "bytes"
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    return "bool"
  case *schemaprotobuf.IProtobufPropertyType_IString:
    return "string"
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return v.Name
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return v.Name
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return "repeated " + protobufMessageProgrammer_decodeSchema(v.Value)
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    if obj, ok := v.Object.(*schemametadata.MetadataObjectType); ok {
      return nativeutils.ProtobufNameEncoder.Encode(obj.Name)
    }
    return "object"
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    return "map<" + protobufMessageProgrammer_decodeSchema(v.Key) + ", " + protobufMessageProgrammer_decodeSchema(v.Value) + ">"
  case schemaprotobuf.IProtobufSchema_IByte:
    return "bytes"
  case schemaprotobuf.IProtobufSchema_IBoolean:
    return "bool"
  case schemaprotobuf.IProtobufSchema_IString:
    return "string"
  case schemaprotobuf.IProtobufSchema_IBigint:
    return v.Name
  case schemaprotobuf.IProtobufSchema_INumber:
    return v.Name
  case schemaprotobuf.IProtobufSchema_IArray:
    return "repeated " + protobufMessageProgrammer_decodeSchema(v.Value)
  case schemaprotobuf.IProtobufSchema_IObject:
    if obj, ok := v.Object.(*schemametadata.MetadataObjectType); ok {
      return nativeutils.ProtobufNameEncoder.Encode(obj.Name)
    }
    return "object"
  case schemaprotobuf.IProtobufSchema_IMap:
    return "map<" + protobufMessageProgrammer_decodeSchema(v.Key) + ", " + protobufMessageProgrammer_decodeSchema(v.Value) + ">"
  default:
    return "unknown"
  }
}

func protobufMessageProgrammer_schemaType(schema schemaprotobuf.IProtobufSchema) string {
  switch v := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IString:
    return v.Type
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    return v.Type
  default:
    return ""
  }
}

func protobufMessageProgrammer_index(prop schemaprotobuf.IProtobufPropertyType) string {
  var index *int
  switch v := prop.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IString:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    index = v.Index
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    index = v.Index
  }
  if index == nil {
    return "0"
  }
  return fmt.Sprint(*index)
}
