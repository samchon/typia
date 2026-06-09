# typia 신버전 실행 후보 로드맵, 2026-06-08

## 범위

이 문서는 2026-06-08 현재 사용자가 지정한 신버전 실행 후보만 다룬다.

닫힌 이슈, 병합 PR로 해결된 이슈, 이번 지시에서 거절한 이슈, 이번 범위 밖 항목은 이 문서에 남기지 않는다.

각 이슈는 다음 세션이 바로 구현을 이어받을 수 있도록 별도 상세 문서에 소스 위치, 위험 지점, 테스트 행렬, 검증 명령을 적는다.

## 실행 후보

- [#1757 Custom Tag with target "object" does not emit its validate code](./issues/1757-object-custom-tag-validate.md): 구현 중. 객체 대상 `TagBase.validate`가 런타임 validator 생성물에 반영되지 않는 문제다.

## 공통 검증 원칙

구현 전에는 실패하는 최소 회귀 테스트를 먼저 만든다.

타입 레벨 변경은 runtime pass만으로 검증하지 않는다. `ttsc` compile-time assertion과 `@ts-expect-error` negative case를 함께 둔다.

transformer 또는 generated code 변경은 최소 Go 단위 테스트와 TS package-level test를 같이 둔다.

schema 변경은 `typia.json`, `typia.llm.schema`, `typia.llm.parameters`, `@typia/utils` validator 중 어느 surface가 영향을 받는지 분리해서 snapshot을 둔다.

패키징 변경은 소스 package.json만 보고 판단하지 않는다. 반드시 빌드 산출물 또는 packed package를 기준으로 재현한다.
