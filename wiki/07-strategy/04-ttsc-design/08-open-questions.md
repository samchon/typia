# 08. Open Questions — 의사결정이 필요한 지점들

아래 질문들은 **ttsc 착수 전 또는 Phase 1 초기에 samchon이 선택해야 할 핵심 분기점들**. 각각에 대한 추천과 근거를 적었다.

## Q1. ttsc를 typia 모노레포에 둘 것인가, 별도 저장소인가

**옵션**:
- (A) `/mnt/d/github/samchon/typia/packages/ttsc/` 내부
- (B) `/mnt/d/github/samchon/ttsc/` 별도 저장소

**추천**: **B (별도 저장소)**

**근거**:
- ttsc의 사용자는 typia 사용자만이 아님 (ts-runtime-checks 등도 잠재 고객)
- Go 빌드 인프라(flake.nix, Nix, cross-compile)가 typia 빌드와 성격 다름
- typia 저장소에 Go 파일 수천 개가 들어가면 CI/PR 리뷰 부담
- `@typia/ttsc` 대신 `@ttsc/ttsc` 같은 독립 namespace도 가능 (브랜딩 유연성)

**반대 논거**: 같은 저장소면 PR 동기화 쉬움. typia 의존성 바꾸기 편함.

**결정**: 별도 저장소 + typia에는 `@ttsc/ttsc`를 optional peer로 두기.

## Q2. 이름을 무엇으로 할 것인가

**옵션**:
- (A) `ttsc` — ttypescript 계승
- (B) `typia-tsc`
- (C) `tspc` (ts-patch compile 계승)
- (D) 완전히 새 이름 (예: `tgs`, `tsgot`)

**추천**: **(A) ttsc** — 사용자가 요청한 것이기도 함

**근거**:
- "Transformer TypeScript"라는 커뮤니티 관례적 약칭
- ttypescript 사용자에게 자연스러운 계승 느낌
- `tsc` → `ttsc`로 한 글자만 변경 — 직관적
- npm에 `ttsc`가 사용 중(다른 패키지)이라면 `@typia/ttsc` 또는 `@ttsc-tools/ttsc` scope

**확인 필요**: `ttsc` npm 이름 available 여부, 상표/분쟁 없는지.

## Q3. Go 훅 모듈 설계 — 얼마나 공격적으로 Effect-TS 복사?

**옵션**:
- (A) Effect의 `etscore / etscheckerhooks / etslshooks / etsexecutehooks` 4분할 그대로
- (B) 최소 시작: `ttscore` 1개 모듈로 시작해 성장하며 분할
- (C) Effect의 구조 복사하되 이름만 `ttsccore / ttscchecker / ...`

**추천**: **(C)** — 구조 그대로 복사

**근거**:
- Effect 패턴이 이미 검증됨
- 훗날 LSP 지원(ttsclshooks) 추가할 때 구조가 이미 있어 편리
- samchon이 "ttsc 배우기 시간"을 줄임 — Effect 코드 읽고 매핑만

## Q4. Nix를 빌드 도구로 쓸 것인가

**옵션**:
- (A) Nix (Effect 방식)
- (B) 순수 Go toolchain + shell scripts
- (C) Bazel

**추천**: **(A) Nix**

**근거**:
- 재현가능 빌드 필수 (pinned tsgo commit + patch 일관성)
- Effect의 `flake.nix`를 거의 그대로 복사 가능 (~200 LOC)
- GitHub Actions에 Nix install 한 스텝만 추가
- Windows 지원이 약한 건 cross-compile은 Linux 빌더에서 하므로 문제 없음

**반대**: Nix 학습 부담. 하지만 flake.nix는 복사에 가까워 진입 저비용.

## Q5. Node bridge 프로세스 모델

**옵션**:
- (A) plugin당 persistent child (Phase 3 watch mode에 유리)
- (B) file당 spawn (단순, 시작 지연 누적)
- (C) 하이브리드: build 모드는 persistent, `--noEmit` 등은 file당

**추천**: **(A) persistent, Phase 1부터**

**근거**:
- Go가 첫 plugin 호출 시 child spawn → long-lived process
- 각 transform request는 이미 살아있는 child에 IPC
- 프로세스 startup cost (Node 초기화 + typia/lib/transform 로드 ~200ms) 초기 한번만
- watch mode의 기초가 됨

## Q6. AST 직렬화 형식

**옵션**:
- (A) MessagePack (Effect/tsgo PR #711과 같은 형식)
- (B) JSON-RPC (덜 효율적이나 디버깅 쉬움)
- (C) Protobuf (typia가 이미 제공하는 형식!)
- (D) 자체 binary format

**추천**: **(A) MessagePack**

**근거**:
- tsgo 자체가 MessagePack을 쓰므로 라이브러리 생태계 성숙
- Go (`vmihailenco/msgpack`), Node (`@msgpack/msgpack`) 둘 다 stable
- Protobuf는 IDL 관리 부담 (typia 자체는 쓰지만 여기선 overhead)
- 디버그용으로 `--format json` 플래그 제공 가능

**대안 여지**: Phase 2에서 성능 측정 후 Protobuf로 전환 가능. 포맷 교체 레이어는 1개 파일.

## Q7. ttsc가 ts-patch 스키마를 100% 수용할 것인가

**옵션**:
- (A) 완전 호환 (transformer type 5종 모두)
- (B) program 타입만 지원 (typia만 쓴다면 충분)
- (C) 완전 호환 + ttsc 자체 확장

**추천**: **(A)** v1.0은 완전 호환, 그 후 (C)로 확장

**근거**:
- 사상 공리 B "효용 영역 확장" — 3rd party transformer 호환 = 생태계 확장
- Phase 2에서 ts-runtime-checks 등 검증이 완전 호환을 강제

## Q8. ttsc 라이선스

**옵션**:
- (A) MIT (typia와 동일)
- (B) Apache 2.0 (특허 보호)
- (C) MPL 2.0

**추천**: **(A) MIT** — typia와 일치, 생태계 친화

## Q9. tsserver 지원 시점

**옵션**:
- (A) Phase 1부터 (ttsserver 바이너리 포함)
- (B) Phase 3 hardening에서 추가
- (C) v1.1 이후 (LSP 전담 모듈 ttsclshooks)

**추천**: **(C)** — v1.0은 build 전용, v1.1에서 tsserver

**근거**:
- tsserver 통합은 LSP 전체 이해 필요 — Effect-TS의 6개 hook register 규모
- v1.0은 "build만 동작하게" 집중
- IDE는 당분간 TypeScript Language Server(ttsc 없이)로도 타입 검사됨. 빌드 결과만 ttsc.

## Q10. 자금/후견 모델

**옵션**:
- (A) 전부 volunteer (samchon + 커뮤니티)
- (B) OpenCollective 명시 (typia 계정)
- (C) GitHub Sponsors
- (D) 상업 지원 (AutoBE 상업화 일부)

**추천**: **B + D 병행**

**근거**:
- 12개월 full-time 부담은 순수 volunteer로 불가능
- AutoBE/Agentica의 상업 수익의 일부를 ttsc 유지보수 fund로
- 투명성: 사용 기업이 후견하기 쉬운 구조

## Q11. 사용자 입장 설치 명령은?

**옵션**:
- (A) `npx typia setup` — typia가 ttsc를 알아서 설치
- (B) `npm i -D @typia/ttsc` — 명시적
- (C) 둘 다 지원

**추천**: **(C) 둘 다, (A)가 기본**

**근거**:
- (A)가 사용자 경험 최고
- (B)가 advanced 사용자나 CI 자동화에 필요
- typia setup이 감지 후 (B) 실행하는 구조

## Q12. ts-patch fork와의 관계

**옵션**:
- (A) ts-patch fork는 TS 6.x LTS 전용으로 유지
- (B) ts-patch fork는 폐기하고 ttsc에 집중
- (C) ttsc에 TS 6.x 호환 모드 포함 (거대한 복잡도)

**추천**: **(A)**

**근거**:
- TS 6.x 사용자가 2028 말까지 존재 — ts-patch 죽지 않게
- samchon이 이미 `ts-patch-typescript-6.0` fork 경험 있음
- ttsc와 ts-patch fork는 배타적이 아닌 병행

## Q13. 벤치마크 대상

**추천 벤치마크**:
1. ts-patch + tsc 5.9 (기존 typia 사용자의 base)
2. ttsc (대상)
3. tsgo 단독 — typia 기능 없음 (ceiling)
4. 세 개의 "typia-heavy" 프로젝트 컴파일 시간: `nestia-start`, AutoBE, 중형 실제 사용자 프로젝트

목표: `ts-patch + tsc 5.9` 대비 3배 이상 빠름, `tsgo 단독` 대비 2배 이내 느림.

## 정리

결정해야 할 12개 질문 중 가장 중요한 것:
1. **Q1 저장소 위치** — 별도 저장소 권장
2. **Q2 이름** — ttsc 확정 (npm available 확인)
3. **Q6 AST 직렬화** — MessagePack
4. **Q10 자금 모델** — OC + 상업 병행

나머지는 Phase 1 중에 결정해도 무방.

## 한 줄 요약

> **12개 Open Question 중 중요한 4개는 설계 착수 전 결정. 나머지는 Phase 1 진행하며 결정. 모든 답변은 "사상 양보 0"과 "Effect-TS 검증 패턴 재활용"이라는 두 원칙에서 도출.**

→ 부록: [09-appendix/](09-appendix/)
