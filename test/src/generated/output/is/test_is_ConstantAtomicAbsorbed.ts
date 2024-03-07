import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_is_ConstantAtomicAbsorbed = _test_is(
  "ConstantAtomicAbsorbed",
)<ConstantAtomicAbsorbed>(ConstantAtomicAbsorbed)((input) =>
  ((input: any): input is ConstantAtomicAbsorbed => {
    return (
      "object" === typeof input &&
      null !== input &&
      "string" === typeof (input as any).id &&
      "number" === typeof (input as any).age &&
      Number.isFinite((input as any).age)
    );
  })(input),
);
