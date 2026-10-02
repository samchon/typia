import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmTypeChecker } from "@typia/utils";

/**
 * Verifies a number schema covers an integer schema, and not the reverse.
 *
 * Every integer is a number, so a number schema accepts everything an integer
 * schema accepts when its bounds allow it. The LLM checker used to compare a
 * number only with another number, which made `number` not cover `integer`
 * although the OpenAPI checker already treats them so.
 *
 * 1. Compare plain, bounded and multiple-of number schemas with integers.
 * 2. Require coverage where the number schema is the wider one.
 * 3. Require refusal for a narrower number, the reverse direction and enums.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmTypeChecker.covers runs on authored number and integer schemas and the returned booleans are compared, so a dispatch that rejects an integer beside a number, or that ignores bounds, multiples and enums, changes a result.
 * @evidence contracts/testing.md#independent-expectations Integers are a subset of numbers and a bound or divisor narrows the accepted set, so each expected boolean follows from set inclusion and not from the checker's own computation.
 * @evidence contracts/testing.md#distinguishing-cases The plain case is positive; a narrower upper bound on the number, a divisor that the integer set does not satisfy, the reverse direction and a number enum that omits an integer enum value are the adjacent negative cases.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json; the checker runs in process on authored schemas with no native build, installation or host.
 */
export const test_llm_type_checker_cover_number_integer = (): void => {
  const number = (props: Partial<ILlmSchema.INumber> = {}): ILlmSchema =>
    ({ type: "number", ...props }) as ILlmSchema.INumber;
  const integer = (props: Partial<ILlmSchema.IInteger> = {}): ILlmSchema =>
    ({ type: "integer", ...props }) as ILlmSchema.IInteger;
  const covers = (x: ILlmSchema, y: ILlmSchema): boolean =>
    LlmTypeChecker.covers({ $defs: {}, x, y });

  TestEquality.equals(
    "number covers integer",
    covers(number(), integer()),
    true,
  );
  TestEquality.equals(
    "bounded number covers a contained integer range",
    covers(
      number({ minimum: 0, maximum: 10 }),
      integer({ minimum: 2, maximum: 5 }),
    ),
    true,
  );
  TestEquality.equals(
    "number multiple of 0.5 covers integers that are multiples of 2",
    covers(number({ multipleOf: 0.5 }), integer({ multipleOf: 2 })),
    true,
  );

  TestEquality.equals(
    "number below the integer upper bound does not cover it",
    covers(number({ maximum: 5 }), integer({ maximum: 10 })),
    false,
  );
  TestEquality.equals(
    "number multiple of 3 does not cover plain integers",
    covers(number({ multipleOf: 3 }), integer()),
    false,
  );
  TestEquality.equals(
    "integer does not cover number",
    covers(integer(), number()),
    false,
  );
  TestEquality.equals(
    "number enum without an integer enum value does not cover it",
    covers(number({ enum: [1, 2] }), integer({ enum: [1, 3] })),
    false,
  );
};
