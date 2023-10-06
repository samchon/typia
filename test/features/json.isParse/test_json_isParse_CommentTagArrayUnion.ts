import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_json_isParse_CommentTagArrayUnion = _test_json_isParse(
    "CommentTagArrayUnion",
)<CommentTagArrayUnion>(CommentTagArrayUnion)((input) =>
    typia.json.isParse<CommentTagArrayUnion>(input),
);
