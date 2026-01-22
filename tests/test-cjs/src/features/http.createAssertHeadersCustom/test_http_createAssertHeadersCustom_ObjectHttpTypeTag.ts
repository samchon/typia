import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createAssertHeadersCustom_ObjectHttpTypeTag = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpTypeTag",
  )<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
    typia.http.createAssertHeaders<ObjectHttpTypeTag>(
      (p) => new CustomGuardError(p),
    ),
  );
