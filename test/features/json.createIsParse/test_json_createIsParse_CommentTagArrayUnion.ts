import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_createIsParse_CommentTagArrayUnion = _test_json_isParse(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)(
  typia.json.createIsParse<CommentTagArrayUnion>(),
);
