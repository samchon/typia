# 07. Remaining Questions

## 이미 닫힌 것

1. `ttsc` / `ttsx` 의 standalone product 정체성
2. typia 의 consumer 위치
3. preview 기본 설치 계약이 `@typescript/native-preview` + `@typia/ttsc` 라는 점
4. `ttsx` 의 기본 실행 모델이 `@typia/ttsc` host 재사용이라는 점
5. 기존 TypeScript transformer 를 TypeScript v7 native lane 에서 그대로 실행하는 것은 목표가 아니라는 점

## 아직 열려 있는 것

1. generic plugin contract 를 어디까지 public API 로 고정할지
2. Node-side adapter 가 사용할 serialized IR / diagnostics / emitted asset contract 를 어디까지 고정할지
3. stable `typescript@7` lane으로 setup 기본값을 언제 넘길지
4. browser/static-hosting compatibility lane 을 current product docs에서 어디까지 노출할지
5. nestia 같은 second consumer 가 필요로 하는 `@typia/core` equivalent API 를 어떤 패키지와 언어 경계로 제공할지
