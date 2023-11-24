import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_createIsClone_ConstantAtomicSimple = _test_misc_isClone(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)(
  (input: any): typia.Resolved<ConstantAtomicSimple> | null => {
    const is = (input: any): input is ConstantAtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 4 &&
        false === input[0] &&
        true === input[1] &&
        2 === input[2] &&
        "three" === input[3]
      );
    };
    const clone = (
      input: ConstantAtomicSimple,
    ): typia.Resolved<ConstantAtomicSimple> => {
      return Array.isArray(input) &&
        input.length === 4 &&
        false === input[0] &&
        true === input[1] &&
        2 === input[2] &&
        "three" === input[3]
        ? ([
            input[0] as any,
            input[1] as any,
            input[2] as any,
            input[3] as any,
          ] as any)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
