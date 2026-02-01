import * as std from "../../index";

export async function test_sleeps(): Promise<void> {
  await _Test_sleep_for();
  await _Test_sleep_until();
}

async function _Test_sleep_for(): Promise<void> {
  // RECORD TIMEPOINTS DURING SLEEP_FOR
  const t1 = new Date();
  await std.sleep_for(50);
  const t2 = new Date();

  // VALIDATE THE SLEEP_FOR
  _Validate_sleep(t1, t2);
}

async function _Test_sleep_until(): Promise<void> {
  // RECORD TIMEPOINTS DURING SLEEP_FOR
  const t1 = new Date();
  await std.sleep_until(new Date(t1.getTime() + 50));
  const t2 = new Date();

  // VAIDATE THE SLEEP_UNTIL
  _Validate_sleep(t1, t2);
}

function _Validate_sleep(t1: Date, t2: Date): void {
  const ms: number = t2.getTime() - t1.getTime();
  if (ms < 50 * 0.5 || ms >= 50 * 1.5)
    throw new Error(`Bug on sleep_for(): ${ms}`);
}
