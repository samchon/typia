import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertQuery_ObjectHttpCommentTag = (): void =>
  _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.assertQuery<ObjectHttpCommentTag>(input),
  );
