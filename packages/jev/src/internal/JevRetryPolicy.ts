/**
 * Retry policy of the `fetch` client behind `Jev.openrouter()`.
 *
 * It follows the defaults of TypeSafe's own SDK, `@typesafe-ai/sdk`, the
 * reference client for the Jev wire format: retry a timeout (408), a rate limit
 * (429), every server failure (5xx), and a request that got no response; wait
 * the server's `retry-after-ms` or `retry-after` when it asks for a minute or
 * less, and otherwise back off exponentially from half a second, capped at five
 * seconds, with up to a quarter of jitter.
 *
 * @internal
 */
export namespace JevRetryPolicy {
  /** Retries after the first attempt. */
  export const MAX_RETRIES: number = 2;

  /** Timeout per attempt, in milliseconds. */
  export const TIMEOUT: number = 10_000;

  const BACKOFF_INITIAL: number = 500;
  const BACKOFF_MAX: number = 5_000;
  const BACKOFF_JITTER: number = 0.25;
  const MAX_RETRY_AFTER: number = 60_000;

  /** Whether a response status is worth another attempt. */
  export const retryable = (status: number): boolean =>
    status === 408 || status === 429 || (status >= 500 && status < 600);

  /**
   * Milliseconds to wait before retrying after zero-based `attempt`.
   *
   * @param attempt Attempt that just failed
   * @param headers Its response headers, absent when it got no response
   */
  export const delay = (attempt: number, headers?: Headers): number => {
    const requested: number | undefined =
      headers !== undefined ? retryAfter(headers) : undefined;
    if (requested !== undefined && requested <= MAX_RETRY_AFTER)
      return requested;
    const exponential: number = Math.min(
      BACKOFF_INITIAL * 2 ** attempt,
      BACKOFF_MAX,
    );
    return Math.round(exponential * (1 - Math.random() * BACKOFF_JITTER));
  };

  /** The server's requested pause, preferring `retry-after-ms`. */
  const retryAfter = (headers: Headers): number | undefined => {
    const ms: number = Number(headers.get("retry-after-ms"));
    if (headers.has("retry-after-ms") && Number.isFinite(ms) && ms >= 0)
      return ms;
    const raw: string | null = headers.get("retry-after");
    if (raw === null) return undefined;
    const seconds: number = Number(raw);
    if (Number.isFinite(seconds))
      return seconds >= 0 ? seconds * 1_000 : undefined;
    const date: number = Date.parse(raw);
    return Number.isNaN(date) ? undefined : Math.max(0, date - Date.now());
  };
}
