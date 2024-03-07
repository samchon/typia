import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";
export const test_functional_equalsReturn_CommentTagTypeBigInt =
  _test_functional_equalsReturn("CommentTagTypeBigInt")(CommentTagTypeBigInt)(
    (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) =>
      (input: CommentTagTypeBigInt): CommentTagTypeBigInt | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is CommentTagTypeBigInt => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "bigint" === typeof input.in64 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["in64", "uint64"].some((prop: any) => key === prop))
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
