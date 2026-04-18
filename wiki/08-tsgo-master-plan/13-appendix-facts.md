# 13. Appendix — 사실 수치 출처

> 모든 숫자의 출처. 측정(확실) vs 추정(AI) vs 공개자료(제3자) 구분.

## typia 자체 측정 (2026-04-18 기준)

| 지표 | 값 | 출처 |
|---|---|---|
| core/src TS LOC | **30,307** | `find packages/core/src -name "*.ts" -exec cat {} + \| wc -l` |
| transform/src TS LOC | 4,306 | 동일 |
| interface/src TS LOC | 8,508 | 동일 |
| typia/src TS LOC | 7,544 | 동일 |
| **합계 (4 주요 패키지)** | **50,665** | — |
| CheckerProgrammer.ts LOC | 1,614 | `wc -l` |
| RandomProgrammer.ts LOC | 1,200 | 동일 |
| JsonStringifyProgrammer.ts LOC | 1,129 | 동일 |
| Tag export 수 | ~21 | `packages/interface/src/tags/index.ts` |
| 컨트리뷰터 | 104명 | GitHub |
| 버전 | 12.0.2 | package.json |
| Stars | 5.7k (+- 변동) | GitHub (작성 시점) |

## 외부 저장소 측정 (`/mnt/d/github/contributions/`)

### tsgonest (2026-04-15, commit 67e0faf)
| 지표 | 값 | 출처 |
|---|---|---|
| Go LOC | 72,190 | `find . -name "*.go" \| xargs wc -l` |
| Go 파일 수 | 140 | `find . -name "*.go" \| wc -l` |
| shim 디렉토리 | 11 | `ls shim/` |
| patches 파일 | 3 | `ls patches/*.patch` |
| 최신 커밋 | 67e0faf | `git log -1` |
| 버전 | v0.13.5 | package.json |
| Stars | 13 | GitHub |
| Releases | 49 | GitHub |
| License | MIT | LICENSE.md |

### tsgolint
| 지표 | 값 | 출처 |
|---|---|---|
| `//go:linkname` 총수 | **~910** | `grep -c "//go:linkname" shim/**/*.go` |
| shim 디렉토리 | **12** | `ls shim/` |
| rules 하위 수 | 59 (type-aware) | `ls internal/rules/` |
| Go 버전 요구 | 1.26 | `go.mod` |

### effect-tsgo
| 지표 | 값 | 출처 |
|---|---|---|
| `_patches` 파일 수 | **23** | `ls _patches/*.patch \| wc -l` |
| patch LOC 합계 | 1,312 | `cat _patches/*.patch \| wc -l` |
| Go 훅 모듈 | etscore, etscheckerhooks, etslshooks, etsexecutehooks, etstesthooks | `ls` |
| pinned tsgo commit | 83b8d2aa23b2d385087dabe5a5a8afd5e296013d | `flake.nix:10` |

### typical
| 지표 | 값 | 출처 |
|---|---|---|
| Go LOC | 14,566 | `find . -name "*.go" \| xargs wc -l` |
| 버전 | v0.3.1 | package.json |

### typescript-go
| 지표 | 값 | 출처 |
|---|---|---|
| _packages npm | 3개 | `ls _packages/` |
| cmd/tsgo | 존재 | `ls cmd/` |
| internal/api | 존재 (PR #711) | `ls internal/api/` |

## 웹 리서치 (제3자 자료, 출처 URL)

### TypeScript 7 / tsgo
| 사실 | 출처 |
|---|---|
| TS 6.0 2026-03-23 정식 | [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2025/12/02/microsoft-gets-real-on-native-typescript-remake.aspx) |
| TS 7 GA "mid/late 2026" | [DevBlog](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/) |
| in-process plugin 불가 | [Discussion #455](https://github.com/microsoft/typescript-go/discussions/455) (jakebailey) |
| Strada API 미지원 | [DevBlog Native Preview](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/) |
| Issue #516 milestone "Post-7.0" | [Issue #516](https://github.com/microsoft/typescript-go/issues/516) |
| PR #711 IPC API | [PR #711](https://github.com/microsoft/typescript-go/pull/711) |

### Zod 다운로드 (2026-04 기준)
| 출처 | 값 |
|---|---|
| Snyk | 144.6M/주 |
| Socket.dev | 101.9M/주 |
| npm-trends | ~102M/주 |
| 공식 v4 launch | "31M/주 추가분" (이전 wiki가 잘못 해석) |

### 기타 경쟁사 stars (2026-04 기준, 변동)
| 라이브러리 | Stars |
|---|---|
| Zod | 42.4k |
| Valibot | 8.6k |
| ArkType | 7.7k |
| TypeBox | 6.6k |
| Deepkit | 3.5k |
| BAML | 8.0k (wiki 주장, 미재검증) |
| typia | 5.7k |

### Valibot 번들 사이즈
- 로그인 폼 기준: 1.37 kB ([Builder.io](https://www.builder.io/blog/valibot-bundle-size))
- 주의: tree-shake 최대화 시나리오. Zod Mini도 3~6 kB 범위.

### Standard Schema
- Spec: 60줄 TS interface ([standard-schema repo](https://github.com/standard-schema/standard-schema))
- 채택 라이브러리 5+: Zod, Valibot, ArkType, Effect Schema, TypeBox
- 수용 도구: MCP TS SDK, Next.js Server Actions, Hono sValidator, Drizzle, tRPC, TanStack

### Go linkname
- Go 1.23 handshake 도입 ([Go #67401](https://github.com/golang/go/issues/67401))
- Go 1.24 `-checklinkname=1` flag
- Go 1.27+ 더 엄격 예상

### Edge runtime 제약
- Cloudflare Workers `eval`/`new Function(code)` 금지 ([Workers Docs](https://developers.cloudflare.com/workers/languages/typescript/))
- Ajv crash 사례 다수

## AI 추정 (출처 없음, 명시적 표기)

이전 wiki에서 "사실"처럼 쓰인 추정치들:

| 추정 | 값 | 신뢰도 |
|---|---|---|
| ttsc 개발 기간 | 12개월 | 낮음 (Phase 0 후 재추정) |
| typia-go 개발 기간 | 18~24개월 | 중간 (tsgonest 72K 기준) |
| Go/TS LOC 비율 | 2~3배 | 낮음 (프로젝트 의존) |
| IPC 오버헤드 | 15~50ms/파일 | 낮음 (실측 필요) |
| Patch rebase 시간 | 5~10분 | 낮음 (CI 자동화 후 측정) |
| Phase 0 spike | 2~4주 | 중간 |
| 매 tsgo release 대응 | 1주 내 | 낮음 |

**master plan 원칙**: 이러한 추정치를 사실처럼 쓰지 않음. 항상 "추정", "미검증" 명시.

## 이전 wiki의 대표 오차 (재발 방지)

| 대상 | 이전 주장 | 실측 | 오차 |
|---|---|---|---|
| tsgolint `go:linkname` | 896 | 910 | +1.6% |
| tsgolint shim | 15 | 12 | -20% |
| Effect `_patches` | 24 | 23 | -4% |
| typia 전체 LOC | 34,613 | 50,665 | +46% |
| Tag 수 | 11 | ~21 | +90% |

→ 다음 [14. 용어집](14-appendix-glossary.md)
