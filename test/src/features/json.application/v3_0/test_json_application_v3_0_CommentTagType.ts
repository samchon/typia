import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_json_application_v3_0_CommentTagType = _test_json_application(
  {
    version: "3.0",
    name: "CommentTagType",
  },
)(typia.json.application<CommentTagTypeApplication, "3.0">());

interface CommentTagTypeApplication {
  insert(first: CommentTagType): Promise<void>;
  reduce(
    first: CommentTagType,
    second: CommentTagType | null,
  ): Promise<CommentTagType>;
  coalesce(
    first: CommentTagType | null,
    second: CommentTagType | null,
    third?: CommentTagType | null,
  ): Promise<CommentTagType | null>;
}
