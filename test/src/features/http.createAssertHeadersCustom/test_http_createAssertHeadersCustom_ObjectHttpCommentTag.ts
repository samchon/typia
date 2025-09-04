import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_createAssertHeadersCustom_ObjectHttpCommentTag =
  (): void =>
    _test_http_assertHeaders(CustomGuardError)(
      "ObjectHttpCommentTag",
    )<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
      typia.http.createAssertHeaders<ObjectHttpCommentTag>(
        (p) => new CustomGuardError(p),
      ),
    );
