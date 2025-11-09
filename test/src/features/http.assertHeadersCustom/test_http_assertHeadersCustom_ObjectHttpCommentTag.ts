import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_http_assertHeadersCustom_ObjectHttpCommentTag = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpCommentTag",
  )<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.http.assertHeaders<ObjectHttpCommentTag>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
