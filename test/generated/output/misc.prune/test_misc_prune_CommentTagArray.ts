import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_misc_prune_CommentTagArray = _test_misc_prune(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  ((input: CommentTagArray): void => {
    const $io1 = (input: any): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every((elem: any) => "string" === typeof elem) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every((elem: any) => "number" === typeof elem) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every((elem: any) => "string" === typeof elem) &&
      Array.isArray(input.equal) &&
      10 <= input.equal.length &&
      input.equal.length <= 10 &&
      input.equal.every((elem: any) => "number" === typeof elem);
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po1(elem);
      });
    const $po0 = (input: any): any => {
      if (Array.isArray(input.value)) $pp0(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "items" === key ||
          "minItems" === key ||
          "both" === key ||
          "equal" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
