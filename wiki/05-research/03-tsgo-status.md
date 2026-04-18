# tsgo (TypeScript-Go) 현황 — 2026-04 기준

> 출처는 본문 끝 인용 URL 모음 참조. [사실] / [추정] 명시.

## 1. 프로젝트 현황

[사실]
- 2025-03 Anders Hejlsberg가 "Corsa" 발표 (TypeScript의 Go 포팅). 빌드 7~10×, 메모리 -50%, 에디터 시작 8× 목표.
- 2026-03-23 **TypeScript 6.0** 정식 — "마지막 JS 기반 버전".
- **TypeScript 7.0 (Corsa) GA: 공식 미정** — Microsoft DevBlog (2025-12 Progress report)는 날짜 명시 없음. InfoWorld 등 3rd-party 추정 "2026 mid/late", 일부는 "2026-01-15 GA" 주장하나 **공식 확인 불가**. 안전 범위 **2026 H2 ~ 2027 H1** (v2 재조사).
- Preview npm 패키지: `@typescript/native-preview` (nightly).
- 2025-12 DevBlog "Progress on TypeScript 7":
  - Parser/Binder/Checker: 거의 완성 (20,000 테스트 중 74건 미스매치)
  - Emitter: **미완** — es2021 미만 downlevel 미지원, **데코레이터 emit 미지원**
  - LSP: 주요 기능 작동, 프로덕션은 2026 초중 opt-in VS Code 확장
  - Build / `--incremental` / project references: 지원
  - Watch: 프로토타입
  - **API: "not ready" — 공식 README 명시**

[추정] 1.0 Stable은 2026 Q3 말~Q4 초 가능. API 레이어(typia가 필요로 하는 부분)는 GA 이후로 늦춰질 가능성 높음.

## 2. 호환성 정책 — 중대 비호환 선언

[사실]
- "**TypeScript 7.0은 기존 Strada API를 지원하지 않음**" (DevBlog 공식).
- Discussion #455 (Daniel Rosenwasser, 2025-03-11): "API 소비자는 동일 프로세스 내에서 통신하지 않을 것. **IPC 레이어를 거치는 메시지 패싱**."
- **FFI/동일 프로세스 내 플러그인 로드는 기술적으로 불가능** — Go 런타임 다중 로드 문제 (jakebailey).
- andrewbranch: "Watch API는 매우 불확실".
- RyanCavanaugh: semver는 지킨다 — "더 나은 버저닝을 위해 의도적 설계".

→ **API 동등성 보장 안 함. in-process → IPC라는 근본 아키텍처 변화**.

## 3. Transformer Plugin 지원 — typia에 가장 결정적

[사실]
- Issue #516 "Transformer Plugin or Compiler API" (2025-03-12, M-jerez 개설) — **milestone "Post-7.0"**, 여전히 Open. Microsoft 공식 답변 없음.
- Discussion #455 jakebailey: "We love ts-morph; it is explicitly an anti-goal to prevent ts-morph from working altogether" — 타입 정보는 IPC로 노출.
  - 그러나 **custom transformer / ts-patch / typia 같은 internal patching 기반 도구는 "redesigned approaches" 필요** — 공식 인정.
- PR #711 (andrewbranch, 2025-04-10 머지): IPC 기반 API 스캐폴딩. 노출 = `parseConfigFile`, `loadProject`, `Project.getSourceFile`, `getSymbolAtLocation`, `getSymbolAtPosition`, `getTypeOfSymbol` 정도. **TypeChecker 전체, ts.factory, ts.TransformationContext는 노출 안 됨**.
- 기존 transformer 제안 (#54276 in microsoft/TypeScript)은 dormant.
- JS API의 **async 전환 가능성**이 논의 → 동기 빌드툴/transformer 깨질 것이라는 커뮤니티 관측.

[추정] 현행 `before/after CustomTransformers` 모델은 그대로 이식될 가능성 매우 낮음. typia처럼 **emit 단계에 대규모 AST 합성**을 하는 라이브러리는 IPC 왕복 오버헤드가 병목이 될 수 있음.

## 4. ts.TypeChecker / Internal API 호환성

[사실]
- 현재 IPC API (PR #711)는 `getSymbolAtLocation`, `getTypeOfSymbol` 정도만 노출. typia가 쓰는 `getTypeAtLocation`, `getPropertiesOfType`, `getIndexInfoOfType`, `getApparentType`, `getAugmentedPropertiesOfType` 등 **대부분 미노출**.
- tsgo 패키지 대부분이 `internal/`로 선언 → JS 레이어에서 ts-expose-internals에 해당하는 것 자체가 **존재하지 않음**.
- Discussion #455의 IPC 설계는 "curated API" 명시 → 전체 checker API 노출 계획 없음.

→ **typia의 ts-expose-internals 의존은 tsgo에서 100% 불가능** (단, 현재 typia는 실제 internal 사용은 거의 없음 — declare만 해두고 public API 사용. 호환성 리스크 의외로 낮음). 외부 API조차 IPC로 재매핑 필요.

## 5. AST 호환성

[사실]
- AST는 `internal/ast/ast.go`에 Go struct. **SyntaxKind enum 값은 유지 방향**이지만 Node는 Go struct → JS 측은 IPC 직렬화 형태로만 접근.
- PR #711에서 "binary encoded AST" 포맷 언급 — JS 쪽 AST 생성 → tsgo 주입 실험 중 (`DocumentStore`).
- CHANGES.md에 TS 6.0 대비 의도적 비호환 리스트 존재.

[추정] `SyntaxKind` 정수 보존돼도 `ts.Node` 객체(JS prototype, parent 체인, symbol bind 등)는 동일 shape 불가. **AST 직접 순회/수정 방식은 근본 재작성 필요**.

## 6. Microsoft 공식 마이그레이션 경로

[사실]
- TS 6.x 병행 유지. Strada(JS) 코드베이스는 7.x 성숙까지 LTS.
- 7.0은 에디터 기본값 아닌 **opt-in VS Code 확장**으로 먼저.
- `@typescript/native-preview` → 7.0 GA → 점진적 기본 전환.
- Strada API 의존 도구의 공식 마이그레이션 가이드는 **아직 없음**.

## 7. 커뮤니티 라이브러리 대응

| 프로젝트 | 2026-04 현황 |
|---|---|
| ts-patch (nonara) | Issue #181 (2025-03-11) 개설만, **maintainer 응답 없음**, 로드맵 미공개 |
| **typia (samchon)** | Issue #1534 (2025-03-13) 개설, **공식 플랜 없음** |
| ts-morph (dsherret) | Microsoft "anti-goal to break ts-morph" — IPC 타입 정보 보장 |
| Effect-TS | `Effect-TS/tsgo` 포크 (LSP 커스터마이징 실험) |
| ttypescript | 사실상 유지보수 중단, ts-patch가 후계 |
| Vue/Vite/Angular | Issue #516에서 우려 표명, 개별 대응 미공개 |

## 8. 타임라인 추정

| 이벤트 | 시점 | 신뢰도 |
|---|---|---|
| TS 7.0 GA (컴파일러 중심) | 2026 Q3~Q4 | 높음 |
| Editor 기본 전환 | 2026 말~2027 | 중 |
| IPC API 1.0 stable | **2027 H1 이후** | 추정 |
| **Transformer/Plugin 공식 지원** | **빨라야 2027 하반기** | 추정 |
| ts-patch/typia 대응 완료 | 2027~2028 | 추정 |

## 인용

- [DevBlog — A 10x Faster TypeScript (2025-03)](https://devblogs.microsoft.com/typescript/typescript-native-port/)
- [DevBlog — Progress on TypeScript 7, Dec 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)
- [DevBlog — Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)
- [microsoft/typescript-go README](https://github.com/microsoft/typescript-go)
- [Discussion #455 — What is the API story?](https://github.com/microsoft/typescript-go/discussions/455)
- [Issue #516 — Transformer Plugin or Compiler API](https://github.com/microsoft/typescript-go/issues/516)
- [PR #711 — Scaffold IPC-based API](https://github.com/microsoft/typescript-go/pull/711)
- [Issue #2824 — API usage patterns for editor extensions](https://github.com/microsoft/typescript-go/issues/2824)
- [ts-patch Issue #181](https://github.com/nonara/ts-patch/issues/181)
- [typia Issue #1534](https://github.com/samchon/typia/issues/1534)
- [InfoWorld — Microsoft steers native port to early 2026](https://www.infoworld.com/article/4100582/microsoft-steers-native-port-of-typescript-to-early-2026-release.html)
- [Visual Studio Magazine — TypeScript 6.0 Ships (2026-03-23)](https://visualstudiomagazine.com/articles/2026/03/23/typescript-6-0-ships-as-final-javascript-based-release-clears-path-for-go-native-7-0.aspx)
- [2ality — A closer look at the Go port](https://2ality.com/2025/03/typescript-in-go.html)
- [Zenn (mizchi) — Building tsgo and interacting via LSP](https://zenn.dev/mizchi/articles/tsgo-try-and-internal?locale=en)
- [BRK116 — A 10x Faster TypeScript (MS Build)](https://build.microsoft.com/en-US/sessions/BRK116)
- [TypeScript Issue #54276 — minimal custom transformer plugin proposal](https://github.com/microsoft/TypeScript/issues/54276)
- [TypeScript Issue #14419 — Plugin Support for Custom Transformers](https://github.com/microsoft/TypeScript/issues/14419)
