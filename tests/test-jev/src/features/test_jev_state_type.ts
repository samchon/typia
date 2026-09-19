import { Jev } from "@typia/jev";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

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
 * 2. Compile an interface with optional and `Date` fields, typia-tagged strings,
 *    numbers, arrays, and tuples, tuples with optional and rest slots, a
 *    `Record<string, unknown>`, a union, a nested array, text, `null`, and an
 *    `unknown` value, and expect each to pass.
 * 3. Forward a generic state through a wrapper with explicit type arguments, and
 *    expect the check to hold through it.
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
    nested: { list: [{ tags: new Map<string, number>() }] },
    slot: { pair: [1, undefined] as [number, undefined] },
  };
  interface ITagged {
    id: string & tags.Format<"uuid">;
    count: number & tags.Type<"uint32"> & tags.Minimum<1>;
    names: Array<string & tags.MinLength<1>> & tags.MinItems<1>;
    unique: string[] & tags.UniqueItems;
    pair: [number, string] & tags.Example<[1, "a"]>;
    partial: [number, string?] & tags.Example<[1]>;
    rest: [number, ...string[]];
    opened?: Date & tags.Example<"2026-01-01T00:00:00Z">;
  }
  const tagged: ITagged = {
    id: "00000000-0000-4000-8000-000000000000",
    count: 1,
    names: ["a"],
    unique: ["a"],
    pair: [1, "a"],
    partial: [1],
    rest: [1, "a", "b"],
  };
  const accepted = {
    ticket: { ticket },
    tagged: { tagged },
    rootTaggedArray: ["a"] as string[] & tags.MinItems<1>,
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
    // @ts-expect-error a Map inside an array element becomes {}
    void Jev.typesafe({ client, evaluation, state: rejected.nested });
    // @ts-expect-error a required undefined tuple slot becomes null
    void Jev.typesafe({ client, evaluation, state: rejected.slot });

    void Jev.typesafe({ client, evaluation, state: accepted.ticket });
    void Jev.typesafe({ client, evaluation, state: accepted.tagged });
    void Jev.typesafe({ client, evaluation, state: accepted.rootTaggedArray });
    void Jev.typesafe({ client, evaluation, state: accepted.union });
    void Jev.typesafe({ client, evaluation, state: accepted.matrix });
    void Jev.typesafe({ client, evaluation, state: record });
    void Jev.typesafe({ client, evaluation, state: "text" });
    void Jev.typesafe({ client, evaluation, state: null });
    void Jev.typesafe({ client, evaluation, state: opaque as object });
  };
  // a wrapper forwarding its own generic state passes the type arguments
  const evaluate = <S extends Jev.IState>(state: S & Jev.Jsonable<S>) =>
    Jev.typesafe<ITriage, S>({ client, evaluation, state });
  const wrapped = (): void => {
    void evaluate(accepted.ticket);
    // @ts-expect-error the wrapper keeps the check
    void evaluate(rejected.map);
  };
  TestEquality.equals(
    "compiled",
    [typeof check, typeof wrapped],
    ["function", "function"],
  );
};
