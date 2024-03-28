import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertHeadersCustom_ObjectHttpArray =
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpArray",
  )<ObjectHttpArray>(ObjectHttpArray)(
    typia.http.createAssertHeaders<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
  );
