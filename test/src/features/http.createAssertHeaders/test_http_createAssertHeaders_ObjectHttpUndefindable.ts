import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertHeaders_ObjectHttpUndefindable = (): void =>
  _test_http_assertHeaders(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
    typia.http.createAssertHeaders<ObjectHttpUndefindable>(),
  );
