import assert from "node:assert/strict";
import path from "node:path";
import type { ITtscPluginFactoryContext } from "ttsc";
import { createTtscPlugin } from "typia/lib/transform";

/**
 * Verifies the descriptor declares its external file reads for ttsc replay.
 *
 * Resolving typia is a recorded module lookup, so the descriptor reads no
 * external file. Omitting that declaration forces evaluation on every launch.
 *
 * 1. Resolve typia from this real workspace consumer through the public factory.
 * 2. Require an empty external-input map and the resolved native entry point.
 * 3. Call again and require a fresh declaration with the same resolved source.
 */
export const test_transform_descriptor_host_inputs = (): void => {
  const context = { projectRoot: process.cwd() } as ITtscPluginFactoryContext;
  const first = createTtscPlugin(context);
  const second = createTtscPlugin(context);
  assert.deepEqual(first.hostInputHashes, {});
  assert.equal(first.name, "typia");
  assert.equal(
    first.source,
    path.resolve(
      path.dirname(require.resolve("typia/package.json")),
      "native",
      "cmd",
      "ttsc-typia",
    ),
  );
  assert.deepEqual(second.hostInputHashes, {});
  assert.notEqual(first.hostInputHashes, second.hostInputHashes);
  assert.equal(second.source, first.source);
};
