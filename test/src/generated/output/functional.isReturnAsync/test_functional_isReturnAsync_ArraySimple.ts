import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_functional_isReturnAsync_ArraySimple =
  _test_functional_isReturnAsync("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => Promise<ArraySimple>) =>
      async (input: ArraySimple): Promise<ArraySimple | null> => {
        const result = await p(input);
        return ((input: any): input is ArraySimple => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.email &&
            Array.isArray(input.hobbies) &&
            input.hobbies.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank &&
            Number.isFinite(input.rank);
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
