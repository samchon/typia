# 06. ttsc CLI parity 기준

이 문서는 `ttsc` 의 공개 CLI를 `tsc` / `tsgo` 감각에 맞추기 위한 현재 기준이다.

## 1. 확인한 upstream 기준

2026-04-24 기준 확인한 공식 자료:

- TypeScript 7.0 Beta 공지(2026-04-21): 현재는 `@typescript/native-preview@beta` 와 `tsgo` entry point 로 검증하고, stable TypeScript 7.0 에서는 `typescript` package 와 `tsc` entry point 로 들어간다.
- `microsoft/typescript-go` README: `npx tsgo` 는 `tsc` 처럼 사용한다.
- `@typescript/native-preview@7.0.0-dev.20260421.2` 로컬 help: 첫 번째 common command 는 `tsc`, 설명은 "Compiles the current project (tsconfig.json in the working directory.)" 이다.
- `microsoft/typescript-go` 최신 `main` 소스: `cmd/tsgo/main.go` 는 `--lsp` / `--api` 외 입력을 `execute.CommandLine(...)` 으로 넘긴다. `internal/execute/tsc.go` 는 `-b` / `--build` 만 build command parser 로 분기하고, 나머지는 일반 `tsc` command parser 로 처리한다.

즉 공개 compiler CLI의 기본 형태는 subcommand 중심이 아니다.

## 2. `tsc` / `tsgo` CLI 근육 기억

사용자가 기대하는 기본 흐름:

```bash
tsc
tsc -p tsconfig.json
tsc --noEmit
tsc --watch
tsc --version
tsc --help
```

TypeScript 7.0 Beta 문서는 `tsgo` 가 이 흐름을 대체한다고 설명한다.

```bash
tsgo
tsgo -p tsconfig.json
tsgo --noEmit
tsgo --watch
tsgo --version
tsgo --help
```

TS 6.0 이후의 중요한 CLI 의미:

- 현재 디렉터리 또는 상위 디렉터리에 `tsconfig.json` 이 있고 파일 인자가 없으면 현재 project 를 compile 한다.
- 파일 인자를 직접 넘기면 `tsconfig.json` 을 읽지 않는 lane 이다.
- TS 6.0 / TS 7.0 에서는 `tsconfig.json` 이 있는 디렉터리에서 파일 인자를 직접 넘기면 TS5112 진단이 난다. 이 경우 명시적으로 `--ignoreConfig` 를 써야 한다.
- `-b` / `--build` 는 project reference build lane 이며, 인자가 없으면 현재 디렉터리의 build 로 해석된다.

## 3. `ttsc` 공개 CLI 기준

`ttsc` 는 일반 사용자에게 다음 형태를 우선 제공한다.

```bash
ttsc
ttsc -p tsconfig.json
ttsc --noEmit
ttsc --watch
ttsc --version
ttsc --help
```

해석:

- `ttsc` 는 현재 project build 이다.
- `ttsc -p tsconfig.json` 은 지정 project build 이다.
- `ttsc --noEmit` 은 같은 pipeline 의 type/check lane 이다.
- `ttsc --watch` 는 JS host watch loop 이다.
- `ttsc build ...` 와 `ttsc check ...` 는 기존 문서/테스트 호환을 위한 alias 로 유지할 수 있으나, README와 사용자-facing 예시는 `ttsc` / `ttsc --noEmit` 을 우선한다.
- `ttsc transform --file ...` 은 bundler adapter hook 이며 `tsc` 호환 CLI가 아니라 `@typia/ttsc` 의 확장 subcommand 이다.

## 4. 이번 반영 사항

- `toolchain/ttsc/src/cli.ts` 에서 무인자 `ttsc` 를 help 출력이 아니라 project build 로 바꾼다.
- `toolchain/ttsc/cmd/ttsc/main.go` 의 native direct 실행도 무인자 build 로 맞춘다.
- README의 primary command 를 `ttsc build` 에서 `ttsc` 로 바꾼다.
- 공개 launcher 는 `bin/` 아래 구현 파일을 두지 않고 `src/launcher/` 에 둔다.
- local native binary 산출물은 `toolchain/ttsc/native/ttsc-native` 로 둔다.

## 5. 남은 차이

TypeScript-Go 최신 소스와 비교해 아직 `ttsc` 에 남은 차이:

- `-b` / `--build` project-reference builder: upstream `typescript-go` 는 구현되어 있으나 `ttsc` 는 아직 단일 project host 중심이다.
- `--ignoreConfig` 와 파일 인자: upstream 은 TS5112 흐름을 구현한다. `ttsc` 는 plugin host 특성상 project config 중심으로 동작하므로 파일 인자 shorthand 를 public guide 에서 내린다.
- TS7 parallel controls: `--checkers`, `--builders`, `--singleThreaded` 는 upstream CLI에 있으나 `ttsc` host option 으로 아직 승격하지 않았다.
- `--showConfig` / `--init` / full `--help --all`: upstream compiler CLI 표면이고, `ttsc` 는 현재 plugin host 에 필요한 최소 표면만 구현한다.

따라서 이번 기준은 "사용자-facing build 명령은 `tsc` 처럼 `ttsc`" 이고, project-reference / TS7 parallel flag parity 는 다음 CLI parity 단계의 작업이다.
