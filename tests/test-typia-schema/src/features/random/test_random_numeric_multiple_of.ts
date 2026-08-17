import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

/**
 * Verifies numeric random generation snaps within value-unit bounds.
 *
 * Multiplying fallback bounds by `multipleOf` can invert one-sided ranges, so
 * every generated value is checked against its declared bounds and against an
 * exact decimal oracle for its divisor. The generator picks an integer quotient
 * over exact decimals and the generated validator divides the same way, so the
 * round trip closes for every divisor including a fractional one and one whose
 * quotient runs past `Number.MAX_SAFE_INTEGER` — a divisor such as `0.01` used
 * to break it, because the remainder check answered about the stored binary
 * double rather than the decimal the value prints back. Empty discrete ranges
 * must still fail without an unbounded retry.
 *
 * 1. Generate decimal, integer, one-sided, and exclusive-bound values repeatedly.
 * 2. Require every generated object to satisfy its own type through `typia.is`.
 * 3. Compare every value with an independent exact decimal oracle.
 * 4. Require both random APIs to reject an impossible multiple range promptly.
 */
export const test_random_numeric_multiple_of = (): void => {
  interface IValues {
    decimal: number &
      tags.Minimum<-0.05> &
      tags.Maximum<0.05> &
      tags.MultipleOf<0.01>;
    exclusive: number &
      tags.ExclusiveMinimum<0> &
      tags.ExclusiveMaximum<0.05> &
      tags.MultipleOf<0.01>;
    upperOnly: number & tags.Maximum<1000> & tags.MultipleOf<2>;
    lowerOnly: number & tags.Minimum<-1000> & tags.MultipleOf<0.1>;
    integerUpperOnly: number &
      tags.Type<"int32"> &
      tags.Maximum<1000> &
      tags.MultipleOf<2>;
    integerDecimal: number &
      tags.Type<"int32"> &
      tags.Minimum<-9> &
      tags.Maximum<9> &
      tags.MultipleOf<1.5>;
    large: number &
      tags.Minimum<10_000_000_000_000_000> &
      tags.Maximum<10_000_000_001_000_000> &
      tags.MultipleOf<0.99991>;
    fractionalLargeQuotient: number &
      tags.Minimum<0.1> &
      tags.Maximum<0.2> &
      tags.MultipleOf<9.9991e-17>;
  }
  /** The same members without their divisors, so every bound stays validated. */
  interface IBounds {
    decimal: number & tags.Minimum<-0.05> & tags.Maximum<0.05>;
    exclusive: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<0.05>;
    upperOnly: number & tags.Maximum<1000>;
    lowerOnly: number & tags.Minimum<-1000>;
    integerUpperOnly: number & tags.Type<"int32"> & tags.Maximum<1000>;
    integerDecimal: number &
      tags.Type<"int32"> &
      tags.Minimum<-9> &
      tags.Maximum<9>;
    large: number &
      tags.Minimum<10_000_000_000_000_000> &
      tags.Maximum<10_000_000_001_000_000>;
    fractionalLargeQuotient: number & tags.Minimum<0.1> & tags.Maximum<0.2>;
  }
  type Impossible = number &
    tags.ExclusiveMinimum<0> &
    tags.ExclusiveMaximum<0.01> &
    tags.MultipleOf<0.01>;

  const create = typia.createRandom<IValues>();
  const samples: number[] = [0, 0.25, 0.5, 0.75, 1 - Number.EPSILON];
  for (let i = 0; i < 100; ++i) {
    const sample: number = samples[i % samples.length]!;
    const direct: IValues = withRandom(sample, () => typia.random<IValues>());
    const reusable: IValues = withRandom(sample, () => create());
    for (const [name, value] of Object.entries({ direct, reusable })) {
      TestValidator.equals(
        `${name} validates at ${i}`,
        typia.is<IValues>(value),
        true,
      );
      TestValidator.equals(
        `${name} honors every bound at ${i}`,
        typia.is<IBounds>(value),
        true,
      );
      TestValidator.equals(
        `${name} decimal oracle at ${i}`,
        decimalMultiple(value.decimal, 0.01),
        true,
      );
      TestValidator.equals(
        `${name} exclusive oracle at ${i}`,
        decimalMultiple(value.exclusive, 0.01),
        true,
      );
      TestValidator.equals(
        `${name} upper-only oracle at ${i}`,
        decimalMultiple(value.upperOnly, 2),
        true,
      );
      TestValidator.equals(
        `${name} lower-only oracle at ${i}`,
        decimalMultiple(value.lowerOnly, 0.1),
        true,
      );
      TestValidator.equals(
        `${name} integer upper-only oracle at ${i}`,
        decimalMultiple(value.integerUpperOnly, 2),
        true,
      );
      TestValidator.equals(
        `${name} integer decimal oracle at ${i}`,
        decimalMultiple(value.integerDecimal, 1.5),
        true,
      );
      TestValidator.equals(
        `${name} large oracle at ${i}`,
        decimalMultiple(value.large, 0.99991),
        true,
      );
      TestValidator.equals(
        `${name} fractional large-quotient oracle at ${i}`,
        decimalMultiple(value.fractionalLargeQuotient, 9.9991e-17),
        true,
      );
    }
  }

  assertThrows("typia.random impossible range", () =>
    withRandom(0, () => typia.random<Impossible>()),
  );
  const impossible = typia.createRandom<Impossible>();
  assertThrows("typia.createRandom impossible range", () =>
    withRandom(0, () => impossible()),
  );
};

const decimalMultiple = (value: number, multipleOf: number): boolean => {
  const left = fraction(value);
  const right = fraction(multipleOf);
  return (
    (left.numerator * right.denominator) %
      (right.numerator * left.denominator) ===
    0n
  );
};

const fraction = (
  value: number,
): { numerator: bigint; denominator: bigint } => {
  const [mantissa = "0", exponentText = "0"] = value.toString().split("e");
  const negative: boolean = mantissa.startsWith("-");
  const unsigned: string = negative ? mantissa.slice(1) : mantissa;
  const point: number = unsigned.indexOf(".");
  const decimals: number = point === -1 ? 0 : unsigned.length - point - 1;
  const digits: bigint = BigInt(unsigned.replace(".", ""));
  const exponent: number = Number(exponentText) - decimals;
  const numerator: bigint = negative ? -digits : digits;
  return exponent >= 0
    ? { numerator: numerator * 10n ** BigInt(exponent), denominator: 1n }
    : { numerator, denominator: 10n ** BigInt(-exponent) };
};

const assertThrows = (name: string, closure: () => unknown): void => {
  let thrown: boolean = false;
  try {
    closure();
  } catch {
    thrown = true;
  }
  TestValidator.equals(name, thrown, true);
};

const withRandom = <T>(sample: number, closure: () => T): T => {
  const previous: () => number = Math.random;
  Math.random = () => sample;
  try {
    return closure();
  } finally {
    Math.random = previous;
  }
};
