import * as std from "../../index";

const enum Status {
  START_READING = "Start Reading",
  END_READING = "End Reading",
  START_WRITING = "Start Writing",
  END_WRITING = "End Writing",
}
const MAGNIFIER: number = 3;

async function write(
  mutex: std.SharedTimedMutex,
  statusList: std.Pair<Status, number>[],
): Promise<void> {
  for (let i: number = 0; i < MAGNIFIER * 10; ++i) {
    // JUST DELAY FOR SAFETY
    await std.sleep_for(100);
    const time: number = Date.now();

    // DO WRITE
    await mutex.lock();
    {
      const now: number = Date.now();
      statusList.push(new std.Pair(Status.START_WRITING, now - time));

      await std.sleep_for(50);
      statusList.push(new std.Pair(Status.END_WRITING, Date.now() - now));
    }
    await mutex.unlock();
  }
}

async function read(
  mutex: std.SharedTimedMutex,
  statusList: std.Pair<Status, number>[],
): Promise<void> {
  for (let i: number = 0; i < MAGNIFIER * 100; ++i) {
    const time: number = Date.now();

    // DO READ
    await mutex.lock_shared();
    {
      const now: number = Date.now();
      statusList.push(new std.Pair(Status.START_READING, now - time));

      await std.sleep_for(10);
      statusList.push(new std.Pair(Status.END_READING, Date.now() - now));
    }
    await mutex.unlock_shared();
  }
}

export async function test_shared_mutexes(): Promise<void> {
  const mutex: std.SharedTimedMutex = new std.SharedTimedMutex();
  const statusList: std.Pair<Status, number>[] = [];

  try {
    const promises: Promise<void>[] = [];
    for (let i: number = 0; i < 25; ++i) promises.push(read(mutex, statusList));
    promises.push(write(mutex, statusList));

    await Promise.all(promises);

    let reading: number = 0;
    let writing: number = 0;

    for (let i: number = 0; i < statusList.length; ++i) {
      const status: Status = statusList[i].first;

      if (status === Status.START_READING) ++reading;
      else if (status === Status.START_WRITING) ++writing;
      else if (status === Status.END_READING) --reading;
      else --writing;

      if (writing > 0 && reading > 0)
        throw new Error(
          `Bug on SharedTimeMutex; reading and writing at the same time at ${i}`,
        );
    }
  } catch (exp) {
    for (const pair of statusList) console.log(pair.first, pair.second);
    throw exp;
  }
}
