import * as std from "../../index";

const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function random_characters(length: number): string {
  let ret: string = "";
  for (let i: number = 0; i < length; ++i) {
    const index: number = std.randint(9, CHARACTERS.length - 1);
    ret += CHARACTERS[index];
  }
  return ret;
}

export function test_hash_maps(): void {
  type Key = std.Pair<std.Pair<object, string>, std.Pair<object, string>>;
  const Key = std.Pair;

  const dict: std.HashMap<Key, number> = new std.HashMap();
  const tuples: Array<[Key, number]> = [];

  for (let i: number = 0; i < 100; ++i) {
    const key: Key = new Key(
      new std.Pair(new Object(), random_characters(3)),
      new std.Pair(new Object(), random_characters(7)),
    );
    const value: number = std.randint(0, 5000);

    dict.emplace(key, value);
    tuples.push([key, value]);
  }
  std.ranges.shuffle(tuples);

  for (const t of tuples) {
    const key: Key = t[0];
    const value: number = t[1];

    const it: std.HashMap.Iterator<Key, number> = dict.find(key);
    if (it.first !== key || it.second !== value)
      throw new Error("Error on hash algorithm, maybe.");
  }
}
