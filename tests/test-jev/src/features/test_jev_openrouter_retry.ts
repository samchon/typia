import { Jev, JevHttpError } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter retries only transient failures, within its budget.
 *
 * A rate limit (429), an overload (529), and the gateway failures are
 * transient: they are retried, honoring `retry-after`, up to `maxRetries`
 * times. Once the budget is spent the last failure is thrown as
 * {@link JevHttpError}, never swallowed. An abort must interrupt the wait
 * between attempts.
 *
 * 1. Answer 429, then 529, then success, and assert three calls and a result.
 * 2. Answer 503 three times with `maxRetries: 1`, and assert two calls and a
 *    thrown 503.
 * 3. Abort during a long `retry-after` wait and assert the rejection.
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

  const recovered = MockFetch([
    {
      status: 429,
      body: { error: { code: 429, message: "slow down" } },
      headers: now,
    },
    {
      status: 529,
      body: { error: { code: 529, message: "overloaded" } },
      headers: now,
    },
    success,
  ]);
  const result = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    fetch: recovered.fetch,
  });
  TestEquality.equals("recovered calls", recovered.calls.length, 3);
  TestEquality.equals("recovered", result.validation.success, true);

  const exhausted = MockFetch([
    { status: 503, body: "unavailable", headers: now },
    { status: 503, body: "unavailable", headers: now },
    { status: 503, body: "unavailable", headers: now },
  ]);
  const error: unknown = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    maxRetries: 1,
    fetch: exhausted.fetch,
  }).catch((exp: unknown) => exp);
  TestEquality.equals("exhausted calls", exhausted.calls.length, 2);
  TestEquality.equals(
    "exhausted error",
    error instanceof JevHttpError ? [error.status, error.body] : error,
    [503, "unavailable"],
  );

  const controller = new AbortController();
  const waiting = MockFetch([
    { status: 429, body: "wait", headers: { "retry-after": "60" } },
  ]);
  const aborted = Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    signal: controller.signal,
    fetch: waiting.fetch,
  }).catch((exp: unknown) => exp);
  setTimeout(() => controller.abort(new Error("stop")), 10);
  const reason: unknown = await aborted;
  TestEquality.equals(
    "aborted during the wait",
    reason instanceof Error ? reason.message : reason,
    "stop",
  );
  TestEquality.equals("aborted calls", waiting.calls.length, 1);
};
