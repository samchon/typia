# 06. ttsc CLI Parity

현재 공개 CLI 기준만 적는다.

## primary commands

```bash
ttsc
ttsc -p tsconfig.json
ttsc --noEmit
ttsc --watch
ttsc --version
ttsc --help
```

의미:

- `ttsc`: 현재 project build
- `ttsc -p tsconfig.json`: 지정 project build
- `ttsc --noEmit`: check lane
- `ttsc --watch`: JS host watch loop

## compatibility / extension commands

```bash
ttsc build
ttsc check
ttsc transform --file=src/index.ts
ttsc demo --type=string
```

- `build`: `ttsc` 와 같은 build lane alias
- `check`: `--noEmit` alias
- `transform`: bundler adapter 용 per-file API
- `demo`: native backend smoke 용

## current gaps vs full `tsc`

- project references build parity
- `--ignoreConfig`
- `--showConfig`
- `--init`
- TS7 `--checkers`, `--builders`, `--singleThreaded`
- full help surface

## error surface

- missing tsconfig: `ttsc:` prefix error
- invalid tsconfig parse/options: TypeScript-Go diagnostics on stderr
- invalid CLI option: exit code `2`
- build/emit failure: non-zero status and stderr
