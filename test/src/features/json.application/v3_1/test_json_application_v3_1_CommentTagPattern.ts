import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_v3_1_CommentTagPattern =
  _test_json_application({
    version: "3.1",
    name: "CommentTagPattern",
  })(typia.json.application<CommentTagPatternApplication, "3.1">());

interface CommentTagPatternApplication {
  insert(first: CommentTagPattern): Promise<void>;
  reduce(
    first: CommentTagPattern,
    second: CommentTagPattern | null,
  ): Promise<CommentTagPattern>;
  coalesce(
    first: CommentTagPattern | null,
    second: CommentTagPattern | null,
    third?: CommentTagPattern | null,
  ): Promise<CommentTagPattern | null>;
}
