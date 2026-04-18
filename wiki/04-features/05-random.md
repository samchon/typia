# 05. Random Generator

## 함수

```ts
typia.random<T>(g?: Partial<IRandomGenerator>): T;
typia.createRandom<T>(g?: Partial<IRandomGenerator>): () => T;
```

타입에서 **그 타입에 맞는 무작위 인스턴스**를 생성. 테스트 데이터, fuzzing, demo data, LLM training data 등에 사용.

## 예

```ts
interface Member {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number & tags.Type<"uint32"> & tags.Maximum<150>;
  hobbies: Array<string> & tags.MinItems<1> & tags.MaxItems<5>;
}

const m = typia.random<Member>();
// → { id: "f3a6...", email: "x@y.com", age: 42, hobbies: ["a", "b"] }
```

태그를 **존중**한다 — Format은 RandExp로 패턴 만족하는 문자열, Maximum은 상한 이하 숫자, MinItems는 배열 최소 길이 등.

## RandomProgrammer (`packages/core/src/programmers/RandomProgrammer.ts`, ~1200 LOC)

타입을 분석해 각 노드별 generator 호출 코드를 emit:

```js
const random = (gen = defaultGen) => ({
  id: gen.uuid(),
  email: gen.email(),
  age: gen.integer(0, 150),
  hobbies: gen.array(() => gen.string(), gen.integer(1, 5)),
});
```

- gen은 `IRandomGenerator` 인터페이스
- 사용자가 자기 generator를 주입 가능 (RNG seed 지정, mock 등)

## IRandomGenerator (`packages/interface/src/utils/IRandomGenerator.ts`)

기본 메소드:
```ts
interface IRandomGenerator {
  boolean(): boolean;
  integer(min?, max?): number;
  number(min?, max?): number;
  bigint(min?, max?): bigint;
  string(length?): string;
  pattern(regex): string;
  email(): string;
  uuid(): string;
  ipv4(), ipv6(), uri(), date(), datetime(), ...
  array<T>(generator, length): T[];
  // ...
}
```

기본 구현은 `@typia/utils`의 `RandomGenerator` (Math.random + RandExp).

## 사용자 generator 주입 — Faker/seedrandom 통합

```ts
import { faker } from "@faker-js/faker";

const m = typia.random<Member>({
  email: () => faker.internet.email(),
  string: (len) => faker.lorem.words(len ?? 5),
});
```

→ Faker 같은 도메인 데이터 라이브러리와 결합 가능.

## 사용 패턴

1. **테스트 데이터** — Jest/Vitest fixture
2. **Storybook props** — UI 컴포넌트 개발 시 임의 데이터
3. **API 모킹** — typia.random + msw
4. **LLM 학습 데이터** — typia.random + LLM 호출 → 합성 dataset

## 약점

- **seed 직접 지원 안 함** — 사용자 generator로 우회
- **constraint solver 아님** — `Minimum<10> & Maximum<5>` 같은 모순은 그냥 무한 루프 또는 잘못된 값
- **string Pattern 복잡할 때 RandExp 한계** — `(?=...)` lookahead 일부 미지원

## 강점

- 타입에서 즉시 의미 있는 랜덤 데이터 — fixture 작성 비용 0
- `tags.*` 제약을 모두 존중 → 검증을 통과하는 데이터 보장
- 사용자 generator 주입으로 도메인 데이터(이름·도시·전화번호) 통합
