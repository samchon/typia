//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ISharedLockable } from "../base/thread/ISharedLockable";
import { ISharedTimedLockable } from "../base/thread/ISharedTimedLockable";
import { SafeLock } from "../internal/thread/SafeLock";

/**
 *
 */
export class SharedLock {}

/**
 * Shared mutex wrapper for the safe read lock.
 *
 * The module {@link SharedLock} is a collection of general purpose functions wrapping shared
 * mutex for ensuring the safe lock. If you *lock* a mutex (with your business logic code) through
 * any function of the {@link SharedLock} module, the shared mutex would be automatically
 * *unlocked* after your business, even if an error has been occured in your business.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace SharedLock {
  /**
   * Read locks a shared mutex with your business.
   *
   * Shares a mutex until be the *closure* has been completed. If there're someone who have
   * already {@link ILockable.lock monopolied} the mutex, the function call would be blocked
   * until all of them to {@link unlock return} their acquisitions.
   *
   * When succeeded to {@link ISharedLockable.lock_shared share} the mutex, the {@link lock}
   * function will call the *closure*, a custom function defning your business. After the
   * *closure* function be returned, the {@link lock} function automatically
   * {@link ISharedLockable.unlock_shared unlocks} the mutex, even if the *closure* function
   * throws any error.
   *
   * Therefore, when using this {@link lock} function, you don't need to consider about
   * {@link ISharedLockable.unlock_shared returning} the lock acquistion after your business.
   * It would just be done automatically.
   *
   * @param mutex Target shared mutex to read lock.
   * @param closure A function defining your business.
   *
   * @throw Exception would be thrown if the *closure* function throws any error.
   */
  export function lock<
    Mutex extends Pick<ISharedLockable, "lock_shared" | "unlock_shared">,
  >(mutex: Mutex, closure: Closure): Promise<void> {
    return SafeLock.lock(
      () => mutex.lock_shared(),
      () => mutex.unlock_shared(),
      closure,
    );
  }

  /**
   * Tries to read lock a shared mutex with your business.
   *
   * Attemps to share a mutex without blocking. If succeeded to share the mutex immediately, it
   * returns `true` directly. Otherwise there's someone who has already
   * {@link ILockable.lock monopolied} the mutex, the function gives up the trial immediately
   * and returns `false` directly without calling the *closure*.
   *
   * When succeeded to {@link ISharedLockable.lock_shared share} the mutex, the {@link try_lock}
   * function will call the *closure*, a custom function defning your business. After the
   * *closure* function be returned, the {@link try_lock} function automatically
   * {@link ISharedLockable.unlock_shared unlocks} the mutex, even if the *closure* function
   * throws any error.
   *
   * Therefore, when using this {@link try_lock} function, you don't need to consider about
   * {@link ISharedLockable.unlock_shared returning} the lock acquistion after your business.
   * It would just be done automatically.
   *
   * @param mutex Target shared mutex to try read lock.
   * @param closure A function defining your business.
   * @return Whether succeeded to share the mutex or not.
   *
   * @throw Exception would be thrown if the *closure* function throws any error.
   */
  export function try_lock<
    Mutex extends Pick<ISharedLockable, "try_lock_shared" | "unlock_shared">,
  >(mutex: Mutex, closure: Closure): Promise<boolean> {
    return SafeLock.try_lock(
      () => mutex.try_lock_shared(),
      () => mutex.unlock_shared(),
      closure,
    );
  }

  /**
   * Tries to read lock a shared mutex with your business until timeout.
   *
   * Attemps to share a mutex until timeout. If succeeded to share the mutex until timeout, it
   * returns `true` after calling the *closure*. Otherwise failed to acquiring the shared lock
   * in the given time, the function gives up the trial and returns `false` without calling the
   * *closure*.
   *
   * Failed to acquring the shared lock in the given time (returns `false`), it means that
   * there's someone who has already {@link ILockable.lock monopolied} the mutex and does not
   * return it over the timeout.
   *
   * When succeeded to {@link ISharedLockable.lock_shared share} the mutex, the
   * {@link try_lock_for} function will call the *closure*, a custom function defning your
   * business. After the *closure* function be returned, the {@link try_lock} function
   * automatically {@link ISharedLockable.unlock_shared unlocks} the mutex, even if the
   * *closure* function throws any error.
   *
   * Therefore, when using this {@link try_lock_for} function, you don't need to consider about
   * {@link ISharedLockable.unlock_shared returning} the lock acquistion after your business.
   * It would just be done automatically.
   *
   * @param mutex Target mutex to try lock until timeout.
   * @param ms The maximum miliseconds for waiting.
   * @param closure A function defining your business.
   * @return Whether succeeded to share the mutex or not.
   *
   * @throw Exception would be thrown if the *closure* function throws any error.
   */
  export function try_lock_for<
    Mutex extends Pick<
      ISharedTimedLockable,
      "try_lock_shared_for" | "unlock_shared"
    >,
  >(mutex: Mutex, ms: number, closure: Closure): Promise<boolean> {
    return SafeLock.try_lock(
      () => mutex.try_lock_shared_for(ms),
      () => mutex.unlock_shared(),
      closure,
    );
  }

  /**
   * Tries to read lock a shared mutex with your business until time expiration.
   *
   * Attemps to share a mutex until time expiration. If succeeded to share the mutex until the
   * time expiration, it returns `true` after calling the *closure*. Otherwise failed to
   * acquiring the shared lock in the given time, the function gives up the trial and returns
   * `false` without calling the *closure*.
   *
   * Failed to acquring the shared lock in the given time (returns `false`), it means that
   * there's someone who has already {@link ILockable.lock monopolied} the mutex and does not
   * return it over the time expiration.
   *
   * When succeeded to {@link ISharedLockable.lock_shared share} the mutex, the
   * {@link try_lock_until} function will call the *closure*, a custom function defning your
   * business. After the *closure* function be returned, the {@link try_lock} function
   * automatically {@link ISharedLockable.unlock_shared unlocks} the mutex, even if the
   * *closure* function throws any error.
   *
   * Therefore, when using this {@link try_lock_until} function, you don't need to consider
   * about {@link ISharedLockable.unlock_shared returning} the lock acquistion after your
   * business. It would just be done automatically.
   *
   * @param mutex Target mutex to try lock until time expiration.
   * @param at The maximum time point to wait.
   * @param closure A function defining your business.
   * @return Whether succeeded to share the mutex or not.
   *
   * @throw Exception would be thrown if the *closure* function throws any error.
   */
  export function try_lock_until<
    Mutex extends Pick<
      ISharedTimedLockable,
      "try_lock_shared_until" | "unlock_shared"
    >,
  >(mutex: Mutex, at: Date, closure: Closure): Promise<boolean> {
    return SafeLock.try_lock(
      () => mutex.try_lock_shared_until(at),
      () => mutex.unlock_shared(),
      closure,
    );
  }

  /**
   * Type of closure function defining your business logic.
   */
  type Closure = () => void | Promise<void>;
}
