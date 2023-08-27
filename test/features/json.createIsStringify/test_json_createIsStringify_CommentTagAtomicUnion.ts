import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_json_isStringify_CommentTagAtomicUnion =
    _test_json_isStringify("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion,
    )(typia.json.createIsStringify<CommentTagAtomicUnion>());
