import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_misc_isPrune_CommentTagObjectUnion = _test_misc_isPrune(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
  ((input: any): input is CommentTagObjectUnion => {
    const is = (input: any): input is CommentTagObjectUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7;
      const $iu0 = (input: any): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    const prune = (input: CommentTagObjectUnion): void => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.value && 3 <= input.value;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7;
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $throws = require("typia/lib/functional/$throws").$throws;
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $pu0(elem);
        });
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $pu0 = (input: any): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $po1(input);
          else if ("number" === typeof input.value && 3 <= input.value)
            return $po0(input);
          else
            $throws({
              expected:
                "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
              value: input,
            });
        })();
      if (Array.isArray(input)) $pp0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
