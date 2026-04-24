# 02. Pure TypeScript

여기서 "Pure TypeScript" 는 별도 schema object 를 작성하지 않는다는 뜻이다.

```ts
interface Member {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
}

typia.is<Member>(input);
typia.json.stringify<Member>(member);
typia.llm.application<Service>();
```

## 현재 해석

| 축 | 의미 |
| --- | --- |
| 표현 | TypeScript 타입이 출발점이다. |
| 시간 | compile time 에 전용 JS 코드를 만든다. |
| IR | typia metadata 를 거쳐 여러 산출물을 만든다. |
| 실행 | runtime 에 schema interpreter 를 돌리지 않는다. |

## 현재 구현

`packages/core/native/metadata` 가 IR 이다.

```
TypeScript-Go type/checker information
  -> metadata.Schema
  -> emitter
  -> JS expression
```

legacy TypeScript `MetadataFactory` / `Programmer` 구현은 현재 코드베이스의 기본 변환 경로가 아니다.

## 한계

- compile time 에 타입이 알아야 한다.
- runtime dynamic schema 에는 맞지 않는다.
- 다른 언어가 원천 schema 인 시스템에서는 별도 변환 경계가 필요하다.
