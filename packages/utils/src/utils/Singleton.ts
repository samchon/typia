/**
 * Lazily retains one successfully returned value for this instance's lifetime.
 *
 * Arguments belong to the first successful initialization. Later arguments do
 * not refresh the value. A synchronous throw permits another attempt; a
 * returned promise is retained even if it later rejects.
 *
 * @internal
 */
export class Singleton<T, Args extends any[] = []> {
  private readonly closure_: (...args: Args) => T;
  private value_: T | object;

  /** Stores the initializer without invoking it. */
  public constructor(closure: (...args: Args) => T) {
    this.closure_ = closure;
    this.value_ = NOT_MOUNTED_YET;
  }

  /**
   * Initializes on the first synchronous success and reuses that result.
   *
   * The initializer must not recursively call this instance's get before it
   * returns. The caller owns any resources held by the returned value.
   */
  public get(...args: Args): T {
    if (this.value_ === NOT_MOUNTED_YET) this.value_ = this.closure_(...args);
    return this.value_ as T;
  }
}

const NOT_MOUNTED_YET = {};
