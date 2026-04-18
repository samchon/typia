# 09. Risk Register — 15 리스크 + 완화 + Kill Criteria

> 이전 문서는 10 리스크만 다뤘음. [Audit 5](../09-audit/05-cycle5-decision-matrix.md) 지적한 5개 누락 추가.

## 리스크 테이블

| # | 리스크 | 가능성 | 영향 | 완화 | Kill trigger |
|---|---|---|---|---|---|
| R1 | Go 학습 곡선 | 중 | 중 | AI 페어링, 조력자 | 3개월 지연 시 |
| R2 | TS 50K LOC 폐기 저항 | 중 | 낮 | 단계적 포팅 (Phase 2~6) | — |
| R3 | tsgonest 시장 선점 | 높 | 크 | MVP 8-9개월 조기, LLM 차별 | NestJS 점유 60%+ |
| R4 | **Go linkname 1.27+ 제약** | 중 | 크 | typescript-go와 handshake 협약 | stdlib 제약 강화 |
| R5 | tsgo upstream 대규모 refactor | 중 | 중 | gen_shims 자동, 매일 CI smoke | 2주 이상 재작업 필요 |
| R6 | typia v12 버그픽스 재현 | 높 | 중 | test-typia-automated 전체 재실행 | diff 오류율 10%+ |
| R7 | 커뮤니티 Go 거부감 | 중 | 중 | npm i typia 투명 설치, 문서 | Reddit/X 부정 스레드 다수 |
| R8 | **samchon 번아웃** | 중 | **매우 크** | 조력자 + 재정 + AutoBE 연계 | 3개월 이상 생산성 -50% |
| R9 | Microsoft 공식 transformer API | 낮 | 중 | ttsc는 facade, 내부 교체 | IPC-only 출시 |
| R10 | Bug bash 초과 | 중 | 중 | CI 90%+, early alpha | v1.0 +6개월 연장 |
| **R11** | **Microsoft 적대 정책** | 낮 | **매우 크** | typescript-go 팀과 우호 관계 유지 | linkname 차단 공식화 |
| **R12** | **공식 API가 IPC-only** | 중 | **크** | ttsc Phase 1부터 IPC 설계 유지 | 공식 발표 |
| **R13** | **사용자 Go 바이너리 반발** | 중 | 중 | Windows 권한 문서, Apple notarize | 설치 실패 issues 다수 |
| **R14** | **바이너리 서명 운영 비용** | 확실 | 낮 | AutoBE 수익 또는 OpenCollective | 재정 난 |
| **R15** | **기여자 이탈 (nestia 등)** | 낮 | **크** | 사전 합의, 인센티브 | nestia 등이 fork 선언 |

## R8 samchon 번아웃 (가장 심각)

### 감지 신호
- 주간 작업 시간 감소 (정상 대비 -30% 이상)
- GitHub 커밋 빈도 절반 이하
- 이슈 응답 지연 2주 이상
- 공개 불만 표출

### 즉시 대응
1. 모든 Phase 일정 **-50% 리셋**
2. 핵심 우선순위만 (validators + json + llm) 유지
3. nestia·AutoBE·Agentica 중 1-2개 사업 우선순위 강등
4. OpenCollective 목표액 ↑ 공개 공지
5. 커뮤니티 기여자 pool 확대 (문서·테스트 중심)

## R3 tsgonest 시장 선점 (가장 임박)

### 감지 지표
- tsgonest GitHub stars 월 +30%+ 성장
- Reddit r/typescript, dev.to에 migration 후기 다수
- nestia issues에 "tsgonest로 전환" 언급 빈번
- NestJS 공식 채널 (Discord 등)에 tsgonest 추천

### 대응
1. **6개월 마다 시장 점유 실측** (단순 추정 금지)
2. 50% 초과 시 typia-go 개발 **2배 자원 투입**
3. typia 측도 `typia migrate --from tsgonest` 역방향 제공
4. LLM/Protobuf/범용 프레임워크 차별점 집중 마케팅

## R4 Go linkname 제약 (장기)

### 시나리오
- Go 1.27 release (2027~2028 예상)에서 `//go:linkname`에 handshake 강제 대상 확대
- typescript-go 프로젝트가 이를 opt-out 하지 않으면 ttsc/typia-go 깨짐

### 완화
1. typescript-go 팀과 **directive opt-in PR 제출** (ttsc 사용자 사례로)
2. 모든 사용 함수를 **공식 export 요청** (hand shake 대체)
3. 대안 경로: **cgo + FFI** (unsafe.Pointer 대체, 성능 저하 있음)
4. 최악: **Go 소스 mirror fork + export 추가 patch** (Effect-TS 모델로 fallback)

## R12 공식 API가 IPC-only인 경우

### 시나리오
- Microsoft가 2027~2028에 transformer API 출시
- 단, **IPC만 지원** (in-process 주입 불가)

### 대응
- ttsc 아키텍처가 **이미 IPC 기반** → 재설계 최소
- `ttscbridge`의 Go↔Node IPC를 Microsoft 공식 API 호출로 교체
- typia-go는 Microsoft 공식 API를 **단일 프로세스 내 직접 호출** 가능

## R13 사용자 Go 바이너리 반발

### 우려 사례
- Windows에서 .exe 실행 차단 (SmartScreen)
- `node_modules/.bin/` 바이너리 실행 권한 문제
- 일부 엔터프라이즈 환경의 바이너리 허용 정책
- "왜 TypeScript 도구가 Go 바이너리를 설치하나" 의심

### 완화
1. **Apple notarization + Windows code signing** 필수
2. 설치 시 안심 메시지 (tsgo도 Go 바이너리)
3. 기업용 허용 목록(allowlist) 문서화 (enterprise docs)
4. Fallback: Docker image (대기업 대응)

## R14 서명 운영 비용

연간 고정 비용:
- Apple Developer ID: **$99**
- Windows EV Code Signing: **$300~500** (시가)
- GitHub Actions 추가 빌드: **$300~500** (7 플랫폼 × 매 PR)
- **총 연 $700~1,100**

조달:
- AutoBE 상업화 수익 연결 (**실제 수익 측정 필요, 현재 미공개**)
- OpenCollective 후원 활성화
- Tixio 같은 sponsor 확대 (tsgonest도 이렇게 함)

## R15 기여자 이탈

### 감지 신호
- nestia, AutoBE, Agentica 저자의 공개 불만
- PR 참여 저하
- fork 선언

### 완화
1. **Phase 0 단계에서 주요 기여자와 합의** (nestia 저자 등)
2. 인센티브: 공동 저자 표기, 수익 배분 (AutoBE 연계)
3. 커뮤니케이션 투명성 (이 plan 공유, 피드백 수렴)

## Kill Criteria 종합

다음 중 하나 발생 시 **plan 전면 재검토**:

| 시점 | Kill trigger |
|---|---|
| 2026 Q3 | Phase 0 spike 실패 또는 IPC > 200ms |
| 2026 Q4 | ttsc Phase 1 일정 3개월 지연 |
| 2027 Q2 | ttsc v1.0 출시 실패 |
| 2027 Q4 | tsgonest NestJS 50%+ 시장 장악 |
| 2028 Q2 | typia-go MVP (v0.9 beta) 실패 |
| 2028 Q4 | samchon 번아웃 징후 |
| 2029 Q2 | typia-go v1.0 출시 실패 |

→ 다음 [10. 성공·실패 기준](10-success-criteria.md)
