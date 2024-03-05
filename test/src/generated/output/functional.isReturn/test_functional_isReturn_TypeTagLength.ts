import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_functional_isReturn_TypeTagLength = _test_functional_isReturn(
  "TypeTagLength",
)(TypeTagLength)(
  (p: (input: TypeTagLength) => TypeTagLength) =>
    (input: TypeTagLength): TypeTagLength | null => {
      const result = p(input);
      return ((input: any): input is TypeTagLength => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "string" === typeof input.fixed &&
          5 <= input.fixed.length &&
          input.fixed.length <= 5 &&
          "string" === typeof input.minimum &&
          3 <= input.minimum.length &&
          "string" === typeof input.maximum &&
          input.maximum.length <= 7 &&
          "string" === typeof input.minimum_and_maximum &&
          3 <= input.minimum_and_maximum.length &&
          input.minimum_and_maximum.length <= 7 &&
          "string" === typeof input.equal &&
          10 <= input.equal.length &&
          input.equal.length <= 19;
        return "object" === typeof input && null !== input && $io0(input);
      })(result)
        ? result
        : null;
    },
);
