# Session 7 — 남은 공통 쟁점 정리

> 2026-04-19, 17:00. 의장: **C (ttsc Driver Lead)**. 기록: D.
> 쟁점: (1) shim 자동생성 정책, (2) `@typia/runtime` 분리 시점, (3) `@typia/unplugin` 얇게 유지, (4) unsafe.Pointer lint, (5) CallExpressionTransformer FUNCTORS 147.
> 자료: `cycle-03-*.md` (각 개정안), `packages/ttsc/tools/gen_shims.go` (있다면).

## 의장 개회

**C (의장)**: 4 개 세션에서 처리 못한 잔여 쟁점을 묶어 마무리합니다.

## (1) shim 자동생성 정책

**C**: `packages/ttsc/tools/` 에 `gen_shims` 가 있습니다. tsgolint `gen_shims` 를 MIT 이식 후 typia 필요 API (`getPropertiesOfType`, `getApparentType`, `getTypeOfSymbol` 등 20+) 를 추가한 버전. 이게 수동 실행입니다. 언제 재실행?

**F**: 자동화 가능합니다. `.github/workflows/shim-regenerate.yml` 을 nightly 로 돌리고, diff 가 생기면 PR 자동 생성. 리뷰어가 수동 머지.

**B**: 동의. 단 조건 — PR 자동 생성이 아니라 **CI fail** 로 돌려야 합니다. nightly 가 PR 을 쌓으면 리뷰 부담이 커지고, 그 사이 main 이 깨진 shim 으로 빌드됩니다. CI 가 fail 하면 즉시 수동 재생성 강제.

**F**: 좋은 수정. CI fail 로.

**C**: 정리:
- `gen_shims` 실행 조건: (a) typescript-go submodule bump 직후, (b) nightly CI 에서 diff 감지.
- 감지 시: CI fail. 수동 재생성 + 리뷰 + 머지.
- 재생성 시 diff 를 PR 설명에 전체 첨부.

**E**: `R-1.7-C-0001` fixture — `gen_shims` 결과와 `shim/` 디렉토리가 일치하지 않으면 CI fail.

## (2) `@typia/runtime` 분리 시점

**D**: S2 에서 v14 로 결정했습니다만, F 가 타임라인 재확인을 요구합니다.

**F**: v14 는 2029 Q2 예정입니다. 너무 멉니다. v13 에서 `@typia/utils/runtime` subpath 로 **부분 분리** 하고, v14 에서 별도 패키지 `@typia/runtime` 출시. 이 단계:

- v13: `@typia/utils/runtime` subpath import 가능. 여전히 `@typia/utils` 한 패키지.
- v14: `@typia/runtime` 별도 npm 패키지. `@typia/utils/runtime` 은 re-export 로 호환 유지.
- v15 (미래): `@typia/utils/runtime` re-export 제거 (P1 관련 주의).

**D**: 동의. `@typia/utils/runtime` subpath 은 v13 preview alpha 에 도입.

**A**: BND-API-04 관점: import 경로 변경은 breaking 이 아니다 (추가이므로). 동의.

**E**: `R-1.7-D-0001` — `@typia/utils/runtime` import 가 v12 동작과 동치인지 parity.

## (3) `@typia/unplugin` 얇게 유지

**F**: `@typia/unplugin` 은 webpack/rollup/esbuild 호환 플러그인. 지금 일부 로직이 build 시 typia 엔진을 spawn 합니다 (IPC 형태). tsgo 전환 후엔?

**C**: tsgo 로 빌드하면 ttsc 바이너리를 직접 호출하면 됩니다. unplugin 은 **얇은 wrapper** 로 축소. "typescript" 키를 "ttsc" 로 교체만.

**F**: 현재 unplugin 의 cache 로직, incremental build, watch mode 는 어떻게?

**C**: cache/incremental 은 tsgo 가 내장. watch mode 는 Phase 1 결정 — Phase 0 에 미지원.

**F**: `@typia/unplugin` 을 v13 preview 에서 얇은 wrapper 로 재작성. LOC 목표 500 이하.

**D**: 동의.

## (4) unsafe.Pointer lint

**C**: S4 에서 F 가 linux-arm 32-bit 우려 제기했고, 저는 unsafe.Pointer 위치 lint 를 약속했습니다.

**E**: Go lint 로:
```
golangci-lint: forbidigo check on "unsafe.Pointer"
```
허용 위치를 `//go:nolint forbidigo` 주석으로 화이트리스트. 그 외 모든 사용은 lint fail.

**B**: 저는 엔진 쪽에서 `unsafe.Pointer` 는 **shim/checker 미러링 외엔 금지** 가 원칙. 적용.

**C**: `R-1.7-C-0002` unsafe-pointer-allowlist.

## (5) FUNCTORS 147 dispatch

**D**: CallExpressionTransformer 의 FUNCTORS 147 목록이 v12 와 일치한다고 인정받았는데, 앞으로 v13/v14 에서 추가/삭제 시 동기화는?

**C**: 제안. `packages/ttsc/internal/driver/functors.go` 에 147 목록을 Go 상수 배열로. v12 TS 의 `CallExpressionTransformer.ts` 와 1:1. 추가/삭제 시 둘 다 업데이트 필수 + PR 템플릿에 checkbox.

**B**: lint 도 가능. CI 가 v12 TS 의 FUNCTORS 리스트와 Go 의 상수를 비교 → 차이 시 fail.

**E**: 구현. `R-1.7-C-0003`.

## 의장 요약

**C (의장)**: 합의.

1. shim 자동생성 — CI fail + 수동 재생성 + fixture.
2. `@typia/runtime` — v13 subpath + v14 별도 패키지.
3. `@typia/unplugin` — v13 에서 500 LOC 이하로 재작성.
4. unsafe.Pointer lint — forbidigo + allowlist.
5. FUNCTORS 147 — Go 상수 + 비교 lint.

**Session 7 종료**.

---

## Session 7 결산

### 합의

| ID | 내용 | 담당 |
|----|------|------|
| C7-01 | shim 자동생성 CI fail 정책 | C + F |
| C7-02 | `@typia/runtime` 2 단계 | D + F |
| C7-03 | `@typia/unplugin` 얇게 재작성 | F |
| C7-04 | unsafe.Pointer forbidigo lint | C + E |
| C7-05 | FUNCTORS 147 Go 상수 + lint | C + B |

### R 추가

- `R-1.7-C-0001`, `R-1.7-C-0002`, `R-1.7-C-0003`, `R-1.7-D-0001`.

다음 세션: **S8 — 통합 감수 (09-audit 스타일 공격)**. 의장 E.
