import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertQuery_ObjectHttpCommentTag =
    _test_http_assertQuery("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )((input) => typia.http.assertQuery<ObjectHttpCommentTag>(input));
