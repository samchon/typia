import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createAssertHeadersCustom_ObjectHttpConstant =
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)(
    typia.http.createAssertHeaders<ObjectHttpConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
