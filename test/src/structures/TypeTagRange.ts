import typia from "typia";

import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";

export type TypeTagRange = IPointer<TypeTagRange.Type[]>;
export namespace TypeTagRange {
  export interface Type {
    greater: number & typia.tags.Type<"int32"> & typia.tags.ExclusiveMinimum<3>;
    greater_equal: number & typia.tags.Type<"int32"> & typia.tags.Minimum<3>;
    less: number & typia.tags.Type<"int32"> & typia.tags.ExclusiveMaximum<7>;
    less_equal: number & typia.tags.Type<"int32"> & typia.tags.Maximum<7>;
    greater_less: number &
      typia.tags.Type<"int32"> &
      typia.tags.ExclusiveMinimum<3> &
      typia.tags.ExclusiveMaximum<7>;
    greater_equal_less: number &
      typia.tags.Type<"int32"> &
      typia.tags.Minimum<3> &
      typia.tags.ExclusiveMaximum<7>;
    greater_less_equal: number &
      typia.tags.Type<"int32"> &
      typia.tags.ExclusiveMinimum<3> &
      typia.tags.Maximum<7>;
    greater_equal_less_equal: number &
      typia.tags.Type<"int32"> &
      typia.tags.Minimum<3> &
      typia.tags.Maximum<7>;
    equal: number &
      typia.tags.Type<"int32"> &
      typia.tags.Minimum<10> &
      typia.tags.Maximum<10>;
  }

  // prettier-ignore
  export function generate(): TypeTagRange {
        const value: Type[] = [];

        for (const greater of [MINIMUM + 1, 10])
        for (const greater_equal of [MINIMUM, 10])
        for (const less of [0, MAXIMUM - 1])
        for (const less_equal of [0, MAXIMUM])
        for (const greater_less of [MINIMUM + 1, MAXIMUM - 1])
        for (const greater_equal_less of [MINIMUM, MAXIMUM - 1])
        for (const greater_less_equal of [MINIMUM + 1, MAXIMUM])
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
                equal: 10,
            });
        return { value };
    }

  export const MINIMUM = 3;
  export const MAXIMUM = 7;

  export const SPOILERS: Spoiler<TypeTagRange>[] = [
    (input) => {
      input.value[4]!.greater = 3;
      return ["$input.value[4].greater"];
    },
    (input) => {
      input.value[5]!.greater_equal = 2;
      return ["$input.value[5].greater_equal"];
    },
    (input) => {
      input.value[6]!.less = 7;
      return ["$input.value[6].less"];
    },
    (input) => {
      input.value[7]!.less_equal = 8;
      return ["$input.value[7].less_equal"];
    },
    (input) => {
      input.value[8]!.greater_less = 3;
      return ["$input.value[8].greater_less"];
    },
    (input) => {
      input.value[9]!.greater_less = 7;
      return ["$input.value[9].greater_less"];
    },
    (input) => {
      input.value[10]!.greater_equal_less = 2;
      return ["$input.value[10].greater_equal_less"];
    },
    (input) => {
      input.value[11]!.greater_equal_less = 7;
      return ["$input.value[11].greater_equal_less"];
    },
    (input) => {
      input.value[12]!.greater_less_equal = 3;
      return ["$input.value[12].greater_less_equal"];
    },
    (input) => {
      input.value[13]!.greater_less_equal = 8;
      return ["$input.value[13].greater_less_equal"];
    },
    (input) => {
      input.value[14]!.greater_equal_less_equal = 2;
      return ["$input.value[14].greater_equal_less_equal"];
    },
    (input) => {
      input.value[15]!.greater_equal_less_equal = 8;
      return ["$input.value[15].greater_equal_less_equal"];
    },
    (input) => {
      input.value[16]!.equal = 9;
      return ["$input.value[16].equal"];
    },
  ];
}
