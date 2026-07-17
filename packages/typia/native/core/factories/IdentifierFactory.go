package factories

import (
  "fmt"
  "strings"
  "unicode/utf8"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type identifierFactoryNamespace struct{}

var IdentifierFactory = identifierFactoryNamespace{}

var identifierFactory_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (identifierFactoryNamespace) Identifier(name string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(identifierFactory_factory, emit...)
  if identifierFactory_variable(name) {
    return f.NewIdentifier(name)
  }
  return f.NewStringLiteral(name, shimast.TokenFlagsNone)
}

// Access takes a required emit context (nil for genuinely context-free callers)
// because its trailing `chain` variadic blocks the optional-emit form the other
// factories use; a required parameter also makes a forgotten context a compile
// error rather than a silent metadata gap.
func (identifierFactoryNamespace) Access(ec *shimprinter.EmitContext, input *shimast.Expression, key string, chain ...bool) *shimast.Node {
  f := nativecontext.EmitFactory(ec, identifierFactory_factory)
  postfix := IdentifierFactory.Identifier(key, ec)
  optional := len(chain) != 0 && chain[0]
  var questionDot *shimast.QuestionDotToken
  flags := shimast.NodeFlagsNone
  if optional {
    questionDot = f.NewToken(shimast.KindQuestionDotToken)
    flags = shimast.NodeFlagsOptionalChain
  }
  if shimast.IsStringLiteral(postfix) {
    return f.NewElementAccessExpression(
      input,
      questionDot,
      postfix,
      flags,
    )
  }
  return f.NewPropertyAccessExpression(
    input,
    questionDot,
    postfix,
    flags,
  )
}

func (identifierFactoryNamespace) GetName(input *shimast.Expression) string {
  if input == nil {
    return "unknown"
  }
  if shimast.IsPropertyAccessExpression(input) {
    access := input.AsPropertyAccessExpression()
    return IdentifierFactory.GetName(access.Expression) + "." + access.Name().Text()
  }
  if shimast.IsElementAccessExpression(input) {
    access := input.AsElementAccessExpression()
    return IdentifierFactory.GetName(access.Expression) + "[" + IdentifierFactory.GetName(access.ArgumentExpression) + "]"
  }
  if input.Kind == shimast.KindIdentifier || shimast.IsStringLiteral(input) {
    return input.Text()
  }
  return "unknown"
}

// Postfix renders the accessor for `str` as JavaScript source for a string
// literal, because callers splice the result straight into emitted text (see
// AssertProgrammer and ValidateProgrammer building `_path + <postfix>`).
//
// The value of that literal must equal what the runtime helper
// `typia/lib/internal/_accessExpressionAsString` computes for the same key,
// since dynamic keys take that runtime path while sole-literal keys are folded
// here at compile time. Both must produce one path grammar, which
// `typia/lib/internal/_createStandardSchema` parses back with JSON.parse.
//
// So there are two nested levels of escaping: the key becomes a JSON literal,
// and that literal is embedded in the JavaScript literal returned here. Both
// levels go through identifierFactory_literal; a level that escapes only some
// characters emits a file that does not parse.
func (identifierFactoryNamespace) Postfix(str string) string {
  if identifierFactory_variable(str) {
    return identifierFactory_literal("." + str)
  }
  return identifierFactory_literal("[" + identifierFactory_literal(str) + "]")
}

// identifierFactory_literal renders `str` as JavaScript source for a string
// literal whose value is exactly `str`.
//
// The escape set is JSON.stringify's, so that a literal built here reads back
// through JSON.parse in _createStandardSchema and matches what
// _accessExpressionAsString produces at runtime. JSON string syntax is a subset
// of JavaScript string syntax, so one escaper satisfies both the JavaScript
// parser that loads the emitted file and the JSON parser that reads a key out
// of a reported path.
//
// strconv.Quote cannot serve this role: it escapes for Go, and Go and
// JavaScript disagree. Quote renders U+0007 as `\a` and a non-printable astral
// rune as `\U0001d173`; JavaScript has neither escape and decodes them as the
// identity escapes `a` and `U`, silently corrupting the key, while JSON.parse
// rejects both outright.
func identifierFactory_literal(str string) string {
  var builder strings.Builder
  builder.Grow(len(str) + 2)
  builder.WriteByte('"')
  for i := 0; i < len(str); {
    if char := str[i]; char < utf8.RuneSelf {
      i++
      switch char {
      case '"':
        builder.WriteString("\\\"")
      case '\\':
        builder.WriteString("\\\\")
      case '\b':
        builder.WriteString("\\b")
      case '\f':
        builder.WriteString("\\f")
      case '\n':
        builder.WriteString("\\n")
      case '\r':
        builder.WriteString("\\r")
      case '\t':
        builder.WriteString("\\t")
      default:
        // JSON forbids a raw control character in a string, and JSON.parse
        // throws on one rather than reporting the validation issue that the
        // path belongs to. Every other ASCII byte is safe verbatim.
        if char < 0x20 {
          builder.WriteString(identifierFactory_unicode_escape(rune(char)))
        } else {
          builder.WriteByte(char)
        }
      }
      continue
    }
    if unit, size := identifierFactory_surrogate(str[i:]); size != 0 {
      // A lone surrogate reaches here WTF-8 encoded and has no valid UTF-8
      // form, so it survives only as an escape. JSON.stringify does the same.
      builder.WriteString(identifierFactory_unicode_escape(unit))
      i += size
      continue
    }
    rune_, size := utf8.DecodeRuneInString(str[i:])
    if rune_ == utf8.RuneError && size == 1 {
      // Not UTF-8 at all. No escape can denote the byte, so spend the
      // replacement character and keep the literal well-formed; the
      // alternative is emitting a file that does not parse.
      builder.WriteString(identifierFactory_unicode_escape(utf8.RuneError))
      i++
      continue
    }
    if rune_ == '\u2028' || rune_ == '\u2029' {
      // Legal in a JavaScript string only since ES2019, and JSON.stringify
      // leaves them raw. Escaping costs nothing and keeps the emit parseable
      // on an older target.
      builder.WriteString(identifierFactory_unicode_escape(rune_))
      i += size
      continue
    }
    builder.WriteString(str[i : i+size])
    i += size
  }
  builder.WriteByte('"')
  return builder.String()
}

// identifierFactory_unicode_escape writes the `\uXXXX` form, which denotes one
// UTF-16 code unit and so only spans the Basic Multilingual Plane. Every caller
// passes a control character, a surrogate, or the replacement character; an
// astral rune needs no escape and must keep taking the verbatim path, because
// four hex digits cannot spell it.
func identifierFactory_unicode_escape(value rune) string {
  return fmt.Sprintf("\\u%04x", value)
}

// identifierFactory_surrogate decodes a leading WTF-8 encoded surrogate code
// unit, which utf8.DecodeRuneInString reports as an error because no valid
// UTF-8 sequence denotes one.
func identifierFactory_surrogate(str string) (rune, int) {
  if len(str) < 3 || str[0] != 0xed || str[1] < 0xa0 || str[1] > 0xbf || str[2] < 0x80 || str[2] > 0xbf {
    return 0, 0
  }
  return rune(str[0]&0x0f)<<12 | rune(str[1]&0x3f)<<6 | rune(str[2]&0x3f), 3
}

func (identifierFactoryNamespace) Parameter(name any, typeNode *shimast.TypeNode, init *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(identifierFactory_factory, emit...)
  var binding *shimast.BindingName
  switch v := name.(type) {
  case string:
    binding = f.NewIdentifier(v)
  case *shimast.Node:
    binding = v
  default:
    binding = f.NewIdentifier("input")
  }
  if typeNode == nil {
    typeNode = TypeFactory.Keyword("any", emit...)
  }
  var question *shimast.QuestionToken
  var initializer *shimast.Expression
  if init != nil && init.Kind == shimast.KindQuestionToken {
    question = f.NewToken(shimast.KindQuestionToken)
  } else {
    initializer = init
  }
  return f.NewParameterDeclaration(
    nil,
    nil,
    binding,
    question,
    typeNode,
    initializer,
  )
}

func identifierFactory_variable(str string) bool {
  if identifierFactory_reserved[str] || len(str) == 0 {
    return false
  }
  for i := 0; i < len(str); i++ {
    c := str[i]
    if i == 0 {
      if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || c == '_' || c == '$') {
        return false
      }
    } else if !(('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z') || ('0' <= c && c <= '9') || c == '_' || c == '$') {
      return false
    }
  }
  return true
}

var identifierFactory_reserved = map[string]bool{
  "break":      true,
  "case":       true,
  "catch":      true,
  "class":      true,
  "const":      true,
  "continue":   true,
  "debugger":   true,
  "default":    true,
  "delete":     true,
  "do":         true,
  "else":       true,
  "enum":       true,
  "export":     true,
  "extends":    true,
  "false":      true,
  "finally":    true,
  "for":        true,
  "function":   true,
  "if":         true,
  "import":     true,
  "in":         true,
  "instanceof": true,
  "module":     true,
  "new":        true,
  "null":       true,
  "package":    true,
  "public":     true,
  "private":    true,
  "protected":  true,
  "return":     true,
  "super":      true,
  "switch":     true,
  "this":       true,
  "throw":      true,
  "true":       true,
  "try":        true,
  "typeof":     true,
  "var":        true,
  "void":       true,
  "while":      true,
  "with":       true,
}
