//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ITimedLockable } from "../base/thread/ITimedLockable";
import { List } from "../container/List";
import { InvalidArgument } from "../exception/InvalidArgument";
import { OutOfRange } from "../exception/OutOfRange";
import { LockType } from "../internal/thread/LockType";
import { sleep_for } from "./global";

/**
 * Counting semaphore.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Semaphore<Max extends number = number> {
  private queue_: List<IResolver>;
  private acquiring_: number;
  private max_: Max;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Initializer Constructor.
   *
   * @param max Number of maximum sections acquirable.
   */
  public constructor(max: Max) {
    this.queue_ = new List();

    this.acquiring_ = 0;
    this.max_ = max;
  }

  /**
   * Get number of maximum sections lockable.
   *
   * @return Number of maximum sections lockable.
   */
  public max(): Max {
    return this.max_;
  }

  /* ---------------------------------------------------------
        ACQUIRANCES
    --------------------------------------------------------- */
  /**
   * Acquires a section.
   *
   * Acquires a section until be {@link release released}. If all of the sections in the
   * semaphore already have been acquired by others, the function call would be blocked until
   * one of them returns its acquisition by calling the {@link release} method.
   *
   * In same reason, if you don't call the {@link release} function after you business, the
   * others who want to {@link acquire} a section from the semaphore would be fall into the
   * forever sleep. Therefore, never forget to calling the {@link release} function or utilize
   * the {@link UniqueLock.lock} function instead with {@link Semaphore.get_lockable} to ensure
   * the safety.
   */
  public acquire(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.acquiring_ < this.max_) {
        ++this.acquiring_;
        resolve();
      } else {
        this.queue_.push_back({
          handler: resolve,
          lockType: LockType.HOLD,
        });
      }
    });
  }

  /**
   * Tries to acquire a section.
   *
   * Attempts to acquire a section without blocking. If succeeded to acquire a section from the
   * semaphore immediately, it returns `true` directly. Otherwise all of the sections in the
   * semaphore are full, the function gives up the trial immediately and returns `false`
   * directly.
   *
   * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
   * not call the {@link release} function after your business, the others who want to
   * {@link acquire} a section from the semaphore would be fall into the forever sleep.
   * Therefore, never forget to calling the {@link release} function or utilize the
   * {@link UniqueLock.try_lock} function instead with {@link Semaphore.get_lockable} to ensure
   * the safety.
   *
   * @return Whether succeeded to acquire or not.
   */
  public async try_acquire(): Promise<boolean> {
    // ALL OR NOTHING
    if (this.acquiring_ < this.max_) {
      ++this.acquiring_;
      return true;
    } else return false;
  }

  /**
   * Tries to acquire a section until timeout.
   *
   * Attempts to acquire a section from the semaphore until timeout. If succeeded to acquire a
   * section until the timeout, it returns `true`. Otherwise failed to acquiring a section in
   * given the time, the function gives up the trial and returns `false`.
   *
   * Failed to acquiring a section in the given time (returns `false`), it means that there're
   * someone who have already {@link acquire acquired} sections and do not return them over the
   * time expiration.
   *
   * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
   * not call the {@link release} function after your business, the others who want to
   * {@link acquire} a section from the semaphore would be fall into the forever sleep.
   * Therefore, never forget to calling the {@link release} function or utilize the
   * {@link UniqueLock.try_acquire_for} function instead with {@link Semaphore.get_lockable} to
   * ensure the safety.
   *
   * @param ms The maximum miliseconds for waiting.
   * @return Whether succeded to acquire or not.
   */
  public async try_acquire_for(ms: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.acquiring_ < this.max_) {
        ++this.acquiring_;
        resolve(true);
      } else {
        // RESERVE ACQUIRE
        const it: List.Iterator<IResolver> = this.queue_.insert(
          this.queue_.end(),
          {
            handler: resolve,
            lockType: LockType.KNOCK,
          },
        );

        // AUTOMATIC RELEASE AFTER TIMEOUT
        sleep_for(ms).then(() => {
          // NOT YET, THEN DO RELEASE
          if (it.value.handler !== null) this._Cancel(it);
        });
      }
    });
  }

  /**
   * Tries to acquire a section until timeout.
   *
   * Attempts to acquire a section from the semaphore until time expiration. If succeeded to
   * acquire a section until the time expiration, it returns `true`. Otherwise failed to
   * acquiring a section in the given time, the function gives up the trial and returns `false`.
   *
   * Failed to acquiring a section in the given time (returns `false`), it means that there're
   * someone who have already {@link acquire acquired} sections and do not return them over the
   * time expiration.
   *
   * Note that, if you succeeded to acquire a section from the semaphore (returns `true) but do
   * not call the {@link release} function after your business, the others who want to
   * {@link acquire} a section from the semaphore would be fall into the forever sleep.
   * Therefore, never forget to calling the {@link release} function or utilize the
   * {@link UniqueLock.try_acquire_until} function instead with {@link Semaphore.get_lockable}
   * to ensure the safety.
   *
   * @param at The maximum time point to wait.
   * @return Whether succeded to acquire or not.
   */
  public try_acquire_until(at: Date): Promise<boolean> {
    // COMPUTE MILLISECONDS TO WAIT
    const now: Date = new Date();
    const ms: number = at.getTime() - now.getTime();

    return this.try_acquire_for(ms);
  }

  /* ---------------------------------------------------------
        RELEASES
    --------------------------------------------------------- */
  /**
   * Release sections.
   *
   * When you call this {@link release} method and there're someone who are currently blocked
   * by attemping to {@link acquire} a section from this semaphore, *n* of them
   * (FIFO; first-in-first-out) would {@link acquire} those {@link release released} sections
   * and continue their executions.
   *
   * Otherwise, there's not anyone who is {@link acquire acquiring} the section or number of
   * the blocked are less than *n*, the {@link OutOfRange} error would be thrown.
   *
   * > As you know, when you succeeded to {@link acquire} a section, you don't have to forget
   * > to calling this {@link release} method after your business. If you forget it, it would
   * > be a terrible situation for the others who're attempting to {@link acquire} a section
   * > from this semaphore.
   * >
   * > However, if you utilize the {@link UniqueLock} with {@link Semaphore.get_lockable}, you
   * > don't need to consider about this {@link release} method. Just define your business into
   * > a callback function as a parameter of methods of the {@link UniqueLock}, then this
   * > {@link release} method would be automatically called by the {@link UniqueLock} after the
   * > business.
   *
   * @param n Number of sections to be released. Default is 1.
   * @throw {@link OutOfRange} when *n* is greater than currently {@link acquire acquired} sections.
   */
  public async release(n: number = 1): Promise<void> {
    //----
    // VALIDATION
    //----
    if (n < 1)
      throw new InvalidArgument(
        `Error on std.Semaphore.release(): parametric n is less than 1 -> (n = ${n}).`,
      );
    else if (n > this.max_)
      throw new OutOfRange(
        `Error on std.Semaphore.release(): parametric n is greater than max -> (n = ${n}, max = ${this.max_}).`,
      );
    else if (n > this.acquiring_)
      throw new OutOfRange(
        `Error on std.Semaphore.release(): parametric n is greater than acquiring -> (n = ${n}, acquiring = ${this.acquiring_}).`,
      );

    //----
    // RELEASE
    //----
    const resolverList: IResolver[] = [];
    while (this.queue_.empty() === false && resolverList.length < n) {
      // COPY IF HANDLER EXISTS
      const resolver: IResolver = this.queue_.front();
      if (resolver.handler !== null) resolverList.push({ ...resolver });

      // DESTRUCT
      this.queue_.pop_front();
      resolver.handler = null;
    }

    // COMPUTE REMAINED ACQUIRANCES
    this.acquiring_ -= n - resolverList.length;

    // CALL HANDLERS
    for (const resolver of resolverList)
      if (resolver.lockType === LockType.HOLD) resolver.handler!();
      else resolver.handler!(true);
  }

  private _Cancel(it: List.Iterator<IResolver>): void {
    // POP THE LISTENER
    const handler: Function = it.value.handler!;

    // DESTRUCTION
    it.value.handler = null;
    this.queue_.erase(it);

    // RETURNS FAILURE
    handler(false);
  }
}

/**
 *
 */
export namespace Semaphore {
  /**
   * Capsules a {@link Semaphore} to be suitable for the {@link UniqueLock}.
   *
   * @param semaphore Target semaphore to capsule.
   * @return Lockable instance suitable for the {@link UniqueLock}
   */
  export function get_lockable<
    SemaphoreT extends Pick<
      Semaphore,
      | "acquire"
      | "try_acquire"
      | "try_acquire_for"
      | "try_acquire_until"
      | "release"
    >,
  >(semaphore: SemaphoreT): ITimedLockable {
    return new Lockable(semaphore);
  }

  /**
   * @internal
   */
  export class Lockable<
    SemaphoreT extends Pick<
      Semaphore,
      | "acquire"
      | "try_acquire"
      | "try_acquire_for"
      | "try_acquire_until"
      | "release"
    >,
  > implements ITimedLockable
  {
    private semahpore_: SemaphoreT;

    public constructor(semaphore: SemaphoreT) {
      this.semahpore_ = semaphore;
    }
    public lock(): Promise<void> {
      return this.semahpore_.acquire();
    }
    public unlock(): Promise<void> {
      return this.semahpore_.release();
    }

    public try_lock(): Promise<boolean> {
      return this.semahpore_.try_acquire();
    }
    public try_lock_for(ms: number): Promise<boolean> {
      return this.semahpore_.try_acquire_for(ms);
    }
    public try_lock_until(at: Date): Promise<boolean> {
      return this.semahpore_.try_acquire_until(at);
    }
  }
}

interface IResolver {
  handler: Function | null;
  lockType: LockType;
}
