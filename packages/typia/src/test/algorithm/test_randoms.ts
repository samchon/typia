import * as std from "../../index";

export function test_randoms(): void {
  _Test_rand_ints();
  _Test_samples();
}

function _Test_rand_ints(): void {
  for (let i: number = 0; i < 100; ++i) {
    let x: number = Math.floor(Math.random() * 100);
    let y: number = Math.floor(Math.random() * 100);

    if (x > y) [x, y] = [y, x];

    const rand: number = std.randint(x, y);
    if (rand < x || rand > y)
      throw new Error("Bug on std.experimantal.randint().");
  }
}

function _Test_samples(): void {
  for (let i: number = 0; i < 100; ++i) {
    const size: number = std.randint(10, 100);
    const populations: std.Vector<number> = _Generate_populations(size);

    const n: number = Math.min(size, std.randint(5, 20));
    const samples: std.Vector<number> = new std.Vector();

    std.ranges.sample(populations, std.back_inserter(samples), n);
    if (std.ranges.is_sorted(samples) === false)
      throw new Error("Bug on std.sample(); Elements are not sorted.");

    samples.erase(std.ranges.unique(samples), samples.end());
    if (samples.size() !== n)
      throw new Error("Bug on std.sample(); Elements are not unique.");
  }
}

function _Generate_populations(size: number): std.Vector<number> {
  const ret: std.Vector<number> = new std.Vector(size, 0);
  for (let i: number = 0; i < ret.size(); ++i) ret.set(i, i);

  return ret;
}
