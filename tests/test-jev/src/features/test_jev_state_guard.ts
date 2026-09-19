import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";
import vm from "vm";

import { MockFetch } from "../internal/MockFetch";
import { ITriage } from "../structures/ITriage";

/**
 * Verifies both helpers reject exactly the states JSON cannot carry.
 *
 * The state reaches either endpoint as JSON, where a function vanishes, a `Map`
 * becomes `{}`, `NaN` or an array hole becomes `null`, and a cycle throws: the
 * model would otherwise judge something other than what the caller passed.
 * `IState` is typed loosely so an interface-typed state compiles, which makes
 * this run-time check the only guard. It must also not reject what JSON carries
 * faithfully: a `Date` through its `toJSON()`, which JSON calls with the key
 * `"state"`, a primitive wrapper, a null-prototype or tagged object, or a plain
 * object or wrapper from another realm.
 *
 * 1. Pass each unfaithful state and assert both helpers throw a `TypeError` naming
 *    its path, with no request sent.
 * 2. Pass each faithful state and assert both helpers send it.
 */
export const test_jev_state_guard = async (): Promise<void> => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const body = {
    model: "m",
    answers: ITriage.answers(),
    usage: { input_tokens: 1, output_tokens: 0 },
  };
  const attempt = async (state: Jev.IState) => {
    const mock = MockFetch([{ status: 200, body }]);
    const routed: unknown = await Jev.openrouter({
      apiKey: "key",
      evaluation,
      state,
      fetch: mock.fetch,
    }).catch((exp: unknown) => exp);
    let sent: boolean = false;
    const direct: unknown = await Jev.typesafe({
      client: {
        systemOne: async () => {
          sent = true;
          return body;
        },
      },
      evaluation,
      state,
    }).catch((exp: unknown) => exp);
    return { routed, direct, calls: mock.calls.length, sent };
  };

  class Ticket {
    public constructor(public readonly id: number) {}
  }
  const cyclic: Record<string, unknown> = { id: 1 };
  cyclic.self = cyclic;
  const rejected: Array<[string, Jev.IState, string]> = [
    ["map", { ticket: { tags: new Map([["a", 1]]) } }, "$state.ticket.tags"],
    ["function", { callback: () => 1 }, "$state.callback"],
    ["NaN", { score: [1, NaN] }, "$state.score[1]"],
    ["set", new Set([1]), "$state"],
    ["class instance", { ticket: new Ticket(1) }, "$state.ticket"],
    ["anonymous class", { ticket: new (class {})() }, "$state.ticket"],
    // eslint-disable-next-line no-sparse-arrays
    ["array hole", { list: [1, , 2] }, "$state.list[1]"],
    ["undefined element", { list: [1, undefined] }, "$state.list[1]"],
    ["toJSON returning NaN", { value: { toJSON: () => NaN } }, "$state.value"],
    ["bigint", { value: 1n as unknown as object }, "$state.value"],
    [
      "number wrapper converting to NaN",
      { value: Object.assign(new Number(1), { valueOf: () => NaN }) },
      "$state.value",
    ],
    [
      "number wrapper converting to Infinity",
      {
        value: Object.assign(new Number(1), {
          [Symbol.toPrimitive]: () => Infinity,
        }),
      },
      "$state.value",
    ],
    ["typed array", { bytes: new Uint8Array(1) }, "$state.bytes"],
    [
      "map claiming to be a wrapper",
      {
        tags: Object.defineProperty(new Map([["a", 1]]), Symbol.toStringTag, {
          value: "Boolean",
        }),
      },
      "$state.tags",
    ],
    ["key needing quotes", { "a.b": { "x y": NaN } }, '$state["a.b"]["x y"]'],
    [
      "toJSON dropping the state under its real key",
      { toJSON: (key: string) => (key === "state" ? undefined : { ok: 1 }) },
      "$state",
    ],
  ];
  for (const [title, state, path] of rejected) {
    const outcome = await attempt(state);
    if (title === "typed array")
      TestEquality.equals(
        "names the instance",
        (outcome.routed as Error).message,
        "Jev state must be JSON, but $state.bytes is an instance of Uint8Array, which JSON cannot carry.",
      );
    const names = (error: unknown): boolean =>
      error instanceof TypeError && error.message.includes(`${path} is `);
    TestEquality.equals(
      `rejects ${title}`,
      {
        routed: names(outcome.routed),
        direct: names(outcome.direct),
        calls: outcome.calls,
        sent: outcome.sent,
      },
      { routed: true, direct: true, calls: 0, sent: false },
    );
  }

  // a cycle is JSON's own TypeError, raised before any request
  const circular = await attempt(cyclic);
  TestEquality.equals(
    "rejects cycle",
    {
      routed: circular.routed instanceof TypeError,
      direct: circular.direct instanceof TypeError,
      calls: circular.calls,
      sent: circular.sent,
    },
    { routed: true, direct: true, calls: 0, sent: false },
  );

  interface ITicket {
    id: number;
    opened: Date;
    closed?: Date;
  }
  const ticket: ITicket = { id: 1, opened: new Date(0), closed: undefined };
  const bare: Record<string, unknown> = Object.create(null);
  bare.id = 1;
  const accepted: Array<[string, Jev.IState]> = [
    ["text", "text"],
    ["null", null],
    ["interface with a date", { ticket }],
    ["primitive wrappers", { flag: new Boolean(true), count: new Number(1) }],
    ["null prototype", bare],
    ["another realm", vm.runInNewContext("({ ticket: { id: 1, tags: [1] } })")],
    [
      "wrappers from another realm",
      vm.runInNewContext(
        "({ flag: new Boolean(true), count: new Number(1), text: new String('x') })",
      ),
    ],
    ["plain object with a tag", { [Symbol.toStringTag]: "Ticket", id: 1 }],
    [
      "toJSON keyed by the request's state",
      { toJSON: (key: string) => (key === "state" ? { ok: 1 } : undefined) },
    ],
  ];
  for (const [title, state] of accepted) {
    const outcome = await attempt(state);
    TestEquality.equals(
      `accepts ${title}`,
      {
        routed: (outcome.routed as Jev.IResult<ITriage>).validation?.success,
        direct: (outcome.direct as Jev.IResult<ITriage>).validation?.success,
        calls: outcome.calls,
        sent: outcome.sent,
      },
      { routed: true, direct: true, calls: 1, sent: true },
    );
  }
};
