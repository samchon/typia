# 04. 변환 파이프라인 — `ttsc`와 unplugin

typia transformer의 현재 진입 경로는 두 가지다. 둘 다 `typia/lib/transform` 과 Go native backend로 수렴한다.

## 경로 A. `ttsc` (기본)

```
[사용자] typia setup / ttsc
   ↓
[ttsc] tsconfig.json의 plugins[].transform 읽음
   ↓ "typia/lib/transform" resolve
[typia plugin] native.mode + native.binary 선언
   ↓
[ttsc-typia build]
   - tsgo Program 로드
   - typia.* call site 수집
   - Go analyzer/emitter 실행
   - emitted JS rewrite
```

설치 절차:

1. `npm i typia`
2. `npm i -D @typescript/native-preview @typia/ttsc`
3. `tsconfig.json.compilerOptions.plugins += [{ transform: "typia/lib/transform" }]`
4. `strict` / `strictNullChecks` / `skipLibCheck` 정리
5. `ttsc --emit --tsconfig tsconfig.json`

## 경로 B. `@typia/unplugin` (번들러)

```
[사용자] vite/webpack/rspack/esbuild build
   ↓
[@typia/unplugin] transform hook
   ↓
[@typia/ttsc.transform({ file, tsconfig, plugins })]
   ↓
[ttsc-typia transform]
   - 단일 파일의 emitted JS capture
   - Go native rewrite 적용
   - JS string 반환
   ↓
[unplugin] magic-string sourcemap 생성 후 bundler에 반환
```

unplugin은 별도 TypeScript transformer를 들고 있지 않다. 번들러 adapter일 뿐이며, 파일별 generation API인 `@typia/ttsc.transform()`을 호출한다.

## 비교

| 경로                      | 출력                     | 사용처                                             |
| ------------------------- | ------------------------ | -------------------------------------------------- |
| `ttsc build`              | 파일 시스템 emit         | 라이브러리, 백엔드, 표준 빌드                      |
| `ttsc check`              | 분석만 수행              | CI gate                                            |
| `@typia/ttsc.transform()` | 단일 파일 JS string      | unplugin, per-file transform                       |
| `@typia/unplugin`         | bundler transform result | Vite/Webpack/Rspack/esbuild/Rolldown/Bun/Farm/Next |

## 제거된 경로

`@typia/transform` + `@typia/core` 기반 TypeScript transformer는 현재 코드베이스에서 제거되었다. `typia/lib/transform` 은 같은 이름을 유지하는 native plugin entry이며, 구버전 TypeScript transformer가 필요한 사용자는 해당 기능을 포함한 구버전 typia를 사용한다.

→ 패키지별 깊은 구조는 [03-packages/](../03-packages/) 참조.
