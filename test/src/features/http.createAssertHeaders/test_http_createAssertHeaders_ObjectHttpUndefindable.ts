import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_http_createAssertHeaders_ObjectHttpUndefindable =
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.http.createAssertHeaders<ObjectHttpUndefindable>(),
  );
