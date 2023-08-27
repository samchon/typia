import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_assertParse_CommentTagAtomicUnion =
    _test_json_assertParse("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )(typia.json.createAssertParse<CommentTagAtomicUnion>());
