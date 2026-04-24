# 08. tsgo Master Plan

이 폴더는 `ttsc` / `ttsx` 를 **standalone general-purpose product** 로 정립한 계약과, 그 계약이 현재 typia repo 안에서 어디까지 실현되었는지를 함께 다룬다.

핵심 전제:

1. `ttsc` 는 standalone compiler adapter / plugin host 다.
2. `ttsx` 는 standalone runner 다.
3. typia는 `ttsc` / `ttsx` 위에 올라가는 첫 consumer 다.
4. TypeScript v7 native lane의 plugin 은 native backend 또는 IR/text-output bridge 로 설계한다.
5. 계획의 출발선은 standalone repo/package 다.

중요한 방향 전환:

- 기존 TypeScript v5/v6 transformer (`ts.Program` / `ts.TypeChecker` /
  `ts.NodeFactory` / `TransformerFactory`) 를 `typescript-go` 위에서 그대로 실행하는
  것은 목표가 아니다.
- `typescript-go` 는 기존 JS compiler object graph 를 in-process 로 제공하지 않고,
  공식 API 방향도 IPC 기반 curated API 이다.
- 따라서 `ttsc` 는 legacy transformer compatibility host 가 아니라 native
  compiler adapter / plugin host 다.
- legacy transformer 가 필요한 사용자는 그 transformer 를 포함한 구버전
  TypeScript/typia lane 을 사용한다.

읽는 순서:

1. [01. Principles](01-principles.md)
2. [02. Products](02-products.md)
3. [03. Plugin Contract](03-plugin-contract.md)
4. [04. typia Consumer Plan](04-typia-consumer.md)
5. [05. Stage 0 Outcome](05-stage0-kickoff.md)
6. [06. Current Status & Next Steps](06-roadmap.md)
7. [07. Remaining Questions](07-open-questions.md)
8. [08. Current Product State](08-current-spike.md)
