import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_functional_isReturn_ToJsonAtomicUnion =
  _test_functional_isReturn("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      (input: ToJsonAtomicUnion): ToJsonAtomicUnion | null => {
        const result = p(input);
        return ((input: any): input is ToJsonAtomicUnion => {
          const $io0 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
