import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertQueryCustom_ObjectHttpCommentTag =
  _test_http_assertQuery(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.assertQuery<ObjectHttpCommentTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
