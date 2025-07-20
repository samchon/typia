import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertHeaders_ObjectHttpCommentTag = (): void =>
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.assertHeaders<ObjectHttpCommentTag>(input),
  );
