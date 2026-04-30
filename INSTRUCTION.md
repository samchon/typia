# 미션: typia TypeScript -> Go 포팅

상위 폴더 `../typia`의 TypeScript 프로젝트를 Go로 포팅한다. 목표는 typia 본래 기능이 Go 환경에서 동일하게 동작하게 만드는 것이다.

본 미션의 기준 원본은 다음 두 소스 트리다.

- `../typia/packages/core/src`
- `../typia/packages/transform/src`

`../typia/packages/typia` 쪽 transformer 연결부는 위 두 트리의 포팅이 충분히 진행된 뒤, 실제 연결에 필요한 범위만 추가로 확인한다.

## 핵심 전략

**TS 원본 통복사 후 파일 단위 변환**
- 처음부터 빈 Go 파일을 새로 설계하지 않는다.
- 먼저 `../typia`의 TS 소스 코드를 `packages/typia/native/` 하위에 그대로 복사한다.
- 복사된 TS 파일을 원본 대조본으로 삼고, 파일 하나씩 확장자를 `.go`로 바꾸면서 코드도 함께 Go로 번역한다.
- `.ts` 파일은 아직 포팅되지 않은 원본 대기열이다. `.go` 파일은 해당 파일의 포팅 완료본이다.
- 동일 기능을 별도 위치에 새로 작성하거나, 원본 복사본을 남겨 둔 채 다른 Go 파일로 우회 구현하지 않는다.

초기 시드 명령은 다음과 같다. 이 명령은 작업 착수 시 최초 1회만 수행한다. 한 번 파일별 변환을 시작한 뒤에는 변환된 `.go` 파일을 지우게 되므로 통복사 명령을 반복 실행하지 않는다.

```bash
mkdir -p packages/typia/native
rsync -a --delete ../typia/packages/core/src/ packages/typia/native/core/
rsync -a --delete ../typia/packages/transform/src/ packages/typia/native/transform/
```

목표 매핑은 다음과 같다.

- `../typia/packages/core/src/programmers/IsProgrammer.ts`
  -> `packages/typia/native/core/programmers/IsProgrammer.go`
- `../typia/packages/transform/src/transform.ts`
  -> `packages/typia/native/transform/transform.go`

## 포팅 원칙

**기계적 1:1 포팅**
- typia의 파일 트리, 모듈 구조, 클래스/함수/타입 명명, 코딩 스타일을 원형에 최대한 가깝게 유지한다.
- 식별자 예: `IsProgrammer.write`, `IsProgrammer.IProps`, `RandomProgrammer.write` 등은 Go에서도 추적 가능한 명명과 구조를 유지한다.
- Go 관용 스타일(네이밍 컨벤션, 인터페이스 재설계, 패키지 재분할 등)로의 재구성은 본 미션의 범위가 아니다. 별도 후속 미션으로 다룬다.

**일반 알고리즘으로 구현**
- typia는 임의의 TypeScript 타입을 입력으로 받아 AST 분석 후 검증/직렬화 코드를 생성하는 컴파일러다.
- 모든 포팅 로직은 임의 입력에 대해 동작하는 일반 알고리즘이어야 한다. 특정 타입명에 의존하는 분기나 우회는 허용되지 않는다.
- 코드 생성은 AST 조립으로 수행한다. 문자열 연결로 대체하지 않는다.

**테스트 불변**
- `tests` 하위의 테스트 코드 및 테스트 타입(예: `SimpleObject` 등 다수)은 검증 기준이다. 변경·삭제·단순화하지 않는다.
- 테스트가 실패하면 typia Go 본체를 고친다.

## 작업 순서

아래 단계를 순차로 끝까지 수행한다. 모든 단계가 완료되기 전까지 사용자에게 질문하거나 중간 점검을 요청하지 않는다.

### 1단계 - TS 원본 통복사
위 초기 시드 명령으로 `../typia/packages/core/src`와 `../typia/packages/transform/src`를 각각 다음 위치에 통복사한다.

- `packages/typia/native/core`
- `packages/typia/native/transform`

통복사 직후 `.wiki/`에 복사 범위와 파일 수를 기록한다. 이 기록은 이후 어느 파일이 아직 `.ts` 상태이고, 어느 파일이 `.go`로 변환되었는지 추적하는 기준이다.

### 2단계 - TypeScript shim 분석
`../typia`가 의존하는 TypeScript Compiler API 관련 shim(AST, 타입 체커 등)을 정밀 분석하여 `.wiki/shim/` 폴더에 정리한다. 각 shim의 역할과 Go 포팅 시의 대응 설계를 구체적으로 명시한다.

### 3단계 - 파일별 변환 계획 작성
복사된 `packages/typia/native/core/**/*.ts` 및 `packages/typia/native/transform/**/*.ts` 각각에 대해 1:1 대응 분석 문서를 `.wiki/packages/{core|transform}/.../{파일명}.md` 형식으로 작성한다. 단 한 파일도 누락하지 않는다. 각 문서에는 다음을 포함한다.

- 원본 파일 경로와 native 복사본 경로
- 파일의 역할 및 외부 노출 인터페이스
- 내부 로직 요약
- Go 번역 계획(대응 식별자, 사용 shim, 주의점)
- 변환 상태: `TS_COPIED`, `GO_PORTED`, `VERIFIED`

### 4단계 - 파일 하나씩 `.go` 변환
복사된 `.ts` 파일을 하나씩 선택하여 같은 위치의 `.go` 파일로 변환한다.

- 변환할 때는 해당 `.ts` 파일 내용을 기준으로 직접 번역한다.
- 변환이 끝난 파일은 `.ts`를 제거하고 `.go`만 남긴다.
- 파일명과 상대 경로는 원본 구조를 유지한다.
- 변환한 파일의 `.wiki` 문서를 즉시 `GO_PORTED`로 갱신한다.
- 한 파일의 포팅이 끝나기 전에는 같은 기능을 다른 임시 Go 파일로 우회 구현하지 않는다.

### 5단계 - 리뷰 및 누락 확인
모든 파일별 문서를 처음부터 끝까지 리뷰하고 개정한다. 다음을 반드시 확인한다.

- native 트리에 남아 있는 `.ts` 파일 목록
- `.go`로 변환되었지만 `.wiki` 상태가 갱신되지 않은 파일
- 원본 `../typia` 구조와 native 구조의 누락·추가·불일치
- 특정 테스트나 특정 타입명에만 맞춘 하드코딩 여부

### 6단계 - 테스트 통과까지 반복
`pnpm test`를 실행하고 실패 케이스를 진단하여 typia Go 본체 로직을 수정한다. 모든 테스트가 통과할 때까지 진단-수정 사이클을 반복한다.

### 7단계 - 완료 보고
위 모든 단계가 완료된 시점에 한해 사용자에게 결과를 보고하고 리뷰를 요청한다.

## 진행 규칙

- 모든 단계가 끝나기 전에는 멈추지 않는다.
- 모호한 지점은 `../typia` 원본의 실제 동작을 기준으로 판단한다.
- 진행 중 내려진 결정은 해당 분석 문서 또는 코드에 기록한다.
- 복사된 TS 파일은 작업 대기열이므로, 분석 없이 삭제하거나 일괄 생성 코드로 대체하지 않는다.
