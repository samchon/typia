package metadata

import (
  "strings"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_intersection(props IMetadataIteratorProps) bool {
  if props.Intersected == true {
    return false
  }
  if props.Type == nil || props.Type.IsIntersection() == false {
    return false
  }

  commit := props.Components.Clone()
  fakeErrors := []MetadataFactory_IError{}
  children := make([]*schemametadata.MetadataSchema, 0, len(props.Type.Types()))
  for _, typ := range props.Type.Types() {
    options := props.Options
    options.Absorb = true
    options.Functional = false
    explore := props.Explore
    explore.Aliased = false
    children = append(children, Explore_metadata(Explore_metadata_IProps{
      Options:     options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      &fakeErrors,
      Type:        typ,
      Explore:     explore,
      Intersected: false,
    }))
  }

  escape := func(out bool) bool {
    *props.Components = *commit
    return out
  }
  if len(fakeErrors) != 0 {
    if props.Errors != nil {
      *props.Errors = append(*props.Errors, fakeErrors...)
    }
    return escape(true)
  }
  if len(children) == 0 {
    return escape(false)
  }
  for _, child := range children {
    if child.Any == true || child.Size() == 0 {
      return escape(false)
    }
  }

  indexes := []int{}
  metadatas := []*schemametadata.MetadataSchema{}
  tagObjects := []*schemametadata.MetadataObjectType{}
  for i, child := range children {
    if child.Size() == 1 &&
      len(child.Objects) == 1 &&
      iterate_metadata_intersection_is_type_tag(child.Objects[0].Type) {
      tagObjects = append(tagObjects, child.Objects[0].Type)
      continue
    }
    indexes = append(indexes, i)
    metadatas = append(metadatas, child)
  }

  nonsensible := func() bool {
    if props.Errors != nil {
      names := make([]string, 0, len(children))
      for _, child := range children {
        names = append(names, child.GetName())
      }
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name:     strings.Join(names, " & "),
        Explore:  props.Explore,
        Messages: []string{"nonsensible intersection"},
      })
    }
    return escape(true)
  }

  if len(metadatas) == 0 {
    if len(tagObjects) != 0 {
      if props.Errors != nil {
        names := make([]string, 0, len(children))
        for _, child := range children {
          names = append(names, child.GetName())
        }
        *props.Errors = append(*props.Errors, MetadataFactory_IError{
          Name:     strings.Join(names, " & "),
          Explore:  props.Explore,
          Messages: []string{"type tag cannot be standalone"},
        })
      }
      return escape(true)
    }
    return escape(false)
  }
  onlyObjects := true
  for _, m := range metadatas {
    if len(m.Objects) != 1 {
      onlyObjects = false
      break
    }
  }
  if onlyObjects && len(tagObjects) == 0 {
    return escape(false)
  }
  if len(metadatas) != 1 {
    removable := []int{}
    for i, m := range metadatas {
      if m.Size() == 1 && len(m.Objects) == 1 {
        object := m.Objects[0].Type
        if len(object.Properties) == 0 {
          removable = append(removable, i)
          continue
        }
        allOptional := true
        for _, p := range object.Properties {
          if p.Value.Optional != true {
            allOptional = false
            break
          }
        }
        if allOptional {
          removable = append(removable, i)
        }
      }
    }
    if len(removable) != 0 && len(removable) != len(metadatas) {
      for i := len(removable) - 1; i >= 0; i-- {
        index := removable[i]
        metadatas = append(metadatas[:index], metadatas[index+1:]...)
      }
    } else {
      return nonsensible()
    }
  } else {
    for _, m := range metadatas {
      if m.Size() != 1 {
        return nonsensible()
      }
    }
  }

  candidates := map[string]string{}
  assigners := []func([]schemametadata.IMetadataTypeTag){}
  for _, meta := range metadatas {
    for _, atomic := range meta.Atomics {
      candidates[atomic.Type] = atomic.Type
      assigners = append(assigners, func(kind string) func([]schemametadata.IMetadataTypeTag) {
        return func(tags []schemametadata.IMetadataTypeTag) {
          for _, atom := range props.Metadata.Atomics {
            if atom.Type == kind {
              atom.Tags = append(atom.Tags, tags)
              return
            }
          }
        }
      }(atomic.Type))
    }
    for _, constant := range meta.Constants {
      for _, value := range constant.Values {
        candidates[constant.Type] = constant.Type
        assigners = append(assigners, func(kind string, v any) func([]schemametadata.IMetadataTypeTag) {
          return func(tags []schemametadata.IMetadataTypeTag) {
            for _, c := range props.Metadata.Constants {
              if c.Type != kind {
                continue
              }
              for _, value := range c.Values {
                if value.Value == v {
                  value.Tags = append(value.Tags, tags)
                  return
                }
              }
            }
          }
        }(constant.Type, value.Value))
      }
    }
    for _, template := range meta.Templates {
      candidates["string"] = "string"
      assigners = append(assigners, func(base string) func([]schemametadata.IMetadataTypeTag) {
        return func(tags []schemametadata.IMetadataTypeTag) {
          for _, tpl := range props.Metadata.Templates {
            if tpl.GetBaseName() == base {
              tpl.Tags = append(tpl.Tags, tags)
              return
            }
          }
        }
      }(template.GetBaseName()))
    }
    if len(meta.Objects) != 0 {
      candidates["object"] = "object"
      assigners = append(assigners, func(tags []schemametadata.IMetadataTypeTag) {
        if len(props.Metadata.Objects) != 0 {
          props.Metadata.Objects[len(props.Metadata.Objects)-1].Tags = append(props.Metadata.Objects[len(props.Metadata.Objects)-1].Tags, tags)
        }
      })
    }
    if len(meta.Arrays) != 0 {
      candidates["array"] = "array"
      assigners = append(assigners, func(tags []schemametadata.IMetadataTypeTag) {
        if len(props.Metadata.Arrays) != 0 {
          props.Metadata.Arrays[len(props.Metadata.Arrays)-1].Tags = append(props.Metadata.Arrays[len(props.Metadata.Arrays)-1].Tags, tags)
        }
      })
    }
    if len(meta.Tuples) != 0 {
      candidates["invalid"] = "tuple"
    }
    for _, native := range meta.Natives {
      candidates["native::"+native.Name] = "object"
      assigners = append(assigners, func(name string) func([]schemametadata.IMetadataTypeTag) {
        return func(tags []schemametadata.IMetadataTypeTag) {
          for _, n := range props.Metadata.Natives {
            if n.Name == name {
              n.Tags = append(n.Tags, tags)
              return
            }
          }
        }
      }(native.Name))
    }
    for _, set := range meta.Sets {
      name := set.Value.GetName()
      candidates["set::"+name] = "object"
      assigners = append(assigners, func(name string) func([]schemametadata.IMetadataTypeTag) {
        return func(tags []schemametadata.IMetadataTypeTag) {
          for _, s := range props.Metadata.Sets {
            if s.Value.GetName() == name {
              s.Tags = append(s.Tags, tags)
              return
            }
          }
        }
      }(name))
    }
    for _, m := range meta.Maps {
      name := m.Key.GetName() + "::" + m.Value.GetName()
      candidates["map::"+name] = "object"
      assigners = append(assigners, func(keyName string, valueName string) func([]schemametadata.IMetadataTypeTag) {
        return func(tags []schemametadata.IMetadataTypeTag) {
          for _, m := range props.Metadata.Maps {
            if m.Key.GetName() == keyName && m.Value.GetName() == valueName {
              m.Tags = append(m.Tags, tags)
              return
            }
          }
        }
      }(m.Key.GetName(), m.Value.GetName()))
    }
  }
  if len(candidates) != 1 {
    return nonsensible()
  }

  *props.Components = *commit
  index := 0
  if len(indexes) != 0 {
    index = indexes[0]
  }
  options := props.Options
  options.Functional = false
  explore := props.Explore
  explore.Aliased = false
  explore.Escaped = false
  Iterate_metadata(IMetadataIteratorProps{
    Options:     options,
    Checker:     props.Checker,
    Components:  props.Components,
    Errors:      props.Errors,
    Metadata:    props.Metadata,
    Type:        props.Type.Types()[index],
    Explore:     explore,
    Intersected: true,
  })
  tags := iterate_metadata_intersection_analyze_type_tags(props, tagObjects, candidates)
  if len(tags) != 0 {
    for _, assigner := range assigners {
      assigner(tags)
    }
  }
  return true
}

func iterate_metadata_intersection_is_type_tag(obj *schemametadata.MetadataObjectType) bool {
  if obj == nil || len(obj.Properties) != 1 {
    return false
  }
  top := obj.Properties[0]
  lit := top.Key.GetSoleLiteral()
  if lit == nil || *lit != "typia.tag" {
    return false
  }
  value := top.Value
  if value.Size() != 1 || len(value.Objects) != 1 || value.IsRequired() == true || value.Nullable == true {
    return false
  }
  tag := value.Objects[0].Type
  fields := map[string]bool{}
  for _, property := range tag.Properties {
    if key := property.Key.GetSoleLiteral(); key != nil {
      fields[*key] = true
    }
  }
  for _, field := range []string{"target", "kind", "value"} {
    if fields[field] == false {
      return false
    }
  }
  return true
}

func iterate_metadata_intersection_analyze_type_tags(props IMetadataIteratorProps, objects []*schemametadata.MetadataObjectType, candidates map[string]string) []schemametadata.IMetadataTypeTag {
  if MetadataTypeTagAnalyzer == nil {
    return []schemametadata.IMetadataTypeTag{}
  }
  typ := ""
  for _, value := range candidates {
    typ = value
    break
  }
  return MetadataTypeTagAnalyzer(struct {
    Errors  *[]MetadataFactory_IError
    Type    string
    Objects []*schemametadata.MetadataObjectType
    Explore MetadataFactory_IExplore
  }{
    Errors:  props.Errors,
    Type:    typ,
    Objects: objects,
    Explore: props.Explore,
  })
}
