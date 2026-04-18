# 01. Motivation — 왜 Go 포팅인가

## 다섯 가지 사실이 말하는 것

### 사실 1. tsgonest의 실존
[02-prior-art/08-tsgonest.md](../04-ttsc-design/02-prior-art/08-tsgonest.md) 증명:
- 72,200 LOC Go 코드로 이미 v0.13.5 (49 releases)
- `migrate` 명령이 typia/nestia 사용자 흡수 중
- NestJS drop-in replacement 자리매김

**함의**: samchon이 가만히 있으면 typia의 NestJS 시장이 2~3년 내 잠식됨.

### 사실 2. typical의 실존
[02-prior-art/07-typical.md](../04-ttsc-design/02-prior-art/07-typical.md):
- typia 사상(Pure TypeScript runtime safety)을 Go로 구현 가능 증명
- v0.3.1 신생이지만 활발 개발

**함의**: 옵션 C는 "이론"이 아니라 "이미 두 사람이 해본 것". 기술 위험 낮음.

### 사실 3. tsgolint의 shim 모델
[02-prior-art/06-tsgolint.md](../04-ttsc-design/02-prior-art/06-tsgolint.md):
- 15 shim 패키지 + 896 `go:linkname` = tsgo 네이티브 모든 API 접근
- patch 0개 — 유지보수 비용 최소

**함의**: Go 포팅 시 tsgo와 결합 문제가 해결됨. shim으로 모든 internal 접근 가능.

### 사실 4. ttsc(옵션 B)의 IPC 오버헤드 한계
typia의 MetadataFactory가 TypeChecker를 **수십 번 호출**함. 각 호출을 Node→Go IPC로 왕복하면:
- 함수당 10~50ms 지연
- 중대형 프로젝트 빌드 시간 체감 증가
- tsgo의 속도 이점을 상당 부분 상쇄

**함의**: 옵션 B는 안전하지만 tsgo 속도의 일부만 얻음. 장기적으론 옵션 C가 성능상 우월.

### 사실 5. 유지보수 언어 통합
옵션 B: TS 30K LOC + Go 5K LOC + Node bridge → 세 언어 경계 유지
옵션 C: Go 100~150K LOC 단일 → 언어 통합

**함의**: 장기 유지보수 부담은 C가 낮음 (언어 경계 없음).

## Go 포팅을 주저해야 할 이유도 있다

### 비용
- 개발 18~24 개월 (혼자면), 풀타임 가정
- 기존 TS 30K LOC 폐기 (심리적 저항)
- Go 스킬 학습·커뮤니티 이전

### 커뮤니티 리스크
- TypeScript 개발자 커뮤니티가 Go 기반 도구를 어떻게 볼지 (iffy)
- 기여자 풀 축소 가능
- "Pure TypeScript 철학인데 왜 Go?"라는 회의론

### 테스트 커버리지 재구축
- typia는 수년간 버그픽스 누적. Go 포팅 시 이 자산 재현 필요
- `tests/test-typia-automated` 의 168 structure × 40 테스트 재실행 체계 구축

## 그럼에도 Go 포팅인 이유 — 5가지 결정 축

### 축 1. 시장 방어
2년 안에 tsgonest가 NestJS 시장 장악할 것. typia가 지키려면 **동등 기술 수준으로 대응**해야 함. ttsc는 부족.

### 축 2. LLM 시대의 속도 요구
AutoBE/Agentica 같은 agentic LLM 시스템은 수천 개의 interface를 실시간 분석. 3× vs 10× 속도 차이가 user-facing latency에 직결.

### 축 3. Edge 런타임
Cloudflare Workers, Vercel Edge 같은 환경에서 Node 의존 제거는 중요. Go 바이너리는 WebAssembly 타겟도 가능 (typical이 이미 실험 중).

### 축 4. 사상의 **구현** 정합성
typia의 사상은 "사용자 관점에서 TS 한 번이면 끝". 구현이 JS/TS/Go 셋 섞인 상태 vs Go 단일 — 후자가 사상과 더 정합한다. "사용자는 한 번 쓰면 끝이고, 구현도 한 언어로 깨끗"이 더 강한 메시지.

### 축 5. 5년 관점
2030년에 TS 컴파일러는 Go가 당연. 그 시대의 "TS를 Go로 처리하는 전 생태계"에서 typia만 Node 기반이면 outlier. 미리 정착이 유리.

## 옵션 C만의 정당성

**ttsc(B)가 수비 전략이라면, typia-go(C)는 공격 전략**. 3가지 공격 무기:

1. **Go 네이티브 속도** — tsgonest 실측 10× tsc
2. **단일 바이너리 배포** — `npm i typia` 후 tsc/ts-patch/unplugin 아무것도 필요 없음
3. **tsgo와 동일 언어** — 타입 정보 전달 무손실

## Microsoft 방향과의 정합

Microsoft가 TS 컴파일러를 Go로 가져가는 방향은 명확. typia도 Go로 가면 같은 방향. 거꾸로 Node 기반 유지는 "Microsoft가 가는 길의 반대".

**공식 transformer API가 나와도 Go-native 도구가 우선 수용될 것** — language binding 오버헤드 없기 때문.

## 결론

### 옵션 C 채택 정당성
- 기술 가능성: 증명 완료 (typical, tsgonest)
- 시장 필요성: tsgonest 공세 대응
- 장기 포지셔닝: LLM·Edge·Microsoft 방향 모두 부합
- 사상 정합성: 사용자 불변, 구현 정리

### 옵션 C 채택 부담
- 1.5~2년 개발
- Go 스킬
- TS 자산 폐기

### 이 문서의 입장
> **옵션 C는 반드시 고려해야 한다. 단독 실행은 리스크가 크므로 옵션 D(B → C)가 안전. 혼자 작업이면 B+A 조합, 조력자 확보 시 D.**

→ 다음 [02. 범위 / 비목표](02-scope-and-non-goals.md)
