import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_is_TypeTagMatrix = _test_is("TypeTagMatrix")<TypeTagMatrix>(
  TypeTagMatrix,
)((input) =>
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
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                elem,
              ),
          ),
      );
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
