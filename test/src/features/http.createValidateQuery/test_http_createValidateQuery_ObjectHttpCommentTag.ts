import typia from "typia";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createValidateQuery_ObjectHttpCommentTag = (): void => _test_http_validateQuery(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.http.createValidateQuery<ObjectHttpCommentTag>());
