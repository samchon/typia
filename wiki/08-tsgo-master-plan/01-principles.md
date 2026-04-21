# 01. Principles

## 하드 룰

1. `ttsc` 와 `ttsx` 는 처음부터 typia 바깥 product 다.
2. typia는 첫 consumer 이자 integration case 다.
3. public contract 는 TS / Go / mixed 구현을 같은 급으로 수용한다.
4. TS plugin 과 Go plugin 은 같은 급의 공식 경로다.
5. current spike 구현은 standalone product 를 향한 reference evidence 로 읽는다.
6. packaging, naming, repo boundary 도 day-one 부터 standalone 기준으로 잡는다.

## 공식 표현

- "`ttsc` 는 standalone host 다"
- "`ttsx` 는 standalone runner 다"
- "`typia는 첫 consumer 다`"
- "`TS plugin / Go plugin / mixed plugin 은 모두 공식 경로다`"
- "`분리는 출발 조건이다`"

## 한 줄 결론

> **분리는 미래 단계가 아니라 출발 조건이다.**
