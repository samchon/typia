import * as std from "../../index";
import { Point2D } from "../internal/Point2D";

export function test_numeric_algorithms(): void {
  //----
  // CONSTRUCT BASIC DATA
  //----
  const x: std.Vector<Point2D> = new std.Vector();
  const y: std.Vector<Point2D> = new std.Vector();

  for (let i: number = 0; i < 10; ++i) {
    x.push_back(new Point2D(std.randint(0, 100), std.randint(0, 100)));
    y.push_back(new Point2D(std.randint(0, 100), std.randint(0, 100)));
  }

  //----
  // DO TEST
  //----
  // COMMON ALGORITHMS
  _Test_accumulate(x);
  _Test_inner_product(x, y);
  _Test_adjacent_difference(x);
  _Test_partial_sum(x);

  // PREFIX SUMS
  _Test_inclusive_scan(x);
  _Test_exclusive_scan(x);
}

/* ---------------------------------------------------------
    COMMON ALGORITHMS
--------------------------------------------------------- */
function _Test_accumulate(vec: std.Vector<Point2D>): void {
  let solution: Point2D = new Point2D();
  for (const elem of vec) solution = std.plus(solution, elem);

  const ret: Point2D = std.accumulate(vec.begin(), vec.end(), new Point2D());
  if (!std.equal_to(solution, ret))
    throw new std.DomainError("Bug on std.accumulate().");
}

function _Test_inner_product(
  x: std.Vector<Point2D>,
  y: std.Vector<Point2D>,
): void {
  let solution: Point2D = new Point2D();
  for (let i: number = 0; i < x.size(); ++i)
    solution = std.plus(solution, std.multiplies(x.at(i), y.at(i)));

  const ret: Point2D = std.inner_product(
    x.begin(),
    x.end(),
    y.begin(),
    new Point2D(),
  );
  if (!std.equal_to(solution, ret))
    throw new std.DomainError("Bug on std.inner_product().");
}

function _Test_adjacent_difference(vec: std.Vector<Point2D>): void {
  const solution: std.Vector<Point2D> = new std.Vector([vec.front()]);
  for (let i: number = 1; i < vec.size(); ++i)
    solution.push_back(std.minus(vec.at(i), vec.at(i - 1)));

  const ret: std.Vector<Point2D> = new std.Vector();
  std.adjacent_difference(vec.begin(), vec.end(), std.back_inserter(ret));

  if (std.equal(solution.begin(), solution.end(), ret.begin()) === false)
    throw new std.DomainError("Bug on std.adjacent_difference().");
}

function _Test_partial_sum(vec: std.Vector<Point2D>): void {
  const solution: std.Vector<Point2D> = new std.Vector();
  let sum: Point2D = new Point2D();

  for (const elem of vec) {
    sum = std.plus(sum, elem);
    solution.push_back(sum);
  }

  const ret: std.Vector<Point2D> = new std.Vector();
  std.partial_sum(vec.begin(), vec.end(), std.back_inserter(ret));

  if (std.equal(solution.begin(), solution.end(), ret.begin()) === false)
    throw new std.DomainError("Bug on std.partial_sum().");
}

/* ---------------------------------------------------------
    PREFIX SUMS
--------------------------------------------------------- */
function _Test_inclusive_scan(vec: std.Vector<Point2D>): void {
  const solution: std.Vector<Point2D> = new std.Vector([vec.front()]);
  for (let i: number = 1; i < vec.size(); ++i)
    solution.push_back(std.plus(vec.at(i), solution.at(i - 1)));

  const ret: std.Vector<Point2D> = new std.Vector();
  std.inclusive_scan(vec.begin(), vec.end(), std.back_inserter(ret));

  if (std.equal(solution.begin(), solution.end(), ret.begin()) === false)
    throw new std.DomainError("Bug on std.transform_inclusive_scan().");
}

function _Test_exclusive_scan(vec: std.Vector<Point2D>): void {
  const solution: std.Vector<Point2D> = new std.Vector([new Point2D()]);
  for (let i: number = 0; i < vec.size() - 1; ++i)
    solution.push(std.plus(vec.at(i), solution.at(i)));

  const ret: std.Vector<Point2D> = new std.Vector();
  std.exclusive_scan(
    vec.begin(),
    vec.end(),
    std.back_inserter(ret),
    new Point2D(),
  );

  if (std.equal(solution.begin(), solution.end(), ret.begin()) === false)
    throw new std.DomainError("Bug on std.exclusive_scan().");
}
