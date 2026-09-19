import { TestValidator } from "@nestia/e2e";
import { Jev } from "@typia/jev";
import typia from "typia";

import { ITriage } from "../structures/ITriage";

/**
 * Verifies the state guard stays within reach of JSON's own walk.
 *
 * An earlier guard recognized built-ins by probing internal slots with calls
 * that throw on an ordinary object, paying about ten caught exceptions per
 * object: a state of 100k small records took a minute. The guard is now one
 * `JSON.stringify` pass with a replacer. The bound below is generous enough to
 * hold on a slow CI machine, yet far below what the throwing probes needed.
 *
 * 1. Build a state of 20k records, each with a nested object and an array.
 * 2. Evaluate it through a client that answers at once.
 * 3. Assert the whole call, guard included, finishes within two seconds.
 */
export const test_jev_state_guard_performance = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const state = {
    items: Array.from({ length: 20_000 }, (_, i) => ({
      id: i,
      nested: { name: `item-${i}`, active: true },
      tags: [1, 2, 3],
    })),
  };
  const started: number = Date.now();
  await Jev.typesafe({
    client: {
      systemOne: async () => ({
        model: "m",
        answers: ITriage.answers(),
        usage: { input_tokens: 1, output_tokens: 0 },
      }),
    },
    evaluation,
    state,
  });
  const elapsed: number = Date.now() - started;
  TestValidator.predicate(`guard took ${elapsed} ms`, elapsed < 2_000);
};
