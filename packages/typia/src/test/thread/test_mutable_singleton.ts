import * as std from "../../index";

export async function test_mutable_singleton(): Promise<void> {
  // initlaize Singleton generator
  let index: number = 0;
  const singleton: std.MutableSingleton<number> = new std.MutableSingleton(
    async () => {
      await std.sleep_for(std.randint(50, 250));
      return ++index;
    },
  );

  // validate Singleton.get()
  let promises: Promise<number>[] = [];
  for (let i: number = 0; i < 100; ++i) promises.push(singleton.get());

  let results: number[] = await Promise.all(promises);
  if (results.some((value) => value !== 1))
    throw new Error(
      "Error on Singleton.get(): the lazy-construction must be done in only one time.",
    );

  // validate Singleton.reload()
  promises = [singleton.reload()];
  for (let i: number = 0; i < 100; ++i) promises.push(singleton.get());

  results = await Promise.all(promises);
  if (results.some((value) => value !== 2))
    throw new Error(
      `Error on Singleton.reload(): must be 2 but ${results.find(
        (value) => value !== 2,
      )!}.`,
    );
}
