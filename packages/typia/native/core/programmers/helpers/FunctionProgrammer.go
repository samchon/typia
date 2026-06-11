package helpers

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type FunctionProgrammer struct {
  Method         string
  local_         map[string]bool
  unions_        map[string]*functionProgrammer_union
  unionOrder_    []string
  variables_     map[string]*shimast.Node
  variableKeys_   map[string]string
  variableOrder_ []string
  sequence_      int
  disableDeclare bool
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
}

type functionProgrammer_union struct {
  name  string
  value *shimast.Node
}

var functionProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func NewFunctionProgrammer(method string, emit ...*shimprinter.EmitContext) *FunctionProgrammer {
  p := &FunctionProgrammer{
    Method:         method,
    local_:         map[string]bool{},
    unions_:        map[string]*functionProgrammer_union{},
    unionOrder_:    []string{},
    variables_:     map[string]*shimast.Node{},
    variableKeys_:   map[string]string{},
    variableOrder_: []string{},
  }
  if len(emit) != 0 {
    p.emit_ = emit[0]
  }
  return p
}

func (p *FunctionProgrammer) UseLocal(name string) string {
  p.local_[name] = true
  return name
}

func (p *FunctionProgrammer) SetVisited(value bool) {
  p.visited_ = value
}

func (p *FunctionProgrammer) Visited() bool {
  return p.visited_
}

func (p *FunctionProgrammer) HasLocal(name string) bool {
  return p.local_[name]
}

func (p *FunctionProgrammer) Declare(includeUnions ...bool) []*shimast.Node {
  if p.disableDeclare {
    return []*shimast.Node{}
  }
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

func (p *FunctionProgrammer) DeclareUnions() []*shimast.Node {
  if p.disableDeclare {
    return []*shimast.Node{}
  }
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

func (p *FunctionProgrammer) Increment() int {
  p.sequence_++
  return p.sequence_
}

func (p *FunctionProgrammer) EmplaceUnion(prefix string, name string, factory func() *shimast.Node) string {
  key := prefix + "::" + name
  if oldbie, ok := p.unions_[key]; ok {
    return oldbie.name
  }
  index := len(p.unions_)
  accessor := fmt.Sprintf("%sp%d", prefix, index)
  tuple := &functionProgrammer_union{name: accessor}
  p.unions_[key] = tuple
  p.unionOrder_ = append(p.unionOrder_, key)
  tuple.value = factory()
  return accessor
}

func (p *FunctionProgrammer) EmplaceVariable(name string, value *shimast.Expression) *shimast.Node {
  if _, ok := p.variables_[name]; !ok {
    p.variableOrder_ = append(p.variableOrder_, name)
  }
  p.variables_[name] = value
  return nativecontext.EmitFactoryOf(functionProgrammer_factory, p.emit_).NewIdentifier(name)
}

func (p *FunctionProgrammer) EmplaceVariableByKey(prefix string, key string, factory func(name string) *shimast.Expression) *shimast.Node {
  compound := prefix + "::" + key
  if name, ok := p.variableKeys_[compound]; ok {
    return nativecontext.EmitFactoryOf(functionProgrammer_factory, p.emit_).NewIdentifier(name)
  }
  name := fmt.Sprintf("%s%d", prefix, len(p.variableKeys_))
  p.variableKeys_[compound] = name
  return p.EmplaceVariable(name, factory(name))
}
