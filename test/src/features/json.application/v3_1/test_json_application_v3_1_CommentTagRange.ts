import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_json_application_v3_1_CommentTagRange =
  _test_json_application({
    version: "3.1",
    name: "CommentTagRange",
  })(typia.json.application<CommentTagRangeApplication, "3.1">());

interface CommentTagRangeApplication {
  insert(first: CommentTagRange): Promise<void>;
  reduce(
    first: CommentTagRange,
    second: CommentTagRange | null,
  ): Promise<CommentTagRange>;
  coalesce(
    first: CommentTagRange | null,
    second: CommentTagRange | null,
    third?: CommentTagRange | null,
  ): Promise<CommentTagRange | null>;
}
