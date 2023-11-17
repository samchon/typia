import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_misc_prune_ConstantAtomicUnion = _test_misc_prune(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  ((input: ConstantAtomicUnion): void => {
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po0(elem);
      });
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("key" === key) continue;
        delete input[key];
      }
    };
    if (Array.isArray(input)) $pp0(input);
  })(input),
);
