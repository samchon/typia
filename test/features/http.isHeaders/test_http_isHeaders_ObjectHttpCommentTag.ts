import typia from "../../../src";

import { _test_http_isHeaders } from "../../internal/_test_http_isHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_isHeaders_ObjectHttpCommentTag = _test_http_isHeaders(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)((input) => typia.http.isHeaders<ObjectHttpCommentTag>(input));
