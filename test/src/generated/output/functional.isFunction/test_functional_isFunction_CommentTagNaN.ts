import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";
export const test_functional_isFunction_CommentTagNaN =
  _test_functional_isFunction("CommentTagNaN")(CommentTagNaN)(
    (p: (input: CommentTagNaN) => CommentTagNaN) =>
      (input: CommentTagNaN): CommentTagNaN | null => {
        if (
          false ===
          ((input: any): input is CommentTagNaN => {
            return (
              "object" === typeof input &&
              null !== input &&
              "number" === typeof (input as any).value &&
              Number.isFinite((input as any).value) &&
              "number" === typeof (input as any).ranged &&
              0 <= (input as any).ranged &&
              (input as any).ranged <= 100 &&
              "number" === typeof (input as any).minimum &&
              Number.isFinite((input as any).minimum) &&
              0 <= (input as any).minimum &&
              "number" === typeof (input as any).maximum &&
              Number.isFinite((input as any).maximum) &&
              (input as any).maximum <= 100 &&
              "number" === typeof (input as any).multipleOf &&
              (input as any).multipleOf % 3 === 0 &&
              "number" === typeof (input as any).typed &&
              Math.floor((input as any).typed) === (input as any).typed &&
              -2147483648 <= (input as any).typed &&
              (input as any).typed <= 2147483647
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is CommentTagNaN => {
          return (
            "object" === typeof input &&
            null !== input &&
            "number" === typeof (input as any).value &&
            Number.isFinite((input as any).value) &&
            "number" === typeof (input as any).ranged &&
            0 <= (input as any).ranged &&
            (input as any).ranged <= 100 &&
            "number" === typeof (input as any).minimum &&
            Number.isFinite((input as any).minimum) &&
            0 <= (input as any).minimum &&
            "number" === typeof (input as any).maximum &&
            Number.isFinite((input as any).maximum) &&
            (input as any).maximum <= 100 &&
            "number" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % 3 === 0 &&
            "number" === typeof (input as any).typed &&
            Math.floor((input as any).typed) === (input as any).typed &&
            -2147483648 <= (input as any).typed &&
            (input as any).typed <= 2147483647
          );
        })(result)
          ? result
          : null;
      },
  );
