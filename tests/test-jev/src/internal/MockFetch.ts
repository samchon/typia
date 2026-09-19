/** One scripted response of {@link MockFetch}. */
export interface IMockResponse {
  status: number;
  body: unknown;
  headers?: Record<string, string>;
}

/** Recorded call of {@link MockFetch}. */
export interface IMockCall {
  url: string;
  init: RequestInit;
}

/**
 * `fetch` answering from a script, recording every call.
 *
 * Throws once the script runs out, so a test that retries more often than it
 * scripted fails loudly instead of hanging.
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
    return new Response(
      typeof next.body === "string" ? next.body : JSON.stringify(next.body),
      { status: next.status, headers: next.headers },
    );
  };
  return { fetch: fetch as typeof globalThis.fetch, calls };
};
