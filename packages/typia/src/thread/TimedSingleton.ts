/**
 * Timed singleton generator.
 *
 * The `TimedSingleton` is a type of {@link Singleton} class who re-constructs the singleton
 * value repeatedly whenever specific time has been elapsed after the last lazy construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @author Jeongho Nam - https://github.com/samchon
 */
export class TimedSingleton<T, Args extends any[] = []> {
  private readonly interval_: number;
  private readonly closure_: (...args: Args) => T;
  private expired_at_: number;
  private value_: T;

  /**
   * Initializer Constructor.
   *
   * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
   * @param closure Lazy constructor function returning the target value
   */
  public constructor(interval: number, closure: (...args: Args) => T) {
    this.interval_ = interval;
    this.closure_ = closure;
    this.value_ = null!;
    this.expired_at_ = 0;
  }

  /**
   * Get value.
   *
   * @returns The lazy constructed value
   */
  public get(...args: Args): T {
    if (Date.now() >= this.expired_at_) {
      this.expired_at_ = Date.now() + this.interval_;
      this.value_ = this.closure_(...args);
    }
    return this.value_;
  }
}
