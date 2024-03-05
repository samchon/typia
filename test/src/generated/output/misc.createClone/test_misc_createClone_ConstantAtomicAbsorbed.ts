import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_misc_createClone_ConstantAtomicAbsorbed = _test_misc_clone(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)(
  (
    input: ConstantAtomicAbsorbed,
  ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
    const $co0 = (input: any): any => ({
      id: input.id as any,
      age: input.age as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
