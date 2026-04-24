# 06. Current Status & Next Steps

## 현재 상태

1. `ttsc` 는 standalone compiler adapter / plugin host 로 정체성이 확정되었다.
2. `ttsx` 는 standalone runner 로 분리되었다.
3. typia는 `@typia/ttsc` / `@typia/ttsx` 를 소비하는 첫 consumer 로 정렬되었다.
4. 기본 setup 계약은 preview compiler + `@typia/ttsc` + `typia/lib/transform` 으로 이미 전환되었다.

## 다음 단계

### 1. host / runner hardening

- native plugin SDK 정리
- diagnostics / manifest / watch UX 정제
- native host와 JS-side text/IR adapter 경계 정제
- legacy `ts.Program` transformer 호환을 목표 목록에서 제거

### 2. consumer hardening

- typia 문서와 ecosystem 문서 정합성 유지
- `typia setup` 의 stable lane 전환 시점 정리
- browser compatibility lane 과 native lane 의 역할 분리
- 구버전 TypeScript transformer 가 필요한 사용자는 구버전 typia/TypeScript lane 으로 안내

### 3. second consumer

- typia 밖의 실제 consumer 에서 `ttsc` contract 검증
- consumer 별 adapter boundary를 source-backed contract 로 축소
- nestia 같은 consumer 가 필요한 `@typia/core` equivalent surface 를 IR/API 로 재설계

## 성공 모습

`ttsc` / `ttsx` 는 typia 없이도 설명되고, typia는 그 위의 강력한 consumer 로만 설명된다.
