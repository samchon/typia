import typia from "typia";
import { _test_equals } from "../../../internal/_test_equals";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
export const test_equals_CommentTagArrayUnion = _test_equals(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is CommentTagArrayUnion => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every(
        (elem: any, _index2: number) => "string" === typeof elem,
      ) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every(
        (elem: any, _index3: number) =>
          "number" === typeof elem && Number.isFinite(elem),
      ) &&
      Array.isArray(input.maxItems) &&
      input.maxItems.length <= 7 &&
      input.maxItems.every(
        (elem: any, _index4: number) =>
          "string" === typeof elem ||
          ("number" === typeof elem && Number.isFinite(elem)),
      ) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every(
        (elem: any, _index5: number) => "string" === typeof elem,
      ) &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["items", "minItems", "maxItems", "both"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem && null !== elem && $io0(elem, true),
      )
    );
  })(input),
);
