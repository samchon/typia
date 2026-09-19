import { ILlmEvaluation, IValidation } from "@typia/interface";

import {
  JevConnectionError,
  JevHttpError,
  JevTimeoutError,
} from "./JevHttpError";
import { JevRetryPolicy } from "./internal/JevRetryPolicy";

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

  /** State to evaluate: text, or a JSON object or array. */
  export type IState = string | object | null;

  /**
   * `S` where JSON carries it faithfully, and `never` at every part it cannot.
   *
   * Both endpoints receive the state as JSON, where a function vanishes, a
   * `Map` becomes `{}`, and a `bigint` throws. The helpers type their state as
   * `S & Jsonable<S>`, so such a part fails to compile at its own property,
   * while an interface-typed state, which a JSON type with an index signature
   * would reject, passes. A value with `toJSON()`, such as a `Date`, passes
   * when its JSON does. An `undefined` property is an omitted field and passes,
   * while an `undefined` array element, which JSON writes as `null`, does not.
   * A value typed `unknown` cannot be checked and passes.
   *
   * Run-time values such as `NaN`, which JSON writes as `null`, and cycles,
   * which JSON rejects, are beyond a type; they behave as `JSON.stringify`
   * does.
   *
   * A function forwarding its own generic state passes the type arguments
   * explicitly, since the check cannot be inferred again from a type it has
   * already checked:
   *
   * ```typescript
   * const evaluate = <S extends Jev.IState>(state: S & Jev.Jsonable<S>) =>
   *   Jev.typesafe<IDecision, S>({ client, evaluation, state });
   * ```
   */
  export type Jsonable<S> = unknown extends S
    ? S
    : S extends string | number | boolean | null
      ? S
      : S extends bigint | symbol | undefined | ((...args: never[]) => unknown)
        ? never
        : S extends { toJSON(...args: never[]): infer R }
          ? [Jsonable<R>] extends [never]
            ? never
            : S
          : S extends
                | ReadonlyMap<unknown, unknown>
                | ReadonlySet<unknown>
                | WeakMap<object, unknown>
                | WeakSet<object>
                | ArrayBufferLike
                | ArrayBufferView
                | RegExp
                | Error
                | Promise<unknown>
            ? never
            : S extends readonly (infer E)[]
              ? // the elements, not keyof S: a mapped type over an array
                // intersected with a tag, like `string[] & tags.MinItems<1>`,
                // would walk the array's methods
                [E] extends [Jsonable<E>]
                ? S
                : never
              : S extends object
                ? {
                    [K in keyof S]:
                      | Jsonable<Exclude<S[K], undefined>>
                      | Extract<S[K], undefined>;
                  }
                : never;

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
   */
  export interface ITypeSafeClient {
    systemOne(
      request: {
        state: IState;
        questions: Record<string, IQuestion>;
        model?: string;
      },
      options?: ITypeSafeRequestOptions,
    ): PromiseLike<{
      readonly model: string;
      readonly answers: object;
      readonly usage: {
        readonly input_tokens: number;
        readonly output_tokens: number;
      };
    }>;
  }

  /** Per-call options of TypeSafe's SDK, as far as they are forwarded. */
  export interface ITypeSafeRequestOptions {
    /** Cancellation signal for the request and pending retries. */
    signal?: AbortSignal;

    /** Timeout per attempt, in milliseconds. */
    timeout?: number;

    /** Additional headers, merged over the client's defaults. */
    headers?: Record<string, string>;
  }

  /** Properties of {@link typesafe}. */
  export interface ITypeSafeProps<T, S extends IState = IState> {
    /** TypeSafe's SDK client, `new TypeSafeClient()`. */
    client: ITypeSafeClient;

    /** Evaluation from `typia.llm.evaluation<T>()`. */
    evaluation: ILlmEvaluation<T>;

    /** State to evaluate; see {@link Jsonable}. */
    state: S & Jsonable<S>;

    /** Model override; the client's `defaultModel` otherwise. */
    model?: string | undefined;

    /** Per-call options forwarded to the SDK. */
    options?: ITypeSafeRequestOptions | undefined;
  }

  /** Properties of {@link openrouter}. */
  export interface IOpenRouterProps<T, S extends IState = IState> {
    /** OpenRouter API key. */
    apiKey: string;

    /** Evaluation from `typia.llm.evaluation<T>()`. */
    evaluation: ILlmEvaluation<T>;

    /** State to evaluate; see {@link Jsonable}. */
    state: S & Jsonable<S>;

    /**
     * Model to answer, such as `typesafe/jev-1.13`.
     *
     * Required, because probability thresholds are tuned against one model's
     * calibration, and a default would silently age.
     */
    model: string;

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
     * Retries after the first attempt, a non-negative integer.
     *
     * A timeout (408), a rate limit (429), a server failure (5xx), and a
     * request that got no response are retried, as TypeSafe's own SDK does.
     *
     * @default 2
     */
    maxRetries?: number | undefined;

    /**
     * Timeout per attempt, in milliseconds, covering the whole response.
     *
     * @default 10000
     */
    timeout?: number | undefined;

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
   * @param input Questions of `typia.llm.evaluation<T>()`
   * @returns New question map in the Jev wire format
   */
  export const questions = (
    input: Record<string, ILlmEvaluation.IQuestion>,
  ): Record<string, IQuestion> => {
    const output: Record<string, IQuestion> = {};
    for (const [key, question] of Object.entries(input))
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
  export const typesafe = async <T, S extends IState>(
    props: ITypeSafeProps<T, S>,
  ): Promise<IResult<T>> => {
    const response: unknown = await props.client.systemOne(
      {
        state: props.state,
        questions: questions(props.evaluation.questions),
        ...(props.model !== undefined ? { model: props.model } : {}),
      },
      props.options,
    );
    if (isResponse(response) === false)
      throw new TypeError(
        "Jev.typesafe(): the client returned no evaluation response with answers, model, and usage.",
      );
    return compose(props.evaluation, response);
  };

  /**
   * Evaluate through OpenRouter's Decisions API.
   *
   * OpenRouter publishes no SDK for this alpha endpoint, so this is a small
   * `fetch` client following the retry policy of TypeSafe's own SDK, the
   * reference client for the Jev wire format; see {@link IOpenRouterProps}. Once
   * the retries are spent, a failure response throws {@link JevHttpError}, a
   * request that got no response throws {@link JevConnectionError}, and one that
   * timed out throws {@link JevTimeoutError}. An abort rejects with the signal's
   * reason, without retrying.
   *
   * @param props API key, evaluation, state, model, and transport options
   * @returns Validated answers with the raw response
   */
  export const openrouter = async <T, S extends IState>(
    props: IOpenRouterProps<T, S>,
  ): Promise<IResult<T>> => {
    const retries: number = props.maxRetries ?? JevRetryPolicy.MAX_RETRIES;
    if (Number.isInteger(retries) === false || retries < 0)
      throw new TypeError(
        `Jev.openrouter(): maxRetries must be a non-negative integer, not ${retries}.`,
      );
    const timeout: number = props.timeout ?? JevRetryPolicy.TIMEOUT;
    if (
      Number.isFinite(timeout) === false ||
      timeout <= 0 ||
      timeout > MAX_TIMEOUT
    )
      throw new TypeError(
        `Jev.openrouter(): timeout must be a positive number of milliseconds up to ${MAX_TIMEOUT}, not ${timeout}.`,
      );

    const request: IRequest = {
      model: props.model,
      state: props.state,
      questions: questions(props.evaluation.questions),
    };
    const body: string = JSON.stringify({ ...props.body, ...request });
    const url: string = `${(props.baseURL ?? "https://openrouter.ai/api/alpha").replace(/\/+$/, "")}/decisions`;
    // set, not spread: header names are case-insensitive, and a spread would
    // send a caller's lowercase `authorization` beside the real one
    const headers: Headers = new Headers(props.headers);
    headers.set("Authorization", `Bearer ${props.apiKey}`);
    headers.set("Content-Type", "application/json");
    const init = { method: "POST", headers, body };

    for (let attempt: number = 0; ; ++attempt) {
      let exchange: IExchange;
      try {
        exchange = await send({
          fetch: props.fetch ?? fetch,
          url,
          init,
          timeout,
          signal: props.signal,
        });
      } catch (error) {
        if (props.signal?.aborted === true) throw props.signal.reason;
        const failure: JevConnectionError =
          error instanceof JevTimeoutError
            ? error
            : new JevConnectionError(error);
        if (attempt >= retries) throw failure;
        await wait(JevRetryPolicy.delay(attempt), props.signal);
        continue;
      }

      const { response, payload } = exchange;
      if (response.ok) {
        if (isResponse(payload) === false)
          throw new JevHttpError(
            response.status,
            payload,
            "the response is not an evaluation response with answers, model, and usage",
          );
        return compose(props.evaluation, payload);
      }
      if (
        JevRetryPolicy.retryable(response.status) === false ||
        attempt >= retries
      )
        throw new JevHttpError(response.status, payload);
      await wait(JevRetryPolicy.delay(attempt, response.headers), props.signal);
    }
  };

  /* -----------------------------------------------------------
    INTERNAL
  ----------------------------------------------------------- */
  /** The longest delay `setTimeout` honors; a longer one fires at once. */
  const MAX_TIMEOUT: number = 2_147_483_647;

  interface IExchange {
    response: Response;
    payload: unknown;
  }

  /**
   * One attempt: the request and its whole body, under the timeout.
   *
   * The caller's signal and the timeout share one controller, so either cancels
   * the attempt; a timeout surfaces as {@link JevTimeoutError}.
   */
  const send = async (props: {
    fetch: typeof fetch;
    url: string;
    init: RequestInit;
    timeout: number;
    signal: AbortSignal | undefined;
  }): Promise<IExchange> => {
    const controller: AbortController = new AbortController();
    const expired: JevTimeoutError = new JevTimeoutError(props.timeout);
    const timer = setTimeout(() => controller.abort(expired), props.timeout);
    const cancel = (): void => controller.abort(props.signal!.reason);
    if (props.signal?.aborted === true) cancel();
    else props.signal?.addEventListener("abort", cancel, { once: true });
    try {
      const response: Response = await props.fetch(props.url, {
        ...props.init,
        signal: controller.signal,
      });
      return { response, payload: await read(response) };
    } catch (error) {
      throw controller.signal.reason === expired ? expired : error;
    } finally {
      clearTimeout(timer);
      props.signal?.removeEventListener("abort", cancel);
    }
  };

  const compose = <T>(
    evaluation: ILlmEvaluation<T>,
    response: IResponse,
  ): IResult<T> => ({
    validation: evaluation.validate(response.answers),
    answers: response.answers,
    model: response.model,
    usage: response.usage,
  });

  const read = async (response: Response): Promise<unknown> => {
    const text: string = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" &&
    value !== null &&
    Array.isArray(value) === false;

  const isResponse = (value: unknown): value is IResponse =>
    isRecord(value) &&
    isRecord(value.answers) &&
    typeof value.model === "string" &&
    isRecord(value.usage);

  const wait = (ms: number, signal: AbortSignal | undefined): Promise<void> =>
    new Promise((resolve, reject) => {
      if (signal?.aborted === true) return reject(signal.reason);
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
