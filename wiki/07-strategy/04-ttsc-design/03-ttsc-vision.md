# 03. ttsc Vision — 사상·범위·성공기준

## 한 줄 비전

> **"사용자가 typia를 쓰는 한 줄이 TS 6에서든 TS 7에서든 똑같이 작동하게 하는 것."**

ttsc 사용자의 체감은 단 하나: `npx typia setup` 돌리고 끝. 그 밑에서 ts-patch든 ttsc든 어떻게 돌아가든 관심 없다. 이 투명성이 성공의 정의.

## 3개 설계 공리

### 공리 A. 사상 양보 0
사용자 API(`typia.is<T>`, `typia.json.stringify<T>`, `typia.llm.application<Class>()` …)는 **어떤 한 자 한 획도 바뀌지 않는다**. `tsconfig.json`의 `plugins[]` 엔트리도 문자 한 자 바꾸지 않는다. ttsc가 존재한다는 사실을 사용자가 몰라도 typia는 작동해야 한다.

### 공리 B. 효용 영역 확장 (사상의 적용 범위 넓히기)
ttsc는 typia 전용이 아니다 — **tsconfig.json plugins 규격을 따르는 모든 transformer**를 지원한다. ts-runtime-checks, ts-nameof, ts-transform-css-modules 등 커뮤니티 transformer까지 받는다. 이는:
- typia 이외 사용자가 설치 정당성을 찾음
- 장기적으로 ts-patch의 사실상 후계자로 자리잡을 가능성
- 사상("Pure TypeScript = transformer에 맡겨라")의 생태계 확장

### 공리 C. Minimal upstream, Maximum hook
Effect-TS 원칙 그대로. **tsgo 소스는 건드리지 않고 hook registration point만 추가**. 실제 로직은 ttsc 자체 Go 모듈과 Node bridge에.

이유:
- tsgo upstream 변경에 강함 (충돌 줄이기)
- Microsoft가 공식 transformer API를 나중에 내놓아도 ttsc가 얇은 adapter로 살아남음
- 유지보수 비용 제어

## 3개 "하지 않을 것" (Non-Goals)

### Non-goal 1. tsgo의 성능 따라잡기
ttsc는 tsgo 바이너리를 사용하고, Node bridge에서 typia transformer를 돌린다. **tsgo 단독 빌드보다는 느리다** — 그러나 tsc 4.x~5.x 대비 여전히 몇 배 빠를 것. 속도의 절대값이 목표 아님. "TS 7 시대에도 typia가 자연스럽게 동작"이 목표.

### Non-goal 2. typia transformer의 Go 재작성
`@typia/core`는 ~20K LOC의 정교한 메타데이터/programmer 엔진이다. Go로 재작성하면 사실상 새 프로젝트. **유지 가능 범위를 넘는다**. 그래서 Node bridge로 결합.

### Non-goal 3. Microsoft 공식 API 직접 상속
Microsoft가 언젠가 transformer plugin API를 공식화해도, ttsc는 그걸 그냥 받아쓰지 않는다. **ttsc의 사용자 API(tsconfig plugins 스키마)가 안정**이고, 내부에서 공식 API로 이주하는 것이 맞다. 사용자 변경 없음.

## 사용자 시나리오 (before / after)

### 기존 사용자의 눈 — TS 6.x 시절

```json
// tsconfig.json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```
```bash
npx typia setup
npm run build  # tsc가 ts-patch와 함께 작동
```

### ttsc 출시 후 같은 사용자 — TS 7 시대

```json
// tsconfig.json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]   // 동일!
  }
}
```
```bash
npx typia setup    # 내부적으로 ttsc를 install
npx ttsc --build   # 또는 npm run build에 ttsc 지정
```

**변한 것**: `tsc` → `ttsc` (또는 `npm run build`가 내부적으로 ttsc 호출).
**변하지 않은 것**: 나머지 모든 것.

## 3개 범위 레이어

```
Layer 3 (JS)  — @ttsc/cli           : ttsc 바이너리, CLI, tsconfig 파싱, bridge 조율
Layer 2 (Go)  — ttsc-go (fork)      : tsgo + patch + Go 훅 모듈
Layer 1 (JS)  — @ttsc/node-bridge   : Go가 spawn하는 Node 자식, transformer 실행
```

별도로:
- **@ttsc/types** — 0-dep Tyepscript definitions (TransformerFactory, PluginConfig 등)
- **@ttsc-{platform}-{arch}** — 플랫폼별 바이너리 (7개)

## 성공 기준 (Definition of Done, v1.0)

1. **기능**: typia의 모든 transformer (is/assert/validate, json.*, llm.*, protobuf.*, random, misc, http) 가 ttsc에서 정상 동작. typia test suite 통과.
2. **호환**: ts-patch의 `plugins[]` 스키마를 그대로 파싱. ts-runtime-checks도 추가 설정 없이 동작 검증.
3. **성능**: tsc 5.x + ts-patch 대비 **최소 3× 빠름** (tsgo의 속도 이점을 어느 정도 보존).
4. **배포**: 7 플랫폼 바이너리가 npm `@typia/ttsc`에서 단일 명령으로 설치됨.
5. **안정**: 매 tsgo patch release마다 ttsc release가 **일주일 안에** 따라옴.
6. **문서**: typia setup이 자동으로 ttsc 사용. 마이그레이션 가이드 없이도 기존 사용자 그대로 작동.

## 비성공적 결말이 뭔가

- **실패 시나리오 A**: ttsc가 나왔으나 tsgo upstream 변경에 깨지는 빈도가 너무 높아 사용자가 TS 6.x 고수. → 해소: hook-only patch + 자동 CI.
- **실패 시나리오 B**: IPC 왕복 비용이 사용자 경험을 해침 (체감 느림). → 해소: 병렬 processing + 캐싱 + batch IPC.
- **실패 시나리오 C**: Microsoft가 갑자기 공식 transformer API를 내놨는데 ttsc와 완전히 다른 모양. → 해소: ttsc는 얇은 facade라 내부를 바꾸면 됨. 사용자 API는 불변.

## 한 줄 결론

> ttsc는 **"사상을 지키기 위한 기반 인프라"**. 화려한 기능이 아닌, 있어야만 typia가 존재할 수 있는 토대. 사용자에게는 보이지 않지만 없으면 아무것도 작동하지 않는 것.

→ 다음 [04. ttsc Architecture](04-ttsc-architecture.md)
