import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_stringify_CommentTagArrayUnion = _test_json_stringify(
  "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
  typia.json.stringify<CommentTagArrayUnion>(input),
);
