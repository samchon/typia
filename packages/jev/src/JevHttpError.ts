/**
 * Failure of a Jev endpoint.
 *
 * Thrown by `Jev.openrouter()` for a status it does not retry, for a status
 * still failing after the last retry, and for a success response without an
 * answer map.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class JevHttpError extends Error {
  /** HTTP status of the response. */
  public readonly status: number;

  /** Response body, parsed as JSON when possible. */
  public readonly body: unknown;

  /**
   * @param status HTTP status of the response
   * @param body Response body
   * @param reason Why a success response is rejected
   */
  public constructor(status: number, body: unknown, reason?: string) {
    super(
      `Jev request failed with status ${status}: ${reason ?? message(body)}`,
    );
    this.name = "JevHttpError";
    this.status = status;
    this.body = body;
  }
}

/** The provider's error message, or the raw body. */
const message = (body: unknown): string => {
  if (typeof body === "string") return body;
  const error: unknown = (body as { error?: unknown } | null)?.error;
  const text: unknown =
    typeof error === "object" && error !== null
      ? (error as { message?: unknown }).message
      : error;
  return typeof text === "string" ? text : JSON.stringify(body);
};
