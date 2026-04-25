# packages/core/native — Go analyzer/emitter

> 위치: `packages/core/native`

`@typia/core` TypeScript 패키지는 제거되었다. 현재 남은 `packages/core`의 실질 구현은 Go native backend이며, `packages/transform/native`가 typia call site를 넘기면 여기서 타입 메타데이터 분석과 JavaScript 코드 생성을 수행한다.

## 책임

- `analyzer/` — tsgo checker/type/type node를 `metadata.Schema` 로 변환
- `metadata/` — typia native IR
- `emitter/` — `metadata.Schema` 를 validator/stringifier/schema/random/protobuf/llm JavaScript expression 문자열로 변환

## 주요 흐름

```
shimchecker.Type + ast.Node
   ↓ analyzer.New(...).WalkWithTypeNode(...)
metadata.Schema
   ↓ emitter
JavaScript expression string
```

## 유지되는 계약

- 사용자는 계속 `typia.is<T>()`, `typia.json.stringify<T>()` 같은 public API를 호출한다.
- TypeScript transformer AST factory는 더 이상 사용하지 않는다.
- rewrite 결과는 `../ttsc/packages/ttsc/driver`가 emitted JS 텍스트에 적용한다.

## 남은 참고성 주석

Go 파일 일부에는 과거 TypeScript 구현 파일명이 주석으로 남아 있다. 이는 포팅 출처를 설명하는 참고 주석이며, 현재 빌드 의존성은 아니다.

→ 다음 [03-transform.md](03-transform.md)
