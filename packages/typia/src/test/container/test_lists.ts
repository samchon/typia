import * as std from "../../index";

export function test_lists(): void {
  _Test_removes();
  _Test_merges();

  _Test_forward_lists();
}

function _Test_removes(): void {
  const v = new std.Vector<number>();
  for (let i: number = 0; i < 10; ++i) v.push_back(Math.random());

  _Test_remove(std.List, v);
  _Test_remove(std.ForwardList as any, v);
}

function _Test_remove(creator: typeof std.List, v: std.Vector<number>): void {
  const l = new creator(v.begin(), v.end());
  l.remove_if(_Remove_if);
  l.reverse();

  v.erase(std.remove_if(v.begin(), v.end(), _Remove_if), v.end());
  if (std.equal(l.begin(), l.end(), v.rbegin()) === false)
    throw new Error(`Bug on ${creator.name}.remove_if()`);
}
function _Remove_if(val: number): boolean {
  return val < 0.5;
}

function _Test_merges(): void {
  //----
  // PRELIMINARIES
  //----
  // SAMPLE DATA
  const v1 = new std.Vector<number>([1, 2, 3, 7, 8, 15, 16]);
  const v2 = new std.Vector<number>([5, 6, 12, 13]);

  // ARE SHUFFLED
  std.shuffle(v1.begin(), v1.end());
  std.shuffle(v2.begin(), v2.end());

  // VALIDATOR; SORTED & MERGED BY TREE-SET
  const set = new std.TreeSet<number>(v1.data());
  set.push(...v2.data());

  //----
  // VALIDATE
  //----
  _Test_merge(std.List, v1, v2, set);
  _Test_merge(std.ForwardList as any, v1, v2, set);
}

function _Test_merge(
  creator: typeof std.List,
  v1: std.Vector<number>,
  v2: std.Vector<number>,
  set: std.TreeSet<number>,
): void {
  // CONSTRUCT LISTS
  const l1 = new creator(v1.data());
  const l2 = new creator(v2.data());

  // SORT THEM TO MERGE
  l1.sort();
  l2.sort();

  // DO MERGE
  l1.merge(l2);

  // VALIDATE
  if ((std.equal as Function)(l1.begin(), l1.end(), set.begin()) === false)
    throw new Error(`Bug on ${creator.name}.merge().`);
}

function _Test_forward_lists(): void {
  //----
  // CONSTRUCT ELEMENTS
  //----
  const fl: std.ForwardList<number> = new std.ForwardList();
  for (let i: number = 9; i >= 0; --i) fl.push_front(i);

  //----
  // ELEMENTS I/O
  //----
  let it = std.advance(fl.before_begin(), 3); // STEP TO 2
  it = fl.erase_after(it); // AND ERASE 3 BY ERASE_AFTER()

  if (it.value !== 4)
    throw new Error("Bug on std.ForwardList.erase_after(); single deletion.");

  // INSERT AN ELEMENT
  it = std.advance(fl.before_begin(), 2);
  it = fl.insert_after(it, -1); // INSERT -1

  if (it.value !== -1)
    throw new Error("Bug on std.ForwardList.insert_after().");

  // ERASE RANGE
  it = std.advance(fl.before_begin(), 6);
  it = fl.erase_after(it, std.advance(it, 3 + 1));

  if (it.value !== 9)
    throw new Error("Bug on std.ForwardList.erase_after(); range deletion.");

  //----
  // FINAL VALIDATION
  //----
  const answer = new std.Vector<number>([0, 1, -1, 2, 4, 5, 9]);
  if (std.equal(fl.begin(), fl.end(), answer.begin()) === false)
    throw new Error("Bug on std.ForwardList; store elements are wrong.");
}
