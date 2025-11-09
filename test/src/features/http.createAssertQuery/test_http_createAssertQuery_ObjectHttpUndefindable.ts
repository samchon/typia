import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

import { TypeGuardError } from "typia";

export const test_http_createAssertQuery_ObjectHttpUndefindable = (): void => _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.http.createAssertQuery<ObjectHttpUndefindable>());
