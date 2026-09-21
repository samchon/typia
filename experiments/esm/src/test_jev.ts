import { toJevQuestions } from "@typia/jev";
import typia from "typia";

import { check } from "./internal/asserts.js";

interface IDecision {
  /** Is the ticket urgent? */
  urgent: boolean;

  /** Which team owns the ticket? */
  team: "billing" | "technical";
}

/**
 * Verifies `@typia/jev` converts under Node ESM.
 *
 * The bundled `.mjs` must rename the boolean question to `noul` and leave the
 * choice question as it is, and the evaluation's `decode()` must accept a
 * native Jev answer map, so the round trip needs no network.
 */
export const test_jev = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const questions = toJevQuestions(evaluation.questions);
  check("boolean question becomes noul", questions.urgent?.type === "noul");
  check("choice question passes through", questions.team?.type === "choice");

  const result = evaluation.decode({
    urgent: { type: "noul", noul: 0.7 },
    team: { type: "choice", choice: "technical" },
  });
  check(
    "native answers decode",
    result.success === true &&
      result.data.urgent === true &&
      result.data.team === "technical",
  );
};
