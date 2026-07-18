package metadata

import (
  "fmt"
  "strings"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Iterate_metadata_intersection(props IMetadataIteratorProps) bool {
  if props.Intersected == true {
    return false
  }
  if props.Type == nil || props.Type.IsIntersection() == false {
    return false
  }
  if iterate_metadata_intersection_reduce_union(props) {
    return true
  }
  if iterate_metadata_intersection_is_plain_object_only(props.Checker, props.Components, props.Type, map[*nativechecker.Type]bool{}) {
    if (props.Unioned || props.Prunable) && iterate_metadata_intersection_has_conflicting_required_literal(props.Checker, props.Components, props.Type, map[*nativechecker.Type]bool{}) {
      return true
    }
    return false
  }
  if (props.Unioned || props.Prunable) && iterate_metadata_intersection_is_never(props, props.Type, map[*nativechecker.Type]bool{}) {
    return true
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
      NoCache:     true,
      Prunable:    true,
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
      if iterate_metadata_intersection_is_removable_brand(m) {
        removable = append(removable, i)
      }
    }
    if len(removable) == len(metadatas) {
      return nonsensible()
    }
    for i := len(removable) - 1; i >= 0; i-- {
      index := removable[i]
      metadatas = append(metadatas[:index], metadatas[index+1:]...)
      indexes = append(indexes[:index], indexes[index+1:]...)
    }
  }
  // After phantom brands are dropped, exactly one single-bucket base member must
  // survive (`string & Brand` → string). Two genuine non-object members
  // (`string[] & number[]`, `A[] & [t…]`, `T1 & T2`, …) — or a multi-bucket
  // survivor — is an intersection of constraint carriers, a misuse with no sound
  // merge, so it stays nonsensible. This subsumes the per-candidate-kind check
  // below, which therefore always collapses to a single candidate.
  if len(metadatas) != 1 || metadatas[0].Size() != 1 {
    return nonsensible()
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
  // Re-explore the surviving base alone (`Intersected: true` short-circuits the
  // intersection handler at the top of this function). TypeScript flattens nested
  // intersections — `(A & B) & C` is presented as a single `types: [A, B, C]` — so
  // `Types()[index]` is always an atomic member, never itself an intersection that
  // would re-enter and leave `props.Metadata` empty.
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

// iterate_metadata_intersection_is_removable_brand reports whether an explored
// member schema is a phantom "brand" object that an intersection with a
// non-object member may drop. A value intersected with a non-object survivor is
// that primitive/array/etc. at runtime, so an object constraint carrying no
// runtime-observable required data is purely a compile-time nominal marker.
//
// The single-survivor guard lives in the caller: when EVERY member is a plain
// object, the entry point routes to the object-merge path before this runs, so
// a required-literal property of a genuine `A & B` object merge is never dropped
// here — only brands intersected with a primitive/array/template/native are.
//
// A member is removable when it is a single non-recursive object bucket whose
// every property is phantom: optional, or symbol-keyed. Those two are the only
// unambiguously phantom markers — an optional property need not be present, and
// a symbol-keyed property is never observable on a JSON value. Any required
// string-keyed property (literal or not) might be real data, so it keeps the
// intersection nonsensible rather than silently dropping a declared constraint.
func iterate_metadata_intersection_is_removable_brand(m *schemametadata.MetadataSchema) bool {
  if m == nil || m.Size() != 1 || len(m.Objects) != 1 {
    return false
  }
  object := m.Objects[0].Type
  if object == nil || object.Recursive {
    return false
  }
  for _, p := range object.Properties {
    if iterate_metadata_intersection_is_phantom_property(p) == false {
      return false
    }
  }
  return true
}

func iterate_metadata_intersection_is_phantom_property(p *schemametadata.MetadataProperty) bool {
  if p == nil || p.Value == nil {
    return false
  }
  if p.Value.Optional {
    return true
  }
  return iterate_metadata_intersection_is_symbol_key(p.Key)
}

// iterate_metadata_intersection_is_symbol_key reports whether a property key is a
// computed `symbol`/`unique symbol` member. The TypeScript checker escapes such
// member names with a leading 0xFE byte (an invalid UTF-8 lead unit that never
// begins a real string property name), so the brand `string & { [s]: T }` is
// recognized regardless of whether T is a literal.
func iterate_metadata_intersection_is_symbol_key(key *schemametadata.MetadataSchema) bool {
  if key == nil {
    return false
  }
  lit := key.GetSoleLiteral()
  return lit != nil && iterate_metadata_intersection_is_symbol_name(*lit)
}

// iterate_metadata_intersection_is_symbol_name reports whether an escaped member
// name is a computed `symbol` member. The TypeScript checker prefixes such names
// with a 0xFE byte (`InternalSymbolNamePrefix`), an invalid UTF-8 lead unit that
// never begins a real string property name. This runs on the raw checker symbol
// name (`is_removable_object_constraint`, and the member filter in
// `Emplace_metadata_object` that keeps such a member out of the validated shape)
// as well as the metadata key literal (`is_symbol_key`), so the type-level,
// member-level, and schema-level checks all agree on what a symbol key is.
func iterate_metadata_intersection_is_symbol_name(name string) bool {
  return len(name) != 0 && name[0] == 0xFE
}

func iterate_metadata_intersection_reduce_union(props IMetadataIteratorProps) bool {
  if props.Checker == nil || props.Type == nil || props.Type.IsIntersection() == false {
    return false
  }
  var union *nativechecker.Type
  constraints := []*nativechecker.Type{}
  for _, child := range props.Type.Types() {
    if child.IsUnion() {
      if union != nil {
        return false
      }
      union = child
      continue
    }
    constraints = append(constraints, child)
  }
  if union == nil || len(constraints) == 0 {
    return false
  }

  identities := make([]iterate_metadata_intersection_identity, 0, len(constraints))
  for _, constraint := range constraints {
    if iterate_metadata_intersection_is_removable_object_constraint(props, constraint) {
      continue
    }
    identity := iterate_metadata_intersection_identify(props.Checker, props.Components, constraint)
    if identity.Kind == "" || identity.Kind == "tag" || identity.Kind == "union" {
      return false
    }
    identities = append(identities, identity)
  }
  if len(identities) == 0 {
    return false
  }
  objectExact := map[string]bool{}
  for _, identity := range identities {
    if identity.Kind != "object" || identity.Shareable == false {
      continue
    }
    for _, member := range union.Types() {
      next := iterate_metadata_intersection_identify(props.Checker, props.Components, member)
      if next.Kind == "object" && next.Shareable && next.Name == identity.Name {
        objectExact[identity.Name] = true
      }
    }
  }

  matched := false
  for _, member := range union.Types() {
    memberIdentity := iterate_metadata_intersection_identify(props.Checker, props.Components, member)
    if memberIdentity.Kind == "" || memberIdentity.Kind == "tag" || memberIdentity.Kind == "union" {
      return false
    }
    keep := true
    for _, constraint := range identities {
      ok, known := iterate_metadata_intersection_identity_matches(memberIdentity, constraint, objectExact)
      if known == false {
        return false
      }
      if ok == false {
        keep = false
        break
      }
    }
    if keep == false {
      continue
    }
    matched = true
    explore := props.Explore
    explore.Aliased = false
    Iterate_metadata(IMetadataIteratorProps{
      Options:     props.Options,
      Checker:     props.Checker,
      Components:  props.Components,
      Errors:      props.Errors,
      Metadata:    props.Metadata,
      Type:        member,
      Explore:     explore,
      Intersected: props.Intersected,
      Unioned:     true,
      Prunable:    true,
    })
  }
  return matched || iterate_metadata_intersection_identities_decisive(identities)
}

func iterate_metadata_intersection_is_removable_object_constraint(
  props IMetadataIteratorProps,
  typ *nativechecker.Type,
) bool {
  checker := props.Checker
  collection := props.Components
  if checker == nil || collection == nil || typ == nil {
    return false
  }
  if typ.IsUnion() {
    return false
  }
  if typ.IsIntersection() {
    children := typ.Types()
    if len(children) == 0 {
      return false
    }
    for _, child := range children {
      if iterate_metadata_intersection_is_removable_object_constraint(props, child) == false {
        return false
      }
    }
    return true
  }
  if typ.Flags()&nativechecker.TypeFlagsObject == 0 {
    return false
  }
  if nativechecker.IsTupleType(typ) || nativechecker.Checker_isArrayType(checker, typ) {
    return false
  }
  if metadata_get_function_node(typ) != nil || len(checker.GetSignaturesOfType(typ, nativechecker.SignatureKindCall)) != 0 {
    return false
  }
  name := iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(typ))
  if name == "" {
    name = iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(checker.GetApparentType(typ)))
  }
  if _, ok := iterate_metadata_native_simples[name]; ok {
    return false
  }
  for _, generic := range iterate_metadata_native_generics {
    if name == generic.Name || strings.HasPrefix(name, generic.Name+"<") {
      return false
    }
  }
  if strings.HasPrefix(name, "Map<") || strings.HasPrefix(name, "ReadonlyMap<") ||
    strings.HasPrefix(name, "Set<") || strings.HasPrefix(name, "ReadonlySet<") {
    return false
  }
  if len(collection.IndexInfos(checker, typ)) != 0 {
    return false
  }
  for _, symbol := range collection.ApparentProperties(checker, typ) {
    // A symbol-keyed member is never observable on a JSON value (the canonical
    // nominal brand), so it is phantom and removable. typia's own tag is handled
    // as a constraint, not stripped here; any required string-keyed property might
    // be real data — both keep the object as a constraint, not a removable brand.
    if iterate_metadata_intersection_is_symbol_name(symbol.Name) {
      continue
    }
    if symbol.Name == "typia.tag" || symbol.Flags&nativeast.SymbolFlagsOptional == 0 {
      return false
    }
  }
  return true
}

type iterate_metadata_intersection_identity struct {
  Kind      string
  Name      string
  Shareable bool
}

func iterate_metadata_intersection_identify(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  typ *nativechecker.Type,
) iterate_metadata_intersection_identity {
  if checker == nil || typ == nil {
    return iterate_metadata_intersection_identity{}
  }
  if typ.IsUnion() {
    return iterate_metadata_intersection_identity{Kind: "union"}
  }
  if typ.IsIntersection() {
    return iterate_metadata_intersection_identity{Kind: "intersection"}
  }
  for _, info := range iterate_metadata_atomic_atomcs {
    if typ.Flags()&info.atomic != 0 || typ.Flags()&info.literal != 0 {
      return iterate_metadata_intersection_identity{Kind: "primitive", Name: info.name}
    }
  }
  name := iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(typ))
  if name == "" {
    name = iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(checker.GetApparentType(typ)))
  }
  if atomic, ok := schemametadata.MetadataSchema_atomicLikeNative(name); ok {
    return iterate_metadata_intersection_identity{Kind: "primitive", Name: atomic}
  }
  if nativechecker.IsTupleType(typ) || nativechecker.Checker_isArrayType(checker, typ) || name == "Array" || name == "ReadonlyArray" {
    return iterate_metadata_intersection_identity{
      Kind: "array",
      Name: metadata_type_full_name(checker, typ, collection),
    }
  }
  for _, symbol := range collection.ApparentProperties(checker, typ) {
    if symbol.Name == "typia.tag" {
      return iterate_metadata_intersection_identity{Kind: "tag"}
    }
  }
  if _, ok := iterate_metadata_native_simples[name]; ok {
    return iterate_metadata_intersection_identity{Kind: "native", Name: name}
  }
  for _, generic := range iterate_metadata_native_generics {
    if name == generic.Name || strings.HasPrefix(name, generic.Name+"<") {
      return iterate_metadata_intersection_identity{Kind: "native", Name: generic.Name}
    }
  }
  if name == "Map" || name == "ReadonlyMap" || name == "Set" || name == "ReadonlySet" {
    return iterate_metadata_intersection_identity{
      Kind: "native",
      Name: name,
    }
  }
  if typ.Flags()&nativechecker.TypeFlagsObject == 0 {
    return iterate_metadata_intersection_identity{}
  }
  fullName := metadata_type_full_name(checker, typ, collection)
  sanitized := iterate_metadata_intersection_sanitize_name(fullName)
  return iterate_metadata_intersection_identity{
    Kind:      "object",
    Name:      sanitized,
    Shareable: iterate_metadata_intersection_shareable_name(fullName, sanitized),
  }
}

func iterate_metadata_intersection_identity_matches(
  member iterate_metadata_intersection_identity,
  constraint iterate_metadata_intersection_identity,
  objectExact map[string]bool,
) (bool, bool) {
  if constraint.Kind == "primitive" || constraint.Kind == "native" || constraint.Kind == "array" {
    return member.Kind == constraint.Kind && member.Name == constraint.Name, true
  }
  if constraint.Kind != "object" {
    return false, false
  }
  if member.Kind == "primitive" || member.Kind == "native" || member.Kind == "array" {
    return false, true
  }
  if member.Kind != "object" || constraint.Shareable == false || objectExact[constraint.Name] == false {
    return false, false
  }
  return member.Shareable && member.Name == constraint.Name, true
}

func iterate_metadata_intersection_identities_decisive(identities []iterate_metadata_intersection_identity) bool {
  for _, identity := range identities {
    if identity.Kind == "object" && identity.Shareable == false {
      return false
    }
  }
  return true
}

func iterate_metadata_intersection_sanitize_name(name string) string {
  name = strings.ToValidUTF8(name, "__")
  return strings.ReplaceAll(name, "\uFFFD", "__")
}

func iterate_metadata_intersection_shareable_name(fullName string, sanitized string) bool {
  fullName = strings.TrimSpace(fullName)
  if fullName == "" || strings.Contains(fullName, "{") {
    return false
  }
  return strings.Contains(sanitized, "__type") == false
}

func iterate_metadata_intersection_is_plain_object_only(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) bool {
  if checker == nil || typ == nil {
    return false
  }
  if visited[typ] {
    return true
  }
  if cached, ok := collection.LookupPlainObjectIntersection(typ); ok {
    return cached
  }
  visited[typ] = true

  result := false
  defer func() {
    collection.StorePlainObjectIntersection(typ, result)
  }()
  if typ.IsUnion() {
    return false
  }
  if typ.IsIntersection() {
    for _, child := range typ.Types() {
      if iterate_metadata_intersection_is_plain_object_only(checker, collection, child, visited) == false {
        return false
      }
    }
    result = true
    return true
  }
  if typ.Flags()&nativechecker.TypeFlagsObject == 0 {
    return false
  }
  if nativechecker.IsTupleType(typ) || nativechecker.Checker_isArrayType(checker, typ) {
    return false
  }
  if metadata_get_function_node(typ) != nil || len(checker.GetSignaturesOfType(typ, nativechecker.SignatureKindCall)) != 0 {
    return false
  }

  name := iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(typ))
  if name == "" {
    name = iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(checker.GetApparentType(typ)))
  }
  if _, ok := iterate_metadata_native_simples[name]; ok {
    return false
  }
  for _, generic := range iterate_metadata_native_generics {
    if name == generic.Name || strings.HasPrefix(name, generic.Name+"<") {
      return false
    }
  }
  if strings.HasPrefix(name, "Map<") || strings.HasPrefix(name, "ReadonlyMap<") ||
    strings.HasPrefix(name, "Set<") || strings.HasPrefix(name, "ReadonlySet<") {
    return false
  }

  for _, symbol := range collection.ApparentProperties(checker, typ) {
    if symbol.Name == "typia.tag" {
      return false
    }
  }
  result = true
  return true
}

func iterate_metadata_intersection_is_never(
  props IMetadataIteratorProps,
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) bool {
  checker := props.Checker
  collection := props.Components
  if checker == nil || collection == nil || typ == nil {
    return false
  }
  state := struct {
    Primitive string
    Array     bool
    Object    bool
    Native    string
    Unknown   bool
    Tagged    bool
    Never     bool
  }{}
  var next func(*nativechecker.Type)
  next = func(child *nativechecker.Type) {
    if child == nil || state.Never || state.Unknown || state.Tagged {
      return
    }
    if visited[child] {
      return
    }
    visited[child] = true
    if child.IsUnion() {
      state.Unknown = true
      return
    }
    if child.IsIntersection() {
      for _, elem := range child.Types() {
        next(elem)
      }
      return
    }
    if iterate_metadata_intersection_is_removable_object_constraint(props, child) {
      return
    }
    category := iterate_metadata_intersection_category(checker, collection, child)
    if category == "" {
      state.Unknown = true
      return
    }
    if category == "tag" {
      state.Tagged = true
      return
    }
    if strings.HasPrefix(category, "primitive:") {
      if state.Primitive != "" && state.Primitive != category {
        state.Never = true
        return
      }
      state.Primitive = category
      if state.Array || state.Object || state.Native != "" {
        state.Never = true
      }
      return
    }
    if category == "array" {
      state.Array = true
      if state.Primitive != "" || state.Native != "" || state.Object {
        state.Never = true
      }
      return
    }
    if strings.HasPrefix(category, "native:") {
      if state.Native != "" && state.Native != category {
        state.Never = true
        return
      }
      state.Native = category
      if state.Primitive != "" || state.Array || state.Object {
        state.Never = true
      }
      return
    } else {
      state.Object = true
    }
    if state.Primitive != "" || state.Native != "" || state.Array {
      state.Never = true
    }
  }
  next(typ)
  return state.Never && state.Unknown == false && state.Tagged == false
}

type iterate_metadata_intersection_literalSet struct {
  Kind   string
  Values map[string]bool
}

func iterate_metadata_intersection_has_conflicting_required_literal(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) bool {
  if checker == nil || typ == nil {
    return false
  }
  if typ.IsIntersection() == false {
    return false
  }
  if cached, ok := collection.LookupLiteralConflict(typ); ok {
    return cached
  }
  result := false
  defer func() {
    collection.StoreLiteralConflict(typ, result)
  }()
  constraints := map[string][]iterate_metadata_intersection_literalSet{}
  var collect func(*nativechecker.Type) bool
  collect = func(child *nativechecker.Type) bool {
    if child == nil {
      return false
    }
    if visited[child] {
      return false
    }
    visited[child] = true
    if child.IsIntersection() {
      for _, grand := range child.Types() {
        if collect(grand) {
          return true
        }
      }
      return false
    }
    if child.IsUnion() || child.Flags()&nativechecker.TypeFlagsObject == 0 {
      return false
    }
    for _, symbol := range collection.ApparentProperties(checker, child) {
      if symbol.Flags&nativeast.SymbolFlagsOptional != 0 {
        continue
      }
      propertyType := iterate_metadata_intersection_property_type(checker, child, symbol)
      literal, ok := iterate_metadata_intersection_literal_set(checker, propertyType, map[*nativechecker.Type]bool{})
      if ok == false {
        continue
      }
      list := constraints[symbol.Name]
      for _, prev := range list {
        if iterate_metadata_intersection_literal_disjoint(prev, literal) {
          result = true
          return true
        }
      }
      constraints[symbol.Name] = append(list, literal)
    }
    return false
  }
  result = collect(typ)
  return result
}

func iterate_metadata_intersection_property_type(
  checker *nativechecker.Checker,
  owner *nativechecker.Type,
  symbol *nativeast.Symbol,
) *nativechecker.Type {
  if checker == nil || owner == nil || symbol == nil {
    return nil
  }
  if len(symbol.Declarations) != 0 {
    if typ := checker.GetTypeOfSymbolAtLocation(symbol, symbol.Declarations[0]); typ != nil {
      return typ
    }
  }
  return nativechecker.Checker_getTypeOfPropertyOfType(checker, owner, symbol.Name)
}

func iterate_metadata_intersection_literal_set(
  checker *nativechecker.Checker,
  typ *nativechecker.Type,
  visited map[*nativechecker.Type]bool,
) (iterate_metadata_intersection_literalSet, bool) {
  if checker == nil || typ == nil {
    return iterate_metadata_intersection_literalSet{}, false
  }
  if visited[typ] {
    return iterate_metadata_intersection_literalSet{}, false
  }
  visited[typ] = true
  if typ.IsUnion() {
    output := iterate_metadata_intersection_literalSet{}
    for _, child := range typ.Types() {
      next, ok := iterate_metadata_intersection_literal_set(checker, child, visited)
      if ok == false {
        return iterate_metadata_intersection_literalSet{}, false
      }
      if output.Kind == "" {
        output.Kind = next.Kind
        output.Values = map[string]bool{}
      } else if output.Kind != next.Kind {
        return iterate_metadata_intersection_literalSet{}, false
      }
      for value := range next.Values {
        output.Values[value] = true
      }
    }
    return output, output.Kind != "" && len(output.Values) != 0
  }
  filter := func(flag nativechecker.TypeFlags) bool {
    return typ.Flags()&flag != 0
  }
  if filter(nativechecker.TypeFlagsStringLiteral) {
    return iterate_metadata_intersection_literalSet{
      Kind:   "string",
      Values: map[string]bool{fmt.Sprint(typ.AsLiteralType().Value()): true},
    }, true
  }
  if filter(nativechecker.TypeFlagsNumberLiteral) {
    return iterate_metadata_intersection_literalSet{
      Kind:   "number",
      Values: map[string]bool{fmt.Sprint(typ.AsLiteralType().Value()): true},
    }, true
  }
  if filter(nativechecker.TypeFlagsBigIntLiteral) {
    return iterate_metadata_intersection_literalSet{
      Kind:   "bigint",
      Values: map[string]bool{fmt.Sprint(typ.AsLiteralType().Value()): true},
    }, true
  }
  if filter(nativechecker.TypeFlagsBooleanLiteral) {
    return iterate_metadata_intersection_literalSet{
      Kind:   "boolean",
      Values: map[string]bool{checker.TypeToString(typ): true},
    }, true
  }
  return iterate_metadata_intersection_literalSet{}, false
}

func iterate_metadata_intersection_literal_disjoint(
  x iterate_metadata_intersection_literalSet,
  y iterate_metadata_intersection_literalSet,
) bool {
  if x.Kind == "" || y.Kind == "" || len(x.Values) == 0 || len(y.Values) == 0 {
    return false
  }
  if x.Kind != y.Kind {
    return true
  }
  if len(x.Values) > len(y.Values) {
    x, y = y, x
  }
  for value := range x.Values {
    if y.Values[value] {
      return false
    }
  }
  return true
}

func iterate_metadata_intersection_category(
  checker *nativechecker.Checker,
  collection *schemametadata.MetadataCollection,
  typ *nativechecker.Type,
) string {
  if checker == nil || typ == nil {
    return ""
  }
  for _, info := range iterate_metadata_atomic_atomcs {
    if typ.Flags()&info.atomic != 0 || typ.Flags()&info.literal != 0 {
      return "primitive:" + info.name
    }
  }
  if nativechecker.IsTupleType(typ) || nativechecker.Checker_isArrayType(checker, typ) {
    return "array"
  }
  for _, symbol := range collection.ApparentProperties(checker, typ) {
    if symbol.Name == "typia.tag" {
      return "tag"
    }
  }
  name := iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(typ))
  if name == "" {
    name = iterate_metadata_native_getNativeName(metadata_type_symbol_base_name(checker.GetApparentType(typ)))
  }
  if atomic, ok := schemametadata.MetadataSchema_atomicLikeNative(name); ok {
    return "primitive:" + atomic
  }
  if name == "Array" || name == "ReadonlyArray" {
    return "array"
  }
  if _, ok := iterate_metadata_native_simples[name]; ok {
    return "native:" + name
  }
  for _, generic := range iterate_metadata_native_generics {
    if name == generic.Name || strings.HasPrefix(name, generic.Name+"<") {
      return "object"
    }
  }
  if name == "Map" || name == "ReadonlyMap" || name == "Set" || name == "ReadonlySet" {
    return "object"
  }
  if metadata_get_function_node(typ) != nil || len(checker.GetSignaturesOfType(typ, nativechecker.SignatureKindCall)) != 0 {
    return "object"
  }
  if typ.Flags()&nativechecker.TypeFlagsObject != 0 {
    return "object"
  }
  return ""
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
