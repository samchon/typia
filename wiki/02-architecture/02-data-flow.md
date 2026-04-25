# 02. Data Flow

예시:

```ts
const ok = typia.is<Member>(input);
```

## 1. plugin load

`ttsc` 는 `tsconfig.json` 의 plugin entry 를 읽는다.

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```

`typia/lib/transform` 은 `native.mode = "typia"` 와 native backend launcher 를 반환한다.

## 2. program load

`ttsc` 는 TypeScript-Go 로 project 를 읽는다.

- `tsconfig.json` 파싱
- `extends` 처리
- source file load
- type checker 생성
- emit 준비

잘못된 tsconfig 는 stderr diagnostic 과 non-zero exit 로 드러난다.

## 3. call-site collection

`packages/transform/native` 는 source file 을 순회하며 typia 호출을 찾는다.

- `typia.is<T>()`
- `typia.assert<T>()`
- `typia.json.stringify<T>()`
- `typia.llm.application<T>()`
- 기타 typia public API marker

## 4. analysis / emit

`packages/core/native` 가 TypeScript-Go checker/type 정보를 받아 typia metadata 를 만든다.

```
type information
  -> metadata.Schema
  -> JavaScript expression string
```

## 5. rewrite

`../ttsc/packages/ttsc/driver` 는 TypeScript-Go 가 emit 한 JS 에 rewrite set 을 적용한다.

결과:

```ts
typia.is<Member>(input);
```

가 런타임 validator expression 으로 교체된다.
