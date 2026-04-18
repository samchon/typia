# 04. Protocol Buffer

## 명제

> "한 TypeScript 타입 = 한 .proto 메시지 = encode/decode 함수 한 쌍."

다른 라이브러리는 .proto 작성 → protoc → TS 코드 생성이라는 **3단계**를 거치지만, typia는 타입 한 줄에서 모두 도출.

## 3개 함수

| 함수 | 출력 |
|---|---|
| `typia.protobuf.message<T>()` | `string` (.proto IDL) |
| `typia.protobuf.encode<T>(value)` | `Uint8Array` |
| `typia.protobuf.decode<T>(buffer)` | `T` |
| `typia.protobuf.assertEncode<T>(value)` | 검증 후 encode |
| `typia.protobuf.assertDecode<T>(buffer)` | decode 후 검증 |

## .proto 자동 생성 예

```ts
interface Member {
  id: string & tags.Format<"uuid">;
  email: string;
  age: number & tags.Type<"uint32">;
}

console.log(typia.protobuf.message<Member>());
```
↓
```proto
syntax = "proto3";
message Member {
  required string id = 1;
  required string email = 2;
  required uint32 age = 3;
}
```

타입 → IDL이 양방향. typia 사용자는 IDL을 직접 쓰지 않는다.

## encode/decode 코드의 모양

`packages/core/src/programmers/protobuf/ProtobufEncodeProgrammer.ts` + `ProtobufDecodeProgrammer.ts`.

emit되는 코드:
```js
const encode = (input) => {
  const writer = new _ProtobufWriter();
  writer.uint32(10); writer.string(input.id);     // tag 1, wire type LEN
  writer.uint32(18); writer.string(input.email);   // tag 2, wire type LEN
  writer.uint32(24); writer.uint32(input.age);     // tag 3, wire type VARIANT
  return writer.buffer();
};
```

- 모든 wire format이 **inline** — typia가 타입 구조를 알기 때문
- `_ProtobufWriter`, `_ProtobufReader`, `_ProtobufSizer`는 `@typia/utils`의 런타임 헬퍼

## ProtobufWire (`packages/interface/src/protobuf/ProtobufWire.ts`)

4개 wire type:
- `VARIANT` (0) — int/uint/bool
- `I64` (1) — 8-byte fixed
- `LEN` (2) — string/bytes/embedded message
- `I32` (5) — 4-byte fixed

각 atomic 타입이 어떤 wire에 매핑되는지 `tags.Type<"...">` 로 결정 (`int32`/`uint32`/`int64`/`uint64`/`sint32`/`sint64`/`fixed32`/`fixed64`/`sfixed32`/`sfixed64`/`float`/`double`).

## 타입 → proto3 매핑 규칙

| TS 타입 | proto3 |
|---|---|
| `string` | `string` |
| `number & Type<"int32">` | `int32` |
| `number & Type<"uint32">` | `uint32` |
| `number` (default) | `double` |
| `bigint` | `int64` |
| `Uint8Array` | `bytes` |
| `Date` | timestamp encoding (long 변환) |
| `Array<T>` | `repeated T` |
| union `A | B` | `oneof` |
| recursive type | nested message |

## 약점

- **proto2 미지원** — proto3만
- **gRPC 서비스 정의는 따로 필요** — typia는 메시지만, 서비스 IDL은 사용자 작성
- **field option 일부 미지원** (deprecated, packed=false 강제 등 세밀 옵션)
- **proto package/import 관리 직접** — 다중 .proto 분리 시 사용자가 조립

## 강점

- 타입 작성하면 .proto가 따라 나옴 → **단일 진실원** 유지
- encode/decode 모두 inline → 매우 빠름
- assertEncode/assertDecode로 wire format 정합성까지 보장

## 사용 시나리오

- WebSocket 바이너리 프로토콜
- gRPC-web (typia가 메시지만 만들고 서비스는 grpc-web으로)
- 모바일/IoT 처럼 사이즈 절약 중요한 곳
- IDL을 별도로 유지하기 싫은 단일 TS 풀스택 팀
