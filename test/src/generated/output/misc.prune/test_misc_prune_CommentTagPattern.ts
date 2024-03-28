import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_misc_prune_CommentTagPattern = _test_misc_prune(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  ((input: CommentTagPattern): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "uuid" === key ||
          "email" === key ||
          "ipv4" === key ||
          "ipv6" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
