import * as std from "../../index";

export function test_modifiers(): void {
  _Test_removes();
  _Test_replaces();

  _Test_uniques();
  _Test_rotate();
}

function _Test_removes(): void {
  const v: std.Vector<number> = _Create_sample();
  v.erase(std.remove(v.begin(), v.end(), 2), v.end());

  const it = std.find(v.begin(), v.end(), 2);
  if (it.equals(v.end()) === false) throw new Error("Bug on std.remove().");
}
function _Test_replaces(): void {
  const v: std.Vector<number> = _Create_sample();
  std.replace(v.begin(), v.end(), 2, 4);

  const it = std.find(v.begin(), v.end(), 2);
  if (it.equals(v.end()) === false) throw new Error("Bug on std.replace().");
}

function _Test_uniques(): void {
  const l: std.List<number> = new std.List();
  for (let i: number = 0; i < 1000; ++i)
    l.push_back(Math.floor(Math.random() * 50));

  l.sort();
  const v = new std.Vector<number>(l.begin(), l.end());

  l.unique();
  v.erase(std.unique(v.begin(), v.end()), v.end());

  if (std.equal(v.begin(), v.end(), l.begin()) === false)
    throw new Error("Bug on std.unique().");
}

function _Test_rotate(): void {
  const x: std.Vector<number> = new std.Vector([0, 1, 2, 3, 4, 5]);
  const y: std.Vector<number> = new std.Vector([3, 4, 5, 0, 1, 2]);

  std.ranges.rotate(x, x.nth(3));

  if (std.ranges.equal(x, y) === false) throw new Error("Bug on std.rotate().");
}

function _Create_sample(): std.Vector<number> {
  return new std.Vector<number>([1, 2, 2, 3, 3, 3]);
}
