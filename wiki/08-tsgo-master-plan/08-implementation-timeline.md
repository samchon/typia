# 08. Implementation Timeline — 월 단위 일정

> ⚠️ **이 문서의 "D-sequential" 용어는 v1 잔재**. 사용자가 "옵션 중 선택" 을 폐기하고 "ttsc+typia-go 통합"을 확정 후에도 일정 자체는 타당하므로 보존. "D-sequential" = **현재의 단일 경로(Phase 0~6)** 와 동의어로 읽으면 됨.
>
> 통합 ecosystem(typia+nestia+agentica+autobe) 일정은 [../10-ecosystem/05-integrated-tsgo-transition.md](../10-ecosystem/05-integrated-tsgo-transition.md) 참조.

## 2026 Q2 (M0) — 공식 출발점

| 주 | 작업 | 담당 |
|---|---|---|
| W1 | 공식 입장문 발표 (typia.io 블로그 + GitHub Issue #1534 답변) | samchon |
| W1-2 | Edge runtime 호환성 홍보 글 (dev.to, X) | samchon |
| W1-2 | AI-native DX 템플릿 (llms.txt, cursor rules, MCP server) | samchon |
| W2-4 | Standard Schema 어댑터 (2~3주) | samchon + contributor |
| W1-4 | ttsc Phase 0 Spike | samchon |
| W1-12 | **Go 조력자 모집 공고** | samchon |

**Q2 종료 결정**: Phase 0 go/no-go + Go 조력자 확보 판정

## 2026 Q3~Q4 (M1~M2) — ttsc Phase 1

| 월 | 작업 |
|---|---|
| M1 | Phase 1: 저장소 초기화, go.mod, flake.nix, gen_shims 복제 |
| M1 | Minimum patch 시도 (hook import, emitter hook, plugins field) |
| M2 | shim 13개 자동 생성 (tsgolint 패턴) |
| M2 | ttsccore: PluginConfig 파싱 (ts-patch 스키마 호환) |
| M3 | ttschooks: transform chain hook |
| M3 | ttscbridge: MessagePack IPC (Go 측) |
| M4 | @ttsc/node-bridge: AST 역직렬화, Program proxy |
| M4 | @ttsc/cli: Node launcher, 바이너리 spawn |
| M5 | 최소 end-to-end: `typia.is<string>(input)` 변환 성공 |
| M6 | **Phase 1 Exit**: walking skeleton 완성 |

**M6 종료 결정**: IPC 비용 < 50ms/파일이면 Phase 2, 80~200ms이면 최적화 스프린트, > 200ms이면 C 직행

## 2027 Q1~Q2 (M7~M12) — ttsc Phase 2~3

| 월 | 작업 |
|---|---|
| M7 | typia validators (is/assert/validate/equals) 100% 통과 |
| M8 | typia json (schema/stringify/parse) 통과 |
| M9 | typia llm + protobuf + random + misc 통과 |
| M10 | 5 transformer types 지원, 3rd party (ts-runtime-checks 등) 검증 |
| M11 | watch / incremental / diagnostics |
| M12 | CI 7 플랫폼 빌드, 서명, npm 배포 자동화 |

**M12 종료**: ttsc v1.0 출시 + typia v13 릴리스 (2027 Q2)

## 2027 Q3 (M13~M15) — 전환점

**조건 분기**:
- Go 조력자 확보 → typia-go Phase 0 spike 착수
- 미확보 → ttsc 유지, C 연기
- tsgonest 50%+ 시장 잠식 → 긴급 C 가속

| 월 | 작업 (조력자 확보 시나리오) |
|---|---|
| M13 | typia-go 저장소 초기화, 빌드 인프라 |
| M13 | typescript-go submodule + shim 자동 생성 |
| M14 | metadata schema (1,500 LOC) + analyzer 기초 |
| M15 | `typia.is<T>()` Go native 변환 증명 |

## 2027 Q4~2028 Q2 (M16~M21) — typia-go M1~M2

| 월 | 작업 |
|---|---|
| M16 | analyzer 완성 (union, intersection, recursive, generic) |
| M17 | IsProgrammer/AssertProgrammer/ValidateProgrammer Go 구현 |
| M18 | UnionExplorer, CheckerProgrammer 분리·이식 |
| M19 | typia validators 100% 통과 (Go) |
| M20 | json.schema + json.stringify 포팅 |
| M21 | json.parse + application + functional |

**M21 종료**: typia-go **v0.5 alpha** (validators + json) — 시장 피드백

## 2028 Q3 (M22~M24) — typia-go M3 (LLM MVP)

| 월 | 작업 |
|---|---|
| M22 | llm.schema, llm.parameters 포팅 |
| M23 | llm.application, llm.controller |
| M24 | llm.structuredOutput + MCP/LangChain/Vercel 어댑터 검증 |

**M24 종료**: typia-go **v0.9 beta** (validators + json + llm) — AutoBE/Agentica 내부 전환

## 2028 Q4 (M25~M27) — typia-go M4 (Misc + HTTP)

| 월 | 작업 |
|---|---|
| M25 | misc (clone/prune/literals) |
| M26 | notations + reflect + functional |
| M27 | http.formData/queryObject/headers/parameter |

## 2029 Q1 (M28~M30) — typia-go M5 (Specialized)

| 월 | 작업 |
|---|---|
| M28 | random (RandomProgrammer 이식, 3,000 LOC) |
| M29 | protobuf encode/decode/message |
| M30 | 전체 통합 + CI + 벤치마크 공개 |

## 2029 Q2 (M31~M33) — typia-go v1.0 출시

| 월 | 작업 |
|---|---|
| M31 | ttsc → typia-go migration 가이드 + codemod |
| M32 | typia v14 릴리스 = Go native |
| M33 | 컨퍼런스 발표 (TSConf, Korea JS) + 블로그 시리즈 |

**M33 종료**: ttsc deprecation 공지 시작, TS 6.x LTS 종료 (2028 말 예정에 맞춤)

## 전체 요약

```
2026 Q2  ─ 공식 입장문 + Standard Schema + Phase 0 spike + Edge 홍보 + AI DX
2026 Q3-Q4 ─ ttsc Phase 1 (walking skeleton)
2027 Q1-Q2 ─ ttsc Phase 2-3, v1.0 출시 (typia v13)
2027 Q3  ─ Go 조력자 확보 / typia-go 착수
2027 Q4-2028 Q2 ─ typia-go M1-M2 (validators + json)
2028 Q3  ─ typia-go M3 (LLM MVP) = v0.9 beta
2028 Q4  ─ typia-go M4 (Misc + HTTP)
2029 Q1  ─ typia-go M5 (random + protobuf)
2029 Q2  ─ typia-go v1.0 = typia v14
```

## 병행 활동 (전 기간)

- TS 6.x LTS 유지 (ts-patch fork, 보안 패치만)
- 매 tsgo release 대응 (shim 재생성, patch rebase)
- 매 분기 tsgonest/typical 시장 모니터링
- 컨퍼런스 · 블로그 · 커뮤니티 (매월 최소 1건)

→ 다음 [09. 리스크 대장](09-risk-register.md)
