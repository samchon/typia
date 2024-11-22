import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_json_application_v3_0_CommentTagLength =
  _test_json_application({
    version: "3.0",
    name: "CommentTagLength",
  })(typia.json.application<CommentTagLengthApplication, "3.0">());

interface CommentTagLengthApplication {
  insert(first: CommentTagLength): Promise<void>;
  reduce(
    first: CommentTagLength,
    second: CommentTagLength | null,
  ): Promise<CommentTagLength>;
  coalesce(
    first: CommentTagLength | null,
    second: CommentTagLength | null,
    third?: CommentTagLength | null,
  ): Promise<CommentTagLength | null>;
}
