import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_createIsParse_ConstantAtomicAbsorbed =
  _test_json_isParse("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input: any): typia.Primitive<ConstantAtomicAbsorbed> => {
    const is = (input: any): input is ConstantAtomicAbsorbed => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  });
