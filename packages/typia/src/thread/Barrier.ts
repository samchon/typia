//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ConditionVariable } from "./ConditionVariable";

/**
 * Barrier for critical sections.
 *
 * The Barrier class blocks critical sections until the downward counter to be zero. Unlike the
 * {@link Latch} class whose downward counter is disposable, `Barrier` can re-use the downward
 * counter repeatedly, resetting counter to be initial value whenever reach to the zero.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Barrier {
  private cv_: ConditionVariable;

  private size_: number;
  private count_: number;

  /**
   * Initializer Constructor
   *
   * @param size Size of the downward counter.
   */
  public constructor(size: number) {
    this.cv_ = new ConditionVariable();

    this.size_ = size;
    this.count_ = size;
  }

  /* ---------------------------------------------------------
        WAIT FUNCTIONS
    --------------------------------------------------------- */
  /**
   * Waits until the counter to be zero.
   *
   * Blocks the function calling until internal counter to be reached to the zero.
   */
  public wait(): Promise<void> {
    return this.cv_.wait();
  }

  /**
   * Tries to wait until the counter to be zero in timeout.
   *
   * Attempts to block the function calling until internal counter to be reached to the zero
   * in timeout. If succeeded to waiting the counter to be reached to the zero, it returns
   * `true`. Otherwise, the {@link Barrier} fails to reach to the zero in the given time, the
   * function gives up the waiting and returns `false`.
   *
   * @param ms The maximum miliseconds for waiting.
   * @return Whether succeeded to waiting in the given time.
   */
  public wait_for(ms: number): Promise<boolean> {
    return this.cv_.wait_for(ms);
  }

  /**
   * Tries to wait until the counter to be zero in time expiration.
   *
   * Attempts to block the function calling until internal counter to be reached to the zero
   * in time expiration. If succeeded to waiting the counter to be reached to the zero, it
   * returns `true`. Otherwise, the {@link Barrier} fails to reach to the zero in the given
   * time, the function gives up the waiting and returns `false`.
   *
   * @param at The maximum time point to wait.
   * @return Whether succeeded to waiting in the given time.
   */
  public wait_until(at: Date): Promise<boolean> {
    return this.cv_.wait_until(at);
  }

  /* ---------------------------------------------------------
        ARRIVAL FUNCTIONS
    --------------------------------------------------------- */
  /**
   * Derecements the counter.
   *
   * Decrements the counter by *n* without blocking.
   *
   * If the parametric value *n* is equal to or greater than internal counter, so that the
   * internal counter be equal to or less than zero, everyone who are {@link wait waiting} for
   * the {@link Latch} would continue their executions.
   *
   * @param n Value of the decrement. Default is 1.
   */
  public async arrive(n: number = 1): Promise<void> {
    const completed: boolean = (this.count_ += n) <= this.size_;
    if (completed === false) return;

    this.count_ %= this.size_;
    await this.cv_.notify_all();
  }

  /**
   * Decrements the counter and waits until the counter to be zero.
   *
   * Decrements the counter by one and blocks the section until internal counter to be zero.
   *
   * If the the remained counter be zero by this decrement, everyone who are
   * {@link wait waiting} for the {@link Barrier} would continue their executions including
   * this one.
   */
  public async arrive_and_wait(): Promise<void> {
    await this.arrive();
    await this.wait();
  }

  /**
   * Decrements the counter and initial size at the same time.
   *
   * Decrements not only internal counter, but also initialize size of the counter at the same
   * time. If the remained counter be zero by the decrement, everyone who are
   * {@link wait waiting} for the {@link Barrier} would continue their executions.
   */
  public async arrive_and_drop(): Promise<void> {
    --this.size_;
    await this.arrive(0);
  }
}
