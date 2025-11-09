import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createAssertQueryCustom_ObjectHttpCommentTag =
  (): void =>
    _test_http_assertQuery(CustomGuardError)(
      "ObjectHttpCommentTag",
    )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
      typia.http.createAssertQuery<ObjectHttpCommentTag>(
        (p) => new CustomGuardError(p),
      ),
    );
