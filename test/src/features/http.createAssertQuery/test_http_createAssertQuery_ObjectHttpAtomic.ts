import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createAssertQuery_ObjectHttpAtomic = (): void =>
  _test_http_assertQuery(TypeGuardError)("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.http.createAssertQuery<ObjectHttpAtomic>());
