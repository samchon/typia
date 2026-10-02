import type { IRandomGenerator } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";
import { _randomArray } from "typia/lib/internal/_randomArray";
import { _randomInteger } from "typia/lib/internal/_randomInteger";
import { _randomNumber } from "typia/lib/internal/_randomNumber";
import { _randomPick } from "typia/lib/internal/_randomPick";
import { _randomString } from "typia/lib/internal/_randomString";

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
 *
 * @evidence contracts/testing.md#behavioral-verification Two public generator forms exercise five RNG positions100 times, generated value/bounds guards and an independent decimal-fraction BigInt modulus oracle across eight numeric properties; empty exclusive multiple domains must throw.
 * @evidence contracts/testing.md#independent-expectations The private decimal oracle parses each shortest decimal number into an exact rational and checks divisibility, independently of native multipleOf predicate arithmetic. Generated guards are correlated postconditions, not the only oracle.
 * @evidence contracts/testing.md#distinguishing-cases Negative/fractional steps, exclusive intervals, one-sided integer/number windows, integer1.5 steps, large magnitudes and tiny steps retain all samples and impossible-domain throws. Supported callbacks run the real built-in algorithms under a local deterministic source, including the union picker.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_numeric_multiple_of in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation owns its sample state and supported IRG callbacks calling the real built-in algorithms with a local source. withRandom restores that local sample in finally; factories reuse only their own callback closure. No foreign method or global is replaced.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_numeric_multiple_of = (): void => {
  const { generator, withRandom } = makeRandom();
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

  const create = typia.createRandom<IValues>(generator);
  const samples: number[] = [0, 0.25, 0.5, 0.75, 1 - Number.EPSILON];
  for (let i = 0; i < 100; ++i) {
    const sample: number = samples[i % samples.length]!;
    const direct: IValues = withRandom(sample, () =>
      typia.random<IValues>(generator),
    );
    const reusable: IValues = withRandom(sample, () => create());
    for (const [name, value] of Object.entries({ direct, reusable })) {
      TestEquality.equals(
        `${name} validates at ${i}`,
        typia.is<IValues>(value),
        true,
      );
      TestEquality.equals(
        `${name} honors every bound at ${i}`,
        typia.is<IBounds>(value),
        true,
      );
      TestEquality.equals(
        `${name} decimal oracle at ${i}`,
        decimalMultiple(value.decimal, 0.01),
        true,
      );
      TestEquality.equals(
        `${name} exclusive oracle at ${i}`,
        decimalMultiple(value.exclusive, 0.01),
        true,
      );
      TestEquality.equals(
        `${name} upper-only oracle at ${i}`,
        decimalMultiple(value.upperOnly, 2),
        true,
      );
      TestEquality.equals(
        `${name} lower-only oracle at ${i}`,
        decimalMultiple(value.lowerOnly, 0.1),
        true,
      );
      TestEquality.equals(
        `${name} integer upper-only oracle at ${i}`,
        decimalMultiple(value.integerUpperOnly, 2),
        true,
      );
      TestEquality.equals(
        `${name} integer decimal oracle at ${i}`,
        decimalMultiple(value.integerDecimal, 1.5),
        true,
      );
      TestEquality.equals(
        `${name} large oracle at ${i}`,
        decimalMultiple(value.large, 0.99991),
        true,
      );
      TestEquality.equals(
        `${name} fractional large-quotient oracle at ${i}`,
        decimalMultiple(value.fractionalLargeQuotient, 9.9991e-17),
        true,
      );
    }
  }

  assertThrows("typia.random impossible range", () =>
    withRandom(0, () => typia.random<Impossible>(generator)),
  );
  const impossible = typia.createRandom<Impossible>(generator);
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
  TestEquality.equals(name, thrown, true);
};

const makeRandom = () => {
  let sample: number = 0;
  const source = (): number => sample;
  const generator: Partial<IRandomGenerator> = {
    array: (schema) => _randomArray(schema, source),
    string: (schema) => _randomString(schema, source),
    number: (schema) => _randomNumber(schema, source),
    integer: (schema) => _randomInteger(schema, source),
    pick: <T>(array: T[]): T => _randomPick(array, source),
  };
  const withRandom = <T>(value: number, closure: () => T): T => {
    const previous: number = sample;
    sample = value;
    try {
      return closure();
    } finally {
      sample = previous;
    }
  };
  return { generator, withRandom };
};
