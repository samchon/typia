import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { TypeGuardError } from "typia";

export const test_http_createAssertHeaders_ObjectHttpAtomic =
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpAtomic",
  )<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.http.createAssertHeaders<ObjectHttpAtomic>(),
  );
