/**
 * Lazily retains one successfully returned value for this instance's lifetime.
 *
 * Arguments belong to the first successful initialization. Later arguments do
 * not refresh the value. A synchronous throw permits another attempt; a
 * returned promise is retained even if it later rejects.
 *
 * @internal
 *
 * @evidence contracts/common.md#principled-implementation A private identity sentinel distinguishes uninitialized state from every T, including falsy values; assignment occurs only after the closure returns, and a returned promise itself is the retained value.
 * @evidence contracts/common.md#clear-and-simple-design One initializer and one retained slot express instance-scoped lazy initialization without a map, argument-key policy or independent retry state.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The sentinel is internal state rather than a supported-value exclusion; the class neither patches the initializer nor fabricates results after failures.
 * @evidence contracts/common.md#meaningful-documentation The class documents first-call argument ownership, synchronous retry and promise rejection retention so callers can choose an initializer valid for the instance's lifetime.
 */
export class Singleton<T, Args extends any[] = []> {
  private readonly closure_: (...args: Args) => T;
  private value_: T | object;

  /**
   * Stores the initializer without invoking it.
   *
   * @evidence contracts/common.md#principled-implementation Construction retains the caller's closure and marks the slot with an inaccessible identity sentinel, deferring all T production to get.
   * @evidence contracts/common.md#clear-and-simple-design The constructor initializes the two fields that get requires and creates no eager result or auxiliary cache.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The closure remains unchanged and uncalled; no selected argument or value is substituted during construction.
   * @evidence contracts/common.md#meaningful-documentation The constructor states laziness, and the class explains the lifetime and first-success argument contract.
   */
  public constructor(closure: (...args: Args) => T) {
    this.closure_ = closure;
    this.value_ = NOT_MOUNTED_YET;
  }

  /**
   * Initializes on the first synchronous success and reuses that result.
   *
   * The initializer must not recursively call this instance's get before it
   * returns. The caller owns any resources held by the returned value.
   *
   * @evidence contracts/common.md#principled-implementation Identity comparison detects only the private unset sentinel, preserving falsy values; a throwing initializer leaves the slot unset, while any returned T, including a pending or rejected promise, is reused.
   * @evidence contracts/common.md#clear-and-simple-design One sentinel branch owns initialization and one return exposes the retained value; repeated calls do not reinterpret their arguments as cache keys.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Reuse follows the singleton's first-success contract uniformly across T rather than truthiness, fixture values or hidden retries of rejected promises.
   * @evidence contracts/common.md#meaningful-documentation This method documents non-reentrant initialization and resource ownership, while the class states argument precedence and the distinction between synchronous throws and returned promises.
   */
  public get(...args: Args): T {
    if (this.value_ === NOT_MOUNTED_YET) this.value_ = this.closure_(...args);
    return this.value_ as T;
  }
}

const NOT_MOUNTED_YET = {};
