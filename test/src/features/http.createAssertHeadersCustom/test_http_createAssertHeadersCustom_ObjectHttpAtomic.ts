import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createAssertHeadersCustom_ObjectHttpAtomic = (): void =>
  _test_http_assertHeaders(CustomGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.http.createAssertHeaders<ObjectHttpAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
