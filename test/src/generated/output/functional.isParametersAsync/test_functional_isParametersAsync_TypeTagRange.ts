import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_functional_isParametersAsync_TypeTagRange =
  _test_functional_isParametersAsync("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      async (input: TypeTagRange): Promise<TypeTagRange | null> => {
        if (
          false ===
          ((input: any): input is TypeTagRange => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "number" === typeof input.greater &&
              Math.floor(input.greater) === input.greater &&
              -2147483648 <= input.greater &&
              input.greater <= 2147483647 &&
              3 < input.greater &&
              "number" === typeof input.greater_equal &&
              Math.floor(input.greater_equal) === input.greater_equal &&
              -2147483648 <= input.greater_equal &&
              input.greater_equal <= 2147483647 &&
              3 <= input.greater_equal &&
              "number" === typeof input.less &&
              Math.floor(input.less) === input.less &&
              -2147483648 <= input.less &&
              input.less <= 2147483647 &&
              input.less < 7 &&
              "number" === typeof input.less_equal &&
              Math.floor(input.less_equal) === input.less_equal &&
              -2147483648 <= input.less_equal &&
              input.less_equal <= 2147483647 &&
              input.less_equal <= 7 &&
              "number" === typeof input.greater_less &&
              Math.floor(input.greater_less) === input.greater_less &&
              -2147483648 <= input.greater_less &&
              input.greater_less <= 2147483647 &&
              3 < input.greater_less &&
              input.greater_less < 7 &&
              "number" === typeof input.greater_equal_less &&
              Math.floor(input.greater_equal_less) ===
                input.greater_equal_less &&
              -2147483648 <= input.greater_equal_less &&
              input.greater_equal_less <= 2147483647 &&
              3 <= input.greater_equal_less &&
              input.greater_equal_less < 7 &&
              "number" === typeof input.greater_less_equal &&
              Math.floor(input.greater_less_equal) ===
                input.greater_less_equal &&
              -2147483648 <= input.greater_less_equal &&
              input.greater_less_equal <= 2147483647 &&
              3 < input.greater_less_equal &&
              input.greater_less_equal <= 7 &&
              "number" === typeof input.greater_equal_less_equal &&
              Math.floor(input.greater_equal_less_equal) ===
                input.greater_equal_less_equal &&
              -2147483648 <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= 2147483647 &&
              3 <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= 7 &&
              "number" === typeof input.equal &&
              Math.floor(input.equal) === input.equal &&
              -2147483648 <= input.equal &&
              input.equal <= 2147483647 &&
              10 <= input.equal &&
              input.equal <= 10;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
