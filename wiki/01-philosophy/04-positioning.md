# 04. Positioning

typia의 위치는 다음 네 축으로 설명된다.

| 축 | typia |
| --- | --- |
| 표현 | TypeScript type first |
| 실행 | compile-time code generation |
| 영역 | validator, JSON, LLM, protobuf, random |
| 비용 | compiler host 필요 |

## 다른 접근과의 차이

- Zod / Valibot / TypeBox: schema object first
- class-validator: decorator / runtime metadata
- Deepkit: runtime reflection
- typia: TypeScript type first + compile-time emit

## 현재 toolchain

- `ttsc`: compiler adapter / plugin host
- `ttsx`: runner
- `@typia/unplugin`: bundler adapter
- `typia/lib/transform`: typia native plugin entry

속도는 결과다. 핵심은 타입과 런타임 산출물 사이의 중복 표현을 없애는 것이다.
