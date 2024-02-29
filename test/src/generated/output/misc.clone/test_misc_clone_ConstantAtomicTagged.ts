import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_misc_clone_ConstantAtomicTagged = _test_misc_clone(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  ((input: ConstantAtomicTagged): typia.Resolved<ConstantAtomicTagged> => {
    const $co0 = (input: any): any => ({
      id: input.id as any,
      age: input.age as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
