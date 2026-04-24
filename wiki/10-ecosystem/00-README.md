# 10. Ecosystem

현재 repo 기준으로 downstream 영향만 적는다.

## current fact

- typia는 `@typia/ttsc` / `@typia/ttsx` 전환을 repo 안에 구현했다.
- typia native backend 는 Go 로 존재한다.
- `@typia/core` / `@typia/transform` TypeScript package 는 현재 코드베이스에 없다.
- `typia/lib/transform` 은 native plugin entry 다.

## downstream meaning

| project | 영향 |
| --- | --- |
| nestia | legacy transformer 를 current `ttsc` contract 위로 다시 맞춰야 한다. |
| agentica | `typia.llm.application()` surface 를 주로 소비하므로 public API 변화는 작다. |
| autobe | typia/agentica 결과물을 소비하므로 compiler host 변화는 간접 영향이다. |

## 읽을 문서

- [01-nestia-and-tsgo.md](01-nestia-and-tsgo.md)
- [02-agentica.md](02-agentica.md)
- [03-autobe.md](03-autobe.md)
- [04-philosophy-pyramid.md](04-philosophy-pyramid.md)
- [05-integrated-tsgo-transition.md](05-integrated-tsgo-transition.md)

나머지 문서는 downstream planning note 로 읽는다. 현재 typia 구현 사실과 충돌하면 현재 구현을 우선한다.
