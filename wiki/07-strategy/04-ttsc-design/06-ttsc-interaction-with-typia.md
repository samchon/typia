# 06. typia와의 상호작용 — 기존 코드에 무엇이 바뀌나

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../08-tsgo-master-plan/) + [10-ecosystem/](../../10-ecosystem/).


## 결론 먼저

> **typia 사용자의 tsconfig와 코드는 한 자도 바뀌지 않는다. `@typia/core`, `@typia/transform`, `@typia/interface`도 한 줄 변경 없이 그대로 작동한다.** typia 쪽 변화는 `packages/typia/src/executable/` 디렉토리의 setup 스크립트와 package.json 하나뿐.

## 영향받는 typia 파일 목록

### 변경 없음 (99%의 typia 코드)
- `packages/interface/*` — 타입 정의, ttsc가 뭐든 상관없음
- `packages/core/*` — programmer들, MetadataFactory, 모든 변환 로직
- `packages/transform/*` — CallExpressionTransformer, FileTransformer ... **그대로 작동**
- `packages/utils/*` — 런타임 헬퍼
- `packages/mcp|langchain|vercel/*` — LLM 어댑터
- `packages/unplugin/*` — vite/webpack 통합 (별도 경로)
- `packages/typia/src/**` 중 CLI 외 모든 것

### 변경 있음

| 파일 | 현재 동작 | ttsc 도입 후 |
|---|---|---|
| `packages/typia/src/executable/TypiaSetupWizard.ts` | `ts-patch` 설치 | TS 버전 감지 → ts-patch(≤6.x) 또는 ttsc(≥7) |
| `packages/typia/src/executable/setup/PluginConfigurator.ts` | `tsconfig.plugins += { transform: "typia/lib/transform" }` | 동일 (스키마 호환) |
| `packages/typia/package.json` | `"prepare": "ts-patch install"` | 버전별 분기: TS 7이면 "ttsc setup" 또는 skip |
| `packages/typia/bin/` | 기존 CLI | `ttsc` wrapper 추가 (typia 바이너리가 ttsc를 invoke) |

### 새 추가

| 경로 | 역할 |
|---|---|
| `packages/ttsc/` (선택) | ttsc의 Node 측 소스를 typia 모노레포에 둘지 별도 저장소로 할지 결정 필요 |

## 사용자 시나리오 (before/after)

### A. 기존 사용자, TS 6.x 계속 사용

**변화 없음**. `typia setup`은 TS 6.x 감지 시 ts-patch 경로를 그대로 씀. 2028 말까지 LTS.

### B. 기존 사용자, TS 7으로 업그레이드

```bash
# 기존
npm i -D typescript@6
npx typia setup          # ts-patch install

# TS 7 업그레이드 후
npm i -D typescript@7 ttsc
npx typia setup          # ttsc가 설치됨, tsconfig 수정 없음
npm run build            # 내부적으로 ttsc 실행
```

`tsconfig.json`의 `plugins[]`는 **한 자도 안 바꿔도 된다**.

### C. 신규 사용자, 처음부터 TS 7

```bash
npm i -D typescript@7 typia
npx typia setup
# → typia가 TS 7 감지 → ttsc 자동 설치 → tsconfig 구성 → 끝
npm run build
```

체감: 기존과 완전 동일. ttsc 이름조차 몰라도 됨.

## `@typia/transform`이 ttsc에서 동작하는 이유

`packages/transform/src/transform.ts:41-68`:
```ts
export default function transform(
  program: ts.Program,
  options: ITransformOptions,
  extras: ITransformExtras,
): ts.TransformerFactory<ts.SourceFile> { ... }
```

이 시그니처는 **TS compiler API의 표준 transformer plugin 인터페이스**. ts-patch, ttypescript, ttsc 모두 같은 인터페이스를 요구.

ttsc의 `@ttsc/node-bridge` Layer 1이 하는 일:
1. Go로부터 MessagePack AST 수신
2. `ts.factory.*`로 `ts.SourceFile` 재구성
3. Program proxy 생성 (TypeChecker 콜백 Go로 위임)
4. **`require("typia/lib/transform").default(program, options, extras)`** 호출
5. 반환된 TransformerFactory 실행
6. 변환된 SourceFile을 MessagePack으로 직렬화 → Go 반환

→ typia 쪽에서는 **평소처럼 TransformerFactory를 리턴**하면 됨. 동일 코드.

## TypeChecker IPC 오버헤드

typia의 MetadataFactory는 TypeChecker에 의존 (`getTypeAtLocation`, `getPropertiesOfType` 등). 이 호출이 Layer 1 → Layer 2로 IPC.

### 오버헤드 추정

- MessagePack round-trip: ~100~500 μs per call (로컬 stdio)
- typia는 한 `typia.is<T>()` 당 수십 번의 TypeChecker 호출 가능
- 파일당 수 ms ~ 수십 ms 지연

### 완화

1. **Batch API**: 한 번에 N개 노드/타입 정보 요청 (tsgo PR #711 의 batch pattern)
2. **Layer 1에서 Type 캐시**: 동일 Node/Type은 한 번만 요청
3. **Prefetch**: SourceFile 전체 분석 시작 시 자주 쓰는 API 결과 한꺼번에 전송

실측 필요: Phase 2 Month 5-6에 typia test suite로 측정. 3배 이상 느려지면 최적화 스프린트.

## TypiaSetupWizard.ts 변경 안

### 현재 (요약)

```ts
// packages/typia/src/executable/TypiaSetupWizard.ts:15-70
async function setup() {
  const manager = await detectManager();
  await install(manager, ["typescript", "ts-patch"]);
  addPrepareScript("ts-patch install");
  configurePlugins();   // tsconfig.plugins += typia/lib/transform
  run("ts-patch install");
}
```

### ttsc 도입 후 (안)

```ts
async function setup() {
  const manager = await detectManager();
  const tsVersion = await detectTsVersion();
  
  if (major(tsVersion) >= 7) {
    // TS 7+ — ttsc 경로
    await install(manager, ["typescript@7", "ttsc"]);
    configurePlugins();   // tsconfig.plugins 동일
    // ts-patch 관련 prepare 스크립트 불필요
    ensureTtscBinary();   // ttsc가 platform binary 설치
  } else {
    // TS ≤6 — 기존 ts-patch 경로
    await install(manager, ["typescript", "ts-patch"]);
    addPrepareScript("ts-patch install");
    configurePlugins();
    run("ts-patch install");
  }
}
```

## 빌드 스크립트 변화

### 현재 (typical)
```json
{
  "scripts": {
    "build": "tsc",
    "prepare": "ts-patch install"
  }
}
```

### TS 7 + ttsc
```json
{
  "scripts": {
    "build": "ttsc",
    "prepare": ""     // 불필요
  }
}
```

→ `tsc` → `ttsc`가 유일한 변화.

**자동화 안**: `typia setup`이 `package.json.scripts.build`를 자동 탐지/수정. 또는 `typia migrate` 명령 추가.

## nestia와의 관계

nestia는 typia를 기반으로 NestJS DTO 검증. `@nestia/sdk`가 자체 transformer를 갖는다. ttsc 도입 후:
- nestia의 transformer도 동일하게 tsconfig.plugins에 등록
- ttsc가 둘 다 실행 (plugin 배열 순서대로)
- **nestia 쪽 코드 변경 없음**

## AutoBE / Agentica와의 관계

typia의 transformer를 heavy하게 쓰는 프로젝트들. ttsc 도입 후:
- 사용자 코드(interface 정의 + typia.llm.application 호출) 변경 없음
- 빌드 속도 향상 기대 (tsgo 속도 + ttsc overhead)

## 배포 순서 (v13 plan)

1. ttsc v0.9 beta 출시 — 별도 실험
2. typia v12.x에서 ttsc 선택 설치 옵션 (optional peer)
3. ttsc v1.0
4. typia v13 — ttsc 1급 지원, setup이 자동 감지
5. (나중에) typia v14 — ts-patch deprecation, ttsc 기본

## 한 줄 요약

> **ttsc는 typia의 *외부* 도구. typia 내부는 한 줄도 안 바뀐다.** 바뀌는 건 사용자의 `tsc` → `ttsc` 딱 한 글자, 그리고 그것조차 `typia setup`이 자동 처리.

→ 다음 [07. 리스크와 대안](07-risks-and-alternatives.md)
