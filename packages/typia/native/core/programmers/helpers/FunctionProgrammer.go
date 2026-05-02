package helpers

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type FunctionProgrammer struct {
  Method         string
  local_         map[string]bool
  unions_        map[string]*functionProgrammer_union
  unionOrder_    []string
  variables_     map[string]*shimast.Node
  variableOrder_ []string
  sequence_      int
  disableDeclare bool
}

type functionProgrammer_union struct {
  name  string
  value *shimast.Node
}

var functionProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func NewFunctionProgrammer(method string) *FunctionProgrammer {
  return &FunctionProgrammer{
    Method:         method,
    local_:         map[string]bool{},
    unions_:        map[string]*functionProgrammer_union{},
    unionOrder_:    []string{},
    variables_:     map[string]*shimast.Node{},
    variableOrder_: []string{},
  }
}

func (p *FunctionProgrammer) UseLocal(name string) string {
  p.local_[name] = true
  return name
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
    }))
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
      }))
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
    }))
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
  return functionProgrammer_factory.NewIdentifier(name)
}
