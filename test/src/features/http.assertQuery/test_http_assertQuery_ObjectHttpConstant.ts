import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_http_assertQuery_ObjectHttpConstant = _test_http_assertQuery(
  TypeGuardError,
)("ObjectHttpConstant")<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.http.assertQuery<ObjectHttpConstant>(input),
);
