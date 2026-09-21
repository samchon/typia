import { ILlmEvaluation, IValidation } from "@typia/interface";

import { _accessExpressionAsString } from "./_accessExpressionAsString";

/**
 * Compile-time plan of `typia.llm.evaluation<T>()`, one entry per decision leaf
 * of `T`.
 *
 * @internal
 */
export type _ILlmEvaluationPlan =
  | _ILlmEvaluationPlan.IBoolean
  | _ILlmEvaluationPlan.IChoice
  | _ILlmEvaluationPlan.IScore
  | _ILlmEvaluationPlan.ISet;

/** @internal */
export namespace _ILlmEvaluationPlan {
  interface IBase {
    /** Property names from the root of `T` to the leaf. */
    path: string[];
    instructions: string;
  }
  export interface IBoolean extends IBase {
    kind: "boolean";
    threshold: number;
  }
  export interface IChoice extends IBase {
    kind: "choice";
    options: IMember<string>[];
  }
  export interface IScore extends IBase {
    kind: "score";
    /** Sorted in ascending value order; level `i` is `levels[i]`. */
    levels: IMember<number>[];
  }
  export interface ISet extends IBase {
    kind: "set";
    members: ISetMember[];
  }
  export interface IMember<Value extends string | number> {
    value: Value;
    description?: string;
    /** Acceptance minimum of the member, when it has one. */
    minimum?: number;
  }
  export interface ISetMember {
    value: string;
    description?: string;
    threshold: number;
  }
}

/**
 * Creates the `ILlmEvaluation` of `typia.llm.evaluation<T>()` from its plan.
 *
 * Both the question map and the decoder derive their keys from here, so the
 * readable path encoding has a single owner.
 *
 * @internal
 */
export const _createLlmEvaluation = <T>(
  plan: _ILlmEvaluationPlan[],
): ILlmEvaluation<T> => {
  const questions: Record<string, ILlmEvaluation.IQuestion> = {};
  for (const leaf of plan) {
    if (leaf.kind === "set")
      for (const member of leaf.members)
        assign(questions, key([...leaf.path, member.value]), {
          type: "boolean",
          instructions: setInstructions(leaf, member),
        });
    else assign(questions, key(leaf.path), question(leaf));
  }
  return {
    questions,
    decode: (
      answers: unknown,
      rounding?: ILlmEvaluation.IRounding,
    ): IValidation<T> => decode(plan, answers, rounding),
  };
};

/* -----------------------------------------------------------
  QUESTIONS
----------------------------------------------------------- */
/**
 * Encodes a property path as a question key, like `refund.requested`.
 *
 * Every segment after the first uses typia's accessor notation, so the key is
 * the validation path without its `$input` root. The first segment is quoted
 * when it is not an identifier, and always when it is `__proto__`, so no key
 * can collide with another or reach an object's prototype.
 */
const key = (path: string[]): string => {
  const head: string = path[0]!;
  const postfix: string = _accessExpressionAsString(head);
  const first: string =
    head === "__proto__"
      ? `[${JSON.stringify(head)}]`
      : postfix.startsWith(".")
        ? head
        : postfix;
  return first + path.slice(1).map(_accessExpressionAsString).join("");
};

const question = (
  leaf:
    | _ILlmEvaluationPlan.IBoolean
    | _ILlmEvaluationPlan.IChoice
    | _ILlmEvaluationPlan.IScore,
): ILlmEvaluation.IQuestion => {
  if (leaf.kind === "boolean")
    return { type: "boolean", instructions: leaf.instructions };
  else if (leaf.kind === "choice") {
    const criteria: Record<string, string | null> = {};
    for (const option of leaf.options)
      assign(criteria, option.value, option.description ?? null);
    return { type: "choice", instructions: leaf.instructions, criteria };
  }
  return {
    type: "score",
    instructions: leaf.instructions,
    // the transform rejects fewer than two levels
    criteria: leaf.levels.map(
      (level) => level.description ?? String(level.value),
    ) as [string, string, ...string[]],
  };
};

const setInstructions = (
  leaf: _ILlmEvaluationPlan.ISet,
  member: _ILlmEvaluationPlan.ISetMember,
): string =>
  [
    leaf.instructions,
    "",
    `Does the option ${JSON.stringify(member.value)} apply?`,
    ...(member.description !== undefined ? [member.description] : []),
  ].join("\n");

/* -----------------------------------------------------------
  VALIDATION
----------------------------------------------------------- */
const decode = <T>(
  plan: _ILlmEvaluationPlan[],
  answers: unknown,
  rounding?: ILlmEvaluation.IRounding,
): IValidation<T> => {
  const precision: IPrecision | null = (() => {
    try {
      return readPrecision(rounding);
    } catch {
      // A trapping rounding object is an invalid declaration.
      return null;
    }
  })();
  if (precision === null)
    return {
      success: false,
      data: answers,
      errors: [
        {
          path: "$input",
          expected: "rounding decimals in [0, 15]",
          value: rounding,
          description:
            "Evaluation rounding decimals must be integers between 0 and 15.",
        },
      ],
    };
  const map: Record<string, unknown> | null = object(answers);
  if (map === null)
    return {
      success: false,
      data: answers,
      errors: [
        {
          path: "$input",
          expected: "Record<string, ILlmEvaluation answer>",
          value: answers,
        },
      ],
    };

  const errors: IValidation.IError[] = [];
  const expected: Set<string> = new Set();
  const output: Record<string, unknown> = {};
  const read = (id: string): unknown => {
    expected.add(id);
    try {
      return Object.prototype.hasOwnProperty.call(map, id)
        ? map[id]
        : undefined;
    } catch {
      // The decision reader reports the inaccessible answer on its own path.
      return undefined;
    }
  };

  for (const leaf of plan) {
    const path: string = accessor(leaf.path);
    if (leaf.kind === "set") {
      const values: string[] = [];
      for (const member of leaf.members) {
        const memberPath: string = [
          path,
          _accessExpressionAsString(member.value),
        ].join("");
        const answer: unknown = read(key([...leaf.path, member.value]));
        const probability: number | null = inspect(
          memberPath,
          answer,
          errors,
          () => booleanProbability(answer, memberPath, errors),
        );
        if (probability !== null && probability >= member.threshold)
          values.push(member.value);
      }
      place(output, leaf.path, values);
      continue;
    }
    const answer: unknown = read(key(leaf.path));
    if (leaf.kind === "boolean") {
      const probability: number | null = inspect(path, answer, errors, () =>
        booleanProbability(answer, path, errors),
      );
      if (probability !== null)
        place(output, leaf.path, probability >= leaf.threshold);
    } else if (leaf.kind === "choice") {
      const value: string | null = inspect(path, answer, errors, () =>
        choice(leaf, answer, path, errors, precision),
      );
      if (value !== null) place(output, leaf.path, value);
    } else {
      const value: number | null = inspect(path, answer, errors, () =>
        score(leaf, answer, path, errors, precision),
      );
      if (value !== null) place(output, leaf.path, value);
    }
  }
  let received: string[];
  try {
    received = Object.keys(map);
  } catch {
    errors.push({
      path: "$input",
      expected: "readable evaluation answer map",
      value: answers,
      description: "Evaluation answer keys could not be inspected.",
    });
    received = [];
  }
  for (const id of received)
    if (expected.has(id) === false)
      try {
        errors.push({
          path: `$input${_accessExpressionAsString(id)}`,
          expected: "undefined",
          value: map[id],
          description: "The answer does not belong to any question.",
        });
      } catch {
        errors.push({
          path: `$input${_accessExpressionAsString(id)}`,
          expected: "readable evaluation answer",
          value: undefined,
          description: "The extra answer could not be inspected.",
        });
      }
  return errors.length === 0
    ? { success: true, data: output as T }
    : { success: false, data: answers, errors };
};

/** Contain exceptions from getters and proxies at the decision path. */
const inspect = <T>(
  path: string,
  answer: unknown,
  errors: IValidation.IError[],
  read: () => T,
): T | null => {
  try {
    return read();
  } catch {
    errors.push({
      path,
      expected: "readable evaluation answer",
      value: answer,
      description: "The answer could not be inspected.",
    });
    return null;
  }
};

const booleanProbability = (
  answer: unknown,
  path: string,
  errors: IValidation.IError[],
): number | null => {
  const record: Record<string, unknown> | null = object(answer);
  const type: unknown = record?.type;
  const probability: unknown =
    record === null
      ? undefined
      : type === "boolean"
        ? record.probability
        : type === "noul"
          ? record.noul
          : undefined;
  if (isProbability(probability)) return probability;
  errors.push({
    path,
    expected:
      '{ type: "boolean"; probability: number } | { type: "noul"; noul: number }',
    value: answer,
    description:
      record === null
        ? "Missing boolean answer."
        : type !== "boolean" && type !== "noul"
          ? `Answer type must be "boolean" or "noul", but got ${label(type)}.`
          : "Boolean answer needs a probability in [0, 1].",
  });
  return null;
};

const choice = (
  leaf: _ILlmEvaluationPlan.IChoice,
  answer: unknown,
  path: string,
  errors: IValidation.IError[],
  precision: IPrecision,
): string | null => {
  const expected: string = `{ type: "choice"; choice: ${leaf.options
    .map((option) => JSON.stringify(option.value))
    .join(" | ")}; probabilities?: Record<string, number> }`;
  const record: Record<string, unknown> | null = object(answer);
  const type: unknown = record?.type;
  const selected: unknown = type === "choice" ? record?.choice : undefined;
  const option: _ILlmEvaluationPlan.IMember<string> | undefined =
    record !== null && type === "choice"
      ? leaf.options.find((o) => o.value === selected)
      : undefined;
  if (record === null || option === undefined) {
    errors.push({
      path,
      expected,
      value: answer,
      description:
        record === null
          ? "Missing choice answer."
          : type !== "choice"
            ? `Answer type must be "choice", but got ${label(type)}.`
            : "Choice answer must select one of the declared options.",
    });
    return null;
  }
  const probabilities: Record<string, number> | null | undefined = distribution(
    record.probabilities,
    leaf.options.map((o) => o.value),
    precision.probability,
  );
  if (probabilities === null) {
    errors.push({
      path,
      expected,
      value: answer,
      description:
        "Choice probabilities must contain every declared option exactly once, use numbers in [0, 1], and sum to 1.",
    });
    return null;
  }
  if (probabilities !== undefined) {
    const selected: number = own(probabilities, option.value)!;
    if (
      Object.values(probabilities).some(
        (probability) => probability > selected + PROBABILITY_TOLERANCE,
      )
    ) {
      errors.push({
        path,
        expected,
        value: answer,
        description:
          "Choice answer must select an option with maximum probability.",
      });
      return null;
    }
  }
  return accept(
    option,
    option.value,
    own(probabilities, option.value),
    path,
    answer,
    expected,
    errors,
  )
    ? option.value
    : null;
};

const score = (
  leaf: _ILlmEvaluationPlan.IScore,
  answer: unknown,
  path: string,
  errors: IValidation.IError[],
  precision: IPrecision,
): number | null => {
  const last: number = leaf.levels.length - 1;
  const expected: string = `{ type: "score"; score: number; probabilities?: Record<string, number> }`;
  const record: Record<string, unknown> | null = object(answer);
  const type: unknown = record?.type;
  const scored: unknown = type === "score" ? record?.score : undefined;
  if (
    record === null ||
    type !== "score" ||
    typeof scored !== "number" ||
    Number.isFinite(scored) === false ||
    scored < 0 ||
    scored > last
  ) {
    errors.push({
      path,
      expected,
      value: answer,
      description:
        record === null
          ? "Missing score answer."
          : type !== "score"
            ? `Answer type must be "score", but got ${label(type)}.`
            : `Score answer needs a score in [0, ${last}].`,
    });
    return null;
  }
  const probabilities: Record<string, number> | null | undefined = distribution(
    record.probabilities,
    leaf.levels.map((_, i) => String(i)),
    precision.probability,
  );
  if (probabilities === null) {
    errors.push({
      path,
      expected,
      value: answer,
      description:
        "Score probabilities must contain every level index exactly once, use numbers in [0, 1], and sum to 1.",
    });
    return null;
  }
  if (probabilities !== undefined) {
    const mean: number = leaf.levels.reduce(
      (total, _, index) => total + index * own(probabilities, String(index))!,
      0,
    );
    const meanRoundingError: number = leaf.levels.reduce(
      (total, _, index) => total + index * precision.probability,
      0,
    );
    if (
      Math.abs(mean - scored) >
      PROBABILITY_TOLERANCE + meanRoundingError + precision.score
    ) {
      errors.push({
        path,
        expected,
        value: answer,
        description:
          "Score must equal the probability-weighted mean of its distribution.",
      });
      return null;
    }
  }

  // the most probable level when a distribution exists, where a tie resolves
  // to the lower level; otherwise the level nearest to the fractional score,
  // where a half rounds up
  let index: number = Math.round(scored);
  if (probabilities !== undefined && Object.keys(probabilities).length !== 0) {
    index = -1;
    leaf.levels.forEach((_, i) => {
      const p: number | undefined = own(probabilities, String(i));
      if (
        p !== undefined &&
        (index === -1 || p > own(probabilities, String(index))!)
      )
        index = i;
    });
  }
  const level: _ILlmEvaluationPlan.IMember<number> = leaf.levels[index]!;
  return accept(
    level,
    level.value,
    own(probabilities, String(index)),
    path,
    answer,
    expected,
    errors,
  )
    ? level.value
    : null;
};

/** Enforces the acceptance minimum of the selected member, if any. */
const accept = (
  member: { minimum?: number },
  value: string | number,
  probability: number | undefined,
  path: string,
  answer: unknown,
  expected: string,
  errors: IValidation.IError[],
): boolean => {
  if (member.minimum === undefined) return true;
  if (probability === undefined) {
    errors.push({
      path,
      expected,
      value: answer,
      description: `${JSON.stringify(value)} requires probability >= ${member.minimum}, but the answer has no probability for it.`,
    });
    return false;
  }
  if (probability < member.minimum) {
    errors.push({
      path,
      expected,
      value: answer,
      description: `${JSON.stringify(value)} has probability ${probability} < ${member.minimum}.`,
    });
    return false;
  }
  return true;
};

/**
 * Reads optional `probabilities`: `undefined` when absent, `null` when
 * malformed.
 */
const distribution = (
  input: unknown,
  keys: string[],
  roundingError: number,
): Record<string, number> | null | undefined => {
  if (input === undefined) return undefined;
  const record: Record<string, unknown> | null = object(input);
  if (record === null) return null;
  if (Object.keys(record).length !== keys.length) return null;
  const output: Record<string, number> = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(record, key) === false)
      return null;
    const probability: unknown = record[key];
    if (isProbability(probability) === false) return null;
    assign(output, key, probability);
  }
  if (
    Math.abs(
      Object.values(output).reduce((sum, probability) => sum + probability, 0) -
        1,
    ) >
    PROBABILITY_TOLERANCE + keys.length * roundingError
  )
    return null;
  return output;
};

/** AI SDK's absolute tolerance for probability sums and derived values. */
const PROBABILITY_TOLERANCE = 1e-6;

interface IPrecision {
  probability: number;
  score: number;
}

/** AI SDK's declared decimal-precision rule, without an AI SDK dependency. */
const readPrecision = (
  rounding: ILlmEvaluation.IRounding | undefined,
): IPrecision | null => {
  if (rounding === undefined) return { probability: 0, score: 0 };
  if (
    typeof rounding !== "object" ||
    rounding === null ||
    Array.isArray(rounding)
  )
    return null;
  const record: Record<string, unknown> = rounding as Record<string, unknown>;
  const decimalError = (value: unknown): number | null =>
    value === undefined
      ? 0
      : typeof value === "number" &&
          Number.isInteger(value) &&
          value >= 0 &&
          value <= 15
        ? 0.5 * 10 ** -value
        : null;
  const probability: number | null = decimalError(record.probabilityDecimals);
  const score: number | null = decimalError(record.scoreDecimals);
  return probability === null || score === null ? null : { probability, score };
};

/* -----------------------------------------------------------
  HELPERS
----------------------------------------------------------- */
/**
 * Renders an untrusted answer `type` for a message; unlike `JSON.stringify`, it
 * never throws on a bigint or circular value.
 */
const label = (value: unknown): string =>
  typeof value === "string" ? JSON.stringify(value) : typeof value;

const accessor = (path: string[]): string =>
  "$input" + path.map(_accessExpressionAsString).join("");

/** Match AI SDK's JSON-record boundary, including null-prototype dictionaries. */
const object = (input: unknown): Record<string, unknown> | null => {
  if (typeof input !== "object" || input === null) return null;
  try {
    if (Array.isArray(input)) return null;
    const prototype: object | null = Object.getPrototypeOf(input);
    return prototype === Object.prototype || prototype === null
      ? (input as Record<string, unknown>)
      : null;
  } catch {
    // A revoked or trapping proxy is not a usable answer record.
    return null;
  }
};

/**
 * Reads an own probability, so an option named like an `Object.prototype`
 * member (`constructor`, `toString`, ...) never inherits a value.
 */
const own = (
  probabilities: Record<string, number> | undefined,
  key: string,
): number | undefined =>
  probabilities !== undefined &&
  Object.prototype.hasOwnProperty.call(probabilities, key)
    ? probabilities[key]
    : undefined;

const isProbability = (value: unknown): value is number =>
  typeof value === "number" &&
  Number.isFinite(value) &&
  value >= 0 &&
  value <= 1;

/** Writes the leaf value, creating the intermediate objects of its path. */
const place = (
  output: Record<string, unknown>,
  path: string[],
  value: unknown,
): void => {
  let target: Record<string, unknown> = output;
  path.slice(0, -1).forEach((name) => {
    if (Object.prototype.hasOwnProperty.call(target, name) === false)
      assign(target, name, {});
    target = target[name] as Record<string, unknown>;
  });
  assign(target, path[path.length - 1]!, value);
};

/** Own-property assignment that cannot reach the prototype via `__proto__`. */
const assign = (
  target: Record<string, unknown>,
  name: string,
  value: unknown,
): void => {
  if (name === "__proto__")
    Object.defineProperty(target, name, {
      value,
      enumerable: true,
      writable: true,
      configurable: true,
    });
  else target[name] = value;
};
