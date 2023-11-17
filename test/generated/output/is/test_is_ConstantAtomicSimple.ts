import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_is_ConstantAtomicSimple = _test_is(
  "ConstantAtomicSimple",
)<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
  ((input: any): input is ConstantAtomicSimple => {
    return (
      Array.isArray(input) &&
      input.length === 4 &&
      false === input[0] &&
      true === input[1] &&
      2 === input[2] &&
      "three" === input[3]
    );
  })(input),
);
