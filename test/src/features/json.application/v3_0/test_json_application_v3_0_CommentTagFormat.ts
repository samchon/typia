import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_application_v3_0_CommentTagFormat =
  _test_json_application({
    version: "3.0",
    name: "CommentTagFormat",
  })(typia.json.application<CommentTagFormatApplication, "3.0">());

interface CommentTagFormatApplication {
  insert(first: CommentTagFormat): Promise<void>;
  reduce(
    first: CommentTagFormat,
    second: CommentTagFormat | null,
  ): Promise<CommentTagFormat>;
  coalesce(
    first: CommentTagFormat | null,
    second: CommentTagFormat | null,
    third?: CommentTagFormat | null,
  ): Promise<CommentTagFormat | null>;
}
