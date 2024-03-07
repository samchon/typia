import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
export const test_functional_isReturn_ConstantAtomicSimple =
  _test_functional_isReturn("ConstantAtomicSimple")(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      (input: ConstantAtomicSimple): ConstantAtomicSimple | null => {
        const result = p(input);
        return ((input: any): input is ConstantAtomicSimple => {
          return (
            Array.isArray(input) &&
            input.length === 4 &&
            false === input[0] &&
            true === input[1] &&
            2 === input[2] &&
            "three" === input[3]
          );
        })(result)
          ? result
          : null;
      },
  );
