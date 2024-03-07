import typia from "typia";

import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_http_assertHeaders_ObjectHttpArray = _test_http_assertHeaders(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.http.assertHeaders<ObjectHttpArray>(input),
);
