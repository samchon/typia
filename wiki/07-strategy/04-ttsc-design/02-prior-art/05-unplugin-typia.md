# Prior Art 5 — unplugin-typia (ryoppippi/unplugin-typia)

> 보존용 참고 문서. 현재 기준은 [08-tsgo-master-plan/](../../../08-tsgo-master-plan/) + [10-ecosystem/](../../../10-ecosystem/).


> 분석 대상: `ryoppippi/unplugin-typia`
> 중요도: ★★★★ — 번들러 통합 경로의 참조. ts-patch 우회 사례.

## ryoppippi/unplugin-typia ↔ @typia/unplugin 관계

- **비공식 오리지널**: @ryoppippi/unplugin-typia v2.6.6 (2025-06-14 archiving)
- **공식**: @typia/unplugin v12.0.2 (이 저장소 `packages/unplugin`)
- **관계**: ryoppippi이 만든 것을 typia 공식이 흡수. README.md:283-284 명시 — "This project was originally created by @ryoppippi... Now it has been integrated into the official Typia repository"
- 코드 구조 사실상 동일, 공식은 workspace 의존, 비공식은 npm.

## 변환 흐름 (10단계)

```
bundler hook
  → transformInclude()
    → [filter + typia 포함 여부 체크]
  → transform()
    → (svelte면) sveltePreprocess()
    → transformCodeWithTypiaTransform()
      → Cache.getCache()                # MD5 해시
      → transformTypia() [cache miss]
        → ts.readConfigFile()
        → ts.parseJsonConfigFileContent()
        → ts.createSourceFile()
        → ts.createCompilerHost()       # alias resolve
        → ts.createProgram([id], opts, host)
        → typiaTransform(program)        # typia/lib/transform
        → ts.transform(sourceFile, [factory], {...})
        → ts.createPrinter().printFile()
        → Cache.setCache()
    → generateCodeWithMap()
      → diff-match-patch: 소스 vs 변환 diff
      → MagicString: offset 추적 업데이트
      → sourcemap 생성
```

핵심: `src/core/typia.ts:31-63` (`transformTypia`), `index.ts:56-125` (`generateCodeWithMap`).

## 캐싱 전략

- 파일 단위 MD5(source) + basename
- 저장: `find-cache-dir`로 `node_modules/.cache/unplugin_typia/`
- 검증: 파일 말미에 `/* unplugin-typia-{version}-{hash} */` 주석
- Bun 최적화: `Bun.hash()` 사용

## 지원 번들러 10종

| 번들러 | 파일 | 비고 |
|---|---|---|
| Vite | `src/vite.ts` | pass-through, enforce 'pre' 권장 |
| Webpack | `src/webpack.ts` | Next.js가 래핑 |
| Next.js | `src/next.ts` | webpack config 주입 |
| esbuild | `src/esbuild.ts` | onLoad hook |
| Rollup | `src/rollup.ts` | pass-through |
| Rolldown | `src/rolldown.ts` | 신규 Rust bundler |
| Rspack | `src/rspack.ts` | Webpack 호환 API |
| Farm | `src/farm.ts` | Rust bundler |
| Bun | `src/bun.ts` | **유일한 커스텀 구현** (unplugin.bun 미지원) |

Bun 예외: `src/bun.ts:97-146`이 `build.onLoad({filter}, ...)`로 직접 구현.

## 옵션 (`src/core/options.ts`)

```ts
type Options = {
  include?: FilterPattern;         // 기본 [/\.[cm]?[jt]sx?$/, /\.svelte$/]
  exclude?: FilterPattern;         // 기본 [/node_modules/]
  enforce?: 'pre' | 'post';        // 기본 'pre'
  tsconfig?: string;
  typia?: ITransformOptions;
  cache?: boolean;                 // 기본 false
  log?: boolean | 'verbose';
}
```

## Sourcemap — diff 기반

`index.ts:56-125`:
1. `diff-match-patch-es`로 source vs 변환 코드 semantic diff
2. `MagicString`에 offset 추적:
   - type=0: `offset += len`
   - type=1: `prependLeft(offset, text)`
   - type=-1: 다음이 +면 `update()`, 아니면 `remove()`
3. `hasChanged()` 체크 후 sourcemap 생성
4. includeContent: true

## tsgo 호환성 위험 (명시적)

README.md:12 원문:
> TypeScript's ongoing migration to tsgo introduces significant architectural changes. The new Go-based compiler uses IPC-based APIs rather than direct access to compiler internals...

**명시적 의존**:
- `import ts from 'typescript'` (`typia.ts:2`)
- `ts.createProgram()`, `ts.transform()`, `ts.createPrinter()`
- `typia/lib/transform.js`의 TransformerFactory 사용

**tsgo 세계에서 깨지는 지점**:
1. tsgo는 `ts.createProgram` 등 직접 API를 노출하지 않음 (IPC read-only)
2. unplugin의 동기 변환 흐름과 IPC 전송 비호환
3. → **2025-06-14 archiving 결정의 근본 원인**

## ttsc와의 관계 — 상호 보완

unplugin-typia의 역할은 ttsc가 대체하는 게 아니라, **ttsc의 알고리즘을 재활용**하는 것:
- ttsc-go 바이너리가 transform 적용 → JS emit
- 번들러는 이 JS를 그대로 받음 → unplugin-typia 같은 특화 레이어 불필요해질 수 있음

하지만 **ts-patch 없이 Vite/Webpack 등에서 typia를 쓰는 경로**는 여전히 가치 있음 — ttsc는 npm binary 설치 부담이 있기에 "그냥 Node로 돌리고 싶다" 유스케이스가 남는다. 이를 `@typia/unplugin`이 계속 담당.

## 주요 파일 (16개)

| 파일 | 설명 |
|---|---|
| `src/core/index.ts` | unplugin 메인 팩토리, diff sourcemap |
| `src/core/typia.ts` | ts.createProgram + typia transformer + printer |
| `src/core/options.ts` | Options 정의 |
| `src/core/cache.ts` | MD5 기반 캐싱 |
| `src/core/types.ts` | Tagged types |
| `src/core/languages/svelte.ts` | Svelte 전처리 |
| `src/vite.ts`, `webpack.ts`, `rollup.ts`, `esbuild.ts`, `rollup.ts`, `rolldown.ts`, `rspack.ts`, `farm.ts` | 번들러별 thin wrapper |
| `src/next.ts` | Next.js webpack config 주입 |
| `src/bun.ts` | **유일 커스텀**, build.onLoad |
| `src/api.ts` | core re-export |

## 한 줄 요약

> typia가 번들러 세계를 만난 첫 성공 사례. tsgo 시대에는 깨지지만, ttsc가 제공하는 binary 경로가 없는 환경(RSC 빌드, edge runtime 등)에서 계속 가치 있는 레이어.
