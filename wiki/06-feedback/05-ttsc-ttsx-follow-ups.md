# 05. ttsc / ttsx 후속 과제

`toolchain/ttsc/README.md` 와 `toolchain/ttsx/README.md` 를 현재 코드 기준으로 다시 쓰면서 드러난, **문서로 숨기지 말아야 할 구현 편차**와 **개선 필요 사안**을 적는다.

핵심 원칙:

- wiki는 이상적인 long-term shape 를 지운 채 현재 구현을 미화하지 않는다.
- README에는 현재 제약을 사실대로 쓴다.
- wiki에는 그 제약이 왜 개선 과제인지 남긴다.

## F1. `ttsc` 는 현재 native consumer plugin 을 한 번에 하나만 수용

현재 `toolchain/ttsc/src/plugin.ts` 는 한 invocation 당 오직 하나의 `nativeMode` / `nativeBinary` 조합만 허용한다.

즉:

- native consumer plugin A + native consumer plugin B 동시 compose: 불가
- text-level `transformOutput()` plugin 다중 적용: 가능

현재 상태는 이해 가능하지만, long-term plugin host 이상과는 다르다. host가 truly general-purpose 를 표방하려면 multi-native composition story 가 필요하다.

### 개선 방향

1. native consumer dispatch chain 설계
2. plugin 간 ownership boundary 명시
3. mode collision 을 더 구조적으로 표현하는 manifest / phase model 도입

## F2. `ttsx` 의 CLI 표면이 JS API 표면보다 좁다

`RegisterOptions` 는 `plugins`, `rewriteMode`, `extensions`, `env` 를 받지만, CLI는 지금 다음만 expose 한다:

- `project`
- `cwd`
- `cacheDir`
- `binary`
- `require`

즉 CLI 사용자와 embedded API 사용자가 다른 능력을 가진다.

### 개선 방향

1. CLI와 JS API의 intentional 차이를 문서에 더 분명히 적기
2. 정말 필요한 옵션은 CLI로 승격
3. 승격하지 않을 옵션은 internal/advanced 로 명시

## F3. `ttsx` 는 CJS와 ESM의 실행 모델이 다르다

현재:

- CJS: per-file `transform()` + in-process require hook
- ESM: project `build()` + cache emit + child Node process

이건 현실적인 구현이지만, runner semantics 가 module kind 에 따라 크게 갈라진다는 뜻이다.

### 개선 방향

1. CJS/ESM 차이를 CLI help, README, wiki에서 더 명시
2. debugger / sourcemap / preload behavior 를 두 lane 모두에서 검증
3. 장기적으로는 ESM lane의 startup / cache invalidation / diagnostics UX 정리

## F4. native/default lane 과 browser/static-hosting lane 이 아직 완전히 합쳐지지 않았다

현재 중심축은 이미:

- `@typia/ttsc`
- `typia/lib/transform`
- `@typia/ttsx`

이다.

하지만 website playground 는 static-hosting 제약 때문에 아직:

- TS5
- `embed-typescript`
- `typia/lib/transform` compatibility entry

를 사용한다.

이건 당장 제거해야 할 악이라기보다, **서로 다른 제약을 가진 두 lane 이 공존**하고 있다는 뜻이다.

### 개선 방향

1. website docs 에 browser lane / native lane 구분을 더 명시
2. native host parity 를 website에서 과장하지 않기
3. 장기적으로 browser lane 을 별도 experimental/compatibility surface 로 명명

## F5. plugin author contract 는 존재하지만 아직 좁다

현재 plugin author 가 건드릴 수 있는 공적 표면은:

- `definePlugin(...)`
- `nativeMode`
- `nativeBinary`
- `transformOutput(context)`

정도다.

이건 작고 명확하다는 장점이 있지만, 다음은 아직 비어 있다.

- phase-aware hook model
- richer diagnostics callback
- asset emit API
- plugin-to-plugin coordination story

### 개선 방향

1. 지금 공개 계약을 README와 wiki에서 명시적으로 동결
2. future hook additions 를 appendix 가 아니라 staged contract 로 정리
3. typia 외 second consumer 를 통해 실제 부족한 표면을 검증

## F6. release lane 은 toolchain package 를 first-class publish 대상으로 유지해야 한다

이번 점검에서 확인한 릴리스 경계:

- workspace에는 `toolchain/*` 가 포함된다.
- root build는 `@typia/ttsc` 와 `@typia/ttsx` 를 먼저 빌드한다.
- local tarball 생성 스크립트도 `toolchain/*` 와 `packages/*` 를 함께 포장한다.

따라서 npm publish lane 도 `toolchain/*` 를 `packages/*` 와 같은 first-class 대상으로 다뤄야 한다. `typia` package 가 `@typia/ttsc` 를 dependency 로 가지므로, release 순서는 toolchain publish 후 packages publish 가 자연스럽다.

### 개선 방향

1. `package:latest` 와 `package:next` 에서 `toolchain/*` publish 를 빠뜨리지 않기
2. `@typia/ttsx` bin launcher 가 tarball에 실제 포함되는지 pack dry-run 으로 확인
3. release workflow에서 전달하는 `--no-git-checks`, `--provenance` 같은 publish option 이 toolchain publish 에도 동일하게 적용되는지 확인
