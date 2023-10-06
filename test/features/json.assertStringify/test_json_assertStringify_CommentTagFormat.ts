import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_json_assertStringify_CommentTagFormat =
    _test_json_assertStringify("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )((input) => typia.json.assertStringify<CommentTagFormat>(input));
