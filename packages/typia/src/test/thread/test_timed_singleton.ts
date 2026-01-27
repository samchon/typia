import std from "../../index";

export async function test_timed_singleton(): Promise<void> {
  let i: number = 0;
  const singleton = new std.TimedSingleton(10, () => i);
  singleton.get();

  await std.sleep_for(20);
  ++i;
  if (singleton.get() !== 1)
    throw new Error("Bug on TimedSingleton.get(): not re-constructed.");
}
