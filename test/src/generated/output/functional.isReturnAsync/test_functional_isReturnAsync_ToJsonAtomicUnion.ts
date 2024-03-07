import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_functional_isReturnAsync_ToJsonAtomicUnion =
  _test_functional_isReturnAsync("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      async (input: ToJsonAtomicUnion): Promise<ToJsonAtomicUnion | null> => {
        const result = await p(input);
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
