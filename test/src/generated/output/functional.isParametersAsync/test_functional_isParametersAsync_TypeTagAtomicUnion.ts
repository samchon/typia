import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
export const test_functional_isParametersAsync_TypeTagAtomicUnion =
  _test_functional_isParametersAsync("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      async (input: TypeTagAtomicUnion): Promise<TypeTagAtomicUnion | null> => {
        if (
          false ===
          ((input: any): input is TypeTagAtomicUnion => {
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
