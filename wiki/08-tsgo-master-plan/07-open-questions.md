# 07. Open Questions

## 아직 열려 있는 것

1. plugin transport 를 IPC 로 둘지, file contract 로 둘지, hybrid 로 둘지
2. TS plugin runtime 을 Node child 로 둘지, 공식 JS client 로 둘지
3. Go plugin ABI 를 어떻게 안정화할지
4. `ttsx` 의 ESM loader 전략을 어떻게 잡을지

## 이미 확정된 것

1. `ttsc` / `ttsx` 의 standalone product 정체성
2. TS / Go / mixed plugin 의 동등한 공식 지위
3. typia 의 consumer 위치
4. `typia setup` 의 기본 설치 계약: preview 기간 `@typescript/native-preview` + `@typia/ttsc`, `@typia/ttsx` 는 별도 optional runner
