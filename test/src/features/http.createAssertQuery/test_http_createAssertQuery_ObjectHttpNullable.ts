import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { TypeGuardError } from "typia";

export const test_http_createAssertQuery_ObjectHttpNullable = (): void => _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)(typia.http.createAssertQuery<ObjectHttpNullable>());
