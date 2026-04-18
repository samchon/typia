# Prior Art 1 — ttypescript (cevek/ttypescript)

> ⚠️ **역사 문서 (Archived)** — 이 파일은 2026-04-18 초기 분석의 작업 이력. 현재 진실원은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/). 내용이 현재 결정과 충돌하면 08 · 10 우선.


> 분석 대상: `/mnt/d/github/contributions/ttypescript`
> 중요도: ★★★ (이름과 철학의 원류. 기술은 낡음.)

## 네이밍 유래

**ttypescript** = **T**ransformer **TypeScript**. "tt"는 더블 T. 사용자는 `tsc` 대신 `ttsc`, `tsserver` 대신 `ttsserver`를 쓴다.

`package.json:4`:
```json
"bin": {
  "ttsc": "./bin/tsc",
  "ttsserver": "./bin/tsserver"
}
```

samchon이 tsgo wrapper 이름으로 `ttsc`를 계승하는 정당성은 여기서 온다 — "transformer TypeScript"라는 **관례적 약칭**을 이미 커뮤니티가 안다.

## 동작 원리 — VM 컨텍스트 재실행

`src/tsc.ts:14-31`:
```ts
// typescript lib의 tsc.js를 fs.readFileSync
// 정규식으로 IIFE 패턴 매칭 + 감싸기
// vm.runInThisContext()로 실행
```

`src/loadTypescript.ts:32-46`: `new Module(filename, module)`로 TypeScript 라이브러리 동적 로드.

`src/patchCreateProgram.ts:32-112`: **`ts.createProgram`을 후킹**해서 emit 시 plugin transformer를 주입.

## tsconfig plugins 스키마 (ts-patch와 동일)

```json
{
  "compilerOptions": {
    "plugins": [{
      "transform": "transformer-module",
      "import": "namedExport",
      "type": "program",        // | "config" | "checker" | "raw" | "compilerOptions"
      "after": false,
      "afterDeclarations": false,
      "customOption": 123
    }]
  }
}
```

## 5가지 Transformer Type

서로 다른 시그니처의 커뮤니티 transformer를 한 엔진이 모두 수용하기 위함.

| type | 시그니처 | 사용 사례 |
|---|---|---|
| `program` (기본) | `(program, config?) => TransformerFactory` | 대부분 |
| `config` | `(config) => TransformerFactory` | config-only |
| `checker` | `(checker, config?) => TransformerFactory` | typescript-is |
| `raw` | `TransformerFactory` | ts-nameof |
| `compilerOptions` | `(opts, config?) => TransformerFactory` | 옵션 기반 |

**ttsc가 계승해야 할 중요 개념**: 외부 transformer 라이브러리 생태계(typia 이외의 것)를 수용하려면 이 다형성이 필요. typia-only 도구로 닫으면 설치 정당성이 약해진다.

## Peer-dep로 typescript를 받는 이유

`package.json`:
```json
"peerDependencies": { "typescript": ">=3.2.2" }
```

버전 락-인 회피. `resolveSync('typescript/lib/...', { basedir })`로 프로젝트의 로컬 typescript를 우선 탐지. 이는 **ttsc가 그대로 차용할 패턴** — tsgo도 `@typescript/native-preview`를 peer로 받고 버전을 강제하지 않는다.

## 왜 deprecated 되었나

`README.md:3-5`:
> ttypescript is deprecated. It currently works with TS below 5.0, but it will not be updated. For TypeScript 5+, please use ts-patch.

### 기술적 사인
1. TS 5.0부터 tsc.js 내부 구조(특히 IIFE → module 변환) 변경 → **정규식 기반 감싸기가 깨짐**
2. VM.runInThisContext 기반은 Deno/Bun 등 다른 런타임 비이식적
3. `src/PluginCreator.ts:205-228` ts-node 재귀 문제 등 근본 해결 못한 버그

## 한계 (ttsc가 반복하면 안 되는 실수)

| 한계 | 원인 |
|---|---|
| TS 5+ 미지원 | VM 기반 코드 재해석이 구조 변경에 취약 |
| tsserver 지원 약함 | 단순 pass-through, IDE 플러그인 미통합 |
| Deno/Bun 비호환 | Node.js VM 깊게 의존 |
| 유지보수 중단 (2024~) | 1인 유지보수 + 기술 빚 누적 |

## ttsc가 ttypescript에서 가져올 것 · 버릴 것

**가져올 것**:
- 이름 (ttsc)
- tsconfig.json plugins 스키마
- 5가지 transformer type 다형성
- peer-dep typescript/native-preview
- 로컬 우선 resolve

**버릴 것**:
- VM.runInThisContext (tsgo는 Go 바이너리라 해당 없음)
- 정규식 소스 파싱
- node Module hack

## 주요 파일

| 파일 | 책임 |
|---|---|
| `bin/tsc`, `bin/tsserver` | ttsc/ttsserver 진입점 |
| `src/tsc.ts` | tsc 래퍼, VM 재실행 |
| `src/tsserver.ts` | pass-through |
| `src/loadTypescript.ts` | 로컬 typescript resolve |
| `src/patchCreateProgram.ts` | createProgram 후킹 |
| `src/PluginCreator.ts` | 5 type 다형성 |
| `examples/` | 실제 사용 예 |

## 한 줄 요약

> ttsc 이름의 원조. 기술은 낡았으나 **플러그인 스키마·다형성·peer-dep** 디자인은 그대로 가져올 수 있다.
