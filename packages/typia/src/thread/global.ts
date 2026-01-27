//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ILockable } from "../base/thread/ILockable";

/**
 * Sleep for time span.
 *
 * @param ms The milliseconds to sleep.
 */
export function sleep_for(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Sleep until time expiration.
 *
 * @param at The time point to wake up.
 */
export function sleep_until(at: Date): Promise<void> {
  const now: Date = new Date();
  const ms: number = at.getTime() - now.getTime(); // MILLISECONDS TO WAIT

  return sleep_for(ms); // CONVERT TO THE SLEEP_FOR
}

/**
 * Lock multiple mutexes.
 *
 * @param items Items to lock.
 */
export async function lock(...items: Pick<ILockable, "lock">[]): Promise<void> {
  const promises: Promise<void>[] = [];
  for (const mtx of items) promises.push(mtx.lock());

  await Promise.all(promises);
}

/**
 * Try lock mutexes.
 *
 * @param items Items to try lock.
 * @return Index of mutex who failed to lock. None of them're failed, then returns `-1`.
 */
export async function try_lock(
  ...items: Pick<ILockable, "try_lock">[]
): Promise<number> {
  for (let i: number = 0; i < items.length; ++i)
    if ((await items[i].try_lock()) === false) return i;

  return -1;
}
