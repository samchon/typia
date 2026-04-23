# Appendix A.3 — Effect-TS/tsgo patch 목록 (벤치마크)

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/).


> 출처: `effect-tsgo/_patches/`
> 용도: ttsc가 어느 정도 규모의 patch를 유지해야 할지 현실감각.

## 24개 patch 목록

| # | 파일명 | 대상 | 규모 | 범주 |
|---|---|---|---|---|
| 001 | cmd-tsgo-main.patch | cmd/tsgo/main.go | 4줄 | hook import |
| 002 | checker-checker.patch | internal/checker/checker.go | 70줄 | callback register |
| 003 | checker-exports.patch | internal/checker/exports.go | 28줄 | symbol export |
| 004 | checker-relater.patch | internal/checker/relater.go | ~20줄 | 정보 수집 |
| 005 | checker-types.patch | internal/checker/types.go | ~10줄 | Type export |
| 006 | compiler-program.patch | internal/compiler/program.go | 10줄 | diagnostic 범위 |
| 007 | core-compileroptions.patch | internal/core/compileroptions.go | 10줄 | 필드 추가 |
| 008 | diagnostics-generate.patch | internal/diagnostics/generate.go | 12줄 | 메시지 병합 |
| 009 | execute-tsc-emit.patch | internal/execute/tsc/emit.go | ~50줄 | Exit code filter |
| 010 | fourslash-fourslash.patch | internal/fourslash/fourslash.go | 380+줄 | 테스트 프레임워크 |
| 011 | ls-codeactions.patch | internal/ls/codeactions.go | 80+줄 | LSP code fix |
| 012 | ls-hover.patch | internal/ls/hover.go | ~50줄 | LSP hover |
| 013 | tsoptions-parsinghelpers.patch | internal/tsoptions/parsinghelpers.go | ~70줄 | plugin option parse |
| 014 | ast-utilities-nil-check.patch | internal/ast/utilities.go | ~10줄 | nil 안전 |
| 015 | ls-inlay-hints.patch | internal/ls/inlayhints.go | ~40줄 | LSP inlay |
| 017 | ls-server-refactor-capability.patch | internal/ls/server.go | ~10줄 | capability flag |
| 018 | ls-autoimport-stylepolicy.patch | internal/ls/autoimport/stylepolicy.go | ~100줄 | AutoImport |
| 021 | core-version-suffix.patch | internal/core/version.go | ~10줄 | version suffix |
| 022 | ls-completions.patch | internal/ls/completions.go | ~40줄 | LSP completion |
| 023 | checker-effect-links.patch | internal/checker/checker.go | ~15줄 | 링크 정보 |
| 024 | ls-document-symbols.patch | internal/ls/documentsymbols.go | ~30줄 | LSP symbols |
| 025 | tsoptions-diagnostic-scopes.patch | internal/tsoptions/parsinghelpers.go | ~50줄 | per-file override |
| 027 | ls-autoimport-view.patch | internal/ls/autoimport/view.go | ~35줄 | AutoImport view |

총계: 약 **1,200줄** (fourslash 380줄 제외하면 ~820줄)

## 패턴 분석

### 패턴 A. 4-줄 import 삽입 (가장 많음)
```go
import (
    ...
+   _ "github.com/effect-tsgo/etscheckerhooks"
    ...
)
```

### 패턴 B. Callback register 함수 + 함수 포인터 추가
```go
type CheckerCallback func(sourceFile *ast.SourceFile, diag Diagnostic)

var afterCheckSourceFileCallbacks []CheckerCallback

func RegisterAfterCheckSourceFileCallback(cb CheckerCallback) {
    afterCheckSourceFileCallbacks = append(afterCheckSourceFileCallbacks, cb)
}

func (c *Checker) checkSourceFile(...) {
    // ... existing logic
+   for _, cb := range afterCheckSourceFileCallbacks {
+       cb(sourceFile, c.currentDiagnostics)
+   }
}
```

### 패턴 C. Field 추가
```go
type CompilerOptions struct {
    // ...
+   Effect *EffectPluginOptions
}
```

### 패턴 D. Symbol/Type export
```go
+ func GetTypeArgumentsForResolvedSignature(s *Signature) []*Type {
+     return s.typeArguments
+ }
```

## ttsc에 필요한 patch 추정

Effect-TS의 24개 중 **ttsc가 꼭 필요한 것만**:

| 필요 | Effect patch 대응 |
|---|---|
| cmd/main.go에 ttsc hook import | 001 |
| emitter.go에 **TransformChain hook** 추가 (최고 중요) | (Effect에는 없음, ttsc 고유) |
| compileroptions.go에 Plugins[] 필드 | 007 |
| tsoptions/parsinghelpers.go plugin 엔트리 파싱 | 013 |
| checker export 일부 (typia가 필요하면) | 003, 005 |
| ast utilities nil 안전 | 014 |

→ 대략 **5~8 patch, 총 ~200-300 LOC**. Effect의 1/4 수준.

## 매 tsgo release별 rebase 실측 (Effect)

Effect-TS 커뮤니티 보고 (changelog 간접):
- 대부분의 tsgo release: 5~15분 rebase, 수동 개입 없음
- 가끔 (2~3개 release마다): 30~60분, checker.go 같은 큰 파일에 상충 발생
- 드물게 (반년에 1회): 반나절 수준, 구조적 변경 (예: internal API 대규모 rename)

ttsc 예측 (patch 수 1/4):
- 평균 **5~10분 rebase**
- 드물게 30분
- 반년에 한 번 반나절 수준

## patch 유지관리 자동화

Effect의 도구 `_tools/setup-repo.sh:39-49`:
```sh
# _patches/*.patch를 알파벳순으로 apply
for p in _patches/*.patch; do
  cd typescript-go
  git apply "$p" || git am "$p"
  cd -
done
```

ttsc는 거의 동일.

## CI matrix

매주 tsgo nightly(`@typescript/native-preview`)에 대해 patch apply smoke test:
```yaml
# .github/workflows/upstream-check.yml
- run: nix build .#typescriptGoSrc --update-input
- run: pnpm setup-repo
- run: pnpm build
- run: pnpm test
- if failure: open issue "upstream conflict detected: {sha}"
```

## 결론 — patch 예산

ttsc는 Effect보다 **훨씬 작은 patch 표면**. 매 tsgo release당 평균 **10분 내외 rebase**가 현실적. 연간 ~10시간 유지보수 비용. 1인 감당 가능 수준.

이 자료가 "Go fork + patch + hook"이 **지속 가능한 전략**이라는 확신의 근거.
