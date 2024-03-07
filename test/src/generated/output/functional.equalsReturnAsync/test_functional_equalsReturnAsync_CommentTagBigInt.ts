import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";
export const test_functional_equalsReturnAsync_CommentTagBigInt =
  _test_functional_equalsReturnAsync("CommentTagBigInt")(CommentTagBigInt)(
    (p: (input: CommentTagBigInt) => Promise<CommentTagBigInt>) =>
      async (input: CommentTagBigInt): Promise<CommentTagBigInt | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is CommentTagBigInt => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "bigint" === typeof input.value &&
            "bigint" === typeof input.ranged &&
            0 <= input.ranged &&
            input.ranged <= 100 &&
            "bigint" === typeof input.minimum &&
            0 <= input.minimum &&
            "bigint" === typeof input.maximum &&
            input.maximum <= 100 &&
            "bigint" === typeof input.multipleOf &&
            input.multipleOf % 3n === 0n &&
            (5 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["value", "ranged", "minimum", "maximum", "multipleOf"].some(
                    (prop: any) => key === prop,
                  )
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
