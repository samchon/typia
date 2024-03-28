import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_functional_isFunctionAsync_ToJsonAtomicUnion =
  _test_functional_isFunctionAsync("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      async (input: ToJsonAtomicUnion): Promise<ToJsonAtomicUnion | null> => {
        if (
          false ===
          ((input: any): input is ToJsonAtomicUnion => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
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
