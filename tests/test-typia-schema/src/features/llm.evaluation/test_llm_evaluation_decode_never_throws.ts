import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies typia.llm.evaluation decode reports, never throws, on hostile answer
 * types.
 *
 * Malformed answer values should return an `IValidation` result. Its "wrong
 * answer type" messages describe the received `type`, and a bigint or circular
 * value there makes `JSON.stringify` throw, which would escape as an exception
 * instead of a failure on the decision path. A proxy may also throw while its
 * prototype is inspected for the answer-record check.
 *
 * 1. Answer each question family with a bigint `type`, then with a circular
 *    `type`.
 * 2. Decode each answer map.
 * 3. Assert a failure on every decision path, with no exception.
 * 4. Reject trapping and revoked proxies at each record boundary.
 * 5. Reject throwing getters and key enumerators on every answer shape.
 */
export const test_llm_evaluation_decode_never_throws = (): void => {
  const evaluation = typia.llm.evaluation<IDecision>();
  const circular: Record<string, unknown> = {};
  circular.self = circular;
  for (const [title, type] of [
    ["bigint", 1n],
    ["circular", circular],
  ] as const) {
    const result = evaluation.decode({
      urgent: { type },
      team: { type, choice: "billing" },
      level: { type, score: 0 },
    });
    TestEquality.equals(
      title,
      result.success ? [] : result.errors.map((e) => e.path),
      ["$input.urgent", "$input.team", "$input.level"],
    );
  }
  const valid = {
    urgent: { type: "boolean", probability: 1 },
    team: {
      type: "choice",
      choice: "billing",
      probabilities: { billing: 0.6, technical: 0.4 },
    },
    level: { type: "score", score: 0 },
  };
  const trapping = <T extends object>(value: T): T =>
    new Proxy(value, {
      getPrototypeOf: () => {
        throw new Error("prototype unavailable");
      },
    });
  const revoked = Proxy.revocable(valid, {});
  revoked.revoke();
  for (const [name, answers, expected] of [
    ["answer map", trapping(valid), "$input"],
    [
      "boolean answer",
      { ...valid, urgent: trapping(valid.urgent) },
      "$input.urgent",
    ],
    ["choice answer", { ...valid, team: trapping(valid.team) }, "$input.team"],
    [
      "score answer",
      { ...valid, level: trapping(valid.level) },
      "$input.level",
    ],
    [
      "distribution",
      {
        ...valid,
        team: {
          ...valid.team,
          probabilities: trapping(valid.team.probabilities),
        },
      },
      "$input.team",
    ],
    [
      "score distribution",
      {
        ...valid,
        level: {
          type: "score",
          score: 0.4,
          probabilities: trapping({ "0": 0.6, "1": 0.4, "2": 0 }),
        },
      },
      "$input.level",
    ],
    ["revoked answer map", revoked.proxy, "$input"],
  ] as const) {
    const result = evaluation.decode(answers);
    TestEquality.equals(
      name,
      result.success ? [] : result.errors.map((error) => error.path),
      [expected],
    );
  }

  const trappingGet = <T extends object>(value: T): T =>
    new Proxy(value, {
      get: () => {
        throw new Error("value unavailable");
      },
    });
  const trappingKeys = <T extends object>(value: T): T =>
    new Proxy(value, {
      ownKeys: () => {
        throw new Error("keys unavailable");
      },
    });
  const trappingDescriptor = <T extends object>(value: T): T =>
    new Proxy(value, {
      getOwnPropertyDescriptor: () => {
        throw new Error("property unavailable");
      },
    });
  const extra = Object.defineProperty({ ...valid }, "surplus", {
    enumerable: true,
    get: () => {
      throw new Error("extra unavailable");
    },
  });
  for (const [name, answers, expected] of [
    [
      "answer map getter",
      trappingGet(valid),
      ["$input.urgent", "$input.team", "$input.level"],
    ],
    ["answer map keys", trappingKeys(valid), ["$input"]],
    [
      "answer map property descriptor",
      trappingDescriptor(valid),
      ["$input.urgent", "$input.team", "$input.level", "$input"],
    ],
    [
      "boolean getter",
      { ...valid, urgent: trappingGet(valid.urgent) },
      ["$input.urgent"],
    ],
    [
      "choice getter",
      { ...valid, team: trappingGet(valid.team) },
      ["$input.team"],
    ],
    [
      "score getter",
      { ...valid, level: trappingGet(valid.level) },
      ["$input.level"],
    ],
    [
      "choice distribution getter",
      {
        ...valid,
        team: {
          ...valid.team,
          probabilities: trappingGet(valid.team.probabilities),
        },
      },
      ["$input.team"],
    ],
    [
      "choice distribution keys",
      {
        ...valid,
        team: {
          ...valid.team,
          probabilities: trappingKeys(valid.team.probabilities),
        },
      },
      ["$input.team"],
    ],
    [
      "choice distribution property descriptor",
      {
        ...valid,
        team: {
          ...valid.team,
          probabilities: trappingDescriptor(valid.team.probabilities),
        },
      },
      ["$input.team"],
    ],
    [
      "score distribution getter",
      {
        ...valid,
        level: {
          type: "score",
          score: 0.4,
          probabilities: trappingGet({ "0": 0.6, "1": 0.4, "2": 0 }),
        },
      },
      ["$input.level"],
    ],
    ["extra answer getter", extra, ["$input.surplus"]],
  ] as const) {
    const result = evaluation.decode(answers);
    TestEquality.equals(
      name,
      result.success ? [] : result.errors.map((error) => error.path),
      [...expected],
    );
  }
  TestEquality.equals(
    "rounding getter",
    (() => {
      const result = evaluation.decode(
        valid,
        trappingGet({ probabilityDecimals: 2 }),
      );
      return result.success ? [] : result.errors.map((error) => error.path);
    })(),
    ["$input"],
  );
  const set = typia.llm.evaluation<{
    /** Which channels apply? */
    channels: Array<"email" | "phone">;
  }>();
  const setResult = set.decode({
    "channels.email": trappingGet({ type: "boolean", probability: 0.7 }),
    "channels.phone": { type: "boolean", probability: 0.3 },
  });
  TestEquality.equals(
    "set member getter",
    setResult.success ? [] : setResult.errors.map((error) => error.path),
    ["$input.channels.email"],
  );
};

interface IDecision {
  /** Is it urgent? */
  urgent: boolean;

  /** Which team? */
  team: "billing" | "technical";

  /** How severe? */
  level: 0 | 1 | 2;
}
