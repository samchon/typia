//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ISharedLockable } from "./ISharedLockable";

/**
 * Common interface for shared & timed lockable mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ISharedTimedLockable extends ISharedLockable {
  /* ---------------------------------------------------------
        WRITE LOCK
    --------------------------------------------------------- */
  /**
   * Tries to write lock the mutex until timeout.
   *
   * Attempts to monopoly a mutex until timeout. If succeeded to monopoly the mutex until the
   * timeout, it returns `true`. Otherwise failed to acquiring the lock in the given time, the
   * function gives up the trial and returns `false`.
   *
   * Failed to acquiring the lock in the given time (returns `false`), it means that there's
   * someone who has already {@link lock monopolied} or {@link lock_shared shared} the mutex and
   * does not return it over the timeout.
   *
   * Note that, if you succeeded to monopoly the mutex (returns `true`) but do not call the
   * {@link unlock} function after your business, the others who want to {@link lock monopoly}
   * or {@link lock_shared share} the mutex would be fall into the forever sleep. Therefore,
   * never forget to calling the {@link unlock} function or utilize the
   * {@link UniqueLock.try_lock_for} function instead to ensure the safety.
   *
   * @param ms The maximum miliseconds for waiting.
   * @return Whether succeeded to monopoly the mutex or not.
   */
  try_lock_for(ms: number): Promise<boolean>;

  /**
   * Tries to write lock the mutex until time expiration.
   *
   * Attemps to monopoly a mutex until time expiration. If succeeded to monopoly the mutex
   * until the time expiration, it returns `true`. Otherwise failed to acquiring the lock in the
   * given time, the function gives up the trial and returns `false`.
   *
   * Failed to acquiring the lock in the given time (returns `false`), it means that there's
   * someone who has already {@link lock monopolied} or {@link lock_shared shared} the mutex and
   * does not return it over the time expiration.
   *
   * Note that, if you succeeded to monopoly the mutex (returns `true`) but do not call the
   * {@link unlock} function after your business, the others who want to {@link lock monopoly}
   * or {@link lock_shared share} the mutex would be fall into the forever sleep. Therefore,
   * never forget to calling the {@link unlock} function or utilize the
   * {@link UniqueLock.try_lock_until} function instead to ensure the safety.
   *
   * @param at The maximum time point to wait.
   * @return Whether succeeded to monopoly the mutex or not.
   */
  try_lock_until(at: Date): Promise<boolean>;

  /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
  /**
   * Tries to read lock the mutex until timeout.
   *
   * Attemps to share a mutex until timeout. If succeeded to share the mutex until timeout, it
   * returns `true`. Otherwise failed to acquiring the shared lock in the given time, the
   * function gives up the trial and returns `false`.
   *
   * Failed to acquring the shared lock in the given time (returns `false`), it means that
   * there's someone who has already {@link lock monopolied} the mutex and does not return it
   * over the timeout.
   *
   * Note that, if you succeeded to share the mutex (returns `true`) but do not call the
   * {@link unlock_shared} function after your buinsess, the others who want to
   * {@link lock monopoly} the mutex would be fall into the forever sleep. Therefore, never
   * forget to calling the {@link unlock_shared} function or utilize the
   * {@link SharedLock.try_lock_for} function instead to ensure the safety.
   *
   * @param ms The maximum miliseconds for waiting.
   * @return Whether succeeded to share the mutex or not.
   */
  try_lock_shared_for(ms: number): Promise<boolean>;

  /**
   * Tries to read lock the mutex until time expiration.
   *
   * Attemps to share a mutex until time expiration. If succeeded to share the mutex until time
   * expiration, it returns `true`. Otherwise failed to acquiring the shared lock in the given
   * time, the function gives up the trial and returns `false`.
   *
   * Failed to acquring the shared lock in the given time (returns `false`), it means that
   * there's someone who has already {@link lock monopolied} the mutex and does not return it
   * over the time expiration.
   *
   * Note that, if you succeeded to share the mutex (returns `true`) but do not call the
   * {@link unlock_shared} function after your buinsess, the others who want to
   * {@link lock monopoly} the mutex would be fall into the forever sleep. Therefore, never
   * forget to calling the {@link unlock_shared} function or utilize the
   * {@link SharedLock.try_lock_until} function instead to ensure the safety.
   *
   * @param at The maximum time point to wait.
   * @return Whether succeeded to share the mutex or not.
   */
  try_lock_shared_until(at: Date): Promise<boolean>;
}
