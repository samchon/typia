# 03. Plugin Contract

## 목표

`ttsc` 는 plugin host 여야 하며, plugin author 는 native backend, serialized IR, emitted asset, diagnostics payload 위에서 동작해야 한다.

이 계약은 TypeScript v5/v6 시대의 in-process transformer API를 재현하지 않는다.
`ts.Program`, `ts.TypeChecker`, `ts.NodeFactory`, `TransformationContext`,
`TransformerFactory<SourceFile>` 를 JavaScript plugin 에 그대로 넘기는 호환 모드는
TypeScript v7 native lane 의 목표가 아니다.

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

- Go native plugin: 공식 경로
- mixed plugin: Node-side manifest/config + native backend 조합
- TS-side plugin: JS text post-processing 또는 serialized IR client 로 제한

문서는 세 경로를 같은 급의 legacy transformer 호환으로 서술하지 않는다.

TS-side code 가 존재할 수는 있다. 다만 그 의미는 `typescript` npm package 의
compiler object 를 받아 AST 를 직접 mutate 하는 기존 transformer 가 아니라,
`ttsc` host 가 제공한 manifest, IR, emitted text, diagnostics 를 다루는 adapter 다.

## 공개 경계

public contract 구성 요소:

- serialized request / response
- rewrite plan
- emitted asset description
- diagnostic payload
- optional text-output transform payload

implementation-private 예시:

- TS internal object shape
- Go internal struct layout
- typia-specific helper naming
- typescript-go internal `ast` / `checker` struct pointer
