import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_http_createAssertHeadersCustom_ObjectHttpCommentTag =
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
    typia.http.createAssertHeaders<ObjectHttpCommentTag>(
      (p) => new CustomGuardError(p),
    ),
  );
