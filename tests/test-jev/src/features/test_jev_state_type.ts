import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

import { ITriage } from "../structures/ITriage";

/**
 * Verifies the state type rejects what JSON cannot carry, at compile time.
 *
 * Both endpoints receive the state as JSON, where a function vanishes, a `Map`
 * becomes `{}`, and a `bigint` throws. TypeSafe's SDK types the state as a JSON
 * value with an index signature, which an interface-typed state never satisfies
 * although it is valid JSON. `Jev.Jsonable<S>` keeps the check at the type
 * level without that cost: each unfaithful part fails to compile, and every
 * faithful shape, interfaces included, compiles. The `@ts-expect-error` lines
 * are the negative cases; an unused one is itself a compile error, so each must
 * keep failing.
 *
 * 1. Compile evaluations whose state holds a function, a `Map`, a `Set`, a
 *    `bigint`, a class instance with a method, and an array with `undefined`
 *    elements, and expect each to fail.
 * 2. Compile an interface with optional and `Date` fields, a `Record<string,
 *    unknown>`, a union, a nested array, text, `null`, and an `unknown` value,
 *    and expect each to pass.
 */
export const test_jev_state_type = (): void => {
  const evaluation = typia.llm.evaluation<ITriage>();
  const client: Jev.ITypeSafeClient = {
    systemOne: async () => ({
      model: "m",
      answers: ITriage.answers(),
      usage: { input_tokens: 0, output_tokens: 0 },
    }),
  };

  class Ticket {
    public constructor(public readonly id: number) {}
    public close(): void {}
  }
  interface ITicket {
    id: number;
    title?: string;
    opened: Date;
    closed: Date | undefined;
    tags: string[];
    owner: { name: string; teams: Array<{ id: number }> } | null;
  }
  const ticket: ITicket = {
    id: 1,
    opened: new Date(0),
    closed: undefined,
    tags: ["billing"],
    owner: { name: "a", teams: [{ id: 1 }] },
  };
  const record: Record<string, unknown> = { anything: 1 };
  const opaque: unknown = { anything: 1 };

  const rejected = {
    callback: { callback: () => 1 },
    map: { tags: new Map<string, number>() },
    set: { tags: new Set<string>() },
    bigint: { id: 1n },
    method: { ticket: new Ticket(1) },
    hole: { list: [1, undefined] },
  };
  const accepted = {
    ticket: { ticket },
    union: { value: Math.random() > 0.5 ? "text" : { id: 1 } },
    matrix: { matrix: [[1, 2], [3]] },
  };

  // compiled, never run: the types are the subject
  const check = (): void => {
    // @ts-expect-error a function vanishes in JSON
    void Jev.typesafe({ client, evaluation, state: rejected.callback });
    // @ts-expect-error a Map becomes {}
    void Jev.typesafe({ client, evaluation, state: rejected.map });
    // @ts-expect-error a Set becomes {}
    void Jev.typesafe({ client, evaluation, state: rejected.set });
    // @ts-expect-error a bigint throws
    void Jev.typesafe({ client, evaluation, state: rejected.bigint });
    // @ts-expect-error a method vanishes in JSON
    void Jev.typesafe({ client, evaluation, state: rejected.method });
    // @ts-expect-error an undefined element becomes null
    void Jev.typesafe({ client, evaluation, state: rejected.hole });

    void Jev.typesafe({ client, evaluation, state: accepted.ticket });
    void Jev.typesafe({ client, evaluation, state: accepted.union });
    void Jev.typesafe({ client, evaluation, state: accepted.matrix });
    void Jev.typesafe({ client, evaluation, state: record });
    void Jev.typesafe({ client, evaluation, state: "text" });
    void Jev.typesafe({ client, evaluation, state: null });
    void Jev.typesafe({ client, evaluation, state: opaque as object });
  };
  TestEquality.equals("compiled", typeof check, "function");
};
