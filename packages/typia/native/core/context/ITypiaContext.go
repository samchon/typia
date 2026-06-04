package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

type ITypiaContext struct {
  Program         *driver.Program
  CompilerOptions *shimcore.CompilerOptions
  Checker         *shimchecker.Checker
  Options         ITransformOptions
  // Emit은 tsgo emit이 플러그인에 넘기는 변환 컨텍스트로, legacy typia의
  // ts.TransformationContext에 대응한다. 이 Factory로 만든 노드에는 original
  // 링크가 걸려 printer와 emit resolver가 binder 심볼을 되찾는다(export된
  // namespace가 exports.X = X = {} 로 정상 lowering). 모든 노드 생성은
  // Emit.Factory를 거쳐야 한다.
  Emit     *shimprinter.EmitContext
  Importer any
  Extras   ITypiaContext_Extras
}

type ITypiaContext_Extras struct {
  AddDiagnostic func(diag *shimast.Diagnostic) int
}
