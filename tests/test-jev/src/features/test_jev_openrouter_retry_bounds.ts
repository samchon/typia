import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter bounds its retry loop and honors server pauses.
 *
 * A retry budget that is not a non-negative integer, such as `NaN` from an
 * unset environment variable, would make `attempt >= NaN` never true and retry
 * a steady 429 forever, so it is rejected up front, as is a timeout that is not
 * a positive number. A server pause of a minute or less is honored,
 * `retry-after-ms` first; a longer one falls back to the capped backoff instead
 * of hanging the call, as TypeSafe's own SDK does.
 *
 * 1. Pass invalid `maxRetries` and `timeout` values, and assert a `TypeError` with
 *    no request sent.
 * 2. Answer 429 with `retry-after: 3600`, then success, and assert a retry within
 *    seconds.
 * 3. Answer 429 with `retry-after-ms: 0` beside `retry-after: 3600`, and assert an
 *    immediate retry.
 * 4. Answer 429 with a past HTTP date, and assert an immediate retry.
 */
export const test_jev_openrouter_retry_bounds = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const success = {
    status: 200,
    body: {
      model: "m",
      answers: ITriage.answers(),
      usage: { input_tokens: 1, output_tokens: 0 },
    },
  };
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

  for (const [title, options] of [
    ["maxRetries NaN", { maxRetries: NaN }],
    ["maxRetries -1", { maxRetries: -1 }],
    ["maxRetries 1.5", { maxRetries: 1.5 }],
    ["timeout 0", { timeout: 0 }],
    ["timeout NaN", { timeout: NaN }],
    ["timeout Infinity", { timeout: Infinity }],
  ] as const) {
    const mock = MockFetch([success]);
    const error: unknown = await run(mock.fetch, options);
    TestEquality.equals(
      title,
      { type: error instanceof TypeError, calls: mock.calls.length },
      { type: true, calls: 0 },
    );
  }

  const retried = async (headers: Record<string, string>) => {
    const mock = MockFetch([{ status: 429, body: "later", headers }, success]);
    const started: number = Date.now();
    const result: unknown = await run(mock.fetch);
    return {
      calls: mock.calls.length,
      success: (result as Jev.IResult<ITriage>).validation?.success,
      elapsed: Date.now() - started,
    };
  };

  const long = await retried({ "retry-after": "3600" });
  TestEquality.equals(
    "long retry-after falls back to backoff",
    { calls: long.calls, success: long.success, bounded: long.elapsed < 3_000 },
    { calls: 2, success: true, bounded: true },
  );

  const precise = await retried({
    "retry-after-ms": "0",
    "retry-after": "3600",
  });
  TestEquality.equals(
    "retry-after-ms comes first",
    {
      calls: precise.calls,
      success: precise.success,
      immediate: precise.elapsed < 300,
    },
    { calls: 2, success: true, immediate: true },
  );

  const dated = await retried({
    "retry-after": new Date(Date.now() - 60_000).toUTCString(),
  });
  TestEquality.equals(
    "past http-date retries at once",
    {
      calls: dated.calls,
      success: dated.success,
      immediate: dated.elapsed < 300,
    },
    { calls: 2, success: true, immediate: true },
  );
};
