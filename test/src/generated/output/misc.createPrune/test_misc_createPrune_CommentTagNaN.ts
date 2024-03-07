import typia from "typia";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";
export const test_misc_createPrune_CommentTagNaN = _test_misc_prune(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input: CommentTagNaN): void => {
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
});
