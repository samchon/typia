import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";
export const test_misc_isPrune_CommentTagNaN = _test_misc_isPrune(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
  ((input: any): input is CommentTagNaN => {
    const is = (input: any): input is CommentTagNaN => {
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
    };
    const prune = (input: CommentTagNaN): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "value" === key ||
            "ranged" === key ||
            "minimum" === key ||
            "maximum" === key ||
            "multipleOf" === key ||
            "typed" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
