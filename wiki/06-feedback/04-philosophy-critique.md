# 04. Philosophy Critique

현재 기준의 비판만 남긴다.

## C1. compiler host cost

TypeScript 타입을 단일 진실원으로 삼는 대신 compiler host 가 필요하다.

## C2. dynamic schema 한계

compile time 에 타입이 있어야 한다. runtime 에 스키마가 바뀌는 시스템에는 맞지 않는다.

## C3. TypeScript boundary

다른 언어가 원천 schema 인 시스템에서는 typia의 type-first 모델을 바로 적용하기 어렵다.

## C4. native backend parity risk

Go native backend 가 legacy TypeScript transformer 와 완전히 같은 결과를 내야 한다. 이 parity 가 핵심 위험이다.

## C5. public contract 선택

`ttsc` plugin API 를 너무 넓히면 host 가 무거워지고, 너무 좁히면 second consumer 가 붙기 어렵다.
