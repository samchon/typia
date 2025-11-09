import typia from "typia";

import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_validateHeaders_ObjectHttpCommentTag = (): void =>
  _test_http_validateHeaders("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input) => typia.http.validateHeaders<ObjectHttpCommentTag>(input));
