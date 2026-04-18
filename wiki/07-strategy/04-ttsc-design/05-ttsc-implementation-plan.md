# 05. 구현 계획 — 12개월 로드맵

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


## 전체 그림

```
Month 0       프로토타입 검증
Month 1-3     Phase 1: Walking Skeleton (단일 파일 변환 end-to-end)
Month 4-6     Phase 2: typia full compatibility (test suite 통과)
Month 7-9     Phase 3: Production hardening (watch/cache/diagnostics)
Month 10-12   Phase 4: Public beta + typia setup 자동화
```

## Month 0 — 프로토타입 (2주 spike)

목표: **기술적 실현 가능성 확인**. 하나의 `typia.is<string>(input)`를 ttsc로 변환해서 실행까지 보기.

**Week 0-1**:
- `/mnt/d/github/contributions/typescript-go`의 `cmd/tsgo/main.go` 복제
- 최소 patch (10줄) 추가 — `fmt.Println("hello from ttsc")`를 transform chain에 삽입
- `go build && ./ttsc file.ts` 동작 확인

**Week 1-2**:
- Node child spawn + MessagePack echo 테스트
- Go에서 dummy AST 전송 → Node child → 그대로 반환 → Go가 출력 확인

**결과물**: 기술 가능성 증명 (go/no-go 결정). 실패 시 대안(post-compile codegen) 재고.

## Phase 1 — Walking Skeleton (3개월)

### Month 1. Foundation

**W1-2: 저장소 초기화**
- `/mnt/d/github/samchon/ttsc` 새 저장소 (또는 typia 저장소 `packages/ttsc` workspace)
- Go workspace: `go.work` with `typescript-go` submodule / pinned commit
- Nix flake.nix (Effect 방식 복사)
- pnpm workspace: `@ttsc/cli`, `@ttsc/node-bridge`, `@ttsc/types`

**W3-4: 최소 patch set**
- `_patches/001-cmd-main.patch`: ttsc 모듈 import
- `_patches/002-emitter-hook.patch`: `RegisterTransformChainHook` 추가
- `_patches/003-options.patch`: `CompilerOptions.Plugins []PluginConfig` 필드
- `ttscore/options.go`: PluginConfig 구조체 (ts-patch 스키마와 동일)

### Month 2. Hook 파이프라인

**W5-6: ttschooks/transform_hook.go**
- tsconfig.json에서 plugins[] 파싱
- 각 plugin에 대해 Node child 등록
- transform chain의 특정 지점(post-check, pre-emit)에 hook 실행
- ts-patch의 5가지 transformer type 중 "program" 먼저 지원

**W7-8: ttscbridge (Go 쪽 IPC)**
- MessagePack encoder/decoder
- Node child process spawn + stdio binding
- `Init`, `Transform`, `Close` 메소드 구현
- `GetSymbolAtNode` 등 callback 수신

### Month 3. Node bridge

**W9-10: @ttsc/node-bridge**
- libsyncrpc (또는 자체 stdio sync reader) 클라이언트
- MessagePack ↔ ts.Node 변환 (접근 2 — ts.factory 재구성)
- TransformerFactory 로드 (require + dynamic import)
- Program proxy with TypeChecker callbacks

**W11-12: @ttsc/cli**
- commander 기반 CLI
- `ttsc --build`, `ttsc --watch` (watch는 stub)
- tsconfig 파싱 + 바이너리 spawn
- platform detection (@ttsc-{platform}-{arch} resolve)

**Phase 1 Exit**: `typia.is<string>(input)` 단일 변환이 ttsc로 end-to-end 작동. typia 저장소 `tests/test-typia-automated` 중 한 개 파일만 테스트.

## Phase 2 — typia Full Compatibility (3개월)

### Month 4. Programmer 네트워크 확장

**W13-14: typia.is / assert / validate 완전 통과**
- `tests/test-typia-automated`의 관련 테스트 100% 통과
- UnionExplorer, 재귀 타입, 제너릭 제약 모두 검증

**W15-16: json.* / random / misc**
- json.stringify, parse, schema, application
- random
- misc.clone, prune, literals, notations

### Month 5. LLM / HTTP / Protobuf

**W17-18: llm.***
- application, controller, schema, parameters, structuredOutput
- mcp/langchain/vercel 어댑터가 ttsc에서 동작 확인

**W19-20: protobuf.* / http.***
- protobuf encode, decode, message
- http.formData, queryObject, headers, parameter

### Month 6. 다형성 확장

**W21-22: transformer type 5종 지원**
- program, config, checker, raw, compilerOptions (ts-patch 호환)

**W23-24: 3rd party transformer 호환**
- ts-runtime-checks, ts-nameof 테스트
- nestia 검증

**Phase 2 Exit**: typia `pnpm test` 녹색. 주요 외부 transformer 하나라도 동작.

## Phase 3 — Production Hardening (3개월)

### Month 7. Watch mode

**W25-26: watch + incremental**
- Layer 2가 파일 변경 감지 (fsnotify Go 라이브러리)
- Layer 1 child process pool (plugin당 persistent)
- 변경된 파일만 transform 재실행

**W27-28: Cache**
- `.ttsc-cache/` 파일 hash + transformer version
- Hit rate 80%+ 목표 (typia의 경우 interface 변경 드물어 높음)

### Month 8. 진단 (Diagnostic) 완전성

**W29-30**:
- tsgo diagnostic + typia transformer diagnostic 병합
- 컴파일 에러 표시가 ts-patch와 동등한 품질
- VS Code error squiggle 호환 (tsserver 경유)

**W31-32**:
- `ttsc --noEmit` 검증 모드
- `ttsc --build` project references

### Month 9. 배포 인프라

**W33-34**:
- GitHub Actions: Nix + cross-compile (7 플랫폼)
- 바이너리 자동 서명 (macOS notarization, Windows code signing)
- 각 플랫폼 smoke test

**W35-36**:
- `@typia/ttsc` + `@ttsc-{platform}-{arch}` npm publish 자동화
- 매 tsgo release 감지 시 자동 PR (patch rebase 필요 표시)

**Phase 3 Exit**: ttsc 0.9 beta 출시 가능.

## Phase 4 — Public Beta + typia 통합 (3개월)

### Month 10. typia setup 통합

**W37-38**:
- `packages/typia/src/executable/TypiaSetupWizard.ts` 수정
- TS 버전 감지 → TS 6.x면 ts-patch, TS 7+면 ttsc 권장
- 대화형으로 사용자 선택 가능

**W39-40**:
- 마이그레이션 가이드: ts-patch → ttsc
- 두 모드 공존 지원 (TS 6.x LTS 동안)

### Month 11. 커뮤니티 베타

**W41-42**:
- typia 블로그 포스트 "Meet ttsc"
- discord + GitHub Discussions 활성화
- Early adopters (nestia, AutoBE, Agentica) dogfooding

**W43-44**:
- 피드백 수집 + hotfix

### Month 12. v1.0 Release

**W45-46**:
- 성능 벤치마크 공개 (ts-patch 대비, tsgo 단독 대비)
- 버그 bash
- 문서 완성

**W47-48**:
- **ttsc v1.0 정식 릴리스**
- typia v13 출시 (ttsc 1급 지원)
- 컨퍼런스 발표 신청

## 인력 추정

| Phase | 역할 | 사람-월 |
|---|---|---|
| 0 | spike | 0.5 |
| 1 | Walking Skeleton | 3 (samchon full-time 3개월) |
| 2 | Compatibility | 3 |
| 3 | Hardening | 3 |
| 4 | Launch | 3 |
| **합계** | | **~12 person-months** |

samchon 혼자면 12개월. 사람 한 명 더 붙으면 7~8개월. Go 숙련자 한 명이 합류하면 Phase 1~3 압축 가능.

## 각 Phase별 리스크 + 완화

| Phase | 주요 리스크 | 완화 |
|---|---|---|
| 0 | 기술적 실현 불가 (AST 직렬화 폭발) | Spike에서 조기 검출, 대안 전환 |
| 1 | Go 생산성 느림 | Effect-TS/tsgo 코드 참고, Copilot 적극 사용 |
| 2 | 예상치 못한 typia edge case | test-typia-automated가 보호막 |
| 3 | watch 성능 저조 | Layer 1 process pool + warm cache |
| 4 | 사용자 채택 저조 | ts-patch 호환 스키마 + 자동 setup |

## Milestone 체크리스트

- [ ] M0: Hello world ttsc 바이너리 실행
- [ ] M1: typia.is 한 호출 변환 성공
- [ ] M2: tests/test-typia-automated 전체 녹색
- [ ] M3: watch/incremental 동작
- [ ] M4: 7 플랫폼 배포 자동화
- [ ] M5: typia setup이 ttsc를 감지/설치
- [ ] M6: public beta
- [ ] M7: v1.0

## 한 줄 요약

> **spike(2주) → Phase 1 walking skeleton(3개월) → Phase 2 compatibility(3개월) → Phase 3 hardening(3개월) → Phase 4 launch(3개월).** 혼자면 12개월. Go 조력자 1인 + 1개월 spike 성공이면 8개월 압축 가능.

→ 다음 [06. typia와의 상호작용](06-ttsc-interaction-with-typia.md)
