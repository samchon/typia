import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_functional_isReturn_TypeTagMatrix = _test_functional_isReturn(
  "TypeTagMatrix",
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
    (input: TypeTagMatrix): TypeTagMatrix | null => {
      const result = p(input);
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
