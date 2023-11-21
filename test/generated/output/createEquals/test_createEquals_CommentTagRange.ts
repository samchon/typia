import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_createEquals_CommentTagRange = _test_equals(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)(
  (input: any, _exceptionable: boolean = true): input is CommentTagRange => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io1(elem, true && _exceptionable),
      ) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
      Math.floor(input.greater_equal_less) === input.greater_equal_less &&
      -2147483648 <= input.greater_equal_less &&
      input.greater_equal_less <= 2147483647 &&
      3 <= input.greater_equal_less &&
      input.greater_equal_less < 7 &&
      "number" === typeof input.greater_less_equal &&
      Math.floor(input.greater_less_equal) === input.greater_less_equal &&
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
      input.equal <= 10 &&
      (9 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "greater",
              "greater_equal",
              "less",
              "less_equal",
              "greater_less",
              "greater_equal_less",
              "greater_less_equal",
              "greater_equal_less_equal",
              "equal",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
