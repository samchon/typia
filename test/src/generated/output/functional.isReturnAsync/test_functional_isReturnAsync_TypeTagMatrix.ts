import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
export const test_functional_isReturnAsync_TypeTagMatrix =
  _test_functional_isReturnAsync("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      async (input: TypeTagMatrix): Promise<TypeTagMatrix | null> => {
        const result = await p(input);
        return ((input: any): input is TypeTagMatrix => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.matrix) &&
            3 <= input.matrix.length &&
            input.matrix.length <= 3 &&
            input.matrix.every(
              (elem: any) =>
                Array.isArray(elem) &&
                4 <= elem.length &&
                elem.length <= 4 &&
                elem.every(
                  (elem: any) =>
                    "string" === typeof elem &&
                    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      elem,
                    ),
                ),
            );
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
