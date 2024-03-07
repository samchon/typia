import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_misc_prune_ConstantAtomicAbsorbed = _test_misc_prune(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  ((input: ConstantAtomicAbsorbed): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("id" === key || "age" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
