import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
export const test_functional_isParametersAsync_TypeTagMatrix =
  _test_functional_isParametersAsync("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      async (input: TypeTagMatrix): Promise<TypeTagMatrix | null> => {
        if (
          false ===
          ((input: any): input is TypeTagMatrix => {
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
