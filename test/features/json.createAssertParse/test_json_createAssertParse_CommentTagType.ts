import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_json_createAssertParse_CommentTagType =
    _test_json_assertParse("CommentTagType")<CommentTagType>(CommentTagType)(
        typia.json.createAssertParse<CommentTagType>(),
    );
