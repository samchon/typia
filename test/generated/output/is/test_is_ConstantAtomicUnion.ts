import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_is_ConstantAtomicUnion = _test_is(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)((input) =>
  ((input: any): input is ConstantAtomicUnion => {
    const $io0 = (input: any): boolean => "key" === input.key;
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) =>
          null !== elem &&
          undefined !== elem &&
          (false === elem ||
            2 === elem ||
            1 === elem ||
            "three" === elem ||
            "four" === elem ||
            ("object" === typeof elem && null !== elem && $io0(elem))),
      )
    );
  })(input),
);
