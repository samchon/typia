import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_functional_isFunctionAsync_ConstantAtomicAbsorbed =
  _test_functional_isFunctionAsync("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )(
    (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
      async (
        input: ConstantAtomicAbsorbed,
      ): Promise<ConstantAtomicAbsorbed | null> => {
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
        const result = await p(input);
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
