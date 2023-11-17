import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_misc_createClone_CommentTagDefault = _test_misc_clone(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)(
  (input: CommentTagDefault): typia.Resolved<CommentTagDefault> => {
    const $co0 = (input: any): any => ({
      boolean: input.boolean as any,
      number: input.number as any,
      string: input.string as any,
      text: input.text as any,
      boolean_and_number_and_string: input.boolean_and_number_and_string as any,
      union_but_boolean: input.union_but_boolean as any,
      union_but_number: input.union_but_number as any,
      union_but_string: input.union_but_string as any,
      vulnerable_range: input.vulnerable_range as any,
      boolean_and_number_and_template:
        input.boolean_and_number_and_template as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
