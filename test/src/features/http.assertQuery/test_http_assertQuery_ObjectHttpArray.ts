import typia from "typia";

import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_http_assertQuery_ObjectHttpArray = (): void => _test_http_assertQuery(TypeGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.http.assertQuery<ObjectHttpArray>(input));
