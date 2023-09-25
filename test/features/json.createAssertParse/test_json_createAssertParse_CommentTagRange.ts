import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_json_createAssertParse_CommentTagRange =
    _test_json_assertParse("CommentTagRange")<CommentTagRange>(CommentTagRange)(
        typia.json.createAssertParse<CommentTagRange>(),
    );
