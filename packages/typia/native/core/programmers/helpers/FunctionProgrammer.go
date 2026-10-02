package helpers

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

// FunctionProgrammer is the per-call collector of generated helper functions and
// constants. It hands out collision-free names, records the unions and variables
// a feature emplaces and declares them as constants in first-use order. Visit
// tracking and the is-check prefix are per-call settings that recursive helpers
// read late, so they are fields and not arguments.
//
// @evidence contracts/common.md#principled-implementation It is the per-call collector of generated helper functions and constants. It hands out collision-free names, records the unions and variables a feature emplaces and declares them as constants in first-use order. Visit tracking and the is-check prefix are per-call settings that recursive helpers read late, so they are fields and not arguments.
// @evidence contracts/common.md#clear-and-simple-design One struct whose methods are short operations over its private tables.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State is per instance and no package-level table is kept.
// @evidence contracts/common.md#meaningful-documentation The doc states the collector role, and the field comments explain visit tracking, the emit context and the is-check prefix.
type FunctionProgrammer struct {
  // Method is the source callee label used in generated errors.
  Method         string
  local_         map[string]bool
  unions_        map[string]*functionProgrammer_union
  unionOrder_    []string
  variables_     map[string]*shimast.Node
  variableKeys_  map[string]string
  variableOrder_ []string
  nameIndexes_   map[string]int
  reservedNames_ map[string]bool
  sequence_      int
  // visited_ turns on per-invocation visit tracking: set after metadata
  // analysis when the type graph carries a recursive component, so generated
  // functions thread a `_vctx` context and recursive ones guard against
  // runtime cycles (issue #1820). Read late (at emission) on purpose — the
  // flag is unknown until the collection is analyzed.
  visited_ bool
  // emit_ routes declaration/identifier creation through the emit context's
  // factory when present so generated `const` validators carry original-node
  // tracking; nil falls back to the standalone factory (legacy / test paths).
  emit_ *shimprinter.EmitContext
  // isPrefix_ is the is-check helper namespace plain.classify's NESTED
  // discriminations emit under. "" / "_i" for the unvalidated path; "_yi" for
  // the validated path (whose __assert side already owns "_i" from a separate
  // collection, so classify's own checks must not collide with it). Carried on
  // the per-function programmer so the recursive decode/explore helpers thread
  // it without per-call plumbing; ignored by every non-classify programmer.
  isPrefix_ string
}

type functionProgrammer_union struct {
  name  string
  value *shimast.Node
}

var functionProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

// NewFunctionProgrammer returns an empty FunctionProgrammer labeled with the
// typia method text and bound to an optional emit context.
//
// @evidence contracts/common.md#principled-implementation It returns an empty FunctionProgrammer labeled with the typia method text and bound to an optional emit context.
// @evidence contracts/common.md#clear-and-simple-design One constructor that allocates the empty tables.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Every instance owns its tables.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func NewFunctionProgrammer(method string, emit ...*shimprinter.EmitContext) *FunctionProgrammer {
  p := &FunctionProgrammer{
    Method:         method,
    local_:         map[string]bool{},
    unions_:        map[string]*functionProgrammer_union{},
    unionOrder_:    []string{},
    variables_:     map[string]*shimast.Node{},
    variableKeys_:  map[string]string{},
    variableOrder_: []string{},
    nameIndexes_:   map[string]int{},
    reservedNames_: map[string]bool{},
  }
  if len(emit) != 0 {
    p.emit_ = emit[0]
  }
  return p
}

// UseLocal marks a helper function name as used and returns it, so declarations
// that were never referenced can be skipped.
//
// @evidence contracts/common.md#principled-implementation It marks a helper function name as used and returns it, so declarations that were never referenced can be skipped.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) UseLocal(name string) string {
  p.local_[name] = true
  return name
}

// SetVisited turns per-invocation visit tracking on or off.
//
// @evidence contracts/common.md#principled-implementation It turns per-invocation visit tracking on or off.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) SetVisited(value bool) {
  p.visited_ = value
}

// Visited reports whether per-invocation visit tracking is on.
//
// @evidence contracts/common.md#principled-implementation It reports whether per-invocation visit tracking is on.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) Visited() bool {
  return p.visited_
}

// SetIsPrefix sets the is-check helper namespace that nested classify
// discriminations emit under.
//
// @evidence contracts/common.md#principled-implementation It sets the is-check helper namespace that nested classify discriminations emit under.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) SetIsPrefix(prefix string) {
  p.isPrefix_ = prefix
}

// IsPrefix returns the is-check helper namespace classify's nested
// discriminations emit under ("" => the default "_i"). See isPrefix_.
//
// @evidence contracts/common.md#principled-implementation The accessor exposes the is-check helper namespace that classify's nested discriminations emit under, where an empty string means the default `_i`, so recursive helpers read it from the per-function programmer instead of threading an argument.
// @evidence contracts/common.md#clear-and-simple-design One accessor over a private field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The value is per-programmer state and not a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states the empty-string default and points at the field comment.
func (p *FunctionProgrammer) IsPrefix() string {
  return p.isPrefix_
}

// HasLocal reports whether a helper function name was marked as used.
//
// @evidence contracts/common.md#principled-implementation It reports whether a helper function name was marked as used.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) HasLocal(name string) bool {
  return p.local_[name]
}

// Declare returns the constant declarations of every emplaced variable in
// emplacement order, followed by those of the emplaced unions unless
// includeUnions is false.
//
// @evidence contracts/common.md#principled-implementation Ordered key slices preserve first emplacement order independently of Go map iteration. Variables precede unions, and the optional flag controls only union declarations.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) Declare(includeUnions ...bool) []*shimast.Node {
  output := []*shimast.Node{}
  for _, name := range p.variableOrder_ {
    value := p.variables_[name]
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  name,
      Value: value,
    }, p.emit_))
  }
  enabled := true
  if len(includeUnions) != 0 {
    enabled = includeUnions[0]
  }
  if enabled {
    for _, key := range p.unionOrder_ {
      tuple := p.unions_[key]
      output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  tuple.name,
        Value: tuple.value,
      }, p.emit_))
    }
  }
  return output
}

// DeclareUnions returns only the constant declarations of the emplaced unions in
// emplacement order.
//
// @evidence contracts/common.md#principled-implementation The union-order slice indexes the same registered tuples and preserves first emplacement order without emitting variables.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) DeclareUnions() []*shimast.Node {
  output := []*shimast.Node{}
  for _, key := range p.unionOrder_ {
    tuple := p.unions_[key]
    output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  tuple.name,
      Value: tuple.value,
    }, p.emit_))
  }
  return output
}

// Increment returns the next value of a per-call counter, which makes generated
// parameter names unique.
//
// @evidence contracts/common.md#principled-implementation It returns the next value of a per-call counter, which makes generated parameter names unique.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) Increment() int {
  p.sequence_++
  return p.sequence_
}

// EmplaceUnion returns the name of the union function registered under prefix
// and name, creating it with factory on first use.
//
// @evidence contracts/common.md#principled-implementation The prefix/name key identifies a union within this emission. Registering its reserved name before invoking factory allows recursive factories to refer back to the same name; the completed AST is declared afterward.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) EmplaceUnion(prefix string, name string, factory func() *shimast.Node) string {
  key := prefix + "::" + name
  if oldbie, ok := p.unions_[key]; ok {
    return oldbie.name
  }
  accessor := p.reserveGeneratedName(prefix + "p")
  tuple := &functionProgrammer_union{name: accessor}
  p.unions_[key] = tuple
  p.unionOrder_ = append(p.unionOrder_, key)
  tuple.value = factory()
  return accessor
}

// EmplaceVariable registers a variable under name and returns an identifier for
// it.
//
// @evidence contracts/common.md#principled-implementation It registers a variable under name and returns an identifier for it.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) EmplaceVariable(name string, value *shimast.Expression) *shimast.Node {
  if _, ok := p.variables_[name]; !ok {
    if p.isNameReserved(name) {
      name = p.reserveGeneratedName(name)
    } else {
      p.reserveFixedName(name)
    }
    p.variableOrder_ = append(p.variableOrder_, name)
  }
  p.variables_[name] = value
  return nativecontext.EmitFactoryOf(functionProgrammer_factory, p.emit_).NewIdentifier(name)
}

// EmplaceVariableByKey returns an identifier for the variable registered under
// prefix and key, creating it with factory on first use.
//
// @evidence contracts/common.md#principled-implementation It returns an identifier for the variable registered under prefix and key, creating it with factory on first use.
// @evidence contracts/common.md#clear-and-simple-design One small method on the per-call collector.
// @evidence contracts/common.md#prohibited-implementation-shortcuts State lives on the receiver and not in a package global.
// @evidence contracts/common.md#meaningful-documentation The doc states what it builds.
func (p *FunctionProgrammer) EmplaceVariableByKey(prefix string, key string, factory func(name string) *shimast.Expression) *shimast.Node {
  compound := prefix + "::" + key
  if name, ok := p.variableKeys_[compound]; ok {
    return nativecontext.EmitFactoryOf(functionProgrammer_factory, p.emit_).NewIdentifier(name)
  }
  name := p.reserveGeneratedName(prefix)
  p.variableKeys_[compound] = name
  if _, ok := p.variables_[name]; !ok {
    p.variableOrder_ = append(p.variableOrder_, name)
  }
  p.variables_[name] = factory(name)
  return nativecontext.EmitFactoryOf(functionProgrammer_factory, p.emit_).NewIdentifier(name)
}

func (p *FunctionProgrammer) reserveGeneratedName(prefix string) string {
  if p.nameIndexes_ == nil {
    p.nameIndexes_ = map[string]int{}
  }
  for {
    index := p.nameIndexes_[prefix]
    p.nameIndexes_[prefix] = index + 1
    name := fmt.Sprintf("%s%d", prefix, index)
    if p.isNameReserved(name) == false {
      p.reserveFixedName(name)
      return name
    }
  }
}

func (p *FunctionProgrammer) reserveFixedName(name string) {
  if p.reservedNames_ == nil {
    p.reservedNames_ = map[string]bool{}
  }
  p.reservedNames_[name] = true
}

func (p *FunctionProgrammer) isNameReserved(name string) bool {
  if p.reservedNames_ != nil && p.reservedNames_[name] {
    return true
  }
  if _, ok := p.variables_[name]; ok {
    return true
  }
  for _, union := range p.unions_ {
    if union.name == name {
      return true
    }
  }
  return false
}
