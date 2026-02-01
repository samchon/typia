//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { Vector } from "../container/Vector";
import { IPointer } from "../functional/IPointer";
import { Writeonly } from "../internal/functional/Writeonly";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { advance, distance } from "../iterator/global";
import { sort } from "./sorting";

/**
 * Generate random integer.
 *
 * @param x Minimum value.
 * @param y Maximum value.
 *
 * @return A random integer between [x, y].
 */
export function randint(x: number, y: number): number {
  const rand: number = Math.random() * (y - x + 1);
  return Math.floor(rand) + x;
}

/**
 * Pick sample elements up.
 *
 * @param first Input iteartor of the first position.
 * @param last Input iterator of the last position.
 * @param output Output iterator of the first position.
 * @param n Number of elements to pick up.
 *
 * @return Output Iterator of the last position by advancing.
 */
export function sample<
  InputIterator extends Readonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, InputIterator>
  >,
  OutputIterator extends Writeonly<
    IForwardIterator<IPointer.ValueType<InputIterator>, OutputIterator>
  >,
>(
  first: InputIterator,
  last: InputIterator,
  output: OutputIterator,
  n: number,
): OutputIterator {
  // GENERATE REMAINDERS
  const step: number = distance(first, last);
  const remainders: number[] = [];

  for (let i: number = 0; i < step; ++i) remainders.push(i);

  //----
  // CONSTRUCT INDEXES
  //----
  const advances: Vector<number> = new Vector();
  n = Math.min(n, step);

  // PICK SAMPLE INDEXES
  for (let i: number = 0; i < n; ++i) {
    const idx: number = randint(0, remainders.length - 1);
    advances.push(remainders.splice(idx, 1)[0]);
  }
  sort(advances.begin(), advances.end());

  // CHANGE INDEXES TO ADVANCES
  for (let i: number = n - 1; i >= 1; --i)
    advances.set(i, advances.at(i) - advances.at(i - 1));

  //----
  // FILL SAMPLES
  //----
  for (const adv of advances) {
    first = advance(first, adv);

    output.value = first.value;
    output = output.next();
  }
  return output;
}
