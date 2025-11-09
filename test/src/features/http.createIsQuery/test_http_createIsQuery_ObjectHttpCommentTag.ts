import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createIsQuery_ObjectHttpCommentTag = (): void => _test_http_isQuery(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.http.createIsQuery<ObjectHttpCommentTag>());
