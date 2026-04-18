# 05. Go Port Design — ⚠️ 역사 문서 (Archived)

> **이 폴더는 "옵션 C (typia-go)" 설계 이력이다.** 당시에는 "옵션 중 선택" 프레임이었으나, 사용자가 **"옵션 C가 유일"**임을 확정하면서 이 문서의 전제(옵션 비교)가 폐기됨.
>
> **최신 typia-go 설계: [../../08-tsgo-master-plan/07-typia-go-specification.md](../../08-tsgo-master-plan/07-typia-go-specification.md)**
>
> 이 폴더의 **상세 기술 내용(TS↔Go 매핑, namespace별 이식 우선순위, 리스크 등)은 여전히 참고 가치 있음**. 다만 "옵션 C 선택 시" 같은 프레이밍은 무시.

---

# 원본 제목: Go Port Design — typia 자체를 Go로 포팅 (옵션 C)

> 이 폴더는 **옵션 C 선택 시** typia core/transform을 Go로 재구현하는 상세 설계 문서. prior art로 tsgonest(이미 구현 중)와 typical(PoC)을 참조.

## 읽기 순서

1. [01-motivation.md](01-motivation.md) — 왜 Go 포팅인가
2. [02-scope-and-non-goals.md](02-scope-and-non-goals.md) — 포팅 범위 / 명시적 비목표
3. [03-architecture.md](03-architecture.md) — 3-layer Go 아키텍처
4. [04-mapping-typia-core-to-go.md](04-mapping-typia-core-to-go.md) — TS 코드 ↔ Go 코드 1:1 대응
5. [05-mapping-features-to-go.md](05-mapping-features-to-go.md) — 13 namespace 각각 이식
6. [06-implementation-plan.md](06-implementation-plan.md) — 18~24 개월 로드맵
7. [07-risks.md](07-risks.md) — Go 포팅 특유 리스크

## 한 줄 정의

> **typia-go = typia의 metadata schema + 13개 programmer + 모든 기능을 Go로 재구현하고, typescript-go와 shim으로 결합한 단일 Go 바이너리.** tsgonest 모델을 **모든 13 namespace**로 확장한 버전.

## 이 설계가 가정하는 조건

- samchon이 Go 스킬 습득 또는 Go 조력자 1인 이상
- 18~24 개월 집중 개발 가능
- 기존 typia TS core (30K LOC)는 **의도적 폐기**
- 사용자 API (`typia.is<T>(input)`)는 **완전 보존**

## 옵션 D와의 관계

이 설계서는 **옵션 C 단독 실행** 또는 **옵션 D의 후반부**에 공통으로 적용.
D 시나리오에서는 Year 1에 ttsc로 시간 벌고, Year 2-3에 이 설계로 이주.
