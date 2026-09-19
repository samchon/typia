import { ILlmEvaluation, IValidation } from "@typia/interface";

import { JevHttpError } from "./JevHttpError";

/**
 * Jev integration for `typia.llm.evaluation<T>()`.
 *
 * Jev, TypeSafe's System One model, answers typed evaluation questions with
 * calibrated probabilities. `typia.llm.evaluation<T>()` emits the
 * provider-neutral question shape of Vercel AI SDK's `experimental_evaluate()`,
 * which spells the yes/no question `"boolean"`; Jev's own wire format spells it
 * `"noul"`. That wire format is shared by TypeSafe's API and OpenRouter's
 * Decisions API.
 *
 * - {@link Jev.questions}: convert the questions to the Jev wire format
 * - {@link Jev.typesafe}: evaluate through TypeSafe's official SDK client
 * - {@link Jev.openrouter}: evaluate through OpenRouter's Decisions API
 *
 * Both helpers return the validation of the answers folded back into `T`,
 * together with the raw answers, which keep the probabilities, confidence, and
 * legend that `T` has no room for.
 *
 * This integration is experimental, like the evaluation APIs it targets.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace Jev {
  /* -----------------------------------------------------------
    WIRE FORMAT
  ----------------------------------------------------------- */
  /** Question in the Jev wire format. */
  export type IQuestion =
    | ILlmEvaluation.IChoice
    | ILlmEvaluation.IScore
    | INoul;

  /**
   * Yes/no question in the Jev wire format.
   *
   * The neutral {@link ILlmEvaluation.IBoolean} question, spelled `"noul"`.
   */
  export interface INoul {
    /** Discriminator. */
    type: "noul";

    /** What to decide. */
    instructions: string;
  }

  /**
   * State to evaluate: text, or a JSON object or array.
   *
   * Both endpoints receive it as JSON. A value JSON cannot carry faithfully,
   * such as a function, a `Map`, a class instance without `toJSON()`, or `NaN`,
   * is rejected with a `TypeError` before any request, instead of reaching the
   * model as something else.
   */
  export type IState = string | object | null;

  /** Request body of the Jev endpoints. */
  export interface IRequest {
    /** Model to answer. */
    model: string;

    /** State the questions are asked about. */
    state: IState;

    /** Questions keyed by the names identifying their answers. */
    questions: Record<string, IQuestion>;
  }

  /** Answer in the Jev wire format. */
  export type IAnswer = INoulAnswer | IChoiceAnswer | IScoreAnswer;

  /** Answer of a {@link INoul} question. */
  export interface INoulAnswer {
    /** Discriminator. */
    type: "noul";

    /** Probability of "yes", from 0 to 1. */
    noul: number;
  }

  /** Answer of a choice question. */
  export interface IChoiceAnswer {
    /** Discriminator. */
    type: "choice";

    /** Selected option. */
    choice: string;

    /** Probability of every option. */
    probabilities?: Record<string, number>;

    /** Confidence in the selected option, from 0 to 1. */
    confidence?: number;
  }

  /** Answer of a score question. */
  export interface IScoreAnswer {
    /** Discriminator. */
    type: "score";

    /** Probability-weighted mean level, which may fall between levels. */
    score: number;

    /** Probability of every level, keyed by its index. */
    probabilities?: Record<string, number>;

    /** Level descriptions, keyed by index. */
    legend?: Record<string, unknown>;

    /** Confidence in the score, from 0 to 1. */
    confidence?: number;
  }

  /** Token usage of one request. */
  export interface IUsage {
    /** Input tokens, the only metered ones. */
    input_tokens: number;

    /** Output tokens. */
    output_tokens: number;

    /** Cost of the request, reported by OpenRouter. */
    cost?: number;
  }

  /** Response body of the Jev endpoints. */
  export interface IResponse {
    /** Versioned model that answered. */
    model: string;

    /** Answers keyed by the question names. */
    answers: Record<string, IAnswer>;

    /** Token usage. */
    usage: IUsage;
  }

  /* -----------------------------------------------------------
    EVALUATION
  ----------------------------------------------------------- */
  /** Result of one evaluation. */
  export interface IResult<T> {
    /** Answers validated and folded back into `T`. */
    validation: IValidation<T>;

    /** Raw answers, keeping probabilities, confidence, and legend. */
    answers: Record<string, IAnswer>;

    /** Versioned model that answered. */
    model: string;

    /** Token usage. */
    usage: IUsage;
  }

  /**
   * TypeSafe's official SDK client, as far as this integration needs it.
   *
   * `TypeSafeClient` from `@typesafe-ai/sdk` satisfies this structurally, so
   * the SDK's retries, environment-based configuration, and logging stay in
   * charge without this package depending on it.
   *
   * The SDK types the state as a JSON value with an index signature, which an
   * interface-typed state never satisfies although it is valid JSON. This
   * structure takes any {@link IState} instead, and {@link typesafe} checks the
   * value at run time before handing it over.
   */
  export interface ITypeSafeClient {
    systemOne(request: {
      state: IState;
      questions: Record<string, IQuestion>;
      model?: string;
    }): PromiseLike<{
      readonly model: string;
      readonly answers: object;
      readonly usage: {
        readonly input_tokens: number;
        readonly output_tokens: number;
      };
    }>;
  }

  /** Properties of {@link typesafe}. */
  export interface ITypeSafeProps<T> {
    /** TypeSafe's SDK client, `new TypeSafeClient()`. */
    client: ITypeSafeClient;

    /** Evaluation from `typia.llm.evaluation<T>()`. */
    evaluation: ILlmEvaluation<T>;

    /** State to evaluate. */
    state: IState;

    /** Model override; the client's `defaultModel` otherwise. */
    model?: string | undefined;
  }

  /** Properties of {@link openrouter}. */
  export interface IOpenRouterProps<T> {
    /** OpenRouter API key. */
    apiKey: string;

    /** Evaluation from `typia.llm.evaluation<T>()`. */
    evaluation: ILlmEvaluation<T>;

    /** State to evaluate. */
    state: IState;

    /**
     * Model to answer.
     *
     * @default "typesafe/jev-1.13"
     */
    model?: string | undefined;

    /**
     * Base URL of OpenRouter's alpha API.
     *
     * @default "https://openrouter.ai/api/alpha"
     */
    baseURL?: string | undefined;

    /**
     * Additional request headers. `Authorization` and `Content-Type` are always
     * this client's own, in any letter case.
     */
    headers?: Record<string, string> | undefined;

    /**
     * Additional request body fields, such as `provider`, `session_id`, or
     * `user`. They cannot override `model`, `state`, or `questions`.
     */
    body?: Record<string, unknown> | undefined;

    /**
     * Retries after a rate limit, an overload, or a gateway failure, a
     * non-negative integer. A network failure thrown by `fetch` is not
     * retried.
     *
     * @default 2
     */
    maxRetries?: number | undefined;

    /** Signal aborting the request and any wait between retries. */
    signal?: AbortSignal | undefined;

    /** `fetch` implementation, the global one by default. */
    fetch?: typeof fetch | undefined;
  }

  /**
   * Convert neutral questions to the Jev wire format.
   *
   * Choice and score questions are identical in both formats and pass through;
   * boolean questions become `"noul"`. The input is left untouched.
   *
   * @param questions Questions of `typia.llm.evaluation<T>()`
   * @returns New question map in the Jev wire format
   */
  export const questions = (
    questions: Record<string, ILlmEvaluation.IQuestion>,
  ): Record<string, IQuestion> => {
    const output: Record<string, IQuestion> = {};
    for (const [key, question] of Object.entries(questions))
      // defineProperty keeps a `__proto__` key an own property
      Object.defineProperty(output, key, {
        value:
          question.type === "boolean"
            ? { type: "noul", instructions: question.instructions }
            : question,
        enumerable: true,
        writable: true,
        configurable: true,
      });
    return output;
  };

  /**
   * Evaluate through TypeSafe's official SDK client.
   *
   * @param props Client, evaluation, and state
   * @returns Validated answers with the raw response
   */
  export const typesafe = async <T>(
    props: ITypeSafeProps<T>,
  ): Promise<IResult<T>> => {
    assertState(props.state);
    const response = await props.client.systemOne({
      state: props.state,
      questions: questions(props.evaluation.questions),
      ...(props.model !== undefined ? { model: props.model } : {}),
    });
    return compose(props.evaluation, response as IResponse);
  };

  /**
   * Evaluate through OpenRouter's Decisions API.
   *
   * OpenRouter publishes no SDK for this alpha endpoint, so this is a small
   * `fetch` client. A rate limit (429), an overload (529), or a gateway failure
   * (500, 502, 503, 524) is retried with exponential backoff, honoring
   * `retry-after` up to a minute; a longer requested pause, or any other
   * failure, throws {@link JevHttpError}.
   *
   * @param props API key, evaluation, state, and transport options
   * @returns Validated answers with the raw response
   */
  export const openrouter = async <T>(
    props: IOpenRouterProps<T>,
  ): Promise<IResult<T>> => {
    assertState(props.state);
    const retries: number = props.maxRetries ?? 2;
    if (Number.isInteger(retries) === false || retries < 0)
      throw new TypeError(
        `Jev.openrouter(): maxRetries must be a non-negative integer, not ${retries}.`,
      );
    const request: IRequest = {
      model: props.model ?? "typesafe/jev-1.13",
      state: props.state,
      questions: questions(props.evaluation.questions),
    };
    const body: string = JSON.stringify({ ...props.body, ...request });
    const url: string = `${(props.baseURL ?? "https://openrouter.ai/api/alpha").replace(/\/+$/, "")}/decisions`;
    const call: typeof fetch = props.fetch ?? fetch;
    // set, not spread: header names are case-insensitive, and a spread would
    // send a caller's lowercase `authorization` beside the real one
    const headers: Headers = new Headers(props.headers);
    headers.set("Authorization", `Bearer ${props.apiKey}`);
    headers.set("Content-Type", "application/json");

    for (let attempt: number = 0; ; ++attempt) {
      const response: Response = await call(url, {
        method: "POST",
        headers,
        body,
        signal: props.signal,
      });
      const payload: unknown = await read(response);
      if (response.ok) {
        if (isResponse(payload) === false)
          throw new JevHttpError(
            response.status,
            payload,
            "the response carries no answer map",
          );
        return compose(props.evaluation, payload);
      }
      if (RETRYABLE.has(response.status) === false || attempt >= retries)
        throw new JevHttpError(response.status, payload);
      // a server asking for a longer pause than a caller would sit through
      // fails now instead of hanging the call
      const pause: number = delay(response, attempt);
      if (pause > MAX_DELAY) throw new JevHttpError(response.status, payload);
      await wait(pause, props.signal);
    }
  };

  /* -----------------------------------------------------------
    INTERNAL
  ----------------------------------------------------------- */
  const compose = <T>(
    evaluation: ILlmEvaluation<T>,
    response: IResponse,
  ): IResult<T> => ({
    validation: evaluation.validate(response.answers),
    answers: response.answers,
    model: response.model,
    usage: response.usage,
  });

  const RETRYABLE: ReadonlySet<number> = new Set([
    429, 500, 502, 503, 524, 529,
  ]);

  const read = async (response: Response): Promise<unknown> => {
    const text: string = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  /** Longest `retry-after` pause honored, in milliseconds. */
  const MAX_DELAY: number = 60_000;

  const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" &&
    value !== null &&
    Array.isArray(value) === false;

  const isResponse = (value: unknown): value is IResponse =>
    isRecord(value) &&
    isRecord(value.answers) &&
    typeof value.model === "string" &&
    isRecord(value.usage);

  /**
   * Reject a state JSON cannot carry faithfully.
   *
   * Both endpoints receive the state as JSON, where a function vanishes, a
   * `Map` or `Set` becomes `{}`, and `NaN` becomes `null`, so the model would
   * silently judge something else. A value with `toJSON()`, such as a `Date`,
   * chooses its own JSON and passes.
   */
  const assertState = (state: unknown): void => {
    const visit = (value: unknown, path: string): void => {
      if (
        value === null ||
        typeof value === "string" ||
        typeof value === "boolean"
      )
        return;
      if (typeof value === "number") {
        if (Number.isFinite(value) === false) fail(path, String(value));
        return;
      }
      if (typeof value !== "object") fail(path, `a ${typeof value}`);
      if (typeof (value as { toJSON?: unknown }).toJSON === "function") return;
      if (Array.isArray(value)) {
        value.forEach((elem, i) => visit(elem, `${path}[${i}]`));
        return;
      }
      const prototype: unknown = Object.getPrototypeOf(value);
      if (prototype !== Object.prototype && prototype !== null)
        fail(
          path,
          `a ${(value as object).constructor?.name ?? "class"} instance`,
        );
      for (const [key, elem] of Object.entries(value as object))
        if (elem !== undefined) visit(elem, `${path}.${key}`);
    };
    const fail = (path: string, what: string): never => {
      throw new TypeError(
        `Jev state must be JSON: ${path} is ${what}, which JSON cannot carry.`,
      );
    };
    visit(state, "$state");
  };

  /** Milliseconds before the next attempt. */
  const delay = (response: Response, attempt: number): number => {
    const header: string | null = response.headers.get("retry-after");
    if (header !== null) {
      const seconds: number = Number(header);
      if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000);
      const date: number = Date.parse(header);
      if (Number.isFinite(date)) return Math.max(0, date - Date.now());
    }
    return Math.min(8_000, 500 * 2 ** attempt);
  };

  const wait = (ms: number, signal: AbortSignal | undefined): Promise<void> =>
    new Promise((resolve, reject) => {
      if (signal?.aborted) return reject(signal.reason);
      const timer = setTimeout(() => {
        signal?.removeEventListener("abort", abort);
        resolve();
      }, ms);
      const abort = (): void => {
        clearTimeout(timer);
        reject(signal!.reason);
      };
      signal?.addEventListener("abort", abort, { once: true });
    });
}
