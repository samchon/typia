import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_functional_isReturnAsync_TypeTagAtomicUnion =
  _test_functional_isReturnAsync("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      async (input: TypeTagAtomicUnion): Promise<TypeTagAtomicUnion | null> => {
        const result = await p(input);
        return ((input: any): input is TypeTagAtomicUnion => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            ("string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7) ||
            ("number" === typeof input.value &&
              Number.isFinite(input.value) &&
              3 <= input.value);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
