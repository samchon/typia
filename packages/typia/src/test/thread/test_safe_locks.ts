import * as std from "../../index";

export async function test_unique_locks(): Promise<void> {
  //----
  // PREPARE ASSETS
  //----
  // BASIC MUTEX
  const mtx: std.TimedMutex = new std.TimedMutex();

  // PROCEDURES
  const lambda = _Lambda.bind(undefined, true);
  const trier = () => mtx.try_lock();
  const unlocker = () => mtx.unlock();

  //----
  // DO TEST
  //----
  // STATIC METHOHD
  await _Test_lock(
    "UniqueLock.lock()",
    () => std.UniqueLock.lock(mtx, lambda),
    trier,
    unlocker,
  );
  await _Test_lock(
    "UniqueLock.try_lock()",
    () => std.UniqueLock.try_lock(mtx, lambda),
    trier,
    unlocker,
  );
  await _Test_lock(
    "UniqueLock.try_lock_for()",
    () => std.UniqueLock.try_lock_for(mtx, 50, lambda),
    trier,
    unlocker,
  );
}

export async function test_shared_locks(): Promise<void> {
  //----
  // PREPARE ASSETS
  //----
  // BASIC MUTEX
  const mtx: std.SharedTimedMutex = new std.SharedTimedMutex();

  // PROCEDURES
  const lambda = _Lambda.bind(undefined, true);
  const trier = () => mtx.try_lock();
  const unlocker = () => mtx.unlock();

  //----
  // DO TEST
  //----
  // STATIC METHOHD
  await _Test_lock(
    "SharedLock.lock()",
    () => std.SharedLock.lock(mtx, lambda),
    trier,
    unlocker,
  );
  await _Test_lock(
    "SharedLock.try_lock()",
    () => std.SharedLock.try_lock(mtx, lambda),
    trier,
    unlocker,
  );
  await _Test_lock(
    "SharedLock.try_lock_for()",
    () => std.SharedLock.try_lock_for(mtx, 50, lambda),
    trier,
    unlocker,
  );
}

async function _Test_lock(
  name: string,
  locker: () => Promise<void | boolean>,
  trier: () => Promise<boolean>,
  unlocker: () => Promise<void>,
): Promise<void> {
  try {
    await locker();
  } catch {}

  if ((await trier()) === false)
    throw new Error(`Bug on ${name}: invalid implementation.`);

  await unlocker();
}

function _Lambda(success: boolean): void {
  if (!success) throw new Error("Throw error.");
}
