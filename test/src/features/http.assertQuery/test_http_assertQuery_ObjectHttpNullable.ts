import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_http_assertQuery_ObjectHttpNullable = (): void =>
  _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.http.assertQuery<ObjectHttpNullable>(input),
  );
