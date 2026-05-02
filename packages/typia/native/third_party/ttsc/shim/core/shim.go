package core

import innercore "github.com/microsoft/typescript-go/internal/core"

type CompilerOptions = innercore.CompilerOptions
type Tristate = innercore.Tristate
type TextPos = innercore.TextPos
type TextRange = innercore.TextRange
type ScriptKind = innercore.ScriptKind

const (
  TSFalse = innercore.TSFalse
  TSTrue  = innercore.TSTrue

  ScriptKindUnknown  = innercore.ScriptKindUnknown
  ScriptKindJS       = innercore.ScriptKindJS
  ScriptKindJSX      = innercore.ScriptKindJSX
  ScriptKindTS       = innercore.ScriptKindTS
  ScriptKindTSX      = innercore.ScriptKindTSX
  ScriptKindExternal = innercore.ScriptKindExternal
  ScriptKindJSON     = innercore.ScriptKindJSON
  ScriptKindDeferred = innercore.ScriptKindDeferred
)

// NewTextRange constructs a closed/open [pos, end) text range.
func NewTextRange(pos, end int) TextRange { return innercore.NewTextRange(pos, end) }
