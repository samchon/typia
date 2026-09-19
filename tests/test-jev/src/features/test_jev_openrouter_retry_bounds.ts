import { Jev, JevHttpError } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter keeps its retry loop bounded.
 *
 * A retry budget that is not a non-negative integer, such as `NaN` from an
 * unset environment variable, made `attempt >= NaN` never true and retried a
 * steady 429 forever, so it must be rejected up front. A `retry-after` asking
 * for more than a minute must fail at once instead of hanging the call, while
 * an HTTP-date `retry-after` already in the past retries without waiting.
 *
 * 1. Pass `maxRetries` of `NaN`, `-1`, and `1.5`, and assert a `TypeError` with no
 *    request sent.
 * 2. Answer 429 with `retry-after: 3600`, and assert one call and the thrown 429.
 * 3. Answer 429 with a past HTTP date, then success, and assert two calls.
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

  for (const maxRetries of [NaN, -1, 1.5]) {
    const mock = MockFetch([success]);
    const error: unknown = await Jev.openrouter({
      apiKey: "key",
      evaluation,
      state: "ticket",
      maxRetries,
      fetch: mock.fetch,
    }).catch((exp: unknown) => exp);
    TestEquality.equals(
      `maxRetries ${maxRetries}`,
      { type: error instanceof TypeError, calls: mock.calls.length },
      { type: true, calls: 0 },
    );
  }

  const patient = MockFetch([
    { status: 429, body: "later", headers: { "retry-after": "3600" } },
    success,
  ]);
  const started: number = Date.now();
  const refused: unknown = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    fetch: patient.fetch,
  }).catch((exp: unknown) => exp);
  TestEquality.equals(
    "long retry-after fails at once",
    {
      status: refused instanceof JevHttpError ? refused.status : refused,
      calls: patient.calls.length,
      quick: Date.now() - started < 5_000,
    },
    { status: 429, calls: 1, quick: true },
  );

  const dated = MockFetch([
    {
      status: 429,
      body: "later",
      headers: { "retry-after": new Date(Date.now() - 60_000).toUTCString() },
    },
    success,
  ]);
  const result = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    fetch: dated.fetch,
  });
  TestEquality.equals(
    "past http-date retries",
    { calls: dated.calls.length, success: result.validation.success },
    { calls: 2, success: true },
  );
};
