import typia from "typia";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TypeTagRangeBigInt = IPointer<TypeTagRangeBigInt.Type[]>;
export namespace TypeTagRangeBigInt {
  export const JSONABLE = false;

  export interface Type {
    greater: bigint & typia.tags.ExclusiveMinimum<3n>;
    greater_equal: bigint & typia.tags.Minimum<3n>;
    less: bigint & typia.tags.ExclusiveMaximum<7n>;
    less_equal: bigint & typia.tags.Maximum<7n>;
    greater_less: bigint &
      typia.tags.ExclusiveMinimum<3n> &
      typia.tags.ExclusiveMaximum<7n>;
    greater_equal_less: bigint &
      typia.tags.Minimum<3n> &
      typia.tags.ExclusiveMaximum<7n>;
    greater_less_equal: bigint &
      typia.tags.ExclusiveMinimum<3n> &
      typia.tags.Maximum<7n>;
    greater_equal_less_equal: bigint &
      typia.tags.Minimum<3n> &
      typia.tags.Maximum<7n>;
    equal: bigint & typia.tags.Minimum<10n> & typia.tags.Maximum<10n>;
  }

  // prettier-ignore
  export function generate(): TypeTagRangeBigInt {
        const value: Type[] = [];

        for (const greater of [MINIMUM + BigInt(1), BigInt(10)])
        for (const greater_equal of [MINIMUM, BigInt(10)])
        for (const less of [BigInt(0), MAXIMUM - BigInt(1)])
        for (const less_equal of [BigInt(0), MAXIMUM])
        for (const greater_less of [MINIMUM + BigInt(1), MAXIMUM - BigInt(1)])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - BigInt(1)])
        for (const greater_less_equal of [MINIMUM + BigInt(1), MAXIMUM])
        for (const greater_equal_less_equal of [MINIMUM, MAXIMUM])
            value.push({
                greater,
                greater_equal,
                less,
                less_equal,
                greater_less,
                greater_less_equal,
                greater_equal_less,
                greater_equal_less_equal,
                equal: BigInt(10),
            });
        return { value };
    }

  const MINIMUM = BigInt(3);
  const MAXIMUM = BigInt(7);

  export const SPOILERS: Spoiler<TypeTagRangeBigInt>[] = [
    (input) => {
      input.value[4]!.greater = BigInt(3);
      return ["$input.value[4].greater"];
    },
    (input) => {
      input.value[5]!.greater_equal = BigInt(2);
      return ["$input.value[5].greater_equal"];
    },
    (input) => {
      input.value[6]!.less = BigInt(7);
      return ["$input.value[6].less"];
    },
    (input) => {
      input.value[7]!.less_equal = BigInt(8);
      return ["$input.value[7].less_equal"];
    },
    (input) => {
      input.value[8]!.greater_less = BigInt(3);
      return ["$input.value[8].greater_less"];
    },
    (input) => {
      input.value[9]!.greater_less = BigInt(7);
      return ["$input.value[9].greater_less"];
    },
    (input) => {
      input.value[10]!.greater_equal_less = BigInt(2);
      return ["$input.value[10].greater_equal_less"];
    },
    (input) => {
      input.value[11]!.greater_equal_less = BigInt(7);
      return ["$input.value[11].greater_equal_less"];
    },
    (input) => {
      input.value[12]!.greater_less_equal = BigInt(3);
      return ["$input.value[12].greater_less_equal"];
    },
    (input) => {
      input.value[13]!.greater_less_equal = BigInt(8);
      return ["$input.value[13].greater_less_equal"];
    },
    (input) => {
      input.value[14]!.greater_equal_less_equal = BigInt(2);
      return ["$input.value[14].greater_equal_less_equal"];
    },
    (input) => {
      input.value[15]!.greater_equal_less_equal = BigInt(8);
      return ["$input.value[15].greater_equal_less_equal"];
    },
    (input) => {
      input.value[16]!.equal = BigInt(9);
      return ["$input.value[16].equal"];
    },
  ];
}
