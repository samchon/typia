import { Jev, JevHttpError } from "@typia/jev";
import typia from "typia";

import { check } from "./internal/asserts.js";

interface IDecision {
  /** Is the ticket urgent? */
  urgent: boolean;

  /** Which team owns the ticket? */
  team: "billing" | "technical";
}

/**
 * Verifies `@typia/jev` evaluates under Node ESM.
 *
 * Both helpers run against local fakes, so the check needs no network: the
 * TypeSafe path through a client with the SDK's `systemOne` shape, and the
 * OpenRouter path through a `fetch` that answers once with a 422 and once with
 * native Jev answers. The round trip proves the bundled `.mjs` converts the
 * questions, validates the answers, and exports its error class.
 */
export const test_jev = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const answers = {
    urgent: { type: "noul", noul: 0.7 },
    team: { type: "choice", choice: "technical" },
  };

  const direct = await Jev.typesafe({
    client: {
      systemOne: async (request) => {
        check(
          "boolean question sent as noul",
          request.questions.urgent?.type === "noul",
        );
        return {
          model: "jev-1.13.0",
          answers,
          usage: { input_tokens: 1, output_tokens: 0 },
        };
      },
    },
    evaluation,
    state: "The export button does nothing.",
  });
  check(
    "typesafe answers validate",
    direct.validation.success === true &&
      direct.validation.data.urgent === true &&
      direct.validation.data.team === "technical",
  );

  const responses: Response[] = [
    new Response(JSON.stringify({ error: { code: 422, message: "bad" } }), {
      status: 422,
    }),
    new Response(
      JSON.stringify({
        model: "typesafe/jev-1.13",
        answers,
        usage: { input_tokens: 1, output_tokens: 0 },
      }),
      { status: 200 },
    ),
  ];
  const fetch = (async () => responses.shift()!) as typeof globalThis.fetch;
  const failure: unknown = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    fetch,
  }).catch((error: unknown) => error);
  check(
    "openrouter throws JevHttpError",
    failure instanceof JevHttpError && failure.status === 422,
  );
  const routed = await Jev.openrouter({
    apiKey: "key",
    evaluation,
    state: "ticket",
    fetch,
  });
  check("openrouter answers validate", routed.validation.success === true);
};
