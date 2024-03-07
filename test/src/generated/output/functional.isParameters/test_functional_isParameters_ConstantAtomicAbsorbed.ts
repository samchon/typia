import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
export const test_functional_isParameters_ConstantAtomicAbsorbed =
  _test_functional_isParameters("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )(
    (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      (input: ConstantAtomicAbsorbed): ConstantAtomicAbsorbed | null => {
        if (
          false ===
          ((input: any): input is ConstantAtomicAbsorbed => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).id &&
              "number" === typeof (input as any).age &&
              Number.isFinite((input as any).age)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
