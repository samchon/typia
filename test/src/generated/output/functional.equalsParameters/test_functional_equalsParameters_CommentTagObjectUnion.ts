import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_functional_equalsParameters_CommentTagObjectUnion =
  _test_functional_equalsParameters("CommentTagObjectUnion")(
    CommentTagObjectUnion,
  )(
    (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) =>
      (input: CommentTagObjectUnion): CommentTagObjectUnion | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagObjectUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.value &&
              Number.isFinite(input.value) &&
              3 <= input.value &&
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
              "string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7 &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
              (() => {
                if (
                  "string" === typeof input.value &&
                  3 <= input.value.length &&
                  input.value.length <= 7
                )
                  return $io1(input, true && _exceptionable);
                else if (
                  "number" === typeof input.value &&
                  Number.isFinite(input.value) &&
                  3 <= input.value
                )
                  return $io0(input, true && _exceptionable);
                else return false;
              })();
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $iu0(elem, true),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
