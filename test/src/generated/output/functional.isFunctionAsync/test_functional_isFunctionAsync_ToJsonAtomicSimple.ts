import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_functional_isFunctionAsync_ToJsonAtomicSimple =
  _test_functional_isFunctionAsync("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      async (input: ToJsonAtomicSimple): Promise<ToJsonAtomicSimple | null> => {
        if (
          false ===
          ((input: any): input is ToJsonAtomicSimple => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            const $io1 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            const $io2 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "object" === typeof input[0] &&
              null !== input[0] &&
              $io0(input[0]) &&
              "object" === typeof input[1] &&
              null !== input[1] &&
              $io1(input[1]) &&
              "object" === typeof input[2] &&
              null !== input[2] &&
              $io2(input[2])
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ToJsonAtomicSimple => {
          const $io0 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          const $io1 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          const $io2 = (input: any): boolean =>
            "function" === typeof input.toJSON;
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1]) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2])
          );
        })(result)
          ? result
          : null;
      },
  );
