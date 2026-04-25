# Audit 9 — Stage 0 Critical Self-Review (2026-04-18)

> 목적: master plan v5(cycle 2 반영 후) 작성된 `08/05-stage0-kickoff.md`의 결함을 공격적으로 찾아내 개정 대상을 명확히 함.

## 결함 목록 (20개, 우선순위 표기)

### 🔴 Critical (Stage 0 실행 직전 반드시 해결)

#### D1. Week 2~3 과다 패킹 / Week 1 저부하
- **Week 1**: 문서 초안 3개 + 스캐폴딩 → 1~2일로 충분
- **Week 2**: submodule + gen_shims 복제·확장 + MetadataSchema Go struct → gen_shims만 1주 가능
- **Week 3**: end-to-end 변환 + **두 경로 모두** 프로토타입 + Standard Schema 블로그 + 공식 입장문 게시 → 너무 많음
- **개정**: Week 0 (사전 준비) + 6주 스파이크 또는 Stage 0 작업 컷다운

#### D3. typia 자체 빌드 전략 공백 (dogfooding vs 병행)
- typia repo는 자기 transformer를 자기 빌드에 쓴다 (tests/benchmark)
- packages/ttsc/ 추가 시 typia 자체 빌드는 ts-patch 유지?
- Option A: v14까지 ts-patch 유지 (안전, 2029 Q2까지 공존)
- Option B: Stage 2부터 내부 dogfooding (risk 큼, 버그 빨리 발견)
- **개정**: 17번에 "자기 빌드 정책" 섹션 추가

#### D4. pnpm workspace + Go binary 통합 미설계
- pnpm-workspace.yaml에 `packages/*` 포함됨
- `packages/ttsc/` 추가 시 pnpm install → Go 빌드 어떻게?
- optionalDependencies 방식의 pnpm v10 / npm v11 / yarn berry 동작 차이
- `postinstall` 훅에서 플랫폼 감지 + 해당 binary npm 패키지만 설치
- cross-compile CI (GitHub Actions matrix) 초기 구성
- **개정**: 17번에 "빌드·배포 파이프라인" 섹션 추가

#### D5. sourcemap 전략 미결정
- 경로 A/B 비교에서 "sourcemap 간단/복잡"만 언급, 구체 없음
- debugger·stack trace 실패 시 사용자 이탈
- ts-patch도 sourcemap 이슈 있음 (선례)
- **개정**: Stage 0 기술 결정 포인트 D5 추가

#### D11. IPC 기준이 timeline에 남아있음 (내부 모순)
- v2에서 "Node bridge 제거, IPC 오버헤드 소멸" 확정
- 그러나 `08-implementation-timeline.md:35` "M6 종료 결정: IPC 비용 < 50ms/파일..." 잔존
- `05-recommended-path.md:58` "IPC 비용 실측" 잔존
- `06-ttsc-specification.md:34,43` "Node child IPC" / "MessagePack stdio IPC" 잔존
- **개정**: v2 통합 모델에서 의미하는 "IPC"는 (a) ttsc binary spawn latency (b) tsgo 공식 API IPC 두 가지로 분리·재표기

#### D17. Stage 0 Week 단위 중단 기준 부재
- Kill criteria는 Phase 종료 후에만 정의 (Week 4)
- 중간 신호 (Week 2 shim 생성 실패, Week 3 end-to-end 막힘)에 대한 abort 기준 없음
- **개정**: 17번에 주간 go/no-go 게이트 추가

#### D12. Standard Schema createIs 확장 의미 재검토
- Standard Schema spec은 `validate(input) => SuccessResult | FailureResult` 필수
- `createIs<T>()`는 `(input) => boolean` 반환 — Standard Schema와 성질 다름
- createIs에 `~standard` 붙이려면 내부적으로 validate 로직 필요 → 사실상 createValidate 중복
- **개정**: 17번 병행 작업 중 "createIs ~standard 확장" 재평가 — createAssert는 throw 방식이라 wrap 가능

#### D18. Setup wizard v2 스펙 부재
- v12 → v13 자동 이주: typia.setup이 ts-patch 제거 + ttsc 설치 + scripts.prepare 수정
- `npx typia setup` 기존 코드 재활용 범위 불명확
- **개정**: 17번에 "setup v2" 초안 스펙 섹션 추가 (Stage 1~2 상세화)

---

### 🟡 Important (Stage 0 전/중 해결)

#### D2. Licensing 호환성 점검 공백
- typescript-go: Apache 2.0
- tsgolint (oxc-project): MIT — gen_shims 차용 가능
- tsgonest: MIT — emitter/metadata 구조 참고 가능
- effect-tsgo: 미확인 (Apache 2.0 추정)
- typia: MIT → 호환 OK
- **개정**: Stage 0 Week 1에 "외부 참조 LICENSE 확인" 작업 추가

#### D5 보강 (sourcemap)
- 위 Critical에서 다룸

#### D7. 사용자 설치 UX 상세 미작성
- `src/launcher/ttsc.js` 는 추적되는 JS launcher 로 유지하고, native binary 는 optional dependency 또는 local `native/ttsc-native` 에서 찾는다.
- Linux musl (Alpine) 호환 (glibc vs musl)
- Windows 권한 (executable bit, SmartScreen)
- `postinstall` fallback (optional dep 설치 실패 시 안내)
- **개정**: 17번에 "설치 시나리오" 섹션

#### D9. Stage 0 완료 조건 측정 불가능
- "shim으로 필요 API 80%+" — 전체 기준선이 없음
- "기술 가능성 ✓/✗" — 주관적
- **개정**: 숫자 기준으로 재작성:
  - `typia.is<T>()` 통과 케이스 수 ≥ 10 (primitive, array, object, union, tuple 등)
  - shim 수 실측 ≥ typia 사용 API 커버 80% (사전 목록화)
  - 빌드 속도 tsc+ts-patch 대비 ≥ 2× (측정치로)

#### D15. 수치 일관성 grep + 통일
- typia LOC: 일부 문서 50,665 (4 패키지), 일부 64,678 (9 패키지) 혼재
- Go version: 1.26 통일되나 1.27+ 제약은 9번 리스크에만 있음
- **개정**: 13-appendix-facts를 단일 진실원으로 명시, 다른 문서에서 참조만

#### D16. Stage 0 samchon 혼자 4주 예산 현실성
- 총 작업: 공식 입장문 (2주 draft) + scaffolding + submodule + gen_shims + metadata Go + end-to-end + 2 경로 prototype + benchmarks + 2 blog + Go 조력자 모집 + Stage 1 plan
- 혼자 주 25시간 × 4주 = 100시간 예산으로 실행 불가능
- **개정**:
  - 작업 중 일부를 Stage 0.5 (후속 2주)로 분할
  - 또는 병행 작업(blog, 입장문 게시)을 Stage 1 Week 1~2로 이월
  - 6주 스파이크로 현실화

#### D19. "ttsc" 이름 상표/가용성 미확인
- GitHub: `ttsc` 조직 존재 여부
- npm: `ttsc` 네임스페이스 OK (samchon 보유) — `ttsc` 단독 패키지 가용성 확인 필요
- Microsoft의 "tsc"와 명칭 혼동 / 상표 리스크
- 대안: `tgo`, `typigo`, `tso`, `typia-build`
- **개정**: Stage 0 Week 0 (사전 준비)에 이름 가용성·상표 체크 추가

---

### 🟢 Nice-to-have (차후 사이클)

#### D8. Go 조력자 모집 구체성 부족
- 채널: OpenCollective / GitHub Sponsors / Discord / Reddit / HackerNews
- 인센티브: 공동 저자 / 수익 배분 (AutoBE 연계) / 컨퍼런스 발표
- 선발 기준: Go 3년+ 경험, TypeScript 이해, OSS 기여 이력
- JD 초안
- **개정**: 11-communication-plan.md에 "Contributor recruitment" 섹션 보강

#### D10. 경쟁 구현 실측 비교 누락
- typical: Go MessagePack IPC 사용 (ttsc v1 초안과 유사한 모델)
- effect-tsgo: 5 Go hook 모듈 (etscheckerhooks, etslshooks 등) 재활용 가능성
- **개정**: 03-technical-foundations.md 모델 비교표에 실측 매트릭스 추가

#### D13. 입장문 발행 시점 재조정
- Week 1 draft → Week 4 발행 (Stage 0 결과와 함께)
- 조기 발행 시 Microsoft 측 반응 없을 경우 메시지 희석
- **개정**: 17번 Week 3 "공식 입장문 게시" → Week 4로 이동

#### D14. Microsoft 협상 채널 구체화
- Discussion #455, Issue #516 댓글
- andrewbranch, jakebailey Twitter/GitHub 직접 멘션
- RFC 제출 경로 (typescript-go PR 열기)
- typia의 사용 사례 (AutoBE, nestia) 로 압박
- **개정**: 11-communication-plan.md에 "Microsoft 관계" 확장

#### D20. tsgo upstream bump 정책
- Stage 0 동안 typescript-go가 release할 가능성
- pinning 주기: weekly check, monthly bump
- Breaking change 감지: gen_shims 실패 → 수동 대응
- **개정**: 17번에 "tsgo upstream 관리" 섹션

## 개정 적용 우선순위

### 즉시 반영 (17번 rewrite)
- D1, D3, D4, D5, D7, D9, D11, D12, D17, D18
- 17번이 Stage 0 실행 가이드이므로 모두 여기에

### 타 문서 개정
- D11: 08/05/06/08 IPC 용어 분리·재표기
- D15: 13 단일 진실원 재명시 + 타 문서 수치 참조만
- D2: 17 Week 0에 LICENSE 체크
- D16: 17 기간 6주로 확장
- D19: 17 Week 0 상표 체크

### Nice-to-have
- D8, D14: 11-communication-plan.md
- D10: 03-technical-foundations.md
- D20: 17, 12-governance.md

## 우려 사항 (해결 못 한 근본 리스크)

1. **Stage 0에서 Go 조력자 확보 실패 시** — 현재 계획에는 "Stage 2 범위 축소"뿐. samchon 혼자 3년은 번아웃 R8 확실 트리거. **대안**: AutoBE 수익 우선 검증 후 Stage 1 착수
2. **typescript-go의 Go 1.27 handshake 불응** — 현재 "협상" 추상. **대안**: effect-tsgo의 patch 모델을 fallback으로 Stage 0 Week 4에 동시 검증
3. **tsgonest 2027 Q2 NestJS 점유 50%+** — typia v13 preview가 타이밍 놓치면 방어 불가. **대안**: Stage 2 validators 집중 (json/llm 후순위)
4. **Standard Schema가 기대만큼 효과 없을 가능성** — Zod v4가 여전히 디팩토 유지 → typia 어댑터 출시해도 유입 저조 가능. **대안**: MCP/AI SDK별 직접 통합 패키지 (@typia/mcp 등) 동시 강화

## 한 줄

> **Stage 0 계획은 방향은 맞으나 주차별 패킹·자기 빌드·UX·측정 기준·중단 기준에 공백이 있다. 17번을 6주 스파이크로 재구성하고 10개 critical 결함을 반영하면 실행 가능한 무결 계획이 된다.**
