# 01. nestia

현재 typia repo 기준으로 nestia에 주는 영향만 적는다.

## 현재 사실

- typia의 current transformer lane 은 `@typia/ttsc` + `typia/lib/transform` + Go native backend 다.
- `@typia/core` / `@typia/transform` TypeScript package 는 현재 typia 코드베이스에 없다.
- nestia가 legacy `@typia/core` 또는 TypeScript transformer 구현에 기대고 있다면 current typia lane 과 바로 맞지 않는다.

## 필요한 adapter boundary

nestia가 붙어야 할 표면은 다음 둘이다.

| 표면 | 용도 |
| --- | --- |
| `@typia/ttsc` CLI / JS API | build, check, transform orchestration |
| shared native/core API | nestia decorator 분석과 schema generation. 아직 public API 로 고정되지 않았다. |

## 현재 판단

- nestia decorator runtime 은 TypeScript/NestJS 영역에 남는다.
- build-time transformer logic 은 `ttsc` plugin/consumer 모델로 다시 맞춰야 한다.
- SDK/migrate 같은 generator 는 current typia native engine 과 연결할 별도 API 가 필요하다.

정확한 이식 일정은 이 저장소의 current fact 가 아니다.
