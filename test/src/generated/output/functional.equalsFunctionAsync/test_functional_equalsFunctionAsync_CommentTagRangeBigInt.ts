import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";
export const test_functional_equalsFunctionAsync_CommentTagRangeBigInt =
  _test_functional_equalsFunctionAsync("CommentTagRangeBigInt")(
    CommentTagRangeBigInt,
  )(
    (p: (input: CommentTagRangeBigInt) => Promise<CommentTagRangeBigInt>) =>
      async (
        input: CommentTagRangeBigInt,
      ): Promise<CommentTagRangeBigInt | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagRangeBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.greater &&
              3 < input.greater &&
              "bigint" === typeof input.greater_equal &&
              3 <= input.greater_equal &&
              "bigint" === typeof input.less &&
              input.less < 7 &&
              "bigint" === typeof input.less_equal &&
              input.less_equal <= 7 &&
              "bigint" === typeof input.greater_less &&
              3 < input.greater_less &&
              input.greater_less < 7 &&
              "bigint" === typeof input.greater_equal_less &&
              3 <= input.greater_equal_less &&
              input.greater_equal_less < 7 &&
              "bigint" === typeof input.greater_less_equal &&
              3 < input.greater_less_equal &&
              input.greater_less_equal <= 7 &&
              "bigint" === typeof input.greater_equal_less_equal &&
              3 <= input.greater_equal_less_equal &&
              input.greater_equal_less_equal <= 7 &&
              "bigint" === typeof input.equal &&
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
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is CommentTagRangeBigInt => {
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
            "bigint" === typeof input.greater &&
            3 < input.greater &&
            "bigint" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "bigint" === typeof input.less &&
            input.less < 7 &&
            "bigint" === typeof input.less_equal &&
            input.less_equal <= 7 &&
            "bigint" === typeof input.greater_less &&
            3 < input.greater_less &&
            input.greater_less < 7 &&
            "bigint" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            input.greater_equal_less < 7 &&
            "bigint" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            input.greater_less_equal <= 7 &&
            "bigint" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 7 &&
            "bigint" === typeof input.equal &&
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
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
