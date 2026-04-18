# 01. Problem Statement — 왜 ttsc가 필요한가

## 한 문장 정의

> **typia의 Pure TypeScript 사상을 지키려면, TypeScript 컴파일러 파이프라인에 custom transformer를 주입할 수 있는 자리가 있어야 한다. tsgo는 이 자리를 제공하지 않는다. 그러므로 typia 저자가 그 자리를 직접 만든다 — 그것이 ttsc다.**

## 다섯 가지 사실이 만든 결론

### 사실 1. typia 사상의 첫 공리

`typia.is<T>(input)`, `typia.json.stringify<T>(value)` 같은 호출은 **컴파일 시점에 전용 함수로 치환**되어야 한다. 이 치환은 TypeScript transformer가 수행한다. → transformer 자리가 사라지면 사상이 무너진다.

관련: [01-philosophy/02-pure-typescript.md](../../01-philosophy/02-pure-typescript.md) — 컴파일 시점 = 검증 코드 생성 시점.

### 사실 2. 현재 typia가 의존하는 기술은 TS 7에서 작동 불가

현 typia는 **ts-patch**를 경유해 TypeScript에 transformer를 주입한다. ts-patch의 작동 원리:
- `node_modules/typescript/lib/tsc.js`를 **monkey-patch** (persistent install 모드)
- 또는 `vm.runInThisContext()`로 메모리에서 patch (live `tspc` 모드)

둘 다 **전제 조건이 "Node.js 프로세스 안에서 JS로 된 TypeScript 컴파일러가 돈다"**이다.

tsgo (TypeScript 7)는 **Go로 작성된 독립 바이너리**다 (`/mnt/d/github/contributions/typescript-go/cmd/tsgo/main.go`). 이 전제가 완전히 무너진다. ts-patch를 그대로 tsgo에 쓸 방법이 없다.

관련: [02-prior-art/02-ts-patch.md](02-prior-art/02-ts-patch.md) § "tsgo 관점에서 ts-patch의 근본 한계"

### 사실 3. tsgo는 custom transformer를 공식 지원하지 않는다 — 가까운 시일 안에도

[05-research/03-tsgo-status.md](../../05-research/03-tsgo-status.md) 의 사실 자료:

- Microsoft는 transformer plugin 지원을 **deprioritized** (Issue #516, "Post-7.0" milestone)
- 공식 입장: "JS interaction and API is way more complicated as we have to bind JS and Go"
- 2025-03부터 dormant. 공식 플랜 없음
- tsgo 내부의 `internal/transformers/chain.go`는 **하드코딩된 리스트**만 사용 (외부 주입 훅 없음)
- IPC API (PR #711)는 **67개 메소드 모두 read-only** — type / symbol / diagnostic 쿼리만. AST 조작 불가.

→ Microsoft가 만들어줄 때까지 기다리면 **빨라야 2027 하반기**, 현실적으로는 더 늦음. 그 사이 typia 사용자는 TS 6.x에 묶이고 신규 사용자는 typia를 시도할 수 없다.

### 사실 4. 그러나 "Go 소스 fork + patch + hook"은 기술적으로 가능하다

[02-prior-art/04-effect-tsgo.md](02-prior-art/04-effect-tsgo.md):

- **Effect-TS/tsgo**가 이미 production-grade로 증명
- 24개 patch (각 ~10-50 LOC, hook 등록만) + 4개 Go 훅 모듈 + shim 자동생성
- 매 tsgo release마다 patch rebase (15~60분, conflict 빈도에 따라)
- 7 플랫폼 cross-compile, optionalDependencies로 npm 배포

같은 길을 typia가 가지 못할 이유는 없다. **다만 Effect는 Go 내부에서 완결**이고, typia는 **Node JS transformer를 불러와야 한다** — 이것이 ttsc만의 추가 퍼즐.

### 사실 5. 사상을 양보하는 대안은 모두 부족하다

| 대안 | 비용 | 사상 영향 |
|---|---|---|
| Generate 모드만 밀기 | 낮음 | 큰 양보 (`typia.is<T>()` 호출이 `import { isT } from "./x.generated"`로 바뀜) |
| TS 6.x LTS 계속 | 중 | 시간 매수만, 근본 해결 아님 |
| Zod 호환 런타임 검증기로 피벗 | 높 | **사상 완전 포기** |
| **ttsc 직접 개발** | **높** | **사상 양보 0** |

**높은 비용이지만 사상을 지키는 유일한 길**은 ttsc.

## ttsc가 풀어야 할 4가지 구체 문제

### P1. tsgo의 transform chain 안에 custom hook 을 만들 것
- Effect-TS 스타일: 패치로 hook registration point 추가
- ttsc의 핵심 patch

### P2. Go 측에서 Node JS transformer를 호출할 bridge
- typia transformer는 JS 코드 (`@typia/transform` / `@typia/core`)
- Go patch가 "여기서 외부 transformer를 부른다"면, 그 "외부"는 Node child process
- AST 직렬화 (MessagePack) + IPC + 재구성 과정 설계

### P3. tsconfig.json `plugins[]` 스키마 호환
- ts-patch/ttypescript의 스키마 그대로 수용
- 기존 typia 사용자의 tsconfig가 거의 변경 없이 작동해야 함

### P4. 배포 및 유지보수 비용 제어
- 7 플랫폼 cross-compile 자동화 (CI)
- 매 tsgo release마다 patch rebase (Effect 참고로 15~60분/회 예상)
- 버전 호환 매트릭스 관리

## 이 문제가 "사상 차원의 문제"인 이유

typia의 정체성은 "속도"가 아니라 "타입 한 번이면 모든 산출물"이다 ([01-philosophy/04-positioning.md](../../01-philosophy/04-positioning.md)). 이 정체성을 지키려면:

- 사용자가 `typia.is<Member>(input)`을 그대로 쓸 수 있어야 한다
- 별도 스키마 파일, 별도 생성 파일이 **없어야** 한다
- 컴파일 시점에 치환이 자동으로 일어나야 한다

이 세 조건을 tsgo 시대에 유지하는 기술적 담지체가 ttsc. 없으면 typia의 존재 의의가 바뀐다.

→ 다음 [03. ttsc Vision](03-ttsc-vision.md)
