# 03. Plugin Contract

`ttsc` plugin 은 tsconfig 의 `compilerOptions.plugins[]` 에서 로드된다.

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "typia/lib/transform" }]
  }
}
```

## plugin module

plugin module 은 다음 중 하나를 export 한다.

- `default`
- `plugin`
- `createTtscPlugin`

factory 형태:

```ts
import { definePlugin } from "@typia/ttsc";

export default definePlugin((config, context) => ({
  name: "my-plugin",
  native: {
    mode: "my-plugin",
    binary: "/absolute/path/to/backend",
    contractVersion: 1,
  },
}));
```

## 현재 plugin shape

| 필드 | 의미 |
| --- | --- |
| `name` | plugin 이름 |
| `native.mode` | native rewrite backend id |
| `native.binary` | consumer native backend launcher |
| `native.contractVersion` | 현재 `1` |
| `native.capabilities` | `"rewrite"`, `"diagnostics"`, `"assets"` 같은 선언 |
| `transformOutput(context)` | emitted JS text 후처리 hook |

## 현재 제약

- 서로 다른 native mode/binary 를 동시에 compose 하지 않는다.
- 여러 `transformOutput()` 은 순서대로 적용된다.
- legacy `ts.Program` / `ts.TypeChecker` / `ts.NodeFactory` 를 JS plugin 에 넘기지 않는다.
- richer diagnostics callback, asset API, phase model 은 아직 public API 가 아니다.
