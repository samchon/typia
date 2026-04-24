# 08. Current Product State

현재 typia repo 안의 구현은 더 이상 단순 spike 만은 아니다.

- `@typia/ttsc` / `@typia/ttsx` package 가 실제 workspace product 로 존재한다.
- typia 는 그 host / runner 를 소비하는 첫 consumer 로 동작한다.
- 다만 browser playground, 일부 compatibility entry, future stable lane 같은 주변부는 아직 과도기 strata 를 남긴다.

문서 해석 기준:

- standalone product 중심
- typia consumer 중심
- 현재 구현과 이상 사이의 편차 명시
