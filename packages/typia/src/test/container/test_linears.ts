import * as std from "../../index";
import { Temporary } from "../../internal/functional/Temporary";

export function test_linear_containers(): void {
  _Test_linear(new std.Vector<number>());
  _Test_linear(new std.Deque<number>());
  _Test_linear(new std.List<number>());
}

function _Test_linear<
  SourceT extends std.base.ILinearContainer<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.IContainer.Iterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.IContainer.ReverseIterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
>(vec: SourceT): void {
  //----
  // CONSTRUCT ELEMENTS
  //----
  // 0 ~ 9
  vec.assign(10, 0);
  std.iota(vec.begin(), vec.end(), 0);

  //----
  // ELEMENTS I/O
  //----
  // ERASE AN ELEMENT
  let it: IteratorT = std.advance(<Temporary>vec.begin(), 3); // STEP TO 3
  it = vec.erase(it); // AND ERASE THE 3

  if (it.value !== 4)
    // MUST BE 4
    throw new Error(
      `Bug on ${vec.constructor.name}: nth(3) must be 4, but ${it.value}`,
    );

  // INSERT AN ELEMENT
  it = std.advance(<Temporary>vec.begin(), 2);
  it = vec.insert(it, -1); // insert -1

  if (it.value !== -1)
    throw new Error(
      `Bug on ${vec.constructor.name}.inser(): returned iterator is not exact, it must be -1 but ${it.value}`,
    );

  // ERASE RANGE
  it = std.advance(<Temporary>vec.begin(), 6);
  it = vec.erase(it, std.advance(<Temporary>it, 3)); // erase from 6 to 9

  if (it.value !== 9)
    throw Error(
      `Bug on ${vec.constructor.name}.erase(): returned iterator is not exact, it must be 9 but ${it.value}`,
    );

  //----
  // FINAL VALIDATION
  //----
  _Validate_linear_elements(vec, [0, 1, -1, 2, 4, 5, 9]);
}

function _Validate_linear_elements<
  SourceT extends std.base.ILinearContainer<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
  IteratorT extends std.base.IContainer.Iterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
  ReverseT extends std.base.IContainer.ReverseIterator<
    number,
    SourceT,
    IteratorT,
    ReverseT
  >,
>(vec: SourceT, answer: number[]): void {
  if (vec.size() !== answer.length)
    throw new Error(
      `Bug on ${
        vec.constructor.name
      }: number of stored elements are wrong, it must be ${
        answer.length
      } but ${vec.size()}`,
    );

  let i: number = 0;
  for (let it = vec.begin(); !it.equals(vec.end()); it = it.next())
    if (it.value !== answer[i++])
      throw new Error(
        `Bug on ${vec.constructor.name}: number of stored elements are different: it must be ${answer[i]} but ${it.value}`,
      );
}
