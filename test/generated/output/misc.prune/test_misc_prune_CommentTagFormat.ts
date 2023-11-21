import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_prune_CommentTagFormat = _test_misc_prune(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  ((input: CommentTagFormat): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "uuid" === key ||
          "email" === key ||
          "url" === key ||
          "ipv4" === key ||
          "ipv6" === key ||
          "date" === key ||
          "date_time" === key ||
          "custom" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
