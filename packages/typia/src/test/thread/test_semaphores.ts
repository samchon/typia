import { ITimedLockable } from "../../base/thread/ITimedLockable";
import * as std from "../../index";
import { _Test_lock, _Test_try_lock } from "./test_mutexes";

const SIZE = 8;

export async function test_semaphores(): Promise<void> {
  //----
  // TEST MUTEX FEATURES
  //----
  const mtx = new std.Semaphore(1);
  const wrapper: ITimedLockable = std.Semaphore.get_lockable(mtx);

  await _Test_lock(wrapper, "Semaphore.Lockable");
  await _Test_try_lock(wrapper, "Semaphore.Lockable");

  //----
  // TEST SPECIAL FEATURES OF SEMAPHORE
  //----
  const semaphore = new std.Semaphore(SIZE);

  await _Test_semaphore(semaphore);
  await _Test_timed_semaphore(semaphore);
}

async function _Test_semaphore(s: std.Semaphore): Promise<void> {
  let acquired_count: number = 0;

  // LOCK 4 TIMES
  for (let i: number = 0; i < s.max(); ++i) {
    await s.acquire();
    ++acquired_count;
  }
  if (acquired_count !== s.max()) throw new Error(`Bug on Semaphore.lock()`);
  else if ((await s.try_acquire()) === true)
    throw new Error(`Bug on Semaphore.try_lock()`);

  // LOCK 4 TIMES AGAIN -> THEY SHOULD BE HOLD
  for (let i: number = 0; i < s.max(); ++i)
    s.acquire().then(() => {
      ++acquired_count;
    });
  if (acquired_count !== s.max())
    throw new Error(`Bug on Semaphore.lock() when Semaphore is full`);

  // DO UNLOCK
  await s.release(s.max());

  if (acquired_count !== 2 * s.max())
    throw new Error(`Bug on Semaphore.unlock()`);

  // RELEASE UNRESOLVED LOCKS
  await std.sleep_for(0);
  await s.release(s.max());
}

async function _Test_timed_semaphore(ts: std.Semaphore): Promise<void> {
  // TRY LOCK FIRST
  for (let i: number = 0; i < ts.max(); ++i) {
    const flag: boolean = await ts.try_acquire_for(0);
    if (flag === false)
      throw new Error(
        "Bug on TimedSemaphore.try_lock_for(); failed to lock when clear",
      );
  }

  // TRY LOCK FOR -> MUST BE FAILED
  if ((await ts.try_acquire_for(50)) === true)
    throw new Error(
      "Bug on TimedSemaphore.try_lock_for(); succeeded to lock when must be failed.",
    );

  // LOCK WOULD BE HOLD
  let cnt: number = 0;
  for (let i: number = 0; i < ts.max() / 2; ++i)
    ts.acquire().then(() => {
      ++cnt;
    });

  await std.sleep_for(100);
  if (cnt === ts.max() / 2)
    throw new Error(
      "Bug on TimedSemaphore.try_lock_for(); failed to release holdings.",
    );

  // RELEASE AND LOCK
  await ts.release(ts.max());

  for (let i: number = 0; i < ts.max() / 2; ++i) {
    const flag: boolean = await ts.try_acquire_for(100);
    if (flag === false)
      throw new Error(
        "Bug on TimedSemaphore.try_lock_for(); failed to lock when released.",
      );
  }
  await ts.release(ts.max());
}
