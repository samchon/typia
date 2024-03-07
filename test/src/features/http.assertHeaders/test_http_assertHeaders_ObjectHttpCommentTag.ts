import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { TypeGuardError } from "typia";

export const test_http_assertHeaders_ObjectHttpCommentTag =
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.assertHeaders<ObjectHttpCommentTag>(input),
  );
