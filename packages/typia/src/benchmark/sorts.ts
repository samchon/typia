import { randint } from "../algorithm/random";
import { Deque } from "../container/Deque";
import { Vector } from "../container/Vector";
import { sort } from "../ranges/algorithm/sorting";
import { StringUtil } from "./internal/StringUtil";
import { TimeWatch } from "./internal/TimeWatch";

function watch(n: number): [number, number, number] {
  const items: number[] = [];
  for (let i: number = 0; i < n; ++i) items.push(randint(1, n));

  const v: Vector<number> = new Vector(items);
  const d: Deque<number> = new Deque(items);

  return [
    TimeWatch.measure(() => items.sort((x, y) => x - y)),
    TimeWatch.measure(() => sort(v)),
    TimeWatch.measure(() => sort(d)),
  ];
}

export async function main(): Promise<string> {
  let ret: string =
    "## Sorts \n" +
    " N | Array | Vector | Deque \n" +
    "---|-------|--------|-------\n";

  for (const n of [1000, 10000, 100000]) {
    let line: string = StringUtil.numberFormat(n);
    for (const time of watch(n)) line += ` | ${StringUtil.numberFormat(time)}`;

    ret += line + "\n";
  }
  return ret;
}
