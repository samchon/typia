import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_assertQuery_ObjectHttpConstant = (): void =>
  _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.http.assertQuery<ObjectHttpConstant>(input),
  );
