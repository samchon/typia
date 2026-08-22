import { TestValidator } from "@nestia/e2e";
import { _stringLengthGte } from "typia/lib/internal/_stringLengthGte";
import { _stringLengthLte } from "typia/lib/internal/_stringLengthLte";

/**
 * Verifies the string-length comparison helpers preserve exact code-point
 * semantics while stopping once a boundary determines their result.
 *
 * The generated validators no longer compute a complete numeric length for
 * `MinLength` and `MaxLength`. The replacement predicates must remain equal to
 * comparing `[...value].length`, including zero, fractional, and Unicode cases,
 * and their loops must not read beyond a decisive character.
 *
 * 1. Compare both helpers with a code-point-count oracle over boundary values.
 * 2. Wrap the native string iterator and count reads made by decisive checks.
 * 3. Require zero-bound checks to return without opening the iterator at all.
 */
export const test_validate_string_length_short_circuit = (): void => {
  const values: string[] = [
    "",
    "a",
    "\u{1f600}",
    "a\u{1f600}",
    "\u{1f1f0}\u{1f1f7}",
    "\u{1f468}\u200d\u{1f469}\u200d\u{1f467}",
  ];
  const boundaries: number[] = [
    -1,
    0,
    0.5,
    1,
    1.5,
    2,
    5,
    Number.POSITIVE_INFINITY,
    Number.NaN,
  ];
  for (const value of values)
    for (const boundary of boundaries) {
      const length: number = [...value].length;
      const label: string = `${JSON.stringify(value)} against ${boundary}`;
      TestValidator.equals(
        `greater-than-or-equal ${label}`,
        _stringLengthGte(value, boundary),
        length >= boundary,
      );
      TestValidator.equals(
        `less-than-or-equal ${label}`,
        _stringLengthLte(value, boundary),
        length <= boundary,
      );
    }

  const descriptor: PropertyDescriptor = Object.getOwnPropertyDescriptor(
    String.prototype,
    Symbol.iterator,
  )!;
  const original: () => IterableIterator<string> = descriptor.value;
  let reads: number = 0;
  Object.defineProperty(String.prototype, Symbol.iterator, {
    ...descriptor,
    value: function (this: string): IterableIterator<string> {
      const iterator: IterableIterator<string> = original.call(this);
      return {
        next: (): IteratorResult<string> => {
          ++reads;
          return iterator.next();
        },
        [Symbol.iterator](): IterableIterator<string> {
          return this;
        },
      };
    },
  });
  let minimumResult: boolean;
  let minimumReads: number;
  let maximumResult: boolean;
  let maximumReads: number;
  let zeroMinimumResult: boolean;
  let zeroMinimumReads: number;
  let negativeMaximumResult: boolean;
  let negativeMaximumReads: number;
  try {
    reads = 0;
    minimumResult = _stringLengthGte("abcdef", 2);
    minimumReads = reads;

    reads = 0;
    maximumResult = _stringLengthLte("abcdef", 2);
    maximumReads = reads;

    reads = 0;
    zeroMinimumResult = _stringLengthGte("abcdef", 0);
    zeroMinimumReads = reads;

    reads = 0;
    negativeMaximumResult = _stringLengthLte("abcdef", -1);
    negativeMaximumReads = reads;
  } finally {
    Object.defineProperty(String.prototype, Symbol.iterator, descriptor);
  }
  TestValidator.equals("minimum result", minimumResult!, true);
  TestValidator.equals("minimum decisive reads", minimumReads!, 2);
  TestValidator.equals("maximum result", maximumResult!, false);
  TestValidator.equals("maximum decisive reads", maximumReads!, 3);
  TestValidator.equals("zero minimum", zeroMinimumResult!, true);
  TestValidator.equals("zero minimum reads", zeroMinimumReads!, 0);
  TestValidator.equals("negative maximum", negativeMaximumResult!, false);
  TestValidator.equals("negative maximum reads", negativeMaximumReads!, 0);
};
