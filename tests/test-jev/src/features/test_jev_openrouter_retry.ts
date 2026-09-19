import {
  Jev,
  JevConnectionError,
  JevHttpError,
  JevTimeoutError,
} from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter retries what TypeSafe's own SDK retries.
 *
 * The OpenRouter client has no SDK of its own, so it follows the policy of
 * `@typesafe-ai/sdk`, the reference client for the Jev wire format: a timeout
 * (408), a rate limit (429), any server failure (5xx), a request that got no
 * response, and an attempt that timed out are retried, up to `maxRetries`. Once
 * the budget is spent, each kind of failure throws its own error. An abort is
 * the caller's decision and is never retried.
 *
 * 1. Answer 408, 429, 500, and 529 before success, and assert five calls.
 * 2. Answer 503 past a budget of one, and assert the thrown 503.
 * 3. Fail to connect, then succeed; then fail to connect past the budget, and
 *    assert `JevConnectionError` carrying the cause.
 * 4. Hang past the timeout twice, and assert `JevTimeoutError`.
 * 5. Abort while waiting to retry and while a request hangs, and assert the
 *    signal's reason with no further call.
 */
export const test_jev_openrouter_retry = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const success = {
    status: 200,
    body: {
      model: "typesafe/jev-1.13-20260917",
      answers: ITriage.answers(),
      usage: { input_tokens: 1, output_tokens: 0 },
    },
  };
  const now = { "retry-after": "0" };
  const run = (
    fetch: typeof globalThis.fetch,
    options: Partial<Jev.IOpenRouterProps<ITriage, string>> = {},
  ) =>
    Jev.openrouter({
      apiKey: "key",
      evaluation,
      model: "typesafe/jev-1.13",
      state: "ticket",
      fetch,
      ...options,
    }).catch((exp: unknown) => exp);

  const statuses = MockFetch([
    { status: 408, body: "timeout", headers: now },
    { status: 429, body: "slow down", headers: now },
    { status: 500, body: "failed", headers: now },
    { status: 529, body: "overloaded", headers: now },
    success,
  ]);
  const recovered = await run(statuses.fetch, { maxRetries: 4 });
  TestEquality.equals("retryable statuses", statuses.calls.length, 5);
  TestEquality.equals(
    "recovered",
    (recovered as Jev.IResult<ITriage>).validation.success,
    true,
  );

  const exhausted = MockFetch([
    { status: 503, body: "unavailable", headers: now },
    { status: 503, body: "unavailable", headers: now },
    { status: 503, body: "unavailable", headers: now },
  ]);
  const unavailable = await run(exhausted.fetch, { maxRetries: 1 });
  TestEquality.equals(
    "exhausted",
    {
      calls: exhausted.calls.length,
      status: unavailable instanceof JevHttpError ? unavailable.status : null,
    },
    { calls: 2, status: 503 },
  );

  const reconnected = MockFetch([
    { error: new TypeError("fetch failed") },
    success,
  ]);
  const connected = await run(reconnected.fetch);
  TestEquality.equals(
    "reconnected",
    {
      calls: reconnected.calls.length,
      success: (connected as Jev.IResult<ITriage>).validation.success,
    },
    { calls: 2, success: true },
  );

  const cause = new TypeError("getaddrinfo ENOTFOUND openrouter.ai");
  const offline = MockFetch([{ error: cause }, { error: cause }]);
  const disconnected = await run(offline.fetch, { maxRetries: 1 });
  TestEquality.equals(
    "disconnected",
    {
      calls: offline.calls.length,
      connection:
        disconnected instanceof JevConnectionError &&
        disconnected instanceof JevTimeoutError === false,
      cause: disconnected instanceof Error && disconnected.cause === cause,
    },
    { calls: 2, connection: true, cause: true },
  );

  // a missing timeout must fail this test, not hang the suite
  const hanging = MockFetch([{ hang: true }, { hang: true }]);
  const expired: unknown = await Promise.race([
    run(hanging.fetch, { maxRetries: 1, timeout: 20 }),
    new Promise((resolve) => setTimeout(() => resolve("no timeout"), 5_000)),
  ]);
  TestEquality.equals(
    "timed out",
    {
      calls: hanging.calls.length,
      timeout: expired instanceof JevTimeoutError ? expired.timeout : null,
    },
    { calls: 2, timeout: 20 },
  );

  const waiting = new AbortController();
  const paused = MockFetch([
    { status: 429, body: "wait", headers: { "retry-after": "30" } },
  ]);
  const pending = run(paused.fetch, { signal: waiting.signal });
  setTimeout(() => waiting.abort(new Error("stop waiting")), 10);
  const stoppedWaiting: unknown = await pending;
  TestEquality.equals(
    "aborted while waiting",
    {
      reason: stoppedWaiting instanceof Error ? stoppedWaiting.message : null,
      calls: paused.calls.length,
    },
    { reason: "stop waiting", calls: 1 },
  );

  const requesting = new AbortController();
  const stalled = MockFetch([{ hang: true }, success]);
  const inflight = run(stalled.fetch, { signal: requesting.signal });
  setTimeout(() => requesting.abort(new Error("stop requesting")), 10);
  const stoppedRequesting: unknown = await inflight;
  TestEquality.equals(
    "aborted while requesting",
    {
      reason:
        stoppedRequesting instanceof Error ? stoppedRequesting.message : null,
      calls: stalled.calls.length,
    },
    { reason: "stop requesting", calls: 1 },
  );
};
