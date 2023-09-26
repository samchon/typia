import typia from "../../../src";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertHeaders_ObjectHttpCommentTag =
    _test_http_assertHeaders("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )((input) => typia.http.assertHeaders<ObjectHttpCommentTag>(input));
