# 08. tsgo Master Plan

이 폴더는 `ttsc` / `ttsx` 를 **standalone general-purpose product** 로 정립한 계약과, 그 계약이 현재 typia repo 안에서 어디까지 실현되었는지를 함께 다룬다.

핵심 전제:

1. `ttsc` 는 standalone compiler adapter / plugin host 다.
2. `ttsx` 는 standalone runner 다.
3. typia는 `ttsc` / `ttsx` 위에 올라가는 첫 consumer 다.
4. TS plugin / Go plugin / mixed plugin 은 모두 1급이다.
5. 계획의 출발선은 standalone repo/package 다.

읽는 순서:

1. [01. Principles](01-principles.md)
2. [02. Products](02-products.md)
3. [03. Plugin Contract](03-plugin-contract.md)
4. [04. typia Consumer Plan](04-typia-consumer.md)
5. [05. Stage 0 Outcome](05-stage0-kickoff.md)
6. [06. Current Status & Next Steps](06-roadmap.md)
7. [07. Remaining Questions](07-open-questions.md)
8. [08. Current Product State](08-current-spike.md)
