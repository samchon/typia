import { Jev, JevHttpError } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter fails fast on a permanent failure.
 *
 * A malformed request (400), a bad key (401), or a validation failure (422)
 * will not succeed on retry, so it must throw at once, carrying the status, the
 * parsed body, and OpenRouter's error message. A success response without an
 * answer map, model, or usage is a broken contract and must throw too, rather
 * than reach `validate()` as if it were an empty answer.
 *
 * 1. Answer 422 with OpenRouter's error body and assert one call and the error.
 * 2. Answer 401 with a plain text body and assert the text reaches the message.
 * 3. Answer 200 without `answers`, `usage`, or `model`, or with array answers, and
 *    assert the thrown contract error.
 */
export const test_jev_openrouter_error = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const run = async (
    status: number,
    body: unknown,
  ): Promise<{ error: unknown; calls: number }> => {
    const mock = MockFetch([{ status, body }]);
    const error: unknown = await Jev.openrouter({
      apiKey: "key",
      evaluation,
      model: "typesafe/jev-1.13",
      state: "ticket",
      fetch: mock.fetch,
    }).then(
      () => null,
      (exp: unknown) => exp,
    );
    return { error, calls: mock.calls.length };
  };
  const summary = (outcome: { error: unknown; calls: number }): unknown =>
    outcome.error instanceof JevHttpError
      ? {
          calls: outcome.calls,
          status: outcome.error.status,
          message: outcome.error.message,
          body: outcome.error.body,
        }
      : outcome;

  const body = {
    error: { code: 422, message: "questions.team.criteria: must not be empty" },
  };
  TestEquality.equals("422", summary(await run(422, body)), {
    calls: 1,
    status: 422,
    message:
      "Jev request failed with status 422: questions.team.criteria: must not be empty",
    body,
  });

  TestEquality.equals("401", summary(await run(401, "No auth credentials")), {
    calls: 1,
    status: 401,
    message: "Jev request failed with status 401: No auth credentials",
    body: "No auth credentials",
  });

  for (const [title, broken] of [
    ["answers", { model: "m", usage: {} }],
    ["usage", { model: "m", answers: {} }],
    ["model", { answers: {}, usage: {} }],
    ["array answers", { model: "m", answers: [], usage: {} }],
  ] as const)
    TestEquality.equals(
      `200 without ${title}`,
      summary(await run(200, broken)),
      {
        calls: 1,
        status: 200,
        message:
          "Jev request failed with status 200: the response is not an evaluation response with answers, model, and usage",
        body: broken,
      },
    );
};
