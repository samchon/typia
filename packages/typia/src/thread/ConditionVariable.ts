//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { List } from "../container/List";
import { LockType } from "../internal/thread/LockType";
import { sleep_until } from "./global";

/**
 * Condition variable.
 *
 * The `ConditionVariable` class blocks critical sections until be notified.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class ConditionVariable {
  private resolvers_: List<IResolver>;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor() {
    this.resolvers_ = new List();
  }

  /* ---------------------------------------------------------
        WAIT FUNCTIONS
    --------------------------------------------------------- */
  /**
   * Wait until notified.
   */
  public wait(): Promise<void>;

  /**
     * Wait until predicator returns true.
     * 
     * This method is equivalent to:
     * 
    ```typescript
    while (!await predicator())
        await this.wait();
    ```
     * 
     * @param predicator A predicator function determines completion.
     */
  public wait(predicator: ConditionVariable.Predicator): Promise<void>;

  public async wait(predicator?: ConditionVariable.Predicator): Promise<void> {
    if (!predicator) return await this._Wait();

    while (!(await predicator())) await this._Wait();
  }

  /**
   * Wait for timeout or until notified.
   *
   * @param ms The maximum miliseconds for waiting.
   * @return Whether awaken by notification or timeout.
   */
  public wait_for(ms: number): Promise<boolean>;

  /**
     * Wait until timeout or predicator returns true.
     * 
     * This method is equivalent to:
    ```typescript
    const at: Date = new Date(Date.now() + ms);
    while (!await predicator())
    {
        if (!await this.wait_until(at))
            return await predicator();
    }
    return true;
    ```
     * 
     * @param ms The maximum miliseconds for waiting.
     * @param predicator A predicator function determines the completion.
     * @return Returned value of the *predicator*.
     */
  public wait_for(
    ms: number,
    predicator: ConditionVariable.Predicator,
  ): Promise<boolean>;

  public wait_for(
    ms: number,
    predicator?: ConditionVariable.Predicator,
  ): Promise<boolean> {
    const at: Date = new Date(Date.now() + ms);
    return this.wait_until(at, predicator!);
  }

  /**
   * Wait until notified or time expiration.
   *
   * @param at The maximum time point to wait.
   * @return Whether awaken by notification or time expiration.
   */
  public wait_until(at: Date): Promise<boolean>;

  /**
     * Wait until time expiration or predicator returns true.
     * 
     * This method is equivalent to:
    ```typescript
    while (!await predicator())
    {
        if (!await this.wait_until(at))
            return await predicator();
    }
    return true;
    ```
     * 
     * @param at The maximum time point to wait.
     * @param predicator A predicator function determines the completion.
     * @return Returned value of the *predicator*.
     */
  public wait_until(
    at: Date,
    predicator: ConditionVariable.Predicator,
  ): Promise<boolean>;

  public async wait_until(
    at: Date,
    predicator?: ConditionVariable.Predicator,
  ): Promise<boolean> {
    if (!predicator) return await this._Wait_until(at);

    while (!(await predicator()))
      if (!(await this._Wait_until(at))) return await predicator();

    return true;
  }

  private _Wait(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.resolvers_.push_back({
        handler: resolve,
        lockType: LockType.HOLD,
      });
    });
  }

  private _Wait_until(at: Date): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const it: List.Iterator<IResolver> = this.resolvers_.insert(
        this.resolvers_.end(),
        {
          handler: resolve,
          lockType: LockType.KNOCK,
        },
      );

      // AUTOMATIC UNLOCK
      sleep_until(at).then(() => {
        if (it.erased_ === true) return;

        // DO UNLOCK
        this.resolvers_.erase(it); // POP THE LISTENER
        resolve(false); // RETURN FAILURE
      });
    });
  }

  /* ---------------------------------------------------------
        NOTIFIERS
    --------------------------------------------------------- */
  /**
   * Notify, wake only one up.
   */
  public async notify_one(): Promise<void> {
    // NOTHING TO NOTIFY
    if (this.resolvers_.empty()) return;

    // POP THE 1ST RESOLVER
    const it = this.resolvers_.begin();
    this.resolvers_.erase(it);

    // CALL ITS HANDLER
    if (it.value.lockType === LockType.HOLD) it.value.handler();
    else it.value.handler(true);
  }

  /**
   * Notify, wake all up.
   */
  public async notify_all(): Promise<void> {
    // NOTHING TO NOTIFY
    if (this.resolvers_.empty()) return;

    // POP RESOLVERS
    const resolverList: IResolver[] = this.resolvers_.toJSON();
    this.resolvers_.clear();

    // ITERATE RESOLVERS
    for (const resolver of resolverList)
      if (resolver.lockType === LockType.HOLD) resolver.handler();
      else resolver.handler(true);
  }
}

/**
 *
 */
export namespace ConditionVariable {
  /**
   * Type of predicator function who determines the completion.
   */
  export type Predicator = () => boolean | Promise<boolean>;
}

interface IResolver {
  handler: (value?: any) => void;
  lockType: LockType;
}
