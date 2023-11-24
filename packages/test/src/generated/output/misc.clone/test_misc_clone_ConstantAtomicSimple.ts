import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_clone_ConstantAtomicSimple = _test_misc_clone(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  ((input: ConstantAtomicSimple): typia.Resolved<ConstantAtomicSimple> => {
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
  })(input),
);
