# Appendix A.2 — libsyncrpc (Microsoft의 Node sync IPC 라이브러리)

> 출처: `github.com/microsoft/libsyncrpc` — Microsoft가 tsgo `@typescript/api`에서 동기 IPC에 쓰는 NAPI 모듈.
> 용도: ttsc의 `@ttsc/node-bridge`에서 그대로 재사용.

## 정체

- NAPI-based NPM 패키지 (NAPI-RS 사용, Rust로 구현)
- **동기** stdio/pipe IPC를 Node 스레드에서 제공
- 서명: `@typescript/libsyncrpc`

## 왜 동기인가

tsgo의 type checker 호출 경로는 tsc와 같은 프로세스 모델을 흉내내야 한다. 동기 IPC가:
- tsc API semantics 그대로
- await 전파가 TypeScript compiler API 전체를 async화시키는 문제 회피
- TypeScript 자체가 동기로 설계됨

ttsc도 동일한 이유로 동기가 자연스럽다. typia transformer는 Program/TypeChecker를 동기로 호출한다.

## 핵심 API

```ts
import { SyncRpcChannel } from "@typescript/libsyncrpc";

const chan = new SyncRpcChannel({
  command: "node",
  args: ["child.js"],
  stdio: "pipe",
});

// 동기 호출
const result = chan.requestSync("methodName", "payload string");

// 동기 바이너리 호출
const bin = chan.requestBinarySync("Transform", astBuffer);  // Uint8Array

// 콜백 등록
chan.registerCallback("GetTypeOfNode", (name, payload) => {
  // child이 부모에게 질의. 여기서도 동기 반환해야 함.
  return computedTypeInfo;
});
```

## 동작 원리

- 부모 Node 스레드는 child의 stdin/stdout을 **블로킹 읽기**
- 이벤트 루프가 멈추지만 RPC는 로컬이라 빠름 (~μs)
- child에서 콜백 요청 시 부모가 요청을 처리하고 응답, 그 후 원래 요청 계속

## ttsc 매핑

### 부모 = Go 바이너리 (`ttsc-go`)
Go는 동기 stdio IO가 native. libsyncrpc 필요 없음.

### 자식 = `@ttsc/node-bridge`
자식 Node 프로세스는 stdin에서 MessagePack 프레임을 읽음. **여기서 libsyncrpc 스타일 동기 loop**가 효율적.

### callback (자식 → 부모) 방향
자식이 Go에 `GetTypeOfNode` 질의. 자식 Node가 stdin/stdout의 역방향 통신 사용 — 역시 동기.

```ts
// @ttsc/node-bridge (child)
import { createSyncPeer } from "some-sync-stdio-lib";

const peer = createSyncPeer();

// Go → 우리
peer.onRequest("Transform", (sourceFileBuf) => {
  const sourceFile = decodeAST(sourceFileBuf);
  const program = createProgramProxy(peer);  // TypeChecker 호출 시 peer.requestSync
  const transformer = require("typia/lib/transform").default;
  const factory = transformer(program, options, extras);
  const transformed = ts.transform(sourceFile, [factory], compilerOptions);
  return encodeAST(transformed);
});

peer.run();
```

## 대체 가능한 라이브러리

- `node-sync-ipc` (MMhunter) — 순수 JS, libsyncrpc 만큼 빠르지 않음
- 자체 구현: `fs.readSync(0, ...)` 블로킹 읽기 + 메시지 프레임 파싱. 50~100 LOC로 가능.

## ttsc의 선택

**권장**: v0~v0.9는 자체 구현 (의존성 최소). v1.0 이후 libsyncrpc 도입 검토 (Microsoft가 계속 유지할 경우).

이유:
- 의존성 추가 = 배포 복잡도 (NAPI 바이너리 또한 플랫폼 의존)
- 자체 구현은 50 LOC, 교체 쉬움

## 참고 샘플 코드 (자체 구현)

```ts
// sync-stdio-peer.ts (개념 스케치)
import * as msgpack from "@msgpack/msgpack";

const BUFFER_SIZE = 65536;
const readBuf = Buffer.alloc(BUFFER_SIZE);

function readFrame(): unknown {
  // Length-prefixed MessagePack 프레임 읽기
  let lenBytes = Buffer.alloc(4);
  fs.readSync(0, lenBytes, 0, 4, null);
  const len = lenBytes.readUInt32BE(0);
  
  const dataBuf = Buffer.alloc(len);
  let read = 0;
  while (read < len) {
    const n = fs.readSync(0, dataBuf, read, len - read, null);
    read += n;
  }
  return msgpack.decode(dataBuf);
}

function writeFrame(msg: unknown): void {
  const data = msgpack.encode(msg);
  const lenBytes = Buffer.alloc(4);
  lenBytes.writeUInt32BE(data.length, 0);
  fs.writeSync(1, lenBytes);
  fs.writeSync(1, data);
}

function loop(): void {
  while (true) {
    const req = readFrame() as any;
    if (req[0] === MSG_REQUEST) {
      const result = handleRequest(req[1], req[2]);
      writeFrame([MSG_RESPONSE, req[2], result]);
    }
  }
}
```

## 한 줄 요약

> ttsc Node bridge는 libsyncrpc와 유사한 동기 stdio pattern이지만, v1까지는 자체 50 LOC 구현으로 충분. 필요시 Microsoft 라이브러리로 교체.
