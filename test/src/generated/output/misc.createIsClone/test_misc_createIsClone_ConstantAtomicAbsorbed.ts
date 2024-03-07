import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_misc_createIsClone_ConstantAtomicAbsorbed =
  _test_misc_isClone("ConstantAtomicAbsorbed")<ConstantAtomicAbsorbed>(
    ConstantAtomicAbsorbed,
  )((input: any): import("typia").Resolved<ConstantAtomicAbsorbed> | null => {
    const is = (input: any): input is ConstantAtomicAbsorbed => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    const clone = (
      input: ConstantAtomicAbsorbed,
    ): import("typia").Resolved<ConstantAtomicAbsorbed> => {
      const $co0 = (input: any): any => ({
        id: input.id as any,
        age: input.age as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  });
