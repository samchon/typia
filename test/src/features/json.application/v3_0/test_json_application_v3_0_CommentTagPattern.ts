import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_json_application_v3_0_CommentTagPattern =
  _test_json_application({
    version: "3.0",
    name: "CommentTagPattern",
  })(typia.json.application<CommentTagPatternApplication, "3.0">());

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
