import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { ITriage } from "../structures/ITriage";

/**
 * Verifies Jev.typesafe sends the wire format and validates the answers.
 *
 * TypeSafe's SDK client owns transport, so the helper's whole contract is the
 * request it hands the client and the result it composes from the response: the
 * boolean question must arrive as `noul`, the model override must pass through
 * only when given, and the native answers must fold back into the decision type
 * while the raw answers stay available.
 *
 * 1. Evaluate through a client that records its request and answers natively.
 * 2. Assert the request carried the state and the converted questions.
 * 3. Assert the validated decision, the raw answers, the model, and the usage.
 * 4. Assert an answer outside the declared options fails validation.
 */
export const test_jev_typesafe = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const requests: unknown[] = [];
  const client = (answers: object): Jev.ITypeSafeClient => ({
    systemOne: async (request) => {
      requests.push(request);
      return {
        model: "jev-1.13.0",
        answers,
        usage: { input_tokens: 42, output_tokens: 0 },
      };
    },
  });

  const result = await Jev.typesafe({
    client: client(ITriage.answers()),
    evaluation,
    state: "The payment page crashes for every customer.",
  });
  TestEquality.equals("request", requests[0], {
    state: "The payment page crashes for every customer.",
    questions: Jev.questions(evaluation.questions),
  });
  TestEquality.equals(
    "noul question",
    (requests[0] as Jev.IRequest).questions.urgent?.type,
    "noul",
  );
  TestEquality.equals<unknown>("result", result, {
    validation: { success: true, data: ITriage.decision },
    answers: ITriage.answers(),
    model: "jev-1.13.0",
    usage: { input_tokens: 42, output_tokens: 0 },
  } as unknown);

  await Jev.typesafe({
    client: client(ITriage.answers()),
    evaluation,
    state: { ticket: 1 },
    model: "jev-preview",
  });
  TestEquality.equals(
    "model override",
    (requests[1] as Jev.IRequest).model,
    "jev-preview",
  );

  const wrong = await Jev.typesafe({
    client: client({
      ...ITriage.answers(),
      team: { type: "choice", choice: "legal" },
    }),
    evaluation,
    state: "ticket",
  });
  TestEquality.equals("invalid choice fails", wrong.validation.success, false);
};
