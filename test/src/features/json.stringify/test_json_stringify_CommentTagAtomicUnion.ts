import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_stringify_CommentTagAtomicUnion = (): void => _test_json_stringify(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(
    CommentTagAtomicUnion
)((input) => typia.json.stringify<CommentTagAtomicUnion>(input));
