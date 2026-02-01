import { ISharedLockable } from "../../base/thread/ISharedLockable";
import { ISharedTimedLockable } from "../../base/thread/ISharedTimedLockable";
import { ITimedLockable } from "../../base/thread/ITimedLockable";
import * as std from "../../index";

const SLEEP_TIME: number = 50;
const READ_COUNT: number = 10;

export async function test_mutexes(): Promise<void> {
  await _Test_lock(new std.Mutex());
  await _Test_try_lock(new std.TimedMutex());
  await _Test_lock_shared(new std.SharedMutex());
  await _Test_try_lock_shared(new std.SharedTimedMutex());
}

/* ---------------------------------------------------------
    WRITE LOCK
--------------------------------------------------------- */
export async function _Test_lock(
  mtx: std.base.ILockable,
  name: string = mtx.constructor.name,
): Promise<void> {
  const start_time: number = Date.now();

  // LOCK FOR A SECOND
  mtx.lock();
  std.sleep_for(SLEEP_TIME).then(() => {
    mtx.unlock();
  });

  // TRY LOCK AGAIN
  await mtx.lock();
  const elapsed_time: number = Date.now() - start_time;
  await mtx.unlock();

  if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${name}.lock() & unlock(): it does not work in exact time.`,
    );
}

export async function _Test_try_lock(
  mtx: ITimedLockable,
  name: string = mtx.constructor.name,
): Promise<void> {
  await _Test_lock(mtx, name);
  const start_time: number = Date.now();

  // DO LOCK
  let ret: boolean = await mtx.try_lock_for(SLEEP_TIME);
  if (ret === false)
    throw new Error(
      `Bug on ${name}.try_lock_for(): it does not return exact value`,
    );

  // TRY LOCK AGAIN
  ret = await mtx.try_lock_for(SLEEP_TIME);
  const elapsed_time: number = Date.now() - start_time;

  if (ret === true)
    throw new Error(
      `Bug on ${name}.try_lock_for(): it does not return exact value`,
    );
  else if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${name}.try_lock_for(): it does not work in exact time`,
    );

  await mtx.unlock();
}

/* ---------------------------------------------------------
    READ LOCK
--------------------------------------------------------- */
async function _Test_lock_shared(
  mtx: std.base.ILockable & ISharedLockable,
): Promise<void> {
  // TEST WRITING LOCK & UNLOCK
  await _Test_lock(mtx);

  //----
  // READ SIMULTANEOUSLY
  //----
  // READ LOCK; 10 TIMES
  let read_count: number = 0;
  for (let i: number = 0; i < READ_COUNT; ++i) {
    mtx.lock_shared();
    ++read_count;
  }
  if (read_count !== READ_COUNT)
    // READ LOCK CAN BE DONE SIMULTANEOUSLY
    throw new Error(
      `Bug on ${mtx.constructor.name}.lock_shared(): it doesn't support the simultaneous lock.`,
    );

  //----
  // READ FIRST, WRITE LATER
  //----
  let start_time: number = Date.now();
  std.sleep_for(SLEEP_TIME).then(() => {
    // SLEEP FOR A SECOND AND UNLOCK ALL READINGS
    for (let i: number = 0; i < READ_COUNT; ++i) mtx.unlock_shared();
  });

  // DO WRITE LOCK; MUST BE BLOCKED
  await mtx.lock();

  // VALIDATE ELAPSED TIME
  let elapsed_time: number = Date.now() - start_time;
  if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${mtx.constructor.name}.lock(): it does not block writing while reading.`,
    );

  //----
  // WRITE FIRST, READ LATER
  //----
  start_time = Date.now();
  std.sleep_for(SLEEP_TIME).then(() => {
    // SLEEP FOR A SECOND AND UNLOCK WRITINGS
    mtx.unlock();
  });
  for (let i: number = 0; i < READ_COUNT; ++i) await mtx.lock_shared();

  // VALIDATE ELAPSED TIME
  elapsed_time = Date.now() - start_time;
  if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${mtx.constructor.name}.lock_shared(): it does not block reading while writing.`,
    );

  // RELEASE READING LOCK FOR THE NEXT STEP
  for (let i: number = 0; i < READ_COUNT; ++i) await mtx.unlock_shared();
}

async function _Test_try_lock_shared(
  mtx: ITimedLockable & ISharedTimedLockable,
): Promise<void> {
  // TEST WRITING LOCK & UNLOCK
  await _Test_try_lock(mtx);
  await _Test_lock_shared(mtx);

  let start_time: number;
  let elapsed_time: number;
  let flag: boolean;

  //----
  // READ SIMULTANEOUSLY
  //----
  start_time = Date.now();

  // READ LOCK; 10 TIMES
  for (let i: number = 0; i < READ_COUNT; ++i) {
    flag = await mtx.try_lock_shared_for(SLEEP_TIME);
    if (flag === false)
      throw new Error(
        `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not return exact value.`,
      );
  }

  // VALIDATE ELAPSED TIME
  elapsed_time = Date.now() - start_time;
  if (elapsed_time >= SLEEP_TIME)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not support simultaneous lock.`,
    );

  //----
  // WRITE LOCK
  //----
  // TRY WRITE LOCK ON READING
  start_time = Date.now();
  flag = await mtx.try_lock_for(SLEEP_TIME);
  elapsed_time = Date.now() - start_time;

  if (flag === true)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_for(): it does not return exact value while reading.`,
    );
  else if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_for(): it does not block while reading.`,
    );

  // TRY WRITE LOCK AFTER READING
  std.sleep_for(SLEEP_TIME).then(() => {
    for (let i: number = 0; i < READ_COUNT; ++i) mtx.unlock_shared();
  });
  start_time = Date.now();
  flag = await mtx.try_lock_for(SLEEP_TIME);
  elapsed_time = Date.now() - start_time;

  if (flag === false)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_for(): it does not return exact value while reading.`,
    );
  else if (elapsed_time < SLEEP_TIME * 0.95)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_for(): it does not work in exact time.`,
    );

  //----
  // READ LOCK
  //----
  // READ LOCK ON WRITING
  start_time = Date.now();
  for (let i: number = 0; i < READ_COUNT; ++i) {
    flag = await mtx.try_lock_shared_for(SLEEP_TIME);
    if (flag === true)
      throw new Error(
        `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not return exact value while writing.`,
      );
  }
  elapsed_time = Date.now() - start_time;

  if (elapsed_time < SLEEP_TIME * READ_COUNT * 0.95)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not work in exact time.`,
    );

  // READ LOCK AFTER WRITING
  start_time = Date.now();
  std.sleep_for(SLEEP_TIME).then(() => {
    mtx.unlock();
  });

  for (let i: number = 0; i < READ_COUNT; ++i) {
    flag = await mtx.try_lock_shared_for(SLEEP_TIME);
    if (flag === false)
      throw new Error(
        `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not return exact value after writing.`,
      );
  }
  elapsed_time = Date.now() - start_time;

  if (elapsed_time < SLEEP_TIME * 0.95 || elapsed_time >= SLEEP_TIME * 5.0)
    throw new Error(
      `Bug on ${mtx.constructor.name}.try_lock_shared_for(): it does not work in exact time.`,
    );

  // RELEASE READING LOCK FOR THE NEXT STEP
  for (let i: number = 0; i < READ_COUNT; ++i) await mtx.unlock_shared();
}
