//================================================================

/**
 * @packageDocumentation
 * @module std.base
 */
//================================================================
import { ILockable } from "./ILockable";

/**
 * Common interface for shared lockable mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ISharedLockable extends ILockable {
  /* ---------------------------------------------------------
        WRITE LOCK
    --------------------------------------------------------- */
  /**
   * Write locks the mutex.
   *
   * Monopolies a mutex until be {@link unlock unlocked}. If there're someone who have already
   * {@link lock monopolied} or {@link lock_shared shared} the mutex, the function call would
   * be blocked until all of them to return their acquistions by calling {@link unlock} or
   * {@link unlock_shared} methods.
   *
   * In same reason, if you don't call the {@link unlock} function after your business, the
   * others who want to {@link lock monopoly} or {@link lock_shared share} the mutex would be
   * fall into the forever sleep. Therefore, never forget to calling the {@link unlock} function
   * or utilize the {@link UniqueLock.lock} function instead to ensure the safety.
   */
  lock(): Promise<void>;

  /**
   * Tries to write lock the mutex.
   *
   * Attempts to monopoly a mutex without blocking. If succeeded to monopoly the mutex
   * immediately, it returns `true` directly. Otherwise there's someone who has already
   * {@link lock monopolied} or {@link lock_shared shared} the mutex, the function gives up the
   * trial immediately and returns `false` directly.
   *
   * Note that, if you succeeded to monopoly the mutex (returns `true`) but do not call the
   * {@link unlock} function after your business, the others who want to {@link lock monopoly}
   * or {@link lock_shared share} the mutex would be fall into the forever sleep. Therefore,
   * never forget to calling the {@link unlock} function or utilize the
   * {@link UniqueLock.try_lock} function instead to ensure the safety.
   *
   * @return Whether succeeded to monopoly the mutex or not.
   */
  try_lock(): Promise<boolean>;

  /**
   * Write unlocks the mutex.
   *
   * When you call this {@link unlock} method and there're someone who are currently blocked by
   * attempting to {@link lock write} or {@link lock_shared read} lock this mutex, one of them
   * (FIFO; first-in-first-out) would acquire the lock and continues its execution.
   *
   * Otherwise, there's not anyone who is acquiring the {@link lock write lock} of this mutex,
   * the {@link DomainError} exception would be thrown.
   *
   * > As you know, when you succeeded to acquire the `write lock`, you don't have to forget to
   * > calling this {@link unlock} method after your business. If you forget it, it would be a
   * > terrible situation for the others who're attempting to lock this mutex.
   * >
   * > However, if you utilize the {@link UniqueLock}, you don't need to consider about this
   * > {@link unlock} method. Just define your business into a callback function as a parameter
   * > of methods of the {@link UniqueLock}, then this {@link unlock} method would be
   * > automatically called by the {@link UniqueLock} after the business.
   *
   * @throw {@link DomainError} when no one is acquiring the {@link lock write lock}.
   */
  unlock(): Promise<void>;

  /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
  /**
   * Read locks the mutex.
   *
   * Shares a mutex until be {@link unlock_shared unlocked}. If there're someone who have
   * already {@link lock monopolied} the mutex, the function call would be blocked until all of
   * them to {@link unlock return} their acquisitions.
   *
   * In same reason, if you don't call the {@link unlock_shared} function after your business,
   * the others who want to {@link lock monopoly} the mutex would be fall into the forever
   * sleep. Therefore, never forget to calling the {@link unlock_shared} or utilize the
   * {@link SharedLock.lock} function instead to ensure the safety.
   */
  lock_shared(): Promise<void>;

  /**
   * Tries to read lock the mutex.
   *
   * Attemps to share a mutex without blocking. If succeeded to share the mutex immediately, it
   * returns `true` directly. Otherwise there's someone who has already {@link lock monopolied}
   * the mutex, the function gives up the trial immediately and returns `false` directly.
   *
   * Note that, if you succeeded to share the mutex (returns `true`) but do not call the
   * {@link unlock_shared} function after your buinsess, the others who want to
   * {@link lock monopoly} the mutex would be fall into the forever sleep. Therefore, never
   * forget to calling the {@link unlock_shared} function or utilize the
   * {@link SharedLock.try_lock} function instead to ensure the safety.
   *
   * @return Whether succeeded to share the mutex or not.
   */
  try_lock_shared(): Promise<boolean>;

  /**
   * Read unlocks the mutex.
   *
   * When you call this {@link unlock_shared} method and there're someone who are currently
   * blocked by attempting to {@link lock monopoly} this mutex, one of them
   * (FIFO; first-in-first-out) would acquire the lock and continues its execution.
   *
   * Otherwise, there's not anyone who is acquiring the {@link lock_shared read lock} of this
   * mutex, the {@link DomainError} exception would be thrown.
   *
   * > As you know, when you succeeded to acquire the `read lock`, you don't have to forget to
   * > calling this {@link unlock_shared} method after your business. If you forget it, it would
   * > be a terrible situation for the others who're attempting to lock this mutex.
   * >
   * > However, if you utilize the {@link SharedLock}, you don't need to consider about this
   * > {@link unlock_shared} method. Just define your business into a callback function as a
   * > parameter of methods of the {@link SharedLock}, then this {@link unlock_shared} method
   * > would be automatically called by the {@link SharedLock} after the business.
   */
  unlock_shared(): Promise<void>;
}
