import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_application_v3_1_CommentTagArrayUnion =
  _test_json_application({
    version: "3.1",
    name: "CommentTagArrayUnion",
  })(typia.json.application<CommentTagArrayUnionApplication, "3.1">());

interface CommentTagArrayUnionApplication {
  insert(first: CommentTagArrayUnion): Promise<void>;
  reduce(
    first: CommentTagArrayUnion,
    second: CommentTagArrayUnion | null,
  ): Promise<CommentTagArrayUnion>;
  coalesce(
    first: CommentTagArrayUnion | null,
    second: CommentTagArrayUnion | null,
    third?: CommentTagArrayUnion | null,
  ): Promise<CommentTagArrayUnion | null>;
}
