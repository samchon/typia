# 03. Plugin Contract

## 목표

`ttsc` 는 plugin host 여야 하며, plugin author 가 TS / Go / mixed 중 어느 경로를 택해도 같은 contract 위에서 동작해야 한다.

## host 책임

- call-site inventory
- type/context handoff
- diagnostics surface
- rewrite plan application
- emitted asset 관리

## plugin 책임

- marker call 해석
- 타입 분석
- JS emit / asset emit
- plugin-specific diagnostics

## 언어 정책

- TS plugin: 공식 경로
- Go plugin: 공식 경로
- mixed plugin: 공식 경로

문서는 세 경로를 같은 급의 공식 경로로 서술한다.

## 공개 경계

public contract 구성 요소:

- serialized request / response
- rewrite plan
- emitted asset description
- diagnostic payload

implementation-private 예시:

- TS internal object shape
- Go internal struct layout
- typia-specific helper naming
