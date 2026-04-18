# 04. 사상에 대한 비판적 회고 — typia 사상의 빈틈

이 절은 [01-philosophy/](../01-philosophy/)에서 칭찬한 사상에 대한 **건강한 비판**이다. 사상을 사랑할수록 그 빈틈도 정직하게 봐야 한다.

## 비판 1. "Pure TypeScript"의 자기참조 — TS의 한계가 곧 typia의 한계

typia의 명제는 "TS 타입 = 진실"이다. 그러나 TS 타입 시스템이 모델링 못 하는 영역이 있다:

- **단위(unit) 시스템**: `Meter`와 `Foot`이 모두 `number`. typia는 `tags.Type<"int32">`까지는 가지만 `tags.Unit<"meter">`는 만들 수 있어도 dimensional analysis는 못 함
- **시간적 invariant**: "이 객체는 N초 후 만료"같은 시점 의존 검증
- **상태 머신**: type-state pattern은 TS로 표현 가능하지만 typia는 검증 시점에 그 상태가 어디인지 모름
- **다중 객체 간 invariant**: "user.id == post.authorId" 같은 cross-entity 제약

이 빈틈은 TS의 빈틈이고, typia가 채울 수 없다. **사상의 일관성을 위해 풀지 못하는 문제 클래스가 있다는 사실을 인정**할 필요가 있다.

→ 대안: typia가 "validate 후 추가 비즈니스 검증을 짧고 명확하게 쓰는 패턴"을 가이드. validate는 typia, business invariant는 사용자 함수.

## 비판 2. "타입 한 번"의 배신 — JSDoc과 brand의 공존

typia는 같은 의미를 두 가지 표현으로 받는다:

```ts
interface A {
  /** @minimum 0 @maximum 150 */
  age: number;
}
// vs
interface B {
  age: number & tags.Minimum<0> & tags.Maximum<150>;
}
```

이는 사용자 친화이지만 **사상의 순수성**을 약간 깬다 — "타입 한 번"이라는 명제에서 "타입의 한 가지 표현"이 둘이 됐다. 팀마다 컨벤션이 갈리면 코드베이스 안에서 두 스타일이 섞일 수 있다.

→ 정직한 인정: 두 표현 모두 TS 타입 시스템 안에 있어 typia 사상의 본질을 깨지 않는다. 그러나 **공식적으로 "권장 스타일"을 한쪽으로 정해 가이드**할 가치가 있다 (개인적으로는 brand가 더 IDE 친화).

## 비판 3. 자체 IR이 가져오는 변경 비용

`MetadataSchema`가 typia의 진짜 표준이라는 강점은 동시에 약점이다:
- 이 IR을 바꾸면 모든 Programmer가 영향받음
- 새 표준(예: JSON Schema 2020-12 newer features)을 표현하려면 IR 확장이 필요
- IR 자체가 **typia 내부 ABI** — semver-major가 자주 발생할 위험

→ 완화: IR 변경 정책을 명시 (semver-major만, deprecation 1버전 유지 등). 외부에는 안정 ABI를 유지.

## 비판 4. "0 외부 런타임"의 과장

typia의 마케팅 중 하나가 "0 외부 런타임 의존"이다. 그러나 사실은:
- `_isFormatEmail`, `_isFormatUuid`, `TypeGuardError`, `_ProtobufWriter` 등 **타입에 따라 외부 헬퍼 import**
- emit된 코드가 typia 라이브러리를 import하지 않는다는 의미일 뿐
- bundle size를 진짜 0으로 보면 안 됨

→ 정직한 표현: "최소한의 타입별 헬퍼만 import (수 KB)" 가 정확. 그래도 zod/valibot 대비 **여전히 작다**는 비교가 사실에 맞음.

## 비판 5. tsgo 대응 — 사상의 시험대

이 부분은 사상의 진짜 시험대다. 두 갈래의 길:

**길 A (사상 고수)**: tsgo의 IPC API를 받아들여 새 transformer 어댑터를 만든다. 사상 변경 없음. 시간이 오래 걸리고 작업량 큼. 그 동안 신규 사용자는 TS 6.x에 잔류.

**길 B (사상 일부 양보)**: post-compile codegen 모델 — 사용자가 `interface`를 작성하고 `typia generate` 명령으로 별도 파일에 검증 함수를 emit. 빌드 통합 마찰 ↓, 사상 일부 양보 (코드가 두 파일).

길 B가 신규 사용자에게 더 친근하지만 사상의 핵심("한 줄 사용")을 약간 깬다. **이 결정이 향후 1~2년 typia의 정체성을 결정**한다.

→ 개인 의견: 길 A를 메인으로 하되, **길 B를 보조 모드**로 함께 제공. "transformer 못 쓰는 환경"에서도 typia를 쓰도록. 이는 사상 양보가 아니라 **사상의 적용 범위 확장**.

## 비판 6. 사상의 외부 노출 부족

typia 코드와 문서에는 사상이 흠뻑 배어있지만, **외부 커뮤니티는 typia를 "빠른 zod 대안"으로만 인식**하는 경우가 많다. (벤치마크 차트가 가장 자주 인용됨)

원인:
- 홈페이지 첫 인상이 속도 → 사상 인지가 늦음
- "Pure TypeScript" 사상 페이지가 docs/pure에 묻혀 있음 (홈에서 1 클릭 거리지만 노출 약함)
- 컨퍼런스 발표 / 팟캐스트 / 블로그가 부족 (samchon님 본인 블로그 외)

→ "사상 자체"를 외부에 마케팅. 발표·인터뷰·게스트 포스트.

## 비판 7. AI 시대의 사상 재정렬

LLM/agentic 시대에 typia의 사상이 진화해야 할 부분:

- **Type-first가 vibe coding과 자연스럽게 맞물린다**는 메시지 — Cursor/Claude Code가 interface만 쓰면 typia가 검증·LLM·랜덤 다 해결
- AutoBE/Agentica 사례를 typia 자체 마케팅에 통합 — 현재는 별도 프로젝트로 분리되어 typia가 가진 진짜 경쟁점이 묻힘
- "AI가 코드를 쓰는 시대의 검증 라이브러리는 type-first여야 한다"는 thesis를 만들 수 있음

→ 사상의 새 챕터: "Pure TypeScript in the Age of AI Code Generation".

## 비판 8. 컨트리뷰션 진입 장벽

typia의 가치는 사상의 일관성에서 오지만, 그 일관성이 **한 사람(samchon)의 비전**에 강하게 의존한다. 이는:

- 강점: 비전 흐려지지 않음
- 약점: bus factor 낮음, 외부 컨트리뷰션이 사상 동기화에 시간 걸림

→ 보완:
- 사상을 코드로 명시 (이 wiki 같은 문서가 그 시도)
- "사상 review checklist" — PR이 사상에 맞는지 자동 점검 가이드
- 두 번째 핵심 컨트리뷰터 키우기 (멘토링)

## 종합 — 사상의 진짜 강함은 비판을 받아도 흔들리지 않는 것

위 8개 비판은 모두 "사상이 틀렸다"가 아니라 **"사상의 적용에 빈틈이 있다"** 이다. typia 사상 자체는 견고하다. 문제는 사상의 외연(사용 범위, 표현, 마케팅, 기술 환경 변화 대응)이다.

가장 중요한 결론:
> **"사상을 양보하지 않으면서 사상의 적용 범위를 넓히는 것"** — 이게 typia의 다음 1~2년 핵심 과제.

구체적으로:
1. Standard Schema 어댑터 (사상 양보 0, 적용 범위 +50%)
2. unplugin 1급화 (사상 양보 0, 채택 마찰 ↓)
3. tsgo 대응 (사상 양보 0, 미래 생존)
4. AI 시대 사상 재정렬 (사상 확장, 새 메시지)

이 네 가지가 잘 풀리면 typia는 다음 5년도 안전하다. 풀리지 않으면 사상은 살아있어도 사용자가 옮겨간다 — OSS의 가장 슬픈 시나리오.

→ 다음 [07-strategy/](../07-strategy/) 에서 tsgo 대응이 가장 시급하므로 별도 chapter로.
