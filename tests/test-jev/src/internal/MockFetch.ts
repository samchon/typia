/** One scripted outcome of {@link MockFetch}. */
export type IMockResponse =
  | {
      /** Answer with this status and body. */
      status: number;
      body: unknown;
      headers?: Record<string, string>;
    }
  | {
      /** Fail as `fetch` does without a response, such as on a DNS failure. */
      error: Error;
    }
  | {
      /** Never answer, until the request's signal aborts. */
      hang: true;
    };

/** Recorded call of {@link MockFetch}. */
export interface IMockCall {
  url: string;
  init: RequestInit;
}

/**
 * `fetch` answering from a script, recording every call.
 *
 * A hanging entry rejects with the signal's reason once the request is aborted,
 * as `fetch` does. Throws once the script runs out, so a test that retries more
 * often than it scripted fails loudly instead of hanging.
 */
export const MockFetch = (script: IMockResponse[]) => {
  const calls: IMockCall[] = [];
  const queue: IMockResponse[] = [...script];
  const fetch = async (
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<Response> => {
    calls.push({ url: String(input), init: init ?? {} });
    const next: IMockResponse | undefined = queue.shift();
    if (next === undefined) throw new Error("MockFetch: script exhausted");
    if ("error" in next) throw next.error;
    if ("hang" in next)
      return new Promise<Response>((_resolve, reject) => {
        const signal: AbortSignal | null | undefined = init?.signal;
        if (signal?.aborted) return reject(signal.reason);
        signal?.addEventListener("abort", () => reject(signal.reason), {
          once: true,
        });
      });
    return new Response(
      typeof next.body === "string" ? next.body : JSON.stringify(next.body),
      { status: next.status, headers: next.headers },
    );
  };
  return { fetch: fetch as typeof globalThis.fetch, calls };
};
