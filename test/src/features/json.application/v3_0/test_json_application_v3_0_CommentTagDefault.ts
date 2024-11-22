import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_application_v3_0_CommentTagDefault =
  _test_json_application({
    version: "3.0",
    name: "CommentTagDefault",
  })(typia.json.application<CommentTagDefaultApplication, "3.0">());

interface CommentTagDefaultApplication {
  insert(first: CommentTagDefault): Promise<void>;
  reduce(
    first: CommentTagDefault,
    second: CommentTagDefault | null,
  ): Promise<CommentTagDefault>;
  coalesce(
    first: CommentTagDefault | null,
    second: CommentTagDefault | null,
    third?: CommentTagDefault | null,
  ): Promise<CommentTagDefault | null>;
}
