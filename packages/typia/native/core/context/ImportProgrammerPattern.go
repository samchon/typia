package context

import shimast "github.com/microsoft/typescript-go/shim/ast"

// Pattern reuses a flag-free RegExp after its first successful construction.
// The constructor stays at the check site, so invalid sources still throw only
// when the string check is reached. File-scoped var slots also work when a
// circular import invokes a hoisted function before this module's body runs.
// Without an emit context, retain the constructor: the standalone factory has
// no compiler name-collision information for a file-scoped generated slot.
//
// @evidence contracts/common.md#principled-implementation A flag-free RegExp test does not advance lastIndex, so checks with the same source can share the compiled object. Nullish assignment records only successful construction and preserves lazy SyntaxError timing. Uninitialized var declarations are hoisted and do not reset an early circular-import initialization. The compiler supplies collision-safe names; without that capability, the original constructor is returned without introducing a binding.
// @evidence contracts/common.md#clear-and-simple-design The file's existing statement collector owns one generated slot per distinct source and returns its lazy initialization expression.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Only the caller's verified static flag-free pattern expressions use this method; arbitrary custom validators remain untouched.
// @evidence contracts/common.md#meaningful-documentation The comment explains reuse, lazy construction and the var declaration.
// @evidence contracts/performance.md#efficient-algorithms Source lookup uses the file's map and each generated check performs one nullish guard instead of constructing another RegExp.
// @evidence contracts/performance.md#reuse-equivalent-work Standard JavaScript RegExp objects with identical source and no flags have equivalent stateless test behavior; the importer is scoped to one transformed source file and not shared between programs.
// @evidence contracts/performance.md#bound-retention-and-release-resources Generation retains one slot per distinct authored pattern until the file transform ends; runtime retains at most one RegExp per slot for the containing module's lifetime, with no runtime-keyed cache.
func (p *ImportProgrammer) Pattern(source string, constructor *shimast.Node) *shimast.Node {
  if p.emit_ == nil {
    return constructor
  }
  f := NodeFactoryOf(p.emit_)
  name := p.patterns_[source]
  if name == nil {
    if p.patterns_ == nil {
      p.patterns_ = map[string]*shimast.Node{}
    }
    name = p.emit_.Factory.NewUniqueName("__" + p.options_.InternalPrefix + "pattern")
    p.patterns_[source] = name
    p.patternOrder_ = append(p.patternOrder_, source)
  }
  return f.NewParenthesizedExpression(f.NewBinaryExpression(nil,
    name.Clone(f), nil, f.NewToken(shimast.KindQuestionQuestionEqualsToken), constructor,
  ))
}
