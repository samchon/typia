import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.openrouter speaks OpenRouter's Decisions API.
 *
 * The endpoint is `POST {baseURL}/decisions` on the alpha API, authenticated by
 * a bearer key. The body carries `model`, `state`, and the questions in the Jev
 * wire format, plus any extra fields such as `provider`, which must never
 * override the three core fields. The answers fold back into the decision type
 * and the usage keeps OpenRouter's `cost`.
 *
 * 1. Evaluate with defaults and assert the URL, method, headers, and body.
 * 2. Assert the validated decision, raw answers, model, and usage with cost.
 * 3. Evaluate with a custom base URL, model, headers, and extra body fields, and
 *    assert the core fields win over conflicting extras, and the key and
 *    content type over conflicting headers in any letter case.
 */
export const test_jev_openrouter_request = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const response = {
    id: "gen-1",
    provider: "TypeSafe",
    model: "typesafe/jev-1.13-20260917",
    answers: ITriage.answers(),
    usage: { input_tokens: 42, output_tokens: 0, cost: 0.0000018 },
  };

  const plain = MockFetch([{ status: 200, body: response }]);
  const result = await Jev.openrouter({
    apiKey: "sk-or-test",
    evaluation,
    model: "typesafe/jev-1.13",
    state: "The payment page crashes for every customer.",
    fetch: plain.fetch,
  });
  TestEquality.equals(
    "url",
    plain.calls[0]?.url,
    "https://openrouter.ai/api/alpha/decisions",
  );
  TestEquality.equals("method", plain.calls[0]?.init.method, "POST");
  TestEquality.equals("headers", entries(plain.calls[0]?.init.headers), {
    authorization: "Bearer sk-or-test",
    "content-type": "application/json",
  });
  TestEquality.equals("body", JSON.parse(String(plain.calls[0]?.init.body)), {
    model: "typesafe/jev-1.13",
    state: "The payment page crashes for every customer.",
    questions: Jev.questions(evaluation.questions),
  });
  TestEquality.equals<unknown>("result", result, {
    validation: { success: true, data: ITriage.decision },
    answers: ITriage.answers(),
    model: "typesafe/jev-1.13-20260917",
    usage: { input_tokens: 42, output_tokens: 0, cost: 0.0000018 },
  } as unknown);

  const custom = MockFetch([{ status: 200, body: response }]);
  await Jev.openrouter({
    apiKey: "sk-or-test",
    evaluation,
    state: { ticket: 1 },
    model: "typesafe/jev-latest",
    baseURL: "https://gateway.example.com/alpha/",
    headers: {
      "X-Title": "triage",
      authorization: "Bearer overridden",
      "CONTENT-TYPE": "text/plain",
    },
    body: { provider: { order: ["TypeSafe"] }, user: "u-1", model: "hijack" },
    fetch: custom.fetch,
  });
  TestEquality.equals(
    "custom url",
    custom.calls[0]?.url,
    "https://gateway.example.com/alpha/decisions",
  );
  TestEquality.equals(
    "custom headers",
    entries(custom.calls[0]?.init.headers),
    {
      "x-title": "triage",
      authorization: "Bearer sk-or-test",
      "content-type": "application/json",
    },
  );
  TestEquality.equals(
    "custom body",
    JSON.parse(String(custom.calls[0]?.init.body)),
    {
      provider: { order: ["TypeSafe"] },
      user: "u-1",
      model: "typesafe/jev-latest",
      state: { ticket: 1 },
      questions: Jev.questions(evaluation.questions),
    },
  );
};

/** Headers as sent, one lowercase entry per name. */
const entries = (headers: HeadersInit | undefined): Record<string, string> =>
  Object.fromEntries(new Headers(headers).entries());
