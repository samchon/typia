import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_json_assertStringify_CommentTagDefault =
    _test_json_assertStringify("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault,
    )(typia.json.createAssertStringify<CommentTagDefault>());
