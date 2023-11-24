import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createHeaders_ObjectHttpCommentTag = _test_http_headers(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  typia.http.createHeaders<ObjectHttpCommentTag>(),
);
