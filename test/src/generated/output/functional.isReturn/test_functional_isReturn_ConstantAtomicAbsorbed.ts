import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_functional_isReturn_ConstantAtomicAbsorbed =
  _test_functional_isReturn("ConstantAtomicAbsorbed")(ConstantAtomicAbsorbed)(
    (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      (input: ConstantAtomicAbsorbed): ConstantAtomicAbsorbed | null => {
        const result = p(input);
        return ((input: any): input is ConstantAtomicAbsorbed => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).id &&
            "number" === typeof (input as any).age &&
            Number.isFinite((input as any).age)
          );
        })(result)
          ? result
          : null;
      },
  );
