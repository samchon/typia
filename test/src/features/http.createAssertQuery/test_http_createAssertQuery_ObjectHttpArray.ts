import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createAssertQuery_ObjectHttpArray = (): void =>
  _test_http_assertQuery(TypeGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.http.createAssertQuery<ObjectHttpArray>());
