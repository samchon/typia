import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies both helpers reject a state JSON cannot carry, before any request.
 *
 * The state reaches either endpoint as JSON, where a function vanishes, a `Map`
 * becomes `{}`, and `NaN` becomes `null`: the model would silently judge
 * something other than what the caller passed. `IState` is typed loosely so an
 * interface-typed state compiles, which makes this run-time check the only
 * guard. Values with their own `toJSON()`, such as a `Date`, stay allowed.
 *
 * 1. Pass a nested `Map`, a function, `NaN`, a `Set`, and a class instance, and
 *    assert each throws a `TypeError` naming its path, with no request sent.
 * 2. Pass text, `null`, and an interface-typed object holding a `Date` and an
 *    `undefined` field, and assert each is sent.
 */
export const test_jev_state_guard = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const success = {
    status: 200,
    body: {
      model: "m",
      answers: ITriage.answers(),
      usage: { input_tokens: 1, output_tokens: 0 },
    },
  };
  class Ticket {
    public constructor(public readonly id: number) {}
  }

  for (const [title, state, path] of [
    ["map", { ticket: { tags: new Map([["a", 1]]) } }, "$state.ticket.tags"],
    ["function", { callback: () => 1 }, "$state.callback"],
    ["NaN", { score: [1, NaN] }, "$state.score[1]"],
    ["set", new Set([1]), "$state"],
    ["class instance", { ticket: new Ticket(1) }, "$state.ticket"],
  ] as const) {
    const mock = MockFetch([success]);
    const error: unknown = await Jev.openrouter({
      apiKey: "key",
      evaluation,
      state,
      fetch: mock.fetch,
    }).catch((exp: unknown) => exp);
    TestEquality.equals(
      `openrouter rejects ${title}`,
      {
        type: error instanceof TypeError,
        path: error instanceof Error && error.message.includes(`${path} is`),
        calls: mock.calls.length,
      },
      { type: true, path: true, calls: 0 },
    );

    let sent: boolean = false;
    const direct: unknown = await Jev.typesafe({
      client: {
        systemOne: async () => {
          sent = true;
          return success.body;
        },
      },
      evaluation,
      state,
    }).catch((exp: unknown) => exp);
    TestEquality.equals(
      `typesafe rejects ${title}`,
      { type: direct instanceof TypeError, sent },
      { type: true, sent: false },
    );
  }

  interface ITicket {
    id: number;
    opened: Date;
    closed?: Date;
  }
  const ticket: ITicket = { id: 1, opened: new Date(0), closed: undefined };
  for (const state of ["text", null, { ticket }]) {
    const mock = MockFetch([success]);
    const result = await Jev.openrouter({
      apiKey: "key",
      evaluation,
      state,
      fetch: mock.fetch,
    });
    TestEquality.equals(
      `accepts ${JSON.stringify(state)}`,
      result.validation.success,
      true,
    );
  }
};
