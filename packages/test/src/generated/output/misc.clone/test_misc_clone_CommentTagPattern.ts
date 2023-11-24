import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_misc_clone_CommentTagPattern = _test_misc_clone(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  ((input: CommentTagPattern): typia.Resolved<CommentTagPattern> => {
    const $co0 = (input: any): any => ({
      uuid: input.uuid as any,
      email: input.email as any,
      ipv4: input.ipv4 as any,
      ipv6: input.ipv6 as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
