# 06. ttsc Specification

> 이 문서의 대상은 **현재 제품 `@typia/ttsc`** 다.
> generic `ttsc` 는 나중에 추출할 수 있는 목표 이름이지, 지금 확정된 배포 단위가 아니다.

## 한 줄 정의

`@typia/ttsc` 는 typia monorepo 안에서 개발되는 **official tsgo compiler adapter package** 다. `ttsc` 는 build/check/transform 코어를 담당하고, execute surface 는 **별도 패키지 `@typia/ttsx`** 가 맡는다.

## 목표

1. typia의 `tsc + ts-patch` 경로를 대체한다.
2. `@typia/ttsx` 가 재사용할 build/transform/cache 코어를 제공한다.
3. 사용자 표면은 유지하고 내부 구현만 교체한다.
4. 나중에 공통 코어를 분리할 수 있게 구조를 나눈다.

## 비목표

- 지금 당장 generic `ttsc` 저장소를 만드는 것
- public Go SDK를 외부에 약속하는 것
- **영구적으로** typescript-go 내부 Go 패키지에 결합된 private compiler distro를 제품 계약으로 약속하는 것

## 설치 계약 (확정)

- **preview 기간**: `npm i -D @typescript/native-preview @typia/ttsc`
- **7.0 GA 이후**: `npm i -D typescript @typia/ttsc`
- runner가 필요하면 추가로 `npm i -D @typia/ttsx`
- **아닌 것**: `npm i -D typescript-go ttsc`
- `typescript-go` git checkout / Go module import 는 maintainer용 bridge 입력일 뿐, 최종 사용자 계약이 아니다

공식 tooling 과 editor 생태계를 살리려면 compiler 는 **공식 배포물** 이 기준점이어야 한다. `@typia/ttsc` 는 그 옆에 서는 adapter 다.

## 현재 제품 구조

### target 제품

```text
@typia/ttsc               ← adapter package
@typia/ttsx               ← runner package
@typescript/native-preview ← preview compiler package
later: typescript@7       ← stable compiler package
```

`@typia/ttsc` 는 설치된 compiler 를 찾고 typia rewrite/build surface 를 올린다.
`@typia/ttsx` 는 그 위에 runner surface 를 올린다.

### bridge 구현

2026-04 현재 monorepo 안의 spike 는 다음을 포함할 수 있다.

```text
internal Go driver / engine
shim / patch / bridge helper
optional native helper package
```

이것은 **upstream API 공백을 메우는 과도기 구현** 이다. 최종 계약과 동일시하지 않는다.

### 내부 구조

```text
packages/ttsc/
  cmd/ttsc/                CLI entry
  internal/driver/         tsgo program load, visit, rewrite, diagnostics
  internal/engine/         typia metadata/analyzer/emitter
  src/api.ts               JS API wrapper
  src/platform.ts          platform resolver
```

## 공개 surface

### CLI

- `ttsc build`
- `ttsc check`
- `ttsc transform`
- `ttsc version`

### JS API

- `build`
- `check`
- `transform`
- `transformAsync`
- `version`

### Go API

현재는 **없다**. Go 코드는 `internal/*` 이며 외부 계약이 아니다.

## 구현 원칙

### 1. rewrite-first
현재 baseline은 tsgo program을 띄운 뒤 call-site를 수집하고 `WriteFile` 단계에서 결과를 다시 쓰는 방식이다. patch 수는 제품 계약이 아니라 구현 세부다.

### 1.5. official-boundary-first

최종 제품은 **공식 compiler 배포 경계** 를 재사용해야 한다.

- 허용: 설치된 `@typescript/native-preview` / `typescript@7` 의 CLI, 공식 IPC API, 공식 TypeScript client
- 금지: 사용자가 알아야 하는 `github.com/microsoft/typescript-go/internal/...` 결합
- 해석: current shim bridge 는 가능하지만, 성공 후에도 그대로 public contract 로 굳히면 안 된다

### 2. typia adapter 분리
아래는 typia 전용 층이다.

- `dispatch`
- `metadata`
- `analyzer`
- `emitter`

아래는 나중에 공통 코어 후보가 된다.

- launcher / platform resolver
- program load / diagnostics
- visit / rewrite orchestration
- output writing / watch / cache

### 3. monorepo 우선
지금은 typia release, setup wizard, E2E 테스트와 같이 움직여야 하므로 monorepo가 맞다.

## `@typia/ttsx` 와의 경계

`ttsx` 는 `ts-node`/`tsx` 와 동급의 1급 기능이지만, **별도 패키지 `@typia/ttsx`** 로 둔다.

`@typia/ttsc` 가 제공해야 하는 것은 다음 공통 코어다.

- compiler locator
- project / tsconfig discovery helper
- typia rewrite / transform
- cache key helper
- source map / diagnostics surface

`@typia/ttsx` 는 이 코어를 import 해서 runner 로 조합한다.

## `ttsx` 사양

### 최소 UX

- `ttsx src/index.ts`
- `ttsx --project tsconfig.json src/index.ts`
- `ttsx src/index.ts -- --port 3000`

### 의미

1. 프로젝트와 `tsconfig.json` 을 찾는다
2. typia rewrite 를 포함한 `ttsc` 파이프라인을 적용한다
3. 결과 JS 를 cache 또는 temp output 으로 만든다
4. Node 를 해당 JS 로 exec 한다

### 필수 요구

- argv / env pass-through
- source map
- ESM / CJS 판별
- cache key = tsconfig + compiler options + source hash + `@typia/ttsc` version
- `@typia/ttsx` version과의 호환성도 명시
- typia marker call 이 **실행 전** 치환될 것

### 단계별 구현

- **bridge 단계**: compile-to-cache 후 Node exec
- **upstream API 성숙 후**: 공식 tsgo API / IPC 를 통한 on-demand transpile + cache

즉, `@typia/ttsx` 는 "있으면 좋은 부가 기능" 이 아니라 typia가 `tsx/ts-node` 경로까지 대체하기 위해 반드시 가져야 하는 제품이다. 다만 **코어는 `@typia/ttsc` 에 두고, runner는 분리한다**.

## 설치와 이주

- 사용자는 최종적으로 `npx typia setup --runtime=ttsc` 를 통해 이주한다.
- setup 은 필요 시 **`@typia/ttsc` 와 공식 compiler package** 를 설치한다.
- runner preset (`--runner=ttsx`) 선택 시 **`@typia/ttsx`** 도 함께 설치한다.
- `tsconfig.json plugins` 스키마는 유지한다.
- `prepare: ts-patch install` 은 제거 대상이다.

## generic `ttsc` 로 분리하는 기준

다음이 모두 충족되어야 한다.

1. `@typia/ttsc` CLI와 JS API가 안정화됨
2. typia 내부 setup·tests·release가 `@typia/ttsc` 기준으로 고정됨
3. 두 번째 소비자가 공통 코어를 실제로 재사용함
4. typia adapter를 떼어도 semver 계약이 명확함

그 전까지는 `@typia/ttsc` 가 정답이다.

## 현재 문서와 코드의 관계

- 계획: [17](17-phase0-kickoff.md)
- 현재 구현: [18](18-phase0-progress-report.md)
- 패키지 경계: [16](16-package-port-boundary.md)

→ 다음 [07. typia-go Specification](07-typia-go-specification.md)
