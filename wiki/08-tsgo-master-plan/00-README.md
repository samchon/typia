# 08. tsgo Master Plan

이 폴더는 현재 구현 기준의 `ttsc` / `ttsx` 계약만 적는다.

## 현재 결론

- `ttsc` 는 standalone compiler adapter / plugin host 다.
- `ttsx` 는 `ttsc` host 를 재사용하는 standalone runner 다.
- typia는 첫 consumer 다.
- TypeScript v7 native lane 에서 legacy `ts.Program` transformer 호환을 재현하지 않는다.
- plugin contract 는 native backend, emitted text, diagnostics, asset output 중심이다.

## 현재 코드 위치

| 영역 | 위치 |
| --- | --- |
| `ttsc` JS API / CLI | `toolchain/ttsc/src`, `toolchain/ttsc/cmd/ttsc` |
| `ttsx` runner | `toolchain/ttsx/src` |
| typia plugin entry | `packages/typia/src/transform.ts` |
| typia native backend | `packages/core/native`, `packages/transform/native` |
| setup wizard | `packages/typia/src/executable/TypiaSetupWizard.ts` |

## 읽는 순서

1. [01. Principles](01-principles.md)
2. [02. Products](02-products.md)
3. [03. Plugin Contract](03-plugin-contract.md)
4. [04. typia Consumer](04-typia-consumer.md)
5. [05. Current Outcome](05-stage0-kickoff.md)
6. [06. Current Gaps](06-roadmap.md)
7. [07. Open Questions](07-open-questions.md)
8. [08. Product State](08-current-spike.md)
9. [09. References](09-references.md)
